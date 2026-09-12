import {
  FaUserTie,
  FaFileInvoice,
  FaHandshake,
  FaHeadset,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie size={28} />,
    title: "15+ Years Experience",
    desc: "Professional GST & Tax consultancy with practical business experience.",
  },
  {
    icon: <FaFileInvoice size={28} />,
    title: "100% Documentation Support",
    desc: "Complete assistance from document collection to GST certificate.",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Trusted by Businesses",
    desc: "Helping businesses across Haryana.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "Dedicated Support",
    desc: "Quick support via Call & WhatsApp.",
  },
  {
    icon: <FaClock size={28} />,
    title: "Fast Processing",
    desc: "Quick GST application filing.",
  },
    {
    icon: <FaShieldAlt size={28} />,
    title: "Professional Advice",
    desc: "Complete GST compliance guidance.",
  },
];

export default function WhyChooseGST() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-reveal
          className="text-4xl font-bold text-center text-[#002b5c]"
        >
          Why Choose Rajput Lalit & Associates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              data-reveal
              data-reveal-delay={(index % 3) + 1}
              className="group border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#d99a2b]/40 transition-all duration-300"
            >
              <div className="icon-pop text-[#d99a2b]">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-[#002b5c]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}