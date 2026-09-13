import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import GstCalculator from "@/components/GstCalculator";

const SLUG = "gst-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "GST Calculator (2026) — Add or Remove GST Online Free | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free online GST calculator — add GST to a base price or find the base price from a GST-inclusive amount. Supports 5%, 12%, 18%, 28% and custom rates, with CGST/SGST split shown instantly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "GST calculator",
    "GST calculator online free",
    "GST calculator India",
    "add GST calculator",
    "remove GST calculator",
    "CGST SGST calculator",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "GST Calculator — Rajput Lalit & Associates" }],
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
    question: "How do I calculate GST on a price?",
    answer:
      "To add GST: GST amount = base price × (GST rate ÷ 100), and total = base price + GST amount. To find the base price from a GST-inclusive amount: base price = inclusive amount ÷ (1 + GST rate ÷ 100). This calculator does both automatically.",
  },
  {
    question: "What are the standard GST rates in India?",
    answer:
      "The common GST slabs are 5%, 12%, 18% and 28%, with a few special lower rates (like 0.25% or 3%) for specific goods such as precious stones and metals. The applicable rate depends on the HSN/SAC code of the goods or service — check your invoice or GST rate schedule if unsure.",
  },
  {
    question: "What is the difference between CGST, SGST and IGST?",
    answer:
      "For a sale within the same state, GST is split equally into CGST (Central GST) and SGST (State GST) — for example, an 18% rate becomes 9% CGST + 9% SGST. For a sale between two different states, the full rate is charged as IGST (Integrated GST) instead, going entirely to the central pool for later settlement.",
  },
  {
    question: "Is this calculator useful for GST return filing?",
    answer:
      "It's a quick planning/invoicing tool, not a return-filing tool — it doesn't know your input tax credit, exemptions, or composition scheme status. For actual GST return filing (GSTR-1, GSTR-3B, GSTR-9), you need your full sales and purchase data — that's exactly what our GST return filing service handles.",
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
  name: "GST Calculator",
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
              GST
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Add GST to a price, or work backwards from a GST-inclusive
              amount — with the CGST/SGST split shown instantly.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Calculate GST
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="GST Calculator" />
        </div>

        <GstCalculator />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              A quick calculation is not the same as correct GST compliance
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                This tool is built for quick, everyday calculations — pricing
                a quote, checking an invoice, or working out what a
                GST-inclusive amount really costs before tax. It does not
                account for input tax credit, reverse charge, exemptions or
                composition scheme rules.
              </p>
              <p data-reveal data-reveal-delay="2">
                If you're registered under GST, getting your actual{" "}
                <Link href="/gst-return-filing" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  GST returns
                </Link>{" "}
                filed correctly and on time matters far more than any
                calculator — mismatches between GSTR-1 and GSTR-3B are one of
                the most common triggers for a{" "}
                <Link href="/gst-notice-reply" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  GST notice
                </Link>
                .
              </p>
            </div>

            <div data-reveal className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-2xl p-7 md:p-9">
              <h3 className="text-2xl font-extrabold">Need help with GST registration or filing?</h3>
              <p className="mt-3 text-blue-100 leading-7">
                We handle GST registration, return filing and notice replies
                for businesses across India. The first consultation is free.
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
