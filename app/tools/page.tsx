import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";

import {
  Calculator,
  UserCheck,
  FileCheck2,
  Send,
  FileQuestion,
  ArrowRight,
  Home,
  Briefcase,
  TrendingUp,
  Wallet,
  Landmark,
  Building2,
  Percent,
  Cake,
  HeartPulse,
  CalendarRange,
  Tag,
  Utensils,
  Ruler,
  Thermometer,
  Receipt,
  Store,
  BarChart3,
  Target,
  PiggyBank,
  Umbrella,
  Clock,
  Laptop,
  Repeat,
  Weight,
  LandPlot,
  FlaskConical,
  Gauge,
  Globe,
  Type,
  ScrollText,
  GraduationCap,
  Divide,
  Dice5,
} from "lucide-react";

const SLUG = "tools";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/tools.png`;

const TITLE =
  "Free Tax, Loan, Investment & Everyday Calculators | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free calculators and tools for taxpayers, NRIs, borrowers and everyone else — Income Tax Calculator (Old vs New Regime), HRA Exemption, GST, Home Loan EMI, Business Loan EMI, EMI, SIP, NRI property TDS, residential status, Lower TDS Certificate checklist, plus percentage, age, BMI, interest, discount, tip calculators and unit converters used worldwide. No sign-up needed.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "free income tax calculator",
    "old vs new tax regime calculator",
    "HRA exemption calculator",
    "GST calculator online free",
    "free NRI tax tools",
    "NRI tax calculator India",
    "NRI property TDS calculator",
    "NRI residential status calculator",
    "Form 128 checklist",
    "Form 145 146 repatriation guide",
    "NRI ITR filing requirement checker",
    "does NRI need to file ITR",
    "India tax calculators for NRIs",
    "home loan EMI calculator",
    "business loan EMI calculator",
    "SIP calculator",
    "EMI calculator online free",
    "percentage calculator",
    "age calculator",
    "bmi calculator",
    "compound interest calculator",
    "free online calculators worldwide",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Free NRI & India Tax Tools — Rajput Lalit & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const tools = [
  {
    href: "/nri-property-tds-calculator",
    icon: Calculator,
    title: "NRI Property Sale TDS Calculator",
    answers: "How much TDS will the buyer deduct, and how much of my money gets blocked?",
    description:
      "When an NRI sells property in India, the buyer must deduct TDS on the full sale value — not on the profit — with no ₹50 lakh threshold. This works out the exact amount under Section 393(2), your real capital gains tax, and the gap between them.",
    points: [
      "Effective rate: 13% / 14.30% / 14.95%",
      "Long-term vs short-term detection",
      "Shows the excess locked up until refund",
      "Lower TDS Certificate (Form 128) guidance",
    ],
  },
  {
    href: "/nri-residential-status-calculator",
    icon: UserCheck,
    title: "NRI Residential Status Calculator",
    answers: "Am I an NRI, an RNOR, or a Resident — and what can India tax?",
    description:
      "Your residential status decides whether India taxes only your Indian income or your income worldwide. Six questions apply the full Section 6 test — including the 120-day rule and the deemed-resident provision that catch people out.",
    points: [
      "182-day and 60+365 day tests",
      "120-day rule for high Indian income",
      "RNOR check (9-of-10 years, 729 days)",
      "Explains what India can tax in each case",
    ],
  },
  {
    href: "/nri-lower-tds-certificate-checklist",
    icon: FileCheck2,
    title: "Lower TDS Certificate (Form 128) Checklist",
    answers: "What documents do I need, and how long will it actually take?",
    description:
      "Applying for a Lower/Nil TDS Certificate stalls most often because of missing paperwork, not the tax computation. Check off exactly what you need — identity, property, capital gains and buyer documents — before you file.",
    points: [
      "19-item interactive checklist",
      "Real step-by-step application process",
      "4–8 week processing timeline explained",
      "Save or print your progress anytime",
    ],
  },
  {
    href: "/nri-fund-repatriation-guide",
    icon: Send,
    title: "Fund Repatriation Guide (Form 145/146)",
    answers: "Which Part applies to my remittance, and do I need a CA certificate?",
    description:
      "Form 15CA and 15CB are now Form 145 and Form 146. Answer two or three questions about your remittance to find out which Part applies, whether Form 146 (CA certificate) is required, and exactly what your CA needs to prepare it.",
    points: [
      "Covers property sale, rent, NRO interest & more",
      "₹5 lakh threshold explained",
      "Tells you when a CA certificate is skippable",
      "Document list for Form 146 preparation",
    ],
  },
  {
    href: "/nri-itr-filing-requirement-checker",
    icon: FileQuestion,
    title: "NRI ITR Filing Requirement Checker",
    answers: "Do I actually need to file an Indian tax return this year?",
    description:
      "Income below the exemption limit doesn't always mean you can skip filing, and TDS deducted on your Indian income is often a refund you're leaving unclaimed. Answer a few questions to find out where you stand.",
    points: [
      "₹4L (new regime) / ₹2.5L (old regime) exemption check",
      "Covers the 3 mandatory high-value triggers",
      "Flags TDS refund and loss carry-forward cases",
      "Clarifies foreign asset reporting doesn't apply to NRIs",
    ],
  },
];

const taxCalcTools = [
  {
    href: "/income-tax-calculator",
    icon: Landmark,
    title: "Income Tax Calculator",
    answers: "Old Regime or New Regime — which one actually saves me more?",
    description:
      "Enter your income once and see both regimes side-by-side — with Section 87A rebate, marginal relief and a full slab-by-slab breakdown — for FY 2025-26 (AY 2026-27).",
    points: [
      "Old vs New Regime, side-by-side",
      "Section 87A rebate + marginal relief",
      "Full slab-by-slab breakdown",
      "Free detailed report by email",
    ],
  },
  {
    href: "/hra-exemption-calculator",
    icon: Building2,
    title: "HRA Exemption Calculator",
    answers: "How much of my House Rent Allowance is actually tax-free?",
    description:
      "Enter your basic salary, HRA received, rent paid and city type to see the exact exempt amount using the real three-way minimum rule.",
    points: [
      "Metro (50%) vs non-metro (40%) rule",
      "Shows which of the 3 limits applies",
      "Old Regime only — clearly explained",
      "Free detailed report by email",
    ],
  },
  {
    href: "/gst-calculator",
    icon: Percent,
    title: "GST Calculator",
    answers: "What's the GST-inclusive price, or the base price before GST?",
    description:
      "Add GST to a base price or work backwards from a GST-inclusive amount — 5%, 12%, 18%, 28% or a custom rate, with the CGST/SGST split shown instantly.",
    points: [
      "Add GST or remove GST, both ways",
      "5% / 12% / 18% / 28% + custom rate",
      "CGST + SGST split shown",
      "Free detailed report by email",
    ],
  },
];

const loanTools = [
  {
    href: "/home-loan-emi-calculator",
    icon: Home,
    title: "Home Loan EMI Calculator",
    answers: "What will my monthly EMI be, and how much total interest will I pay?",
    description:
      "Enter your loan amount, interest rate and tenure to see your exact monthly EMI, total interest payable, and a full year-wise principal-vs-interest breakdown.",
    points: [
      "Instant EMI, total interest & total payment",
      "Year-wise repayment schedule",
      "Compare tenure vs interest trade-off",
      "Compare live home loan offers",
    ],
  },
  {
    href: "/business-loan-emi-calculator",
    icon: Briefcase,
    title: "Business Loan EMI Calculator",
    answers: "What will my MSME or business loan EMI look like?",
    description:
      "Built for business/MSME loan ranges and rates — see your monthly EMI, total interest, and a year-wise schedule before you approach a lender.",
    points: [
      "Tuned for typical business loan rates & tenure",
      "Year-wise repayment schedule",
      "Documents lenders usually ask for",
      "Compare live business loan offers",
    ],
  },
  {
    href: "/sip-calculator",
    icon: TrendingUp,
    title: "SIP Calculator",
    answers: "How much could my monthly SIP grow to over time?",
    description:
      "Enter your monthly investment, expected return and duration to see total invested amount, estimated returns and projected maturity value.",
    points: [
      "Total invested vs estimated returns",
      "Year-wise growth projection",
      "Works for any mutual fund SIP",
      "Free detailed report by email",
    ],
  },
  {
    href: "/emi-calculator",
    icon: Wallet,
    title: "EMI Calculator (General)",
    answers: "What's the EMI for any personal, car or consumer loan?",
    description:
      "A general-purpose reducing-balance EMI calculator that works for personal, car, consumer durable or any other term loan.",
    points: [
      "Works for any loan type",
      "Instant EMI & total interest",
      "Year-wise repayment schedule",
      "Compare live loan offers",
    ],
  },
];

const worldwideFinanceTools = [
  {
    href: "/compound-interest-calculator",
    icon: TrendingUp,
    title: "Compound Interest Calculator",
    answers: "How much will my money grow with compound interest?",
    description:
      "See how your money grows with compound interest — annually, quarterly or monthly — over any time period, with a year-wise growth schedule. Works in any currency.",
    points: [
      "Annual / quarterly / monthly compounding",
      "Year-wise growth schedule",
      "Works in any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/simple-interest-calculator",
    icon: Landmark,
    title: "Simple Interest Calculator",
    answers: "What's the simple interest and total amount on my principal?",
    description:
      "Calculate simple interest and total amount using the classic Principal × Rate × Time formula.",
    points: [
      "Classic P × R × T formula",
      "Total interest & maturity amount",
      "Works in any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/discount-calculator",
    icon: Tag,
    title: "Discount Calculator",
    answers: "What's the sale price, or how much discount am I actually getting?",
    description:
      "Work out the sale price from a discount %, or the discount % from the final price — either direction.",
    points: [
      "Sale price from discount %",
      "Discount % from final price",
      "Shows exact amount you save",
      "Free — used worldwide",
    ],
  },
  {
    href: "/tip-calculator",
    icon: Utensils,
    title: "Tip Calculator",
    answers: "How much tip should I leave, and what's each person's share?",
    description:
      "Work out the tip amount, total bill, and per-person split for any group size, anywhere in the world.",
    points: [
      "Preset & custom tip percentages",
      "Splits bill for any group size",
      "Total per person shown instantly",
      "Free — used worldwide",
    ],
  },
];

const worldwideEverydayTools = [
  {
    href: "/percentage-calculator",
    icon: Percent,
    title: "Percentage Calculator",
    answers: "What's X% of Y, or the % change between two numbers?",
    description:
      "Find X% of Y, what percent one number is of another, or the percentage increase/decrease between two values.",
    points: [
      "X% of any number, instantly",
      "Reverse: what % is A of B",
      "% increase / decrease calculator",
      "Free — used worldwide",
    ],
  },
  {
    href: "/age-calculator",
    icon: Cake,
    title: "Age Calculator",
    answers: "What's my exact age, or my age on a specific date?",
    description:
      "Find your exact age in years, months and days — or your age on any specific past or future date.",
    points: [
      "Exact years, months & days",
      "Age on any past/future date",
      "Next birthday countdown",
      "Free — used worldwide",
    ],
  },
  {
    href: "/bmi-calculator",
    icon: HeartPulse,
    title: "BMI Calculator",
    answers: "What's my Body Mass Index, and which category does it fall in?",
    description:
      "Calculate your Body Mass Index using the standard WHO formula, in metric or imperial units.",
    points: [
      "Metric (kg/cm) or Imperial (lb/ft-in)",
      "Standard WHO BMI categories",
      "Instant, private, no sign-up",
      "Free — used worldwide",
    ],
  },
  {
    href: "/date-difference-calculator",
    icon: CalendarRange,
    title: "Date Difference Calculator",
    answers: "How many years, months or days are between two dates?",
    description:
      "Find the exact number of years, months, days or weeks between any two dates.",
    points: [
      "Years, months & days breakdown",
      "Total days and weeks shown",
      "Works for past or future dates",
      "Free — used worldwide",
    ],
  },
];

const worldwideConverterTools = [
  {
    href: "/length-converter",
    icon: Ruler,
    title: "Length Converter",
    answers: "How do I convert between metric and imperial length units?",
    description:
      "Convert between millimetres, centimetres, metres, kilometres, inches, feet, yards and miles instantly.",
    points: [
      "8 units — metric & imperial",
      "All conversions shown at once",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
  {
    href: "/temperature-converter",
    icon: Thermometer,
    title: "Temperature Converter",
    answers: "How do I convert between Celsius, Fahrenheit and Kelvin?",
    description:
      "Convert between Celsius, Fahrenheit and Kelvin instantly, with all three shown at once.",
    points: [
      "Celsius, Fahrenheit & Kelvin",
      "All three shown at once",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
];

const businessFinanceTools = [
  {
    href: "/sales-tax-calculator",
    icon: Receipt,
    title: "Sales Tax / VAT Calculator",
    answers: "What's the tax-inclusive price, or the price before tax?",
    description:
      "Add sales tax or VAT to a price, or work backwards from a tax-inclusive total — any country, any rate.",
    points: [
      "Add tax or remove tax, both ways",
      "Works for any country's rate",
      "Not India-GST-specific (see GST Calculator for that)",
      "Free — used worldwide",
    ],
  },
  {
    href: "/markup-calculator",
    icon: Store,
    title: "Markup Calculator",
    answers: "What selling price do I need for my desired markup %?",
    description:
      "Work out your selling price from cost price and desired markup percentage — and see the actual profit margin too.",
    points: [
      "Cost + markup % → selling price",
      "Shows gross profit & real margin %",
      "Clarifies markup vs margin confusion",
      "Free — used worldwide",
    ],
  },
  {
    href: "/profit-margin-calculator",
    icon: BarChart3,
    title: "Profit Margin Calculator",
    answers: "What's my gross profit margin on this revenue and cost?",
    description:
      "Find your gross profit margin from revenue and cost, plus the equivalent markup on cost.",
    points: [
      "Revenue & cost → margin %",
      "Shows gross profit amount",
      "Equivalent markup % shown too",
      "Free — used worldwide",
    ],
  },
  {
    href: "/break-even-calculator",
    icon: Target,
    title: "Break-Even Point Calculator",
    answers: "How many units do I need to sell to cover my fixed costs?",
    description:
      "Find out exactly how many units you need to sell to break even, from fixed costs, variable cost and price.",
    points: [
      "Fixed + variable cost → break-even units",
      "Break-even revenue shown too",
      "Contribution margin % explained",
      "Free — used worldwide",
    ],
  },
  {
    href: "/savings-goal-calculator",
    icon: PiggyBank,
    title: "Savings Goal Calculator",
    answers: "How much do I need to save monthly to hit my target?",
    description:
      "Find out how much you need to save each month to hit a target amount, at a given expected return.",
    points: [
      "Target amount → required monthly saving",
      "Shows contribution vs growth split",
      "Works in any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/loan-amortization-calculator",
    icon: Building2,
    title: "Loan Amortization Calculator",
    answers: "What's my monthly payment on any loan or mortgage, worldwide?",
    description:
      "Work out the monthly payment and full year-wise repayment schedule for any loan or mortgage, in any currency.",
    points: [
      "Standard reducing-balance formula",
      "Year-wise principal vs interest schedule",
      "Works for any loan type, any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/retirement-corpus-calculator",
    icon: Umbrella,
    title: "Retirement Corpus Calculator",
    answers: "How much will my monthly retirement savings grow to?",
    description:
      "See how a monthly contribution grows into a retirement fund over time, in any currency.",
    points: [
      "Monthly contribution → projected corpus",
      "Year-wise growth schedule",
      "Works in any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/salary-wage-converter",
    icon: Clock,
    title: "Salary / Wage Converter",
    answers: "What's my hourly rate worth annually, or vice versa?",
    description:
      "Convert between hourly, daily, weekly, monthly and annual pay, using your own work schedule.",
    points: [
      "Hourly ⇄ daily ⇄ weekly ⇄ monthly ⇄ annual",
      "Adjustable work-schedule assumptions",
      "Gross pay, any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/freelancer-rate-calculator",
    icon: Laptop,
    title: "Freelancer Hourly Rate Calculator",
    answers: "What hourly rate should I charge to hit my income goal?",
    description:
      "Work out the hourly rate you need to charge to hit your target income, after expenses and billable hours.",
    points: [
      "Target income + expenses → hourly rate",
      "Accounts for realistic billable hours",
      "Works in any currency",
      "Free — used worldwide",
    ],
  },
  {
    href: "/rule-of-72-calculator",
    icon: Repeat,
    title: "Rule of 72 (Doubling Time) Calculator",
    answers: "How long until my money doubles at this rate of return?",
    description:
      "Quickly estimate how long it takes your money to double at a given rate of return, or the rate you'd need.",
    points: [
      "Rate → years to double",
      "Reverse: years → rate needed",
      "Classic quick investing shortcut",
      "Free — used worldwide",
    ],
  },
];

const convertersMathTools = [
  {
    href: "/weight-converter",
    icon: Weight,
    title: "Weight / Mass Converter",
    answers: "How do I convert kg to lb, or grams to ounces?",
    description:
      "Convert between kilograms, grams, pounds, ounces, stone and tonnes instantly.",
    points: [
      "7 units — metric & imperial",
      "All conversions shown at once",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
  {
    href: "/area-converter",
    icon: LandPlot,
    title: "Area Converter",
    answers: "How do I convert sq ft to sq m, or acres to hectares?",
    description:
      "Convert between square feet, square metres, square yards, acres, hectares and more.",
    points: [
      "7 units — property & land measurement",
      "Useful for registration & valuation",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
  {
    href: "/volume-converter",
    icon: FlaskConical,
    title: "Volume Converter",
    answers: "How do I convert litres to gallons, or ml to cups?",
    description:
      "Convert between litres, millilitres, US gallons, cups, fluid ounces and imperial gallons.",
    points: [
      "6 units — metric & US/imperial",
      "All conversions shown at once",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
  {
    href: "/speed-converter",
    icon: Gauge,
    title: "Speed Converter",
    answers: "How do I convert km/h to mph, or m/s to knots?",
    description:
      "Convert between kilometres per hour, miles per hour, metres per second and knots.",
    points: [
      "4 units — road, sea & scientific",
      "All conversions shown at once",
      "Swap units with one click",
      "Free — used worldwide",
    ],
  },
  {
    href: "/world-time-zone-converter",
    icon: Globe,
    title: "World Time Zone Converter",
    answers: "What time is it in another country right now?",
    description:
      "Convert any date and time between time zones worldwide — daylight saving handled automatically.",
    points: [
      "13 major world time zones",
      "Daylight saving handled correctly",
      "Shows day-change clearly",
      "Free — used worldwide",
    ],
  },
  {
    href: "/number-to-words-converter",
    icon: Type,
    title: "Number to Words Converter",
    answers: "How do I write an amount in words for a cheque or invoice?",
    description:
      "Convert any number into English words — useful for cheques, invoices and legal documents.",
    points: [
      "Handles numbers up to trillions",
      "Indian lakh/crore reference shown too",
      "Instant, accurate results",
      "Free — used worldwide",
    ],
  },
  {
    href: "/roman-numeral-converter",
    icon: ScrollText,
    title: "Roman Numeral Converter",
    answers: "How do I convert a number to Roman numerals, or back?",
    description:
      "Convert numbers to Roman numerals and back, in either direction.",
    points: [
      "Supports 1 to 3,999",
      "Both directions in one tool",
      "Validates invalid Roman numerals",
      "Free — used worldwide",
    ],
  },
  {
    href: "/gpa-calculator",
    icon: GraduationCap,
    title: "GPA / CGPA Calculator",
    answers: "What's my weighted GPA across all my courses?",
    description:
      "Add your courses' credit hours and grades to calculate your weighted GPA on the US 4.0 scale.",
    points: [
      "Add unlimited courses",
      "Standard US 4.0 letter-grade scale",
      "Useful for education loan applications",
      "Free — used worldwide",
    ],
  },
  {
    href: "/fraction-decimal-converter",
    icon: Divide,
    title: "Fraction ⇄ Decimal Converter",
    answers: "How do I convert a fraction to a decimal, or back?",
    description:
      "Convert decimals to simplified fractions, or fractions to decimals, instantly.",
    points: [
      "Both directions in one tool",
      "Fractions always shown fully simplified",
      "Instant, accurate results",
      "Free — used worldwide",
    ],
  },
  {
    href: "/random-number-generator",
    icon: Dice5,
    title: "Random Number Generator",
    answers: "How do I generate random numbers for a draw or sample?",
    description:
      "Generate one or many random numbers within any range — for draws, samples, games or passwords.",
    points: [
      "Any range, any count",
      "Optional no-duplicates mode",
      "Useful for lucky draws & audit sampling",
      "Free — used worldwide",
    ],
  },
];

const allTools = [
  ...taxCalcTools,
  ...loanTools,
  ...tools,
  ...worldwideFinanceTools,
  ...worldwideEverydayTools,
  ...worldwideConverterTools,
  ...businessFinanceTools,
  ...convertersMathTools,
];

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Tax, Loan, Investment & Everyday Calculators",
  url: PAGE_URL,
  itemListElement: allTools.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.rajputlalitassociates.in${t.href}`,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
          <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />
              Free • No sign-up required
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Free Tax, Loan &amp;
              <span className="block text-[#f0b84b] mt-2">Everyday Calculators</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Practical calculators built by a working tax practice — Income
              Tax, HRA and GST calculators for every taxpayer, Home Loan,
              Business Loan, EMI and SIP calculators for borrowers and
              investors, NRI tax tools applying the Income-tax Act, 2025 as it
              stands today, plus percentage, age, BMI, interest, discount, tip
              calculators and unit converters used by people worldwide.
            </p>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Free Tools" />

        {/* TAX CALCULATORS */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Tax Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {taxCalcTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-16 h-16 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-4 text-gray-600 leading-7">
                      {tool.description}
                    </p>

                    <ul className="mt-5 space-y-2 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-gray-700"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOAN & INVESTMENT CALCULATORS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Loan &amp; Investment Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* TOOL CARDS */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Free Tax Tools for NRIs
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-16 h-16 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={30} />
                    </div>

                    <h2 className="mt-6 text-2xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h2>

                    <p className="mt-3 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-4 text-gray-600 leading-7">
                      {tool.description}
                    </p>

                    <ul className="mt-5 space-y-2 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-gray-700"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORLDWIDE FINANCE CALCULATORS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Everyday Finance Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <p data-reveal className="mt-5 text-center text-gray-600 max-w-2xl mx-auto">
              Used by people worldwide, not just India-specific taxpayers.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {worldwideFinanceTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORLDWIDE EVERYDAY & HEALTH CALCULATORS */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Everyday &amp; Health Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {worldwideEverydayTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* UNIT CONVERTERS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Unit Converters
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {worldwideConverterTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* BUSINESS & FINANCE CALCULATORS (Round 2) */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Business &amp; Finance Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <p data-reveal className="mt-5 text-center text-gray-600 max-w-2xl mx-auto">
              For small businesses, freelancers and anyone managing money — used worldwide.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessFinanceTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={Math.min(i + 1, 6)}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONVERTERS & EVERYDAY MATH (Round 3) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Converters &amp; Everyday Math
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <p data-reveal className="mt-5 text-center text-gray-600 max-w-2xl mx-auto">
              Weight, area, volume, speed and time zone converters, plus handy
              everyday math tools — used worldwide.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {convertersMathTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    data-reveal
                    data-reveal-delay={Math.min(i + 1, 6)}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
                  >
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#d99a2b] leading-6">
                      {tool.answers}
                    </p>

                    <p className="mt-3 text-gray-600 leading-6 text-sm">
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 flex-1">
                      {tool.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition">
                      Open this tool
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY TRUST */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              data-reveal
              className="text-3xl md:text-4xl font-extrabold text-[#002b5c]"
            >
              Why these tools are different
            </h2>
            <div
              data-reveal
              className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full"
            />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                India&apos;s tax law changed on 1 April 2026. The{" "}
                <strong>Income-tax Act, 2025</strong> replaced the 1961 Act, and
                a great many provisions were renumbered — TDS on payments to
                non-residents moved from Section 195 to{" "}
                <strong>Section 393(2)</strong>, the Lower TDS Certificate
                moved from Section 197 / Form 13 to{" "}
                <strong>Section 395 / Form 128</strong>, and the remittance
                forms every NRI knew as{" "}
                <strong>Form 15CA and 15CB are now Form 145 and Form 146</strong>.
                Most calculators online still quote the old numbers.
              </p>
              <p data-reveal data-reveal-delay="2">
                These tools were built against the current provisions and are
                maintained by a practising firm that files these returns and
                certificates. Every rate and threshold is checked against source
                material before it goes in — and where a rule is changing, we say
                so on the page rather than quietly showing one number.
              </p>
              <p data-reveal data-reveal-delay="3">
                They are still estimates. Reinvestment exemptions, treaty relief,
                joint ownership and inherited property all change the answer, and
                no calculator can see your full picture. Use these to understand
                the shape of your position — then let someone check the specifics
                before money moves.
              </p>
            </div>

            <div
              data-reveal
              className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9"
            >
              <h3 className="text-2xl font-extrabold">
                Have a specific case?
              </h3>
              <p className="mt-3 text-blue-100 leading-7">
                We handle NRI property sales, Lower TDS Certificates, repatriation
                certificates and Indian tax returns. The first consultation is
                free — no payment, no card details.
              </p>
              <Link
                href="/#appointment"
                className="btn-shine mt-6 inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
