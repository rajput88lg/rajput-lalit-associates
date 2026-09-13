import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import IncomeTaxCalculator from "@/components/IncomeTaxCalculator";

const SLUG = "income-tax-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Income Tax Calculator 2026 — Old vs New Regime | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free Income Tax Calculator for FY 2025-26 (AY 2026-27) — compare Old Regime vs New Regime tax instantly, with Section 87A rebate, marginal relief and a full slab-by-slab breakdown. See which regime saves you more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "income tax calculator",
    "income tax calculator 2026",
    "old vs new tax regime calculator",
    "income tax calculator FY 2025-26",
    "new tax regime calculator India",
    "87A rebate calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Income Tax Calculator — Rajput Lalit & Associates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "Which tax year does this calculator use?",
    answer:
      "It uses FY 2025-26 (AY 2026-27) slabs — the return most people are actively filing right now. Budget 2026 made no changes to income tax slabs, standard deduction or the Section 87A rebate for FY 2026-27, so the same figures apply to next year's income as well.",
  },
  {
    question: "What is the Section 87A rebate under the New Regime?",
    answer:
      "If your taxable income (after the ₹75,000 standard deduction) is ₹12,00,000 or less, you get a rebate of up to ₹60,000 — which, combined with the standard deduction, makes salary income up to ₹12,75,000 effectively tax-free. Just above this limit, 'marginal relief' ensures your tax never jumps by more than the amount your income exceeds ₹12,00,000 by.",
  },
  {
    question: "Can I claim HRA and 80C under the New Regime?",
    answer:
      "No — HRA exemption, Section 80C, Section 80D and most other deductions are available only under the Old Regime. The New Regime offers lower slab rates and a higher standard deduction in exchange for giving up most deductions and exemptions.",
  },
  {
    question: "Does this calculator handle business income or capital gains?",
    answer:
      "No — this tool assumes salaried income only (so the standard deduction always applies) and does not model business income, capital gains taxed at special rates, or surcharge on very high incomes. For those situations, the comparison needs a proper computation — talk to us.",
  },
  {
    question: "I'm not sure which regime is better for me — what should I do?",
    answer:
      "Run your numbers through both sides of this calculator with your actual expected deductions (80C, 80D, HRA, home loan interest) under the Old Regime column. If you have very few deductions to claim, the New Regime usually wins; if you have a home loan, HRA and full 80C investments, the Old Regime often works out better. When in doubt, book a free consultation and we'll run the exact numbers for you.",
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

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Income Tax Calculator (Old vs New Regime)",
  url: PAGE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  provider: {
    "@type": "AccountingService",
    name: "Rajput Lalit & Associates",
    url: "https://www.rajputlalitassociates.in",
    telephone: "+91-93549-53603",
    areaServed: "IN",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <div className="print:hidden">
        <Navbar />
      </div>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white print:hidden">
          <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
          <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />
              FY 2025-26 (AY 2026-27) • Free & Instant
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Income Tax Calculator
              <span className="block text-[#f0b84b] mt-2">Old vs New Regime</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Enter your income once, see both regimes side-by-side, and know
              exactly which one saves you more this year.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Compare My Tax
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="Income Tax Calculator" />
        </div>

        <IncomeTaxCalculator />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              The right regime depends on your deductions, not your income alone
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                The New Regime's lower rates and ₹75,000 standard deduction
                make it the simpler, often better choice if you claim few
                deductions. But if you have a home loan, pay rent and claim
                HRA, and invest fully under Section 80C, the Old Regime can
                still work out cheaper — this calculator is built to show you
                exactly where that line falls for your numbers.
              </p>
              <p data-reveal data-reveal-delay="2">
                Paying rent and claiming HRA? Use our{" "}
                <Link href="/hra-exemption-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  HRA Exemption Calculator
                </Link>{" "}
                to get the exact exemption amount to plug into the Old
                Regime deductions field above.
              </p>
              <p data-reveal data-reveal-delay="3">
                Once you know which regime suits you, our{" "}
                <Link href="/income-tax-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  income tax return filing
                </Link>{" "}
                team can help you file correctly and on time.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Not sure which regime to pick?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We help individuals and businesses across India file the
                right way, in the right regime. The first consultation is
                free.
              </p>
              <Link
                href="/#appointment"
                className="btn-shine mt-6 inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f7f9fc] print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Frequently Asked Questions
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

            <div className="mt-12 space-y-5">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={Math.min(i + 1, 6)}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#d99a2b]/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#002b5c]">{faq.question}</h3>
                  <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="print:hidden">
          <Contact />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
