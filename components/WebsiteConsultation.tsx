import { Phone, MessageCircle, BadgeCheck, ClipboardCheck } from "lucide-react";

export default function WebsiteConsultation() {
  return (
    <section className="py-20 bg-[#002b5c] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Professional Website Consultation
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Every successful website starts with proper planning. We first
            understand your business, discuss your requirements, and then
            recommend the best solution for your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <div className="bg-white text-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#002b5c] mb-6">
              Consultation Includes
            </h3>

            <div className="space-y-4">

              {[
                "Business Requirement Analysis",
                "Website Planning",
                "Technology Recommendation",
                "Feature Discussion",
                "SEO Guidance",
                "Project Timeline",
                "Custom Quotation",
                "Post Launch Support Plan",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <BadgeCheck className="text-green-600" />
                  <span>{item}</span>
                </div>
              ))}

            </div>
          </div>

          <div className="bg-[#d99a2b] rounded-2xl p-8 text-center">

            <ClipboardCheck size={60} className="mx-auto mb-5" />

            <h3 className="text-3xl font-bold">
              Consultation by Appointment
            </h3>

            <p className="mt-5 leading-8">
              Consultation fee is applicable. If you proceed with the website
              development project, the consultation fee may be adjusted against
              the final project cost at our discretion.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="tel:9354953603"
                className="bg-white text-[#002b5c] font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919354953603"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-[#002b5c] transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}