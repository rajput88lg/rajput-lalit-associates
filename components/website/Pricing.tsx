"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "₹29,999",
    description: "Perfect for Individuals & Small Businesses",
    featured: false,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "SSL Configuration",
      "Fast Loading Website",
      "Google Map Integration",
      "Social Media Links",
      "1 Month Free Support",
    ],
  },
  {
    name: "Business Website",
    price: "₹49,999",
    description: "Most Popular Choice",
    featured: true,
    features: [
      "Up to 10 Pages",
      "Premium UI/UX Design",
      "Advanced SEO Optimization",
      "Blog Integration",
      "Google Maps Integration",
      "WhatsApp Chat",
      "Social Media Integration",
      "Performance Optimization",
      "Admin Panel (Optional)",
      "Speed Optimization",
      "Google Analytics",
      "3 Months Free Support",
    ],
  },
  {
    name: "Premium Website",
    price: "Starting from ₹79,999",
    description: "For Growing Businesses & Enterprises",
    featured: false,
    features: [
      "Unlimited Pages",
      "Fully Custom Design",
      "Appointment Booking",
      "Payment Gateway Integration",
      "User Login System",
      "Dynamic Dashboard",
      "Database Integration",
      "API Integration",
      "Advanced SEO",
      "Priority Support",
      "6 Months Free Maintenance",
      "Custom Quote Available",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#002b5c]">
            Affordable Website Packages
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            Choose the Perfect Website Package
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Whether you're starting a new business or expanding an existing one,
            we offer premium website development packages tailored to your
            business goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
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
              className={`relative rounded-3xl border bg-white p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.featured
                  ? "border-[#d99a2b] shadow-2xl lg:scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d99a2b] px-5 py-2 text-sm font-bold text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star size={16} fill="white" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <h3 className="mt-3 text-2xl font-bold text-[#002b5c]">
                {plan.name}
              </h3>

              <p className="mt-2 text-gray-500">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold text-[#002b5c]">
                  {plan.price}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check size={15} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-4 text-lg font-semibold transition ${
                  plan.featured
                    ? "bg-[#d99a2b] text-white hover:bg-[#bf8422]"
                    : "bg-[#002b5c] text-white hover:bg-[#001f42]"
                }`}
              >
                Get Free Consultation
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-[#002b5c] p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold">
            Need a Custom Website Solution?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            Every business is unique. Contact us today for a custom quotation
            based on your exact requirements.
          </p>

          <button className="mt-8 rounded-xl bg-[#d99a2b] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#bf8422]">
            Request Custom Quote
          </button>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
            <span>✔ No Hidden Charges</span>
            <span>✔ Mobile Friendly</span>
            <span>✔ SEO Optimized</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Secure & Scalable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}