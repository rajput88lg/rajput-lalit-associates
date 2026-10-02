import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, FileSpreadsheet, FileText, Headphones, Package, PhoneCall, RefreshCw, Wallet } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StoreBuyBox from "@/components/StoreBuyBox";
import {
  BUNDLE_ITEMS,
  BUNDLE_KEY,
  DOWNLOAD_PRODUCTS,
  EVERYDAY_PRODUCTS,
  PAID_SERVICES,
  PERSONAL_PACK_ITEMS,
  PERSONAL_PACK_KEY,
  formatPrice,
  type PaidServiceKey,
} from "@/lib/paidServices";

const SLUG = "business-templates";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;

const TITLE = "Excel Templates — GST, Accounts, Budget, Salary Slip & Inventory";
const DESCRIPTION =
  "Ready-to-use Excel templates made by a tax practice: GST compliance, accounting, ITR checklist, budget planner, debt payoff, salary sheet with slips, inventory, rental and net worth trackers. Instant download.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "GST invoice format excel",
    "GSTR-2B reconciliation excel",
    "GSTR-3B working excel",
    "accounting excel template small business India",
    "ITR filing document checklist",
    "freelancer tax calculator 44ADA excel",
    "GST notice reply format",
    "DRC-01 reply format",
    "rent receipt format for HRA",
    "budget planner excel",
    "debt payoff tracker excel",
    "salary slip format excel with attendance",
    "inventory management excel template",
    "rental property tracker excel",
    "net worth tracker excel",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
  },
};

/** Kits at or above this price include a free 15-minute setup call (set to Infinity to switch the offer off). */
const SETUP_CALL_FROM = 999;

const DETAILS: Record<string, { icon: typeof FileText; format: string; who: string; points: string[] }> = {
  "gst-invoice-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · 13 sheets",
    who: "Traders, shops and service businesses doing their own GST",
    points: [
      "GST tax invoice — auto CGST + SGST or IGST from place of supply",
      "Sales register with monthly GSTR-1 / GSTR-3B totals and HSN summary",
      "Purchase register matched invoice-by-invoice with your GSTR-2B",
      "GSTR-3B working — output tax vs matched ITC and cash to arrange",
      "FY 2026-27 due date calendar that flags anything overdue",
      "Late fee (with legal cap) & 18% interest calculator",
    ],
  },
  "bookkeeping-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · 15 sheets",
    who: "Small businesses that don't use accounting software",
    points: [
      "Cash book and bank book with running balance",
      "Sales, purchase and expense registers with GST",
      "Month-wise profit & loss — updates by itself",
      "Receivables with ageing (0–30, 31–60, 61–90, 90+ days) and payables",
      "Simple balance sheet with a 'balanced' check, and bank reconciliation",
      "One-screen dashboard + ITC tracker vs GSTR-2B",
    ],
  },
  "itr-organizer-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · 7 sheets",
    who: "Salaried people, pensioners and investors filing their own ITR",
    points: [
      "Which ITR form fits you — ITR-1, 2, 3 or 4",
      "30+ item document checklist with a 'ready to file' progress bar",
      "Income organizer for every head of income",
      "Old-regime deductions with limits applied",
      "AIS / Form 26AS match — the step that avoids most notices",
    ],
  },
  "freelancer-tax-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · 8 sheets",
    who: "Freelancers, developers, designers and consultants",
    points: [
      "Export invoice with LUT line, or domestic invoice with GST",
      "Income register in foreign currency + INR, with FIRA tracking",
      "Presumptive tax (Section 58 / old 44ADA) — eligibility and 50% income",
      "Tax estimate under the new regime, including the ₹12 lakh rebate",
      "Advance tax planner and GST ₹20 lakh limit tracker",
    ],
  },
  "notice-reply-kit": {
    icon: FileText,
    format: "Word (.docx) + Excel workbook",
    who: "Businesses that received a GST notice, order or registration query",
    points: [
      "14 reply drafts: ASMT-10, DRC-01, DRC-01A/01B/01C, REG-03, REG-17, GSTR-3A",
      "Revocation of cancellation (REG-21), rectification (Section 161), appeal grounds (APL-01)",
      "Time limits for every notice on one page",
      "Excel workbook: books vs GSTR-1 vs 3B, ITC vs 2B, interest & pre-deposit",
      "Notice tracker that warns before the reply date",
    ],
  },
  "rent-receipt-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx)",
    who: "Salaried employees claiming HRA",
    points: [
      "Fill once — 12 monthly rent receipts are created automatically",
      "Print-ready, with revenue stamp box (cash rent above ₹5,000)",
      "HRA exemption check (least of the 3 limits)",
      "Reminder of when the landlord's PAN is needed",
    ],
  },
  "budget-planner": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Anyone who wants to know where the salary goes",
    points: [
      "Log income and expenses in seconds with drop-down categories",
      "Month view: budget vs actual, with overspending in red",
      "Year summary with savings rate and chart",
      "50-30-20 check — needs, wants, savings",
    ],
  },
  "debt-payoff-tracker": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Anyone paying EMIs, personal loans or credit cards",
    points: [
      "Up to 10 loans and cards in one place",
      "Snowball or avalanche method — your choice",
      "Your debt-free date and total interest, worked out for you",
      "Month-by-month schedule and 'debt going down' chart",
    ],
  },
  "savings-goal-tracker": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Saving for an emergency fund, holiday, phone or education",
    points: [
      "Up to 15 goals with progress bars",
      "How much to save each month to hit the date",
      "52-week savings challenge sheet",
    ],
  },
  "bill-due-tracker": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Households juggling EMIs, cards, insurance and bills",
    points: [
      "Next due date for monthly, quarterly and yearly bills",
      "Red / amber alerts for bills due this week",
      "12-month paid register and monthly commitment total",
    ],
  },
  "salary-attendance-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · up to 50 staff",
    who: "Shops, clinics, offices and small factories",
    points: [
      "Daily attendance — present, absent, half day, leave, holiday",
      "Salary for paid days with PF, ESI, PT, TDS and advances",
      "Employer PF / ESI and cost to company",
      "Print-ready salary slip for each employee",
      "Flags pay structures below the 50% 'wages' rule of the Labour Codes",
    ],
  },
  "business-income-expense": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx)",
    who: "Shops, home businesses and service providers",
    points: [
      "Simple daily entries — income or expense, cash or UPI",
      "Monthly profit report with chart",
      "Category report — where the money goes",
      "Dashboard with margin and best month",
    ],
  },
  "inventory-tracker": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · up to 300 items",
    who: "Retailers, wholesalers and online sellers",
    points: [
      "Item master with purchase and selling rate",
      "Stock in / stock out with item drop-down",
      "Live stock, stock value and reorder alerts",
      "Monthly sales and purchases on the dashboard",
    ],
  },
  "rental-property-tracker": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx) · up to 20 properties",
    who: "Landlords with houses, flats or shops on rent",
    points: [
      "Rent received vs due — arrears per property",
      "Expenses: property tax, repairs, society, loan interest",
      "Agreement expiry alerts",
      "House-property income working for your ITR",
    ],
  },
  "networth-tracker": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Salaried people, investors and NRIs",
    points: [
      "Bank, FD, PPF, EPF, NPS, mutual funds, shares, gold, property",
      "Net worth, asset mix chart and gains",
      "FD / policy maturity alerts and nominee list",
      "Monthly history chart",
    ],
  },
  "wedding-budget-planner": {
    icon: Wallet,
    format: "Excel (.xlsx)",
    who: "Families planning a wedding",
    points: [
      "16 Indian wedding budget heads with suggested shares",
      "Vendor quotes, advances and balances",
      "Guest list with RSVP and catering count",
      "Countdown checklist from the wedding date",
    ],
  },
  "personal-finance-pack": {
    icon: Package,
    format: "4 Excel templates in one download",
    who: "Take control of your money — best value",
    points: PERSONAL_PACK_ITEMS.map((k) => `${PAID_SERVICES[k].name} (worth ${formatPrice(PAID_SERVICES[k])})`),
  },
  "business-tax-bundle": {
    icon: Package,
    format: "4 Excel kits in one download",
    who: "Everything a small business or freelancer needs for the year — best value",
    points: BUNDLE_ITEMS.map((k) => `${PAID_SERVICES[k].name} (worth ${formatPrice(PAID_SERVICES[k])})`),
  },
};

const PERKS = [
  { icon: Download, title: "Instant download", text: "Download links on screen and by email right after payment." },
  { icon: RefreshCw, title: "Free updates for 12 months", text: "When rules or rates change, the same link gives you the new version." },
  { icon: Headphones, title: "WhatsApp help", text: "Stuck while setting up? Message us and we'll guide you." },
  { icon: PhoneCall, title: "Free 15-minute setup call", text: `With every kit of ₹${SETUP_CALL_FROM.toLocaleString("en-IN")} and above.` },
];

const faqs = [
  {
    question: "How do I get the files after paying?",
    answer:
      "Download buttons appear right after payment, and the same links are emailed to you. The links keep working, so you can download again later.",
  },
  {
    question: "Do I need special software?",
    answer:
      "The Excel kits work in Microsoft Excel, Google Sheets and LibreOffice. The notice formats open in Microsoft Word or Google Docs.",
  },
  {
    question: "Will I get updated files when GST or income tax rules change?",
    answer:
      "Yes. For 12 months from purchase, your download link always gives you the latest version of the kit — we update the files when rates, limits or due dates change.",
  },
  {
    question: "How does the free setup call work?",
    answer:
      "With kits of ₹999 and above, WhatsApp us your order ID and we'll fix a 15-minute call to help you set the file up for your business — within office hours (Mon–Sat).",
  },
  {
    question: "Are the notice reply formats enough to close my notice?",
    answer:
      "They give you a correct structure and wording to start from. Every notice depends on its own facts and documents, so fill in your details carefully — for amounts above a few thousand rupees, have a professional review the reply. We can do that for you.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Since the files are delivered instantly, digital products are not refundable. If a file doesn't open or a link doesn't work, WhatsApp us and we'll fix it the same day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [...DOWNLOAD_PRODUCTS, ...EVERYDAY_PRODUCTS].map((key, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: PAID_SERVICES[key].name,
      description: DETAILS[key].points.join(". "),
      url: `${PAGE_URL}#${key}`,
      brand: { "@type": "Brand", name: "Rajput Lalit & Associates" },
      offers: {
        "@type": "Offer",
        price: String(PAID_SERVICES[key].amount),
        priceCurrency: PAID_SERVICES[key].currency || "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

function saving(bundle: PaidServiceKey, items: PaidServiceKey[]) {
  return items.reduce((sum, k) => sum + PAID_SERVICES[k].amount, 0) - PAID_SERVICES[bundle].amount;
}

const SAVINGS: Partial<Record<PaidServiceKey, number>> = {
  [BUNDLE_KEY]: saving(BUNDLE_KEY, BUNDLE_ITEMS),
  [PERSONAL_PACK_KEY]: saving(PERSONAL_PACK_KEY, PERSONAL_PACK_ITEMS),
};

function ProductCard({ id }: { id: PaidServiceKey }) {
  const p = PAID_SERVICES[id];
  const d = DETAILS[id];
  const save = SAVINGS[id];
  const bundle = save !== undefined;
  const setupCall = p.amount >= SETUP_CALL_FROM;
  return (
    <div
      id={id}
      className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
        bundle ? "border-2 border-[#d99a2b] md:col-span-2 lg:col-span-3" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <d.icon className="text-[#d99a2b]" size={28} />
        {bundle && (
          <span className="rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-bold text-white">
            Save ₹{save.toLocaleString("en-IN")}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-extrabold text-[#002b5c]">{p.name}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {d.format} · {d.who}
      </p>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-700">
        {d.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {pt}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-3xl font-extrabold text-[#002b5c]">{formatPrice(p)}</p>
      {setupCall && (
        <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-green-700">
          <PhoneCall size={14} /> Includes a free 15-minute setup call
        </p>
      )}
      <div className="mt-3">
        <StoreBuyBox service={id} highlight={bundle} />
      </div>
    </div>
  );
}

function SectionHeading({ id, title: heading, text }: { id: string; title: string; text: string }) {
  return (
    <div id={id} className="mx-auto mb-8 max-w-6xl scroll-mt-28 px-4 sm:px-6">
      <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">{heading}</h2>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <Download size={16} className="text-[#f0b84b]" />
              Instant download • Made by a tax practice
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Business Templates &amp; Kits
              <span className="mt-2 block text-[#f0b84b]">GST, Accounts, Budget, Salary &amp; Stock — Ready to Use</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              The same formats we use for our clients — with formulas already set up, so you just
              fill in your figures.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Business Templates" />

        <section className="bg-white py-8">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {PERKS.map((perk) => (
              <div key={perk.title} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#f7f9fc] p-4">
                <perk.icon className="mt-0.5 shrink-0 text-[#d99a2b]" size={22} />
                <div>
                  <p className="font-bold text-[#002b5c]">{perk.title}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{perk.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <SectionHeading
            id="tax-kits"
            title="Tax, GST & Accounting Kits"
            text="For businesses, professionals and freelancers who handle their own compliance."
          />
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {DOWNLOAD_PRODUCTS.map((key) => (
              <ProductCard key={key} id={key} />
            ))}
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <SectionHeading
            id="everyday"
            title="Everyday Templates — Money, Staff & Stock"
            text="Simple Excel trackers people use every month: budget, EMIs, savings, salary slips, inventory, rent and more."
          />
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {EVERYDAY_PRODUCTS.map((key) => (
              <ProductCard key={key} id={key} />
            ))}
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <details key={f.question} className="rounded-xl border border-gray-200 p-5">
                  <summary className="cursor-pointer font-bold text-[#002b5c]">{f.question}</summary>
                  <p className="mt-3 leading-7 text-gray-700">{f.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              Got a GST notice and want it handled end to end? See our{" "}
              <Link href="/gst-notice-reply" className="font-semibold text-[#06477f] underline">
                GST notice reply service
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
