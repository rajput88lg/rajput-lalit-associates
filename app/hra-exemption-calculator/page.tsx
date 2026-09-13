import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import HraCalculator from "@/components/HraCalculator";

const SLUG = "hra-exemption-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "HRA Exemption Calculator (2026) — Free & Instant | Rajput Lalit & Associates";
const DESCRIPTION =
  "Calculate your exact HRA (House Rent Allowance) tax exemption instantly. Enter your basic salary, HRA received, rent paid and city type to see the exempt amount and taxable HRA — free, no sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "HRA exemption calculator",
    "HRA calculator online free",
    "house rent allowance calculator",
    "HRA calculator India",
    "HRA exemption rules",
    "HRA tax exemption",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HRA Exemption Calculator — Rajput Lalit & Associates" }],
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
    question: "How is HRA exemption calculated?",
    answer:
      "HRA exemption is the LEAST of three amounts: (1) actual HRA received from your employer, (2) rent paid minus 10% of your salary (Basic + DA), and (3) 50% of your salary if you live in a metro city, or 40% if you live elsewhere. Whichever of these three is smallest is your exempt amount.",
  },
  {
    question: "Which cities count as 'metro' for the 50% rate?",
    answer:
      "Only Delhi, Mumbai, Kolkata and Chennai qualify for the 50%-of-salary rate. Every other city — including Bengaluru, Pune, Hyderabad and Ahmedabad — uses the 40% rate. Some websites claim this list expanded to 8 cities from FY 2026-27, but we could not confirm this against any official notification, so this calculator uses the verified 4-city rule.",
  },
  {
    question: "Can I claim HRA exemption under the New Tax Regime?",
    answer:
      "No. HRA exemption under Section 10(13A) is available only if you opt for the Old Tax Regime. Under the New Regime, your entire HRA received is taxable as part of your salary.",
  },
  {
    question: "What if I don't pay rent, or my rent is very low?",
    answer:
      "If your rent paid is less than 10% of your salary, the 'rent minus 10% of salary' figure becomes zero or negative — meaning you likely won't get any HRA exemption, even if your employer pays you HRA. In that case, the entire HRA is taxable.",
  },
  {
    question: "Do I need rent receipts to claim this exemption?",
    answer:
      "Yes — your employer will typically ask for rent receipts (and a PAN of the landlord if annual rent exceeds ₹1,00,000) to allow the exemption in your Form 16. Keep these on file even if not asked immediately, as the tax department can ask for them later.",
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
  name: "HRA Exemption Calculator",
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
              HRA Exemption
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Find out exactly how much of your House Rent Allowance is
              tax-free, and how much is taxable.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Calculate My HRA Exemption
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="HRA Exemption Calculator" />
        </div>

        <HraCalculator />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              HRA is only one part of your Old vs New Regime decision
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                A large HRA exemption is one of the strongest reasons to stay
                on the Old Regime — but it only matters if the exemption,
                combined with your Section 80C and 80D deductions, is enough
                to beat what the New Regime already gives you for free.
              </p>
              <p data-reveal data-reveal-delay="2">
                Take the exemption amount above and plug it into our{" "}
                <Link href="/income-tax-calculator" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Income Tax Calculator
                </Link>{" "}
                (along with 80C/80D) to see which regime actually saves you
                more this year.
              </p>
              <p data-reveal data-reveal-delay="3">
                Filing your return with the right regime and the right
                exemptions claimed? Our{" "}
                <Link href="/income-tax-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  income tax return filing
                </Link>{" "}
                team can take it from here.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Want us to check your full computation?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We handle income tax filing for salaried individuals and
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
