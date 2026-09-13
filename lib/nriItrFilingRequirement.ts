/**
 * nriItrFilingRequirement.ts
 * ---------------------------
 * Pure decision logic for "Do I need to file an Indian ITR as an NRI?"
 *
 * Facts verified 13 Sept 2026 (see claude/implementation-18 doc for sources):
 * - Basic exemption limit for tax year 2026-27: Rs 4,00,000 under the new
 *   (default) tax regime, Rs 2,50,000 under the old regime if opted.
 *   NRIs do NOT get the higher senior-citizen exemption limits — those
 *   apply only to resident individuals.
 * - Filing is mandatory if total Indian-source income exceeds the
 *   applicable basic exemption limit (Section 263, earlier Section 139(1)).
 * - Filing is mandatory regardless of income if, in the financial year,
 *   the person: deposited over Rs 1 crore (aggregate) in one or more
 *   current accounts, OR spent over Rs 2 lakh on foreign travel for
 *   themselves or another person, OR spent over Rs 1 lakh on electricity
 *   consumption. (These are the only three conditions with a fixed
 *   threshold under the "seventh proviso" equivalent — a fourth,
 *   CBDT-prescribed category exists but had no conditions notified as of
 *   this Act's commencement.)
 * - Filing is mandatory to carry forward a business or capital loss to
 *   future years.
 * - Filing is NOT mandatory purely because TDS was deducted, but it is
 *   the ONLY way to claim a refund of excess TDS — this is the single
 *   most common reason NRIs end up filing despite income being below the
 *   exemption limit (e.g. TDS on a property sale, see the Property TDS
 *   Calculator).
 * - Foreign asset / signing authority reporting (Schedule FA) is a
 *   RESIDENT-only requirement and does not apply to NRIs — deliberately
 *   excluded from this tool's logic.
 * - This tool is deliberately conservative: it does not attempt to net
 *   off deductions/exemptions against gross income, and directs anyone
 *   with a genuinely borderline case to a professional rather than
 *   guessing.
 */

export type TaxRegime = "new" | "old";

export interface ItrRequirementInput {
  totalIndianIncome: number;
  regime: TaxRegime;
  tdsDeducted: boolean;
  wantsToCarryForwardLoss: boolean;
  currentAccountDepositOver1Cr: boolean;
  foreignTravelSpendOver2L: boolean;
  electricitySpendOver1L: boolean;
}

export interface ItrRequirementResult {
  required: boolean;
  recommended: boolean;
  exemptionLimit: number;
  reasons: string[];
}

const EXEMPTION_LIMIT: Record<TaxRegime, number> = {
  new: 400000,
  old: 250000,
};

export function checkItrFilingRequirement(
  input: ItrRequirementInput
): ItrRequirementResult {
  const {
    totalIndianIncome,
    regime,
    tdsDeducted,
    wantsToCarryForwardLoss,
    currentAccountDepositOver1Cr,
    foreignTravelSpendOver2L,
    electricitySpendOver1L,
  } = input;

  const exemptionLimit = EXEMPTION_LIMIT[regime];
  const reasons: string[] = [];

  const incomeAboveLimit = totalIndianIncome > exemptionLimit;
  if (incomeAboveLimit) {
    reasons.push(
      `Your total Indian income (₹${totalIndianIncome.toLocaleString(
        "en-IN"
      )}) is above the basic exemption limit of ₹${exemptionLimit.toLocaleString(
        "en-IN"
      )} for the ${regime === "new" ? "new (default)" : "old"} regime.`
    );
  }

  if (currentAccountDepositOver1Cr) {
    reasons.push(
      "You deposited more than ₹1 crore (aggregate) in one or more current accounts this year — this alone makes filing mandatory, regardless of your income."
    );
  }

  if (foreignTravelSpendOver2L) {
    reasons.push(
      "You spent more than ₹2 lakh on foreign travel for yourself or someone else this year — this alone makes filing mandatory, regardless of your income."
    );
  }

  if (electricitySpendOver1L) {
    reasons.push(
      "You spent more than ₹1 lakh on electricity consumption this year — this alone makes filing mandatory, regardless of your income."
    );
  }

  if (wantsToCarryForwardLoss) {
    reasons.push(
      "You want to carry forward a business or capital loss to future years — this is only possible if you file your return, and file it on time."
    );
  }

  const required =
    incomeAboveLimit ||
    currentAccountDepositOver1Cr ||
    foreignTravelSpendOver2L ||
    electricitySpendOver1L ||
    wantsToCarryForwardLoss;

  let recommended = false;
  if (!required && tdsDeducted) {
    recommended = true;
    reasons.push(
      "Filing is not mandatory in your case, but TDS has been deducted on your Indian income — filing a return is the only way to claim that money back as a refund."
    );
  }

  if (!required && !recommended) {
    reasons.push(
      "Based on what you've told us, your Indian income is within the exemption limit, no TDS was deducted, and none of the mandatory-filing triggers apply — you are not required to file a return this year."
    );
  }

  return { required, recommended, exemptionLimit, reasons };
}
