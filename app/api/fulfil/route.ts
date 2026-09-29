import { NextResponse } from "next/server";
import Razorpay from "razorpay";

import { DIGITAL_FILES, getPaidService, type PaidService } from "@/lib/paidServices";
import { buildTaxReport, decodeTaxInput } from "@/lib/taxReport";
import {
  accessToken,
  checkAccessToken,
  checkPaymentSignature,
  downloadUrl,
  isOrderId,
  purchaseUrl,
} from "@/lib/purchaseTokens";
import {
  allUpcomingItems,
  parseCategories,
  REMINDER_CATEGORIES,
  SUBSCRIPTION_DAYS,
} from "@/lib/reminderSchedule";
import { formatDeadlineDate } from "@/lib/taxDeadlines";
import { button, EMAIL_RE, emailLayout, escapeHtml, notifyFirm, sendMail } from "@/lib/mailer";

/**
 * POST /api/fulfil — delivers a paid report / download / subscription.
 *
 * Two ways in:
 *   1. Right after checkout: { order_id, payment_id, signature } — the
 *      Razorpay signature proves payment. Emails go out on this path only.
 *   2. Returning buyer: { order_id, token } — token from the emailed link.
 *
 * Everything else (which product, the tax inputs, the buyer's email) is read
 * from the Razorpay order itself, never from the browser.
 */
export const runtime = "nodejs";

type Notes = Record<string, string>;

function bad(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return bad("Payment is not configured.", 500);
  }

  const body = await request.json().catch(() => ({}));
  const orderId = body?.order_id;
  if (!isOrderId(orderId)) return bad("Invalid order.");

  const freshPayment = checkPaymentSignature(orderId, body?.payment_id, body?.signature);
  if (!freshPayment && !checkAccessToken(orderId, body?.token)) {
    return bad("This link is not valid.", 403);
  }

  let notes: Notes;
  let createdAt: number;
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const order = await razorpay.orders.fetch(orderId);
    notes = Object.fromEntries(
      Object.entries(order.notes || {}).map(([k, v]) => [k, String(v)])
    );
    createdAt = order.created_at;
  } catch (err) {
    console.error("[fulfil] order fetch failed:", err);
    return bad("Could not load your order. Please try again in a minute.", 502);
  }

  const service = getPaidService(notes.service);
  if (!service || service.kind === "booking") return bad("Unknown product.");

  const customer = { name: notes.name || "", email: notes.email || "", mobile: notes.mobile || "" };
  const token = accessToken(orderId);
  let payload: Record<string, unknown>;

  if (service.kind === "report") {
    const input = decodeTaxInput(notes.inputs);
    if (!input) return bad("Report details missing in the order — please WhatsApp us.", 500);
    payload = { kind: "report", report: buildTaxReport(input), input };
  } else if (service.kind === "download") {
    payload = {
      kind: "download",
      files: (service.files || []).map((f) => ({
        id: f,
        label: DIGITAL_FILES[f].label,
        url: downloadUrl(orderId, f),
      })),
    };
  } else {
    const categories = parseCategories(notes.categories);
    const validTill = new Date((createdAt + SUBSCRIPTION_DAYS * 86400) * 1000).toISOString().slice(0, 10);
    payload = {
      kind: "subscription",
      categories,
      validTill,
      upcoming: allUpcomingItems()
        .filter((i) => categories.includes(i.category))
        .slice(0, 8),
    };
  }

  if (freshPayment) {
    await sendEmails(service, orderId, String(body.payment_id), customer, payload).catch((err) =>
      // Delivery is on screen already; a failed email must not block the buyer.
      console.error("[fulfil] email failed:", err)
    );
  }

  return NextResponse.json({
    success: true,
    orderId,
    token,
    product: { key: service.key, name: service.name, amount: service.amount },
    customer: { name: customer.name },
    ...payload,
  });
}

async function sendEmails(
  service: PaidService,
  orderId: string,
  paymentId: string,
  customer: { name: string; email: string; mobile: string },
  payload: Record<string, unknown>
) {
  const link = purchaseUrl(orderId);
  const hi = `<p>Namaste ${escapeHtml(customer.name || "")},</p><p>Thank you for your purchase of <strong>${escapeHtml(service.name)}</strong> (₹${service.amount}).</p>`;
  let body = "";
  let text = "";

  if (payload.kind === "report") {
    body = `${hi}<p>Your personalised tax saving report is ready. Open it any time from the link below — you can print it or save it as PDF.</p>${button(link, "Open my tax report")}`;
    text = `Your tax saving report: ${link}`;
  } else if (payload.kind === "download") {
    const files = (service.files || []).map((f) => ({
      label: DIGITAL_FILES[f].label,
      url: downloadUrl(orderId, f, true),
    }));
    body = `${hi}<p>Your files are ready to download:</p><ul>${files
      .map((f) => `<li><a href="${escapeHtml(f.url)}">${escapeHtml(f.label)}</a></li>`)
      .join("")}</ul><p>These links keep working, so save this email. You can also open all downloads here:</p>${button(link, "My downloads")}`;
    text = files.map((f) => `${f.label}: ${f.url}`).join("\n") + `\nAll downloads: ${link}`;
  } else {
    const cats = (payload.categories as string[])
      .map((c) => REMINDER_CATEGORIES.find((x) => x.key === c)?.label || c)
      .join(", ");
    const upcoming = (payload.upcoming as { date: string; title: string }[])
      .slice(0, 5)
      .map((u) => `<li><strong>${formatDeadlineDate(u.date)}</strong> — ${escapeHtml(u.title)}</li>`)
      .join("");
    body = `${hi}<p>Your compliance reminders are now active till <strong>${formatDeadlineDate(String(payload.validTill))}</strong> for: <strong>${escapeHtml(cats)}</strong>.</p><p>We will email you 7 days and again 2 days before each due date. Coming up next:</p><ul>${upcoming}</ul>${button(link, "View my subscription")}<p style="font-size:13px;color:#6b7280">Tip: add info@rajputlalitassociates.in to your contacts so reminders never land in spam.</p>`;
    text = `Reminders active till ${payload.validTill} for ${cats}. Details: ${link}`;
  }

  const jobs: Promise<void>[] = [
    notifyFirm(`New sale: ${service.name} — ₹${service.amount}`, [
      ["Product", service.name],
      ["Amount", `₹${service.amount}`],
      ["Name", customer.name],
      ["Mobile", customer.mobile],
      ["Email", customer.email],
      ["Razorpay order", orderId],
      ["Razorpay payment", paymentId],
    ]),
  ];
  if (EMAIL_RE.test(customer.email)) {
    jobs.push(
      sendMail({
        to: customer.email,
        subject: `Your ${service.name} — Rajput Lalit & Associates`,
        html: emailLayout(service.name, body),
        text: `Namaste ${customer.name},\n\nThank you for your purchase of ${service.name}.\n\n${text}\n\nRajput Lalit & Associates\nWhatsApp +91 93549 53603`,
      })
    );
  }
  const results = await Promise.allSettled(jobs);
  results.forEach((r) => r.status === "rejected" && console.error("[fulfil] mail:", r.reason));
}
