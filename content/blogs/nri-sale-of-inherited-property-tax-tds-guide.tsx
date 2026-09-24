import Link from "next/link";

const faqs = [
  {
    q: "I inherited the property 2 years ago but my father bought it 20 years ago — is my gain long-term?",
    a: "Yes. For capital gains purposes, your holding period includes the previous owner's holding period, so this would almost certainly qualify as long-term capital gains, taxed at 12.5%, regardless of how recently the property actually came to you.",
  },
  {
    q: "What if I don't know what the original owner paid for the property?",
    a: "If the property was acquired before 1 April 2001, you can use its fair market value as on that date instead of the actual historical cost — a registered valuer's report is typically used to establish this, especially when original purchase records aren't available.",
  },
  {
    q: "Can I avoid all TDS if I plan to reinvest the gain under Section 54?",
    a: "You can't avoid TDS automatically just by planning to reinvest — the buyer's TDS obligation exists independently. The correct route is applying for a Form 13 lower/nil deduction certificate in advance, which factors in your planned exemption, rather than paying full TDS and waiting to claim a refund.",
  },
  {
    q: "Does the buyer need a TAN to deduct TDS on my property sale?",
    a: "Yes — since you're an NRI seller, the buyer must obtain a TAN (not just use their PAN, which would be sufficient for a resident seller transaction) and deposit the TDS under the applicable NRI-specific provision before filing the relevant TDS return.",
  },
  {
    q: "Is there a way to sell without any TDS deduction at all?",
    a: "Only via a nil-deduction Form 13 certificate, if your computed tax liability genuinely comes to zero after exemptions — otherwise, some TDS will apply, and the goal becomes getting the rate correctly reduced rather than eliminated.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NRISaleOfInheritedPropertyTaxTDSGuide() {
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
        Selling a property you've inherited in India comes with a layer of complexity that selling a self-purchased property doesn't — the cost of acquisition isn't what you paid (you likely paid nothing), and as an NRI, the buyer's TDS obligation and your own repatriation limits both need separate attention.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Buyer must deduct TDS: 12.5% (plus surcharge/cess) on LTCG, or 30% (plus surcharge/cess) on STCG</li>
          <li>Cost of acquisition = what the original owner paid (or FMV as on 1 April 2001, if acquired before that) — the previous owner's holding period counts toward yours</li>
          <li>Apply for a Form 13 lower/nil TDS certificate before the sale to avoid excess deduction</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS the Buyer Must Deduct
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Gain Type</th>
              <th className="border px-4 py-3 text-left">Holding Period</th>
              <th className="border px-4 py-3 text-left">TDS Rate (before surcharge/cess)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Long-Term Capital Gains (LTCG)</td>
                <td className="border px-4 py-3">More than 24 months</td>
                <td className="border px-4 py-3">12.5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Short-Term Capital Gains (STCG)</td>
                <td className="border px-4 py-3">24 months or less</td>
                <td className="border px-4 py-3">30%</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How Holding Period and Cost Are Calculated for Inherited Property
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Since inheritance itself isn't treated as a 'transfer' for capital gains purposes, two special rules apply, and both work in your favour: your holding period includes the time the property was held by the previous owner (so a property bought by your father in 1995 and inherited by you in 2020 is almost certainly long-term, regardless of how recently you inherited it), and your cost of acquisition is what the original owner actually paid for it — or, if it was acquired before 1 April 2001, you can use the property's fair market value as on 1 April 2001 instead, whichever benefits you.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Exemptions Still Available
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 54 (reinvestment in another residential property) can be available, subject to the standard conditions applicable to any long-term residential property sale — this isn't lost simply because the property was inherited. Additionally, Section 54EC allows exemption by investing the long-term capital gain in specified bonds (NHAI/REC) within 6 months of the sale, capped at ₹50 lakh per financial year, with a 5-year lock-in.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Reduce the TDS Upfront — Apply for Form 13
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Don't Wait to Claim a Refund Later
        </h3>
        <p className="text-gray-700 leading-8">
          The 12.5%/30% TDS rates apply on the full sale value in many practical scenarios unless a lower/nil deduction certificate is obtained in advance — not just on your actual gain. If your genuine tax liability (after cost of acquisition and any exemption) is meaningfully lower than what straight TDS would deduct, apply for a Form 13 lower/nil TDS certificate from the Assessing Officer before the sale closes. Without it, you'd otherwise have to wait until you file your ITR to claim the excess back as a refund — tying up your money for months.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Repatriating the Sale Proceeds
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Once tax is settled, repatriating proceeds abroad is capped at USD 1 million per financial year (inclusive of all other remittances from NRO-route funds), and requires Form 15CA (Part C) along with a CA-certified Form 15CB for the remittance.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Getting the TDS certificate and cost-of-acquisition documentation right before the sale closes saves months of refund-waiting later. Rajput Lalit &amp; Associates handles capital gains computation, Form 13 lower-TDS applications, and Form 15CA/15CB filing for NRI property sales. See our{" "}<Link href="/nri-lower-tds-certificate-checklist" className={linkClass}>NRI Lower TDS Certificate checklist</Link>{" "}and{" "}<Link href="/nri-fund-repatriation-guide" className={linkClass}>NRI Fund Repatriation guide</Link>, or use our{" "}<Link href="/nri-property-tds-calculator" className={linkClass}>NRI Property TDS Calculator</Link>.
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
        Capital gains and TDS rules for NRI property transactions are governed by the Income-tax Act and are subject to amendment (including under the Income-tax Act, 2025 from FY 2026-27). This article reflects the position as commonly understood as of September 2026 — please get your specific transaction reviewed by a professional before the sale.
      </p>
    </>
  );
}
