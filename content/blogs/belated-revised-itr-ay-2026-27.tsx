import Link from "next/link";

const faqs = [
  {
    q: "I missed the 31 July 2026 ITR due date. What should I do now?",
    a: "You can still file a belated return under Section 139(4) of the Income Tax Act, 1961, any time up to 31 December 2026 (or before your assessment is completed, whichever is earlier). You will have to pay a late fee under Section 234F and interest under Section 234A on any unpaid tax, but filing late is far better than not filing at all.",
  },
  {
    q: "What is the late fee for filing a belated return?",
    a: "Under Section 234F, the fee is ₹5,000. If your total income does not exceed ₹5 lakh, the fee is limited to ₹1,000. If you are not required to file a return at all (your income is below the basic exemption limit and none of the mandatory-filing conditions apply to you), no late fee applies even if you file after the due date.",
  },
  {
    q: "Can I still claim a refund if I file a belated return?",
    a: "Yes. You can claim a refund of excess TDS or advance tax paid even in a belated return, as long as you file within the Section 139(4) deadline. However, if any tax is still payable, interest under Section 234A continues to run until you actually file.",
  },
  {
    q: "What is the difference between a belated return and a revised return?",
    a: "A belated return (Section 139(4)) is your first return, filed after the original due date has passed. A revised return (Section 139(5)) is used to correct a mistake or omission in a return you have already filed — original or belated. You can revise a belated return too, as long as it is done within the revised return deadline.",
  },
  {
    q: "What is the deadline to file a revised return for AY 2026-27?",
    a: "For AY 2026-27, the deadline to file a revised return under Section 139(5) is 31 March 2027, or before completion of assessment, whichever is earlier. This deadline was extended from the earlier 31 December cut-off by a recent Budget 2026 amendment, so it is now later than the belated return deadline.",
  },
  {
    q: "I missed even the 31 December belated return deadline. Is there any option left?",
    a: "Yes — an Updated Return (ITR-U) under Section 139(8A) can be filed within 48 months from the end of the relevant assessment year (for AY 2026-27, up to 31 March 2031), subject to paying additional tax under Section 140B (25% to 70% of the extra tax and interest, depending on how late it is filed). An ITR-U cannot be used to claim a refund, increase a refund, or report a loss, and it is not available in certain situations such as a pending search, survey, or assessment.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function BelatedRevisedITRAY202627() {
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
        If you missed the 31 July 2026 income tax return due date for FY
        2025-26 (AY 2026-27), you have not lost the ability to file — you
        have entered the <strong>belated return</strong> window instead. This
        guide explains, in plain language, what a belated return costs you,
        how it differs from a revised return, and what to do if you miss
        even that deadline.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary (AY 2026-27)
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Belated return (Sec 139(4)):</strong> file by{" "}
            <strong>31 December 2026</strong>
          </li>
          <li>
            <strong>Late fee (Sec 234F):</strong> ₹5,000 (₹1,000 if income ≤
            ₹5 lakh; nil if you were not required to file at all)
          </li>
          <li>
            <strong>Interest (Sec 234A):</strong> 1% per month on unpaid tax,
            from the original due date until you file
          </li>
          <li>
            <strong>Revised return (Sec 139(5)):</strong> file by{" "}
            <strong>31 March 2027</strong> (extended from the earlier 31
            December cut-off by a recent Budget 2026 amendment)
          </li>
          <li>
            <strong>Updated return / ITR-U (Sec 139(8A)):</strong> available
            up to <strong>31 March 2031</strong> (48 months), with
            additional tax under Section 140B
          </li>
        </ul>
        <p className="text-gray-700 leading-7 mt-3 text-sm">
          Note: for FY 2025-26 (AY 2026-27), the Income Tax Department has
          clarified that the older Income-tax Act, 1961 continues to apply —
          not the new Income-tax Act, 2025 — even for a belated or revised
          return filed after 1 April 2026. So the section numbers above
          (139(4), 139(5), 234F, 234A) are the correct, current references
          for this assessment year.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Original Due Dates for FY 2025-26 (AY 2026-27)
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category of Taxpayer</th>
              <th className="border px-4 py-3 text-left">Original Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Individuals, salaried taxpayers, and others not requiring audit
              </td>
              <td className="border px-4 py-3">31 July 2026</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Businesses/professionals requiring a tax audit (Section 44AB)
              </td>
              <td className="border px-4 py-3">31 October 2026</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Taxpayers requiring a transfer pricing report (international/specified domestic transactions)
              </td>
              <td className="border px-4 py-3">30 November 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        If your original due date was 31 July 2026 and you have not filed
        yet, you are already in belated return territory. If your due date
        is 31 October or 30 November 2026, you still have time to file on
        time and avoid the late fee and interest discussed below entirely.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Is a Belated Return (Section 139(4))?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A belated return is simply your income tax return filed after the
        original due date has passed. For AY 2026-27, you can file a
        belated return any time up to <strong>31 December 2026</strong>, or
        before your assessment is completed by the department, whichever is
        earlier. It uses the same ITR forms as an on-time return — there is
        no separate form for late filing.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee and Interest on a Belated Return
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Total income above ₹5 lakh</td>
              <td className="border px-4 py-3">₹5,000 late fee (Section 234F)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Total income up to ₹5 lakh</td>
              <td className="border px-4 py-3">₹1,000 late fee (Section 234F)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Not required to file a return at all (income below basic
                exemption limit, no other mandatory-filing trigger)
              </td>
              <td className="border px-4 py-3">No late fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Any unpaid self-assessment tax</td>
              <td className="border px-4 py-3">
                1% per month (or part of a month) interest under Section 234A,
                from the day after the original due date until the date of
                filing
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          Suppose your total income is ₹8 lakh, your original due date was 31
          July 2026, and you file on 20 September 2026 with ₹15,000 of tax
          still unpaid at the time of filing. You would pay a ₹5,000 late
          fee under Section 234F, plus interest under Section 234A at 1% per
          month (or part of a month) on the ₹15,000 for the roughly 2 months
          of delay — about ₹300, in addition to the tax itself.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What You Lose by Filing Late
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Beyond the late fee and interest, a belated return has one important
        real cost — certain losses can no longer be carried forward to
        future years:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Cannot carry forward:</strong> business losses, speculation
          business losses, and capital losses (short-term or long-term)
        </li>
        <li>
          <strong>Can still carry forward:</strong> loss from house property,
          and unabsorbed depreciation
        </li>
        <li>
          If tax payable (after TDS/advance tax) exceeds ₹10,000 and the
          return is still not filed, prosecution under Section 276CC is
          possible in serious cases — another reason not to delay beyond the
          belated return deadline
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        If you run a business or trade in shares and expect a loss this
        year, filing on time (not even belated) is the only way to preserve
        your right to carry that loss forward against future profits. Read
        more on our{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return Filing service
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Is a Revised Return (Section 139(5))?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A revised return is used when you discover an omission or a wrong
        statement in a return you have already filed — whether that was an
        on-time return or a belated one. Common reasons to revise include a
        missed deduction, a wrong bank account for refund, an income source
        left out, or a mismatch spotted against Form 26AS/AIS after filing.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        For AY 2026-27, the deadline to file a revised return is{" "}
        <strong>31 March 2027</strong>, or before your assessment is
        completed, whichever is earlier. This is later than the belated
        return deadline of 31 December 2026 — a recent Budget 2026 amendment
        pushed the revised return cut-off from the earlier 31 December date
        out to 31 March. You can revise your return any number of times
        within this window, and each revised return replaces the one filed
        before it.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Missed Even the Belated Deadline? Updated Return (ITR-U)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        If you miss both the original and the belated return deadlines, or
        you need to declare additional income you missed even in an earlier
        return, an <strong>Updated Return (ITR-U)</strong> under Section
        139(8A) is available for up to <strong>48 months</strong> from the
        end of the relevant assessment year — for AY 2026-27, that works out
        to 31 March 2031.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Filed Within</th>
              <th className="border px-4 py-3 text-left">
                Additional Tax (Section 140B)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">12 months from end of AY</td>
              <td className="border px-4 py-3">25% of additional tax + interest</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">12–24 months from end of AY</td>
              <td className="border px-4 py-3">50% of additional tax + interest</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">24–36 months from end of AY</td>
              <td className="border px-4 py-3">60% of additional tax + interest</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">36–48 months from end of AY</td>
              <td className="border px-4 py-3">70% of additional tax + interest</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        An ITR-U cannot be used to claim or increase a refund, cannot report
        a loss, and is not available if a search, survey, or assessment
        proceeding is already pending against you, or if you have already
        filed an ITR-U for that year. It is meant only to declare additional
        income and pay the extra tax due — not as a way to correct every
        kind of mistake, which is what the revised return is for.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Which Option Applies to You?
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Haven&apos;t filed at all yet, and it&apos;s before 31 December 2026 → File a <strong>belated return</strong></li>
        <li>Already filed (on time or belated) but need to fix a mistake, before 31 March 2027 → File a <strong>revised return</strong></li>
        <li>Missed 31 December 2026 entirely, or discovered extra income later → File an <strong>updated return (ITR-U)</strong></li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR Filing Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps individuals and businesses file
        belated returns, revised returns, and updated returns (ITR-U)
        accurately, with the correct late fee and interest calculated
        upfront so there are no surprises. We serve clients in Ambala in
        person and across India online.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a consultation
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
        Income Tax Act, 1961 (as applicable to AY 2026-27) and related
        amendments as of September 2026. Rules and portal processes change
        from time to time, so please verify the latest position or consult a
        professional before acting.
      </p>
    </>
  );
}
