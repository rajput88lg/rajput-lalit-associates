import Link from "next/link";

const faqs = [
  {
    q: "I'm an NRI with only interest income from an NRO account — do I need to file?",
    a: "If that interest income (after TDS) exceeds the basic exemption limit, yes. Below that limit, filing may not be mandatory on income grounds alone, but it's still worth checking whether you meet any of the specific high-value transaction triggers, and filing anyway is often useful to claim any excess TDS as a refund.",
  },
  {
    q: "Can I file ITR-4 since my income is simple?",
    a: "No — ITR-4 (Sugam) is restricted to residents. As an NRI, even simple presumptive business income must be reported through ITR-3, which is more detailed than ITR-4 but is the only correct option available to you.",
  },
  {
    q: "Do I need a Tax Residency Certificate every year?",
    a: "Yes — a TRC is typically valid only for the specific year(s) it's issued for, so you'll generally need a fresh one each financial year you want to claim DTAA relief.",
  },
  {
    q: "What if my country of residence doesn't issue TRCs in the format Indian authorities expect?",
    a: "Form 10F exists precisely for this — it lets you self-declare the additional required details (like your foreign Tax Identification Number) online when your TRC doesn't cover everything India's tax department wants to see.",
  },
  {
    q: "Does DTAA relief mean I pay zero tax in India?",
    a: "Not necessarily zero — it typically means you don't pay tax twice on the same income. Depending on the treaty and method (exemption vs credit), you might still pay some tax in India, but get a corresponding credit/exemption in your country of residence, or vice versa.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NRIITRFilingWhichFormDTAARelief() {
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
        A lot of NRIs assume they don't need to file an Indian ITR at all if they have no Indian income, or assume the opposite — that any Indian income at all triggers mandatory filing. Neither assumption is quite right; it depends on specific thresholds and trigger conditions.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>NRIs file ITR-2 (no business/professional income) or ITR-3 (with business/professional income) — never ITR-1 or ITR-4</li>
          <li>Filing can be mandatory even below the exemption limit, in specific high-value transaction situations</li>
          <li>DTAA relief requires Form 10F plus a Tax Residency Certificate from your country of residence</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Which ITR Form Applies to You
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        ITR-1 and ITR-4 are resident-only forms — an NRI cannot use either, regardless of how simple their income is. That leaves:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>ITR-2 — for NRIs with salary, house property, capital gains, or other-source income, but no business or professional income</li>
          <li>ITR-3 — for NRIs who have business or professional income in India (including presumptive income under 44AD/44ADA, which for a non-resident still routes through ITR-3, not ITR-4)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        When Filing Becomes Mandatory
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Filing is required if your total Indian income exceeds the basic exemption limit — but also, independently, if any of these specific high-value conditions apply, even if your income itself is below the exemption limit:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Deposited more than ₹1 crore (aggregate) in one or more current accounts during the year</li>
          <li>Spent more than ₹2 lakh on foreign travel for yourself or another person</li>
          <li>Paid an electricity bill exceeding ₹1 lakh in the year</li>
          <li>Certain other specified high-value transactions notified from time to time</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Claiming DTAA Relief
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If you're taxed on the same income both in India and your country of residence, India's Double Taxation Avoidance Agreements (DTAA) with most countries let you claim relief — either through the exemption method or the credit (tax offset) method, depending on the specific treaty and income type. To actually claim this relief in your ITR:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Obtain a Tax Residency Certificate (TRC) from the tax authority of your country of residence, confirming your resident status there</li>
          <li>File Form 10F online (linking your foreign TIN/tax identification details) if the TRC doesn't already contain all the details Indian tax authorities require</li>
          <li>Report the specific treaty article being relied upon in your ITR's schedule for tax relief</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Determine Your Residential Status First
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          DTAA Relief Only Matters Once Status Is Settled
        </h3>
        <p className="text-gray-700 leading-8">
          All of this assumes you've correctly determined your residential status for the year — resident, non-resident, or RNOR (Resident but Not Ordinarily Resident) — since your Indian tax liability and DTAA eligibility both hinge on this. If you're unsure, use our residential status calculator before assuming NRI treatment automatically applies.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        NRI tax filing has more moving parts than a resident's return — the wrong ITR form alone can trigger a defective-return notice. Rajput Lalit &amp; Associates files ITRs for NRIs across the US, UK, Gulf countries, and elsewhere. Check your status with our{" "}<Link href="/nri-residential-status-calculator" className={linkClass}>NRI Residential Status Calculator</Link>, or see our{" "}<Link href="/nri-itr-filing-requirement-checker" className={linkClass}>NRI ITR Filing Requirement Checker</Link>.
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
        ITR form applicability, mandatory filing conditions, and DTAA claim procedures are governed by the Income-tax Act and relevant tax treaties, and are subject to amendment. This article reflects the position as commonly understood as of September 2026 — please get your specific situation reviewed by a professional.
      </p>
    </>
  );
}
