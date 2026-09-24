import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import FeeCards from "@/components/FeeCards";
import { ITR_FEES, GST_REGISTRATION_FEES, QUOTE_SERVICES } from "@/lib/fees";
import { NRI_FEES } from "@/lib/nriServices";

const PAGE_URL = "https://www.rajputlalitassociates.in/fees";
const TITLE = "Our Fees — ITR from ₹1,500, GST Registration from ₹2,000";
const DESCRIPTION =
  "Transparent starting fees at Rajput Lalit & Associates, Ambala: ITR filing ₹1,500 (salaried), ₹2,500 (business), ₹5,000 (share market); GST registration from ₹2,000. Exact quote before we start.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/fees" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does ITR filing cost at Rajput Lalit & Associates?",
    a: "₹1,500 for salaried or personal income, ₹2,500 for business or professional income, and ₹5,000 if you have share market, mutual fund, F&O or property capital gains.",
  },
  {
    q: "What does GST registration cost?",
    a: "Our professional fee is ₹2,000 for a proprietorship, ₹5,000 for a partnership firm and ₹10,000 for a private limited company. The government charges nothing for GST registration.",
  },
  {
    q: "Why can the final fee be different from the starting fee?",
    a: "Starting fees cover a standard case. If several years are pending, a notice is involved or there are many transactions, we tell you the exact fee before starting — never after the work is done.",
  },
  {
    q: "Do you work with clients outside Ambala?",
    a: "Yes. Documents can be shared on WhatsApp or email and everything is filed online, so we work with clients across India and with NRIs.",
  },
];

function serviceOffer(name: string, price: string) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: Number(price.replace(/[^\d]/g, "")),
      priceCurrency: "INR",
    },
  };
}

export default function FeesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Rajput Lalit & Associates — Fees",
      url: PAGE_URL,
      itemListElement: [...ITR_FEES, ...GST_REGISTRATION_FEES].map((f) =>
        serviceOffer(f.service, f.price)
      ),
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

  const quoteText = encodeURIComponent("Namaste, mujhe ek service ke liye fees ka quote chahiye.");

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <PageHero
          title="Our Fees"
          subtitle="Clear starting fees, so you know the cost before you call. For anything more complex, we give you the exact fee before we start — no surprises later."
        />

        <Breadcrumb current="Fees" />

        <FeeCards
          heading="Income Tax Return (ITR) Filing"
          intro="Pick the one that matches your income. Not sure which? WhatsApp us your situation and we'll tell you."
          items={ITR_FEES}
        />

        <FeeCards
          heading="GST Registration"
          intro="The government fee for GST registration is ₹0. This is our professional fee for the complete process."
          items={GST_REGISTRATION_FEES}
        />

        <FeeCards
          heading="NRI Tax Services"
          intro="For NRIs in the USA, UAE, UK, Canada and elsewhere — handled fully online."
          items={NRI_FEES.map((f) => ({ ...f, href: "/nri-tax-services" }))}
        />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#002b5c] text-center">
              Other Services — Quote on Request
            </h2>
            <p className="mt-4 text-center text-gray-600 leading-7">
              These depend a lot on the size of your business, so we quote after a quick
              look at your case. The first consultation is free.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {QUOTE_SERVICES.map((s) => (
                <li
                  key={s}
                  className="border border-gray-200 rounded-xl px-5 py-4 bg-[#f7f9fc] text-[#002b5c] font-semibold"
                >
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

            <h2 className="mt-16 text-2xl md:text-3xl font-bold text-[#002b5c] mb-6">
              Frequently Asked Questions
            </h2>
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
