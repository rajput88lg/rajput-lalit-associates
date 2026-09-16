import Link from "next/link";

const faqs = [
  {
    q: "How does my employer decide how much TDS to deduct from my salary each month?",
    a: "Using the 'average rate' method: at the start of the year (and re-estimated whenever your pay or declarations change), your employer estimates your total tax liability for the full year based on your salary structure, declared investments/deductions, and chosen tax regime, then divides that by the number of months remaining to arrive at a monthly deduction. It's an estimate that gets trued up as the year progresses and you submit actual proof of investments.",
  },
  {
    q: "Which tax regime does my employer use by default?",
    a: "The new tax regime is the default from FY 2026-27 onward. If you want your employer to compute TDS under the old regime instead (to claim deductions like 80C, HRA, home loan interest), you need to formally declare that — via Form 122, which now consolidates what used to be separate Form 12B and Form 12BAA declarations.",
  },
  {
    q: "What is Form 16 now called, and when should I receive it?",
    a: "Form 16 is now Form 130 under the Income-tax Act, 2025 / Income-tax Rules, 2026 renumbering, though most people will keep calling it 'Form 16' informally for a while. Employers must issue it by 15 June following the end of the financial year. Late issuance can attract a penalty of ₹100 per day per certificate on the employer.",
  },
  {
    q: "What if I have income from a previous employer in the same financial year?",
    a: "You should report your previous employer's salary and TDS details to your current employer (this is part of what the consolidated Form 122 declaration now captures), so your current employer computes TDS on your combined annual income rather than just what they've paid you. Skipping this often causes significant tax due at return-filing time because each employer separately applied the basic exemption and slab benefit to only the income they paid.",
  },
  {
    q: "Is there a minimum salary below which no TDS is deducted?",
    a: "TDS only kicks in once your estimated annual taxable income crosses the basic exemption limit for your chosen regime — ₹4,00,000 under the new regime (FY 2026-27), or ₹2,50,000/₹3,00,000/₹5,00,000 under the old regime depending on age (below 60 / 60-79 / 80+). Below that, no TDS is deducted from your salary at all.",
  },
  {
    q: "My Form 16/Form 130 shows different numbers than my payslips — what should I do?",
    a: "Cross-check the TDS shown against your Form 26AS/AIS before filing your return — small mismatches sometimes happen due to correction returns filed by the employer after issuing your certificate, or timing differences between when salary was paid and when TDS was deposited. If genuinely different, ask your employer's payroll/finance team to clarify or issue a corrected certificate before you file.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSOnSalaryForm16Explained() {
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
        Every salaried employee has tax deducted before they even see
        their salary — but most people never learn exactly how their
        employer arrives at that monthly number, or what the certificate
        they get each June (Form 16, now officially Form 130) actually
        represents. Here's how salary TDS is calculated and what to check
        on your certificate.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Method:</strong> employer estimates your full-year tax,
            divides by remaining months
          </li>
          <li>
            <strong>Default regime:</strong> new regime unless you declare
            otherwise (via Form 122)
          </li>
          <li>
            <strong>No-TDS threshold:</strong> ₹4,00,000 (new regime) /
            varies by age (old regime)
          </li>
          <li>
            <strong>Form 16 is now Form 130</strong> — due to you by 15
            June following the financial year
          </li>
          <li>
            <strong>New Act section:</strong> 392 (old Section 192)
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How Employers Calculate Your Monthly TDS
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Employers use the "average rate" method: at the start of the
        financial year (or whenever your salary structure or tax-saving
        declarations change), they estimate your total taxable income and
        tax liability for the entire year, then divide the remaining tax
        by the number of months left. This is why your take-home can shift
        mid-year — a bonus, a salary revision, or updated investment
        proof all cause the employer to re-estimate and adjust the
        remaining months' deduction.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          New Regime Is Now the Default — You Have to Opt Out
        </h3>
        <p className="text-gray-700 leading-8">
          From FY 2026-27, your employer computes TDS under the new tax
          regime by default. If you want the old regime instead — to
          claim HRA, 80C investments, home loan interest, and similar
          deductions — you must actively declare this to your employer via{" "}
          <strong>Form 122</strong>, which now combines what used to be
          two separate forms (12B and 12BAA). Skipping this means your
          eligible deductions simply won't be factored into your monthly
          TDS, even if you're entitled to claim them.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        No-TDS Threshold by Regime
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Regime</th>
              <th className="border px-4 py-3 text-left">Basic Exemption</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">New regime (default, FY 2026-27)</td>
              <td className="border px-4 py-3">₹4,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Old regime — below 60</td>
              <td className="border px-4 py-3">₹2,50,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Old regime — 60 to 79 (senior citizen)</td>
              <td className="border px-4 py-3">₹3,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Old regime — 80+ (super senior citizen)</td>
              <td className="border px-4 py-3">₹5,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 16 Is Now Form 130
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Under the Income-tax Act, 2025 and Income-tax Rules, 2026
        renumbering, Form 16 is officially Form 130 (most people will keep
        calling it "Form 16" informally for a while). Your employer must
        issue it by <strong>15 June</strong> following the end of the
        financial year, covering the TDS deducted and deposited on your
        salary for that year. Late issuance can attract a penalty of ₹100
        per day per certificate on the employer — so a persistently
        delayed Form 16/130 is worth formally following up on.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        If You Changed Jobs Mid-Year
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Report your previous employer's salary and TDS to your current
        employer (captured in the same Form 122 declaration) so TDS gets
        computed on your combined income across both employers, not just
        what your current one paid you. Without this, both employers
        separately apply the full basic exemption and slab benefits to
        "their" portion of your income — which understates your true tax
        liability and often leaves you with a larger-than-expected amount
        due when you file your return.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Salary TDS Review &amp; ITR Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps salaried individuals verify
        their Form 16/Form 130 against Form 26AS/AIS and file accurate
        returns.{" "}
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

      <p className="text-sm text-gray-500 leading-6">
        Disclaimer: This article is for general information based on the
        Income-tax Act, 2025 (Section 392, corresponding to the old
        Section 192) and the Income-tax Rules, 2026 as applicable to FY
        2026-27, current as of September 2026. Please verify the latest
        position or consult a professional for your specific situation
        before relying on it.
      </p>
    </>
  );
}
