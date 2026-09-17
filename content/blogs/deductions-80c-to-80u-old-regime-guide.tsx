import Link from "next/link";

const faqs = [
  {
    q: "Can I claim both 80C and 80CCD(1B) in the same year?",
    a: "Yes — they're separate limits. ₹1.5 lakh under 80C/80CCC/80CCD(1) combined, plus an additional ₹50,000 specifically for NPS contribution under 80CCD(1B), for a total of up to ₹2 lakh.",
  },
  {
    q: "Is home loan interest deduction part of this list?",
    a: "Home loan interest on a self-occupied property (up to ₹2 lakh) falls under Section 24(b), which is a separate 'income from house property' deduction, not part of Chapter VI-A (80C-80U) — but it's equally blocked under the new regime, which is important to factor into your regime comparison.",
  },
  {
    q: "Can I claim 80D for my parents' health insurance even if they're not my dependents?",
    a: "Yes — 80D specifically allows a separate deduction for premium paid for parents' health insurance (up to ₹25,000, or ₹50,000 if they're senior citizens), regardless of whether they're claimed as dependents elsewhere.",
  },
  {
    q: "What documentation does 80G actually require now?",
    a: "Beyond the donation receipt, current ITR forms require the transaction reference number and the donee institution's bank IFSC code — keep both on hand from the donation receipt, since a claim without them is far more likely to be questioned.",
  },
  {
    q: "I'm under the new regime by default — can I still claim 80CCD(2)?",
    a: "Yes — employer's contribution to your NPS account under Section 80CCD(2) is one of the few deductions that remains available even under the new tax regime, up to the prescribed percentage of salary.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Deductions80CTo80UOldRegimeGuide() {
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
        If you're planning to stick with the old tax regime specifically because of your deductions, it's worth knowing exactly what qualifies and what the limits actually are — a surprising number of people either under-claim what they're entitled to, or assume a deduction still applies after switching to the new regime, where most of these simply don't work anymore.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Almost all of these deductions apply only under the old tax regime — the new regime blocks most of them</li>
          <li>80C + 80CCC + 80CCD(1) combined limit: ₹1.5 lakh; plus ₹50,000 extra under 80CCD(1B) for NPS</li>
          <li>80D (health insurance), 80E (education loan) and 80G (donations) each have their own separate limits</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 80C, 80CCC, 80CCD(1) — ₹1.5 Lakh Combined
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This is the big one. Life insurance premiums, PPF, EPF contributions, ELSS mutual funds, NSC, Sukanya Samriddhi Yojana, 5-year tax-saving fixed deposits, Senior Citizen Savings Scheme, home loan principal repayment, and children's tuition fees (up to 2 children) all draw from this single ₹1.5 lakh combined limit.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 80CCD(1B) — Extra ₹50,000 for NPS
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        A separate, additional ₹50,000 deduction is available specifically for contributions to the National Pension System (over and above the ₹1.5 lakh limit above) — bringing the total possible deduction under this group to ₹2 lakh.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Other Common Deductions
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Section</th>
              <th className="border px-4 py-3 text-left">What It Covers</th>
              <th className="border px-4 py-3 text-left">Typical Limit</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">80D</td>
                <td className="border px-4 py-3">Health insurance premium — self/family and parents</td>
                <td className="border px-4 py-3">₹25,000 (self/family); additional ₹50,000 if parents are senior citizens</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">80E</td>
                <td className="border px-4 py-3">Interest on education loan (self, spouse, children)</td>
                <td className="border px-4 py-3">No upper limit; available for 8 years from start of repayment</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">80G</td>
                <td className="border px-4 py-3">Donations to eligible charitable institutions/funds</td>
                <td className="border px-4 py-3">50% or 100% of donation, depending on the institution; some categories capped at 10% of adjusted gross total income</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">80TTA</td>
                <td className="border px-4 py-3">Savings account interest (non-senior citizens)</td>
                <td className="border px-4 py-3">₹10,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">80TTB</td>
                <td className="border px-4 py-3">All deposit interest, for senior citizens (replaces 80TTA)</td>
                <td className="border px-4 py-3">₹50,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">80U</td>
                <td className="border px-4 py-3">Self, for a person with a disability</td>
                <td className="border px-4 py-3">₹75,000 (normal disability); ₹1,25,000 (severe disability)</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Almost None of This Applies Under the New Regime
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          New Regime Blocks Most Chapter VI-A Deductions
        </h3>
        <p className="text-gray-700 leading-8">
          The new tax regime disallows the large majority of these deductions — 80C, 80D, 80E, 80G, 80TTA/TTB, and 80U among them. A short list of exceptions survives, most notably the standard deduction for salaried individuals and the employer's contribution to NPS under Section 80CCD(2). If you're claiming a meaningful amount across 80C, 80D and a home loan, that's usually the strongest case for staying with the old regime.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Getting deduction documentation right matters as much as knowing the limits — insurance premium receipts, 80G donation receipts with transaction references, and Form 16 details all need to line up with your ITR. Rajput Lalit &amp; Associates helps individuals plan and claim these deductions correctly. See our{" "}<Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>New vs Old Regime slabs comparison</Link>{" "}to decide which regime fits you, or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        Deduction limits under Sections 80C-80U are set by the Income-tax Act and revised periodically through the Finance Act. This article reflects commonly-cited limits under the old tax regime as of September 2026 — please verify current limits and your specific eligibility with a professional before claiming.
      </p>
    </>
  );
}
