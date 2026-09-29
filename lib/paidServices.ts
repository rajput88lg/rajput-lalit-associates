/**
 * Paid catalog — single source of truth for prices.
 *
 * The price is ALWAYS read on the server (app/api/create-order) from this
 * list using the service key the browser sends. The browser never sends an
 * amount, so nobody can edit the page and pay less.
 *
 * To change a price: edit `amount` (in rupees) here — the page, the
 * Razorpay order and the confirmation email all update together.
 *
 * kind:
 *   booking      — a call we schedule manually (old flow, /appointment/success)
 *   report       — Personal Tax Saving Report, built automatically after payment
 *   download     — Excel / Word kits, delivered as secure download links
 *   subscription — 12-month compliance reminder emails (no auto-renewal)
 */

export type PaidServiceKey =
  | "tax-call"
  | "website-discussion"
  | "tax-report"
  | "gst-invoice-kit"
  | "bookkeeping-kit"
  | "notice-reply-kit"
  | "rent-receipt-kit"
  | "business-kit-bundle"
  | "compliance-reminders";

export type PaidServiceKind = "booking" | "report" | "download" | "subscription";

export type PaidService = {
  key: PaidServiceKey;
  kind: PaidServiceKind;
  /** Shown on the Razorpay checkout and in the booking email. */
  name: string;
  /** Price in rupees (GST, if applicable, is included in this amount). */
  amount: number;
  /** Short line for the Razorpay checkout popup. */
  checkoutDescription: string;
  /** Download kits only — ids from DIGITAL_FILES below. */
  files?: DigitalFileId[];
};

export type DigitalFileId =
  | "gst-invoice-kit"
  | "bookkeeping-kit"
  | "notice-reply-kit"
  | "rent-receipt-kit";

/** Files live in /private-downloads (NOT /public), served only via /api/download. */
export const DIGITAL_FILES: Record<
  DigitalFileId,
  { filename: string; label: string; contentType: string }
> = {
  "gst-invoice-kit": {
    filename: "GST-Invoice-Billing-Kit.xlsx",
    label: "GST Invoice & Billing Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "bookkeeping-kit": {
    filename: "Small-Business-Bookkeeping-Kit.xlsx",
    label: "Small Business Bookkeeping Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "notice-reply-kit": {
    filename: "GST-Notice-Reply-Formats.docx",
    label: "GST Notice Reply Formats (Word)",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  "rent-receipt-kit": {
    filename: "Rent-Receipt-HRA-Kit.xlsx",
    label: "Rent Receipt & HRA Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
};

export const PAID_SERVICES: Record<PaidServiceKey, PaidService> = {
  "tax-call": {
    key: "tax-call",
    kind: "booking",
    name: "Quick Tax Consultation (15-min call)",
    amount: 599,
    checkoutDescription: "15-minute call with a tax expert",
  },
  "website-discussion": {
    key: "website-discussion",
    kind: "booking",
    name: "Website Project Discussion",
    amount: 999,
    checkoutDescription: "Website requirements & scope discussion",
  },
  "tax-report": {
    key: "tax-report",
    kind: "report",
    name: "Personal Tax Saving Report (FY 2026-27)",
    amount: 249,
    checkoutDescription: "Your personalised tax saving report",
  },
  "gst-invoice-kit": {
    key: "gst-invoice-kit",
    kind: "download",
    name: "GST Invoice & Billing Kit",
    amount: 199,
    checkoutDescription: "Excel GST invoice + sales register",
    files: ["gst-invoice-kit"],
  },
  "bookkeeping-kit": {
    key: "bookkeeping-kit",
    kind: "download",
    name: "Small Business Bookkeeping Kit",
    amount: 299,
    checkoutDescription: "Excel cash book, registers & monthly P&L",
    files: ["bookkeeping-kit"],
  },
  "notice-reply-kit": {
    key: "notice-reply-kit",
    kind: "download",
    name: "GST Notice Reply Formats",
    amount: 499,
    checkoutDescription: "Word formats for common GST notices",
    files: ["notice-reply-kit"],
  },
  "rent-receipt-kit": {
    key: "rent-receipt-kit",
    kind: "download",
    name: "Rent Receipt & HRA Kit",
    amount: 99,
    checkoutDescription: "12 auto-filled rent receipts + HRA check",
    files: ["rent-receipt-kit"],
  },
  "business-kit-bundle": {
    key: "business-kit-bundle",
    kind: "download",
    name: "Complete Business Kit Bundle (all 4 kits)",
    amount: 799,
    checkoutDescription: "All 4 Excel & Word kits",
    files: ["gst-invoice-kit", "bookkeeping-kit", "notice-reply-kit", "rent-receipt-kit"],
  },
  "compliance-reminders": {
    key: "compliance-reminders",
    kind: "subscription",
    name: "Compliance Reminder Service (12 months)",
    amount: 999,
    checkoutDescription: "GST, TDS & income tax due date reminders for 1 year",
  },
};

/** Download kits in the order they appear on the store page. */
export const DOWNLOAD_PRODUCTS: PaidServiceKey[] = [
  "gst-invoice-kit",
  "bookkeeping-kit",
  "notice-reply-kit",
  "rent-receipt-kit",
  "business-kit-bundle",
];

export function getPaidService(key: unknown): PaidService | null {
  if (typeof key !== "string") return null;
  return Object.prototype.hasOwnProperty.call(PAID_SERVICES, key)
    ? PAID_SERVICES[key as PaidServiceKey]
    : null;
}
