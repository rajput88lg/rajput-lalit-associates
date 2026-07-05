import {
  FaFileInvoiceDollar,
  FaChartPie,
  FaCalculator,
  FaBuilding,
  FaBriefcase,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaFileInvoiceDollar,
    title: "GST Services",
    description:
      "Complete GST compliance and professional consultancy support for businesses.",
    items: [
      "GST Registration",
      "GST Return Filing",
      "GST Notice Reply",
      "GST Consultancy",
    ],
  },
  {
    icon: FaChartPie,
    title: "Income Tax",
    description:
      "Professional income tax filing, planning and notice assistance services.",
    items: [
      "ITR Filing",
      "Tax Planning",
      "Income Tax Notice Reply",
      "Tax Consultancy",
    ],
  },
  {
    icon: FaCalculator,
    title: "Accounting & TDS",
    description:
      "Reliable accounting and financial reporting solutions for your business.",
    items: [
      "Bookkeeping",
      "Accounting",
      "TDS Return",
      "Payroll",
      "Financial Statements",
    ],
  },
  {
    icon: FaBuilding,
    title: "Business Registration",
    description:
      "Professional assistance for starting and registering your business.",
    items: [
      "Company Registration",
      "LLP Registration",
      "Partnership Firm Registration",
      "MSME Registration",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Professional Services",
    description:
      "Additional registration and compliance services for individuals and businesses.",
    items: [
      "LEI Registration",
      "IEC Registration",
      "Trademark Registration",
      "Digital Signature (DSC)",
      "PAN / TAN Registration",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24"
    >
      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 right-0 w-80 h-80 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Complete Business Solutions
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Professional Tax, Accounting, Registration and Business
            Compliance services designed for individuals, startups
            and growing businesses.
          </p>

        </div>


        {/* SERVICE CARDS */}

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                  index === 4
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >

                {/* TOP GOLD LINE */}

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d99a2b] to-[#f0b84b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />


                {/* ICON */}

                <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">

                  <Icon className="text-3xl" />

                </div>


                {/* TITLE */}

                <h3 className="mt-6 text-2xl font-extrabold text-[#002b5c]">
                  {service.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="mt-3 text-gray-600 leading-7">
                  {service.description}
                </p>


                {/* SERVICE LIST */}

                <div className="mt-6 space-y-3">

                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-1 w-5 h-5 rounded-full bg-[#d99a2b]/15 text-[#d99a2b] flex items-center justify-center flex-shrink-0">

                        <FaCheck className="text-[10px]" />

                      </div>

                      <span className="text-gray-700 font-medium">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>


                {/* CONTACT LINK */}

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-[#002b5c] font-bold group-hover:text-[#d99a2b] transition"
                >
                  Get Professional Help

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            );
          })}


          {/* CTA CARD */}

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#002b5c] to-[#06477f] p-8 text-white shadow-xl flex flex-col justify-center">

            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />

            <div className="relative">

              <p className="text-[#f0b84b] font-bold uppercase tracking-wider text-sm">
                Need Assistance?
              </p>

              <h3 className="mt-3 text-3xl font-extrabold leading-tight">
                Not Sure Which Service You Need?
              </h3>

              <p className="mt-4 text-blue-100 leading-7">
                Discuss your tax, accounting or compliance requirements
                with us and get professional guidance.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">

                <a
                  href="#appointment"
                  className="inline-flex justify-center items-center bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-5 py-3 rounded-lg font-bold transition"
                >
                  Book Appointment
                </a>

                <a
                  href="tel:+919354953603"
                  className="inline-flex justify-center items-center border border-white/40 hover:bg-white hover:text-[#002b5c] px-5 py-3 rounded-lg font-bold transition"
                >
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}