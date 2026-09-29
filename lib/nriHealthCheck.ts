/**
 * NRI India Tax Health Check — paid report (USD)
 * ===============================================
 *
 * Reuses the verified logic already on the site:
 *   - residential status   → lib/nriResidentialStatus.ts
 *   - "must I file an ITR" → lib/nriItrFilingRequirement.ts
 *   - new-regime slabs     → lib/incomeTaxCalculator.ts
 *
 * India figures (same as the site's NRI blogs/tools, verified Sept 2026):
 *   - NRIs get the ₹4,00,000 basic exemption (new regime) but NOT the
 *     Section 87A rebate and NOT the ₹75,000 salary standard deduction.
 *   - TDS on NRO interest and on rent paid to an NRI: 30% + cess (+ surcharge
 *     if any) — usually 31.2%.
 *   - Rent: 30% standard deduction on the rent (municipal tax not modelled).
 *   - NRE / FCNR interest is tax-free in India while you are non-resident.
 *   - NRO capital/accumulated balances: repatriation up to USD 1 million per
 *     financial year with Form 145/146 (old 15CA/15CB).
 *
 * The tax figure is an ESTIMATE at slab rates. Dividends and capital gains
 * of NRIs are often taxed at special rates or DTAA rates — the report says so
 * and recommends a full computation when those amounts are significant.
 *
 * Country notes are general pointers for the adviser in that country, not
 * foreign tax advice.
 */

import { determineResidentialStatus, type PersonCategory, type Purpose, type StatusResult } from "./nriResidentialStatus";
import { checkItrFilingRequirement } from "./nriItrFilingRequirement";
import { NEW_REGIME_SLABS, slabTax } from "./incomeTaxCalculator";

export const NRI_COUNTRIES_REPORT = ["USA", "Canada", "Australia", "UK", "UAE", "Other"] as const;
export type NriCountry = (typeof NRI_COUNTRIES_REPORT)[number];

const CATEGORIES: PersonCategory[] = ["indian_citizen", "pio", "foreign_national"];
const PURPOSES: Purpose[] = ["employment_abroad", "visiting_india", "other"];

export type NriInput = {
  country: NriCountry;
  category: PersonCategory;
  purpose: Purpose;
  daysThisYear: number;
  daysPrev4Years: number;
  daysPrev7Years: number;
  nonResidentIn9of10: boolean;
  /** Yearly amounts in rupees */
  nroInterest: number;
  nreInterest: number;
  rent: number;
  dividends: number;
  capitalGains: number;
  otherIncome: number;
  /** TDS actually deducted, if known (0 = estimate it) */
  tdsDeducted: number;
  planningPropertySale: boolean;
  wantsToRepatriate: boolean;
};

export type NriReport = {
  country: NriCountry;
  status: StatusResult;
  income: { label: string; amount: number; taxable: number; note?: string }[];
  grossIndianIncome: number;
  taxableIncome: number;
  estimatedTax: number;
  tds: number;
  tdsIsEstimate: boolean;
  /** Positive = likely refund, negative = likely tax still payable */
  refundOrDue: number;
  itr: { required: boolean; recommended: boolean; reasons: string[] };
  specialRateWarning: boolean;
  countryNotes: { title: string; points: string[] };
  money: string[];
  actions: { title: string; detail: string }[];
  notes: string[];
};

const MAX = 1_000_000_000;
const DAYS_MAX = 366;

function num(v: unknown, max = MAX): number {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v.replace(/[,\s]/g, "")) : NaN;
  return Number.isFinite(n) && n > 0 ? Math.min(Math.round(n), max) : 0;
}
const bool = (v: unknown) => v === true || v === "true" || v === 1;

export function sanitizeNriInput(raw: unknown): NriInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const input: NriInput = {
    country: NRI_COUNTRIES_REPORT.includes(r.country as NriCountry) ? (r.country as NriCountry) : "Other",
    category: CATEGORIES.includes(r.category as PersonCategory) ? (r.category as PersonCategory) : "indian_citizen",
    purpose: PURPOSES.includes(r.purpose as Purpose) ? (r.purpose as Purpose) : "employment_abroad",
    daysThisYear: num(r.daysThisYear, DAYS_MAX),
    daysPrev4Years: num(r.daysPrev4Years, DAYS_MAX * 4),
    daysPrev7Years: num(r.daysPrev7Years, DAYS_MAX * 7),
    nonResidentIn9of10: bool(r.nonResidentIn9of10),
    nroInterest: num(r.nroInterest),
    nreInterest: num(r.nreInterest),
    rent: num(r.rent),
    dividends: num(r.dividends),
    capitalGains: num(r.capitalGains),
    otherIncome: num(r.otherIncome),
    tdsDeducted: num(r.tdsDeducted),
    planningPropertySale: bool(r.planningPropertySale),
    wantsToRepatriate: bool(r.wantsToRepatriate),
  };
  return input;
}

// Compact form for Razorpay order notes (max 256 chars).
const NUM_FIELDS = [
  "daysThisYear",
  "daysPrev4Years",
  "daysPrev7Years",
  "nroInterest",
  "nreInterest",
  "rent",
  "dividends",
  "capitalGains",
  "otherIncome",
  "tdsDeducted",
] as const;

export function encodeNriInput(i: NriInput): string {
  return [
    "n1",
    NRI_COUNTRIES_REPORT.indexOf(i.country),
    CATEGORIES.indexOf(i.category),
    PURPOSES.indexOf(i.purpose),
    i.nonResidentIn9of10 ? 1 : 0,
    i.planningPropertySale ? 1 : 0,
    i.wantsToRepatriate ? 1 : 0,
    ...NUM_FIELDS.map((k) => i[k]),
  ].join(",");
}

export function decodeNriInput(s: unknown): NriInput | null {
  if (typeof s !== "string") return null;
  const p = s.split(",");
  if (p[0] !== "n1" || p.length !== 7 + NUM_FIELDS.length) return null;
  const n = p.slice(1).map(Number);
  const raw: Record<string, unknown> = {
    country: NRI_COUNTRIES_REPORT[n[0]],
    category: CATEGORIES[n[1]],
    purpose: PURPOSES[n[2]],
    nonResidentIn9of10: n[3] === 1,
    planningPropertySale: n[4] === 1,
    wantsToRepatriate: n[5] === 1,
  };
  NUM_FIELDS.forEach((k, idx) => (raw[k] = n[6 + idx]));
  return sanitizeNriInput(raw);
}

const TDS_RATE = 0.312;
const inr = (v: number) => "₹" + Math.round(v).toLocaleString("en-IN");

/** Countries whose residents are taxed there on income — used for the deemed-resident test. */
function taxesResidents(c: NriCountry): boolean {
  return c !== "UAE";
}

export function buildNriReport(i: NriInput): NriReport {
  const grossIndianIncome =
    i.nroInterest + i.nreInterest + i.rent + i.dividends + i.capitalGains + i.otherIncome;
  const taxableWithoutNre = i.nroInterest + i.rent + i.dividends + i.capitalGains + i.otherIncome;

  const status = determineResidentialStatus({
    daysThisYear: i.daysThisYear,
    daysPrev4Years: i.daysPrev4Years,
    category: i.category,
    purpose: i.purpose,
    indianIncomeAbove15L: taxableWithoutNre > 1500000,
    liableToTaxAbroad: taxesResidents(i.country),
    nonResidentIn9of10: i.nonResidentIn9of10,
    daysPrev7Years: i.daysPrev7Years,
  });
  const isNri = status.shortLabel === "NRI";

  const rentTaxable = Math.round(i.rent * 0.7);
  const income: NriReport["income"] = [
    { label: "NRO interest (savings / FD)", amount: i.nroInterest, taxable: i.nroInterest },
    {
      label: "NRE / FCNR interest",
      amount: i.nreInterest,
      taxable: isNri ? 0 : i.nreInterest,
      note: isNri ? "Tax-free in India while you are an NRI" : "May become taxable once you are resident — check with us",
    },
    { label: "Rent from Indian property", amount: i.rent, taxable: rentTaxable, note: "After 30% standard deduction" },
    { label: "Dividends", amount: i.dividends, taxable: i.dividends },
    { label: "Capital gains (shares, mutual funds, property)", amount: i.capitalGains, taxable: i.capitalGains },
    { label: "Other Indian income", amount: i.otherIncome, taxable: i.otherIncome },
  ].filter((r) => r.amount > 0);

  const taxableIncome = income.reduce((s, r) => s + r.taxable, 0);
  // NRIs: no 87A rebate. Resident / RNOR: this report doesn't model their foreign income.
  const estimatedTax = Math.round(slabTax(taxableIncome, NEW_REGIME_SLABS) * 1.04);

  const tdsIsEstimate = i.tdsDeducted === 0;
  const tds = tdsIsEstimate ? Math.round((i.nroInterest + i.rent) * TDS_RATE) : i.tdsDeducted;
  const refundOrDue = tds - estimatedTax;

  const itrCheck = checkItrFilingRequirement({
    totalIndianIncome: taxableIncome,
    regime: "new",
    tdsDeducted: tds > 0,
    wantsToCarryForwardLoss: false,
    currentAccountDepositOver1Cr: false,
    foreignTravelSpendOver2L: false,
    electricitySpendOver1L: false,
  });

  const specialRateWarning = i.dividends + i.capitalGains > 100000;

  const money = [
    "NRE account: income and deposits from abroad are freely repatriable, and the interest is tax-free in India while you are an NRI.",
    "NRO account: current income (rent, interest, dividends, pension) can be sent abroad after tax. Capital or accumulated balances — including property sale money — can be sent up to USD 1 million per financial year.",
    "For taxable NRO remittances the bank needs Form 145 (old 15CA). Once the year's total crosses ₹5 lakh, a CA-certified Form 146 (old 15CB) is also needed, unless you hold a lower-TDS certificate.",
    "Keep your bank's TDS certificates (Form 16A equivalents) and interest certificates — you will need them for your Indian ITR and for foreign tax credit abroad.",
  ];

  const actions: NriReport["actions"] = [];
  if (!isNri) {
    actions.push({
      title: `Your status is ${status.status} — get a full review`,
      detail:
        "As a resident or RNOR, more of your income may be taxable in India than this NRI-focused check covers. Book a consultation so we can look at your complete position before you file.",
    });
  }
  if (itrCheck.required || itrCheck.recommended) {
    actions.push({
      title: refundOrDue > 0 ? `File your Indian ITR to claim about ${inr(refundOrDue)}` : "File your Indian ITR",
      detail: itrCheck.required
        ? "Filing is mandatory for you this year. File by the due date to avoid late fees and interest, and to keep your right to a refund."
        : "Filing isn't mandatory, but TDS has been deducted — the ITR is the only way to get the excess back.",
    });
  }
  if (refundOrDue > 5000 && i.rent > 0) {
    actions.push({
      title: "Stop over-deduction of TDS on rent next year",
      detail:
        "Your tenant deducts about 31.2% on rent, but your real tax is much lower. You can apply for a lower TDS certificate (Form 128) so less tax is held back each month.",
    });
  }
  if (i.planningPropertySale) {
    actions.push({
      title: "Before you sell property — plan the TDS",
      detail:
        "The buyer must deduct TDS on the full sale price, not just your gain, which often locks up lakhs until your ITR refund. A lower TDS certificate applied BEFORE the sale can cut this to your actual tax.",
    });
  }
  if (i.wantsToRepatriate) {
    actions.push({
      title: "Moving money abroad",
      detail:
        "Plan remittances from NRO within the USD 1 million yearly limit, with Form 145/146 ready. We can prepare the forms with our partner Chartered Accountant.",
    });
  }
  if (specialRateWarning) {
    actions.push({
      title: "Get dividends and capital gains computed properly",
      detail:
        "Dividends and capital gains of NRIs are often taxed at special rates, with DTAA benefits and different TDS rules. This estimate uses slab rates — a proper computation can change the figure noticeably.",
    });
  }
  actions.push({
    title: "Report India income in your country of residence",
    detail: countryAdvice(i.country).title,
  });
  if (!status.isDeemedResident && i.country === "UAE" && taxableWithoutNre > 1200000) {
    actions.push({
      title: "Watch the ₹15 lakh deemed-resident line",
      detail:
        "The UAE doesn't tax your income, so if your Indian income (excluding foreign income) crosses ₹15 lakh you can be treated as a deemed resident (RNOR) of India regardless of days spent there.",
    });
  }

  return {
    country: i.country,
    status,
    income,
    grossIndianIncome,
    taxableIncome,
    estimatedTax,
    tds,
    tdsIsEstimate,
    refundOrDue,
    itr: { required: itrCheck.required, recommended: itrCheck.recommended, reasons: itrCheck.reasons },
    specialRateWarning,
    countryNotes: countryAdvice(i.country),
    money,
    actions,
    notes: [
      "India figures use tax year 2026-27 rules (new tax regime, the default) as of September 2026.",
      "Tax is an estimate at slab rates; surcharge, special rates on dividends/capital gains and DTAA rates are not calculated.",
      "Country notes are general pointers to discuss with your tax adviser there — they are not foreign tax advice.",
      "This report is based only on the figures you entered and is not a substitute for advice on your full situation.",
    ],
  };
}

function countryAdvice(c: NriCountry): { title: string; points: string[] } {
  switch (c) {
    case "USA":
      return {
        title:
          "US citizens, green-card holders and US tax residents report worldwide income — include your India income on your US return and claim credit for Indian tax paid.",
        points: [
          "India income goes on your US return; Indian tax paid can usually be claimed as a foreign tax credit (Form 1116) under the India–US tax treaty.",
          "FBAR (FinCEN 114): required if your non-US accounts together exceeded US$10,000 at any time in the year — NRE, NRO and FD accounts all count.",
          "Form 8938 (FATCA) may also apply above higher thresholds — ask your CPA.",
          "Indian mutual funds are commonly treated as PFICs in the US, which has its own reporting and tax — review them with your CPA before buying more.",
          "The US tax year is January–December; India's is April–March. Your CPA will need India income re-cut to the calendar year — we prepare exactly that report.",
        ],
      };
    case "Canada":
      return {
        title:
          "Canadian residents are taxed on worldwide income — report your India income in your Canadian return and claim the foreign tax credit for Indian tax.",
        points: [
          "Indian tax paid can generally be claimed as a foreign tax credit under the India–Canada tax treaty.",
          "Form T1135: required if the total cost of your specified foreign property (Indian bank accounts, FDs, shares, rental property) was over C$100,000 at any time in the year.",
          "Canada's tax year is January–December, so India's April–March figures need to be re-cut for your Canadian return.",
        ],
      };
    case "Australia":
      return {
        title:
          "Australian tax residents declare worldwide income — include your India income in your Australian return and claim a foreign income tax offset for Indian tax.",
        points: [
          "Indian tax paid can usually be claimed as a Foreign Income Tax Offset (FITO) under the India–Australia tax treaty.",
          "Australia's income year runs July–June, India's April–March — the same Indian income falls into different years in the two countries.",
          "Keep Indian TDS certificates and bank statements as proof for the offset.",
        ],
      };
    case "UK":
      return {
        title:
          "UK residents are generally taxed on worldwide income — declare your India income on Self Assessment and claim Foreign Tax Credit Relief for Indian tax.",
        points: [
          "Indian tax paid can usually be credited under the India–UK tax treaty.",
          "The UK changed how foreign income of new arrivals is taxed from April 2025 — check which rules apply to you with a UK adviser.",
          "The UK tax year runs 6 April to 5 April, close to but not the same as India's April–March year.",
        ],
      };
    case "UAE":
      return {
        title:
          "The UAE doesn't levy personal income tax, so India's tax on your Indian income is usually the final tax.",
        points: [
          "Because you are not taxed in the UAE, India's deemed-resident rule matters: an Indian citizen with Indian income above ₹15 lakh can be treated as a resident (RNOR) even without visiting India.",
          "A UAE Tax Residency Certificate helps when claiming treaty benefits in India.",
        ],
      };
    default:
      return {
        title: "Check whether your country of residence taxes worldwide income and how it gives credit for Indian tax.",
        points: [
          "Most countries with an income tax give credit for tax paid in India under a tax treaty (DTAA).",
          "A Tax Residency Certificate from your country helps when claiming treaty benefits in India.",
        ],
      };
  }
}
