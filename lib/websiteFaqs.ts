/**
 * Website-development FAQ data — single source of truth.
 * ======================================================
 *
 * IMPORTANT: this file must NOT be a "use client" module.
 *
 * It is imported by BOTH:
 *   - app/website-development/page.tsx  (server component — builds FAQPage JSON-LD)
 *   - components/WebsiteFAQ.tsx         (client component — renders the accordion)
 *
 * Earlier this array lived inside components/WebsiteFAQ.tsx, which is a
 * "use client" module. A server component importing a plain value from a
 * client module does not receive the real value — it receives an internal
 * client-reference object — so `faqs.map(...)` threw
 * "faqs.map is not a function" during the production build.
 * Keeping the data in this neutral module fixes that permanently.
 */

export type WebsiteFaq = {
  question: string;
  answer: string;
};

export const faqs: WebsiteFaq[] = [
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
