import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseGST from "../components/WhyChooseGST";
import Founder from "../components/Founder";
import Stats from "../components/Stats";
import GoogleReviews from "@/components/GoogleReviews";
import BookAppointment from "@/components/BookAppointment";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseGST />
        <Founder />
        <Stats />
        <GoogleReviews />
        <BookAppointment />
        <Contact />
        <Map />
      </main>

      <Footer />

      <FloatingWhatsApp />
      <FloatingButtons />
    </>
  );
}