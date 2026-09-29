import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TaxReportForm from "@/components/TaxReportForm";
import { PAID_SERVICES } from "@/lib/paidServices";

const SLUG = "tax-saving-report";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const PRICE = PAID_SERVICES["tax-report"].amount;

const TITLE = "Personal Tax Saving Report FY 2026-27 — Old vs New Regime Plan";
const DESCRIPTION = `Enter your salary and investments, see free which tax regime is better and how much more you can save. Get a personalised tax saving report with action plan for ₹${PRICE}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tax saving report",
    "how to save income tax salaried",
    "old vs new regime which is better 2026-27",
    "tax planning for salaried employees",
    "80C 80D NPS tax saving plan",
    "salary restructuring employer NPS",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is free and what is paid?",
    answer: `The tax check is free: it shows which regime is better for you, your current tax and how much more you could save. The full report (₹${PRICE}) adds the line-by-line working for both regimes, a section-wise table of unused limits with the tax saved on each, the break-even point, the employer NPS restructuring saving and a step-by-step action plan.`,
  },
  {
    question: "Who is this report for?",
    answer:
      "Resident salaried individuals, including those with some interest or rental income. Business income, capital gains at special rates and surcharge on income above ₹50 lakh are not covered — for those, book a consultation.",
  },
  {
    question: "How do I get the report after paying?",
    answer:
      "It opens on screen immediately after payment, where you can print it or save it as a PDF. A link to it is also emailed to you, so you can open it again any time.",
  },
  {
    question: "Which year's rules does it use?",
    answer:
      "FY 2026-27 (tax year 2026-27). Budget 2026 did not change the income tax slabs, the ₹75,000 standard deduction or the Section 87A rebate, and the report uses the same slab logic as our free income tax calculator.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We only store the numbers you enter along with your payment on Razorpay, so that your report can be rebuilt from your link. We never ask for your PAN, bank details or login passwords.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Personal Tax Saving Report (FY 2026-27)",
  description: DESCRIPTION,
  url: PAGE_URL,
  brand: { "@type": "Brand", name: "Rajput Lalit & Associates" },
  offers: {
    "@type": "Offer",
    price: String(PRICE),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <Sparkles size={16} className="text-[#f0b84b]" />
              Free tax check • Full report ₹{PRICE}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              How Much Tax Can You Still Save?
              <span className="mt-2 block text-[#f0b84b]">Your Personal Tax Saving Report</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Enter your salary and what you already invest. In 2 minutes see which regime is better for
              you and exactly where you are losing money — FY 2026-27.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Tax Saving Report" />

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <TaxReportForm />
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Built on your numbers", text: "Not a generic blog — the report uses your own salary, rent and investments." },
              { icon: Sparkles, title: "Clear action plan", text: "Exact amounts to invest, what to tell your employer, and what to skip." },
              { icon: ShieldCheck, title: "By a tax practice", text: "Prepared by the team that files ITRs for salaried clients every year." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-200 p-6">
                <b.icon className="text-[#d99a2b]" />
                <p className="mt-3 font-bold text-[#002b5c]">{b.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl px-6">
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
              Just want a quick comparison? Use the free{" "}
              <Link href="/income-tax-calculator" className="font-semibold text-[#06477f] underline">
                income tax calculator
              </Link>
              . Payments are covered by our{" "}
              <Link href="/refund-policy" className="font-semibold text-[#06477f] underline">
                refund policy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
