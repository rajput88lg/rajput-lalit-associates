import Link from "next/link";

const faqs = [
  {
    q: "I got a Section 143(1) intimation showing a demand — is this the same as a 'notice'?",
    a: "It's technically an 'intimation', not a scrutiny notice, and it's fully automated — the department's system compares your return with its own records (Form 26AS, AIS, TDS data) and flags mismatches like income differences, TDS discrepancies, or arithmetic errors. If you agree with the demand, pay it; if you don't, you can respond online with supporting documents or file a rectification request under Section 154.",
  },
  {
    q: "By when must the department send a 143(1) intimation?",
    a: "Within 9 months from the end of the financial year in which you filed your return. For example, a return filed during FY 2026-27 can get a 143(1) intimation up to 31 December 2027. If nothing arrives within that window, your ITR-V acknowledgment itself is treated as the final intimation.",
  },
  {
    q: "What's the difference between a defective return (139(9)) and a return selected for scrutiny (143(2))?",
    a: "A defective return notice under Section 139(9) flags a technical or completeness problem with the return itself — wrong ITR form, missing schedules, or a mismatch like TDS claimed without corresponding income shown — and gives you 15 days to refile the corrected version. Scrutiny under Section 143(2) is different: it's a detailed examination of a properly-filed return's substance (your claimed income, deductions, and exemptions), and can only be issued within 3 months from the end of the financial year in which you filed.",
  },
  {
    q: "How long does the department have to reopen my case and send a Section 148 notice?",
    a: "As amended by the Finance (No. 2) Act 2024 (effective 1 September 2024), the normal limit is 3 years and 3 months from the end of the relevant assessment year. This extends to 5 years and 3 months only if the Assessing Officer has evidence that the escaped income is ₹50 lakh or more — a big reduction from the earlier regime, where the extended window went up to 10 years. Older articles online may still quote the 10-year figure, so always check the notice date against the current, shorter limits.",
  },
  {
    q: "Can the department reopen my case without giving me a chance to respond first?",
    a: "No — since the Finance Act 2021 introduced Section 148A, a Section 148 reassessment notice cannot be issued directly. The Assessing Officer must first conduct a preliminary inquiry, issue a show-cause notice disclosing the information they have against you, give you 7-30 days to reply, and only then pass a reasoned order deciding whether to proceed. The Supreme Court has held that skipping this step makes the eventual Section 148 notice invalid.",
  },
  {
    q: "What happens if I simply ignore any of these notices?",
    a: "Ignoring a 139(9) defective return notice for 15 days (without seeking an extension) can get your return treated as if it was never filed, with consequences like loss of carried-forward losses and specific exemptions. Ignoring a 143(2) scrutiny notice or a 148 reassessment notice can lead to a best-judgment assessment against you under Section 144, usually with a higher tax demand than if you had responded and explained your position.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxNoticeTypes143_1_148_139_9Explained() {
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
        An income tax notice can sound alarming, but most of them aren't —
        many are routine, automated communications rather than signs of
        wrongdoing. The trouble is that people often don't know which
        notice they've received, how urgently they need to act, or what
        the consequences of ignoring it actually are. Here's a plain-language
        breakdown of the three notices that reach the most taxpayers —
        143(1), 139(9), and 148 — plus a quick-reference table for the
        others you might come across.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>143(1):</strong> automated intimation after processing —
            refund, demand, or no change
          </li>
          <li>
            <strong>139(9):</strong> your return has a technical defect —
            fix and refile within 15 days
          </li>
          <li>
            <strong>148:</strong> department believes income has escaped
            assessment — reopens a past year
          </li>
          <li>
            <strong>148 time limit (post Sep 2024):</strong> 3 yrs 3 months
            normally, 5 yrs 3 months if escaped income ≥ ₹50 lakh
          </li>
          <li>
            <strong>Respond, don't ignore</strong> — silence usually makes
            the outcome worse, not better
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 143(1) — Intimation After Processing
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This is the most common communication every filer gets — an
        automated intimation from the Centralised Processing Centre (CPC)
        after your return is processed, comparing what you filed against
        the department's own records (Form 26AS, AIS, TDS statements). It
        shows one of three outcomes: no demand and no refund (your return
        is accepted as filed), a demand determined (you owe more tax), or
        a refund determined. It must be issued within{" "}
        <strong>9 months from the end of the financial year</strong> in
        which you filed the return — after that, your ITR-V acknowledgment
        itself becomes the deemed intimation. Common triggers for an
        adjustment include income or TDS mismatches with Form 26AS/AIS,
        arithmetic errors, or deduction claims that exceed eligible limits.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 139(9) — Defective Return
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This notice means your return itself has an internal problem, not
        that the department disputes your figures. Common examples: TDS
        credit claimed without the corresponding income being reported,
        gross receipts in Form 26AS exceeding your declared total income,
        tax computed and paid despite showing zero gross total income, your
        name not matching PAN database records, or business income
        reported without the required financial statements attached. You
        get <strong>15 days</strong> from the date of the notice to correct
        and refile (extensions can be requested); missing this deadline
        without a valid reason can get your original return treated as
        invalid — with consequences like penalty, interest, and loss of
        the ability to carry forward losses or claim certain exemptions.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 148 — Income Escaping Assessment
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This is the one that reopens a past assessment year — issued when
        the Assessing Officer has reason to believe some of your income was
        never assessed to tax, often triggered by information in your AIS
        (undisclosed interest, capital gains, dividends, high-value
        transactions) that doesn't match what you originally filed.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Time Limit Got Much Shorter in 2024
        </h3>
        <p className="text-gray-700 leading-8">
          As amended by the Finance (No. 2) Act 2024, effective 1 September
          2024, a Section 148 notice can normally be issued only within{" "}
          <strong>3 years and 3 months</strong> from the end of the
          relevant assessment year. This extends to{" "}
          <strong>5 years and 3 months</strong> only where the officer has
          evidence that the escaped income is ₹50 lakh or more. This is a
          significant cut from the earlier regime's up-to-10-year window
          for high-value cases — but a lot of older articles online still
          quote that outdated 10-year figure, so always check the current
          limit against the specific notice date.
        </p>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Since the Finance Act 2021 introduced Section 148A, the department
        cannot jump straight to a Section 148 notice. It must first run a
        preliminary inquiry, issue a show-cause notice disclosing the
        information it holds against you, give you 7-30 days to reply, and
        only then pass a reasoned order on whether to proceed. Courts have
        held that skipping this step invalidates the eventual Section 148
        notice — so if you receive one, check whether a proper Section 148A
        process preceded it.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Other Notices You Might See
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Section</th>
              <th className="border px-4 py-3 text-left">What It Means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">142(1)</td>
              <td className="border px-4 py-3">Inquiry before assessment — asks for documents, clarifications, or a pending return</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">143(2)</td>
              <td className="border px-4 py-3">Scrutiny notice — detailed examination of a filed return; must be issued within 3 months from end of the FY in which you filed</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">156</td>
              <td className="border px-4 py-3">Demand notice — additional tax, interest, or penalty is payable</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">245</td>
              <td className="border px-4 py-3">Refund adjusted against an outstanding demand from an earlier year — you get a chance to object before adjustment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How to Respond
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Almost every notice today is handled through the e-filing portal's{" "}
        <strong>e-Proceedings</strong> facility (Dashboard → Pending
        Actions → e-Proceedings), where you can view the notice, upload
        your explanation and supporting documents, and track the response —
        without visiting a tax office in person. The one universal rule
        across every notice type: respond within the given deadline,
        because silence almost always leads to a worse outcome (best-judgment
        assessment, an invalid return, or a demand you never got to
        contest) than a timely, well-documented reply.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Notice Reply &amp; Assessment Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps individuals and businesses
        understand, respond to, and resolve income tax notices, from a
        simple intimation to a full reassessment.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/gst-notice-reply" className={linkClass}>
          Notice Reply service
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
        Income-tax Act, 1961 (as applicable for FY 2025-26/AY 2026-27 —
        notices for this period are still governed by the old Act, not the
        Income-tax Act, 2025) and the Finance (No. 2) Act 2024 amendments,
        current as of September 2026. Some sources indicate the assessment
        and reassessment sections will be renumbered (broadly, Section 143
        to Section 270 and Section 148 to Section 280) once the new Act
        governs a given assessment year, but the underlying procedure is
        expected to remain substantially the same. Please verify the
        current position or consult a professional for your specific
        notice before relying on it.
      </p>
    </>
  );
}
