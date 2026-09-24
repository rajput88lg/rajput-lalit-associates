import type { FeeItem } from "@/lib/fees";

/**
 * NRI services + fees — confirmed by Lalit 24 Sept 2026 ("Premium" option).
 * Form 145/146 (old 15CA/15CB): Form 146 is certified by a Chartered
 * Accountant — done through the firm's partner CA.
 */

export const NRI_FEES: FeeItem[] = [
  {
    service: "NRI Income Tax Return",
    price: "₹5,000",
    forWhom: "Rent, FD / NRO interest, dividends or salary from India",
    includes: [
      "Residential status check",
      "Form 26AS / AIS matching",
      "DTAA relief where applicable",
      "Filing, e-verification and refund follow-up",
    ],
  },
  {
    service: "ITR After Selling Property in India",
    price: "₹10,000",
    forWhom: "NRIs who sold a house, flat or plot in India",
    includes: [
      "Capital gains computation from purchase and sale records",
      "Claiming refund of excess TDS deducted by the buyer",
      "Exemption planning (Section 54 / 54EC) where eligible",
      "Filing and refund follow-up",
    ],
  },
  {
    service: "Lower TDS Certificate (Form 128)",
    price: "₹18,000",
    forWhom: "NRIs about to sell property who want TDS cut to the actual tax",
    includes: [
      "Tax computation for the sale",
      "Form 128 application filed online",
      "Replies to the assessing officer's queries",
      "Certificate shared with the buyer",
    ],
  },
  {
    service: "Money Transfer Abroad (Form 145 / 146)",
    price: "₹3,000",
    forWhom: "Sending money from an NRO account or property sale abroad",
    includes: [
      "Form 145 (old 15CA) filing",
      "Form 146 (old 15CB) certificate through our partner Chartered Accountant",
      "Guidance on bank documentation",
    ],
  },
  {
    service: "NRI Tax Consultation",
    price: "₹3,500",
    forWhom: "One-on-one video or phone call on your India tax situation",
    includes: [
      "Your residential status and filing obligations",
      "What to do about TDS, refunds or a planned sale",
      "Clear next steps in writing",
    ],
  },
];

/** India income report for a US-based NRI's US tax preparer (CPA / EA). */
export const US_CPA_REPORT_FEES: FeeItem[] = [
  {
    service: "US CPA Report — Basic",
    price: "₹10,000",
    forWhom: "Indian bank / FD interest and rental income",
    includes: [
      "India income for the US calendar year (Jan–Dec), not India's Apr–Mar",
      "Converted to USD with the exchange rates used shown",
      "Indian tax / TDS paid, for your CPA's foreign tax credit",
      "List of Indian accounts with peak balances, for FBAR",
    ],
  },
  {
    service: "US CPA Report — Standard",
    price: "₹20,000",
    forWhom: "Basic + Indian shares and mutual funds",
    includes: [
      "Everything in Basic",
      "Dividends and capital gains from Indian shares / mutual funds",
      "List of Indian mutual funds held, flagged for your CPA to review",
      "Year-end holdings statement in USD",
    ],
  },
  {
    service: "US CPA Report — Complete",
    price: "₹30,000",
    forWhom: "Standard + property sale or business income in India",
    includes: [
      "Everything in Standard",
      "Property sale gain worked out in rupees and USD",
      "Business / professional income from India",
    ],
  },
];

export const NRI_COUNTRIES = ["UAE", "USA", "UK", "Canada", "Australia", "Saudi Arabia", "Other"];

export const NRI_WHATSAPP_SERVICES = [
  ...NRI_FEES.map((f) => f.service),
  "US CPA Report (India income for US tax)",
  "Not sure — need advice",
];
