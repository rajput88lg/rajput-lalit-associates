import Link from "next/link";

const faqs = [
  {
    q: "I own 2 houses and I'm salaried — which form do I file now?",
    a: "For AY 2026-27, you can file ITR-1 if your total income is otherwise within the ₹50 lakh limit and you have no capital gains or business income — the earlier restriction to a single house property has been lifted for ITR-1 and ITR-4.",
  },
  {
    q: "What is the 'representative assessee' field for?",
    a: "It applies when someone else is filing the return on your behalf in a legal capacity — for example, a guardian filing for a minor, or a legal heir filing for a deceased person's estate. Most individual taxpayers filing their own return will leave this blank/not-applicable.",
  },
  {
    q: "Why were the old capital gains rate fields removed?",
    a: "Those specific fields corresponded to tax rates (15% STCG, 10% LTCG) that were revised in an earlier Budget and no longer apply — the current rates (20% STCG, 12.5% LTCG on listed equity, for instance) are captured under the updated fields instead.",
  },
  {
    q: "Does owning 3 or more properties push me out of ITR-1/ITR-4 entirely?",
    a: "Yes — the expansion covers up to 2 house properties. Three or more still requires ITR-2 or ITR-3, depending on whether you also have business/professional income.",
  },
  {
    q: "I filed a revised return in January — why is there a late fee field now?",
    a: "A revised return filed after 31 December of the assessment year is treated as a belated revision, and the form now explicitly requires disclosing this along with any applicable late fee — a transparency change rather than a new fee itself.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NewITRFormsAY202627ChangesExplained() {
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
        Picking the right ITR form matters more than people give it credit for — filing on the wrong form can make an otherwise valid return "defective," triggering a notice under Section 139(9). Here's what actually changed for AY 2026-27, and how it affects which form fits you.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>ITR-1 and ITR-4 now allow individuals with up to 2 house properties (previously only 1)</li>
          <li>Old 15% STCG / 10% LTCG rate fields removed — those rates no longer apply</li>
          <li>New: unrealised rent field, representative assessee indicator, and stricter 80G/80GGC disclosure</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Big One: House Property Eligibility Expanded
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Previously, owning more than one house property automatically pushed you out of the simpler ITR-1 and ITR-4 forms into ITR-2 or ITR-3. For AY 2026-27, individuals with up to 2 house properties can now file under ITR-1 or ITR-4 — a meaningful simplification for anyone who, say, owns their home plus one inherited or investment property, with no other complexity.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Which Form Fits You
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Form</th>
              <th className="border px-4 py-3 text-left">Who It's For</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">ITR-1 (Sahaj)</td>
                <td className="border px-4 py-3">Resident individual, salary/pension + up to 2 house properties + other sources, total income up to ₹50 lakh, no capital gains/business income</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">ITR-2</td>
                <td className="border px-4 py-3">Individuals/HUFs with capital gains, more complex income, or not eligible for ITR-1, but no business/professional income</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">ITR-3</td>
                <td className="border px-4 py-3">Individuals/HUFs with business or professional income</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">ITR-4 (Sugam)</td>
                <td className="border px-4 py-3">Resident individuals/HUFs/firms (other than LLP) with presumptive business/professional income (44AD/44ADA/44AE) + up to 2 house properties, total income up to ₹50 lakh</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Fields Removed
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The old 15% short-term capital gains and 10% long-term capital gains fields have been dropped from the forms entirely, since those specific rates no longer apply under the current capital gains structure (STCG on listed equity is now 20%, LTCG above the exemption threshold is 12.5% — see our capital gains guide below). The Section 89A relief field (for income from foreign retirement accounts) has also been narrowed — it's now only available in ITR-2 and ITR-3, not ITR-1/ITR-4.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Fields Added
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Unrealised rent — now captured in ITR-1 and ITR-4, not just the more complex forms</li>
          <li>Representative assessee indicator — added across all ITR forms, relevant when a return is filed on behalf of another person (a minor, a deceased person's estate, etc.)</li>
          <li>Section 80G donation disclosures now require the transaction reference number and the donee's bank IFSC code</li>
          <li>Section 80GGC (political party donations) now requires the political party's name and PAN</li>
          <li>A late-fee disclosure field for revised returns filed after 31 December</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why the Extra Disclosure on 80G/80GGC
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Aimed at Fake Donation Claims
        </h3>
        <p className="text-gray-700 leading-8">
          The additional transaction-level detail required for 80G and 80GGC deductions is a direct response to widespread fake/inflated donation-receipt claims seen in recent assessment years. If you're claiming these deductions, make sure the receipt actually has the transaction reference and bank details ready to enter — a vague or unverifiable claim is now much easier for the department to flag.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Filing on the correct form the first time avoids a defective-return notice and the 15-day scramble to refile that follows. Rajput Lalit &amp; Associates handles{" "}<Link href="/income-tax-return-filing" className={linkClass}>Income Tax Return Filing</Link>{" "}for salaried individuals, business owners, and NRIs. See our{" "}<Link href="/blog/income-tax-notice-types-143-1-148-139-9-explained" className={linkClass}>Income Tax Notice Types guide</Link>{" "}if you've already received a defective-return notice.
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
        ITR form structure and eligibility criteria are notified by CBDT each assessment year and can change. This article reflects the AY 2026-27 forms as commonly understood as of September 2026 — please confirm the correct form for your situation with a professional before filing.
      </p>
    </>
  );
}
