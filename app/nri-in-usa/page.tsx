import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Flag } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NriHealthCheckForm from "@/components/NriHealthCheckForm";
import UsdServiceBooking from "@/components/UsdServiceBooking";

const SLUG = "nri-in-usa";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;

const TITLE = "NRI in the USA — India Tax Guide, ITR Filing & TDS Refunds (2026)";
const DESCRIPTION =
  "India tax for NRIs living in the USA: residential status, NRO/NRE interest, rent from India, TDS refunds, property sale, FBAR and foreign tax credit pointers. Free check and fixed-fee Indian ITR filing in USD.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NRI in USA India tax",
    "NRI ITR filing from USA",
    "India income US tax return",
    "FBAR Indian bank account",
    "NRO interest TDS refund",
    "sell property in India from USA",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: "Rajput Lalit & Associates", locale: "en_US", type: "website" },
};

const indiaSide = [
  "You're an NRI for India if you spend fewer than 182 days in India in the tax year (April–March) — with a few extra tests for visitors and people with Indian income above ₹15 lakh.",
  "NRE / FCNR interest is tax-free in India while you are an NRI. NRO interest is taxable, and banks deduct TDS of about 31.2% on it.",
  "Rent from your Indian property is taxable in India; your tenant should deduct about 31.2% TDS. You get a 30% standard deduction on rent.",
  "NRIs get the ₹4 lakh basic exemption under the new regime, but not the Section 87A rebate that makes income up to ₹12 lakh tax-free for residents.",
  "Because TDS is often much higher than the real tax, many NRIs are owed a refund — but only if they file an Indian return.",
  "Selling property: the buyer deducts TDS on the full sale price. A lower-TDS certificate before the sale, or an ITR after it, gets back what is excess.",
];

const usSide = [
  "US citizens, green-card holders and US tax residents report worldwide income — India income goes on your US return.",
  "Indian tax paid can usually be claimed as a foreign tax credit (Form 1116) under the India–US tax treaty.",
  "FBAR (FinCEN 114): file if your non-US accounts together exceeded US$10,000 at any time in the year — NRE, NRO and FDs all count.",
  "Form 8938 (FATCA) may also apply at higher balances.",
  "Indian mutual funds are commonly treated as PFICs in the US, with their own reporting — review them with your CPA.",
  "The US tax year is January–December and India's is April–March, so India income must be re-cut to the calendar year for your CPA.",
];

const faqs = [
  {
    question: "Do I need to file an Indian return if I live in the USA?",
    answer:
      "You must file if your taxable Indian income is above ₹4 lakh (new regime) or certain other triggers apply. Even below that, filing is the only way to get back excess TDS — which is why most NRIs with NRO interest or rent should file.",
  },
  {
    question: "Will I pay tax twice — in India and the US?",
    answer:
      "Usually not in full. India taxes Indian income first; the US then typically gives a foreign tax credit for the Indian tax under the India–US treaty. Your CPA handles the US side; we handle India and give your CPA the figures they need.",
  },
  {
    question: "Can you file my Indian return while I'm in the US?",
    answer:
      "Yes — everything is done online. You share documents by email or WhatsApp, we prepare and file, and you e-verify. We work with clients across US time zones.",
  },
  {
    question: "How do I pay from the US?",
    answer: "By international card or PayPal through our secure Razorpay checkout, in US dollars.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-gray-700">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#d99a2b]" /> {t}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <Flag size={16} className="text-[#f0b84b]" /> For Indians living in the United States
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              NRI in the USA?
              <span className="mt-2 block text-[#f0b84b]">Your India Tax, Sorted</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Rent, NRO interest, a property sale or money to move — we handle the India side, and give your US CPA
              exactly what they need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#check" className="rounded-xl bg-[#d99a2b] px-6 py-3 font-bold text-white">Free India tax check</a>
              <a href="#services" className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white">Filing plans in USD</a>
            </div>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="NRI in the USA" />

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">India side — what applies to you</h2>
              <Points items={indiaSide} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">US side — points for your CPA</h2>
              <Points items={usSide} />
              <p className="mt-4 text-xs text-gray-500">
                US points are general pointers to discuss with your US tax preparer; we advise on Indian tax. Thresholds as of 2026.
              </p>
            </div>
          </div>
        </section>

        <section id="check" className="scroll-mt-20 bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-extrabold text-[#002b5c] md:text-3xl">Free India tax check for US-based NRIs</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
              See your status, whether you must file, and your likely TDS refund.
            </p>
            <div className="mt-8">
              <NriHealthCheckForm defaultCountry="USA" />
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">Indian return filing — fixed fee in US dollars</h2>
            <p className="mt-2 text-gray-600">
              Need India income re-cut to the US calendar year for your CPA? See our{" "}
              <Link href="/nri-tax-services" className="font-semibold text-[#06477f] underline">
                US CPA Report
              </Link>
              .
            </p>
            <div className="mt-8">
              <UsdServiceBooking />
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <details key={f.question} className="rounded-xl border border-gray-200 bg-white p-5">
                  <summary className="cursor-pointer font-bold text-[#002b5c]">{f.question}</summary>
                  <p className="mt-3 leading-7 text-gray-700">{f.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              Want to see your US take-home pay? Try our free{" "}
              <Link href="/us-income-tax-calculator" className="font-semibold text-[#06477f] underline">
                US income tax calculator
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
