"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const trustPoints = [
  "SEO Optimized",
  "Mobile Responsive",
  "Fast Loading",
  "Secure Website",
  "Google Ready",
];

export default function WebsiteHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001a36] via-[#002b5c] to-[#0a4c8f] text-white">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#d99a2b]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-sm font-medium">
                Trusted Website Development Company
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight">
              We Build

              <span className="block text-[#d99a2b]">
                Premium Websites
              </span>

              That Grow Your Business
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-blue-100 leading-8 max-w-xl">
              We create modern, fast, SEO-friendly and mobile responsive
              websites that help businesses build trust, attract customers and
              grow online across India.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-[#d99a2b] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#d99a2b]"
                  />

                  <span className="text-blue-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            {/* Premium Mockup / Laptop Image yahan add kar sakte ho */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}