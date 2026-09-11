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

const data = servicePages.find((s) => s.slug === "company-registration")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/company-registration",
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://www.rajputlalitassociates.in/company-registration`,
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        name={data.schemaName}
        description={data.schemaDescription}
        url={`https://www.rajputlalitassociates.in/company-registration`}
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
