import type { Metadata } from "next";
import Link from "next/link";
import { Globe2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NriHealthCheckForm from "@/components/NriHealthCheckForm";
import { formatPrice, PAID_SERVICES } from "@/lib/paidServices";

const SLUG = "nri-tax-health-check";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const ITEM = PAID_SERVICES["nri-health-check"];

const TITLE = "NRI India Tax Health Check — Status, ITR & TDS Refund (2026-27)";
const DESCRIPTION = `Living in the USA, Canada, Australia, UK or UAE with income in India? Check free if you're an NRI, whether you must file an Indian return and how much TDS refund you may get. Full report ${formatPrice(ITEM)}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NRI tax check",
    "NRI income tax India",
    "NRI TDS refund",
    "do NRIs need to file ITR",
    "NRI residential status",
    "NRI tax USA India",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Rajput Lalit & Associates", locale: "en_US", type: "website" },
};

const faqs = [
  {
    question: "What does the free check tell me?",
    answer:
      "Your Indian residential status (NRI, RNOR or resident), whether you need to file an Indian income tax return, and an estimate of the TDS refund you may get back — or the tax still due.",
  },
  {
    question: `What is in the ${formatPrice(ITEM)} report?`,
    answer:
      "The exact residency rule that applies to you, an income-by-income tax working, your refund estimate, what to report in your country of residence (tax credit, account reporting, tax-year mismatch), NRE/NRO and money-transfer rules, and a step-by-step action plan. It opens instantly and is emailed to you.",
  },
  {
    question: "Why do so many NRIs get a refund?",
    answer:
      "Banks and tenants deduct TDS of about 31.2% on NRO interest and rent paid to NRIs, but many NRIs' actual Indian tax is far lower — there is a ₹4 lakh basic exemption and a 30% standard deduction on rent. The only way to get the difference back is to file an Indian return.",
  },
  {
    question: "Can you also file my Indian return?",
    answer:
      "Yes. We file NRI returns and handle property sales, lower-TDS certificates and money transfers abroad. See our NRI filing plans after your check.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: ITEM.name,
  description: DESCRIPTION,
  url: PAGE_URL,
  brand: { "@type": "Brand", name: "Rajput Lalit & Associates" },
  offers: { "@type": "Offer", price: String(ITEM.amount), priceCurrency: "USD", availability: "https://schema.org/InStock", url: PAGE_URL },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <Globe2 size={16} className="text-[#f0b84b]" /> For NRIs in the USA, Canada, Australia, UK &amp; UAE
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              NRI India Tax Health Check
              <span className="mt-2 block text-[#f0b84b]">Are You Owed a TDS Refund?</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              In 3 minutes: your India residential status, whether you must file an Indian return, and how much of
              the tax deducted in India you can get back. Free check — full report {formatPrice(ITEM)}.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="NRI Tax Health Check" />

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <NriHealthCheckForm />
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
              Living in the USA? Read our{" "}
              <Link href="/nri-in-usa" className="font-semibold text-[#06477f] underline">
                India tax guide for NRIs in the USA
              </Link>
              . Payments are covered by our{" "}
              <Link href="/refund-policy" className="font-semibold text-[#06477f] underline">
                refund policy
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
