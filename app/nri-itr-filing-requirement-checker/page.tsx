import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import NriItrFilingChecker from "@/components/NriItrFilingChecker";

const SLUG = "nri-itr-filing-requirement-checker";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Do I Need to File an ITR as an NRI? Free Checker | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free tool to check whether you must file an Indian income tax return as an NRI for tax year 2026-27 — covers the basic exemption limit, TDS refunds, loss carry-forward, and the mandatory high-value transaction triggers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NRI ITR filing requirement",
    "does NRI need to file ITR",
    "NRI income tax return mandatory",
    "NRI basic exemption limit",
    "NRI TDS refund ITR",
    "seventh proviso section 139",
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
        alt: "NRI ITR Filing Requirement Checker — Rajput Lalit & Associates",
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

const faqs = [
  {
    question: "What is the basic exemption limit for an NRI?",
    answer:
      "₹4 lakh under the new (default) tax regime for tax year 2026-27, or ₹2.5 lakh under the old regime if you opt for it. Unlike resident senior citizens, NRIs do not get a higher exemption limit based on age — the same limit applies regardless of how old you are.",
  },
  {
    question: "My income is below the exemption limit but TDS was deducted — do I still need to file?",
    answer:
      "Filing is not mandatory in that case, but it is strongly recommended — it is the only way to claim back the TDS as a refund. This comes up constantly with NRI property sales, where TDS is deducted on the full sale value regardless of your actual tax liability.",
  },
  {
    question: "Do I have to file if I have no income but deposited a large amount in a current account?",
    answer:
      "Yes. Depositing more than ₹1 crore (aggregate) in one or more current accounts in a financial year makes filing mandatory, regardless of your income level. This is one of a small number of high-value transaction triggers that require filing on their own.",
  },
  {
    question: "What other situations force me to file regardless of income?",
    answer:
      "Spending more than ₹2 lakh on foreign travel for yourself or someone else, or more than ₹1 lakh on electricity consumption in a year, both make filing mandatory on their own. So does wanting to carry forward a business or capital loss to future years — you lose that right if you don't file on time.",
  },
  {
    question: "Do NRIs have to report foreign assets or foreign bank accounts in their Indian ITR?",
    answer:
      "No. Reporting foreign assets and signing authority over foreign accounts (Schedule FA) is a requirement for residents only. As an NRI, you report Indian income and assets, not your foreign holdings.",
  },
  {
    question: "I sold property in India as an NRI — will I definitely need to file?",
    answer:
      "Almost always, yes. Capital gains on a property sale are Indian-source income and typically push you well above the exemption limit, and TDS is deducted on the full sale value regardless. Filing is both mandatory and the only way to claim any excess TDS refund — check the numbers with our Property TDS Calculator first.",
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
  name: "NRI ITR Filing Requirement Checker",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
          <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />
              Free Tool • Tax Year 2026-27
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Do I Need to File
              <span className="block text-[#f0b84b] mt-2">
                an Indian ITR as an NRI?
              </span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Income below the exemption limit doesn&apos;t always mean you
              can skip filing — and TDS deducted on your Indian income is
              often money you're leaving on the table. Answer a few
              questions to find out where you stand.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#checker"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Check My Requirement
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="NRI ITR Filing Requirement Checker" />

        <NriItrFilingChecker />

        {/* EXPLAINER */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              "My income is small, so I don't need to file" — usually wrong
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                Most NRIs assume the only question is whether their Indian
                income crosses the basic exemption limit — ₹4 lakh under the
                new regime, ₹2.5 lakh under the old one. That is the main
                trigger, but it is not the only one. A handful of
                high-value transactions — a large current account deposit,
                significant foreign travel spend, high electricity
                consumption — make filing mandatory on their own,
                regardless of income.
              </p>
              <p data-reveal data-reveal-delay="2">
                The more common situation we see, though, is the opposite
                problem: income comfortably below the exemption limit, but
                TDS already deducted at source — often a large chunk of it,
                on a property sale or rental payment. Filing is not
                mandatory here, but skipping it means leaving that money
                with the government permanently. A return is the only way
                to get it back.
              </p>
              <p data-reveal data-reveal-delay="3">
                One thing NRIs do NOT have to worry about: foreign asset
                reporting. Schedule FA — disclosing foreign bank accounts,
                investments and signing authority — applies to residents
                only. As a non-resident, your Indian return covers your
                Indian income and assets, not what you hold abroad.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-7">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                Where we help
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 leading-7">
                <li>• Confirming whether filing is mandatory or simply worthwhile in your case</li>
                <li>• Preparing and filing your Indian ITR as an NRI, choosing the right form and regime</li>
                <li>• Claiming refunds of excess TDS deducted on property sales, rent or interest</li>
                <li>• Carrying forward losses correctly and on time</li>
                <li>• DTAA relief where your Indian income is also taxed in your country of residence</li>
              </ul>

              <Link
                href="/#appointment"
                className="btn-shine mt-7 inline-flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f7f9fc]">
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
                  <h3 className="text-lg font-bold text-[#002b5c]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
