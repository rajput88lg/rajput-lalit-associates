import About from "@/components/About";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "About Us | Rajput Lalit & Associates",
  description:
    "Learn more about Rajput Lalit & Associates and our GST, Income Tax, Accounting, and Business Consultancy services.",
  openGraph: {
    title: "About Us | Rajput Lalit & Associates",
    description:
      "Learn more about Rajput Lalit & Associates and our GST, Income Tax, Accounting, and Business Consultancy services.",
    url: "https://www.rajputlalitassociates.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full flex-grow bg-white">
      
      {/* Hero Section */}
      <PageHero
        title="About Rajput Lalit & Associates"
        subtitle="Trusted GST, Income Tax, Accounting and Business Consultancy firm serving businesses across India."
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb current="About Us" />

      {/* Main About Content */}
      <About />
      
      {/* Call To Action Section */}
      <CallToAction />

    </main>
  );
}