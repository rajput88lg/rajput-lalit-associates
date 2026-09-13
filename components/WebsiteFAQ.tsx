"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { faqs } from "@/lib/websiteFaqs";

// Re-exported for backward compatibility with any file that still does
// `import { faqs } from "@/components/WebsiteFAQ"`. New code should import
// from "@/lib/websiteFaqs" directly (server components MUST do so).
export { faqs };

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