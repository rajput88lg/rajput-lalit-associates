import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import BookAppointment from "@/components/BookAppointment";
import ServiceHero from "@/components/ServiceHero";
import ServiceContentBlock from "@/components/ServiceContentBlock";
import ServiceFAQ from "@/components/ServiceFAQ";
import GoogleReviews from "@/components/GoogleReviews";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceSchema from "@/components/components/ServiceSchema";
import { servicePages } from "@/data/servicePages";

const SLUG = "msme-registration";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const data = servicePages.find((s) => s.slug === SLUG)!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: `/${SLUG}`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSME (Udyam) Registration Services — Rajput Lalit & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.metaTitle,
    description: data.metaDescription,
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        name={data.schemaName}
        description={data.schemaDescription}
        url={PAGE_URL}
      />

      <Navbar />

      <main>
        <ServiceHero title={data.heroTitle} subtitle={data.heroSubtitle} />

        <Breadcrumb current={data.heroTitle} />

        <ServiceContentBlock {...data.content} />

        <BookAppointment />

        <GoogleReviews />

        <ServiceFAQ faqs={data.faqs} />

        <Contact />

        <Map />
      </main>

      <Footer />
    </>
  );
}
