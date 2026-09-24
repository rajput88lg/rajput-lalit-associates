import Link from "next/link";

const faqs = [
  {
    q: "Who is required to pay advance tax?",
    a: "Anyone whose estimated tax liability for the year, after subtracting TDS/TCS already deducted, exceeds ₹10,000. This covers salaried employees with significant other income (capital gains, rent, interest), freelancers, professionals, and business owners — not just businesses. Senior citizens (60+) are exempt only if they have no income from business or profession; a senior citizen running a business still has to pay.",
  },
  {
    q: "What are the advance tax due dates for FY 2026-27?",
    a: "15% of the year's total tax by 15 June 2026, 45% (cumulative) by 15 September 2026, 75% (cumulative) by 15 December 2026, and 100% by 15 March 2027. Each instalment is measured against the cumulative percentage of your full-year estimated liability, not a fresh 15%/30%/30%/25% split.",
  },
  {
    q: "Do freelancers and small businesses under presumptive taxation follow the same 4 installments?",
    a: "No — if you've opted for presumptive taxation under Section 44AD (business) or 44ADA (profession), you can pay 100% of your advance tax in a single instalment by 15 March, instead of the quarterly schedule. This relief does not extend to Section 44AE (goods transport).",
  },
  {
    q: "What's the difference between interest under Section 424 and Section 425 (old 234B and 234C)?",
    a: "Section 424 (old 234B) applies if you've paid less than 90% of your total tax liability as advance tax by 31 March — interest runs at 1% per month from 1 April until you pay the balance. Section 425 (old 234C) is separate and applies per quarter — even if your total advance tax by year-end is fine, paying too little by a specific instalment date triggers interest for that instalment alone, calculated independently.",
  },
  {
    q: "I underpaid my June instalment but caught up by September — do I still owe interest?",
    a: "Yes, for that instalment specifically. Section 425/234C interest is charged per instalment based on what was due by that date, regardless of what you pay later. A shortfall in the June or September instalment generally attracts 3 months' interest on the shortfall amount; a shortfall in December also attracts 3 months; a shortfall in the final March instalment attracts 1 month. Catching up later reduces your Section 424 exposure but doesn't erase the earlier instalment's Section 425 interest.",
  },
  {
    q: "Is there any relief if my income is genuinely hard to estimate in advance (like capital gains)?",
    a: "Yes, for one specific case: capital gains and certain other income that arises unexpectedly (winnings, dividend income you couldn't have anticipated) is exempt from Section 425/234C interest for the instalment in which it arose, as long as the tax due on it is paid in the immediately following instalment. Regular business or salary income doesn't get this relief — it has to be estimated and paid on schedule.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function AdvanceTaxPaymentDueDatesInterest() {
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
        If your tax liability for the year — after whatever gets deducted
        as TDS — crosses ₹10,000, the law expects you to pay tax in
        instalments through the year, not in one lump sum when you file
        your return. Miss an instalment and it isn't just late; it's
        interest that starts accumulating quietly and adds up by the time
        you file. Here's who's covered, the exact dates, and how the
        interest actually gets calculated.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Who pays:</strong> anyone with tax liability above
            ₹10,000 after TDS — salaried, freelancers, businesses (senior
            citizens without business income are exempt)
          </li>
          <li>
            <strong>Due dates FY 2026-27:</strong> 15% by 15 June, 45% by
            15 Sept, 75% by 15 Dec, 100% by 15 March (cumulative)
          </li>
          <li>
            <strong>44AD/44ADA presumptive taxpayers:</strong> single
            instalment, 100% by 15 March
          </li>
          <li>
            <strong>Interest for overall shortfall:</strong> Section 424
            (old 234B) — 1% per month if less than 90% paid by 31 March
          </li>
          <li>
            <strong>Interest per missed instalment:</strong> Section 425
            (old 234C) — 1% per month on each instalment's shortfall,
            independently
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Must Pay Advance Tax
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The ₹10,000 threshold is on your <em>net</em> tax liability — total
        tax due for the year, minus TDS/TCS already deducted on your
        income. This regularly catches people who assume advance tax is
        only for businesses: a salaried person with rental income,
        significant capital gains, or freelance/consulting income on the
        side can easily cross ₹10,000 in net liability even with salary
        TDS already being deducted. Senior citizens (60 years or above)
        are exempt from advance tax — but only if they have no income
        from business or profession that year.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Due Dates and Cumulative Percentages — FY 2026-27
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Instalment</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
              <th className="border px-4 py-3 text-left">Cumulative % of Tax Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">1st</td>
              <td className="border px-4 py-3">15 June 2026</td>
              <td className="border px-4 py-3">15%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">2nd</td>
              <td className="border px-4 py-3">15 September 2026</td>
              <td className="border px-4 py-3">45%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">3rd</td>
              <td className="border px-4 py-3">15 December 2026</td>
              <td className="border px-4 py-3">75%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">4th</td>
              <td className="border px-4 py-3">15 March 2027</td>
              <td className="border px-4 py-3">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Note these are <strong>cumulative</strong> figures — by 15
        September you should have paid 45% of the full year's estimated
        tax in total (not an additional 45% on top of June's 15%).
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Freelancers &amp; Small Businesses — the Single-Instalment Option
        </h3>
        <p className="text-gray-700 leading-8">
          If you've opted for presumptive taxation under Section 44AD
          (business) or 44ADA (professionals — doctors, consultants,
          freelancers, designers etc.), you're not required to follow the
          quarterly schedule. You can pay your entire year's advance tax
          in one instalment by 15 March, which simplifies things
          considerably if your income is hard to predict quarter by
          quarter. This relief doesn't apply to Section 44AE (goods
          transport operators), who follow the regular quarterly schedule.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Interest for Default — Two Separate Provisions
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Provision</th>
              <th className="border px-4 py-3 text-left">Applies When</th>
              <th className="border px-4 py-3 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Section 424 (old 234B)</td>
              <td className="border px-4 py-3">Less than 90% of total tax paid as advance tax by 31 March</td>
              <td className="border px-4 py-3">1% per month, from 1 April until paid</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Section 425 (old 234C)</td>
              <td className="border px-4 py-3">Any individual instalment falls short of its cumulative %</td>
              <td className="border px-4 py-3">1% per month on that instalment's shortfall (3 months for June/Sept/Dec shortfalls, 1 month for March)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        These stack independently — you can owe Section 425 interest for
        missing the June instalment even if you're fully paid up by
        year-end, and separately owe Section 424 interest if your
        year-end total still falls short of 90%. The one relief: tax on
        capital gains or other genuinely unpredictable income (lottery
        winnings, for instance) is excused from Section 425 interest for
        the instalment in which it arose, provided you pay it with the
        very next instalment.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advance Tax Planning &amp; Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Want to see your own instalment amounts and check for a shortfall?
        Use our free{" "}
        <Link href="/advance-tax-calculator" className={linkClass}>
          Advance Tax Calculator
        </Link>{" "}
        — enter your estimated tax liability and it shows your exact
        schedule and an estimate of interest on anything overdue.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps individuals and businesses
        estimate advance tax accurately each quarter and avoid interest
        under Sections 424/425.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return Filing service
        </Link>
        .
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
        Disclaimer: This article is for general information based on the
        Income-tax Act, 2025 (Sections 424 and 425, corresponding to the
        old Sections 234B and 234C) as applicable to income earned from 1
        April 2026 onward, current as of September 2026. Please verify the
        latest position or consult a professional for your specific
        situation before relying on it.
      </p>
    </>
  );
}
