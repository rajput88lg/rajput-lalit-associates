"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rajput Lalit & Associates",
    category: "CA & Tax Consultant Website",
    image: "/portfolio/project1.png",
  },
  {
    title: "Business Landing Page",
    category: "Corporate Website",
    image: "/portfolio/project2.png",
  },
  {
    title: "E-Commerce Store",
    category: "Online Shopping Website",
    image: "/portfolio/project3.png",
  },
  {
    title: "Hospital Website",
    category: "Healthcare Solution",
    image: "/portfolio/project4.png",
  },
  {
    title: "School Management",
    category: "Education Website",
    image: "/portfolio/project5.png",
  },
  {
    title: "Restaurant Website",
    category: "Food & Cafe",
    image: "/portfolio/project6.png",
  },
];

export default function WebsitePortfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] font-semibold text-sm">
            Our Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            Some of Our Recent Website Projects
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We design premium, responsive and SEO-friendly websites for
            businesses across different industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-7">
                <p className="text-sm text-[#d99a2b] font-semibold">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#002b5c]">
                  {project.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 text-[#002b5c] font-semibold hover:text-[#d99a2b] transition">
                  View Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}