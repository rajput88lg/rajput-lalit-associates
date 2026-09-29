import Link from "next/link";
import { Calculator } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import GlobalTaxCalculator from "@/components/GlobalTaxCalculator";

export type Faq = { question: string; answer: string };

/** Shared layout for the USA / Canada / Australia take-home pay calculators. */
export default function GlobalTaxPage({
  country,
  badge,
  heading,
  subheading,
  intro,
  breadcrumb,
  assumptions,
  faqs,
}: {
  country: "US" | "CA" | "AU";
  badge: string;
  heading: string;
  subheading: string;
  intro: string;
  breadcrumb: string;
  assumptions: string[];
  faqs: Faq[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative mx-auto max-w-5xl px-6 py-14 text-center md:py-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <Calculator size={16} className="text-[#f0b84b]" /> {badge}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              {heading}
              <span className="mt-2 block text-[#f0b84b]">{subheading}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">{intro}</p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current={breadcrumb} />

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <GlobalTaxCalculator country={country} />
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-600">
              <p className="font-semibold text-gray-800">What this calculator assumes</p>
              <ul className="mt-2 list-disc pl-5">
                {assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <details key={f.question} className="rounded-xl border border-gray-200 p-5">
                  <summary className="cursor-pointer font-bold text-[#002b5c]">{f.question}</summary>
                  <p className="mt-3 leading-7 text-gray-700">{f.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-600">
              More free calculators:{" "}
              <Link href="/us-income-tax-calculator" className="font-semibold text-[#06477f] underline">USA</Link> ·{" "}
              <Link href="/canada-income-tax-calculator" className="font-semibold text-[#06477f] underline">Canada</Link> ·{" "}
              <Link href="/australia-income-tax-calculator" className="font-semibold text-[#06477f] underline">Australia</Link> ·{" "}
              <Link href="/income-tax-calculator" className="font-semibold text-[#06477f] underline">India</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
