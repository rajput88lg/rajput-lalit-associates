import Link from "next/link";

const faqs = [
  {
    q: "What are the TDS return due dates for FY 2026-27?",
    a: "Q1 (April–June) is due 31 July 2026, Q2 (July–September) is due 31 October 2026, Q3 (October–December) is due 31 January 2027, and Q4 (January–March) is due 31 May 2027. This quarterly TDS statement is filed under Section 397(3)(b) of the Income-tax Act, 2025 (earlier Section 200(3)) read with Rule 219 of the Income-tax Rules, 2026 (earlier Rule 31A).",
  },
  {
    q: "What is the late fee for filing a TDS return after the due date?",
    a: "Section 427 of the Income-tax Act, 2025 (earlier Section 234E) charges ₹200 for every day of delay, capped at the total TDS amount deductible for that quarter. This late fee applies automatically and has to be paid before the return is filed.",
  },
  {
    q: "Is there a separate penalty apart from the late fee?",
    a: "Yes. Section 461 (earlier Section 271H) allows the tax department to levy a penalty of ₹10,000 to ₹1,00,000 for not filing the TDS statement, or for filing it with incorrect information. However, if the return is filed within one month of the due date and the TDS along with late fee and interest has been deposited, this penalty is generally not levied — this one-month relaxation window applies from 1 April 2025 onwards.",
  },
  {
    q: "What is the due date for depositing TDS every month?",
    a: "TDS deducted in a month must be deposited to the government by the 7th of the following month. For TDS deducted in March, the due date is extended to 30 April. Government offices that deduct TDS without a challan generally have to remit it on the same day.",
  },
  {
    q: "How much interest is charged for late deduction or late deposit of TDS?",
    a: "Under Section 398(3) of the Income-tax Act, 2025 (earlier Section 201(1A)), interest at 1% per month applies if TDS is not deducted at all, and 1.5% per month applies if TDS is deducted but deposited late. Interest is calculated from the month the deduction/deposit was due until the month it is actually done, and a part of a month counts as a full month.",
  },
  {
    q: "When should Form 16 and Form 16A be issued to employees and vendors?",
    a: "Form 16 (renumbered Form 130), the annual salary TDS certificate, must be issued by 15 June following the financial year. Form 16A (renumbered Form 131), the quarterly certificate for non-salary TDS, is generally due within 15 days of the return filing due date for each quarter — broadly around 15 August, 15 November, 15 February and 15 June.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSReturnFilingDueDatesLateFee() {
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
        If your business deducts TDS on salary, rent, professional fees,
        contractor payments or property purchase, you have to file a
        quarterly TDS return — even in a quarter with no deductions, once you
        have an active TAN. Missing the due date attracts a daily late fee, a
        separate penalty, and interest on top. This guide covers the exact
        due dates for FY 2026-27, the applicable forms, and what late filing
        actually costs you.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Quarterly due dates (FY 2026-27):</strong> 31 Jul 2026,
            31 Oct 2026, 31 Jan 2027, 31 May 2027
          </li>
          <li>
            <strong>Monthly deposit due date:</strong> 7th of the next month
            (30 April for March)
          </li>
          <li>
            <strong>Late fee:</strong> ₹200/day (Section 427), capped at the
            TDS amount
          </li>
          <li>
            <strong>Penalty:</strong> ₹10,000–₹1,00,000 (Section 461) —
            usually waived if filed within 1 month with dues cleared
          </li>
          <li>
            <strong>Interest:</strong> 1% per month (non-deduction) / 1.5%
            per month (late deposit) — Section 398(3)
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Return Due Dates for FY 2026-27
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Every deductor — company, LLP, firm, or an individual whose accounts
        were tax-audited in the previous year — must file a quarterly TDS
        statement under Section 397(3)(b) of the Income-tax Act, 2025
        (earlier Section 200(3)) read with Rule 219 (earlier Rule 31A).
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Quarter</th>
              <th className="border px-4 py-3 text-left">Period</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Q1</td>
              <td className="border px-4 py-3">April – June 2026</td>
              <td className="border px-4 py-3">31 July 2026</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Q2</td>
              <td className="border px-4 py-3">July – September 2026</td>
              <td className="border px-4 py-3">31 October 2026</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Q3</td>
              <td className="border px-4 py-3">October – December 2026</td>
              <td className="border px-4 py-3">31 January 2027</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Q4</td>
              <td className="border px-4 py-3">January – March 2027</td>
              <td className="border px-4 py-3">31 May 2027</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        These are separate from the <strong>monthly TDS deposit due
        date</strong> — the tax deducted in a given month has to reach the
        government by the 7th of the next month (30 April for the month of
        March). The quarterly return is filed only after that month&apos;s
        challans are already deposited.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Which TDS Form Applies to You?
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Form</th>
              <th className="border px-4 py-3 text-left">New Form No.</th>
              <th className="border px-4 py-3 text-left">Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Form 24Q</td>
              <td className="border px-4 py-3">Form 138</td>
              <td className="border px-4 py-3">TDS on salary payments</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Form 26Q</td>
              <td className="border px-4 py-3">Form 140</td>
              <td className="border px-4 py-3">
                TDS on non-salary payments to residents (rent, professional
                fees, contractor payments, commission etc.)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Form 27Q</td>
              <td className="border px-4 py-3">Form 144</td>
              <td className="border px-4 py-3">TDS on payments to non-residents</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Form 27EQ</td>
              <td className="border px-4 py-3">Form 143</td>
              <td className="border px-4 py-3">TCS (Tax Collected at Source)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Form 26QB / 26QC / 26QD / 26QE
              </td>
              <td className="border px-4 py-3">Form 141</td>
              <td className="border px-4 py-3">
                TDS on property purchase, rent above the threshold, and
                certain contract/commission payments by individuals (no TAN
                required — it is a combined challan-cum-statement)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee for Delayed TDS Return Filing
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        If the quarterly TDS return is filed after its due date, Section 427
        of the Income-tax Act, 2025 (earlier Section 234E) charges a
        mandatory late fee of <strong>₹200 for every day of delay</strong>,
        counted from the day after the due date until the day the return is
        actually filed. This fee is capped at the total amount of TDS
        deductible for that quarter, but it applies automatically — the
        department does not need to issue a separate order — and it must be
        paid before the return can be filed.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          If your Q1 TDS return (due 31 July 2026) is actually filed on 20
          August 2026, that is 20 days of delay. Late fee = 20 × ₹200 =
          ₹4,000 (subject to the cap of your quarter&apos;s total TDS
          amount).
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Penalty for Not Filing or Filing an Incorrect TDS Return
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Separately from the late fee, Section 461 (earlier Section 271H)
        empowers the assessing officer to levy a penalty of{" "}
        <strong>₹10,000 to ₹1,00,000</strong> if a TDS/TCS statement is not
        filed at all, or is filed with incorrect details (like a wrong PAN or
        wrong challan amount). This penalty is discretionary, and it is
        generally not levied if all of the following are satisfied:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>The TDS amount, along with applicable late fee and interest, has been deposited</li>
        <li>The return is filed within one month of the prescribed due date (this relaxation window applies from 1 April 2025)</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Interest on Late Deduction or Late Deposit of TDS
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Under Section 398(3) of the Income-tax Act, 2025 (earlier Section
        201(1A)), interest applies in two different situations:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Default</th>
              <th className="border px-4 py-3 text-left">Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">TDS not deducted at all</td>
              <td className="border px-4 py-3">1% per month</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS deducted but deposited late</td>
              <td className="border px-4 py-3">1.5% per month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Interest is calculated from the month the tax was deductible/payable
        up to the month it is actually deducted or deposited, and part of a
        month is treated as a full month — so even a one-day delay across a
        month-end can count as an extra month of interest.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 16 and Form 16A Issue Dates
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Once a TDS return is processed, the deductor has to issue TDS
        certificates to employees and vendors so they can claim credit in
        their own income tax returns:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Form 16 (Form 130) — salary TDS certificate:</strong>{" "}
          issued annually, by 15 June following the end of the financial
          year
        </li>
        <li>
          <strong>Form 16A (Form 131) — non-salary TDS certificate:</strong>{" "}
          issued quarterly, generally within 15 days of the quarterly return
          due date (around 15 August, 15 November, 15 February and 15 June)
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Delayed TDS return filing has a knock-on effect here — if the return
        itself is late, Form 16/16A also gets delayed, which can hold up
        your employees&apos; and vendors&apos; own income tax return filing
        and cause avoidable friction. Read more on{" "}
        <Link href="/blog/income-tax-return-filing-online-india" className={linkClass}>
          Income Tax Return filing
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How to Avoid Late Fee, Penalty and Interest
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Deposit TDS by the 7th of every month (30 April for March) — do not wait for the quarter to end</li>
        <li>Keep challan details (BSR code, date, amount) organised so return preparation isn&apos;t delayed by missing data</li>
        <li>File the quarterly return well before the due date, not on the last day</li>
        <li>Match deductee PAN and challan amounts carefully to avoid a rejected or defective statement</li>
        <li>If a due date is missed, file within one month and clear all dues immediately to stay within the no-penalty window</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Return Filing Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles quarterly TDS return
        preparation, challan matching, correction statements and Form
        16/16A issuance for businesses and individuals across India, with
        in-person support for clients in Ambala. We track your due dates so
        you don&apos;t pay late fee or penalty unnecessarily.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/tds-return-filing" className={linkClass}>
          TDS Return Filing service
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
        Income-tax Act, 2025 and related rules as of September 2026. Rules,
        forms and portal processes change from time to time, so please
        verify the latest position or consult a professional before acting.
      </p>
    </>
  );
}
