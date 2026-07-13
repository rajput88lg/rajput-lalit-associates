import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingButtons from "@/components/FloatingButtons";
import Services from "@/components/Services";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Our Services | Rajput Lalit & Associates",
  description:
    "Professional GST, Income Tax, Accounting, Company Registration and Business Consultancy Services across India.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Our Professional Services"
        subtitle="Complete GST, Income Tax, Accounting, Company Registration and Business Compliance solutions for businesses across India."
      />

      <Breadcrumb current="Our Services" />

      <Services />
      <CallToAction />

      <Footer />
      <FloatingWhatsApp />
      <FloatingButtons />
    </>
  );
}