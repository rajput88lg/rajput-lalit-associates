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
/* 11. Sales Tax / VAT Calculator                                     */
/* ---------------------------------------------------------------- */

export type SalesTaxResult = {
  basePrice: number;
  taxAmount: number;
  totalPrice: number;
  ratePct: number;
};

/** Add tax on top of a base (tax-exclusive) price. */
export function calculateSalesTaxAdd(basePrice: number, ratePct: number): SalesTaxResult {
  const taxAmount = round2((ratePct / 100) * basePrice);
  return {
    basePrice: round2(basePrice),
    taxAmount,
    totalPrice: round2(basePrice + taxAmount),
    ratePct: round2(ratePct),
  };
}

/** Work backwards from a tax-inclusive total to find the base price and tax. */
export function calculateSalesTaxRemove(totalPrice: number, ratePct: number): SalesTaxResult {
  const basePrice = round2(totalPrice / (1 + ratePct / 100));
  const taxAmount = round2(totalPrice - basePrice);
  return { basePrice, taxAmount, totalPrice: round2(totalPrice), ratePct: round2(ratePct) };
}

/* ---------------------------------------------------------------- */
/* 12. Markup Calculator                                              */
/* ---------------------------------------------------------------- */

export type MarkupResult = {
  cost: number;
  markupPct: number;
  sellingPrice: number;
  grossProfit: number;
  marginPct: number;
};

export function calculateMarkup(cost: number, markupPct: number): MarkupResult {
  const sellingPrice = round2(cost * (1 + markupPct / 100));
  const grossProfit = round2(sellingPrice - cost);
  const marginPct = sellingPrice ? round2((grossProfit / sellingPrice) * 100) : 0;
  return { cost: round2(cost), markupPct: round2(markupPct), sellingPrice, grossProfit, marginPct };
}

/* ---------------------------------------------------------------- */
/* 13. Profit Margin Calculator                                       */
/* ---------------------------------------------------------------- */

export type ProfitMarginResult = {
  revenue: number;
  cost: number;
  grossProfit: number;
  marginPct: number;
  markupPct: number;
};

export function calculateProfitMargin(revenue: number, cost: number): ProfitMarginResult {
  const grossProfit = round2(revenue - cost);
  const marginPct = revenue ? round2((grossProfit / revenue) * 100) : 0;
  const markupPct = cost ? round2((grossProfit / cost) * 100) : 0;
  return { revenue: round2(revenue), cost: round2(cost), grossProfit, marginPct, markupPct };
}

/* ---------------------------------------------------------------- */
/* 14. Break-Even Point Calculator                                    */
/* ---------------------------------------------------------------- */

export type BreakEvenResult = {
  unitsToBreakEven: number;
  revenueAtBreakEven: number;
  contributionMarginPerUnit: number;
  contributionMarginPct: number;
};

export function calculateBreakEven(
  fixedCosts: number,
  variableCostPerUnit: number,
  pricePerUnit: number
): BreakEvenResult {
  const contributionMarginPerUnit = round2(pricePerUnit - variableCostPerUnit);
  const unitsToBreakEven =
    contributionMarginPerUnit > 0 ? Math.ceil(fixedCosts / contributionMarginPerUnit) : 0;
  const contributionMarginPct = pricePerUnit
    ? round2((contributionMarginPerUnit / pricePerUnit) * 100)
    : 0;
  return {
    unitsToBreakEven,
    revenueAtBreakEven: round2(unitsToBreakEven * pricePerUnit),
    contributionMarginPerUnit,
    contributionMarginPct,
  };
}

/* ---------------------------------------------------------------- */
/* 15. Savings Goal Calculator                                        */
/* ---------------------------------------------------------------- */

export type SavingsGoalResult = {
  requiredMonthlyContribution: number;
  totalContributed: number;
  totalGrowth: number;
};

/**
 * Reverse of the SIP future-value formula (annuity due, matches the site's
 * existing SIP calculator convention in lib/loanCalculations.ts):
 *   FV = PMT * [ ((1+i)^n - 1) / i ] * (1+i)  =>  PMT = FV / ( [((1+i)^n - 1)/i] * (1+i) )
 */
export function calculateSavingsGoal(
  targetAmount: number,
  annualRatePct: number,
  months: number
): SavingsGoalResult {
  const n = Math.max(0, Math.round(months));
  const i = annualRatePct / 12 / 100;

  let requiredMonthlyContribution = 0;
  if (n > 0) {
    if (i === 0) {
      requiredMonthlyContribution = targetAmount / n;
    } else {
      const factor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      requiredMonthlyContribution = factor > 0 ? targetAmount / factor : 0;
    }
  }

  const totalContributed = round2(requiredMonthlyContribution * n);
  const totalGrowth = Math.max(0, round2(targetAmount - totalContributed));

  return {
    requiredMonthlyContribution: round2(requiredMonthlyContribution),
    totalContributed,
    totalGrowth,
  };
}

/* ---------------------------------------------------------------- */
/* 16 & 17. Loan Amortization & Retirement Corpus Calculators          */
/*    — these reuse the site's existing, already-verified              */
/*    calculateEmi() / calculateSip() from lib/loanCalculations.ts      */
/*    (same maths as the Home Loan EMI & SIP calculators), just         */
/*    presented with a currency-agnostic UI. No new formulas needed.    */
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* 18. Salary / Wage Converter                                        */
/* ---------------------------------------------------------------- */

export type WageAssumptions = {
  hoursPerDay: number;
  daysPerWeek: number;
  weeksPerYear: number;
};

export type WageResult = {
  hourly: number;
  daily: number;
  weekly: number;
  monthly: number;
  annual: number;
};

export const DEFAULT_WAGE_ASSUMPTIONS: WageAssumptions = {
  hoursPerDay: 8,
  daysPerWeek: 5,
  weeksPerYear: 52,
};

export type WagePeriod = "hourly" | "daily" | "weekly" | "monthly" | "annual";

export function convertWage(
  amount: number,
  period: WagePeriod,
  assumptions: WageAssumptions = DEFAULT_WAGE_ASSUMPTIONS
): WageResult {
  const { hoursPerDay, daysPerWeek, weeksPerYear } = assumptions;
  const hoursPerWeek = hoursPerDay * daysPerWeek;
  const hoursPerYear = hoursPerWeek * weeksPerYear;

  let hourly: number;
  switch (period) {
    case "hourly":
      hourly = amount;
      break;
    case "daily":
      hourly = hoursPerDay ? amount / hoursPerDay : 0;
      break;
    case "weekly":
      hourly = hoursPerWeek ? amount / hoursPerWeek : 0;
      break;
    case "monthly":
      hourly = hoursPerYear ? (amount * 12) / hoursPerYear : 0;
      break;
    case "annual":
      hourly = hoursPerYear ? amount / hoursPerYear : 0;
      break;
  }

  return {
    hourly: round2(hourly),
    daily: round2(hourly * hoursPerDay),
    weekly: round2(hourly * hoursPerWeek),
    monthly: round2((hourly * hoursPerYear) / 12),
    annual: round2(hourly * hoursPerYear),
  };
}

/* ---------------------------------------------------------------- */
/* 19. Freelancer Hourly Rate Calculator                               */
/* ---------------------------------------------------------------- */

export type FreelancerRateResult = {
  hourlyRate: number;
  totalBillableHours: number;
  grossAnnualRevenueAtRate: number;
};

export function calculateFreelancerRate(
  targetAnnualIncome: number,
  annualBusinessExpenses: number,
  billableHoursPerWeek: number,
  weeksPerYear: number
): FreelancerRateResult {
  const totalBillableHours = Math.max(0, billableHoursPerWeek) * Math.max(0, weeksPerYear);
  const requiredRevenue = Math.max(0, targetAnnualIncome) + Math.max(0, annualBusinessExpenses);
  const hourlyRate = totalBillableHours > 0 ? round2(requiredRevenue / totalBillableHours) : 0;
  return {
    hourlyRate,
    totalBillableHours: round2(totalBillableHours),
    grossAnnualRevenueAtRate: round2(hourlyRate * totalBillableHours),
  };
}

/* ---------------------------------------------------------------- */
/* 20. Rule of 72 (Doubling Time) Calculator                          */
/* ---------------------------------------------------------------- */

export type RuleOf72Result = {
  yearsToDouble: number;
};

export function calculateYearsToDouble(annualRatePct: number): RuleOf72Result {
  return { yearsToDouble: annualRatePct > 0 ? round1(72 / annualRatePct) : 0 };
}

export function calculateRequiredRateToDouble(years: number): { ratePct: number } {
  return { ratePct: years > 0 ? round1(72 / years) : 0 };
}

/* ---------------------------------------------------------------- */
/* 21. Weight / Mass Converter                                        */
/* ---------------------------------------------------------------- */

export type WeightUnit = "mg" | "g" | "kg" | "tonne" | "oz" | "lb" | "stone";

const WEIGHT_TO_GRAMS: Record<WeightUnit, number> = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  tonne: 1_000_000,
  oz: 28.349523125,
  lb: 453.59237,
  stone: 6350.29318,
};

export const WEIGHT_UNIT_LABELS: Record<WeightUnit, string> = {
  mg: "Milligrams (mg)",
  g: "Grams (g)",
  kg: "Kilograms (kg)",
  tonne: "Tonnes (t)",
  oz: "Ounces (oz)",
  lb: "Pounds (lb)",
  stone: "Stone (st)",
};

export function convertWeight(value: number, from: WeightUnit, to: WeightUnit): number {
  const grams = value * WEIGHT_TO_GRAMS[from];
  return roundSmart(grams / WEIGHT_TO_GRAMS[to]);
}

/* ---------------------------------------------------------------- */
/* 22. Area Converter                                                 */
/* ---------------------------------------------------------------- */

export type AreaUnit = "sqm" | "sqft" | "sqyd" | "acre" | "hectare" | "sqkm" | "sqmi";

const AREA_TO_SQM: Record<AreaUnit, number> = {
  sqm: 1,
  sqft: 0.09290304,
  sqyd: 0.83612736,
  acre: 4046.8564224,
  hectare: 10000,
  sqkm: 1_000_000,
  sqmi: 2_589_988.110336,
};

export const AREA_UNIT_LABELS: Record<AreaUnit, string> = {
  sqm: "Square Metres (m²)",
  sqft: "Square Feet (sq ft)",
  sqyd: "Square Yards (sq yd)",
  acre: "Acres",
  hectare: "Hectares",
  sqkm: "Square Kilometres (km²)",
  sqmi: "Square Miles (sq mi)",
};

export function convertArea(value: number, from: AreaUnit, to: AreaUnit): number {
  const sqm = value * AREA_TO_SQM[from];
  return roundSmart(sqm / AREA_TO_SQM[to]);
}

/* ---------------------------------------------------------------- */
/* 23. Volume Converter                                               */
/* ---------------------------------------------------------------- */

export type VolumeUnit = "ml" | "litre" | "usGallon" | "usCup" | "usFlOz" | "imperialGallon";

const VOLUME_TO_ML: Record<VolumeUnit, number> = {
  ml: 1,
  litre: 1000,
  usGallon: 3785.411784,
  usCup: 236.5882365,
  usFlOz: 29.5735295625,
  imperialGallon: 4546.09,
};

export const VOLUME_UNIT_LABELS: Record<VolumeUnit, string> = {
  ml: "Millilitres (ml)",
  litre: "Litres (L)",
  usGallon: "US Gallons (gal)",
  usCup: "US Cups",
  usFlOz: "US Fluid Ounces (fl oz)",
  imperialGallon: "Imperial Gallons",
};

export function convertVolume(value: number, from: VolumeUnit, to: VolumeUnit): number {
  const ml = value * VOLUME_TO_ML[from];
  return roundSmart(ml / VOLUME_TO_ML[to]);
}

/* ---------------------------------------------------------------- */
/* 24. Speed Converter                                                */
/* ---------------------------------------------------------------- */

export type SpeedUnit = "kmh" | "mph" | "ms" | "knot";

const SPEED_TO_MS: Record<SpeedUnit, number> = {
  kmh: 1 / 3.6,
  mph: 0.44704,
  ms: 1,
  knot: 0.514444444,
};

export const SPEED_UNIT_LABELS: Record<SpeedUnit, string> = {
  kmh: "Kilometres per hour (km/h)",
  mph: "Miles per hour (mph)",
  ms: "Metres per second (m/s)",
  knot: "Knots",
};

export function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number {
  const ms = value * SPEED_TO_MS[from];
  return roundSmart(ms / SPEED_TO_MS[to]);
}

/* ---------------------------------------------------------------- */
/* 25. World Time Zone Converter                                      */
/* ---------------------------------------------------------------- */

export type TimezoneConversionInput = {
  /** "YYYY-MM-DD" */
  date: string;
  /** "HH:mm" 24-hour */
  time: string;
  fromTimeZone: string;
  toTimeZone: string;
};

export type TimezoneConversionResult = {
  resultDate: string;
  resultTime: string;
  resultLabel: string;
  dayOffset: number;
  fromOffsetLabel: string;
  toOffsetLabel: string;
};

function getUtcOffsetMinutes(instantMs: number, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = dtf.formatToParts(new Date(instantMs));
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;
  const asUtc = Date.UTC(
    Number(map.year),
    Number(map.month) - 1,
    Number(map.day),
    Number(map.hour),
    Number(map.minute),
    Number(map.second)
  );
  return (asUtc - instantMs) / 60000;
}

export function convertTimezone(input: TimezoneConversionInput): TimezoneConversionResult {
  const { date, time, fromTimeZone, toTimeZone } = input;
  const [y, mo, d] = date.split("-").map(Number);
  const [h, mi] = time.split(":").map(Number);

  // Step 1: treat the wall-clock input as a naive UTC instant
  const naiveMs = Date.UTC(y, (mo || 1) - 1, d || 1, h || 0, mi || 0);

  // Step 2: find that naive instant's offset in the SOURCE timezone, then
  // correct to get the true UTC instant it represents.
  const sourceOffsetMin = getUtcOffsetMinutes(naiveMs, fromTimeZone);
  const trueUtcMs = naiveMs - sourceOffsetMin * 60000;

  // Step 3: format the true UTC instant directly in the TARGET timezone.
  const targetOffsetMin = getUtcOffsetMinutes(trueUtcMs, toTimeZone);

  const outDtf = new Intl.DateTimeFormat("en-US", {
    timeZone: toTimeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const outParts = outDtf.formatToParts(new Date(trueUtcMs));
  const outMap: Record<string, string> = {};
  for (const p of outParts) outMap[p.type] = p.value;

  const resultDate = `${outMap.year}-${outMap.month}-${outMap.day}`;
  const resultTime = `${outMap.hour}:${outMap.minute}`;

  const inDateOnly = Date.UTC(y, (mo || 1) - 1, d || 1);
  const outDateOnly = Date.UTC(Number(outMap.year), Number(outMap.month) - 1, Number(outMap.day));
  const dayOffset = Math.round((outDateOnly - inDateOnly) / 86400000);

  const fmtOffset = (min: number) => {
    const sign = min >= 0 ? "+" : "-";
    const abs = Math.abs(min);
    const hh = Math.floor(abs / 60);
    const mm = abs % 60;
    return `UTC${sign}${hh}${mm ? ":" + String(mm).padStart(2, "0") : ""}`;
  };

  const resultLabel =
    dayOffset === 0
      ? "Same day"
      : dayOffset > 0
      ? `Next day (+${dayOffset})`
      : `Previous day (${dayOffset})`;

  return {
    resultDate,
    resultTime,
    resultLabel,
    dayOffset,
    fromOffsetLabel: fmtOffset(sourceOffsetMin),
    toOffsetLabel: fmtOffset(targetOffsetMin),
  };
}

/* ---------------------------------------------------------------- */
/* 26. Number to Words Converter                                      */
/* ---------------------------------------------------------------- */

const ONES = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen",
];
const TENS = [
  "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
];
const SCALES = ["", "Thousand", "Million", "Billion", "Trillion"];

function threeDigitsToWords(n: number): string {
  const parts: string[] = [];
  const hundreds = Math.floor(n / 100);
  const remainder = n % 100;
  if (hundreds > 0) parts.push(`${ONES[hundreds]} Hundred`);
  if (remainder > 0) {
    if (remainder < 20) {
      parts.push(ONES[remainder]);
    } else {
      const tensDigit = Math.floor(remainder / 10);
      const onesDigit = remainder % 10;
      parts.push(onesDigit > 0 ? `${TENS[tensDigit]}-${ONES[onesDigit]}` : TENS[tensDigit]);
    }
  }
  return parts.join(" ");
}

/** International (thousand/million/billion) number-to-words. Integers only. */
export function numberToWords(value: number): string {
  const isNegative = value < 0;
  let n = Math.floor(Math.abs(value));

  if (n === 0) return "Zero";
  if (n >= 1_000_000_000_000_000) return "Number too large to convert";

  const groups: number[] = [];
  while (n > 0) {
    groups.push(n % 1000);
    n = Math.floor(n / 1000);
  }

  const words: string[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] === 0) continue;
    const groupWords = threeDigitsToWords(groups[i]);
    words.push(SCALES[i] ? `${groupWords} ${SCALES[i]}` : groupWords);
  }

  return (isNegative ? "Negative " : "") + words.join(" ");
}

/* ---------------------------------------------------------------- */
/* 27. Roman Numeral Converter                                        */
/* ---------------------------------------------------------------- */

const ROMAN_TABLE: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

export function toRoman(value: number): string {
  let n = Math.floor(value);
  if (n <= 0 || n > 3999) return "Enter a number between 1 and 3999";
  let result = "";
  for (const [num, sym] of ROMAN_TABLE) {
    while (n >= num) {
      result += sym;
      n -= num;
    }
  }
  return result;
}

const ROMAN_VALUES: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
};

export function fromRoman(input: string): number | null {
  const s = input.trim().toUpperCase();
  if (!s || !/^[IVXLCDM]+$/.test(s)) return null;

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = ROMAN_VALUES[s[i]];
    const next = ROMAN_VALUES[s[i + 1]];
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  // Round-trip validation guards against invalid forms like "IIII" or "VV"
  if (toRoman(total) !== s) return null;
  return total;
}

/* ---------------------------------------------------------------- */
/* 28. GPA / CGPA Calculator                                          */
/* ---------------------------------------------------------------- */

export type GpaCourse = {
  credits: number;
  gradePoints: number; // 0–4.0 scale
};

export type GpaResult = {
  gpa: number;
  totalCredits: number;
  totalQualityPoints: number;
};

export const US_LETTER_GRADE_POINTS: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0,
};

export function calculateGpa(courses: GpaCourse[]): GpaResult {
  const totalCredits = courses.reduce((sum, c) => sum + Math.max(0, c.credits), 0);
  const totalQualityPoints = courses.reduce(
    (sum, c) => sum + Math.max(0, c.credits) * c.gradePoints,
    0
  );
  return {
    gpa: totalCredits > 0 ? round2(totalQualityPoints / totalCredits) : 0,
    totalCredits: round2(totalCredits),
    totalQualityPoints: round2(totalQualityPoints),
  };
}

/* ---------------------------------------------------------------- */
/* 29. Fraction ⇔ Decimal Converter                              */
/* ---------------------------------------------------------------- */

export type FractionResult = {
  numerator: number;
  denominator: number;
  simplified: string;
};

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

/** Converts a decimal (given as its literal string, to preserve precision) to a simplified fraction. */
export function decimalToFraction(decimalStr: string): FractionResult {
  const trimmed = decimalStr.trim();
  const isNegative = trimmed.startsWith("-");
  const clean = trimmed.replace(/^-/, "");
  const [wholePart, fracPart = ""] = clean.split(".");
  const whole = Number(wholePart || "0");

  if (!fracPart) {
    return { numerator: (isNegative ? -1 : 1) * whole, denominator: 1, simplified: `${whole}/1` };
  }

  const denominator = Math.pow(10, fracPart.length);
  const numerator = whole * denominator + Number(fracPart);
  const divisor = gcd(numerator, denominator);
  const simpleNum = numerator / divisor;
  const simpleDen = denominator / divisor;

  return {
    numerator: (isNegative ? -1 : 1) * simpleNum,
    denominator: simpleDen,
    simplified: `${isNegative ? "-" : ""}${simpleNum}/${simpleDen}`,
  };
}

export function fractionToDecimal(numerator: number, denominator: number): number {
  if (denominator === 0) return 0;
  return roundSmart(numerator / denominator);
}

/* ---------------------------------------------------------------- */
/* 30. Random Number Generator                                       */
/* ---------------------------------------------------------------- */

export type RandomNumberOptions = {
  min: number;
  max: number;
  count: number;
  unique: boolean;
};

export function generateRandomInts(options: RandomNumberOptions): number[] {
  const min = Math.ceil(Math.min(options.min, options.max));
  const max = Math.floor(Math.max(options.min, options.max));
  const rangeSize = max - min + 1;
  let count = Math.max(1, Math.floor(options.count));

  if (options.unique) {
    count = Math.min(count, rangeSize);
    const pool: number[] = [];
    for (let i = min; i <= max; i++) pool.push(i);
    // Fisher-Yates partial shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
  }

  const results: number[] = [];
  for (let i = 0; i < count; i++) {
    results.push(Math.floor(Math.random() * rangeSize) + min);
  }
  return results;
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
