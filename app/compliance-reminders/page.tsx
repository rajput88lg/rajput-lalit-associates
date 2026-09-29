import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, CalendarCheck, CheckCircle2, MailCheck } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ReminderSignup from "@/components/ReminderSignup";
import { PAID_SERVICES } from "@/lib/paidServices";

const SLUG = "compliance-reminders";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const PRICE = PAID_SERVICES["compliance-reminders"].amount;

const TITLE = `GST, TDS & Income Tax Due Date Reminders — ₹${PRICE}/Year`;
const DESCRIPTION = `Never pay a late fee again. Get email reminders 7 days and 2 days before every GST, TDS, advance tax, ITR and ROC due date for 12 months — only ₹${PRICE} a year.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "GST due date reminder",
    "TDS due date reminder service",
    "compliance calendar reminder India",
    "advance tax reminder",
    "GSTR-3B due date alert",
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

const included = [
  "Monthly GSTR-1 (11th) and GSTR-3B (20th) reminders",
  "Monthly TDS/TCS deposit (7th) and quarterly TDS returns",
  "Advance tax instalments, ITR, belated/revised ITR and tax audit dates",
  "GST annual return (GSTR-9) and last date to claim ITC",
  "Company & LLP ROC filings — AOC-4, MGT-7, LLP Form 8",
  "Government extensions — we update the dates, you just read the email",
];

const faqs = [
  {
    question: "How will I get the reminders?",
    answer:
      "By email, 7 days before and again 2 days before each due date, for the categories you choose. Each email says who must file, what happens if it's missed, and has a one-tap WhatsApp button if you want us to file it.",
  },
  {
    question: "Does it renew automatically?",
    answer:
      "No. You pay once for 12 months. Two weeks before it ends we email you a renewal link — renew only if you found it useful.",
  },
  {
    question: "What if the government extends a due date?",
    answer:
      "We track CBDT and GSTN announcements and update our calendar, so reminders follow the extended date.",
  },
  {
    question: "Is it a replacement for filing?",
    answer:
      "No — it makes sure you never forget. If you want the filing itself done, our GST, TDS and ITR services are a WhatsApp message away.",
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
  name: "Compliance Reminder Service (12 months)",
  url: PAGE_URL,
  serviceType: "Tax compliance due date reminders",
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
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
              <BellRing size={16} className="text-[#f0b84b]" />
              12 months • ₹{PRICE} • no auto-renewal
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Never Miss a Tax Due Date
              <span className="mt-2 block text-[#f0b84b]">GST, TDS &amp; Income Tax Reminders</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              One late GSTR-3B or TDS return can cost more than a whole year of reminders. We email you
              before every due date that applies to you.
            </p>
          </div>
          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Compliance Reminders" />

        <section className="bg-[#f7f9fc] py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-[#002b5c] md:text-3xl">What you get</h2>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#d99a2b]" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <MailCheck className="text-[#d99a2b]" />
                  <p className="mt-2 font-bold text-[#002b5c]">2 emails per due date</p>
                  <p className="mt-1 text-sm text-gray-600">7 days before, and a final nudge 2 days before.</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <CalendarCheck className="text-[#d99a2b]" />
                  <p className="mt-2 font-bold text-[#002b5c]">Late fee example</p>
                  <p className="mt-1 text-sm text-gray-600">TDS return late fee is ₹200 per day — 5 days late already costs ₹1,000.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#002b5c]">Start your reminders</h2>
              <p className="mt-1 text-sm text-gray-600">Reminders go to the email you enter below.</p>
              <div className="mt-5">
                <ReminderSignup />
              </div>
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
              See all upcoming dates on our free{" "}
              <Link href="/tax-deadlines" className="font-semibold text-[#06477f] underline">
                tax deadline calendar
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
