import Link from "next/link";

const faqs = [
  {
    q: "Does a newly incorporated company need to hold an AGM in its first year?",
    a: "Yes, but with more time — the first AGM must be held within 9 months of the end of the first financial year, rather than the usual 6-month window that applies afterward.",
  },
  {
    q: "Is DIR-3 KYC required even if I'm a director of only one small company?",
    a: "Yes — DIR-3 KYC by 30 September is required for every individual holding a DIN, regardless of how many companies they're a director of, or even if the DIN is currently not linked to any active directorship.",
  },
  {
    q: "Does an LLP need to hold an AGM like a company does?",
    a: "No — LLPs don't have the AGM concept at all. Form 11 (30 May) and Form 8 (30 October) are simply fixed annual dates, independent of any meeting.",
  },
  {
    q: "What happens if a company misses ROC filings for several years in a row?",
    a: "Beyond escalating additional fees, the ROC can eventually strike the company off the register for persistent non-filing, and directors can face disqualification from being appointed to any other company for a period — this is a real, not theoretical, risk seen regularly in practice.",
  },
  {
    q: "Do small/dormant companies still need to file AOC-4 and MGT-7 every year?",
    a: "Yes — even a company with zero transactions in a year (a dormant or shell company) generally still needs to file its annual ROC returns unless it has formally applied for and been granted 'dormant company' status under Section 455.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function ROCAnnualComplianceCalendarPvtLtdLLP() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-gray-700 leading-8 mb-6">
        Missing an ROC filing deadline isn't like missing a tax deadline with just a late fee — persistent default can attach personal liability to directors and, eventually, risk the company being struck off the register. Since AGM dates (and therefore several ROC due dates) shift slightly year to year, it helps to know the underlying rule, not just last year's calendar dates.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>AOC-4 (financial statements): within 30 days of AGM</li>
          <li>MGT-7/MGT-7A (annual return): within 60 days of AGM</li>
          <li>LLP Form 11: 30 May every year; LLP Form 8: 30 October every year</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Private Limited Company — Annual Cycle
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Filing</th>
              <th className="border px-4 py-3 text-left">Due Date Rule</th>
              <th className="border px-4 py-3 text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">AGM (Annual General Meeting)</td>
                <td className="border px-4 py-3">Within 6 months of financial year-end (by 30 September for a 31 March year-end); first AGM within 9 months</td>
                <td className="border px-4 py-3">Approves financial statements</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">AOC-4 / AOC-4 XBRL</td>
                <td className="border px-4 py-3">Within 30 days of AGM</td>
                <td className="border px-4 py-3">Filing of financial statements</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">MGT-7 / MGT-7A (small companies &amp; OPCs)</td>
                <td className="border px-4 py-3">Within 60 days of AGM</td>
                <td className="border px-4 py-3">Annual return</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">ADT-1</td>
                <td className="border px-4 py-3">Within 15 days of AGM</td>
                <td className="border px-4 py-3">Auditor appointment/re-appointment</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">DIR-3 KYC</td>
                <td className="border px-4 py-3">By 30 September every year</td>
                <td className="border px-4 py-3">KYC for every DIN holder, even if the director isn't currently active</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        LLP — Annual Cycle
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Filing</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
              <th className="border px-4 py-3 text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Form 11</td>
                <td className="border px-4 py-3">30 May every year</td>
                <td className="border px-4 py-3">Annual return of partners/contribution</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Form 8</td>
                <td className="border px-4 py-3">30 October every year</td>
                <td className="border px-4 py-3">Statement of Account &amp; Solvency</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why the Dates 'Move' Each Year
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        AOC-4, MGT-7, and ADT-1 are all calculated relative to your AGM date, not fixed calendar dates — so if your AGM happens on 25 September, AOC-4 is due around 25 October and MGT-7 around 24 November for that year. Form 11 and Form 8 for LLPs, by contrast, are fixed calendar dates every year regardless of anything else, which makes them easy to set a standing reminder for.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Penalty for Missing These
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Additional Fee Compounds by Delay Period
        </h3>
        <p className="text-gray-700 leading-8">
          ROC filings attract an additional fee that increases the longer the delay continues (structured in multiples of the normal fee based on the period of default), separate from any prosecution risk for persistent non-filing. Beyond the direct fee, a poor ROC filing track record shows up in due diligence during fundraising, loan applications, or a future sale of the business — it's one of the first things a lender or investor's lawyer checks.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Every one of these filings interacts with the last — a missed AGM pushes back every date that follows it. Rajput Lalit &amp; Associates handles ROC compliance for Private Limited companies and LLPs year-round, so nothing gets missed. See our{" "}<Link href="/company-registration" className={linkClass}>Company Registration service</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-[#002b5c]">{faq.q}</h3>
            <p className="text-gray-700 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 leading-6">
        ROC due dates are governed by the Companies Act, 2013, the LLP Act, 2008, and MCA rules, and can be modified by government notification/extension in a given year. This article explains the standard recurring rule as of September 2026 — please confirm your specific company's AGM-linked dates and any notified extensions with a professional.
      </p>
    </>
  );
}
