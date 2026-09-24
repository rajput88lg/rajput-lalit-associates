import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import FeeCards from "@/components/FeeCards";
import NriWhatsAppPicker from "@/components/NriWhatsAppPicker";
import { NRI_FEES, US_CPA_REPORT_FEES } from "@/lib/nriServices";

const PAGE_URL = "https://www.rajputlalitassociates.in/nri-tax-services";
const OG_IMAGE = "/og/nri-tax-services.png";
const TITLE = "NRI Tax Services India — ITR, Property Sale TDS, Form 128";
const DESCRIPTION =
  "India tax help for NRIs in the USA, UAE, UK, Canada and Australia: NRI ITR from ₹5,000, property sale ITR and TDS refund, Form 128 lower TDS certificate, Form 145/146, and India income reports for your US CPA. Fully online.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/nri-tax-services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1536, height: 1024, alt: "NRI Tax Services — Rajput Lalit & Associates" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
  robots: { index: true, follow: true },
};

const problems = [
  {
    title: "Sold property, lakhs stuck in TDS",
    text: "When an NRI sells property in India, the buyer must deduct TDS — usually far more than the tax you actually owe. The only way to get the excess back is to file an Indian income tax return.",
  },
  {
    title: "TDS cut on rent and FD interest",
    text: "Tenants and banks deduct TDS on your NRO income. If your real tax is lower, the difference is refunded only after you file an ITR.",
  },
  {
    title: "Money stuck in India",
    text: "Sending money abroad from an NRO account or a property sale needs Form 145 (old 15CA) and often Form 146 (old 15CB) before the bank will process it.",
  },
  {
    title: "Your US CPA needs Indian numbers",
    text: "India's tax year is April–March; the US year is January–December. Your US preparer needs Indian income, tax paid and account balances in their format and in dollars.",
  },
];

const steps = [
  { n: "1", title: "WhatsApp or book a call", text: "Tell us your country and what you need. We reply with the document list." },
  { n: "2", title: "Documents + 50% advance", text: "Send PDFs on WhatsApp or email — no visit to India needed. Once you agree to the fee, pay 50% to start." },
  { n: "3", title: "We prepare and check", text: "We work out the tax and show you the figures before anything is filed." },
  { n: "4", title: "Balance, then filed", text: "Pay the balance, then we file, e-verify with you, and follow up until the refund or certificate comes through." },
];

const tools = [
  { href: "/nri-property-tds-calculator", title: "NRI Property TDS Calculator", text: "See how much TDS the buyer will deduct on your sale." },
  { href: "/nri-residential-status-calculator", title: "Residential Status Checker", text: "Are you NRI, RNOR or resident for Indian tax this year?" },
  { href: "/nri-itr-filing-requirement-checker", title: "Do I Need to File an ITR?", text: "Check if you must file an Indian return this year." },
  { href: "/nri-lower-tds-certificate-checklist", title: "Lower TDS Certificate Checklist", text: "Documents needed for Form 128 before you sell." },
  { href: "/nri-fund-repatriation-guide", title: "Money Transfer Guide (Form 145/146)", text: "What you need to send money abroad from India." },
];

const faqs = [
  {
    q: "Can you handle everything while I am abroad?",
    a: "Yes. Documents are shared on WhatsApp or email, returns are filed online, and e-verification is done with an OTP or your net-banking. You do not need to visit India.",
  },
  {
    q: "How much does NRI ITR filing cost?",
    a: "₹5,000 for a standard NRI return (rent, interest, dividends). ₹10,000 if you sold property in India during the year. Form 128 lower TDS certificate is ₹18,000 and Form 145/146 is ₹3,000.",
  },
  {
    q: "The buyer deducted a lot of TDS on my property sale. Can I get it back?",
    a: "Usually yes. If the TDS deducted is more than your actual tax on the capital gain, the excess is refunded after you file your Indian income tax return for that year.",
  },
  {
    q: "Do you file my US tax return?",
    a: "No. Your US return and FBAR are filed by your US tax preparer (CPA or EA). We prepare the India side: your Indian income for the US calendar year in USD, Indian tax paid, and a list of Indian accounts — so your preparer has correct numbers.",
  },
  {
    q: "Do I need to report my Indian bank accounts in the US?",
    a: "If you are a US person and the combined value of your foreign accounts was over $10,000 at any time in the calendar year, an FBAR (FinCEN Form 114) is required. It is due April 15, with an automatic extension to October 15. Your US preparer files it; we can give them your Indian account details.",
  },
  {
    q: "Who issues Form 146 (old 15CB)?",
    a: "Form 146 must be certified by a Chartered Accountant. We handle it through our partner Chartered Accountant as part of the ₹3,000 service.",
  },
  {
    q: "When and how do I pay?",
    a: "Once you agree to the fee, you pay 50% in advance and we start. We show you the figures — for a US CPA report, a summary marked DRAFT — and you pay the balance before we file or send the final report. The consultation fee is paid before the call. You can pay by bank transfer (from India or abroad) or UPI, and you get a receipt for every payment.",
  },
];

export default function NriTaxServicesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "NRI Tax Services (India)",
      serviceType: "NRI income tax return, property sale TDS refund, lower TDS certificate, fund repatriation",
      url: PAGE_URL,
      provider: { "@id": "https://www.rajputlalitassociates.in/#organization" },
      areaServed: ["United States", "United Arab Emirates", "United Kingdom", "Canada", "Australia", "Saudi Arabia", "India"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NRI Tax Services",
        itemListElement: [...NRI_FEES, ...US_CPA_REPORT_FEES].map((f) => ({
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

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-r from-[#002b5c] to-[#06477f] text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f0b84b] font-bold uppercase tracking-widest text-sm">For NRIs · USA · UAE · UK · Canada</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                Your Indian Taxes, Handled From Abroad
              </h1>
              <p className="mt-6 text-lg text-blue-100 leading-8">
                Property sale TDS refunds, NRI income tax returns, lower TDS certificates and
                sending money abroad — done fully online by a tax practice in Ambala, Haryana.
                Clear fees upfront.
              </p>
              <ul className="mt-6 space-y-2 text-blue-100">
                <li>✓ No visit to India needed</li>
                <li>✓ Fixed starting fees, confirmed before we start</li>
                <li>✓ India income reports for your US CPA</li>
              </ul>
            </div>
            <NriWhatsAppPicker />
          </div>
        </section>

        <Breadcrumb current="NRI Tax Services" />

        {/* PROBLEMS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] text-center">
              Where NRIs Usually Get Stuck
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {problems.map((p) => (
                <div key={p.title} className="border border-gray-200 rounded-2xl p-6 bg-[#f7f9fc]">
                  <h3 className="text-xl font-bold text-[#002b5c]">{p.title}</h3>
                  <p className="mt-3 text-gray-700 leading-7">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDIA-SIDE SERVICES */}
        <FeeCards
          heading="NRI Services & Fees"
          intro="Starting fees for a standard case. We confirm the exact fee after seeing your documents — before any work starts."
          items={NRI_FEES}
        />

        {/* US SECTION */}
        <section id="us-nri" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-[#0066cc] font-bold uppercase tracking-widest text-sm">For NRIs in the USA</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002b5c] text-center">
              India Income Report for Your US CPA
            </h2>
            <div className="mt-8 space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                If you live in the US, your US tax return must include your Indian income — but
                India&apos;s tax year runs April to March, while the US year runs January to
                December. Your US preparer needs your Indian figures in their calendar year, in
                dollars, with the Indian tax already paid shown separately so they can consider a
                foreign tax credit.
              </p>
              <p>
                If the combined value of your foreign accounts crossed <strong>$10,000</strong> at
                any time in the year, an <strong>FBAR (FinCEN Form 114)</strong> is also due —
                April 15, with an automatic extension to October 15. Indian mutual funds can also
                get special treatment under US rules, so your preparer will want a clear list of
                what you hold.
              </p>
              <p>
                We prepare the India side of all of this in one clean report. <strong>We do not
                prepare or file US returns</strong> — your US CPA or Enrolled Agent does that, now
                with correct Indian numbers.
              </p>
            </div>
          </div>
        </section>

        <FeeCards items={US_CPA_REPORT_FEES} />

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
          </div>
        </section>

        {/* FREE TOOLS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] text-center">Free NRI Tax Tools</h2>
            <p className="mt-4 text-center text-gray-600">Check your situation yourself first — no sign-up.</p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-[#002b5c] text-lg">{t.title} →</h3>
                  <p className="mt-2 text-gray-600 leading-6">{t.text}</p>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-700">
              Guides:{" "}
              <Link href="/blog/nri-itr-filing-which-form-dtaa-relief" className="text-[#0066cc] font-semibold underline">
                NRI ITR &amp; DTAA relief
              </Link>{" "}
              ·{" "}
              <Link href="/blog/nri-sale-of-inherited-property-tax-tds-guide" className="text-[#0066cc] font-semibold underline">
                Selling inherited property
              </Link>{" "}
              ·{" "}
              <Link href="/blog/nre-nro-fcnr-bank-accounts-explained" className="text-[#0066cc] font-semibold underline">
                NRE vs NRO vs FCNR
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q} className="border rounded-xl p-6">
                  <h3 className="font-bold text-lg text-[#002b5c] mb-2">{f.q}</h3>
                  <p className="text-gray-700 leading-7">{f.a}</p>
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
