type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQItem[];
};

// Generic, reusable FAQ section with FAQPage schema — GSTFAQ.tsx wale hi
// pattern par based hai, taaki har naye service page ke liye alag-alag
// FAQ component na banana pade. Sirf `faqs` array pass karna hai.
export default function ServiceFAQ({ faqs }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <h2
          data-reveal
          className="text-4xl font-bold text-center text-[#002b5c]"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-reveal
              data-reveal-delay={Math.min(index + 1, 6)}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-[#d99a2b]/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#002b5c]">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
