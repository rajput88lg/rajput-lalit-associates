import {
  Globe,
  Building2,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  Search,
  PenTool,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={34} />,
    title: "Business Website",
    desc: "Professional websites for businesses, shops and service providers.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Company Website",
    desc: "Corporate websites with modern design and responsive layout.",
  },
  {
    icon: <Globe size={34} />,
    title: "CA & Tax Consultant Website",
    desc: "Professional websites for CA firms, GST consultants and accountants.",
  },
  {
    icon: <Stethoscope size={34} />,
    title: "Doctor & Clinic Website",
    desc: "Healthcare websites with appointment and contact information.",
  },
  {
    icon: <GraduationCap size={34} />,
    title: "School & College Website",
    desc: "Modern education websites for schools, institutes and academies.",
  },
  {
    icon: <UtensilsCrossed size={34} />,
    title: "Restaurant Website",
    desc: "Beautiful websites with menu, gallery and online enquiry.",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "E-Commerce Website",
    desc: "Sell your products online with secure and responsive store.",
  },
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Portfolio Website",
    desc: "Personal portfolio websites for professionals and freelancers.",
  },
  {
    icon: <PenTool size={34} />,
    title: "Landing Page",
    desc: "High-converting landing pages for marketing campaigns.",
  },
  {
    icon: <Wrench size={34} />,
    title: "Website Maintenance",
    desc: "Regular updates, backups and technical support.",
  },
  {
    icon: <Search size={34} />,
    title: "SEO Optimization",
    desc: "Improve Google ranking with SEO friendly website structure.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Secure Website",
    desc: "SSL security, fast hosting and protection for your website.",
  },
];

export default function WebsiteServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#002b5c]">
            Our Website Development Services
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            We create fast, secure, SEO-friendly and mobile responsive websites
            for businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-[#d99a2b] mb-5">{service.icon}</div>

              <h3 className="text-xl font-bold text-[#002b5c]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}