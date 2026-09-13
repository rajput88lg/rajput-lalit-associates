import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import LowerTdsCertificateChecklist from "@/components/LowerTdsCertificateChecklist";

const SLUG = "nri-lower-tds-certificate-checklist";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Lower TDS Certificate (Form 128) Checklist for NRIs | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free document checklist for NRI property sellers applying for a Lower/Nil TDS Certificate — Form 128 (earlier Form 13, Section 395). See exactly what to prepare, the application process, and processing timeline.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Form 128 checklist",
    "Lower TDS certificate NRI",
    "Form 13 NRI property sale",
    "Nil TDS certificate documents",
    "Section 395 lower deduction certificate",
    "NRI TDS certificate documents required",
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
        alt: "Lower TDS Certificate (Form 128) Checklist — Rajput Lalit & Associates",
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
    question: "What is Form 128, and is it the same as the old Form 13?",
    answer:
      "Yes. Form 128 is the renumbered version of Form 13 under the Income-tax Act, 2025 (the underlying provision moved from Section 197 to Section 395(1)), effective from 1 April 2026. It is the application an NRI seller files to get a certificate authorising the buyer to deduct TDS at a lower rate — or nil — instead of the standard rate on the full sale value.",
  },
  {
    question: "Who applies for Form 128 — the buyer or the seller?",
    answer:
      "The NRI seller applies. The certificate, once issued, is handed to the buyer, who then deducts TDS at the rate specified in the certificate instead of the standard rate that would otherwise apply on the full sale consideration.",
  },
  {
    question: "How long does it take to get the certificate?",
    answer:
      "Typically 4 to 8 weeks from a complete application, though it can be faster or slower depending on the Assessing Officer's workload and how quickly you respond to any queries. Because of this, apply as soon as a buyer is finalised — well before the sale deed is scheduled for registration.",
  },
  {
    question: "Is the certificate valid for any buyer, or a specific one?",
    answer:
      "It is buyer-specific. If the buyer named in your application changes before the sale completes, you need to file a fresh Form 128 application for the new buyer.",
  },
  {
    question: "How long is the certificate valid once issued?",
    answer:
      "From its date of issue until 31 March of that financial year. If your sale is likely to spill into the next financial year, factor that into your timeline.",
  },
  {
    question: "Do I need a PAN to apply?",
    answer:
      "Yes, PAN is mandatory for a Form 128 application. If you do not have one, you need to apply for and receive a PAN before you can file the application — build this into your timeline if you are starting from scratch.",
  },
  {
    question: "Is it always worth applying for a lower TDS certificate?",
    answer:
      "It is worth it when the gap between standard TDS (deducted on the full sale value) and your actual tax liability (on the capital gain) is significant — which is most NRI property sales. Use our NRI Property TDS Calculator first to see the size of that gap before deciding whether the paperwork is worth it.",
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
  name: "Lower TDS Certificate (Form 128) Document Checklist",
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

      {/* Navbar/hero/FAQ sab `print:hidden` hain — jab user checklist ko
          print/save karta hai to sirf checklist wala hissa print hota hai. */}
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
              Free Tool • Form 128 (earlier Form 13)
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Lower TDS Certificate
              <span className="block text-[#f0b84b] mt-2">
                Document Checklist
              </span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Applying for a Form 128 Lower/Nil TDS Certificate on your
              property sale? Check off exactly what you need, see the real
              process, and don&apos;t lose weeks to missing paperwork.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#checklist"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Start the Checklist
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <div className="print:hidden">
          <Breadcrumb current="Lower TDS Certificate Checklist" />
        </div>

        <LowerTdsCertificateChecklist />

        {/* EXPLAINER */}
        <section className="py-20 bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Why NRIs bother with this paperwork
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                When an NRI sells property in India, the buyer must deduct
                TDS on the <strong>full sale value</strong> — not the profit
                — under Section 393(2) of the Income-tax Act, 2025. For most
                sellers this locks up far more money than their actual tax
                liability, and it sits with the government until a refund is
                processed after filing a return, often months later.
              </p>
              <p data-reveal data-reveal-delay="2">
                Form 128 (the renumbered Form 13, under Section 395(1)) is
                the fix. The seller applies to the Jurisdictional Assessing
                Officer with a computation of the actual expected tax, and
                if approved, the buyer deducts TDS at that lower rate — or
                nil — instead of the standard rate on the gross sale amount.
              </p>
              <p data-reveal data-reveal-delay="3">
                The catch is timing and paperwork. The application has to be
                filed and ideally approved{" "}
                <strong>before the sale deed is registered</strong>, and
                incomplete documentation is the single biggest reason
                applications drag on. That is what this checklist is for.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-7">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                Where we help
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 leading-7">
                <li>• Preparing the capital gains computation the application relies on</li>
                <li>• Filing Form 128 on TRACES and handling Assessing Officer queries</li>
                <li>• Coordinating with the buyer's side so registration isn't delayed</li>
                <li>• Filing the eventual Indian tax return once the sale completes</li>
                <li>
                  •{" "}
                  <Link
                    href="/nri-fund-repatriation-guide"
                    className="underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition"
                  >
                    Form 145/146 (earlier 15CA/15CB)
                  </Link>{" "}
                  support for repatriating the sale proceeds abroad
                </li>
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
