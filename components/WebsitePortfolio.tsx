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
        
        {/* HEADING SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#002b5c] tracking-tight">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-gray-600 font-medium leading-relaxed">
            We build modern, professional and SEO-friendly websites for businesses.
          </p>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {portfolio.map((item, index) => {
            const isExternal = item.link.startsWith("http");

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col"
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Globe size={30} />
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-bold text-[#002b5c] mt-6 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#d99a2b] font-bold text-sm tracking-wide uppercase mt-2">
                  {item.category}
                </p>
                <p className="mt-4 text-gray-600 leading-7 flex-grow">
                  {item.description}
                </p>

                {/* LINK */}
                <Link
                  href={item.link}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="mt-8 inline-flex items-center gap-2 text-[#002b5c] font-bold hover:text-[#d99a2b] transition-colors"
                >
                  View Project
                  <ExternalLink 
                    size={18} 
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}