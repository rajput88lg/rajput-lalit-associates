import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, FileSpreadsheet, FileText, Package } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StoreBuyBox from "@/components/StoreBuyBox";
import { DOWNLOAD_PRODUCTS, PAID_SERVICES, type PaidServiceKey } from "@/lib/paidServices";

const SLUG = "business-templates";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;

const TITLE = "GST Invoice, Bookkeeping & Notice Reply Templates — Excel & Word";
const DESCRIPTION =
  "Ready-to-use Excel and Word kits made by a tax practice: GST invoice with auto CGST/SGST/IGST, bookkeeping registers with monthly P&L, GST notice reply formats and rent receipts. Instant download.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "GST invoice format excel",
    "bookkeeping excel template small business India",
    "GST notice reply format",
    "ASMT-10 reply format",
    "rent receipt format for HRA",
    "cash book excel format",
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

const DETAILS: Record<string, { icon: typeof FileText; format: string; who: string; points: string[] }> = {
  "gst-invoice-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx)",
    who: "Shops, traders and service providers who bill in Excel",
    points: [
      "Tax invoice as per GST rules — auto CGST + SGST or IGST from place of supply",
      "Up to 15 line items with HSN/SAC, rate and discount",
      "Sales register with GSTR-1 style monthly totals",
      "HSN-wise summary sheet ready for GSTR-1",
      "Print-ready A4 layout, just add your logo",
    ],
  },
  "bookkeeping-kit": {
    icon: FileSpreadsheet,
    format: "Excel (.xlsx)",
    who: "Small businesses and freelancers keeping their own books",
    points: [
      "Cash book and bank book with running balance",
      "Sales, purchase and expense registers",
      "GST input tax credit (ITC) tracker vs GSTR-2B",
      "Automatic month-wise profit & loss summary",
      "Built-in expense heads your CA will understand",
    ],
  },
  "notice-reply-kit": {
    icon: FileText,
    format: "Word (.docx)",
    who: "Businesses that received a GST notice and want a proper first draft",
    points: [
      "Reply to ASMT-10 (scrutiny of return discrepancies)",
      "Reply to GSTR-1 vs GSTR-3B and GSTR-2B vs 3B ITC mismatch",
      "Reply to show cause notice for cancellation of registration (REG-17)",
      "Reply to pre-show-cause intimation (DRC-01A)",
      "Adjournment request and document cover letter",
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
  "business-kit-bundle": {
    icon: Package,
    format: "3 Excel + 1 Word",
    who: "Everything above in one download — best value",
    points: [
      "GST Invoice & Billing Kit",
      "Small Business Bookkeeping Kit",
      "GST Notice Reply Formats",
      "Rent Receipt & HRA Kit",
    ],
  },
};

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
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

const bundleSaving =
  (["gst-invoice-kit", "bookkeeping-kit", "notice-reply-kit", "rent-receipt-kit"] as PaidServiceKey[]).reduce(
    (s, k) => s + PAID_SERVICES[k].amount,
    0
  ) - PAID_SERVICES["business-kit-bundle"].amount;

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
              <span className="mt-2 block text-[#f0b84b]">GST, Accounts &amp; Notices — Ready to Use</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              The same formats we use for our clients — with formulas already set up, so you just
              fill in your figures.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Business Templates" />

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {DOWNLOAD_PRODUCTS.map((key) => {
              const p = PAID_SERVICES[key];
              const d = DETAILS[key];
              const bundle = key === "business-kit-bundle";
              return (
                <div
                  key={key}
                  id={key}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                    bundle ? "border-2 border-[#d99a2b] md:col-span-2 lg:col-span-1" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <d.icon className="text-[#d99a2b]" size={28} />
                    {bundle && (
                      <span className="rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-bold text-white">
                        Save ₹{bundleSaving}
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
                  <p className="mt-5 text-3xl font-extrabold text-[#002b5c]">₹{p.amount}</p>
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
