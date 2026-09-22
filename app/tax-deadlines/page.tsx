import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { DaysLeftBadge, DeadlineWhatsAppButton, NextDeadlineCard } from "@/components/DeadlineClient";
import { TAX_DEADLINES, MONTHLY_DEADLINES, formatDeadlineDate } from "@/lib/taxDeadlines";

const PAGE_URL = "https://www.rajputlalitassociates.in/tax-deadlines";
const TITLE = "Tax & GST Due Dates 2026-27 | TDS, ITR, GSTR-9, ROC";
const DESCRIPTION =
  "Every income tax, TDS, GST and ROC deadline from September 2026 to March 2027 in one place — TDS return Q2, ITR for audit cases, FY 2025-26 ITC, GSTR-9, belated ITR and advance tax — with penalties for missing them.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/tax-deadlines" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is the last date for the TDS return for July–September 2026?",
    a: "31 October 2026. A late fee of ₹200 per day applies under Section 427 (old Section 234E), up to the amount of TDS.",
  },
  {
    q: "What is the ITR due date for tax audit cases for AY 2026-27?",
    a: "31 October 2026, with the tax audit report due by 30 September 2026. No CBDT extension had been announced as of 19 September 2026.",
  },
  {
    q: "What is the GSTR-9 due date for FY 2025-26?",
    a: "31 December 2026. GSTR-9 is mandatory only above ₹2 crore turnover, and GSTR-9C only above ₹5 crore.",
  },
  {
    q: "Till when can I file a belated ITR for AY 2026-27?",
    a: "Till 31 December 2026, with a late fee of ₹5,000 (₹1,000 if income is up to ₹5 lakh). A revised return can be filed till 31 March 2027.",
  },
  {
    q: "What is the last date to claim missed input tax credit for FY 2025-26?",
    a: "30 November 2026, or the date you file your FY 2025-26 annual return if that is earlier. In practice the October GSTR-3B, due 20 November, is the last return in which you can claim it.",
  },
];

const CATEGORY_STYLE: Record<string, string> = {
  "Income Tax": "bg-blue-100 text-blue-800",
  TDS: "bg-purple-100 text-purple-800",
  GST: "bg-green-100 text-green-800",
  ROC: "bg-amber-100 text-amber-900",
};

function groupByMonth() {
  const groups = new Map<string, typeof TAX_DEADLINES>();
  for (const d of [...TAX_DEADLINES].sort((a, b) => a.date.localeCompare(b.date))) {
    const [y, m] = d.date.split("-").map(Number);
    const label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    groups.set(label, [...(groups.get(label) ?? []), d]);
  }
  return [...groups.entries()];
}

export default function TaxDeadlinesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <PageHero
          title="Tax & GST Deadlines 2026-27"
          subtitle="Every important income tax, TDS, GST and ROC due date in one place, with who it applies to and what happens if you miss it."
        />

        <Breadcrumb current="Tax Deadlines" />

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <NextDeadlineCard />

            <p className="mt-6 text-sm text-gray-600 leading-6">
              Dates checked on 23 September 2026. The government sometimes extends a due
              date close to the deadline — we update this page when that happens. For
              your specific case, confirm with us before relying on an extension.
            </p>

            {groupByMonth().map(([month, items]) => (
              <div key={month} className="mt-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#002b5c] border-b-2 border-[#002b5c]/10 pb-3">
                  {month}
                </h2>
                <div className="mt-6 space-y-5">
                  {items.map((d) => (
                    <article
                      key={d.id}
                      className="border border-gray-200 rounded-2xl p-5 md:p-6 bg-[#f7f9fc]"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-extrabold text-[#002b5c] text-lg">
                          {formatDeadlineDate(d.date)}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${CATEGORY_STYLE[d.category]}`}>
                          {d.category}
                        </span>
                        <DaysLeftBadge date={d.date} />
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-[#002b5c]">{d.title}</h3>
                      <p className="mt-2 text-gray-700 leading-7">
                        <strong>Kiske liye:</strong> {d.who}
                      </p>
                      {d.ifMissed && (
                        <p className="mt-1 text-gray-700 leading-7">
                          <strong>Miss kiya to:</strong> {d.ifMissed}
                        </p>
                      )}
                      {d.note && <p className="mt-1 text-gray-600 text-sm leading-6">{d.note}</p>}
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <DeadlineWhatsAppButton deadline={d} />
                        {d.link && (
                          <Link
                            href={d.link.href}
                            className="text-[#0066cc] font-semibold underline hover:text-[#002b5c] text-sm"
                          >
                            {d.link.label} →
                          </Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-14 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#002b5c] mb-3">Har Mahine Ki Deadlines</h2>
              <ul className="space-y-2 text-gray-700 leading-7">
                {MONTHLY_DEADLINES.map((m) => (
                  <li key={m.day}>
                    <strong className="text-[#002b5c]">{m.day}:</strong> {m.what}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#002b5c] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {faqs.map((f) => (
                  <div key={f.q} className="border rounded-xl p-6">
                    <h3 className="font-bold text-lg text-[#002b5c] mb-2">{f.q}</h3>
                    <p className="text-gray-700 leading-7">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
