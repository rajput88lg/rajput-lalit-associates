"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on your business requirements, number of pages, features and functionality. Contact us for a customized quotation.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 7–21 working days depending on the project scope.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. Every website we develop is fully responsive and works smoothly on mobile, tablet and desktop devices.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We build SEO-friendly websites and can also help with Google Search Console, Google Business Profile and basic SEO setup.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer website maintenance, security updates, backups and ongoing technical support.",
  },
  {
    question: "How do I start my website project?",
    answer:
      "Simply call or WhatsApp us. We will schedule a consultation, understand your requirements and provide a customized quotation.",
  },
];

export default function WebsiteFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#002b5c]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600">
            Find answers to the most common questions about our website development services.
          </p>
        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 bg-gray-50"
              >
                <span className="font-bold text-left text-[#002b5c]">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {open === index && (
                <div className="px-6 py-5 text-gray-600 leading-8 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}