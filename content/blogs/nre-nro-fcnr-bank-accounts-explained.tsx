import Link from "next/link";

const faqs = [
  {
    q: "I'm an NRI with rental income and a fixed deposit in India — which account do I need?",
    a: "Your Indian rental income must go into an NRO account, since NRO is specifically for income earned within India (rent, dividends, pension, capital gains). Your existing resident savings account, once you become an NRI, also needs to be converted to (or replaced by) an NRO account — you can't continue operating a regular resident savings account after your status changes.",
  },
  {
    q: "Is interest on my NRE account really completely tax-free?",
    a: "Yes — interest earned on an NRE account is 100% exempt from Indian income tax under Section 10(4)(ii), with no TDS deducted. This applies only while you genuinely hold NRI status; if you return to India and your residential status changes, this exemption stops applying going forward.",
  },
  {
    q: "How much money can I repatriate (send back abroad) from each account type?",
    a: "NRE and FCNR accounts allow fully unrestricted repatriation of both principal and interest, anytime. NRO is more limited: repatriation of NRO balances is capped at USD 1 million per financial year, and requires Form 15CA (self-declaration) plus a CA-certified Form 15CB confirming taxes have been paid — current income like rent or pension is freely transferable, but capital/accumulated balances hit this cap.",
  },
  {
    q: "What's the advantage of FCNR over NRE if both give tax-free interest?",
    a: "The key difference is currency risk. NRE and NRO accounts hold funds in Indian Rupees, so your foreign-currency deposits get converted to INR at the prevailing exchange rate — if the rupee depreciates against your currency, you gain, but if it appreciates, you lose value in your original currency terms. FCNR deposits stay in the original foreign currency (USD, GBP, EUR, JPY, CAD, AUD) throughout the tenure, completely eliminating this exchange rate risk — useful if you want certainty in your home currency rather than betting on rupee movement.",
  },
  {
    q: "Can I open a joint account with a resident Indian family member?",
    a: "For NRE and FCNR accounts, a resident Indian can only be added as a joint holder on a 'former or survivor' basis (meaning the NRI must be the primary/first holder) — the resident cannot operate the account independently during the NRI's lifetime. NRO accounts have more flexibility for joint holding with residents, since the funds are Indian-sourced. Always confirm the exact joint-holding rules with your bank, as implementation can vary.",
  },
  {
    q: "What happens to these accounts if I move back to India permanently?",
    a: "Once your residential status changes to resident, NRE and FCNR accounts typically need to be converted to resident accounts (or RFC — Resident Foreign Currency — accounts if you want to retain foreign currency holdings), and the special tax exemptions on interest stop applying from that point. NRO accounts generally continue, since they were already handling India-sourced income. It's worth planning this conversion with your bank around your actual return date rather than leaving it to be sorted out later.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NREandNROandFCNRBankAccountsExplained() {
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
        NRIs routinely mix up NRE, NRO, and FCNR accounts — and getting it
        wrong isn't just inconvenient, it can mean losing tax-free status
        on interest you earned, or running into repatriation limits you
        didn't expect. The difference comes down to one question: where did
        the money come from? Here's exactly which account holds what, and
        why it matters.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>NRE:</strong> foreign income only, INR, tax-free
            interest, fully repatriable
          </li>
          <li>
            <strong>NRO:</strong> Indian-sourced income, INR, interest
            taxable + TDS, repatriation capped at $1M/year
          </li>
          <li>
            <strong>FCNR:</strong> foreign income, held in foreign
            currency, tax-free interest, fully repatriable, no exchange
            rate risk
          </li>
          <li>
            <strong>Rule of thumb:</strong> money earned abroad → NRE/FCNR;
            money earned in India → NRO
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Three Accounts, Side by Side
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Feature</th>
              <th className="border px-4 py-3 text-left">NRE</th>
              <th className="border px-4 py-3 text-left">NRO</th>
              <th className="border px-4 py-3 text-left">FCNR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Source of funds</td>
              <td className="border px-4 py-3">Foreign income only</td>
              <td className="border px-4 py-3">Indian-sourced income</td>
              <td className="border px-4 py-3">Foreign income only</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Currency held in</td>
              <td className="border px-4 py-3">Indian Rupees</td>
              <td className="border px-4 py-3">Indian Rupees</td>
              <td className="border px-4 py-3">Foreign currency (USD, GBP, EUR, JPY, CAD, AUD)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Account type</td>
              <td className="border px-4 py-3">Savings/current/FD</td>
              <td className="border px-4 py-3">Savings/current/FD</td>
              <td className="border px-4 py-3">Fixed deposit only</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Interest tax in India</td>
              <td className="border px-4 py-3">Tax-free (Sec 10(4)(ii))</td>
              <td className="border px-4 py-3">Taxable, 30%+surcharge+cess TDS</td>
              <td className="border px-4 py-3">Tax-free (Sec 10(15)(iv)(fa))</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Repatriation</td>
              <td className="border px-4 py-3">Fully unrestricted</td>
              <td className="border px-4 py-3">Capped at USD 1M/year (Form 15CA/15CB)</td>
              <td className="border px-4 py-3">Fully unrestricted</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Exchange rate risk</td>
              <td className="border px-4 py-3">Yes (INR-denominated)</td>
              <td className="border px-4 py-3">Yes (INR-denominated)</td>
              <td className="border px-4 py-3">No (stays in original currency)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The One Question That Decides Which Account You Need
        </h3>
        <p className="text-gray-700 leading-8">
          Ask: "Did this money originate outside India, or inside India?"
          Salary from a foreign employer, business income earned abroad,
          or foreign investment proceeds → NRE or FCNR. Rent from an
          Indian property, dividends from Indian shares, a pension paid in
          India, or proceeds from selling Indian property → NRO. Mixing
          these up isn't just a paperwork issue — depositing Indian-sourced
          income into an NRE account can jeopardise its tax-free status and
          create compliance problems when the source is questioned.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Repatriation — Where the Real Difference Shows Up
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        NRE and FCNR balances (both principal and interest) can be moved
        back abroad without restriction, through standard banking
        procedures. NRO is more constrained: repatriating NRO funds is
        capped at <strong>USD 1 million per financial year</strong>, and
        requires filing <strong>Form 15CA</strong> (a self-declaration)
        along with a <strong>CA-certified Form 15CB</strong> confirming
        applicable taxes have been paid on the funds. Current income like
        rent or pension can generally move more freely, but accumulated
        balances and capital receipts fall under this yearly cap.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        NRI Banking, Tax &amp; ITR Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps NRIs choose the right account
        structure, handle TDS on NRO interest, and file accurate returns.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/tools" className={linkClass}>
          NRI Tax Tools
        </Link>
        {" "}for residential status and TDS calculators.
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
        Disclaimer: This article is for general information based on FEMA
        regulations, RBI guidelines, and Income Tax Act provisions as
        applicable for FY 2026-27, current as of September 2026. Bank-specific
        joint-holding rules and procedures can vary — please verify the
        current position with your bank or consult a professional before
        relying on it.
      </p>
    </>
  );
}
