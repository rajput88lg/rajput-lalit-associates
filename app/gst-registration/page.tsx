import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingButtons from "@/components/FloatingButtons";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import BookAppointment from "@/components/BookAppointment";

import ServiceHero from "@/components/ServiceHero";
import GSTRegistrationContent from "@/components/GSTRegistrationContent";
import GSTRegistrationProcess from "@/components/GSTRegistrationProcess";
import GSTRegistrationFees from "@/components/GSTRegistrationFees";
import GSTEligibility from "@/components/GSTEligibility";
import WhyChooseGST from "@/components/WhyChooseGST";
import GSTFAQ from "@/components/GSTFAQ";
import GSTRegistrationTypes from "@/components/GSTRegistrationTypes";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title:
    "Online GST Registration Services in India | Rajput Lalit & Associates",

  description:
    "Get Online GST Registration anywhere in India for Proprietorship, Partnership, LLP, Private Limited Company, Trust, Society and other business entities with complete documentation support from Rajput Lalit & Associates.",

  keywords: [
    "GST Registration",
    "Online GST Registration",
    "GST Registration India",
    "GST Consultant India",
    "GST Registration Online",
    "GST Registration for Proprietorship",
    "GST Registration for Partnership",
    "GST Registration for LLP",
    "GST Registration for Private Limited Company",
    "GST Registration Services",
    "GST Registration Consultant",
    "GST Number Apply Online",
  ],

  alternates: {
    canonical: "/gst-registration",
  },

  openGraph: {
    title:
      "Online GST Registration Services in India | Rajput Lalit & Associates",
    description:
      "Professional GST Registration Services across India with complete documentation support.",
    url: "https://www.rajputlalitassociates.in/gst-registration",
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
};

export default function GSTRegistrationPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          title="Online GST Registration Services in India"
          subtitle="Get your GST Registration completed online anywhere in India with complete documentation support, expert guidance and fast processing."
        />

        <GSTRegistrationContent />

        <GSTRegistrationProcess />

        <GSTRegistrationFees />

        <GSTEligibility />

        <GSTRegistrationTypes />

        <WhyChooseGST />

        <BookAppointment />

        <GoogleReviews />

        <GSTFAQ />

        <Contact />

        
        <Map />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <FloatingButtons />
    </>
  );
}