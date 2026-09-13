import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import LoanEmiCalculator from "@/components/LoanEmiCalculator";

const SLUG = "emi-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "EMI Calculator (2026) — Free Loan EMI Calculator Online | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free online EMI calculator for any loan — personal, car, home or business. Enter loan amount, interest rate and tenure to see your monthly EMI, total interest payable, and a year-wise repayment schedule instantly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "EMI calculator",
    "EMI calculator online free",
    "loan EMI calculator India",
    "personal loan EMI calculator",
    "car loan EMI calculator",
    "monthly EMI calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "EMI Calculator — Rajput Lalit & Associates" }],
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
    question: "What is EMI and how is it calculated?",
    answer:
      "EMI (Equated Monthly Instalment) is the fixed monthly amount you pay to repay a loan. It's calculated using the reducing-balance formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan amount, r is the monthly interest rate, and n is the number of monthly instalments.",
  },
  {
    question: "Does this EMI calculator work for personal, car and business loans?",
    answer:
      "Yes — the underlying formula is the same for any reducing-balance loan (personal, car, consumer durable, or business). Only the typical interest rate and tenure differ by loan type. For a home loan or business loan specifically, our dedicated Home Loan EMI Calculator and Business Loan EMI Calculator include loan-type-specific FAQs and guidance.",
  },
  {
    question: "What is the difference between flat rate and reducing balance EMI?",
    answer:
      "Reducing balance (used here, and by virtually all banks and NBFCs today) charges interest only on the outstanding principal, which falls every month. A flat rate charges interest on the original principal for the entire tenure, which works out significantly more expensive for the same quoted rate — always confirm which method a lender is using before comparing offers.",
  },
  {
    question: "How can I reduce my total interest outflow?",
    answer:
      "The three levers are: a shorter tenure (higher EMI, less total interest), a lower interest rate (compare offers before signing), and prepaying a lump sum early in the loan when your outstanding principal — and therefore future interest — is highest.",
  },
  {
    question: "Is the EMI shown here exactly what I'll be offered?",
    answer:
      "No — this is a planning estimate. Your actual EMI depends on the lender's final approved rate, which is based on your credit score, income, existing liabilities and the specific loan scheme. Always confirm the final figure from the loan sanction letter.",
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
  name: "EMI Calculator",
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
              Free Tool • Instant Results
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              EMI
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Works for any loan — personal, car, consumer or business. See
              your monthly EMI, total interest, and full repayment schedule.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Calculate My EMI
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="EMI Calculator" />
        </div>

        <LoanEmiCalculator
          affiliateKey="personalLoan"
          serviceName="EMI Calculator (General)"
          ctaLabel="Compare Loan Offers"
          defaultPrincipal={500000}
          minPrincipal={10000}
          maxPrincipal={5000000}
          principalStep={10000}
          defaultRatePct={12}
          minRatePct={8}
          maxRatePct={28}
          defaultTenureYears={3}
          minTenureYears={1}
          maxTenureYears={7}
        />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Looking for a specific loan type?
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                This calculator uses the standard reducing-balance EMI formula
                that applies to any term loan. If you&apos;re specifically
                planning a home purchase or a business loan, our dedicated
                calculators include loan-type-specific guidance and FAQs:{" "}
                <Link href="/home-loan-emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Home Loan EMI Calculator
                </Link>{" "}
                and{" "}
                <Link href="/business-loan-emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Business Loan EMI Calculator
                </Link>
                .
              </p>
              <p data-reveal data-reveal-delay="2">
                Already investing alongside your EMIs? Try our{" "}
                <Link href="/sip-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  SIP Calculator
                </Link>{" "}
                to see how your investments could grow over the same period.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Need help with tax or compliance too?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We handle GST, income tax and accounting for individuals and
                businesses across India. The first consultation is free.
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
