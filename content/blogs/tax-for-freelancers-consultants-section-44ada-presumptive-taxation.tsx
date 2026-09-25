import Link from "next/link";

const faqs = [
  {
    q: "Who exactly can use Section 44ADA — is it just for freelancers?",
    a: "It's for 'specified professionals' under Section 44AA: legal, medical, engineering, architectural, accountancy, technical consultancy, and interior decoration professionals, plus company secretaries, film artists, authorised representatives, and IT/technical consultants. Only resident individuals, HUFs, and partnership firms can use it — LLPs and non-residents are not eligible, regardless of profession.",
  },
  {
    q: "Do I really not need to maintain any books of account?",
    a: "Correct — if you declare at least 50% of your gross receipts as taxable income under Section 44ADA, you're exempt from maintaining detailed books under Section 44AA and from a tax audit under Section 44AB, no matter how large your receipts are (as long as you're within the ₹50 lakh/₹75 lakh limit). This is the main appeal of the scheme for solo professionals.",
  },
  {
    q: "What happens if my actual profit margin is less than 50%?",
    a: "You can still declare your real (lower) profit, but then you must maintain proper books of account under Section 44AA, and if your total income exceeds the basic exemption limit, you also need a tax audit under Section 44AB. This is the main trade-off: declaring less than 50% brings back full compliance for that year.",
  },
  {
    q: "If I opt out one year, can I go back to 44ADA later?",
    a: "Yes — unlike Section 44AD (for businesses), which locks you out of the presumptive scheme for 5 assessment years if you opt out, Section 44ADA has no such lock-in. Professionals can move between presumptive taxation and regular books-based computation from year to year based on what suits them.",
  },
  {
    q: "How does the ₹75 lakh limit work — do I need to track every payment mode?",
    a: "Yes. The enhanced ₹75 lakh limit applies only if at least 95% of your gross receipts (by value) come through banking channels — account payee cheque, NEFT, RTGS, UPI, IMPS, card payments, or account payee demand draft. If cash receipts exceed 5% of your total receipts, you're capped at the standard ₹50 lakh limit instead.",
  },
  {
    q: "Do I still have to pay advance tax if I'm under 44ADA?",
    a: "Yes, but with a simplification: instead of the usual four instalments through the year, professionals opting for presumptive taxation under 44ADA can pay their entire advance tax liability in a single instalment on or before 15 March of the financial year, without attracting interest for earlier non-payment.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TaxForFreelancersConsultantsSection44ADAPresumptiveTaxation() {
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
        Freelancers, consultants, and independent professionals often
        overcomplicate their tax filing by maintaining full books of account
        when a much simpler route exists. Section 44ADA lets eligible
        professionals declare a flat 50% of their receipts as taxable
        income — no books, no audit — as long as they stay within the
        limits. Here's exactly who qualifies and how it works.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Who:</strong> resident individuals/HUFs/partnership firms
            in specified professions (legal, medical, engineering, IT
            consultancy, CS, etc.)
          </li>
          <li>
            <strong>Presumption:</strong> 50% of gross receipts = taxable
            income, no expense proof needed
          </li>
          <li>
            <strong>Limit:</strong> ₹50 lakh (standard) or ₹75 lakh if 95%+
            receipts are via banking channels
          </li>
          <li>
            <strong>Declare below 50%:</strong> books (Sec 44AA) + audit
            (Sec 44AB) become mandatory
          </li>
          <li>
            <strong>Advance tax:</strong> single instalment by 15 March
            instead of 4
          </li>
          <li>
            <strong>No 5-year lock-in</strong> if you opt out — unlike
            Section 44AD for businesses
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Can Use Section 44ADA
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 44ADA is limited to "specified professionals" notified under
        Section 44AA — legal, medical, engineering, architectural,
        accountancy, technical consultancy, and interior decoration
        professionals, along with company secretaries, film artists,
        authorised representatives, and IT/technical consultants. Only{" "}
        <strong>resident individuals, HUFs, and partnership firms</strong>{" "}
        can opt for it; LLPs and non-resident taxpayers are excluded,
        whatever their profession.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The 50% Presumption — And the Receipts Limit
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Condition</th>
              <th className="border px-4 py-3 text-left">Gross Receipts Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Standard</td>
              <td className="border px-4 py-3">₹50 lakh/year</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                95%+ of receipts via banking channels (cheque, NEFT, RTGS,
                UPI, IMPS, card, DD)
              </td>
              <td className="border px-4 py-3">₹75 lakh/year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Within these limits, you simply declare <strong>50% of your gross
        professional receipts</strong> as taxable income. This 50% is
        deemed to cover all your business expenses — internet, software
        subscriptions, travel, office rent, and so on — so you can't claim
        any of these separately once you're under presumptive taxation.
        You're free to declare a higher percentage than 50% voluntarily if
        your actual profit margin is better.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Declaring Less Than 50%? Full Compliance Comes Back
        </h3>
        <p className="text-gray-700 leading-8">
          If your genuine profit margin is below 50% and you declare that
          lower figure instead, you lose the "no books, no audit" benefit
          for that year: you must maintain proper books of account under
          Section 44AA, and if your total income exceeds the basic
          exemption limit, a tax audit under Section 44AB also becomes
          mandatory. Many professionals stick with the 50% presumption
          purely to avoid this, even when their real margin is a bit lower.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advance Tax — One Payment, Not Four
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Professionals opting for Section 44ADA get a genuine compliance
        simplification on advance tax: instead of the usual four
        instalments spread across June, September, December, and March,
        you can pay your <strong>entire advance tax liability in one
        instalment on or before 15 March</strong> of the financial year,
        without interest for not paying earlier instalments.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Switching In and Out — No 5-Year Lock-In
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        A common point of confusion: Section 44AD (for small businesses)
        locks a taxpayer out of presumptive taxation for 5 assessment
        years if they opt out after using it. Section 44ADA has{" "}
        <strong>no equivalent lock-in</strong> — professionals can move
        between presumptive taxation and regular books-based computation
        year to year, depending on which works out better, without any
        penalty for switching.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Presumptive Tax Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps freelancers and consultants
        decide whether Section 44ADA suits their situation, and files
        accurate presumptive-income returns.{" "}
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

      <div className="mb-10 rounded-2xl border border-[#002b5c]/15 bg-[#f7f9fc] p-6">
        <p className="font-bold text-[#002b5c] text-lg">Earning from foreign clients?</p>
        <p className="mt-2 text-gray-700 leading-7">
          Use our free checker to see whether you need GST registration, a LUT
          and which ITR route fits — then let us file it for you.{" "}
          <Link href="/freelancer-tax-services" className={linkClass}>
            Freelancer tax services &amp; checker
          </Link>
        </p>
      </div>

      <p className="text-sm text-gray-500 leading-6">
        Disclaimer: This article is for general information based on
        Section 44ADA of the Income-tax Act, 1961 (as applicable for FY
        2025-26/AY 2026-27) as of September 2026. From 1 April 2026 (tax year
        2026-27 onwards) the presumptive schemes of Sections 44AD, 44ADA and
        44AE are consolidated into Section 58 of the Income-tax Act, 2025.
        Please verify the current position or consult a
        professional for your specific situation before relying on it.
      </p>
    </>
  );
}
