/**
 * Advance Tax Calculator — FY 2026-27 (the advance tax year currently
 * running as of this build).
 * ============================================================================
 *
 * Facts verified (24 Sept 2026) against the Income-tax Act, 2025 (in force
 * from 1 April 2026) and CBDT's advance tax guidance:
 *  - Advance tax applies when estimated tax payable for the year, after TDS/
 *    TCS, is ₹10,000 or more (Section 402 of the 2025 Act — same threshold
 *    the old Section 208 carried).
 *  - Ordinary taxpayers pay in 4 instalments: 15% by 15 June, 45% by
 *    15 September (cumulative), 75% by 15 December (cumulative), 100% by
 *    15 March (cumulative). These percentages and dates are unchanged from
 *    the old regime — only the section numbers changed.
 *  - Taxpayers under presumptive taxation (Sections 44AD/44ADA of the old
 *    Act — carried into the 2025 Act) pay 100% in a SINGLE instalment by
 *    15 March.
 *  - Shortfall interest: Section 425 of the 2025 Act (the old Section 234C)
 *    — 1% per month for 3 months on a shortfall at the 1st/2nd/3rd
 *    instalment, and 1% for 1 month on a shortfall at the last instalment.
 *    Section 424 (old Section 234B) — 1% per month from 1 April until paid,
 *    if total advance tax paid by 31 March is below 90% of the assessed tax.
 *    This tool ESTIMATES Section 425-style instalment interest only; Section
 *    424 is flagged as a note, not computed, because it depends on the
 *    self-assessment tax payment date, which this tool doesn't collect.
 */

export type TaxpayerType = "regular" | "presumptive";

export type AdvanceTaxInput = {
  /** Estimated total tax payable for FY 2026-27, AFTER subtracting TDS/TCS. */
  netTaxLiability: number;
  taxpayerType: TaxpayerType;
  /** Advance tax already paid so far this year, in total. */
  paidSoFar: number;
  /** The date to evaluate "already due" instalments against. Defaults to today. */
  asOf?: Date;
};

export type Instalment = {
  id: string;
  label: string;
  dueDate: string; // ISO date
  cumulativePercent: number;
  cumulativeAmountDue: number;
  isDue: boolean; // due date has passed as of `asOf`
  shortfall: number; // max(0, cumulativeAmountDue - paidSoFar) when isDue
  interestMonths: number; // months of interest under Section 425 if shortfall
  interest: number;
};

export type AdvanceTaxResult = {
  applicable: boolean; // false if netTaxLiability < 10,000
  instalments: Instalment[];
  totalShortfallInterest: number;
  nextInstalment: Instalment | null;
};

const THRESHOLD = 10000;
const RATE_PER_MONTH = 0.01;

const REGULAR_SCHEDULE = [
  { id: "q1", label: "1st Instalment", month: 5, day: 15, percent: 15, interestMonths: 3 }, // 15 June
  { id: "q2", label: "2nd Instalment", month: 8, day: 15, percent: 45, interestMonths: 3 }, // 15 Sept
  { id: "q3", label: "3rd Instalment", month: 11, day: 15, percent: 75, interestMonths: 3 }, // 15 Dec
  { id: "q4", label: "4th (Final) Instalment", month: 2, day: 15, percent: 100, interestMonths: 1, nextYear: true }, // 15 Mar
];

const PRESUMPTIVE_SCHEDULE = [
  { id: "q4", label: "Single Instalment (44AD/44ADA)", month: 2, day: 15, percent: 100, interestMonths: 1, nextYear: true },
];

function scheduleFor(type: TaxpayerType) {
  return type === "presumptive" ? PRESUMPTIVE_SCHEDULE : REGULAR_SCHEDULE;
}

export function calculateAdvanceTax(input: AdvanceTaxInput): AdvanceTaxResult {
  const { netTaxLiability, taxpayerType, paidSoFar } = input;
  const asOf = input.asOf ?? new Date();

  if (netTaxLiability < THRESHOLD) {
    return { applicable: false, instalments: [], totalShortfallInterest: 0, nextInstalment: null };
  }

  const schedule = scheduleFor(taxpayerType);

  const instalments: Instalment[] = schedule.map((row) => {
    // FY 2026-27 runs 1 Apr 2026 – 31 Mar 2027. Months 0-11 = Apr..Mar.
    const year = row.nextYear ? 2027 : 2026;
    const due = new Date(year, row.month, row.day);
    const isDue = asOf.getTime() >= due.getTime();
    const cumulativeAmountDue = Math.round((netTaxLiability * row.percent) / 100);
    const shortfall = isDue ? Math.max(0, cumulativeAmountDue - paidSoFar) : 0;
    const interest = Math.round(shortfall * RATE_PER_MONTH * row.interestMonths);

    return {
      id: row.id,
      label: row.label,
      dueDate: due.toISOString().slice(0, 10),
      cumulativePercent: row.percent,
      cumulativeAmountDue,
      isDue,
      shortfall,
      interestMonths: row.interestMonths,
      interest,
    };
  });

  const totalShortfallInterest = instalments.reduce((sum, i) => sum + i.interest, 0);
  const nextInstalment = instalments.find((i) => !i.isDue) ?? null;

  return { applicable: true, instalments, totalShortfallInterest, nextInstalment };
}

export function formatINR(value: number): string {
  return "₹" + Math.round(value).toLocaleString("en-IN");
}

export function formatDueDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
