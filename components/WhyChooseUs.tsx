import {
  FaAward,
  FaUsers,
  FaFileAlt,
  FaHeadset,
  FaTags,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaAward,
    number: "15+",
    title: "Years of Experience",
    description:
      "Providing professional GST, Income Tax, Accounting and Compliance services with dedication.",
  },
  {
    icon: FaUsers,
    number: "200+",
    title: "Happy Clients",
    description:
      "Trusted by individuals, startups and businesses across various industries.",
  },
  {
    icon: FaFileAlt,
    number: "2500+",
    title: "Returns Filed",
    description:
      "GST and Income Tax Returns filed with accuracy and timely compliance.",
  },
  {
    icon: FaHeadset,
    number: "Fast",
    title: "Quick Response",
    description:
      "Professional support through Phone, WhatsApp and Email whenever assistance is required.",
  },
  {
    icon: FaTags,
    number: "Clear",
    title: "Transparent Pricing",
    description:
      "Professional services with clear pricing and no hidden charges.",
  },
  {
    icon: FaHandshake,
    number: "Trusted",
    title: "Business Partner",
    description:
      "Helping businesses manage compliance requirements and grow with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">

      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c] leading-tight">
            Experience You Can Trust
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Professional guidance, practical solutions and dependable
            support for your taxation, accounting and business compliance
            requirements.
          </p>

        </div>


        {/* MAIN CONTENT */}

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">

          {/* LEFT NAVY CARD */}

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white p-8 md:p-10 shadow-2xl flex flex-col justify-between">

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[40px] border-white/5" />

            <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full bg-[#d99a2b]/10" />


            <div className="relative">

              <p className="text-[#f0b84b] uppercase tracking-[0.2em] font-bold text-sm">
                Our Commitment
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Professional Service.
                <span className="block text-[#f0b84b] mt-2">
                  Personal Attention.
                </span>
              </h3>

              <p className="mt-6 text-blue-100 leading-8">
                Every client has different requirements. We focus on
                understanding the matter, explaining the available options
                clearly and providing practical professional assistance.
              </p>


              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                  <span>
                    Clear and professional communication
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                  <span>
                    Focus on timely compliance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                  <span>
                    Long-term client relationships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                  <span>
                    Practical business-focused solutions
                  </span>
                </div>

              </div>

            </div>


            <div className="relative mt-10">

              <a
                href="#appointment"
                className="inline-flex items-center justify-center bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-6 py-3.5 rounded-lg font-bold transition shadow-lg"
              >
                Book Professional Consultation
              </a>

            </div>

          </div>


          {/* RIGHT FEATURE CARDS */}

          <div className="grid sm:grid-cols-2 gap-5">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">

                      <Icon className="text-xl" />

                    </div>


                    <span className="text-2xl font-extrabold text-[#d99a2b]">
                      {feature.number}
                    </span>

                  </div>


                  <h3 className="mt-5 text-xl font-extrabold text-[#002b5c]">
                    {feature.title}
                  </h3>


                  <p className="mt-3 text-gray-600 leading-7 text-sm">
                    {feature.description}
                  </p>


                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#d99a2b] to-[#f0b84b] group-hover:w-full transition-all duration-500" />

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}