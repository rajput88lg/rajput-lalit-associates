import type { Metadata } from "next";

import WebsiteHero from "@/components/website/WebsiteHero";
import WebsiteStats from "@/components/website/WebsiteStats";
import WhyChooseUs from "@/components/website/WhyChooseUs";

import WebsiteServices from "@/components/WebsiteServices";
import WebsiteConsultation from "@/components/WebsiteConsultation";
import WebsiteFAQ from "@/components/WebsiteFAQ";
import { faqs } from "@/lib/websiteFaqs";
import WebsiteCTA from "@/components/WebsiteCTA";
import WebsiteProcess from "@/components/website/WebsiteProcess";
import Technologies from "@/components/website/Technologies";
import Pricing from "@/components/website/Pricing";
import QuickWebsiteJobs from "@/components/website/QuickWebsiteJobs";
import PortfolioGallery from "@/components/PortfolioGallery";

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

      <QuickWebsiteJobs />

      <Pricing />

      {/* REAL PROOF — real screenshots of this site (built in-house). */}
      <PortfolioGallery
        heading="The Website You're On Right Now Is Our Work"
        intro="No mockups, no stock templates. This site — its blog, booking and free calculators — was designed and built in-house on Next.js, with schema markup on every page."
      />

      {/* Free Consultation */}
      <WebsiteConsultation />

      {/* FAQ */}
      <WebsiteFAQ />

      {/* Final CTA */}
      <WebsiteCTA />
    </main>
  );
}
