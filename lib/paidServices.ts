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
 *   nri-report   — NRI India Tax Health Check (USD), built automatically after payment
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
  | "itr-organizer-kit"
  | "freelancer-tax-kit"
  | "business-kit-bundle"
  | "business-tax-bundle"
  | "compliance-reminders"
  | "nri-health-check"
  | "nri-itr-usd"
  | "nri-property-itr-usd";

export type PaidServiceKind = "booking" | "report" | "nri-report" | "download" | "subscription";

/**
 * USD products need "International Payments" enabled on the Razorpay account
 * (raise it with Razorpay support). Until then their checkout shows the
 * WhatsApp fallback instead of the payment popup.
 */
export type Currency = "INR" | "USD";

export type PaidService = {
  key: PaidServiceKey;
  kind: PaidServiceKind;
  /** Shown on the Razorpay checkout and in the booking email. */
  name: string;
  /** Price in rupees — or in US dollars when currency is "USD" (GST, if applicable, included). */
  amount: number;
  /** Defaults to INR. */
  currency?: Currency;
  /** Short line for the Razorpay checkout popup. */
  checkoutDescription: string;
  /** Download kits only — ids from DIGITAL_FILES below. */
  files?: DigitalFileId[];
  /**
   * No longer sold — kept only so links in old orders keep working.
   * /api/create-order refuses new orders for retired items.
   */
  retired?: boolean;
};

export type DigitalFileId =
  | "gst-invoice-kit"
  | "bookkeeping-kit"
  | "notice-reply-kit"
  | "notice-recon-workbook"
  | "rent-receipt-kit"
  | "itr-organizer-kit"
  | "freelancer-tax-kit";

/** Files live in /private-downloads (NOT /public), served only via /api/download. */
export const DIGITAL_FILES: Record<
  DigitalFileId,
  { filename: string; label: string; contentType: string }
> = {
  "gst-invoice-kit": {
    filename: "GST-Compliance-Kit.xlsx",
    label: "GST Compliance Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "bookkeeping-kit": {
    filename: "Small-Business-Accounting-Kit.xlsx",
    label: "Small Business Accounting Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "notice-reply-kit": {
    filename: "GST-Notice-Reply-Formats.docx",
    label: "GST Notice Reply Formats — 14 drafts (Word)",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  "notice-recon-workbook": {
    filename: "GST-Notice-Reconciliation-Workbook.xlsx",
    label: "GST Notice Reconciliation Workbook (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "rent-receipt-kit": {
    filename: "Rent-Receipt-HRA-Kit.xlsx",
    label: "Rent Receipt & HRA Kit (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "itr-organizer-kit": {
    filename: "ITR-Filing-Checklist-Organizer.xlsx",
    label: "ITR Filing Checklist & Organizer (Excel)",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "freelancer-tax-kit": {
    filename: "Freelancer-Tax-Kit.xlsx",
    label: "Freelancer Tax Kit (Excel)",
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
    name: "GST Compliance Kit",
    amount: 999,
    checkoutDescription: "Invoice, registers, 3B working, ITC vs 2B, due dates",
    files: ["gst-invoice-kit"],
  },
  "bookkeeping-kit": {
    key: "bookkeeping-kit",
    kind: "download",
    name: "Small Business Accounting Kit",
    amount: 1499,
    checkoutDescription: "Books, P&L, receivables, balance sheet",
    files: ["bookkeeping-kit"],
  },
  "notice-reply-kit": {
    key: "notice-reply-kit",
    kind: "download",
    name: "GST Notice Reply Kit",
    amount: 2999,
    checkoutDescription: "14 Word reply formats + reconciliation workbook",
    files: ["notice-reply-kit", "notice-recon-workbook"],
  },
  "rent-receipt-kit": {
    key: "rent-receipt-kit",
    kind: "download",
    name: "Rent Receipt & HRA Kit",
    amount: 99,
    checkoutDescription: "12 auto-filled rent receipts + HRA check",
    files: ["rent-receipt-kit"],
  },
  "itr-organizer-kit": {
    key: "itr-organizer-kit",
    kind: "download",
    name: "ITR Filing Checklist & Organizer",
    amount: 399,
    checkoutDescription: "Which ITR form, document checklist, AIS match",
    files: ["itr-organizer-kit"],
  },
  "freelancer-tax-kit": {
    key: "freelancer-tax-kit",
    kind: "download",
    name: "Freelancer Tax Kit",
    amount: 999,
    checkoutDescription: "Export invoice, presumptive tax, advance tax",
    files: ["freelancer-tax-kit"],
  },
  "business-tax-bundle": {
    key: "business-tax-bundle",
    kind: "download",
    name: "Complete Business Tax Bundle (4 kits)",
    amount: 2499,
    checkoutDescription: "GST, Accounting, ITR & Freelancer kits",
    files: ["gst-invoice-kit", "bookkeeping-kit", "itr-organizer-kit", "freelancer-tax-kit"],
  },
  // First-edition bundle (₹799, Sept 2026). Not sold any more — kept so old buyers' links still work.
  "business-kit-bundle": {
    key: "business-kit-bundle",
    kind: "download",
    name: "Complete Business Kit Bundle (all 4 kits)",
    amount: 799,
    checkoutDescription: "All 4 Excel & Word kits",
    files: ["gst-invoice-kit", "bookkeeping-kit", "notice-reply-kit", "rent-receipt-kit"],
    retired: true,
  },
  "nri-health-check": {
    key: "nri-health-check",
    kind: "nri-report",
    name: "NRI India Tax Health Check",
    amount: 59,
    currency: "USD",
    checkoutDescription: "Your personalised India tax report as an NRI",
  },
  "nri-itr-usd": {
    key: "nri-itr-usd",
    kind: "booking",
    name: "NRI India Income Tax Return (filing)",
    amount: 119,
    currency: "USD",
    checkoutDescription: "India ITR filing for NRIs — rent, interest, dividends",
  },
  "nri-property-itr-usd": {
    key: "nri-property-itr-usd",
    kind: "booking",
    name: "NRI ITR after selling property in India",
    amount: 229,
    currency: "USD",
    checkoutDescription: "Capital gains ITR and TDS refund after a property sale",
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
  "business-tax-bundle",
  "gst-invoice-kit",
  "bookkeeping-kit",
  "itr-organizer-kit",
  "freelancer-tax-kit",
  "notice-reply-kit",
  "rent-receipt-kit",
];

/** Kits inside the store bundle — used for the "save ₹…" badge. */
export const BUNDLE_KEY: PaidServiceKey = "business-tax-bundle";
export const BUNDLE_ITEMS: PaidServiceKey[] = [
  "gst-invoice-kit",
  "bookkeeping-kit",
  "itr-organizer-kit",
  "freelancer-tax-kit",
];

export function getPaidService(key: unknown): PaidService | null {
  if (typeof key !== "string") return null;
  return Object.prototype.hasOwnProperty.call(PAID_SERVICES, key)
    ? PAID_SERVICES[key as PaidServiceKey]
    : null;
}

/** "₹249" or "US$59" — use everywhere a price is shown. */
export function formatPrice(item: Pick<PaidService, "amount" | "currency">): string {
  return item.currency === "USD"
    ? `US$${item.amount.toLocaleString("en-US")}`
    : `₹${item.amount.toLocaleString("en-IN")}`;
}
