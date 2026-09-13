import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import WebsiteHero from "@/components/website/WebsiteHero";
import WebsiteStats from "@/components/website/WebsiteStats";
import WhyChooseUs from "@/components/website/WhyChooseUs";

import WebsiteServices from "@/components/WebsiteServices";
import WebsiteConsultation from "@/components/WebsiteConsultation";
import WebsiteFAQ, { faqs } from "@/components/WebsiteFAQ";
import WebsiteCTA from "@/components/WebsiteCTA";
import WebsiteProcess from "@/components/website/WebsiteProcess";
import Technologies from "@/components/website/Technologies";
import Pricing from "@/components/website/Pricing";

// NOTE (13 Sept 2026): Testimonials aur WebsitePortfolio components yahan se
// hata diye gaye hain — dono mein fabricated/placeholder content tha (fake
// client names, aur portfolio "projects" jo asal mein AI-generated mockups
// the fictional business names ke saath, koi real delivered project nahi).
// Jab Lalit real client testimonials aur real project screenshots de dein,
// tab in components ko genuine content ke saath wapas add karna hai.
// Component files delete nahi kiye gaye hain, bas is page se hata diye hain.

const SLUG = "website-development";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "Website Development Company in Ambala & Across India | Rajput Lalit & Associates";
const DESCRIPTION =
  "Professional website design and development for businesses, CA/tax firms, clinics, schools and e-commerce — fast, mobile-responsive, SEO-friendly websites built in Ambala, Haryana, serving clients across India.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "website development Ambala",
    "website designer Ambala Haryana",
    "business website development India",
    "affordable website design company",
    "SEO friendly website development",
    "CA firm website design",
    "e-commerce website development India",
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
        alt: "Website Development Services — Rajput Lalit & Associates",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Development",
  name: "Website Development Services",
  url: PAGE_URL,
  description: DESCRIPTION,
  areaServed: "IN",
  provider: {
    "@type": "ProfessionalService",
    name: "Rajput Lalit & Associates",
    url: "https://www.rajputlalitassociates.in",
    telephone: "+91-93549-53603",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1805, Sector-9",
      addressLocality: "Ambala City",
      addressRegion: "Haryana",
      postalCode: "134003",
      addressCountry: "IN",
    },
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Premium Hero */}
      <WebsiteHero />

      {/* Statistics */}
      <WebsiteStats />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <WebsiteServices />

      <WebsiteProcess />

      <Technologies />

      <Pricing />

      {/* REAL PROOF — replaces the earlier fabricated testimonials/portfolio
          section with something 100% genuine and verifiable: the very site
          the visitor is browsing right now, including its free NRI tax
          tools, was designed and built in-house. */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] font-semibold text-sm">
            See It For Yourself
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#002b5c]">
            The Website You're On Right Now Is Our Work
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            No mockups, no stock templates — rajputlalitassociates.in was
            designed and built in-house, including the free NRI tax
            calculators and checklists you'll find under Tools. It's fast,
            mobile-responsive, and built with the same SEO and schema
            practices we bring to every client project.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-2.5">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#d99a2b]" />
              <span className="text-sm text-gray-700">Built on Next.js — fast by design</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-2.5">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#d99a2b]" />
              <span className="text-sm text-gray-700">Schema markup on every page</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-2.5">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#d99a2b]" />
              <span className="text-sm text-gray-700">Free interactive tools, not just static pages</span>
            </div>
          </div>

          <Link
            href="/tools"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#002b5c] hover:bg-[#06477f] text-white px-7 py-3.5 font-bold transition-all duration-300"
          >
            See the Free Tools We Built
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Free Consultation */}
      <WebsiteConsultation />

      {/* FAQ */}
      <WebsiteFAQ />

      {/* Final CTA */}
      <WebsiteCTA />
    </main>
  );
}
