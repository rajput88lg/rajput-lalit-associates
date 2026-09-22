/**
 * Tax & GST deadline calendar — single source of truth for:
 *   - /tax-deadlines page (full calendar)
 *   - DeadlineBar (site-wide strip showing the next deadline)
 *
 * Dates verified 23 September 2026. Government extensions are announced
 * from time to time — when one comes, just edit the date here and every
 * place on the site updates together.
 *
 * After the last date here passes, DeadlineBar hides itself automatically,
 * so stale deadlines never show. Add next season's dates when ready.
 */

export type TaxDeadline = {
  id: string;
  /** ISO date (YYYY-MM-DD), treated as the end of that day in India. */
  date: string;
  title: string;
  /** Short version for the site-wide bar. */
  short: string;
  who: string;
  /** What happens if missed. */
  ifMissed?: string;
  note?: string;
  link?: { href: string; label: string };
  category: "Income Tax" | "TDS" | "GST" | "ROC";
};

export const TAX_DEADLINES: TaxDeadline[] = [
  {
    id: "tax-audit-report",
    date: "2026-09-30",
    title: "Tax Audit Report (Form 3CA/3CB + 3CD) — FY 2025-26",
    short: "Tax audit report (FY 2025-26)",
    who: "Businesses and professionals covered by tax audit under Section 44AB",
    ifMissed: "Penalty of 0.5% of turnover, up to ₹1.5 lakh (Section 271B)",
    note: "No CBDT extension had been announced as of 19 September 2026.",
    link: { href: "/blog/tax-audit-section-44ab-applicability-turnover-limit", label: "Tax audit — who needs it" },
    category: "Income Tax",
  },
  {
    id: "llp-form-8",
    date: "2026-10-30",
    title: "LLP Form 8 — Statement of Account & Solvency",
    short: "LLP Form 8",
    who: "Every LLP, even with no business during the year",
    ifMissed: "Additional fee that keeps growing with the delay, with no upper cap",
    link: { href: "/blog/roc-annual-compliance-calendar-pvt-ltd-llp", label: "ROC compliance calendar" },
    category: "ROC",
  },
  {
    id: "aoc-4",
    date: "2026-10-30",
    title: "AOC-4 — Financial Statements to ROC",
    short: "AOC-4 (company accounts to ROC)",
    who: "Companies that held their AGM on 30 September 2026 (due within 30 days of the AGM)",
    ifMissed: "Additional fee per day of delay",
    link: { href: "/blog/roc-annual-compliance-calendar-pvt-ltd-llp", label: "ROC compliance calendar" },
    category: "ROC",
  },
  {
    id: "tds-return-q2",
    date: "2026-10-31",
    title: "TDS Return — Q2 (July–September 2026)",
    short: "TDS return Q2 (Jul–Sep)",
    who: "Every business or person that deducted TDS in July–September 2026",
    ifMissed: "Late fee ₹200 per day under Section 427 (old 234E), up to the TDS amount, plus possible penalty",
    link: { href: "/blog/tds-return-filing-due-dates-late-fee", label: "TDS due dates & late fee" },
    category: "TDS",
  },
  {
    id: "itr-audit-cases",
    date: "2026-10-31",
    title: "ITR for Tax Audit Cases — AY 2026-27",
    short: "ITR for audit cases",
    who: "Businesses and professionals whose accounts are audited under Section 44AB",
    ifMissed: "Late fee, interest on unpaid tax, and loss of the right to carry forward most losses",
    link: { href: "/income-tax-return-filing", label: "ITR filing service" },
    category: "Income Tax",
  },
  {
    id: "mgt-7",
    date: "2026-11-29",
    title: "MGT-7 / MGT-7A — Annual Return to ROC",
    short: "MGT-7 annual return",
    who: "Companies that held their AGM on 30 September 2026 (due within 60 days of the AGM)",
    ifMissed: "Additional fee per day of delay",
    link: { href: "/blog/roc-annual-compliance-calendar-pvt-ltd-llp", label: "ROC compliance calendar" },
    category: "ROC",
  },
  {
    id: "itc-fy-2025-26",
    date: "2026-11-30",
    title: "Last Date to Claim Missed FY 2025-26 Input Tax Credit",
    short: "Last date for FY 2025-26 ITC",
    who: "Every GST-registered business with unclaimed FY 2025-26 purchase invoices",
    ifMissed: "Unclaimed ITC for FY 2025-26 is generally lost for good",
    note: "In practice the October GSTR-3B (due 20 November) is the last return to claim it in. The limit is earlier if you file your FY 2025-26 GSTR-9 before 30 November.",
    link: { href: "/blog/input-tax-credit-gst-rules-reversal", label: "ITC rules & reversal" },
    category: "GST",
  },
  {
    id: "advance-tax-q3",
    date: "2026-12-15",
    title: "Advance Tax — 3rd Instalment (75% of the year's tax)",
    short: "Advance tax 3rd instalment",
    who: "Anyone whose tax for FY 2026-27, after TDS, is ₹10,000 or more",
    ifMissed: "Interest under Section 425 (old 234C) on the shortfall",
    link: { href: "/blog/advance-tax-payment-due-dates-interest", label: "Advance tax guide" },
    category: "Income Tax",
  },
  {
    id: "gstr-9",
    date: "2026-12-31",
    title: "GSTR-9 / GSTR-9C Annual Return — FY 2025-26",
    short: "GSTR-9 annual return (FY 2025-26)",
    who: "GSTR-9: turnover above ₹2 crore. GSTR-9C: turnover above ₹5 crore",
    ifMissed: "Late fee ₹200 per day, up to 0.25% of turnover",
    note: "The same day is also the last chance to file a pending FY 2022-23 GSTR-9 before the 3-year time-bar.",
    link: { href: "/blog/gstr-9-annual-return-filing-guide-fy-2025-26", label: "GSTR-9 guide" },
    category: "GST",
  },
  {
    id: "belated-itr",
    date: "2026-12-31",
    title: "Belated ITR — AY 2026-27",
    short: "Belated ITR (AY 2026-27)",
    who: "Anyone who missed the original ITR due date",
    ifMissed: "No normal return possible after this — only an Updated Return (ITR-U) with extra tax",
    note: "Late fee ₹5,000 (₹1,000 if income is up to ₹5 lakh).",
    link: { href: "/blog/belated-revised-itr-ay-2026-27", label: "Belated & revised ITR guide" },
    category: "Income Tax",
  },
  {
    id: "advance-tax-q4",
    date: "2027-03-15",
    title: "Advance Tax — Final Instalment (100% of the year's tax)",
    short: "Advance tax final instalment",
    who: "Anyone whose tax for FY 2026-27, after TDS, is ₹10,000 or more — and presumptive (44AD/44ADA) taxpayers, who pay it all by this date",
    ifMissed: "Interest under Sections 424 and 425 (old 234B/234C)",
    link: { href: "/blog/advance-tax-payment-due-dates-interest", label: "Advance tax guide" },
    category: "Income Tax",
  },
  {
    id: "revised-itr",
    date: "2027-03-31",
    title: "Revised ITR — AY 2026-27",
    short: "Revised ITR (AY 2026-27)",
    who: "Anyone who wants to correct a mistake in an ITR already filed for AY 2026-27",
    link: { href: "/blog/belated-revised-itr-ay-2026-27", label: "Belated & revised ITR guide" },
    category: "Income Tax",
  },
];

export const MONTHLY_DEADLINES = [
  { day: "7th", what: "TDS / TCS deposit for the previous month (March's TDS: by 30 April)" },
  { day: "11th", what: "GSTR-1 for the previous month (monthly filers)" },
  { day: "20th", what: "GSTR-3B and tax payment for the previous month (monthly filers)" },
  { day: "22nd / 24th", what: "GSTR-3B after each quarter for QRMP filers (date depends on the state)" },
];

export const WHATSAPP_NUMBER = "919354953603";

/** Today's date in India as YYYY-MM-DD. */
export function todayInIndia(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Whole days from today (India) until the deadline. 0 = due today. */
export function daysUntil(isoDate: string, now: Date = new Date()): number {
  const [ty, tm, td] = todayInIndia(now).split("-").map(Number);
  const [dy, dm, dd] = isoDate.split("-").map(Number);
  return Math.round((Date.UTC(dy, dm - 1, dd) - Date.UTC(ty, tm - 1, td)) / 86_400_000);
}

/** Deadlines that are today or later, soonest first. */
export function upcomingDeadlines(now: Date = new Date()): TaxDeadline[] {
  return TAX_DEADLINES.filter((d) => daysUntil(d.date, now) >= 0).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

export function formatDeadlineDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function deadlineWhatsAppLink(d: TaxDeadline): string {
  const text = `Namaste, mujhe "${d.title}" (due ${formatDeadlineDate(d.date)}) ke liye help chahiye.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
