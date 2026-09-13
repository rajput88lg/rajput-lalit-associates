import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";
import Form145RepatriationGuide from "@/components/Form145RepatriationGuide";

const SLUG = "nri-fund-repatriation-guide";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Form 145 & 146 Guide for NRIs (earlier 15CA/15CB) | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free tool to find which Part of Form 145 (earlier Form 15CA) applies to your remittance from India, and whether you need Form 146 (earlier Form 15CB) — a Chartered Accountant's certificate. Covers property sale proceeds, rent, NRO interest and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Form 15CA 15CB",
    "Form 145 Form 146",
    "NRI fund repatriation India",
    "Form 15CB CA certificate",
    "repatriate property sale proceeds NRI",
    "Rule 220 Income tax",
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
        alt: "Form 145 & 146 Repatriation Guide — Rajput Lalit & Associates",
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
    question: "What happened to Form 15CA and Form 15CB?",
    answer:
      "They were renumbered under the Income-tax Act, 2025. Form 15CA is now Form 145, and Form 15CB (the Chartered Accountant's certificate) is now Form 146, prescribed under Rule 220 of the Income-tax Rules, 2026 (earlier Rule 37BB). This applies to remittances made on or after 1 April 2026 — the substance of the process is unchanged, only the numbering.",
  },
  {
    question: "What is the ₹5 lakh threshold, exactly?",
    answer:
      "It is the aggregate of your taxable remittances abroad during the financial year — not a per-transaction limit. If your running total for the year stays at ₹5 lakh or below, only the simple Part A applies. Cross that total and you move into Part B or Part C, depending on whether you already hold a Lower/Nil TDS Certificate.",
  },
  {
    question: "Do I always need a CA certificate (Form 146) to remit money abroad?",
    answer:
      "No. You need it only for Part C — a taxable remittance above ₹5 lakh where you do not already have a Lower/Nil TDS Certificate (Form 128) from the Assessing Officer. If your remittance is below ₹5 lakh (Part A), not taxable at all (Part D), or you already have that certificate (Part B), no CA certificate is required.",
  },
  {
    question: "I'm repatriating NRI property sale proceeds — which Part applies to me?",
    answer:
      "Property sale proceeds are taxable, and the amount is almost always above ₹5 lakh, so you will need either Part B (if you obtained a Form 128 Lower/Nil TDS Certificate before the sale) or Part C with a Form 146 CA certificate (if you did not). Getting the Form 128 certificate in advance is usually worth it for larger sales — it avoids the CA certification step and, more importantly, avoids excess TDS being blocked in the first place.",
  },
  {
    question: "What is on the Rule 220 exempt list?",
    answer:
      "Around 33 categories of payment are exempted from Form 145 entirely, including import payments, travel expenses (business, education, medical, pilgrimage), remittances by non-residents for family maintenance, and a few other specific categories. If your remittance falls in this list, no Form 145 or 146 is needed at all — though your bank may still ask for a simple declaration for their own records.",
  },
  {
    question: "Who actually files Form 145 — me or my bank?",
    answer:
      "You (the remitter) or someone authorised on your behalf files Form 145. Your bank or authorised dealer will not process the outward remittance until they have the acknowledgement of Form 145 (and Form 146, where required) — so this has to be done before, not after, you initiate the transfer.",
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
  name: "Form 145 & 146 Repatriation Guide",
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
              Free Tool • Form 145 &amp; 146 (earlier 15CA/15CB)
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Repatriating Money
              <span className="block text-[#f0b84b] mt-2">
                From India? Start Here
              </span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Find out which Part of Form 145 applies to your remittance, and
              whether you need a Chartered Accountant's certificate (Form
              146) before your bank will process it.
            </p>

            <div className="hero-in hero-in-4 mt-9">
              <a
                href="#guide"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Check My Remittance
              </a>
            </div>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="NRI Fund Repatriation Guide" />

        <Form145RepatriationGuide />

        {/* EXPLAINER */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Why your bank won't just wire the money
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />

            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p data-reveal data-reveal-delay="1">
                Every outward remittance from India — property sale
                proceeds, rent, NRO deposits — passes through an authorised
                dealer (usually your bank), and banks are required to
                confirm the tax position before they release funds abroad.
                That confirmation is Form 145 (the remitter's declaration),
                sometimes backed by Form 146 (a Chartered Accountant's
                certificate).
              </p>
              <p data-reveal data-reveal-delay="2">
                These were known as Form 15CA and Form 15CB for years. The
                Income-tax Act, 2025 renumbered them to Form 145 and Form
                146 under Rule 220 of the Income-tax Rules, 2026 — the
                process itself, the four-part structure, and the ₹5 lakh
                threshold are all unchanged. Only the names changed, which
                is exactly the kind of detail that trips people up when they
                search for help using the old terms.
              </p>
              <p data-reveal data-reveal-delay="3">
                The single biggest planning point: if you are repatriating
                property sale proceeds and expect the CA-certificate step
                (Part C) to be a hassle, applying for a Lower/Nil TDS
                Certificate (Form 128) in advance moves your remittance to
                the simpler Part B — no CA certificate needed, and less TDS
                blocked in the first place.
              </p>
            </div>

            <div data-reveal className="mt-10 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-7">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                Where we help
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700 leading-7">
                <li>• Issuing Form 146 (CA certificate) for property sale, rent and other remittances</li>
                <li>• Filing Form 145 on your behalf and coordinating with your bank's authorised dealer desk</li>
                <li>• Advising whether a Form 128 Lower/Nil TDS Certificate is worth applying for first</li>
                <li>• DTAA and Tax Residency Certificate guidance where treaty relief applies</li>
                <li>• End-to-end support from property sale to funds credited in your foreign account</li>
                <li>
                  •{" "}
                  <Link
                    href="/nri-itr-filing-requirement-checker"
                    className="underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#d99a2b] transition"
                  >
                    Checking whether you also need to file an Indian ITR
                  </Link>{" "}
                  once the remittance is done
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
