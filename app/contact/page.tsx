import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Contact Us | Rajput Lalit & Associates",
  description:
    "Contact Rajput Lalit & Associates for GST, Income Tax, Accounting and Business Consultancy services across India.",
  openGraph: {
    title: "Contact Us | Rajput Lalit & Associates",
    description:
      "Contact Rajput Lalit & Associates for GST, Income Tax, Accounting and Business Consultancy services across India.",
    url: "https://www.rajputlalitassociates.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full flex-grow bg-white">
      
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Need professional assistance? Our experts are ready to help you with GST, Income Tax, Accounting, Company Registration and Business Compliance."
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb current="Contact Us" />

      {/* Main Contact Form & Info */}
      <Contact />
      
      {/* Call To Action Section */}
      <CallToAction />

    </main>
  );
}