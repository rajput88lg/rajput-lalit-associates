import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingButtons from "@/components/FloatingButtons";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";


export const metadata = {
  title: "About Us | Rajput Lalit & Associates",
  description:
    "Learn more about Rajput Lalit & Associates and our GST, Income Tax, Accounting, and Business Consultancy services.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="About Rajput Lalit & Associates"
        subtitle="Trusted GST, Income Tax, Accounting and Business Consultancy firm serving businesses across India."
      />

      <main>
        <Breadcrumb current="About Us" />
        <About />
      </main>
      <CallToAction />

      <Footer />
      <FloatingWhatsApp />
      <FloatingButtons />
    </>
  );
}