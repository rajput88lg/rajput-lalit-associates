import Link from "next/link";

const faqs = [
  {
    q: "How many people do I need to start an LLP?",
    a: "A minimum of 2 designated partners, with at least one of them resident in India (present in India for 120 days or more in the previous financial year). There's no upper limit on the number of partners, unlike a private limited company's 200-shareholder cap.",
  },
  {
    q: "Is LLP registration cheaper than a Private Limited Company?",
    a: "Generally yes for a small setup — total LLP formation cost (government fees, DSC, professional fees, stamp duty) typically runs ₹6,000-₹35,000 depending on your capital contribution and state, against a somewhat higher cost and heavier ongoing compliance for a Pvt Ltd company. But LLP loses this advantage on taxation, since it's taxed at a flat 30% with no lower-rate option, versus a Pvt Ltd's 22% concessional corporate rate.",
  },
  {
    q: "Does an LLP need a mandatory audit every year?",
    a: "No — only if the LLP's annual turnover exceeds ₹40 lakh or its capital contribution exceeds ₹25 lakh. Below both thresholds, no statutory audit is required, unlike a private limited company, which needs an audit every year regardless of turnover.",
  },
  {
    q: "Can an LLP raise funding from investors?",
    a: "Only in a limited way. An LLP cannot issue equity or preference shares, so it can't offer ESOPs or the kind of ownership stake that institutional/VC investors typically want. Foreign investment into an LLP also needs government-route approval rather than the automatic route available to most Pvt Ltd companies. If you're planning to raise external equity funding, a Private Limited Company is usually the better structure from day one.",
  },
  {
    q: "What happens if I miss the Form 11 or Form 8 filing deadline?",
    a: "Since April 2022, the late fee isn't a flat per-day amount anymore — it's a multiplier (1x to 30x the normal filing fee, depending on how many days you're delayed and whether your LLP qualifies as a 'small LLP') with no upper cap, plus a small additional per-day charge once the delay crosses 360 days. Filing on time avoids this entirely, since even a short delay pushes you into a much higher multiplier band.",
  },
  {
    q: "Which is better for my business — LLP or Private Limited Company?",
    a: "It depends on your goals. LLP suits professional practices and small partnerships that want lower compliance cost and don't plan to raise equity funding. Private Limited Company suits businesses planning to raise investment, offer ESOPs, or eventually go for an IPO, despite its heavier compliance and audit requirements. Many businesses also start as an LLP and convert to a Pvt Ltd company later once they need external funding.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function LLPRegistrationProcessCostVsPvtLtd() {
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
        An LLP (Limited Liability Partnership) is a popular middle ground
        for professionals and small businesses — it gives partners limited
        liability protection like a company, but with simpler compliance
        than a Private Limited Company. Here's the registration process,
        realistic cost, and how it actually compares to a Pvt Ltd company
        once you look past the headline fee difference.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Minimum:</strong> 2 designated partners, at least 1
            resident in India
          </li>
          <li>
            <strong>Total cost:</strong> roughly ₹6,000-₹35,000 depending on
            capital contribution and state
          </li>
          <li>
            <strong>Process:</strong> DSC → name reservation (RUN-LLP) →
            incorporation (FiLLiP) → LLP Agreement (Form 3)
          </li>
          <li>
            <strong>Audit:</strong> only if turnover &gt; ₹40 lakh or
            contribution &gt; ₹25 lakh
          </li>
          <li>
            <strong>Tax rate:</strong> flat 30% — no concessional rate like
            a Pvt Ltd company's 22%
          </li>
          <li>
            <strong>Annual filing:</strong> Form 11 by 30 May, Form 8 by 30
            October
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Registration Process
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Obtain a Digital Signature Certificate (DSC) for each designated partner</li>
        <li>Reserve your LLP name via the <strong>RUN-LLP</strong> form (₹200 government fee)</li>
        <li>File <strong>FiLLiP</strong> (Form for Incorporation of LLP) with the required documents and capital contribution details</li>
        <li>Draft and file the <strong>LLP Agreement via Form 3</strong> within 30 days of incorporation — this document governs profit-sharing, partner duties, and internal management</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Government Fees by Capital Contribution
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Capital Contribution</th>
              <th className="border px-4 py-3 text-left">FiLLiP / Form 3 Fee (each)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Up to ₹1,00,000</td>
              <td className="border px-4 py-3">₹500</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">₹1,00,001 – ₹5,00,000</td>
              <td className="border px-4 py-3">₹2,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">₹5,00,001 – ₹10,00,000</td>
              <td className="border px-4 py-3">₹4,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Above ₹10,00,000</td>
              <td className="border px-4 py-3">₹5,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        On top of this, budget for DSC (roughly ₹2,500 per partner) and
        state-dependent stamp duty on the LLP Agreement — this varies
        widely, from as low as ₹100 in some northeastern states to around
        1% of capital (capped at ₹15,000) in Maharashtra. Total realistic
        cost, including professional fees, typically works out to
        ₹6,000-₹35,000 for a small LLP.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          LLP vs Private Limited Company — The Real Trade-Off
        </h3>
        <p className="text-gray-700 leading-8 mb-4">
          LLP wins on setup cost and day-to-day compliance simplicity, but
          loses on taxation and fundraising:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Tax rate:</strong> LLP flat 30% (34.944% effective above ₹1 crore income with surcharge+cess) vs Pvt Ltd's 22% concessional rate (~25.17% effective) under Section 115BAA</li>
          <li><strong>Audit:</strong> LLP only above ₹40L turnover/₹25L contribution; Pvt Ltd mandatory every year regardless of size</li>
          <li><strong>Fundraising:</strong> LLP cannot issue shares/ESOPs and needs government-route approval for FDI; Pvt Ltd can raise equity freely and qualifies for automatic-route FDI in most sectors</li>
          <li><strong>Annual compliance cost:</strong> roughly ₹5,000-₹10,000 for LLP vs ₹15,000-₹30,000 for Pvt Ltd</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Annual Compliance — Form 11 and Form 8
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Form</th>
              <th className="border px-4 py-3 text-left">Purpose</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Form 11</td>
              <td className="border px-4 py-3">Annual Return — partner and contribution details as on 31 March</td>
              <td className="border px-4 py-3">30 May</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Form 8</td>
              <td className="border px-4 py-3">Statement of Account & Solvency</td>
              <td className="border px-4 py-3">30 October</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Both filings are mandatory every year regardless of whether the LLP
        did any business. Since April 2022, missing these deadlines no
        longer attracts a flat ₹100/day penalty — it's now a{" "}
        <strong>multiplier on the normal filing fee</strong> (1x within 15
        days, rising sharply the longer you delay, up to 15x-30x beyond 360
        days depending on whether you qualify as a "small LLP"), with no
        overall cap. This makes even a short delay considerably more
        expensive than most people expect.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        LLP Registration & Compliance Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles LLP incorporation, LLP
        Agreement drafting, and annual ROC compliance end-to-end.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/company-registration" className={linkClass}>
          Business Registration service
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

      <p className="text-sm text-gray-500 leading-6">
        Disclaimer: This article is for general information based on the
        Limited Liability Partnership Act, 2008, MCA fee rules, and
        Income-tax provisions as applicable to FY 2026-27, current as of
        September 2026. Government fees, stamp duty rates, and late-fee
        multipliers are subject to periodic revision — please verify the
        current position on the MCA portal or consult a professional before
        relying on it.
      </p>
    </>
  );
}
