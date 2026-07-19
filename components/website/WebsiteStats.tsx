"use client";

import { motion } from "framer-motion";
import {
  Users,
  BriefcaseBusiness,
  Award,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Award size={34} />,
    number: 15,
    suffix: "+",
    label: "Years Experience",
    desc: "Professional experience in taxation & business services.",
  },
  {
    icon: <Users size={34} />,
    number: 200,
    suffix: "+",
    label: "Happy Clients",
    desc: "Businesses across India trust our professional services.",
  },
  {
    icon: <BriefcaseBusiness size={34} />,
    number: 6000,
    suffix: "+",
    label: "Projects Delivered",
    desc: "GST, Income Tax and Website Development projects completed.",
  },
  {
    icon: <ShieldCheck size={34} />,
    number: 100,
    suffix: "%",
    label: "Client Commitment",
    desc: "Dedicated support with complete transparency.",
  },
];

export default function WebsiteStats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] font-semibold text-sm">
            Trusted By Businesses Across India
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            Numbers That Reflect Our Commitment
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-8">
            We focus on quality, trust and long-term business relationships.
            Every project is delivered with professionalism and attention to
            detail.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 text-center"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-[#d99a2b] flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <div className="mt-6 text-5xl font-extrabold text-[#002b5c]">
  {item.number}
  {item.suffix}
</div>

              <h3 className="mt-3 text-xl font-bold text-[#002b5c]">
                {item.label}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}