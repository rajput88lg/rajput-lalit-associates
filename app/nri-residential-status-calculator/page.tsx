import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import NriResidentialStatusChecker from "@/components/NriResidentialStatusChecker";

const SLUG = "nri-residential-status-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "NRI Residential Status Calculator 2026-27 | Am I an NRI? — Rajput Lalit & Associates";
const DESCRIPTION =
  "Free tool to check whether you are an NRI, RNOR or Resident for tax year 2026-27. Applies the Section 6 day-count tests including the 182-day, 60+365 and 120-day rules, and tells you what India can tax.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NRI residential status calculator",
    "am I an NRI for tax purposes",
    "RNOR status calculator",
    "182 days rule NRI",
    "120 day rule NRI income tax",
    "Section 6 residential status",
    "resident not ordinarily resident India",
    "NRI status check 2026-27",
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
        alt: "NRI Residential Status Calculator — Rajput Lalit & Associates",
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
    question: "How many days can an NRI stay in India without losing NRI status?",
    answer:
      "Generally up to 181 days. You become a resident if you are in India for 182 days or more in the tax year. A second test also applies: 60 days or more in the year combined with 365 days or more over the previous four years. For Indian citizens who left India for employment, and for Indian citizens or PIOs visiting India, that 60-day figure is relaxed to 182 days — so in most cases the practical limit is 181 days.",
  },
  {
    question: "What is the 120-day rule for NRIs?",
    answer:
      "If you are an Indian citizen or PIO visiting India and your Indian income (excluding foreign income) is more than ₹15 lakh in the year, the relaxed 182-day threshold drops to 120 days. So staying 120 to 181 days, combined with 365 days over the previous four years, makes you a resident. Importantly, anyone caught only by this rule is automatically treated as RNOR, not as an ordinary resident.",
  },
  {
    question: "What does RNOR mean and why does it matter?",
    answer:
      "RNOR stands for Resident but Not Ordinarily Resident. It is a transition category: you are a resident, but India taxes only your Indian income plus foreign income from a business controlled from India. Your other foreign income stays outside the Indian tax net. For someone returning to India after years abroad, RNOR years are valuable and worth planning around.",
  },
  {
    question: "How do I qualify as RNOR?",
    answer:
      "A resident is RNOR if either of two conditions is met: you were a non-resident in 9 of the 10 preceding tax years, or you were in India for 729 days or fewer across the 7 preceding tax years. Meeting either one is enough. Certain people are automatically RNOR — those caught only by the 120-day rule, and deemed residents.",
  },
  {
    question: "Can I be treated as a resident even if I barely visited India?",
    answer:
      "Yes. Under the deemed-resident rule, an Indian citizen whose Indian income exceeds ₹15 lakh and who is not liable to tax in any other country by reason of residence or domicile is treated as a resident regardless of how many days they spent in India. Such a person is classified as RNOR. This rule applies to Indian citizens only, not to PIOs.",
  },
  {
    question: "Are the day of arrival and day of departure counted?",
    answer:
      "Yes, both are counted as days spent in India. This catches people out on borderline cases, so keep your passport stamps and travel records — a single day can change your status and therefore your entire Indian tax exposure for the year.",
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
  name: "NRI Residential Status Calculator",
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
              Am I an NRI?
              <span className="block text-[#f0b84b] mt-2">
                Residential Status Calculator
              </span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Your residential status decides whether India taxes only your
              Indian income — or your income worldwide. Answer six questions and
              find out where you stand.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#checker"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Check My Status
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="NRI Residential Status Calculator" />

        <NriResidentialStatusChecker />

        {/* EXPLAINER */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Why this one answer decides everything
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                Indian tax law does not ask about your passport or your visa. It
                asks a simpler question: <strong>how many days were you
                physically in India?</strong> Section 6 of the Income-tax Act,
                2025 turns that count into one of three statuses, and each one
                exposes a completely different amount of your income to Indian
                tax.
              </p>
              <p data-reveal data-reveal-delay="2">
                A <strong>Non-Resident</strong> pays Indian tax only on Indian
                income. A <strong>Resident and Ordinarily Resident</strong> pays
                Indian tax on <em>worldwide</em> income — the salary in Dubai,
                the rental flat in London, the brokerage account in New York.
                Between them sits <strong>RNOR</strong>, a transition status that
                shields most foreign income for a few years after you return.
              </p>
              <p data-reveal data-reveal-delay="3">
                The gap between these is often lakhs of rupees, and it can turn
                on a handful of days. Both the day you land and the day you fly
                out count as days in India, so an extra weekend can change the
                answer. This is why we ask clients to keep passport stamps and
                boarding passes — the burden of proving your day count sits with
                you, not with the department.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-7">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                Where we help
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 leading-7">
                <li>• Confirming residential status for a borderline year, with documentation</li>
                <li>• Planning return-to-India timing so RNOR years are not wasted</li>
                <li>• DTAA tie-breaker analysis when two countries both claim you as resident</li>
                <li>• Filing Indian returns for NRIs, RNORs and returning residents</li>
                <li>• Foreign asset and income reporting where ordinary residence applies</li>
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
