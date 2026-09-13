import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import LoanEmiCalculator from "@/components/LoanEmiCalculator";

const SLUG = "business-loan-emi-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Business Loan EMI Calculator (2026) — Free & Instant | Rajput Lalit & Associates";
const DESCRIPTION =
  "Calculate your business loan EMI instantly. Enter loan amount, interest rate and tenure to see your monthly EMI, total interest payable, and a year-wise repayment schedule — free, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "business loan EMI calculator",
    "business loan calculator India",
    "MSME loan EMI calculator",
    "working capital loan calculator",
    "business loan interest calculator",
    "SME loan EMI calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Business Loan EMI Calculator — Rajput Lalit & Associates" }],
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
    question: "How is business loan EMI different from a home loan EMI?",
    answer:
      "The maths is identical (a reducing-balance EMI on the loan amount, rate and tenure), but business loans usually carry a higher interest rate than secured home loans, since most are unsecured, and tenures are typically shorter — often 1 to 7 years instead of 15-30.",
  },
  {
    question: "What documents do lenders usually ask for a business loan?",
    answer:
      "Most lenders want your business's GST returns, last 2-3 years of ITR and financial statements (P&L and balance sheet), bank statements, and proof of business registration (Udyam/MSME, GST certificate, or incorporation documents). Having clean, up-to-date books significantly improves approval odds and the rate you're offered.",
  },
  {
    question: "Does my GST filing history affect business loan approval?",
    answer:
      "Yes — many lenders now check GST return filing history and turnover trends as a proxy for business health, alongside your credit score. Consistent, on-time GST filing with no major mismatches between GSTR-1 and GSTR-3B works in your favour.",
  },
  {
    question: "Can I prepay a business loan early?",
    answer:
      "Most business loans allow prepayment, but unlike floating-rate home loans, lenders can and often do charge a prepayment or foreclosure fee (commonly 2-5% of the outstanding amount) on business loans. Check this term before signing, especially if you expect to close the loan early.",
  },
  {
    question: "Is this EMI figure exactly what the bank will offer me?",
    answer:
      "No — this is a planning estimate. Your actual rate and eligible amount depend on the lender's assessment of your business's turnover, credit score, existing liabilities and the specific loan scheme (term loan, working capital, or MSME scheme-linked loan).",
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
  name: "Business Loan EMI Calculator",
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
              Business Loan EMI
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Work out your exact monthly EMI, total interest, and a full
              year-wise repayment schedule for your MSME or business loan.
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
          <Breadcrumb current="Business Loan EMI Calculator" />
        </div>

        <LoanEmiCalculator
          affiliateKey="businessLoan"
          serviceName="Business Loan EMI Calculator"
          ctaLabel="Compare Business Loan Offers"
          defaultPrincipal={1000000}
          minPrincipal={50000}
          maxPrincipal={10000000}
          principalStep={25000}
          defaultRatePct={14}
          minRatePct={9}
          maxRatePct={24}
          defaultTenureYears={5}
          minTenureYears={1}
          maxTenureYears={10}
        />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Getting loan-ready is as important as the EMI
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                Lenders assess a business loan application on your GST
                filing history, ITR and financial statements, and existing
                liabilities — not just the amount you're asking for. Clean,
                consistent, on-time compliance directly improves both your
                approval chances and the rate you're offered.
              </p>
              <p data-reveal data-reveal-delay="2">
                If your GST returns, books of accounts or ITR filings aren't
                fully up to date, sorting that out before you apply is usually
                more valuable than shopping for a slightly lower rate. Our{" "}
                <Link href="/accounting-bookkeeping-services" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  accounting &amp; bookkeeping
                </Link>{" "}
                and{" "}
                <Link href="/gst-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  GST return filing
                </Link>{" "}
                services exist exactly for this.
              </p>
              <p data-reveal data-reveal-delay="3">
                Planning a home purchase alongside your business needs? Try our{" "}
                <Link href="/home-loan-emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Home Loan EMI Calculator
                </Link>{" "}
                too.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Want your books loan-ready?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We handle GST, accounting, TDS and income tax for businesses
                across India — the exact paperwork lenders ask for. The first
                consultation is free.
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
