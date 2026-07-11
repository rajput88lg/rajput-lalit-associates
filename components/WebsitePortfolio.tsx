import { Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

const portfolio = [
  {
    title: "Rajput Lalit & Associates",
    category: "GST & Tax Consultant Website",
    description:
      "A professional business website developed for GST, Income Tax and Accounting services with SEO optimization and online appointment features.",
    link: "https://www.rajputlalitassociates.in",
  },
  {
    title: "Your Business Could Be Here",
    category: "Business Website",
    description:
      "This space could showcase your business website. Contact us to build your online presence.",
    link: "/contact",
  },
  {
    title: "Custom Website",
    category: "Corporate Website",
    description:
      "Professional responsive websites designed according to your business requirements.",
    link: "/contact",
  },
];

export default function WebsitePortfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#002b5c]">
            Our Portfolio
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We build modern, professional and SEO-friendly websites for businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition p-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#002b5c] text-white flex items-center justify-center">
                <Globe size={30} />
              </div>

              <h3 className="text-2xl font-bold text-[#002b5c] mt-6">
                {item.title}
              </h3>

              <p className="text-[#d99a2b] font-semibold mt-2">
                {item.category}
              </p>

              <p className="mt-5 text-gray-600 leading-7">
                {item.description}
              </p>

              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                className="mt-8 inline-flex items-center gap-2 text-[#002b5c] font-bold hover:text-[#d99a2b]"
              >
                View Project
                <ExternalLink size={18} />
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}