import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Founder from "../components/Founder";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FloatingButtons from "../components/FloatingButtons";
import GoogleReviews from "@/components/GoogleReviews";
import BookAppointment from "@/components/BookAppointment";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Founder />
      <Stats />
      <Contact />
      <Map />
      <Footer />
      <FloatingWhatsApp />
      <FloatingButtons />
      <GoogleReviews />
      <BookAppointment />
    </>
  );
}