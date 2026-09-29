import nodemailer, { type Transporter } from "nodemailer";

/**
 * Shared SMTP sender for paid-product emails — SERVER ONLY.
 * Uses the same Hostinger mailbox and Vercel variables as /api/lead:
 *   SMTP_PASS (required), SMTP_USER, SMTP_HOST, SMTP_PORT, LEAD_TO, LEAD_BCC
 */

export const FIRM_EMAIL = "info@rajputlalitassociates.in";
export const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  const pass = process.env.SMTP_PASS;
  if (!pass) throw new Error("SMTP_PASS is not set");
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER || FIRM_EMAIL, pass },
    });
  }
  return transporter;
}

export type Mail = { to: string; subject: string; html: string; text: string; replyTo?: string };

export async function sendMail(mail: Mail): Promise<void> {
  const user = process.env.SMTP_USER || FIRM_EMAIL;
  await getTransporter().sendMail({
    from: `"Rajput Lalit & Associates" <${user}>`,
    ...mail,
  });
}

/** Copy of every sale to the firm inbox. */
export async function notifyFirm(subject: string, lines: [string, string][]): Promise<void> {
  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937">
<h2 style="color:#002b5c;margin:0 0 12px">${escapeHtml(subject)}</h2>
<table cellpadding="6" style="border-collapse:collapse">${lines
    .map(
      ([k, v]) =>
        `<tr><td style="font-weight:bold;border-bottom:1px solid #e5e7eb">${escapeHtml(k)}</td><td style="border-bottom:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
    )
    .join("")}</table></div>`;
  const user = process.env.SMTP_USER || FIRM_EMAIL;
  await getTransporter().sendMail({
    from: `"Website Sales" <${user}>`,
    to: process.env.LEAD_TO || FIRM_EMAIL,
    bcc: process.env.LEAD_BCC || undefined,
    subject,
    text,
    html,
  });
}

/** Simple branded wrapper for customer emails. */
export function emailLayout(title: string, bodyHtml: string): string {
  return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#1f2937;max-width:600px;margin:0 auto">
<div style="background:#002b5c;color:#fff;padding:18px 24px;border-radius:10px 10px 0 0">
<strong style="font-size:18px">Rajput Lalit &amp; Associates</strong><br><span style="color:#f0b84b">${escapeHtml(title)}</span>
</div>
<div style="border:1px solid #e5e7eb;border-top:0;padding:24px;border-radius:0 0 10px 10px">${bodyHtml}
<p style="margin-top:28px;font-size:13px;color:#6b7280">Questions? Reply to this email or WhatsApp <a href="https://wa.me/919354953603">+91 93549 53603</a>.<br>Rajput Lalit &amp; Associates, Ambala City, Haryana</p>
</div></div>`;
}

export function button(href: string, label: string): string {
  return `<p><a href="${escapeHtml(href)}" style="display:inline-block;background:#d99a2b;color:#fff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:8px">${escapeHtml(label)}</a></p>`;
}
