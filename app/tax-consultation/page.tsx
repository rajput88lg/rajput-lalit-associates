import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, PhoneCall, MessageSquareText } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PaidBookingCheckout from "@/components/PaidBookingCheckout";
import { PAID_SERVICES } from "@/lib/paidServices";
import { OFFICE_DAYS_LABEL, OFFICE_TIME_LABEL } from "@/lib/officeHours";

const SLUG = "tax-consultation";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const PRICE = PAID_SERVICES["tax-call"].amount;

const TITLE = `Talk to a Tax Expert — 15-Min Call for ₹${PRICE}`;
const DESCRIPTION = `Book a 15-minute phone or WhatsApp call with a tax expert for ₹${PRICE}. Get clear answers on ITR, GST, TDS, tax notices or NRI tax — pay online and pick your slot.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tax consultation online",
    "talk to tax expert",
    "paid tax consultation India",
    "GST consultation call",
    "income tax expert call",
    "NRI tax consultation",
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

const TOPICS = [
  "Income Tax / ITR",
  "GST (registration, return, notice)",
  "Income Tax or GST Notice",
  "TDS",
  "NRI Tax",
  "Business / Company Registration",
  "Other",
];

const included = [
  "15-minute phone or WhatsApp call with a tax expert",
  "Any one topic — ITR, GST, TDS, notice, NRI or business registration",
  "Clear next steps: what to file, by when, and what documents you need",
  "Short written summary of the advice on WhatsApp after the call",
];

const steps = [
  { icon: MessageSquareText, title: "Fill the form", text: "Tell us your topic and a convenient time." },
  { icon: CheckCircle2, title: `Pay ₹${PRICE} online`, text: "UPI, card or net banking via Razorpay." },
  { icon: PhoneCall, title: "Get your call", text: "We confirm the slot on WhatsApp and call you." },
];

const faqs = [
  {
    question: "Who will I talk to?",
    answer:
      "You speak directly with our tax team at Rajput Lalit & Associates, Ambala — the same people who handle our clients' GST, income tax and NRI work.",
  },
  {
    question: "When will the call happen?",
    answer: `We call within office hours (${OFFICE_DAYS_LABEL}, ${OFFICE_TIME_LABEL}). After payment we confirm your slot on WhatsApp — usually the same or next working day.`,
  },
  {
    question: "What if my issue needs more than 15 minutes?",
    answer:
      "Many questions are fully answered in 15 minutes. If your case needs filing, a notice reply or detailed work, we'll tell you exactly what's involved and share a fixed quote — you decide whether to go ahead.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Consultation fees are covered by our Refund & Rescheduling Policy. If you can't attend, you can reschedule your call — please see the policy for details.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Quick Tax Consultation (15-minute call)",
  url: PAGE_URL,
  serviceType: "Tax consultation",
  areaServed: "IN",
  provider: {
    "@type": "AccountingService",
    name: "Rajput Lalit & Associates",
    url: "https://www.rajputlalitassociates.in",
    telephone: "+91-93549-53603",
  },
  offers: { "@type": "Offer", price: String(PRICE), priceCurrency: "INR" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
            <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <Clock3 size={16} className="text-[#f0b84b]" />
              15-minute call • ₹{PRICE}
            </p>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              Talk to a Tax Expert
              <span className="block text-[#f0b84b] mt-2">Get a Clear Answer, Fast</span>
            </h1>
            <p className="mt-5 text-lg text-blue-100 leading-8 max-w-2xl mx-auto">
              ITR, GST, TDS, a tax notice or an NRI question — book a short
              call and know exactly what to do next.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Tax Consultation" />

        <section className="bg-[#f7f9fc] py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#002b5c]">What you get</h2>
              <ul className="mt-6 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#d99a2b]" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {steps.map((s, i) => (
                  <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-5">
                    <s.icon size={22} className="text-[#d99a2b]" />
                    <p className="mt-3 font-bold text-[#002b5c]">
                      {i + 1}. {s.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 leading-6">{s.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-gray-600 leading-7">
                Prefer a free first chat about hiring us for a full service?{" "}
                <Link href="/#appointment" className="font-bold text-[#002b5c] underline decoration-[#d99a2b] decoration-2 underline-offset-4">
                  Book a free consultation
                </Link>{" "}
                instead. This paid call is for getting expert answers to your
                own questions, whether or not you hire us.
              </p>
            </div>

            <aside className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 md:p-8">
              <div className="flex items-end justify-between border-b border-gray-100 pb-5 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500">Consultation fee</p>
                  <p className="mt-1 text-4xl font-extrabold text-[#002b5c]">₹{PRICE}</p>
                </div>
                <p className="text-sm text-gray-500">15 minutes</p>
              </div>

              <PaidBookingCheckout service="tax-call" topics={TOPICS} />

              <p className="mt-5 text-xs text-gray-500 leading-5 text-center">
                By booking you agree to our{" "}
                <Link href="/refund-policy" className="underline">Refund &amp; Rescheduling Policy</Link>{" "}
                and{" "}
                <Link href="/terms-and-conditions" className="underline">Terms</Link>.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-[#002b5c] text-center">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#002b5c]">{faq.question}</h3>
                  <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
