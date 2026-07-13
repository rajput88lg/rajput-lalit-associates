import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingButtons from "@/components/FloatingButtons";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Contact Us | Rajput Lalit & Associates",
  description:
    "Contact Rajput Lalit & Associates for GST, Income Tax, Accounting and Business Consultancy services across India.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Contact Us"
        subtitle="Need professional assistance? Our experts are ready to help you with GST, Income Tax, Accounting, Company Registration and Business Compliance."
      />

      <Breadcrumb current="Contact Us" />

      <Contact />
      <CallToAction />

      <Footer />
      <FloatingWhatsApp />
      <FloatingButtons />
    </>
  );
}