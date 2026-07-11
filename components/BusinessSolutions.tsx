import Link from "next/link";
import {
  Globe,
  FileText,
  Calculator,
  Building2,
  Search,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <FileText size={38} />,
    title: "GST Services",
    desc: "GST Registration, GST Return Filing, GST Notices & Compliance.",
  },
  {
    icon: <Calculator size={38} />,
    title: "Accounting",
    desc: "Bookkeeping, Financial Statements, TDS & Accounting Solutions.",
  },
  {
    icon: <Building2 size={38} />,
    title: "Business Registration",
    desc: "MSME, Company Registration, PAN, TAN & Business Setup.",
  },
  {
    icon: <Globe size={38} />,
    title: "Website Development",
    desc: "Modern, SEO-Friendly & Mobile Responsive Business Websites.",
  },
  {
    icon: <Search size={38} />,
    title: "SEO & Google Business",
    desc: "Increase your online visibility with SEO & Google Business Profile.",
  },
  {
    icon: <Wrench size={38} />,
    title: "Website Maintenance",
    desc: "Regular Updates, Security, Backup & Technical Support.",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-100 text-[#002b5c] px-5 py-2 rounded-full font-semibold">
            Complete Business Solutions
          </span>

          <h2 className="text-5xl font-extrabold text-[#002b5c] mt-6">
            Everything Your Business Needs
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We help businesses with taxation, accounting, registrations,
            compliance and professional website development — all under one roof.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#002b5c] text-white flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#002b5c]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.desc}
              </p>

              {service.title === "Website Development" && (
                <Link
                  href="/website-development"
                  className="inline-flex items-center gap-2 mt-6 text-[#d99a2b] font-bold hover:text-[#002b5c]"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          ))}

        </div>

        <div className="mt-20 bg-[#002b5c] rounded-3xl p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Need a Professional Website?
          </h2>

          <p className="mt-5 text-lg text-gray-200 max-w-3xl mx-auto">
            Grow your business with a modern, fast, secure and SEO-friendly
            website. Contact us today for a professional consultation.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="tel:9354953603"
              className="bg-[#d99a2b] hover:bg-[#c88920] text-white px-8 py-4 rounded-xl font-bold transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919354953603"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#002b5c] transition"
            >
              💬 WhatsApp
            </a>

            <Link
              href="/website-development"
              className="bg-white text-[#002b5c] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Website Development
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}