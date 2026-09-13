/**
 * Loan EMI & SIP calculation logic
 * ==================================
 *
 * Pure functions (no React/DOM) so the maths can be unit-tested on its own.
 * Used by Home Loan EMI, Business Loan EMI, generic EMI and SIP calculators.
 */

export type EmiInput = {
  /** Principal loan amount in rupees */
  principal: number;
  /** Annual interest rate, e.g. 8.5 for 8.5% */
  annualRatePct: number;
  /** Tenure in years */
  tenureYears: number;
};

export type EmiResult = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  /** Year-wise breakdown: principal paid vs interest paid vs balance remaining */
  yearlySchedule: {
    year: number;
    principalPaid: number;
    interestPaid: number;
    balanceRemaining: number;
  }[];
};

/**
 * Standard reducing-balance EMI formula:
 *   EMI = P * r * (1+r)^n / ((1+r)^n - 1)
 * where r = monthly interest rate, n = tenure in months.
 */
export function calculateEmi(input: EmiInput): EmiResult {
  const principal = Math.max(0, input.principal || 0);
  const annualRatePct = Math.max(0, input.annualRatePct || 0);
  const tenureYears = Math.max(0, input.tenureYears || 0);

  const months = Math.round(tenureYears * 12);
  const monthlyRate = annualRatePct / 12 / 100;

  let emi = 0;
  if (principal > 0 && months > 0) {
    if (monthlyRate === 0) {
      emi = principal / months;
    } else {
      const factor = Math.pow(1 + monthlyRate, months);
      emi = (principal * monthlyRate * factor) / (factor - 1);
    }
  }

  const totalPayment = emi * months;
  const totalInterest = Math.max(0, totalPayment - principal);

  // Year-wise amortisation schedule
  const yearlySchedule: EmiResult["yearlySchedule"] = [];
  let balance = principal;
  for (let y = 1; y <= Math.ceil(tenureYears); y++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    const monthsThisYear = Math.min(12, months - (y - 1) * 12);
    for (let m = 0; m < monthsThisYear; m++) {
      const interestPortion = balance * monthlyRate;
      const principalPortion = Math.min(balance, emi - interestPortion);
      balance = Math.max(0, balance - principalPortion);
      yearPrincipal += principalPortion;
      yearInterest += interestPortion;
    }
    yearlySchedule.push({
      year: y,
      principalPaid: yearPrincipal,
      interestPaid: yearInterest,
      balanceRemaining: balance,
    });
  }

  return {
    emi,
    totalPayment,
    totalInterest,
    principal,
    yearlySchedule,
  };
}

export type SipInput = {
  /** Monthly SIP investment amount in rupees */
  monthlyInvestment: number;
  /** Expected annual return, e.g. 12 for 12% */
  expectedReturnPct: number;
  /** Investment duration in years */
  tenureYears: number;
};

export type SipResult = {
  investedAmount: number;
  estimatedReturns: number;
  maturityValue: number;
  /** Year-wise breakdown for the growth chart */
  yearlySchedule: {
    year: number;
    invested: number;
    value: number;
  }[];
};

/**
 * SIP future-value formula (monthly compounding, investment at start of month):
 *   FV = P * [ ( (1+i)^n - 1 ) / i ] * (1+i)
 * where P = monthly investment, i = monthly rate, n = number of months.
 */
export function calculateSip(input: SipInput): SipResult {
  const monthlyInvestment = Math.max(0, input.monthlyInvestment || 0);
  const expectedReturnPct = Math.max(0, input.expectedReturnPct || 0);
  const tenureYears = Math.max(0, input.tenureYears || 0);

  const months = Math.round(tenureYears * 12);
  const monthlyRate = expectedReturnPct / 12 / 100;

  const fv = (n: number) => {
    if (monthlyInvestment <= 0 || n <= 0) return 0;
    if (monthlyRate === 0) return monthlyInvestment * n;
    const factor = (Math.pow(1 + monthlyRate, n) - 1) / monthlyRate;
    return monthlyInvestment * factor * (1 + monthlyRate);
  };

  const maturityValue = fv(months);
  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = Math.max(0, maturityValue - investedAmount);

  const yearlySchedule: SipResult["yearlySchedule"] = [];
  for (let y = 1; y <= Math.ceil(tenureYears); y++) {
    const monthsSoFar = Math.min(months, y * 12);
    yearlySchedule.push({
      year: y,
      invested: monthlyInvestment * monthsSoFar,
      value: fv(monthsSoFar),
    });
  }

  return {
    investedAmount,
    estimatedReturns,
    maturityValue,
    yearlySchedule,
  };
}

/** Indian-format currency, e.g. ₹1,25,00,000 */
export function formatINR(value: number): string {
  const rounded = Math.round(value);
  return "₹" + rounded.toLocaleString("en-IN");
}

/** Short Indian-format for large numbers, e.g. ₹12.5L, ₹1.2Cr */
export function formatINRShort(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 10000000) return "₹" + (value / 10000000).toFixed(2) + " Cr";
  if (abs >= 100000) return "₹" + (value / 100000).toFixed(2) + " L";
  return formatINR(value);
}
