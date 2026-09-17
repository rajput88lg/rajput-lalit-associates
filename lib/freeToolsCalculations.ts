/**
 * Free Worldwide Tools — pure calculation functions
 * ===================================================
 * No React/DOM here so every formula can be sanity-checked on its own.
 * Round 1 of the "50 Free Tools" project — see claude/TOOLS-ROADMAP...
 * in the project docs for the full 50-tool list and remaining rounds.
 */

/* ---------------------------------------------------------------- */
/* 1. Percentage Calculator                                          */
/* ---------------------------------------------------------------- */

export function percentOf(percent: number, base: number): number {
  return round2((percent / 100) * base);
}

export function whatPercentOf(part: number, whole: number): number {
  if (!whole) return 0;
  return round2((part / whole) * 100);
}

export function percentChange(oldValue: number, newValue: number): number {
  if (!oldValue) return 0;
  return round2(((newValue - oldValue) / Math.abs(oldValue)) * 100);
}

/* ---------------------------------------------------------------- */
/* 2. Age Calculator                                                  */
/* ---------------------------------------------------------------- */

export type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthdayInDays: number;
};

export function calculateAge(birthDate: Date, asOf: Date): AgeResult {
  let years = asOf.getFullYear() - birthDate.getFullYear();
  let months = asOf.getMonth() - birthDate.getMonth();
  let days = asOf.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(asOf.getFullYear(), asOf.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.max(0, Math.round((asOf.getTime() - birthDate.getTime()) / msPerDay));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;

  let nextBirthday = new Date(asOf.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (nextBirthday.getTime() < asOf.getTime()) {
    nextBirthday = new Date(asOf.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
  }
  const nextBirthdayInDays = Math.round((nextBirthday.getTime() - asOf.getTime()) / msPerDay);

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    totalDays,
    totalWeeks,
    totalMonths: Math.max(0, totalMonths),
    nextBirthdayInDays,
  };
}

/* ---------------------------------------------------------------- */
/* 3. BMI Calculator                                                  */
/* ---------------------------------------------------------------- */

export type BmiCategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export type BmiResult = {
  bmi: number;
  category: BmiCategory;
};

/** heightCm and weightKg — always pass metric values in (page converts imperial first) */
export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weightKg / (heightM * heightM) : 0;
  let category: BmiCategory = "Normal";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  return { bmi: round1(bmi), category };
}

export function lbToKg(lb: number): number {
  return lb * 0.45359237;
}
export function ftInToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

/* ---------------------------------------------------------------- */
/* 4. Compound Interest Calculator                                   */
/* ---------------------------------------------------------------- */

export type CompoundFrequency = 1 | 2 | 4 | 12 | 365;

export type CompoundInterestResult = {
  maturityAmount: number;
  totalInterest: number;
  principal: number;
  yearlySchedule: { year: number; amount: number; interestSoFar: number }[];
};

export function calculateCompoundInterest(
  principal: number,
  annualRatePct: number,
  years: number,
  frequency: CompoundFrequency
): CompoundInterestResult {
  const r = annualRatePct / 100;
  const n = frequency;

  const yearlySchedule: CompoundInterestResult["yearlySchedule"] = [];
  const maxYears = Math.max(0, Math.round(years));

  for (let y = 1; y <= maxYears; y++) {
    const amount = principal * Math.pow(1 + r / n, n * y);
    yearlySchedule.push({
      year: y,
      amount: round2(amount),
      interestSoFar: round2(amount - principal),
    });
  }

  const maturityAmount =
    maxYears > 0 ? yearlySchedule[yearlySchedule.length - 1].amount : principal;
  const totalInterest = Math.max(0, round2(maturityAmount - principal));

  return {
    maturityAmount: round2(maturityAmount),
    totalInterest,
    principal: round2(principal),
    yearlySchedule,
  };
}

/* ---------------------------------------------------------------- */
/* 5. Date Difference Calculator                                     */
/* ---------------------------------------------------------------- */

export type DateDiffResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
};

export function calculateDateDifference(start: Date, end: Date): DateDiffResult {
  const [from, to] = start.getTime() <= end.getTime() ? [start, end] : [end, start];

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((to.getTime() - from.getTime()) / msPerDay);

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
  };
}

/* ---------------------------------------------------------------- */
/* 6. Discount Calculator                                             */
/* ---------------------------------------------------------------- */

export type DiscountResult = {
  discountAmount: number;
  finalPrice: number;
  savingsPct: number;
};

export function calculateDiscountFromPercent(
  originalPrice: number,
  discountPct: number
): DiscountResult {
  const discountAmount = round2((discountPct / 100) * originalPrice);
  const finalPrice = round2(originalPrice - discountAmount);
  return { discountAmount, finalPrice, savingsPct: round2(discountPct) };
}

export function calculateDiscountFromFinalPrice(
  originalPrice: number,
  finalPrice: number
): DiscountResult {
  const discountAmount = round2(Math.max(0, originalPrice - finalPrice));
  const savingsPct = originalPrice ? round2((discountAmount / originalPrice) * 100) : 0;
  return { discountAmount, finalPrice: round2(finalPrice), savingsPct };
}

/* ---------------------------------------------------------------- */
/* 7. Tip Calculator                                                  */
/* ---------------------------------------------------------------- */

export type TipResult = {
  tipAmount: number;
  totalAmount: number;
  perPersonTip: number;
  perPersonTotal: number;
};

export function calculateTip(billAmount: number, tipPct: number, people: number): TipResult {
  const safePeople = Math.max(1, Math.round(people) || 1);
  const tipAmount = round2((tipPct / 100) * billAmount);
  const totalAmount = round2(billAmount + tipAmount);
  return {
    tipAmount,
    totalAmount,
    perPersonTip: round2(tipAmount / safePeople),
    perPersonTotal: round2(totalAmount / safePeople),
  };
}

/* ---------------------------------------------------------------- */
/* 8. Simple Interest Calculator                                     */
/* ---------------------------------------------------------------- */

export type SimpleInterestResult = {
  interest: number;
  totalAmount: number;
  principal: number;
};

export function calculateSimpleInterest(
  principal: number,
  annualRatePct: number,
  years: number
): SimpleInterestResult {
  const interest = round2((principal * annualRatePct * years) / 100);
  return {
    interest,
    totalAmount: round2(principal + interest),
    principal: round2(principal),
  };
}

/* ---------------------------------------------------------------- */
/* 9. Length Converter                                                */
/* ---------------------------------------------------------------- */

export type LengthUnit = "mm" | "cm" | "m" | "km" | "in" | "ft" | "yd" | "mi";

// Every unit's size relative to 1 metre
const LENGTH_TO_METERS: Record<LengthUnit, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

export const LENGTH_UNIT_LABELS: Record<LengthUnit, string> = {
  mm: "Millimetres (mm)",
  cm: "Centimetres (cm)",
  m: "Metres (m)",
  km: "Kilometres (km)",
  in: "Inches (in)",
  ft: "Feet (ft)",
  yd: "Yards (yd)",
  mi: "Miles (mi)",
};

export function convertLength(value: number, from: LengthUnit, to: LengthUnit): number {
  const meters = value * LENGTH_TO_METERS[from];
  const result = meters / LENGTH_TO_METERS[to];
  return roundSmart(result);
}

/* ---------------------------------------------------------------- */
/* 10. Temperature Converter                                          */
/* ---------------------------------------------------------------- */

export type TempUnit = "C" | "F" | "K";

export function convertTemperature(value: number, from: TempUnit, to: TempUnit): number {
  if (from === to) return round2(value);

  // Convert anything to Celsius first
  let celsius: number;
  if (from === "C") celsius = value;
  else if (from === "F") celsius = ((value - 32) * 5) / 9;
  else celsius = value - 273.15;

  let result: number;
  if (to === "C") result = celsius;
  else if (to === "F") result = (celsius * 9) / 5 + 32;
  else result = celsius + 273.15;

  return round2(result);
}

/* ---------------------------------------------------------------- */
/* shared helpers                                                     */
/* ---------------------------------------------------------------- */

function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function round1(value: number): number {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

/** For unit conversions: keep more precision for very small results */
function roundSmart(value: number): number {
  if (Math.abs(value) >= 100) return round2(value);
  return Math.round((value + Number.EPSILON) * 100000) / 100000;
}

export function formatNumber(value: number): string {
  return value.toLocaleString("en-US", { maximumFractionDigits: 5 });
}

export function formatUSD(value: number): string {
  return "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
