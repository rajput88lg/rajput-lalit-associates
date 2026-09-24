import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import AdvanceTaxCalculator from "@/components/AdvanceTaxCalculator";

const SLUG = "advance-tax-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Advance Tax Calculator FY 2026-27 — Due Dates & Interest | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free Advance Tax Calculator for FY 2026-27 — enter your estimated tax liability and see your exact 4-instalment schedule (or single instalment for 44AD/44ADA), due dates, and an estimate of Section 425 (old 234C) interest on any shortfall.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "advance tax calculator",
    "advance tax calculator FY 2026-27",
    "advance tax due dates",
    "advance tax interest calculator",
    "234C interest calculator",
    "advance tax 44AD 44ADA",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Advance Tax Calculator — Rajput Lalit & Associates" }],
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
    question: "Who needs to pay advance tax?",
    answer:
      "Anyone — salaried, self-employed, freelancer, or business — whose estimated tax payable for the year, after subtracting TDS/TCS already deducted, is ₹10,000 or more. Salaried employees with only salary income usually don't need to, since their employer's TDS covers most of it — but if you have rental income, capital gains, freelance income or crypto gains on top of salary, you likely do.",
  },
  {
    question: "What are the advance tax due dates for FY 2026-27?",
    answer:
      "15 June 2026 (15% of the year's tax), 15 September 2026 (45% cumulative), 15 December 2026 (75% cumulative), and 15 March 2027 (100% cumulative). Each percentage is cumulative — so by 15 September you should have paid 45% of the total, not an extra 30% on top of the first instalment.",
  },
  {
    question: "I file under Section 44AD or 44ADA (presumptive taxation) — do the same dates apply?",
    answer:
      "No — if you've opted for presumptive taxation under Section 44AD (business) or 44ADA (profession), you can pay 100% of your advance tax in a single instalment by 15 March 2027, instead of the 4 quarterly instalments.",
  },
  {
    question: "What happens if I miss an instalment or pay less than required?",
    answer:
      "Interest applies under Section 425 of the Income-tax Act, 2025 (the renumbered version of the old Section 234C) — generally 1% per month for 3 months on the shortfall for the first three instalments, and 1% for 1 month on a shortfall at the final instalment. If your total advance tax paid by 31 March is less than 90% of your final assessed tax, Section 424 (old Section 234B) interest also applies from 1 April until you pay.",
  },
  {
    question: "Is this calculator's interest figure exact?",
    answer:
      "It's a close planning estimate, not the final figure. It assumes any amount you say you've 'already paid' was paid by the due date it's checked against, and it doesn't calculate Section 424 interest, surcharge, or handle re-estimation of income mid-year. For the exact interest and payment challan, talk to us — especially if a large capital gain or bonus came in during the year.",
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
  name: "Advance Tax Calculator (FY 2026-27)",
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
              FY 2026-27 • Free & Instant
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Advance Tax Calculator
              <span className="block text-[#f0b84b] mt-2">Due Dates &amp; Interest</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Enter your estimated tax liability once and see your exact
              instalment schedule, what&apos;s already due, and an estimate
              of interest on any shortfall.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Check My Schedule
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="Advance Tax Calculator" />
        </div>

        <AdvanceTaxCalculator />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Missing an instalment is more expensive than most people realise
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                Advance tax isn&apos;t optional once you cross the ₹10,000
                threshold — and the interest for paying late or paying short
                adds up fast, especially on the first three instalments where
                a shortfall is charged interest for a full 3 months, not just
                the days you were late. Freelancers, business owners and
                anyone with capital gains, rental income or a large bonus
                mid-year are the most common ones caught out.
              </p>
              <p data-reveal data-reveal-delay="2">
                Not sure what your estimated tax liability should be? Start
                with our{" "}
                <Link href="/income-tax-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Income Tax Calculator
                </Link>{" "}
                to work out your full-year tax, then come back here to plan
                your instalments.
              </p>
              <p data-reveal data-reveal-delay="3">
                For the exact figure — including Section 424 interest and
                the right challan — our{" "}
                <Link href="/income-tax-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  income tax filing
                </Link>{" "}
                team can compute and pay it correctly for you every quarter.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Want us to handle your quarterly advance tax?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We track the numbers, compute the right instalment amount and
                remind you before every due date. The first consultation is
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
