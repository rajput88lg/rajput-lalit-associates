import WebsiteHero from "@/components/website/WebsiteHero";
import WebsiteStats from "@/components/website/WebsiteStats";
import WhyChooseUs from "@/components/website/WhyChooseUs";

import WebsiteServices from "@/components/WebsiteServices";
import WebsiteConsultation from "@/components/WebsiteConsultation";
import WebsiteFAQ from "@/components/WebsiteFAQ";
import WebsiteCTA from "@/components/WebsiteCTA";
import WebsiteProcess from "@/components/website/WebsiteProcess";
import Technologies from "@/components/website/Technologies";
import Pricing from "@/components/website/Pricing";
import Testimonials from "@/components/website/Testimonials";
import WebsitePortfolio from "@/components/website/WebsitePortfolio";

export const metadata = {
  title: "Website Development | Rajput Lalit & Associates",
  description:
    "Professional Website Design & Development Services for Businesses across India.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* Premium Hero */}
      <WebsiteHero />

      {/* Statistics */}
      <WebsiteStats />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <WebsiteServices />

      <WebsiteProcess />

      <Technologies />

      <Pricing />

      <Testimonials />

      
      {/* Portfolio */}
      <WebsitePortfolio />

      {/* Free Consultation */}
      <WebsiteConsultation />

      {/* FAQ */}
      <WebsiteFAQ />

      {/* Final CTA */}
      <WebsiteCTA />

    </main>
  );
}