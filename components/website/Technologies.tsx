"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Database,
  ShieldCheck,
  Search,
  Smartphone,
  CreditCard,
  Cloud,
  Code2,
} from "lucide-react";

const technologies = [
  {
    icon: <Code2 size={34} />,
    title: "Next.js",
    desc: "Modern React framework for lightning-fast websites.",
  },
  {
    icon: <Globe size={34} />,
    title: "Responsive Design",
    desc: "Perfect experience on Desktop, Tablet and Mobile devices.",
  },
  {
    icon: <Search size={34} />,
    title: "SEO Optimized",
    desc: "Built to rank better on Google and attract more visitors.",
  },
  {
    icon: <Database size={34} />,
    title: "Database",
    desc: "Secure database integration for dynamic websites.",
  },
  {
    icon: <CreditCard size={34} />,
    title: "Online Payments",
    desc: "Razorpay and payment gateway integration.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "SSL Security",
    desc: "HTTPS encryption and secure website protection.",
  },
  {
    icon: <Cloud size={34} />,
    title: "Cloud Hosting",
    desc: "Fast deployment with Vercel and reliable hosting.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Performance",
    desc: "Fast loading websites optimized for Core Web Vitals.",
  },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] text-sm font-semibold">
            Technologies We Use
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            Modern Technologies for High-Performance Websites
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We use modern development tools and best practices to create
            fast, secure, SEO-friendly and scalable websites.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {technologies.map((tech, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group bg-[#f8fafc] rounded-3xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-[#d99a2b] flex items-center justify-center group-hover:scale-110 transition duration-300">
                {tech.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#002b5c]">
                {tech.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {tech.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}