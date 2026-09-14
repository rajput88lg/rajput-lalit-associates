import Link from "next/link";

const faqs = [
  {
    q: "What's the actual difference between Form 26AS, AIS and TIS?",
    a: "Form 26AS is narrow — it only shows tax already credited against your PAN: TDS, TCS, advance tax and self-assessment tax paid, and refunds issued. AIS (Annual Information Statement) is much broader — it shows the underlying financial transactions the department has information about: bank interest, dividends, mutual fund transactions, property deals, foreign remittances, and more, not just tax already paid. TIS (Taxpayer Information Summary) is a simplified, category-wise summary of AIS, incorporating your feedback, and it's what actually pre-fills your ITR.",
  },
  {
    q: "Why does it matter if my ITR doesn't match my AIS?",
    a: "Because the department already has that AIS data — if you file a return that doesn't report income showing in your AIS, it looks like under-reporting, which is one of the most common triggers for a scrutiny notice or an automated mismatch query. It doesn't mean every AIS entry is correct (see below), but a mismatch you can't explain is exactly the kind of red flag that invites a notice.",
  },
  {
    q: "What if an entry in my AIS is wrong or doesn't belong to me?",
    a: "You can submit feedback directly against that entry on the portal, choosing a reason such as 'Information is not fully correct,' 'Income is not taxable,' 'Information relates to other PAN/year,' or 'Information is duplicate.' This doesn't delete the entry, but it records your position, and your feedback flows into TIS (usually within 24 hours) and adjusts the pre-filled summary. Keep supporting documents for anything you dispute.",
  },
  {
    q: "Should I file my ITR based on Form 26AS or based on AIS?",
    a: "Neither exclusively — reconcile both against your own books/records, then file based on your actual income, with AIS entries you've reviewed and, where necessary, disputed via feedback. Form 26AS is authoritative for TDS/TCS credit claims (you need that to match to claim credit correctly). AIS is a much wider net that helps you catch income you might have missed reporting, but individual entries can be duplicated, wrongly attributed, or simply incorrect, so it isn't something to copy blindly either.",
  },
  {
    q: "Where do I find Form 26AS, AIS and TIS?",
    a: "All three are on the income tax e-filing portal (incometax.gov.in) after logging in. Form 26AS is under 'e-File → Income Tax Returns → View Form 26AS' (which redirects to TRACES). AIS and TIS are both under 'Services → Annual Information Statement (AIS).'",
  },
  {
    q: "What kind of income shows in AIS that doesn't show in Form 26AS?",
    a: "Savings/FD interest above the reporting threshold, dividend payments, mutual fund purchases and redemptions, securities transactions and capital gains from your broker/depository, property purchase or sale registrations, foreign remittances under the Liberalised Remittance Scheme, large cash deposits/withdrawals, high credit card spending, and even GST turnover reported in your GSTR-3B if you're a registered business. Most of these never appear in Form 26AS at all.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Form26ASAISTISReconciliationITR() {
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
        Before you file your ITR, the income tax department already has
        three separate views of your financial year — and if your return
        doesn't line up with what they can see, that's exactly what draws
        a mismatch notice later. Reconciling Form 26AS, AIS and TIS before
        filing isn't optional paperwork; it's the single most effective
        thing you can do to avoid a notice after the fact.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Form 26AS:</strong> tax already credited — TDS, TCS,
            advance/self-assessment tax, refunds
          </li>
          <li>
            <strong>AIS:</strong> broad financial data — interest,
            dividends, securities, property, foreign remittances, and more
          </li>
          <li>
            <strong>TIS:</strong> summarised, feedback-adjusted version of
            AIS — this is what pre-fills your ITR
          </li>
          <li>
            <strong>Disagree with an entry?</strong> submit feedback on
            the portal — it doesn't delete the record, but records your
            position
          </li>
          <li>
            <strong>Biggest risk:</strong> under-reporting income the
            department can already see in AIS
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 26AS vs AIS vs TIS — What Each One Actually Shows
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Document</th>
              <th className="border px-4 py-3 text-left">Shows</th>
              <th className="border px-4 py-3 text-left">Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Form 26AS</td>
              <td className="border px-4 py-3">TDS, TCS, advance tax, self-assessment tax paid, refunds</td>
              <td className="border px-4 py-3">Verifying tax credit claims match what's actually deposited against your PAN</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">AIS</td>
              <td className="border px-4 py-3">All financial transactions reported to the department — interest, dividends, securities, property, foreign remittances, cash transactions, GST turnover, etc.</td>
              <td className="border px-4 py-3">Checking what income the department already knows about, beyond just tax credits</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">TIS</td>
              <td className="border px-4 py-3">Category-wise aggregated summary of AIS, incorporating your feedback</td>
              <td className="border px-4 py-3">What actually pre-fills into your ITR form on the portal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        A Practical Pre-Filing Checklist
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          Download Form 26AS and confirm every TDS/TCS entry matches your
          own records (Form 16, Form 16A, invoices) — this protects your
          tax credit claim
        </li>
        <li>
          Go through AIS category by category — interest, dividends,
          securities/mutual fund transactions, property, foreign
          remittances — and cross-check against your own books
        </li>
        <li>
          For anything genuinely wrong, duplicated, or not yours, submit
          feedback with the correct reason rather than silently ignoring it
        </li>
        <li>
          For anything correct but not yet reported in your income
          computation, add it to your return — don't rely on TIS pre-fill
          alone to catch everything
        </li>
        <li>Re-check TIS after submitting feedback to confirm it updated before you file</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Feedback Doesn't Erase the Record — It Just Records Your Position
        </h3>
        <p className="text-gray-700 leading-8">
          A common misunderstanding: submitting AIS feedback disputing an
          entry doesn't delete it from the department's data — the
          reporting entity's original submission stays on file. What
          feedback does is put your explanation on record, which matters
          if the entry is ever questioned later. Keep the underlying proof
          (bank statements, broker contract notes, sale deeds) for
          anything you dispute, in case it's asked for.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Pre-Filing Reconciliation &amp; ITR Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates reconciles Form 26AS, AIS and TIS
        against actual income before filing every client's return, to
        catch mismatches before the department does.{" "}
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
        income tax e-filing portal's current AIS/TIS functionality and
        Form 26AS as of September 2026. Portal features and data
        categories are updated periodically — please verify the current
        functionality on the portal or consult a professional before
        relying on it for a specific filing.
      </p>
    </>
  );
}
