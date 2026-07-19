"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "ABC Traders",
    review:
      "Rajput Lalit & Associates created a professional website for our business. The design is modern, fast, and SEO-friendly. Highly recommended.",
  },
  {
    name: "Pooja Verma",
    company: "Verma Boutique",
    review:
      "Amazing experience! The website was delivered on time with excellent support. Our online inquiries have increased significantly.",
  },
  {
    name: "Amit Kumar",
    company: "AK Enterprises",
    review:
      "Professional service with excellent communication. The website looks premium and works perfectly on mobile and desktop.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
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
            Client Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We are proud to deliver high-quality websites that help businesses
            grow online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
            >
              <Quote className="text-[#d99a2b]" size={40} />

              <div className="flex gap-1 mt-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#d99a2b] text-[#d99a2b]"
                  />
                ))}
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#002b5c]">
                  {item.name}
                </h4>

                <p className="text-gray-500">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}