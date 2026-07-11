import Link from "next/link";
import { Phone, MessageCircle, Globe, CheckCircle } from "lucide-react";
import WebsiteServices from "@/components/WebsiteServices";
import WebsitePortfolio from "@/components/WebsitePortfolio";
import WebsiteConsultation from "@/components/WebsiteConsultation";
import WebsiteFAQ from "@/components/WebsiteFAQ";
import WebsiteCTA from "@/components/WebsiteCTA";
import BusinessSolutions from "@/components/BusinessSolutions";

export const metadata = {
  title: "Website Development | Rajput Lalit & Associates",
  description:
    "Professional Website Design & Development Services for Businesses across India.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#002b5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Globe size={60} className="mx-auto mb-6 text-[#d99a2b]" />

          <h1 className="text-5xl font-bold">
            Professional Website Design & Development
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-200">
            We create modern, SEO-friendly, mobile responsive and fast websites
            for businesses, professionals, startups and organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:9354953603"
              className="bg-[#d99a2b] px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-[#c98a22]"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/919354953603"
              target="_blank"
              className="border border-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-white hover:text-[#002b5c]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* Intro */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#002b5c] text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {[
              "Business Websites",
              "SEO Friendly Design",
              "Fast Loading",
              "Mobile Responsive",
              "Google Search Ready",
              "WhatsApp Integration",
              "Contact Forms",
              "Website Maintenance"
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 p-5 rounded-xl border shadow-sm"
              >
                <CheckCircle className="text-green-600" />
                <span className="font-semibold">{item}</span>
              </div>

            ))}

          </div>

        </div>
      </section>
      <WebsiteServices />
      <WebsitePortfolio />
      <WebsiteConsultation />
      <WebsiteFAQ />
      <WebsiteCTA />

    </main>
  );
}