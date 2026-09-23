/**
 * Firm's published starting fees — single source for /fees and the ITR
 * service page. Only put prices here that Lalit has confirmed.
 *
 * Confirmed by Lalit 23 Sept 2026: GST registration proprietorship ₹2,000,
 * partnership ₹5,000, Pvt Ltd ₹10,000; ITR personal ₹1,500, business
 * ₹2,500, share market ₹5,000. Not yet confirmed: whether GST is extra.
 */

export type FeeItem = {
  service: string;
  price: string;
  forWhom: string;
  includes: string[];
  href?: string;
};

export const ITR_FEES: FeeItem[] = [
  {
    service: "ITR — Salaried / Personal",
    price: "₹1,500",
    forWhom: "Salary, pension, interest, one or two house properties",
    includes: [
      "Correct ITR form selection",
      "Form 16, 26AS and AIS matching",
      "Old vs new regime comparison",
      "Filing and e-verification",
    ],
    href: "/income-tax-return-filing",
  },
  {
    service: "ITR — Business / Profession",
    price: "₹2,500",
    forWhom: "Shopkeepers, traders, freelancers, doctors, consultants (ITR-3 / ITR-4)",
    includes: [
      "Presumptive (44AD / 44ADA) or regular computation",
      "26AS, AIS and GST turnover check",
      "Filing and e-verification",
    ],
    href: "/income-tax-return-filing",
  },
  {
    service: "ITR — Share Market / Capital Gains",
    price: "₹5,000",
    forWhom: "Shares, mutual funds, F&O or property sale",
    includes: [
      "Capital gains computation from broker statements",
      "STCG / LTCG and loss set-off",
      "Loss carry-forward where allowed",
      "Filing and e-verification",
    ],
    href: "/income-tax-return-filing",
  },
];

const GST_REG_INCLUDES = [
  "Document check before filing",
  "Application filing",
  "Reply to officer's queries (REG-03)",
  "Guidance for biometric Aadhaar authentication",
];

/** Same numbers as components/GSTRegistrationFees.tsx on /gst-registration. */
export const GST_REGISTRATION_FEES: FeeItem[] = [
  {
    service: "GST Registration — Proprietorship",
    price: "₹2,000",
    forWhom: "Proprietors (government fee is ₹0)",
    includes: GST_REG_INCLUDES,
    href: "/gst-registration",
  },
  {
    service: "GST Registration — Partnership Firm",
    price: "₹5,000",
    forWhom: "Partnership firms (government fee is ₹0)",
    includes: GST_REG_INCLUDES,
    href: "/gst-registration",
  },
  {
    service: "GST Registration — Private Limited Company",
    price: "₹10,000",
    forWhom: "Private limited companies (government fee is ₹0; DSC needed)",
    includes: GST_REG_INCLUDES,
    href: "/gst-registration",
  },
];

export const QUOTE_SERVICES = [
  "GST return filing (monthly / quarterly)",
  "TDS return filing",
  "Accounting & bookkeeping",
  "Company / LLP / partnership registration",
  "GST or income tax notice reply",
  "NRI tax matters",
];
