"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  ShieldCheck,
  Zap,
  MessageCircle,
  Globe,
  Headset,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Lightning Fast",
    description:
      "Fast loading websites optimized for speed and excellent user experience.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Responsive",
    description:
      "Your website will look perfect on mobile, tablet and desktop devices.",
  },
  {
    icon: <Search size={32} />,
    title: "SEO Optimized",
    description:
      "Built with SEO best practices to help improve your Google visibility.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Website",
    description:
      "SSL security, secure coding standards and reliable protection.",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "WhatsApp Integration",
    description:
      "Enable customers to contact your business instantly through WhatsApp.",
  },
  {
    icon: <Globe size={32} />,
    title: "Modern Design",
    description:
      "Premium UI with clean layouts that build trust and increase conversions.",
  },
  {
    icon: <Rocket size={32} />,
    title: "High Performance",
    description:
      "Optimized for performance, Core Web Vitals and smooth user experience.",
  },
  {
    icon: <Headset size={32} />,
    title: "Dedicated Support",
    description:
      "Reliable support, maintenance and future updates whenever required.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] font-semibold text-sm">
            Why Businesses Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            Premium Websites Designed for Business Growth
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We don't just create beautiful websites. We build fast,
            secure and conversion-focused websites that help businesses
            attract more customers and grow online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
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
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-[#d99a2b] flex items-center justify-center group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#002b5c]">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

              <div className="mt-6 w-12 h-1 rounded-full bg-[#d99a2b] group-hover:w-20 transition-all duration-300"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}