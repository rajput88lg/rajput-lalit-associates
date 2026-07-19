"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Headset,
} from "lucide-react";

const process = [
  {
    icon: <ClipboardList size={32} />,
    title: "Requirement Discussion",
    description:
      "We understand your business goals, target audience and project requirements before starting.",
  },
  {
    icon: <PenTool size={32} />,
    title: "UI / UX Design",
    description:
      "A clean, modern and user-friendly interface is designed for the best user experience.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Development",
    description:
      "Your website is developed using modern technologies with fast loading and responsive design.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Testing & Quality Check",
    description:
      "Every page is tested for speed, responsiveness, security and browser compatibility.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch Website",
    description:
      "After approval, your website is deployed with SSL, domain connection and SEO setup.",
  },
  {
    icon: <Headset size={32} />,
    title: "Support & Maintenance",
    description:
      "We provide ongoing support, updates and maintenance after your website goes live.",
  },
];

export default function WebsiteProcess() {
  return (
    <section className="py-24 bg-[#f8fafc]">
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
            Our Working Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#002b5c]">
            From Idea to Successful Website Launch
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We follow a structured development process to ensure every website
            is modern, secure, fast and ready to grow your business.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#d99a2b] to-[#002b5c] rounded-full"></div>

          <div className="space-y-14">

            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } flex-col gap-8`}
              >

                {/* Card */}

                <div className="lg:w-5/12 w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">

                  <div className="w-16 h-16 rounded-2xl bg-[#002b5c] text-[#d99a2b] flex items-center justify-center">
                    {step.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#002b5c]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>

                {/* Center Circle */}

                <div className="hidden lg:flex w-14 h-14 rounded-full bg-[#d99a2b] text-white font-bold items-center justify-center shadow-xl z-10">
                  {index + 1}
                </div>

                {/* Empty Space */}

                <div className="lg:w-5/12 hidden lg:block"></div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}