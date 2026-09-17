import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import DiscountCalculatorTool from "@/components/tools/DiscountCalculatorTool";

const SLUG = "discount-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE = "Discount Calculator (2026) — Free Sale Price & Discount % Calculator | Rajput Lalit & Associates";
const DESCRIPTION = "Free discount calculator — enter the original price and discount percentage to see the final sale price and savings, or work backwards from the final price to find the discount percentage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["discount calculator", "sale price calculator", "percentage off calculator", "discount percentage calculator", "final price calculator"],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Discount Calculator — Rajput Lalit & Associates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const faqs = [
  { question: "How do I calculate a discounted price?", answer: "Multiply the original price by the discount percentage to get the discount amount, then subtract that from the original price. For example, a 20% discount on ₹1,000 is ₹200 off, making the final price ₹800." },
  { question: "Can I work backwards from the sale price to find the discount %?", answer: "Yes — switch to \"I know the final price\" mode, enter the original price and the price you actually paid (or were charged), and the calculator will compute the exact discount percentage and amount." },
  { question: "Does this work for any currency?", answer: "Yes — the calculation is currency-independent. Just enter the numbers in whichever currency you're working with." },
  { question: "Can I stack multiple discounts using this tool?", answer: "This calculator handles one discount at a time. For stacked/successive discounts (e.g. 20% off, then an additional 10% off), apply the first discount, take the resulting final price, and run it through the calculator again as the new original price." },
  { question: "Is this useful for business pricing and invoicing?", answer: "Yes — it's a quick way to check discount math when quoting customers or preparing invoices. For GST-inclusive pricing specifically, see our dedicated GST Calculator." }
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
  name: "Discount Calculator",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
              Free Tool • Used Worldwide • Instant Results
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Discount
              <span className="block text-[#f0b84b] mt-2">Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Work out the sale price from a discount percentage, or the discount percentage from the final price.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Use This Tool
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="Discount Calculator" />
        </div>

        <DiscountCalculatorTool />

        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              More Free Tools
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                This is one of our free online calculators used by people
                worldwide. See the full set — percentage, age, BMI, interest,
                discount and tip calculators, unit converters, plus India
                Income Tax, GST, HRA, EMI and SIP calculators — on our{" "}
                <Link href="/tools" className="text-[#002b5c] font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition">
                  Free Tools page
                </Link>
                .
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
