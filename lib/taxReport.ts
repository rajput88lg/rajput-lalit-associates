/**
 * Personal Tax Saving Report — FY 2026-27 (salaried individuals)
 * ================================================================
 *
 * Built on the SAME slab logic as the free Income Tax Calculator
 * (lib/incomeTaxCalculator.ts) and HRA calculator (lib/hraCalculator.ts), so
 * a change of slabs there flows into the paid report automatically.
 *
 * Deduction limits used (long-standing figures, verify every Budget):
 *   80C ₹1,50,000 · 80D self ₹25,000 (₹50,000 if you are 60+) ·
 *   80D parents ₹25,000 (₹50,000 if parents are 60+) · 80CCD(1B) NPS ₹50,000 ·
 *   Sec 24(b) self-occupied home loan interest ₹2,00,000 ·
 *   80CCD(2) employer NPS: 14% of Basic+DA (new regime), 10% (old regime).
 *
 * Section numbers are the commonly known ones — the Income-tax Act, 2025
 * renumbers them, but the limits above are unchanged. Surcharge (>₹50L),
 * capital gains at special rates and business income are NOT modelled; the
 * report says so.
 *
 * The same function runs in the browser (free preview) and on the server
 * (full report after payment, rebuilt from the Razorpay order notes).
 */

import { calculateIncomeTax, type AgeGroup, type RegimeBreakdown } from "./incomeTaxCalculator";
import { calculateHraExemption } from "./hraCalculator";

export type TaxReportInput = {
  ageGroup: AgeGroup;
  /** Gross annual salary (including HRA and allowances). */
  salary: number;
  /** Interest, rent received and other income taxed at slab rates. */
  otherIncome: number;
  /** Annual Basic + DA (needed for HRA and employer NPS). */
  basic: number;
  hraReceived: number;
  rentPaid: number;
  metro: boolean;
  sec80C: number;
  healthSelf: number;
  healthParents: number;
  parentsSenior: boolean;
  npsSelf: number;
  homeLoanInterest: number;
  employerNps: number;
};

export type DeductionRow = {
  section: string;
  label: string;
  limit: number | null;
  claimed: number;
  gap: number;
  /** Extra tax saved (old regime) if the gap is filled. */
  taxSavedIfFilled: number;
};

export type ActionItem = { title: string; detail: string };

export type TaxReport = {
  fy: string;
  grossIncome: number;
  oldRegime: RegimeBreakdown;
  newRegime: RegimeBreakdown;
  recommended: "old" | "new";
  regimeDifference: number;
  hraExemption: number;
  deductions: DeductionRow[];
  totalOldDeductions: number;
  oldWithGapsFilled: { extraInvestment: number; totalTax: number };
  breakEvenDeductions: number;
  employerNpsTip: { suggestedAmount: number; newRegimeTax: number; saving: number } | null;
  bestPossibleTax: number;
  potentialSaving: number;
  actions: ActionItem[];
  notes: string[];
};

const AGE_GROUPS: AgeGroup[] = ["below60", "60to79", "80plus"];
const MAX_AMOUNT = 100_000_000; // ₹10 crore — anything above is a typo

const LIMITS = {
  c80: 150000,
  nps: 50000,
  homeLoan: 200000,
  health: (senior: boolean) => (senior ? 50000 : 25000),
};

function amount(v: unknown): number {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v.replace(/[,\s]/g, "")) : NaN;
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.round(n), MAX_AMOUNT);
}

/** Cleans untrusted input (browser form or order notes). Null if unusable. */
export function sanitizeTaxInput(raw: unknown): TaxReportInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const ageGroup = AGE_GROUPS.includes(r.ageGroup as AgeGroup) ? (r.ageGroup as AgeGroup) : "below60";
  const input: TaxReportInput = {
    ageGroup,
    salary: amount(r.salary),
    otherIncome: amount(r.otherIncome),
    basic: amount(r.basic),
    hraReceived: amount(r.hraReceived),
    rentPaid: amount(r.rentPaid),
    metro: r.metro === true || r.metro === "true" || r.metro === 1,
    sec80C: amount(r.sec80C),
    healthSelf: amount(r.healthSelf),
    healthParents: amount(r.healthParents),
    parentsSenior: r.parentsSenior === true || r.parentsSenior === "true" || r.parentsSenior === 1,
    npsSelf: amount(r.npsSelf),
    homeLoanInterest: amount(r.homeLoanInterest),
    employerNps: amount(r.employerNps),
  };
  if (input.salary < 1) return null;
  // Basic can't exceed the salary it is part of.
  input.basic = Math.min(input.basic, input.salary);
  input.hraReceived = Math.min(input.hraReceived, input.salary);
  return input;
}

// Compact form for the Razorpay order notes (max 256 chars per note).
const FIELD_ORDER = [
  "salary",
  "otherIncome",
  "basic",
  "hraReceived",
  "rentPaid",
  "sec80C",
  "healthSelf",
  "healthParents",
  "npsSelf",
  "homeLoanInterest",
  "employerNps",
] as const;

export function encodeTaxInput(i: TaxReportInput): string {
  const nums = FIELD_ORDER.map((k) => i[k]);
  return [
    "v1",
    AGE_GROUPS.indexOf(i.ageGroup),
    i.metro ? 1 : 0,
    i.parentsSenior ? 1 : 0,
    ...nums,
  ].join(",");
}

export function decodeTaxInput(s: unknown): TaxReportInput | null {
  if (typeof s !== "string") return null;
  const parts = s.split(",");
  if (parts[0] !== "v1" || parts.length !== 4 + FIELD_ORDER.length) return null;
  const n = parts.slice(1).map(Number);
  const raw: Record<string, unknown> = {
    ageGroup: AGE_GROUPS[n[0]],
    metro: n[1] === 1,
    parentsSenior: n[2] === 1,
  };
  FIELD_ORDER.forEach((k, idx) => (raw[k] = n[3 + idx]));
  return sanitizeTaxInput(raw);
}

export function buildTaxReport(input: TaxReportInput): TaxReport {
  const gross = input.salary + input.otherIncome;
  const selfSenior = input.ageGroup !== "below60";

  const hraExemption =
    input.hraReceived > 0 && input.rentPaid > 0 && input.basic > 0
      ? calculateHraExemption({
          annualBasicSalary: input.basic,
          annualHraReceived: input.hraReceived,
          annualRentPaid: input.rentPaid,
          isMetroCity: input.metro,
        }).exemptAmount
      : 0;

  const cap = (v: number, limit: number) => Math.min(v, limit);
  const c80 = cap(input.sec80C, LIMITS.c80);
  const hSelfLimit = LIMITS.health(selfSenior);
  const hSelf = cap(input.healthSelf, hSelfLimit);
  const hParLimit = LIMITS.health(input.parentsSenior);
  const hPar = cap(input.healthParents, hParLimit);
  const nps = cap(input.npsSelf, LIMITS.nps);
  const home = cap(input.homeLoanInterest, LIMITS.homeLoan);
  const empNpsOld = cap(input.employerNps, Math.round(input.basic * 0.1));
  const empNpsNew = cap(input.employerNps, Math.round(input.basic * 0.14));

  const totalOldDeductions = hraExemption + c80 + hSelf + hPar + nps + home + empNpsOld;

  const oldTax = (deductions: number) =>
    calculateIncomeTax({ annualIncome: gross, ageGroup: input.ageGroup, oldRegimeDeductions: deductions })
      .oldRegime;
  const newTax = (employerNps: number) =>
    calculateIncomeTax({
      annualIncome: Math.max(0, gross - employerNps),
      ageGroup: input.ageGroup,
      oldRegimeDeductions: 0,
    }).newRegime;

  const oldRegime = oldTax(totalOldDeductions);
  const newRegime = { ...newTax(empNpsNew), grossIncome: gross, otherDeductions: empNpsNew };
  const recommended: "old" | "new" = oldRegime.totalTax < newRegime.totalTax ? "old" : "new";
  const currentBest = Math.min(oldRegime.totalTax, newRegime.totalTax);

  const savedIfFilled = (gap: number) =>
    gap > 0 ? oldRegime.totalTax - oldTax(totalOldDeductions + gap).totalTax : 0;

  const gaps = {
    c80: LIMITS.c80 - c80,
    hSelf: hSelfLimit - hSelf,
    hPar: hParLimit - hPar,
    nps: LIMITS.nps - nps,
  };

  const deductions: DeductionRow[] = [
    {
      section: "80C",
      label: "EPF, PPF, ELSS, life insurance, home loan principal, children's tuition fee",
      limit: LIMITS.c80,
      claimed: c80,
      gap: gaps.c80,
      taxSavedIfFilled: savedIfFilled(gaps.c80),
    },
    {
      section: "80D (self & family)",
      label: "Health insurance premium for you, spouse and children",
      limit: hSelfLimit,
      claimed: hSelf,
      gap: gaps.hSelf,
      taxSavedIfFilled: savedIfFilled(gaps.hSelf),
    },
    {
      section: "80D (parents)",
      label: "Health insurance premium for parents",
      limit: hParLimit,
      claimed: hPar,
      gap: gaps.hPar,
      taxSavedIfFilled: savedIfFilled(gaps.hPar),
    },
    {
      section: "80CCD(1B)",
      label: "Your own extra NPS contribution (over and above 80C)",
      limit: LIMITS.nps,
      claimed: nps,
      gap: gaps.nps,
      taxSavedIfFilled: savedIfFilled(gaps.nps),
    },
    {
      section: "24(b)",
      label: "Home loan interest on a self-occupied house",
      limit: LIMITS.homeLoan,
      claimed: home,
      gap: 0,
      taxSavedIfFilled: 0,
    },
    {
      section: "10(13A) HRA",
      label: "HRA exemption on rent paid",
      limit: null,
      claimed: hraExemption,
      gap: 0,
      taxSavedIfFilled: 0,
    },
    {
      section: "80CCD(2)",
      label: "Employer's NPS contribution (allowed in both regimes)",
      limit: Math.round(input.basic * 0.1),
      claimed: empNpsOld,
      gap: 0,
      taxSavedIfFilled: 0,
    },
  ];

  const extraInvestment = gaps.c80 + gaps.hSelf + gaps.hPar + gaps.nps;
  const oldWithGapsFilled = {
    extraInvestment,
    totalTax: oldTax(totalOldDeductions + extraInvestment).totalTax,
  };

  // Smallest total old-regime deduction at which old tax <= new tax.
  let breakEvenDeductions = 0;
  if (oldTax(0).totalTax > newRegime.totalTax) {
    let lo = 0;
    let hi = gross;
    while (hi - lo > 100) {
      const mid = Math.floor((lo + hi) / 2);
      if (oldTax(mid).totalTax <= newRegime.totalTax) hi = mid;
      else lo = mid;
    }
    breakEvenDeductions = Math.ceil(hi / 1000) * 1000;
  }

  let employerNpsTip: TaxReport["employerNpsTip"] = null;
  const suggestedEmpNps = Math.round(input.basic * 0.14);
  if (input.basic > 0 && suggestedEmpNps > empNpsNew) {
    const t = newTax(suggestedEmpNps).totalTax;
    const saving = newRegime.totalTax - t;
    if (saving > 0) employerNpsTip = { suggestedAmount: suggestedEmpNps, newRegimeTax: t, saving };
  }

  const bestPossibleTax = Math.min(
    currentBest,
    oldWithGapsFilled.totalTax,
    employerNpsTip ? employerNpsTip.newRegimeTax : Infinity
  );
  const potentialSaving = Math.max(0, currentBest - bestPossibleTax);

  const actions = buildActions({
    input,
    recommended,
    regimeDifference: Math.abs(oldRegime.totalTax - newRegime.totalTax),
    newRegime,
    oldWithGapsFilled,
    deductions,
    employerNpsTip,
    hraExemption,
    gross,
  });

  const notes = [
    "Figures are for FY 2026-27 (tax year 2026-27) for a resident salaried individual, using slabs and limits as of September 2026.",
    "Surcharge on income above ₹50 lakh, capital gains taxed at special rates, business income and losses are not included.",
    "Employer contributions to EPF, NPS and superannuation together are tax-free only up to ₹7.5 lakh a year.",
    "This report is general guidance based on the figures you entered — it is not a substitute for advice on your complete tax position.",
  ];

  return {
    fy: "FY 2026-27",
    grossIncome: gross,
    oldRegime,
    newRegime,
    recommended,
    regimeDifference: Math.abs(oldRegime.totalTax - newRegime.totalTax),
    hraExemption,
    deductions,
    totalOldDeductions,
    oldWithGapsFilled,
    breakEvenDeductions,
    employerNpsTip,
    bestPossibleTax,
    potentialSaving,
    actions,
    notes,
  };
}

const inr = (v: number) => "₹" + Math.round(v).toLocaleString("en-IN");

function buildActions(a: {
  input: TaxReportInput;
  recommended: "old" | "new";
  regimeDifference: number;
  newRegime: RegimeBreakdown;
  oldWithGapsFilled: { extraInvestment: number; totalTax: number };
  deductions: DeductionRow[];
  employerNpsTip: TaxReport["employerNpsTip"];
  hraExemption: number;
  gross: number;
}): ActionItem[] {
  const out: ActionItem[] = [];
  const { input } = a;

  const fillable = a.deductions.filter((d) => d.gap > 0 && d.taxSavedIfFilled > 0);
  const bestNewTax = Math.min(
    a.newRegime.totalTax,
    a.employerNpsTip ? a.employerNpsTip.newRegimeTax : Infinity
  );
  // Old regime wins only after investing more — and beats every new-regime option.
  const oldBecomesBest = fillable.length > 0 && a.oldWithGapsFilled.totalTax < bestNewTax;

  if (oldBecomesBest && a.recommended === "new") {
    out.push({
      title: "Today the NEW regime is cheaper — but the OLD regime can win",
      detail: `If you make the investments listed below before 31 March 2027 (${inr(a.oldWithGapsFilled.extraInvestment)} in total), your old-regime tax falls to ${inr(a.oldWithGapsFilled.totalTax)} against ${inr(a.newRegime.totalTax)} in the new regime. If you are not going to make them, stay with the new regime. Tell your employer your choice in the investment declaration; salaried people can still switch regime when filing the ITR.`,
    });
  } else {
    out.push({
      title: `Choose the ${a.recommended.toUpperCase()} tax regime`,
      detail:
        a.regimeDifference > 0
          ? `With your current figures it saves ${inr(a.regimeDifference)} compared with the other regime. Tell your employer in the investment declaration so the right TDS is deducted each month. Salaried people can still pick either regime every year when filing the ITR.`
          : "Both regimes give the same tax with your current figures — the new regime is simpler (no proofs needed). Tell your employer in the investment declaration.",
    });
  }

  if (oldBecomesBest) {
    for (const d of fillable) {
      out.push({
        title: `Use the remaining ${d.section} limit`,
        detail: `Invest/pay ${inr(d.gap)} more under ${d.section} (${d.label.toLowerCase()}) before 31 March 2027. Under the old regime this cuts your tax by about ${inr(d.taxSavedIfFilled)}. Invest only where it also fits your goals — never just to save tax.`,
      });
    }
  } else if (fillable.length > 0 && a.employerNpsTip && a.oldWithGapsFilled.totalTax < a.newRegime.totalTax) {
    out.push({
      title: "Employer NPS beats extra investments",
      detail: `Investing ${inr(a.oldWithGapsFilled.extraInvestment)} more under the old regime would bring your tax to ${inr(a.oldWithGapsFilled.totalTax)}, but the employer NPS route below brings it lower, to ${inr(a.employerNpsTip.newRegimeTax)}, in the new regime.`,
    });
  } else if (fillable.length > 0 && a.recommended === "new") {
    out.push({
      title: "Don't invest just to save tax",
      detail: `Even if you used every remaining old-regime limit (${inr(a.oldWithGapsFilled.extraInvestment)} more), the new regime would still be cheaper or equal. 80C/80D/NPS investments do not reduce tax under the new regime, so choose them only for your financial goals.`,
    });
  }

  if (a.employerNpsTip && !oldBecomesBest) {
    out.push({
      title: "Ask your employer about NPS under 80CCD(2)",
      detail: `If your employer puts up to ${inr(a.employerNpsTip.suggestedAmount)} a year (14% of Basic+DA) into your NPS as part of the same CTC, that amount is tax-free even in the new regime — your tax would fall to about ${inr(a.employerNpsTip.newRegimeTax)}, a saving of ${inr(a.employerNpsTip.saving)}. NPS money is locked in until retirement, so check you are comfortable with that.`,
    });
  }

  if (input.rentPaid > 0 && input.hraReceived === 0) {
    out.push({
      title: "No HRA in salary? Check Section 80GG",
      detail:
        "If you pay rent but your salary has no HRA component, Section 80GG can give a deduction of up to ₹60,000 a year in the old regime (conditions apply — you, your spouse or minor child must not own a house in that city).",
    });
  } else if (a.hraExemption > 0 && a.recommended === "old") {
    out.push({
      title: "Keep rent proofs ready",
      detail: `Your HRA exemption works out to ${inr(a.hraExemption)}. Keep monthly rent receipts and a rent agreement. If the rent is more than ₹1,00,000 a year, your employer will need the landlord's PAN.`,
    });
  }

  if (input.healthParents === 0) {
    out.push({
      title: "Consider health cover for your parents",
      detail: `Premium for parents' health insurance is deductible up to ${inr(input.parentsSenior ? 50000 : 25000)} a year in the old regime (preventive check-ups up to ₹5,000 are included). Apart from tax, it protects your savings from a hospital bill.`,
    });
  }

  if (input.otherIncome > 0) {
    out.push({
      title: "Declare your other income",
      detail: `You have ${inr(input.otherIncome)} of non-salary income. Either declare it to your employer so it is covered in TDS, or pay advance tax — if the tax still due after TDS is ₹10,000 or more, missing the advance tax instalments (15 December and 15 March) attracts interest.`,
    });
  }

  if (a.gross > 5000000) {
    out.push({
      title: "Get a full review — surcharge applies",
      detail:
        "Your income is above ₹50 lakh, so a surcharge also applies which this report does not calculate. Book a call with us for an exact working.",
    });
  }

  out.push({
    title: "File your ITR on time",
    detail:
      "Match your salary and TDS with Form 16 and Form 26AS/AIS before filing. Rajput Lalit & Associates can prepare and file it for you — WhatsApp +91 93549 53603.",
  });

  return out;
}
