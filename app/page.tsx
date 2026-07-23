import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseGST from "@/components/WhyChooseGST";
import Founder from "@/components/Founder";
import Stats from "@/components/Stats";
import GoogleReviews from "@/components/GoogleReviews";
import LatestBlogs from "@/components/LatestBlogs";
import BookAppointment from "@/components/BookAppointment";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingButtons from "@/components/FloatingButtons";
import BusinessSolutions from "@/components/BusinessSolutions";
import Technologies from "@/components/Technologies";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <BusinessSolutions />

        <About />

        <Services />

        <Technologies />

        <WhyChooseGST />

        <Founder />

        <Stats />

        <LatestBlogs />
      
        <BookAppointment />

        <PortfolioGallery />

        <GoogleReviews />

        <Contact />

        <Map />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <FloatingButtons />
    </>
  );
}