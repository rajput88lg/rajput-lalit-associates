import crypto from "crypto";

/**
 * Signed links for paid products — SERVER ONLY.
 *
 * No database: a buyer's access link is just the Razorpay order id plus an
 * HMAC of it, signed with RAZORPAY_KEY_SECRET (already set on Vercel). Nobody
 * can make a valid link for an order id without the secret, and the link
 * keeps working forever so buyers can re-open their report or re-download.
 */

function secret(): string {
  const s = process.env.RAZORPAY_KEY_SECRET;
  if (!s) throw new Error("RAZORPAY_KEY_SECRET is missing");
  return s;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex").slice(0, 32);
}

function same(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

const ORDER_ID_RE = /^order_[A-Za-z0-9]{6,40}$/;

export function isOrderId(v: unknown): v is string {
  return typeof v === "string" && ORDER_ID_RE.test(v);
}

/** Token for /purchase?order=...&t=... */
export function accessToken(orderId: string): string {
  return sign(`access|${orderId}`);
}

export function checkAccessToken(orderId: string, token: unknown): boolean {
  return typeof token === "string" && same(accessToken(orderId), token);
}

/** Token for /api/download?order=...&f=...&t=... */
export function downloadToken(orderId: string, fileId: string): string {
  return sign(`dl|${orderId}|${fileId}`);
}

export function checkDownloadToken(orderId: string, fileId: string, token: unknown): boolean {
  return typeof token === "string" && same(downloadToken(orderId, fileId), token);
}

/** Razorpay checkout signature: HMAC(order_id|payment_id). */
export function checkPaymentSignature(orderId: string, paymentId: unknown, signature: unknown): boolean {
  if (typeof paymentId !== "string" || typeof signature !== "string") return false;
  const expected = crypto
    .createHmac("sha256", secret())
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
  return same(expected, signature);
}

export const SITE_URL = "https://www.rajputlalitassociates.in";

export function purchaseUrl(orderId: string): string {
  return `${SITE_URL}/purchase?order=${orderId}&t=${accessToken(orderId)}`;
}

export function downloadUrl(orderId: string, fileId: string, absolute = false): string {
  const path = `/api/download?order=${orderId}&f=${fileId}&t=${downloadToken(orderId, fileId)}`;
  return absolute ? SITE_URL + path : path;
}
