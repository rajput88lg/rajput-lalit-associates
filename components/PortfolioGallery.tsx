import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Real work only. Screenshots are of this website, which was designed and
 * built in-house (captured 25 Sept 2026 into public/portfolio/own-*.webp).
 * The earlier cards pointed to image files that did not exist (broken
 * images on the homepage) and to demo mockups — removed.
 */
const projects = [
  {
    title: "Tax Consultancy Website",
    category: "Business website · Next.js",
    text: "This website — fast, mobile-first, with schema markup, blog and online booking.",
    image: "/portfolio/own-home.webp",
    url: "/",
  },
  {
    title: "Free Calculators & Tools",
    category: "Interactive web tools",
    text: "Income tax, GST, EMI, SIP and NRI calculators that bring visitors in every day.",
    image: "/portfolio/own-tools.webp",
    url: "/tools",
  },
  {
    title: "NRI Services Landing Page",
    category: "Lead-generation page",
    text: "Service page with country + service picker that opens a ready WhatsApp message.",
    image: "/portfolio/own-nri.webp",
    url: "/nri-tax-services",
  },
];

export default function PortfolioGallery({
  heading = "Built In-House — See It Live",
  intro = "Everything below is real and working on this site. We build the same way for our clients.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-blue-100 text-[#002b5c] px-5 py-2 rounded-full font-semibold">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002b5c] mt-6">{heading}</h2>
          <p className="mt-5 text-lg text-gray-600">{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.url}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              <div className="relative aspect-[960/573] border-b border-gray-100 bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} — screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#9c680f] font-semibold text-sm">{project.category}</p>
                <h3 className="text-xl font-bold text-[#002b5c] mt-1.5">{project.title}</h3>
                <p className="mt-2 text-gray-600 leading-7 flex-1">{project.text}</p>
                <span className="inline-flex items-center gap-2 mt-5 font-bold text-[#002b5c] group-hover:text-[#9c680f]">
                  See it live
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/website-development"
            className="inline-flex items-center gap-2 rounded-xl bg-[#002b5c] hover:bg-[#06477f] text-white px-7 py-3.5 font-bold transition"
          >
            Want a website like this? See plans
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
