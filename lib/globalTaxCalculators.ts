/**
 * Take-home pay calculators — USA, Canada (Ontario), Australia
 * =============================================================
 *
 * Figures verified 29 Sept 2026 (see sources in the PR):
 *
 * USA — tax year 2026 (IRS Rev. Proc. 2025-32, incl. One Big Beautiful Bill changes)
 *   Standard deduction: single $16,100 · married filing jointly $32,200
 *   Brackets single: 10% ≤12,400 · 12% ≤50,400 · 22% ≤105,700 · 24% ≤201,775 ·
 *                    32% ≤256,225 · 35% ≤640,600 · 37% above
 *   Brackets MFJ:    10% ≤24,800 · 12% ≤100,800 · 22% ≤211,400 · 24% ≤403,550 ·
 *                    32% ≤512,450 · 35% ≤768,700 · 37% above
 *   Social Security 6.2% up to $184,500 wages · Medicare 1.45% +
 *   0.9% additional above $200,000 (single) / $250,000 (MFJ)
 *   State income tax: user enters a flat % (varies by state; 0 in e.g. Texas).
 *
 * Canada — 2026, employee in Ontario (or federal only for other provinces)
 *   Federal: 14% ≤58,523 · 20.5% ≤117,045 · 26% ≤181,440 · 29% ≤258,482 · 33% above
 *   BPA $16,452, reduced to $14,829 between $181,440 and $258,482 net income
 *   Canada employment amount $1,501 · credits at 14%
 *   CPP 5.95% on $3,500–$74,600 · CPP2 4% on $74,600–$85,000
 *   EI 1.63% up to $68,900
 *   Ontario: 5.05% ≤53,891 · 9.15% ≤107,785 · 11.16% ≤150,000 · 12.16% ≤220,000 ·
 *            13.16% above · BPA $12,989 · surtax 20% of basic tax over $5,818 +
 *            36% over $7,446 · Ontario Health Premium (up to $900)
 *   Not modelled: Ontario low-income tax reduction, other credits.
 *
 * Australia — 2026-27 income year, resident
 *   0% ≤18,200 · 15% ≤45,000 · 30% ≤135,000 · 37% ≤190,000 · 45% above
 *   LITO up to $700 (tapers 37,500–66,667) · Medicare levy 2%, single
 *   low-income threshold $28,011 with 10% shade-in.
 *   Not modelled: HELP/HECS repayments, Medicare levy surcharge, super.
 */

export type Line = { label: string; amount: number };
export type TaxResult = {
  gross: number;
  lines: Line[];
  totalTax: number;
  takeHome: number;
  effectiveRate: number;
  marginalRate: number;
  currency: "USD" | "CAD" | "AUD";
};

type Bracket = { upto: number; rate: number };

function bracketTax(income: number, brackets: Bracket[]): number {
  let tax = 0;
  let last = 0;
  for (const b of brackets) {
    if (income <= last) break;
    tax += (Math.min(income, b.upto) - last) * b.rate;
    last = b.upto;
  }
  return tax;
}

function marginal(income: number, brackets: Bracket[]): number {
  return (brackets.find((b) => income <= b.upto) ?? brackets[brackets.length - 1]).rate;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

function finish(gross: number, lines: Line[], marginalRate: number, currency: TaxResult["currency"]): TaxResult {
  const clean = lines.map((l) => ({ ...l, amount: round2(Math.max(0, l.amount)) }));
  const totalTax = round2(clean.reduce((s, l) => s + l.amount, 0));
  return {
    gross,
    lines: clean,
    totalTax,
    takeHome: round2(gross - totalTax),
    effectiveRate: gross > 0 ? totalTax / gross : 0,
    marginalRate,
    currency,
  };
}

// ---------------------------------------------------------------- USA ----

export type UsFilingStatus = "single" | "married";

const US = {
  single: {
    std: 16100,
    addlMedicare: 200000,
    brackets: [
      { upto: 12400, rate: 0.1 },
      { upto: 50400, rate: 0.12 },
      { upto: 105700, rate: 0.22 },
      { upto: 201775, rate: 0.24 },
      { upto: 256225, rate: 0.32 },
      { upto: 640600, rate: 0.35 },
      { upto: Infinity, rate: 0.37 },
    ],
  },
  married: {
    std: 32200,
    addlMedicare: 250000,
    brackets: [
      { upto: 24800, rate: 0.1 },
      { upto: 100800, rate: 0.12 },
      { upto: 211400, rate: 0.22 },
      { upto: 403550, rate: 0.24 },
      { upto: 512450, rate: 0.32 },
      { upto: 768700, rate: 0.35 },
      { upto: Infinity, rate: 0.37 },
    ],
  },
};
const SS_WAGE_BASE = 184500;

export function calculateUsTax(input: {
  salary: number;
  status: UsFilingStatus;
  /** Pre-tax 401(k)/403(b) contributions (reduce income tax, not FICA). */
  retirement401k: number;
  /** Flat state + local income tax rate, % of federal taxable income. */
  stateRatePct: number;
}): TaxResult {
  const cfg = US[input.status];
  const salary = Math.max(0, input.salary);
  const k = Math.min(Math.max(0, input.retirement401k), salary);
  const taxable = Math.max(0, salary - k - cfg.std);
  const federal = bracketTax(taxable, cfg.brackets);
  const ss = Math.min(salary, SS_WAGE_BASE) * 0.062;
  const medicare = salary * 0.0145 + Math.max(0, salary - cfg.addlMedicare) * 0.009;
  const state = taxable * (Math.min(Math.max(0, input.stateRatePct), 20) / 100);
  const res = finish(
    salary,
    [
      { label: "Federal income tax", amount: federal },
      { label: "Social Security (6.2%)", amount: ss },
      { label: "Medicare (1.45% + 0.9% above threshold)", amount: medicare },
      { label: "State / local income tax (your rate)", amount: state },
    ],
    marginal(taxable, cfg.brackets),
    "USD"
  );
  // 401(k) money is still yours, just not in your paycheck.
  res.takeHome = round2(res.takeHome - k);
  return res;
}

// ------------------------------------------------------------- Canada ----

const CA_FED: Bracket[] = [
  { upto: 58523, rate: 0.14 },
  { upto: 117045, rate: 0.205 },
  { upto: 181440, rate: 0.26 },
  { upto: 258482, rate: 0.29 },
  { upto: Infinity, rate: 0.33 },
];
const ON: Bracket[] = [
  { upto: 53891, rate: 0.0505 },
  { upto: 107785, rate: 0.0915 },
  { upto: 150000, rate: 0.1116 },
  { upto: 220000, rate: 0.1216 },
  { upto: Infinity, rate: 0.1316 },
];

function fedBpa(net: number): number {
  const max = 16452;
  const min = 14829;
  if (net <= 181440) return max;
  if (net >= 258482) return min;
  return max - ((max - min) * (net - 181440)) / (258482 - 181440);
}

function ontarioHealthPremium(t: number): number {
  if (t <= 20000) return 0;
  if (t <= 36000) return Math.min(300, (t - 20000) * 0.06);
  if (t <= 48000) return Math.min(450, 300 + (t - 36000) * 0.06);
  if (t <= 72000) return Math.min(600, 450 + (t - 48000) * 0.25);
  if (t <= 200000) return Math.min(750, 600 + (t - 72000) * 0.25);
  return Math.min(900, 750 + (t - 200000) * 0.25);
}

export type CaProvince = "ON" | "OTHER";

export function calculateCanadaTax(input: { salary: number; province: CaProvince; rrsp: number }): TaxResult {
  const salary = Math.max(0, input.salary);
  const rrsp = Math.min(Math.max(0, input.rrsp), salary);

  const cppBase = Math.max(0, Math.min(salary, 74600) - 3500) * 0.0595;
  const cpp2 = Math.max(0, Math.min(salary, 85000) - 74600) * 0.04;
  const ei = Math.min(salary, 68900) * 0.0163;
  // 1/5.95 of CPP plus all of CPP2 is a deduction; the rest is a credit.
  const cppEnhanced = (cppBase * 1) / 5.95 + cpp2;
  const cppCredit = cppBase - (cppBase * 1) / 5.95;

  const net = Math.max(0, salary - rrsp - cppEnhanced);
  const fedCredits = (fedBpa(net) + Math.min(1501, salary) + cppCredit + ei) * 0.14;
  const federal = Math.max(0, bracketTax(net, CA_FED) - fedCredits);

  const lines: Line[] = [
    { label: "Federal income tax", amount: federal },
    { label: "CPP + CPP2 contributions", amount: cppBase + cpp2 },
    { label: "EI premiums (1.63%)", amount: ei },
  ];
  let marginalRate = marginal(net, CA_FED);

  if (input.province === "ON") {
    const basic = Math.max(0, bracketTax(net, ON) - (12989 + cppCredit + ei) * 0.0505);
    const surtax = Math.max(0, basic - 5818) * 0.2 + Math.max(0, basic - 7446) * 0.36;
    lines.push(
      { label: "Ontario income tax (incl. surtax)", amount: basic + surtax },
      { label: "Ontario Health Premium", amount: ontarioHealthPremium(net) }
    );
    marginalRate += marginal(net, ON) * (basic > 7446 ? 1.56 : basic > 5818 ? 1.2 : 1);
  }
  const res = finish(salary, lines, marginalRate, "CAD");
  res.takeHome = round2(res.takeHome - rrsp);
  return res;
}

// ---------------------------------------------------------- Australia ----

const AU: Bracket[] = [
  { upto: 18200, rate: 0 },
  { upto: 45000, rate: 0.15 },
  { upto: 135000, rate: 0.3 },
  { upto: 190000, rate: 0.37 },
  { upto: Infinity, rate: 0.45 },
];

function lito(t: number): number {
  if (t <= 37500) return 700;
  if (t <= 45000) return 700 - (t - 37500) * 0.05;
  if (t <= 66667) return Math.max(0, 325 - (t - 45000) * 0.015);
  return 0;
}

function medicareLevy(t: number): number {
  if (t <= 28011) return 0;
  return Math.min(t * 0.02, (t - 28011) * 0.1);
}

export function calculateAustraliaTax(input: { salary: number; deductions: number }): TaxResult {
  const salary = Math.max(0, input.salary);
  const taxable = Math.max(0, salary - Math.max(0, input.deductions));
  const income = Math.max(0, bracketTax(taxable, AU) - lito(taxable));
  return finish(
    salary,
    [
      { label: "Income tax (after low income tax offset)", amount: income },
      { label: "Medicare levy (2%)", amount: medicareLevy(taxable) },
    ],
    marginal(taxable, AU) + (taxable > 35014 ? 0.02 : 0),
    "AUD"
  );
}

export function money(n: number, currency: TaxResult["currency"]): string {
  const sym = currency === "USD" ? "US$" : currency === "CAD" ? "C$" : "A$";
  return sym + Math.round(n).toLocaleString("en-US");
}
