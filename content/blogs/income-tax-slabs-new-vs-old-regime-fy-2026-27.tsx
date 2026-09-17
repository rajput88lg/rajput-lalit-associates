import Link from "next/link";

const faqs = [
  {
    q: "Is the new tax regime compulsory now?",
    a: "It's the default — if you don't actively opt for the old regime (through the relevant declaration to your employer, or the applicable form/option while filing your ITR), the new regime applies automatically. You can still choose the old regime; it just requires an active election.",
  },
  {
    q: "Can I switch between regimes every year?",
    a: "Salaried individuals with no business income can switch between regimes each year when filing their ITR. Those with business or professional income have a more restricted ability to switch back and forth — generally a one-time option to return to the new regime once you've opted out.",
  },
  {
    q: "Does the ₹60,000 rebate mean anyone earning ₹12 lakh pays zero tax?",
    a: "For most simple salary cases, effectively yes, up to ₹12 lakh net taxable income under the new regime — but the rebate applies to tax payable up to a threshold, so it's worth confirming your exact numbers, especially near that boundary, since income just above it is taxed from the applicable slab without a smoothing mechanism in some cases.",
  },
  {
    q: "I have a home loan on a self-occupied house — does that change my answer?",
    a: "Yes, significantly — home loan interest deduction on a self-occupied property (up to ₹2 lakh under Section 24(b)) is one of the largest deductions lost entirely under the new regime, and is often the single biggest factor tilting the comparison back toward the old regime.",
  },
  {
    q: "What is the health and education cess, and does it apply to both regimes?",
    a: "It's a flat 4% additional charge computed on your total tax liability (after any rebate), and yes — it applies under both the new and old regimes.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxSlabsNewVsOldRegimeFY202627() {
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
        Since the new tax regime became the default, a lot of taxpayers assume it's automatically the better deal simply because it's the default. That's not always true — it depends heavily on how many deductions you actually claim.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>New regime (default): 7 slabs from 0% to 30%; income up to ₹12 lakh effectively tax-free via ₹60,000 rebate</li>
          <li>Old regime (opt-in): 4 slabs from 0% to 30%; income up to ₹5 lakh effectively tax-free via ₹12,500 rebate</li>
          <li>New regime is the default from FY 2025-26 onward — filing under the old regime requires an active election</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Regime Slabs
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Income Slab</th>
              <th className="border px-4 py-3 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Up to ₹4 lakh</td>
                <td className="border px-4 py-3">Nil</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹4 lakh – ₹8 lakh</td>
                <td className="border px-4 py-3">5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹8 lakh – ₹12 lakh</td>
                <td className="border px-4 py-3">10%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹12 lakh – ₹16 lakh</td>
                <td className="border px-4 py-3">15%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹16 lakh – ₹20 lakh</td>
                <td className="border px-4 py-3">20%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹20 lakh – ₹24 lakh</td>
                <td className="border px-4 py-3">25%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Above ₹24 lakh</td>
                <td className="border px-4 py-3">30%</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old Regime Slabs
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Income Slab</th>
              <th className="border px-4 py-3 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Up to ₹2.5 lakh</td>
                <td className="border px-4 py-3">Nil</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹2.5 lakh – ₹5 lakh</td>
                <td className="border px-4 py-3">5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹5 lakh – ₹10 lakh</td>
                <td className="border px-4 py-3">20%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Above ₹10 lakh</td>
                <td className="border px-4 py-3">30%</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 87A Rebate — Where the Real Difference Shows Up
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        New regime: rebate of ₹60,000, effectively making income up to ₹12 lakh tax-free (note — this is a rebate on tax payable, not a slab change; income just above ₹12 lakh loses the rebate and gets taxed from the applicable slab, so there's a steep step at that threshold). Old regime: rebate of ₹12,500, making income up to ₹5 lakh tax-free. Add the 4% health and education cess on top of the computed tax in both regimes.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        So Which One Actually Saves You More?
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The new regime disallows almost all deductions and exemptions — no Section 80C, no HRA exemption, no home loan interest deduction on a self-occupied property, and so on (a short list of exceptions remains, like the standard deduction and employer's NPS contribution under 80CCD(2)). The old regime keeps all of those available, at the cost of higher slab rates. As a rough rule of thumb: if your total genuine deductions (80C, 80D, HRA, home loan interest, etc.) add up to a large figure relative to your income, the old regime often still wins. If you claim few or no deductions, the new regime's lower rates and bigger rebate usually come out ahead.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Don't Guess — Run the Actual Numbers
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          A ₹2-3 Lakh Deduction Claimant Should Compute Both
        </h3>
        <p className="text-gray-700 leading-8">
          This isn't a decision to make on a rule of thumb alone if your deductions are in the ₹2-3 lakh range — that's exactly the zone where the answer can flip either way depending on your precise income level. Compute your actual tax liability under both regimes before deciding, or have your CA do it once at the start of the year rather than after TDS has already been deducted under the wrong assumption.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Choosing the wrong regime doesn't just cost you money — under the new default rule, salaried employees now need to actively communicate their regime choice to their employer for TDS purposes, or the new regime applies automatically. Rajput Lalit &amp; Associates helps clients compute the actual comparison and file under the regime that genuinely saves the most. See our{" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C to 80U deductions guide</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        Income tax slab rates, rebate limits, and regime rules are set by the Finance Act each year and are subject to change (including under the Income-tax Act, 2025 effective FY 2026-27). This article reflects the position as commonly understood as of September 2026 — please verify your specific computation with a professional.
      </p>
    </>
  );
}
