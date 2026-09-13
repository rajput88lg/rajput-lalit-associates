import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import LoanEmiCalculator from "@/components/LoanEmiCalculator";

const SLUG = "home-loan-emi-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Home Loan EMI Calculator (2026) — Free & Instant | Rajput Lalit & Associates";
const DESCRIPTION =
  "Calculate your home loan EMI instantly. Enter loan amount, interest rate and tenure to see your monthly EMI, total interest payable, and a year-wise repayment schedule — free, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "home loan EMI calculator",
    "home loan calculator India",
    "housing loan EMI calculator",
    "home loan interest calculator",
    "EMI calculator online free",
    "home loan eligibility calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Home Loan EMI Calculator — Rajput Lalit & Associates" }],
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
    question: "How is home loan EMI calculated?",
    answer:
      "EMI is calculated using the reducing-balance formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the tenure in months. Every EMI has an interest portion and a principal portion — early EMIs are mostly interest, later ones are mostly principal.",
  },
  {
    question: "What is a good home loan interest rate in 2026?",
    answer:
      "Home loan rates in India move with the RBI repo rate and vary by lender, loan amount and your credit score. Rather than quoting one number that goes stale, compare live offers from multiple banks/NBFCs before deciding — that's what the 'Compare Home Loan Offers' button on this page is for.",
  },
  {
    question: "Does a longer tenure always mean I pay more interest?",
    answer:
      "Yes. A longer tenure lowers your monthly EMI but increases the total interest paid over the life of the loan, since interest keeps accruing on the outstanding balance for longer. Use the year-wise breakdown above to see exactly how much of each year's payment goes to interest versus principal.",
  },
  {
    question: "Can I prepay my home loan to reduce interest?",
    answer:
      "Yes — for floating-rate home loans, RBI rules do not allow banks to charge prepayment/foreclosure penalties to individual borrowers. Prepaying reduces your outstanding principal, which reduces the interest charged on all future EMIs — even a small lump-sum prepayment early in the loan can save a meaningful amount.",
  },
  {
    question: "Is this EMI figure exactly what the bank will offer me?",
    answer:
      "No — this is an estimate for planning purposes. Your actual EMI depends on the lender's final approved rate (which depends on your credit score, income and the specific scheme), processing fees, and whether the rate is fixed or floating. Always check the final loan sanction letter before signing.",
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
  name: "Home Loan EMI Calculator",
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
              Home Loan EMI
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Work out your exact monthly EMI, total interest, and a full
              year-wise repayment schedule before you approach a lender.
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
          <Breadcrumb current="Home Loan EMI Calculator" />
        </div>

        <LoanEmiCalculator
          affiliateKey="homeLoan"
          serviceName="Home Loan EMI Calculator"
          ctaLabel="Compare Home Loan Offers"
          defaultPrincipal={3500000}
          minPrincipal={100000}
          maxPrincipal={20000000}
          principalStep={50000}
          defaultRatePct={8.5}
          minRatePct={6}
          maxRatePct={15}
          defaultTenureYears={20}
          minTenureYears={1}
          maxTenureYears={30}
        />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Planning a home loan? Look beyond the EMI
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                A lower EMI feels comfortable today, but a longer tenure means
                you pay far more interest over the life of the loan. Use the
                year-wise breakdown above to see exactly how the balance
                between principal and interest shifts each year, and try a few
                different tenures before deciding.
              </p>
              <p data-reveal data-reveal-delay="2">
                Home loan interest also qualifies for tax deductions — principal
                repayment under Section 80C and interest under Section 24(b) of
                the Income-tax Act (subject to the regime you choose and
                applicable limits). If you&apos;re unsure which tax regime
                suits you better with a home loan in the picture, that&apos;s
                exactly the kind of question our{" "}
                <Link href="/income-tax-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  income tax filing
                </Link>{" "}
                team can help with.
              </p>
              <p data-reveal data-reveal-delay="3">
                Running a business and considering a loan for it instead? Our{" "}
                <Link href="/business-loan-emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Business Loan EMI Calculator
                </Link>{" "}
                and{" "}
                <Link href="/sip-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  SIP Calculator
                </Link>{" "}
                are built the same way.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Need help with the paperwork side?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We help individuals and businesses across India with income
                tax filing, accounting and GST — the documents most lenders
                ask for. The first consultation is free.
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
