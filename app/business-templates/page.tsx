import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, FileSpreadsheet, FileText, Headphones, Package, PhoneCall, RefreshCw } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StoreBuyBox from "@/components/StoreBuyBox";
import { BUNDLE_ITEMS, BUNDLE_KEY, DOWNLOAD_PRODUCTS, PAID_SERVICES, formatPrice } from "@/lib/paidServices";

const SLUG = "business-templates";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;

const TITLE = "GST, Accounting, ITR & Freelancer Tax Kits — Excel & Word Templates";
const DESCRIPTION =
  "Excel and Word kits made by a tax practice: GST compliance (invoice, 3B working, ITC vs GSTR-2B, due dates), small business accounting with balance sheet, ITR checklist, freelancer tax kit and 14 GST notice reply formats. Instant download.";

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
  itemListElement: DOWNLOAD_PRODUCTS.map((key, i) => ({
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

const bundleSaving =
  BUNDLE_ITEMS.reduce((sum, k) => sum + PAID_SERVICES[k].amount, 0) - PAID_SERVICES[BUNDLE_KEY].amount;

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
              <span className="mt-2 block text-[#f0b84b]">GST, Accounts, ITR &amp; Notices — Ready to Use</span>
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
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {DOWNLOAD_PRODUCTS.map((key) => {
              const p = PAID_SERVICES[key];
              const d = DETAILS[key];
              const bundle = key === BUNDLE_KEY;
              const setupCall = p.amount >= SETUP_CALL_FROM;
              return (
                <div
                  key={key}
                  id={key}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                    bundle ? "border-2 border-[#d99a2b] md:col-span-2 lg:col-span-3" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <d.icon className="text-[#d99a2b]" size={28} />
                    {bundle && (
                      <span className="rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-bold text-white">
                        Save ₹{bundleSaving.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 text-xl font-extrabold text-[#002b5c]">{p.name}</h2>
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
                    <StoreBuyBox service={key} highlight={bundle} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
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
