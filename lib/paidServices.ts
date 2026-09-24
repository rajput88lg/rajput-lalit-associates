/**
 * Paid booking catalog — single source of truth for prices.
 *
 * The price is ALWAYS read on the server (app/api/create-order) from this
 * list using the service key the browser sends. The browser never sends an
 * amount, so nobody can edit the page and pay less.
 *
 * To change a price: edit `amount` (in rupees) here — the page, the
 * Razorpay order and the confirmation email all update together.
 */

export type PaidServiceKey = "tax-call" | "website-discussion";

export type PaidService = {
  key: PaidServiceKey;
  /** Shown on the Razorpay checkout and in the booking email. */
  name: string;
  /** Price in rupees (GST, if applicable, is included in this amount). */
  amount: number;
  /** Short line for the Razorpay checkout popup. */
  checkoutDescription: string;
};

export const PAID_SERVICES: Record<PaidServiceKey, PaidService> = {
  "tax-call": {
    key: "tax-call",
    name: "Quick Tax Consultation (15-min call)",
    amount: 599,
    checkoutDescription: "15-minute call with a tax expert",
  },
  "website-discussion": {
    key: "website-discussion",
    name: "Website Project Discussion",
    amount: 999,
    checkoutDescription: "Website requirements & scope discussion",
  },
};

export function getPaidService(key: unknown): PaidService | null {
  if (typeof key !== "string") return null;
  return Object.prototype.hasOwnProperty.call(PAID_SERVICES, key)
    ? PAID_SERVICES[key as PaidServiceKey]
    : null;
}
