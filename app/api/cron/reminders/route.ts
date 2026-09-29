import { NextResponse } from "next/server";
import Razorpay from "razorpay";

import {
  parseCategories,
  remindersDueToday,
  RENEWAL_NOTICE_DAYS,
  SUBSCRIPTION_DAYS,
  type ReminderCategory,
} from "@/lib/reminderSchedule";
import { formatDeadlineDate, WHATSAPP_NUMBER } from "@/lib/taxDeadlines";
import { button, EMAIL_RE, emailLayout, escapeHtml, notifyFirm, sendMail } from "@/lib/mailer";
import { purchaseUrl, SITE_URL } from "@/lib/purchaseTokens";

/**
 * GET /api/cron/reminders — runs every morning (vercel.json, 08:00 IST).
 *
 * No database: the subscriber list IS the list of paid Razorpay orders for
 * "compliance-reminders" from the last 365 days. Each subscriber gets one
 * email listing the deadlines due in 7 or 2 days for their chosen categories,
 * and a renewal email 14 days before their year ends.
 *
 * Security: Vercel Cron sends "Authorization: Bearer <CRON_SECRET>".
 * Add ?dry=1 to see who would get what without sending anything.
 */
export const runtime = "nodejs";
export const maxDuration = 60;

type Subscriber = {
  orderId: string;
  name: string;
  email: string;
  categories: ReminderCategory[];
  daysLeft: number;
};

async function paidSubscribers(): Promise<Subscriber[]> {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
  });
  const now = Math.floor(Date.now() / 1000);
  const from = now - SUBSCRIPTION_DAYS * 86400;
  const byEmail = new Map<string, Subscriber>();

  for (let skip = 0; skip < 20000; skip += 100) {
    const page = await razorpay.orders.all({ from, to: now, count: 100, skip });
    for (const o of page.items) {
      const notes = (o.notes || {}) as Record<string, string | number>;
      if (o.status !== "paid" || notes.service !== "compliance-reminders") continue;
      const email = String(notes.email || "").trim().toLowerCase();
      if (!EMAIL_RE.test(email)) continue;
      const daysLeft = Math.floor((o.created_at + SUBSCRIPTION_DAYS * 86400 - now) / 86400);
      const existing = byEmail.get(email);
      // Someone who renewed early has two orders — keep the one lasting longest.
      if (!existing || daysLeft > existing.daysLeft) {
        byEmail.set(email, {
          orderId: o.id,
          name: String(notes.name || ""),
          email,
          categories: parseCategories(String(notes.categories || "")),
          daysLeft,
        });
      }
    }
    if (page.items.length < 100) break;
  }
  return Array.from(byEmail.values());
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ ok: false, error: "Razorpay not configured" }, { status: 500 });
  }

  const dry = new URL(request.url).searchParams.get("dry") === "1";
  const due = remindersDueToday();

  let subscribers: Subscriber[];
  try {
    subscribers = await paidSubscribers();
  } catch (err) {
    console.error("[cron/reminders] Razorpay list failed:", err);
    return NextResponse.json({ ok: false, error: "Could not load subscribers" }, { status: 502 });
  }

  const plan: { email: string; reminders: string[]; renewal: boolean }[] = [];
  let sent = 0;
  let failed = 0;

  for (const s of subscribers) {
    const items = due.filter((d) => s.categories.includes(d.category));
    const renewal = s.daysLeft === RENEWAL_NOTICE_DAYS;
    if (!items.length && !renewal) continue;
    plan.push({ email: s.email, reminders: items.map((i) => i.id), renewal });
    if (dry) continue;

    try {
      if (items.length) {
        const rows = items
          .map(
            (i) => `<tr><td style="padding:10px;border-bottom:1px solid #e5e7eb;vertical-align:top;white-space:nowrap"><strong>${formatDeadlineDate(i.date)}</strong><br><span style="color:${i.daysLeft <= 2 ? "#b91c1c" : "#b45309"};font-size:13px">${i.daysLeft} days left</span></td>
<td style="padding:10px;border-bottom:1px solid #e5e7eb"><strong>${escapeHtml(i.title)}</strong><br><span style="font-size:13px;color:#4b5563">${escapeHtml(i.who)}</span>${i.ifMissed ? `<br><span style="font-size:13px;color:#b91c1c">If missed: ${escapeHtml(i.ifMissed)}</span>` : ""}${i.link ? `<br><a style="font-size:13px" href="${SITE_URL}${escapeHtml(i.link)}">Read more</a>` : ""}</td></tr>`
          )
          .join("");
        const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Namaste, mujhe ye filing karwani hai: ${items.map((i) => i.title).join(", ")}`)}`;
        await sendMail({
          to: s.email,
          subject: `Reminder: ${items[0].title} — due ${formatDeadlineDate(items[0].date)}${items.length > 1 ? ` (+${items.length - 1} more)` : ""}`,
          html: emailLayout(
            "Compliance reminder",
            `<p>Namaste ${escapeHtml(s.name)},</p><p>These due dates are coming up:</p><table style="border-collapse:collapse;width:100%">${rows}</table>${button(wa, "Get it filed by us (WhatsApp)")}<p style="font-size:13px;color:#6b7280">Government sometimes extends due dates — we update our calendar when that happens. Your reminder service is active for another ${s.daysLeft} days.</p>`
          ),
          text:
            `Namaste ${s.name},\n\nComing up:\n` +
            items.map((i) => `- ${formatDeadlineDate(i.date)}: ${i.title} (${i.daysLeft} days left)`).join("\n") +
            `\n\nNeed help filing? WhatsApp +91 93549 53603\nRajput Lalit & Associates`,
        });
      }
      if (renewal) {
        await sendMail({
          to: s.email,
          subject: "Your compliance reminders end in 14 days — renew for another year",
          html: emailLayout(
            "Renewal due",
            `<p>Namaste ${escapeHtml(s.name)},</p><p>Your 12-month Compliance Reminder Service ends in ${RENEWAL_NOTICE_DAYS} days. Renew now so you don't miss a single GST, TDS or income tax due date.</p>${button(`${SITE_URL}/compliance-reminders`, "Renew for 1 year")}<p style="font-size:13px"><a href="${escapeHtml(purchaseUrl(s.orderId))}">View your current subscription</a></p>`
          ),
          text: `Your compliance reminders end in ${RENEWAL_NOTICE_DAYS} days. Renew: ${SITE_URL}/compliance-reminders`,
        });
      }
      sent++;
    } catch (err) {
      failed++;
      console.error("[cron/reminders] send failed:", s.email, err);
    }
  }

  if (!dry && failed > 0) {
    await notifyFirm(`Reminder emails: ${failed} failed`, [
      ["Sent", String(sent)],
      ["Failed", String(failed)],
      ["Check", "Vercel logs → /api/cron/reminders"],
    ]).catch(() => {});
  }

  return NextResponse.json({
    ok: true,
    dry,
    subscribers: subscribers.length,
    dueToday: due.map((d) => `${d.date} ${d.id}`),
    emails: plan.length,
    sent,
    failed,
    ...(dry ? { plan } : {}),
  });
}
