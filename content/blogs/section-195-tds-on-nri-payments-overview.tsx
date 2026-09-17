import Link from "next/link";

const faqs = [
  {
    q: "Does Section 195 apply to a one-time payment, or only regular/recurring ones?",
    a: "It applies to any payment to a non-resident that constitutes taxable income in India — one-time or recurring makes no difference; a single large payment (like a one-off consulting fee or royalty) is just as much under Section 195 as a recurring monthly payment.",
  },
  {
    q: "I'm paying less than ₹5 lakh total this year — do I still need Form 15CA?",
    a: "Yes, Form 15CA is still generally required for foreign remittances, but below the ₹5 lakh aggregate threshold, the simpler Part A self-declaration usually suffices without needing a separate Form 15CB CA certificate.",
  },
  {
    q: "Who is liable if I deduct too little TDS under Section 195?",
    a: "You, as the payer, are primarily liable — for the shortfall in TDS, plus interest, and potential disallowance of the expense in your own tax computation, regardless of whether the NRI recipient later pays the correct tax themselves in their own return.",
  },
  {
    q: "Can the non-resident's DTAA benefit reduce my TDS obligation as the payer?",
    a: "Yes, if the DTAA between India and their country of residence provides a lower rate for that specific type of income, and they provide you a valid Tax Residency Certificate and Form 10F — the CA certifying Form 15CB will factor this in when advising the applicable rate.",
  },
  {
    q: "Is Section 195 only for individuals, or does it apply to payments to foreign companies too?",
    a: "It applies broadly to any non-resident payee — individuals, foreign companies, and foreign firms alike — though the applicable rate for 'other income' differs (30% for non-corporate non-residents vs 40% for foreign companies, before surcharge/cess).",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Section195TDSOnNRIPaymentsOverview() {
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
        Section 195 is the broadest TDS provision in Indian tax law when it comes to non-residents — almost any payment made by a resident to an NRI or foreign entity that constitutes taxable income in India falls under it, at a rate that depends entirely on what kind of income it is.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Section 195 covers TDS on virtually any payment made to a non-resident, at rates varying by income type</li>
          <li>Form 15CB (CA certificate) required when aggregate remittances to one non-resident exceed ₹5 lakh/year</li>
          <li>New Income-tax Act 2025: Section 195 → Section 393(2)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Rate Table by Income Type
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Payment Type</th>
              <th className="border px-4 py-3 text-left">Base Rate*</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Long-term capital gains (equity, above ₹1.25L exemption)</td>
                <td className="border px-4 py-3">12.5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Short-term capital gains (equity)</td>
                <td className="border px-4 py-3">15%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Interest on foreign currency borrowing (Section 194LC route)</td>
                <td className="border px-4 py-3">5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Royalty</td>
                <td className="border px-4 py-3">20% (DTAA may reduce to 10-15%)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Fees for Technical Services</td>
                <td className="border px-4 py-3">20% (DTAA may reduce to 10-15%)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Other interest / other income</td>
                <td className="border px-4 py-3">30% (40% for foreign companies)</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Cess and Surcharge — Add Separately
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        *The rates above are base rates before the applicable surcharge (for high-value payments) and 4% health and education cess, which apply on top for individuals/HUF payees. DTAA rates, when applicable and beneficial, are typically applied as flat rates without additional surcharge/cess layered on.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 15CA / 15CB — When You Need a CA Certificate
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          ₹5 Lakh Aggregate Threshold
        </h3>
        <p className="text-gray-700 leading-8">
          Whenever aggregate remittances to a single non-resident in a financial year exceed ₹5 lakh, a Chartered Accountant's certificate (Form 15CB) is required before you file Form 15CA (Part C) — the CA verifies the nature of payment, correct TDS rate applied, and DTAA position if relied upon. Below that threshold, a simpler self-declaration (Form 15CA Part A) generally suffices without needing a CA certificate.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why the Payer's Responsibility Matters Here
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Under Section 195, it's the person making the payment (not the NRI receiving it) who is responsible for deducting the correct TDS and depositing it — get the rate wrong, and the payer faces interest, potential disallowance of the expense, and penalty exposure, not just the recipient. This is why businesses making any payment abroad — royalty, technical service fees, professional fees, or even a property purchase from an NRI — need to get the Section 195 classification right before releasing payment, not after.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Lower/Nil Deduction Route
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Just as with property sales, the NRI recipient can apply for a lower or nil TDS certificate (Form 13/Form 15C/15D depending on the exact category) from the Assessing Officer if their actual tax liability is lower than the standard Section 195 rate would deduct — worth doing in advance rather than waiting to claim a refund via ITR.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Income-tax Act 2025
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Effective 1 April 2026, Section 195 is absorbed into Section 393(2) as the residuary TDS provision for non-resident payments (reported under Table Serial No. 17). Rates and compliance requirements remain unchanged — only the section reference on Form 27Q and related documentation updates.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        If your business regularly pays a non-resident vendor, consultant, or licensor, getting the Section 195 rate and 15CB certification right protects you, not just the recipient. Rajput Lalit &amp; Associates handles Section 195 TDS compliance and 15CA/15CB certification. See our{" "}<Link href="/blog/nri-fund-repatriation-guide" className={linkClass}>NRI Fund Repatriation guide</Link>{" "}and{" "}<Link href="/blog/nri-lower-tds-certificate-checklist" className={linkClass}>NRI Lower TDS Certificate checklist</Link>, or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        Section 195 TDS rates depend on the specific nature of income and applicable DTAA, and are subject to Finance Act amendment (including the Income-tax Act, 2025 renumbering from FY 2026-27). This article reflects the position as commonly understood as of September 2026 — please get your specific payment classified by a professional before remitting.
      </p>
    </>
  );
}
