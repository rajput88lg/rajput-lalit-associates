import Link from "next/link";

const faqs = [
  {
    q: "I'm a freelancer with ₹60 lakh in receipts — do I need a tax audit?",
    a: "If you're a specified professional under Section 44AA and your gross receipts exceed ₹50 lakh, audit applies unless you're declaring income under Section 44ADA at 50% of receipts or higher (and your total income doesn't exceed the presumptive scheme's own limits).",
  },
  {
    q: "Does the ₹10 crore threshold apply to professionals too?",
    a: "No — the higher, digital-transaction-linked threshold of ₹10 crore is specifically for businesses (Section 44AB(a)). Professionals remain at the flat ₹50 lakh threshold with no separate digital carve-out currently notified.",
  },
  {
    q: "What counts as a 'cash' transaction for the 5% test?",
    a: "Any receipt or payment not routed through an account payee cheque, account payee bank draft, or electronic clearing/digital payment mode is treated as cash for this calculation — cash deposits and cash withdrawals both count against the 5% limit.",
  },
  {
    q: "What happens if I miss the tax audit deadline?",
    a: "A fee (previously called a penalty) applies — the lower of 0.5% of turnover or ₹1,50,000 — though it can potentially be waived for reasonable cause. Beyond the fee, a late or missing audit also complicates your ITR filing, since audit cases have their own separate ITR due date.",
  },
  {
    q: "If I'm below the threshold, can I still get a tax audit done voluntarily?",
    a: "Yes — some businesses choose a voluntary audit for lender requirements, investor due diligence, or their own financial discipline, even when not legally required.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TaxAuditSection44ABApplicabilityTurnoverLimit() {
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
        Not every business or professional needs a tax audit — and the threshold isn't a single flat number the way many people assume. It depends on whether you're running a business or a profession, and, for businesses, on how much of your turnover moves through digital/banking channels rather than cash.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Businesses: audit required above ₹1 crore turnover (₹10 crore if 95%+ transactions are digital)</li>
          <li>Professionals: audit required above ₹50 lakh gross receipts — no separate digital threshold</li>
          <li>Tax audit report due 30 September 2026; ITR for audit cases due 31 October 2026</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Turnover/Receipt Thresholds
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">Standard Threshold</th>
              <th className="border px-4 py-3 text-left">Higher Threshold (Mostly Digital)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Business</td>
                <td className="border px-4 py-3">Turnover &gt; ₹1 crore</td>
                <td className="border px-4 py-3">Turnover &gt; ₹10 crore, if cash receipts/payments each stay within 5% of the total</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Profession</td>
                <td className="border px-4 py-3">Gross receipts &gt; ₹50 lakh</td>
                <td className="border px-4 py-3">No separate digital carve-out currently — ₹50 lakh applies flat</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The ₹10 Crore Digital Threshold — How the 5% Test Works
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If your business's cash receipts and cash payments each stay within 5% of the total (i.e., 95%+ of transactions happen through banking channels — cheque, bank transfer, UPI, etc.), the audit threshold jumps from ₹1 crore to ₹10 crore. This was designed to reward genuinely digital, low-cash businesses with a much higher audit-free turnover ceiling.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Presumptive Taxation Changes the Picture
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If you're declaring income under presumptive taxation (Section 44AD for eligible businesses, or Section 44ADA for specified professionals) at or above the prescribed percentage of turnover/receipts, tax audit generally doesn't apply even if turnover exceeds the limits above — audit is typically triggered when you declare income below the presumptive rate and your total income exceeds the basic exemption limit.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Key Dates for FY 2025-26 (AY 2026-27)
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Tax audit completion: 30 September 2026</li>
          <li>Tax audit report filing (Form 3CA/3CB-3CD): 30 September 2026</li>
          <li>ITR filing for audit-applicable taxpayers: 31 October 2026</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Penalty for Non-Compliance — Now a 'Fee', Not a Penalty
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Lower of 0.5% of Turnover or ₹1,50,000
        </h3>
        <p className="text-gray-700 leading-8">
          Budget 2026 reframed this as a fee rather than a penalty, specifically to reduce litigation around it — but the exposure is real: the lower of 0.5% of total sales/turnover/gross receipts, or ₹1,50,000. It can be waived where reasonable cause for the delay is shown, but that's a discretionary relief, not an automatic one — don't treat the deadline casually on the assumption it'll be waived.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Tax audit isn't just a compliance checkbox — the reconciliation work it forces (matching books, GST returns, and TDS records) is exactly what prevents notices later. Rajput Lalit &amp; Associates handles tax audit end-to-end alongside{" "}<Link href="/income-tax-return-filing" className={linkClass}>Income Tax Return Filing</Link>. See also our{" "}<Link href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation" className={linkClass}>44ADA presumptive taxation guide</Link>{" "}if you're deciding between presumptive taxation and full books.
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
        Tax audit thresholds, due dates, and penalty structure are governed by the Income-tax Act and amended periodically (including via the Finance Act and, from FY 2026-27, the Income-tax Act 2025). This article reflects the commonly-cited position as of September 2026 — please confirm your specific applicability with a professional.
      </p>
    </>
  );
}
