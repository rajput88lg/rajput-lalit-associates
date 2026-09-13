/**
 * HRA (House Rent Allowance) Exemption Calculator
 * =================================================
 *
 * Formula (Section 10(13A) of the Income-tax Act, 1961, read with Rule 2A) —
 * exemption is the LEAST of:
 *   1. Actual HRA received from employer
 *   2. Rent paid minus 10% of salary (Basic + DA)
 *   3. 50% of salary (metro city) or 40% of salary (non-metro city)
 *
 * Verified 13 Sept 2026: metro cities for the 50% rate are Delhi, Mumbai,
 * Kolkata and Chennai ONLY. Some blogs claim an 8-city expansion from
 * FY 2026-27 (adding Bengaluru, Pune, Hyderabad, Ahmedabad) but this could
 * not be confirmed against the actual CBDT Income-tax Rules, 2026
 * notification or any major financial outlet — treated as unverified and
 * deliberately NOT built into this calculator.
 *
 * HRA exemption is available ONLY under the OLD tax regime — fully taxable
 * under the new regime.
 */

export type HraInput = {
  /** Annual Basic Salary + DA, in rupees */
  annualBasicSalary: number;
  /** Annual HRA received from employer, in rupees */
  annualHraReceived: number;
  /** Annual rent actually paid, in rupees */
  annualRentPaid: number;
  isMetroCity: boolean;
};

export type HraResult = {
  actualHraReceived: number;
  rentMinusTenPercentSalary: number;
  percentOfSalaryLimit: number;
  exemptAmount: number;
  taxableHra: number;
  limitingFactor: "hra" | "rent" | "salary_percent";
};

export function calculateHraExemption(input: HraInput): HraResult {
  const { annualBasicSalary, annualHraReceived, annualRentPaid, isMetroCity } = input;

  const tenPercentSalary = annualBasicSalary * 0.1;
  const rentMinusTenPercentSalary = Math.max(0, annualRentPaid - tenPercentSalary);
  const percentOfSalaryLimit = annualBasicSalary * (isMetroCity ? 0.5 : 0.4);

  const candidates: { value: number; key: "hra" | "rent" | "salary_percent" }[] = [
    { value: annualHraReceived, key: "hra" },
    { value: rentMinusTenPercentSalary, key: "rent" },
    { value: percentOfSalaryLimit, key: "salary_percent" },
  ];

  candidates.sort((a, b) => a.value - b.value);
  const smallest = candidates[0];

  const exemptAmount = Math.max(0, Math.round(smallest.value));
  const taxableHra = Math.max(0, Math.round(annualHraReceived - exemptAmount));

  return {
    actualHraReceived: annualHraReceived,
    rentMinusTenPercentSalary: Math.round(rentMinusTenPercentSalary),
    percentOfSalaryLimit: Math.round(percentOfSalaryLimit),
    exemptAmount,
    taxableHra,
    limitingFactor: smallest.key,
  };
}

export function formatINR(value: number): string {
  return "₹" + Math.round(value).toLocaleString("en-IN");
}
