import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rajput Lalit & Associates",
    category: "GST & Tax Consultancy Website",
    image: "/portfolio/rajputlalit.webp",
    url: "https://www.rajputlalitassociates.in",
  },
  {
    title: "Your Business Could Be Here",
    category: "Business Website",
    image: "/portfolio/demo1.webp",
    url: "/contact",
  },
  {
    title: "Professional Company Website",
    category: "Corporate Website",
    image: "/portfolio/demo2.webp",
    url: "/contact",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-blue-100 text-[#002b5c] px-5 py-2 rounded-full font-semibold">
            Our Portfolio
          </span>

          <h2 className="text-5xl font-extrabold text-[#002b5c] mt-6">
            Recent Projects
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Explore some of our recent website development work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-[#d99a2b] font-semibold">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-[#002b5c] mt-2">
                  {project.title}
                </h3>

                <Link
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : "_self"}
                  className="inline-flex items-center gap-2 mt-6 font-bold text-[#002b5c] hover:text-[#d99a2b]"
                >
                  View Project
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}