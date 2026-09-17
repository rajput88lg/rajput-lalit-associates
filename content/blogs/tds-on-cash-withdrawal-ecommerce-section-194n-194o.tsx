import Link from "next/link";

const faqs = [
  {
    q: "If TDS is deducted under 194N, do I lose that money?",
    a: "No — it's a credit, not an extra cost. The 2% deducted shows up in your Form 26AS/AIS and can be claimed as TDS credit while filing your income tax return, reducing your final tax payable (or increasing your refund).",
  },
  {
    q: "Does 194N apply to withdrawals from a savings account and a current account differently?",
    a: "The ₹1 crore threshold and 2% rate generally apply per account regardless of account type, though some specific relaxations exist for certain categories of account holders (like specified government bodies) — worth checking your specific case with a professional.",
  },
  {
    q: "I sell on Amazon and my gross sales are ₹4 lakh this year — is TDS deducted?",
    a: "If you're an individual/HUF seller with gross sales through that one e-commerce operator at or below ₹5 lakh, and you've furnished your PAN, no 194O TDS should be deducted. Cross that ₹5 lakh mark and 0.1% starts applying.",
  },
  {
    q: "Is 194O TDS the same as GST TCS on e-commerce sales?",
    a: "No — they're entirely separate. Section 194O is an income-tax TDS deducted by the e-commerce operator on your gross payment; GST TCS (under Section 52 of the CGST Act) is a separate 0.5% GST-side collection. Both can apply on the same transaction, tracked in different systems (Form 26AS for TDS, GSTR-8/your GSTR-2A for TCS).",
  },
  {
    q: "What if my e-commerce operator deducted 5% instead of 0.1%?",
    a: "That usually means your PAN/Aadhaar wasn't correctly furnished or linked on the platform at the time of payment — check and update your KYC details with the platform; the higher deduction can still be claimed as credit in your ITR, but it's worth fixing to avoid it recurring.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSOnCashWithdrawalEcommerceSection194N194O() {
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
        These two TDS sections don't get anywhere near as much attention as TDS on salary or rent, but they quietly affect two very different groups — anyone who withdraws large amounts of cash, and every seller who does business through an online marketplace.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>194N: 2% TDS on cash withdrawal above ₹1 crore in a year from a bank account</li>
          <li>194O: 0.1% TDS deducted by e-commerce operators on payments to online sellers</li>
          <li>New Income-tax Act 2025: 194N → Section 393(3); 194O → Section 393(1)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 194N — TDS on Cash Withdrawal
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If your aggregate cash withdrawal from one bank, co-operative bank, or post office account crosses ₹1 crore in a financial year, the bank deducts 2% TDS on the amount above ₹1 crore. This isn't an additional tax — it's simply withheld and can be claimed as a credit when you file your ITR.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>General case: 2% TDS on cash withdrawal above ₹1 crore/year</li>
          <li>Stricter thresholds for anyone who hasn't filed ITR for the preceding relevant years: TDS can start from a lower threshold and at a higher rate — banks apply this automatically based on your PAN's filing history flag</li>
          <li>This is deducted per account per bank — if you hold accounts across multiple banks, each bank applies the ₹1 crore threshold independently</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 194O — TDS on E-commerce Operator Payments
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Scenario</th>
              <th className="border px-4 py-3 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Seller has furnished PAN/Aadhaar</td>
                <td className="border px-4 py-3">0.1%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Seller has not furnished PAN/Aadhaar</td>
                <td className="border px-4 py-3">5%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Individual/HUF seller, gross sales ≤ ₹5 lakh via that operator (with PAN furnished)</td>
                <td className="border px-4 py-3">Nil</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Company, firm, or LLP seller</td>
                <td className="border px-4 py-3">0.1% from the first payment — no ₹5 lakh exemption</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why 194O Matters for Anyone Selling Online
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If you sell through Amazon, Flipkart, or any e-commerce platform, the operator deducts this TDS at source on the gross amount paid to you (including the commission/platform fee they later deduct) — so your bank credit and your actual gross sales figure won't match exactly, and that TDS shows up in your Form 26AS/AIS to be claimed while filing your ITR.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Income-tax Act 2025 — Section Numbers
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Same Rates, New Numbers
        </h3>
        <p className="text-gray-700 leading-8">
          Under the Income-tax Act, 2025 (effective 1 April 2026), Section 194O is consolidated into Section 393(1), and Section 194N into Section 393(3) — both retain identical rates and thresholds; only the section reference on TDS certificates and returns changes going forward.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        For e-commerce sellers, tracking 194O TDS credit properly against your GST turnover and income tax return is essential — mismatches here are a common trigger for scrutiny. Rajput Lalit &amp; Associates handles ITR filing for online sellers, freelancers, and businesses with multiple TDS credits. See our{" "}<Link href="/blog/gst-tcs-ecommerce-sellers-rules" className={linkClass}>GST for E-commerce Sellers guide</Link>{" "}for the GST-side TCS obligation, or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        TDS rates and thresholds under Sections 194N and 194O (and their Income-tax Act 2025 equivalents) are subject to Finance Act amendments. This article reflects the commonly-cited position as of September 2026 — please verify your specific situation with a tax professional.
      </p>
    </>
  );
}
