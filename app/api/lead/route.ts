import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/lead — emails every website enquiry to the firm's inbox.
 *
 * Sends through the Hostinger mailbox info@rajputlalitassociates.in.
 * Vercel environment variables:
 *   SMTP_PASS   (required) password of the info@ mailbox
 *   SMTP_USER   (optional) default info@rajputlalitassociates.in
 *   SMTP_HOST   (optional) default smtp.hostinger.com
 *   SMTP_PORT   (optional) default 465 (SSL); 587 uses STARTTLS
 *   LEAD_TO     (optional) default info@rajputlalitassociates.in
 *   LEAD_BCC    (optional) extra copy, e.g. a personal Gmail
 */
export const runtime = "nodejs";

const DEFAULT_EMAIL = "info@rajputlalitassociates.in";
const MAX_FIELD = 8000;
const MAX_FIELDS = 20;

// Small per-IP limiter (resets on cold start) — enough for spam bursts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(v: unknown, max = MAX_FIELD): string {
  if (typeof v !== "string" && typeof v !== "number") return "";
  return String(v).replace(/\r\n?/g, "\n").trim().slice(0, max);
}

function oneLine(v: string, max = 120): string {
  return v.replace(/[\r\n]+/g, " ").slice(0, max);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

const LABELS: Record<string, string> = {
  name: "Name",
  mobile: "Mobile",
  phone: "Mobile",
  email: "Email",
  service: "Service",
  date: "Preferred date",
  time: "Preferred time",
  payment_id: "Lead type",
  message: "Message",
};

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: { source?: unknown; page?: unknown; fields?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const source = oneLine(clean(body.source, 60)) || "website";
  const page = oneLine(clean(body.page, 200));
  const raw =
    body.fields && typeof body.fields === "object" ? (body.fields as Record<string, unknown>) : {};

  // Honeypot filled in = bot. Pretend success, send nothing.
  if (clean(raw.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const fields: [string, string][] = [];
  for (const [key, value] of Object.entries(raw).slice(0, MAX_FIELDS)) {
    if (key === "company_website") continue;
    const v = clean(value);
    if (v) fields.push([oneLine(key, 40), v]);
  }
  const get = (k: string) => fields.find(([key]) => key === k)?.[1] || "";

  const name = oneLine(get("name")) || "Website visitor";
  const mobile = oneLine(get("mobile") || get("phone"), 30);
  const email = oneLine(get("email"), 120);
  if (!mobile && !email) {
    return NextResponse.json({ ok: false, error: "Mobile or email required" }, { status: 400 });
  }

  const pass = process.env.SMTP_PASS;
  if (!pass) {
    console.error("[lead] SMTP_PASS is not set — lead not emailed:", { source, name, mobile, email });
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 500 });
  }
  const user = process.env.SMTP_USER || DEFAULT_EMAIL;

  const service = oneLine(get("service"), 80);
  const subject = `New website enquiry: ${service || source} — ${name}`;
  const when = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const rows = fields.map(([k, v]) => [LABELS[k] || k, v] as const);
  rows.push(["Form", source], ["Page", page || "-"], ["Received (IST)", when]);

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937">
<h2 style="color:#002b5c;margin:0 0 12px">New enquiry from rajputlalitassociates.in</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #e5e7eb">${escapeHtml(
          k
        )}</td><td style="white-space:pre-wrap;border-bottom:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
    )
    .join("")}</table>
${mobile ? `<p><a href="https://wa.me/${escapeHtml(mobile.replace(/\D/g, "").replace(/^(\d{10})$/, "91$1"))}">Reply on WhatsApp</a></p>` : ""}
</div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (Number(process.env.SMTP_PORT) || 465) === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${user}>`,
      to: process.env.LEAD_TO || DEFAULT_EMAIL,
      bcc: process.env.LEAD_BCC || undefined,
      replyTo: EMAIL_RE.test(email) ? email : undefined,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] sendMail failed:", err, { source, name, mobile, email });
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
