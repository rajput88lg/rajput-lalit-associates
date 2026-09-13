import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import SipCalculator from "@/components/SipCalculator";

const SLUG = "sip-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "SIP Calculator (2026) — Free Mutual Fund SIP Returns Calculator | Rajput Lalit & Associates";
const DESCRIPTION =
  "Calculate the future value of your monthly SIP instantly. Enter monthly investment, expected annual return and duration to see total invested amount, estimated returns and maturity value — free, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "SIP calculator",
    "SIP calculator online free",
    "mutual fund SIP calculator",
    "SIP return calculator India",
    "SIP maturity calculator",
    "monthly SIP calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "SIP Calculator — Rajput Lalit & Associates" }],
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
    question: "How is SIP maturity value calculated?",
    answer:
      "SIP maturity value uses the future-value-of-annuity formula: FV = P × [((1+i)^n − 1) / i] × (1+i), where P is your monthly investment, i is the expected monthly rate of return (annual rate ÷ 12 ÷ 100), and n is the total number of months. This assumes an investment made at the start of every month and a constant rate of return.",
  },
  {
    question: "What rate of return should I assume for equity mutual funds?",
    answer:
      "There is no guaranteed rate — equity mutual fund returns fluctuate with the market and past performance never guarantees future results. Many investors use a conservative 10-12% long-term assumption for equity funds when planning, but you should check a fund's actual category and long-term track record rather than assuming one number.",
  },
  {
    question: "Is SIP better than a lump sum investment?",
    answer:
      "SIP works well when you don't have a large lump sum, and it averages your purchase cost across market ups and downs (rupee-cost averaging), which reduces the risk of investing everything at a market peak. A lump sum can outperform in a rising market, but SIP is generally the more disciplined, lower-stress approach for salaried and business income.",
  },
  {
    question: "Are SIP returns taxable?",
    answer:
      "Yes. Each SIP instalment is treated as a separate investment for capital gains purposes. Equity mutual fund units held over 12 months qualify for long-term capital gains treatment; units held less than 12 months are taxed as short-term gains. Debt fund taxation rules differ — talk to us if you need the exact treatment for your fund type.",
  },
  {
    question: "Is this calculator giving me investment advice?",
    answer:
      "No — this tool only projects a maturity value based on the numbers you enter and an assumed constant return; it is not a recommendation to invest in any specific fund or scheme. Mutual fund investments are subject to market risk, and actual returns will differ from this estimate.",
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
  name: "SIP Calculator",
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
              SIP
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              See how a monthly SIP can grow over time — total invested,
              estimated returns, and maturity value, worked out instantly.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Calculate My SIP Returns
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="SIP Calculator" />
        </div>

        <SipCalculator />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              SIP is a plan, not just a number
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                The maturity value above assumes a constant annual return,
                which real markets never give you in a straight line. What
                matters more than the exact figure is the discipline of
                investing every month regardless of market mood — that is
                what rupee-cost averaging is designed to reward.
              </p>
              <p data-reveal data-reveal-delay="2">
                Remember that equity mutual fund gains are taxable — long-term
                capital gains if held over 12 months, short-term if sold
                earlier — and this affects your real, post-tax return. If
                you&apos;re unsure how your investments fit into your overall
                tax picture, our{" "}
                <Link href="/income-tax-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  income tax filing
                </Link>{" "}
                team can help.
              </p>
              <p data-reveal data-reveal-delay="3">
                Planning a loan alongside your investments? Try our{" "}
                <Link href="/home-loan-emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Home Loan EMI Calculator
                </Link>{" "}
                or{" "}
                <Link href="/emi-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  general EMI Calculator
                </Link>
                .
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Want help planning your finances around tax?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We help individuals and businesses across India with income
                tax filing, accounting and GST. The first consultation is
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
