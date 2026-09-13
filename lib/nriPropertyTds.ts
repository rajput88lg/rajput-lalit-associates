/**
 * NRI Property Sale — TDS & Capital Gains calculation logic
 * ==========================================================
 *
 * Law applied: Income-tax Act, 2025 (tax year 2026-27 onwards, i.e. transfers
 * on or after 1 April 2026). Verified 13 September 2026.
 *
 * Key rules encoded here:
 *  - TDS on payments to a non-resident: Section 393(2) (old Act: Section 195)
 *  - Immovable property is LONG TERM if held for MORE THAN 24 months
 *  - LTCG on immovable property: 12.5% flat, NO indexation
 *    (for transfers on/after 23 July 2024)
 *  - NRIs CANNOT use the 20%-with-indexation grandfathering option — that
 *    relief is available only to resident individuals and HUFs
 *  - STCG: taxed at slab rates; buyers conservatively deduct at 30%
 *  - Surcharge ladder: Nil up to Rs 50L | 10% 50L-1Cr | 15% 1Cr-2Cr
 *      · For LONG TERM capital gains surcharge is CAPPED at 15%
 *      · For short term property gains (normal income) it can go to 25%
 *  - Health & Education Cess: 4% on (tax + surcharge)
 *  - CRITICAL: TDS is deducted on the FULL SALE CONSIDERATION, not on the
 *    capital gain. There is NO Rs 50 lakh threshold for NRI sellers (unlike
 *    resident sellers) — TDS applies from the first rupee.
 *
 * This file is deliberately pure (no React, no DOM) so the numbers can be
 * unit-tested on their own.
 */

export type TdsInput = {
  /** Total sale consideration in rupees */
  saleConsideration: number;
  /** Original purchase cost in rupees */
  purchasePrice: number;
  /** ISO date string, e.g. "2015-06-10" */
  purchaseDate: string;
  /** ISO date string */
  saleDate: string;
  /** Cost of improvement (optional) */
  improvementCost?: number;
  /** Brokerage, legal fees and other transfer expenses (optional) */
  transferExpenses?: number;
};

export type TdsResult = {
  holdingMonths: number;
  isLongTerm: boolean;
  gainType: "Long Term Capital Gain" | "Short Term Capital Gain";

  capitalGain: number;
  /** true when the sale is at a loss */
  isLoss: boolean;

  /** What the BUYER must deduct — on the full sale consideration */
  tdsBaseRate: number;
  tdsSurchargeRate: number;
  tdsEffectiveRate: number;
  tdsAmount: number;

  /** Estimated ACTUAL tax on the gain */
  taxSurchargeRate: number;
  actualTaxOnGain: number;

  /** Money blocked with the department until a return is filed */
  excessTds: number;

  /** What the seller finally receives on the day of registry */
  amountReceivedAtSale: number;
};

const LAKH = 100000;
const CRORE = 10000000;

/** Surcharge ladder. LTCG is capped at 15%; normal income can reach 25%. */
export function surchargeRate(amount: number, isLongTerm: boolean): number {
  if (amount <= 50 * LAKH) return 0;
  if (amount <= 1 * CRORE) return 0.1;
  if (amount <= 2 * CRORE) return 0.15;
  // Above Rs 2 crore
  return isLongTerm ? 0.15 : 0.25;
}

/** Whole months between two dates (used for the 24-month holding test). */
export function monthsBetween(fromISO: string, toISO: string): number {
  const from = new Date(fromISO);
  const to = new Date(toISO);

  let months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());

  // Not a full month yet if the day-of-month hasn't been reached
  if (to.getDate() < from.getDate()) months -= 1;

  return Math.max(0, months);
}

export function calculateNriPropertyTds(input: TdsInput): TdsResult {
  const saleConsideration = Math.max(0, input.saleConsideration || 0);
  const purchasePrice = Math.max(0, input.purchasePrice || 0);
  const improvementCost = Math.max(0, input.improvementCost || 0);
  const transferExpenses = Math.max(0, input.transferExpenses || 0);

  const holdingMonths = monthsBetween(input.purchaseDate, input.saleDate);
  const isLongTerm = holdingMonths > 24;

  const rawGain =
    saleConsideration - purchasePrice - improvementCost - transferExpenses;
  const isLoss = rawGain < 0;
  const capitalGain = isLoss ? 0 : rawGain;

  // ---- TDS the buyer must deduct: on the FULL consideration ----
  const tdsBaseRate = isLongTerm ? 0.125 : 0.3;
  const tdsSurchargeRate = surchargeRate(saleConsideration, isLongTerm);
  const tdsEffectiveRate = tdsBaseRate * (1 + tdsSurchargeRate) * 1.04;
  const tdsAmount = saleConsideration * tdsEffectiveRate;

  // ---- Estimated actual tax, computed on the GAIN only ----
  // NOTE: surcharge thresholds legally depend on TOTAL Indian income. Here the
  // capital gain is used as a proxy, which is the common case for an NRI whose
  // only Indian income that year is this sale. Flagged to the user in the UI.
  const taxSurchargeRate = surchargeRate(capitalGain, isLongTerm);
  const actualTaxOnGain =
    capitalGain > 0
      ? capitalGain * tdsBaseRate * (1 + taxSurchargeRate) * 1.04
      : 0;

  const excessTds = Math.max(0, tdsAmount - actualTaxOnGain);

  return {
    holdingMonths,
    isLongTerm,
    gainType: isLongTerm
      ? "Long Term Capital Gain"
      : "Short Term Capital Gain",
    capitalGain: rawGain,
    isLoss,
    tdsBaseRate,
    tdsSurchargeRate,
    tdsEffectiveRate,
    tdsAmount,
    taxSurchargeRate,
    actualTaxOnGain,
    excessTds,
    amountReceivedAtSale: saleConsideration - tdsAmount,
  };
}

/** Indian-format currency, e.g. 1,25,00,000 */
export function formatINR(value: number): string {
  const rounded = Math.round(value);
  return "₹" + rounded.toLocaleString("en-IN");
}

/** 14.95 -> "14.95%" */
export function formatPct(rate: number): string {
  return (rate * 100).toFixed(2).replace(/\.00$/, "") + "%";
}
