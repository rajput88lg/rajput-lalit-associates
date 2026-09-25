import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import FeeCards from "@/components/FeeCards";
import FreelancerTaxChecker from "@/components/FreelancerTaxChecker";
import { ITR_FEES, GST_REGISTRATION_FEES, type FeeItem } from "@/lib/fees";

const PAGE_URL = "https://www.rajputlalitassociates.in/freelancer-tax-services";
const TITLE = "Tax & GST for Freelancers and Service Exporters — LUT, ITR";
const DESCRIPTION =
  "For Indian freelancers, developers, designers and consultants paid from abroad: GST registration, LUT for 0% GST on exports, and ITR under the presumptive scheme (Section 58, old 44ADA). Free checker. Fully online.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/freelancer-tax-services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/** Only fees Lalit has confirmed (lib/fees.ts). Everything else is quoted. */
const FEES: FeeItem[] = [
  {
    ...GST_REGISTRATION_FEES[0],
    service: "GST Registration (Freelancer / Proprietor)",
    forWhom: "When turnover crosses ₹20 lakh, or to claim back GST on expenses",
  },
  {
    ...ITR_FEES[1],
    service: "ITR for Freelancers & Consultants",
    forWhom: "Foreign and Indian professional income, presumptive or regular",
  },
];

const QUOTED = [
  "LUT filing every financial year (Form GST RFD-11)",
  "GST returns for exporters (monthly / quarterly)",
  "GST refund of tax paid on expenses (ITC refund)",
  "Advance tax planning and payment",
  "Bookkeeping for freelancers and agencies",
  "Reply to GST or income tax notices",
];

const who = [
  "Software developers and IT consultants working for foreign clients",
  "Designers, writers, editors and marketers on Upwork, Fiverr or direct contracts",
  "Consultants, engineers and other professionals billing companies abroad",
  "Small agencies exporting services with a few team members",
];

const rules = [
  {
    title: "When is it an 'export of service'?",
    text: "All five conditions in Section 2(6) of the IGST Act: you are in India, the client is outside India, the place of supply is outside India, payment comes in convertible foreign exchange (or rupees where RBI allows), and you are not just two branches of the same entity.",
  },
  {
    title: "GST registration — ₹20 lakh",
    text: "Export of services counts as an inter-state supply, but service providers are exempt from compulsory registration until aggregate turnover crosses ₹20 lakh in a financial year (Notification 10/2017-Integrated Tax). Below that, registration is optional.",
  },
  {
    title: "LUT — 0% GST without blocked money",
    text: "Once registered, file a Letter of Undertaking (Form GST RFD-11) on the GST portal. It lets you invoice foreign clients without charging IGST. It is valid for one financial year, so it must be filed again every April. Without it, you pay 18% IGST first and claim a refund later.",
  },
  {
    title: "Income tax — presumptive scheme",
    text: "Resident professionals can declare 50% of gross receipts as income without keeping books — Section 58 of the Income-tax Act, 2025 (old Section 44ADA). Limit: ₹75 lakh if cash receipts are within 5%, otherwise ₹50 lakh. Advance tax can be paid in one instalment by 15 March.",
  },
  {
    title: "Proof of foreign payment",
    text: "Keep the bank's foreign inward remittance proof (FIRC / bank advice) for every payment and match it to the invoice. It supports your export claim under GST and your income in the ITR.",
  },
];

const steps = [
  { n: "1", title: "WhatsApp or book a call", text: "Tell us what you do and roughly how much you earn from abroad." },
  { n: "2", title: "Share documents online", text: "PAN, Aadhaar, bank statements, invoices — on WhatsApp or email." },
  { n: "3", title: "We set it up", text: "GST registration and LUT if needed, and a simple invoicing and record-keeping routine." },
  { n: "4", title: "Filed every year", text: "Returns, LUT renewal and ITR on time — with reminders before each due date." },
];

const faqs = [
  {
    q: "Do I have to charge GST to my foreign clients?",
    a: "No, if your service qualifies as an export under Section 2(6) of the IGST Act, it is zero-rated. If you are not GST registered (turnover within ₹20 lakh), you simply don't charge GST. If you are registered, file a LUT each financial year so you can invoice at 0% without paying IGST first.",
  },
  {
    q: "Is GST registration compulsory for freelancers with foreign clients?",
    a: "Only once aggregate turnover crosses ₹20 lakh in a financial year. Service providers making inter-state supplies — which includes export of services — are exempt from compulsory registration below that limit under Notification 10/2017-Integrated Tax. Some freelancers register earlier to claim back GST paid on laptops, software and other expenses.",
  },
  {
    q: "How long is a LUT valid?",
    a: "One financial year (1 April to 31 March). It has to be filed again every year before you issue export invoices under it. We file it on the GST portal for you.",
  },
  {
    q: "Which section applies to freelancers' income tax now — 44ADA?",
    a: "From 1 April 2026 the Income-tax Act, 2025 applies, and the presumptive scheme for professionals (old Section 44ADA) is in Section 58. The idea is the same: resident professionals can declare 50% of gross receipts as income without keeping books, within the ₹50 lakh / ₹75 lakh limit.",
  },
  {
    q: "Can you help if I am an NRI earning from abroad?",
    a: "The presumptive scheme for professionals is only for residents. If you live abroad, see our NRI tax services — we handle your Indian income and returns there.",
  },
  {
    q: "When do I pay your fee?",
    a: "For GST registration and ITR, you pay once the application or return is ready, before we submit it. For ongoing work like monthly returns, we agree a fixed fee upfront. Payment by UPI or bank transfer, with a receipt every time.",
  },
];

export default function FreelancerTaxServicesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Tax & GST Services for Freelancers and Service Exporters",
      serviceType: "GST registration, LUT filing, GST returns and income tax returns for freelancers exporting services",
      url: PAGE_URL,
      provider: { "@id": "https://www.rajputlalitassociates.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelancer tax services",
        itemListElement: FEES.map((f) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: f.service },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: Number(f.price.replace(/[^\d]/g, "")),
            priceCurrency: "INR",
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const quoteText = encodeURIComponent("Namaste, main freelancer/exporter hoon. Mujhe LUT / GST returns ke liye fees ka quote chahiye.");

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-r from-[#002b5c] to-[#06477f] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-6">
              <p className="text-[#f0b84b] font-bold uppercase tracking-widest text-sm">For freelancers & service exporters</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                Earning From Abroad? Get Your GST and ITR Right
              </h1>
              <p className="mt-6 text-lg text-blue-100 leading-8">
                Developers, designers, consultants and agencies paid in dollars, pounds or euros:
                we handle GST registration, the yearly LUT for 0% GST on exports, and your income
                tax return — fully online from Ambala, Haryana.
              </p>
              <ul className="mt-6 space-y-2 text-blue-100">
                <li>✓ No GST charged to foreign clients — done the legal way</li>
                <li>✓ Simple ITR under the presumptive scheme where you qualify</li>
                <li>✓ Clear fees, confirmed before we start</li>
              </ul>
            </div>
            <FreelancerTaxChecker />
          </div>
        </section>

        <Breadcrumb current="Freelancer Tax Services" />

        {/* WHO */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] text-center">Who This Is For</h2>
            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {who.map((w) => (
                <li key={w} className="border border-gray-200 rounded-xl px-5 py-4 bg-[#f7f9fc] text-[#002b5c] font-semibold leading-7">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RULES */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] text-center">The Rules in Plain Words</h2>
            <p className="mt-4 text-center text-gray-600">As they stand in September 2026.</p>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {rules.map((r) => (
                <div key={r.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#002b5c]">{r.title}</h3>
                  <p className="mt-3 text-gray-700 leading-7">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEES */}
        <FeeCards
          heading="Services & Fees"
          intro="Starting fees for a standard case — the exact fee is confirmed before we start."
          items={FEES}
        />

        <section className="pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-[#002b5c] text-center">Also Available — Quote on Request</h3>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {QUOTED.map((s) => (
                <li key={s} className="border border-gray-200 rounded-xl px-5 py-4 bg-white text-[#002b5c] font-semibold">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/919354953603?text=${quoteText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#147438] hover:bg-[#0f5429] text-white px-8 py-3 rounded-lg font-bold transition"
              >
                WhatsApp par quote lein
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] text-center">How It Works — Fully Online</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="text-center border border-gray-200 rounded-2xl p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#002b5c] text-white flex items-center justify-center text-xl font-extrabold">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-bold text-[#002b5c] text-lg">{s.title}</h3>
                  <p className="mt-2 text-gray-600 leading-6">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-700">
              Detailed guides:{" "}
              <Link href="/blog/gst-freelancers-export-of-services-lut" className="text-[#0066cc] font-semibold underline">
                GST &amp; LUT for freelancers
              </Link>{" "}
              ·{" "}
              <Link href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation" className="text-[#0066cc] font-semibold underline">
                Presumptive tax for professionals
              </Link>{" "}
              ·{" "}
              <Link href="/blog/gst-refund-process-exporters-inverted-duty-structure" className="text-[#0066cc] font-semibold underline">
                GST refund for exporters
              </Link>{" "}
              ·{" "}
              <Link href="/advance-tax-calculator" className="text-[#0066cc] font-semibold underline">
                Advance tax calculator
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border rounded-xl p-6">
                  <h3 className="font-bold text-lg text-[#002b5c] mb-2">{f.q}</h3>
                  <p className="text-gray-700 leading-7">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              Living outside India?{" "}
              <Link href="/nri-tax-services" className="text-[#0066cc] font-semibold underline">
                See our NRI tax services
              </Link>
              .
            </p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
