import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import NriPropertyTdsCalculator from "@/components/NriPropertyTdsCalculator";

const SLUG = "nri-property-tds-calculator";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "NRI Property Sale TDS Calculator (2026) | Section 393(2) — Rajput Lalit & Associates";
const DESCRIPTION =
  "Free calculator for NRIs selling property in India. Work out TDS under Section 393(2) of the Income-tax Act 2025, your real capital gains tax, and how much money gets blocked until you claim a refund.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NRI property TDS calculator",
    "TDS on sale of property by NRI",
    "Section 393(2) TDS calculator",
    "NRI capital gains calculator India",
    "lower TDS certificate NRI Form 128",
    "NRI selling property in India tax",
    "Section 195 TDS NRI property",
    "NRI property sale tax calculator 2026",
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
        alt: "NRI Property Sale TDS Calculator — Rajput Lalit & Associates",
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
    question:
      "How much TDS is deducted when an NRI sells property in India?",
    answer:
      "For a long-term sale (property held more than 24 months), TDS is 12.5% plus surcharge and 4% cess — an effective 13% if the sale value is up to ₹50 lakh, 14.30% between ₹50 lakh and ₹1 crore, and 14.95% above ₹1 crore. Crucially, this is deducted on the full sale consideration, not on your profit.",
  },
  {
    question:
      "Is TDS deducted on the sale price or only on the capital gain?",
    answer:
      "On the entire sale price. This is the single biggest reason NRIs end up with large amounts locked with the Income Tax Department. Your actual tax is only on the gain, so the excess has to be claimed back as a refund by filing a return — unless you obtain a Lower TDS Certificate before the sale.",
  },
  {
    question: "Is there a ₹50 lakh threshold like there is for resident sellers?",
    answer:
      "No. When the seller is a resident, TDS applies only if the sale value is ₹50 lakh or more. When the seller is an NRI, TDS under Section 393(2) applies from the very first rupee, whatever the sale value.",
  },
  {
    question: "What is a Lower TDS Certificate and how does it help?",
    answer:
      "Under Section 395 of the Income-tax Act 2025, you can apply in Form 128 (which replaced the old Form 13) for a certificate directing the buyer to deduct TDS at a lower rate matching your actual liability. It must be obtained before the payment is made — a certificate cannot reverse tax already deducted, so it needs to be started well before the registry date.",
  },
  {
    question: "Can NRIs use the 20% with indexation option on property?",
    answer:
      "No. For transfers on or after 23 July 2024, long-term capital gains on property are taxed at a flat 12.5% without indexation. The option to instead pay 20% with indexation was retained only for resident individuals and HUFs, so it is not available to NRIs.",
  },
  {
    question: "Does the buyer need a TAN to buy property from an NRI?",
    answer:
      "Yes, a buyer deducting TDS under Section 393(2) has needed a TAN, and files the quarterly return in Form 144 (earlier Form 27Q) and issues the seller a certificate in Form 131 (earlier Form 16A). Budget 2026-27 announced that from 1 October 2026 resident individual and HUF buyers may use their PAN instead; companies, LLPs and firms would still need a TAN. Please confirm the position applicable on your registry date before relying on it.",
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
  name: "NRI Property Sale TDS Calculator",
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

      {/* Navbar/hero/FAQ sab `print:hidden` hain — jab user report ko PDF
          save karta hai to sirf result wala hissa print hota hai, upar
          firm ka letterhead ke saath. */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white print:hidden">
          <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
          <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />
              Free Tool • Income-tax Act 2025
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              NRI Property Sale
              <span className="block text-[#f0b84b] mt-2">TDS Calculator</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Selling property in India as an NRI? The buyer must deduct TDS on
              the <strong className="text-white">full sale price</strong> — not
              on your profit. Find out exactly how much, and how much of your
              money gets blocked.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#calculator"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Calculate My TDS
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="NRI Property TDS Calculator" />
        </div>

        <NriPropertyTdsCalculator />

        {/* EXPLAINER */}
        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Why NRIs lose money on property sales
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                When a resident sells property, the buyer deducts a modest 1% TDS,
                and only if the sale value is ₹50 lakh or more. When an{" "}
                <strong>NRI</strong> sells, the rules are completely different:
                the buyer must deduct tax under{" "}
                <strong>Section 393(2) of the Income-tax Act, 2025</strong>{" "}
                (Section 195 under the old Act) on the{" "}
                <strong>entire sale consideration</strong>, from the very first
                rupee.
              </p>
              <p data-reveal data-reveal-delay="2">
                Suppose an NRI bought a flat for ₹40 lakh in 2012 and sells it
                today for ₹1.5 crore. The real taxable gain is about ₹1.08 crore,
                on which the tax works out to roughly ₹16 lakh. But the buyer must
                deduct 14.95% of the <em>full ₹1.5 crore</em> — about ₹22.4 lakh.
                That leaves roughly <strong>₹6.3 lakh of the seller&apos;s own
                money sitting with the department</strong>, recoverable only
                after filing a return and waiting for the refund to be processed.
              </p>
              <p data-reveal data-reveal-delay="3">
                This is avoidable. Section 395 allows you to apply in{" "}
                <strong>Form 128</strong> for a Lower or Nil TDS Certificate, so
                the buyer deducts an amount close to your genuine liability
                instead. The catch is timing — a certificate cannot undo tax
                already deducted, so the application has to be made and approved{" "}
                <strong>before the payment and registry</strong>. The department
                typically takes around a month to process it.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-7">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                How we help NRI sellers
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 leading-7">
                <li>• Computing your correct capital gain and tax liability</li>
                <li>• Preparing and filing the Form 128 application under Section 395</li>
                <li>• Following up with the Assessing Officer until the certificate is issued</li>
                <li>• Guiding the buyer on TAN, challan, Form 144 return and Form 131 certificate</li>
                <li>• Filing your Indian income tax return and claiming any refund due</li>
                <li>• Form 15CA / 15CB certification for repatriating the sale proceeds abroad</li>
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
                  <h3 className="text-lg font-bold text-[#002b5c]">
                    {faq.question}
                  </h3>
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
