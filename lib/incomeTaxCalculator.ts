/**
 * Income Tax Calculator — Old Regime vs New Regime (FY 2025-26 / AY 2026-27)
 * ============================================================================
 *
 * Facts verified (13 Sept 2026) against ClearTax, Bajaj Finserv and official
 * Budget 2025/2026 coverage:
 *  - New regime slabs, ₹75,000 standard deduction, Section 87A rebate up to
 *    ₹60,000 (taxable income ≤ ₹12,00,000) with marginal relief above that,
 *    are confirmed UNCHANGED for FY 2026-27 (Budget 2026 made no slab changes).
 *  - Old regime slabs, ₹50,000 standard deduction, Section 80C (₹1.5L),
 *    Section 80D and the ₹12,500 rebate (taxable income ≤ ₹5,00,000) are the
 *    long-standing, stable figures.
 *  - This tool assumes a SALARIED taxpayer (so the standard deduction always
 *    applies) — the common case for this calculator's audience. Business
 *    income, capital gains taxed at special rates, and surcharge for very
 *    high incomes (>₹50L) are NOT modelled here; the page explains this.
 */

export type AgeGroup = "below60" | "60to79" | "80plus";

export type IncomeTaxInput = {
  /** Annual gross income before any deduction, in rupees */
  annualIncome: number;
  ageGroup: AgeGroup;
  /**
   * Total deductions the user would claim under the OLD regime only —
   * Section 80C + 80D + HRA exemption + home loan interest (24b) + others,
   * combined into one number for simplicity. Does NOT include the standard
   * deduction, which is applied separately and automatically.
   */
  oldRegimeDeductions: number;
};

export type RegimeBreakdown = {
  grossIncome: number;
  standardDeduction: number;
  otherDeductions: number;
  taxableIncome: number;
  taxBeforeRebate: number;
  rebate: number;
  marginalRelief: number;
  taxAfterRebate: number;
  cess: number;
  totalTax: number;
};

export type IncomeTaxResult = {
  newRegime: RegimeBreakdown;
  oldRegime: RegimeBreakdown;
  recommended: "new" | "old" | "same";
  savings: number;
};

const CESS_RATE = 0.04;

function slabTax(taxableIncome: number, slabs: { upto: number; rate: number }[]): number {
  let tax = 0;
  let lastLimit = 0;
  for (const slab of slabs) {
    if (taxableIncome > lastLimit) {
      const amountInSlab = Math.min(taxableIncome, slab.upto) - lastLimit;
      tax += amountInSlab * slab.rate;
      lastLimit = slab.upto;
    } else {
      break;
    }
  }
  return tax;
}

const NEW_REGIME_SLABS = [
  { upto: 400000, rate: 0 },
  { upto: 800000, rate: 0.05 },
  { upto: 1200000, rate: 0.1 },
  { upto: 1600000, rate: 0.15 },
  { upto: 2000000, rate: 0.2 },
  { upto: 2400000, rate: 0.25 },
  { upto: Infinity, rate: 0.3 },
];

function oldRegimeSlabs(ageGroup: AgeGroup) {
  if (ageGroup === "80plus") {
    return [
      { upto: 500000, rate: 0 },
      { upto: 1000000, rate: 0.2 },
      { upto: Infinity, rate: 0.3 },
    ];
  }
  if (ageGroup === "60to79") {
    return [
      { upto: 300000, rate: 0 },
      { upto: 500000, rate: 0.05 },
      { upto: 1000000, rate: 0.2 },
      { upto: Infinity, rate: 0.3 },
    ];
  }
  return [
    { upto: 250000, rate: 0 },
    { upto: 500000, rate: 0.05 },
    { upto: 1000000, rate: 0.2 },
    { upto: Infinity, rate: 0.3 },
  ];
}

function computeNewRegime(grossIncome: number): RegimeBreakdown {
  const standardDeduction = 75000;
  const taxableIncome = Math.max(0, grossIncome - standardDeduction);
  const taxBeforeRebate = slabTax(taxableIncome, NEW_REGIME_SLABS);

  let rebate = 0;
  let marginalRelief = 0;
  let taxAfterRebate = taxBeforeRebate;

  if (taxableIncome <= 1200000) {
    rebate = Math.min(taxBeforeRebate, 60000);
    taxAfterRebate = taxBeforeRebate - rebate;
  } else {
    // Marginal relief: tax payable should never exceed (taxable income - 12,00,000)
    const excessOverThreshold = taxableIncome - 1200000;
    if (taxAfterRebate > excessOverThreshold) {
      marginalRelief = taxAfterRebate - excessOverThreshold;
      taxAfterRebate = excessOverThreshold;
    }
  }

  const cess = taxAfterRebate * CESS_RATE;
  const totalTax = Math.round(taxAfterRebate + cess);

  return {
    grossIncome,
    standardDeduction,
    otherDeductions: 0,
    taxableIncome,
    taxBeforeRebate: Math.round(taxBeforeRebate),
    rebate: Math.round(rebate),
    marginalRelief: Math.round(marginalRelief),
    taxAfterRebate: Math.round(taxAfterRebate),
    cess: Math.round(cess),
    totalTax,
  };
}

function computeOldRegime(grossIncome: number, ageGroup: AgeGroup, otherDeductions: number): RegimeBreakdown {
  const standardDeduction = 50000;
  const taxableIncome = Math.max(0, grossIncome - standardDeduction - otherDeductions);
  const taxBeforeRebate = slabTax(taxableIncome, oldRegimeSlabs(ageGroup));

  let rebate = 0;
  if (taxableIncome <= 500000) {
    rebate = Math.min(taxBeforeRebate, 12500);
  }
  const taxAfterRebate = taxBeforeRebate - rebate;
  const cess = taxAfterRebate * CESS_RATE;
  const totalTax = Math.round(taxAfterRebate + cess);

  return {
    grossIncome,
    standardDeduction,
    otherDeductions,
    taxableIncome,
    taxBeforeRebate: Math.round(taxBeforeRebate),
    rebate: Math.round(rebate),
    marginalRelief: 0,
    taxAfterRebate: Math.round(taxAfterRebate),
    cess: Math.round(cess),
    totalTax,
  };
}

export function calculateIncomeTax(input: IncomeTaxInput): IncomeTaxResult {
  const newRegime = computeNewRegime(input.annualIncome);
  const oldRegime = computeOldRegime(input.annualIncome, input.ageGroup, input.oldRegimeDeductions);

  let recommended: "new" | "old" | "same" = "same";
  if (newRegime.totalTax < oldRegime.totalTax) recommended = "new";
  else if (oldRegime.totalTax < newRegime.totalTax) recommended = "old";

  const savings = Math.abs(newRegime.totalTax - oldRegime.totalTax);

  return { newRegime, oldRegime, recommended, savings };
}

export function formatINR(value: number): string {
  return "₹" + Math.round(value).toLocaleString("en-IN");
}
