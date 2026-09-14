import Link from "next/link";

const faqs = [
  {
    q: "What is the difference between GST scrutiny, audit and assessment?",
    a: "Scrutiny (Section 61) is a lighter, preliminary check of your filed returns for discrepancies — it doesn't itself create a tax demand. Audit (Sections 65/66) is a deeper examination of your books and records, either by department officers or a specially appointed CA/CMA. Assessment (Sections 62-64) is what happens when there's no return at all, or urgent action is needed — the officer determines your tax liability using available information or their own judgment.",
  },
  {
    q: "I received an ASMT-10 notice — what does it mean and what should I do?",
    a: "ASMT-10 is a scrutiny notice under Section 61, pointing out specific discrepancies the officer found in your filed returns (mismatches, unusual ratios, etc.). You get 30 days (usually extendable) to respond in Form ASMT-11 with an explanation or by paying the shortfall. Ignore it, and the matter typically escalates to audit or a formal demand notice under Section 73/74 — so a prompt, well-documented response matters.",
  },
  {
    q: "What happens if I don't file my GST returns at all?",
    a: "After a reminder notice under Section 46, the officer can pass a best judgment assessment under Section 62, estimating your tax liability using whatever data is available (past returns, e-way bills, bank data, etc.) — often on the higher side. The good news: if you file the actual valid return within 30 days of that order, the assessment is automatically deemed withdrawn. Filing late is always better than not filing.",
  },
  {
    q: "Is a GST department audit the same as GSTR-9C?",
    a: "No. GSTR-9C is a self-certified reconciliation statement you file yourself (mandatory only above ₹5 crore turnover) alongside your annual return. A Section 65 audit is a separate process where department officers actively examine your books, invoices and returns on-site or through document calls — it can happen to any registered business regardless of turnover, usually selected based on risk indicators like high ITC claims, frequent return revisions, or turnover mismatches.",
  },
  {
    q: "How long does a departmental GST audit take, and what notice do I get?",
    a: "You get at least 15 working days' advance notice in Form ADT-01. The audit itself is expected to conclude within 3 months, extendable by up to 6 more months by the Commissioner for reasons recorded in writing. Findings are communicated in Form ADT-02, typically within 30 days of the audit's conclusion.",
  },
  {
    q: "Can I be assessed for GST even if I was never registered?",
    a: "Yes — Section 63 covers exactly this: a person who should have registered but didn't, someone whose registration was cancelled retrospectively but who kept operating, or an unregistered supplier discovered to be liable. The officer issues a notice (Form ASMT-14), and after considering any response, passes an assessment order (Form ASMT-15). This can carry serious consequences including penalty and, in fraud cases, prosecution.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTAuditAssessmentTypesNotice() {
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
        "GST audit" and "GST assessment" get used loosely, but they're
        legally distinct processes with different triggers, timelines and
        consequences — and knowing which one you're facing changes how you
        should respond. Here's a plain-language map of scrutiny, audit and
        the four types of assessment under the CGST Act.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Scrutiny (Sec 61):</strong> lightweight check of filed
            returns, notice in ASMT-10, respond in ASMT-11
          </li>
          <li>
            <strong>Non-filer assessment (Sec 62):</strong> best judgment
            order if you don't file after being reminded — withdrawn if you
            file within 30 days
          </li>
          <li>
            <strong>Unregistered person assessment (Sec 63):</strong> for
            those liable but never registered, or operating after
            cancellation
          </li>
          <li>
            <strong>Summary assessment (Sec 64):</strong> urgent, ex-parte
            action to protect revenue — used sparingly
          </li>
          <li>
            <strong>Departmental audit (Sec 65):</strong> officers examine
            your books directly, notice in ADT-01
          </li>
          <li>
            <strong>Special audit (Sec 66):</strong> department-appointed
            CA/CMA examines complex cases, at department's cost
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Scrutiny of Returns (Section 61)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        This is usually the first sign something's flagged in your filings
        — a routine, desk-based check comparing your returns for
        inconsistencies, not a full audit.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          Officer identifies a discrepancy and issues <strong>Form
          ASMT-10</strong>, explaining what looks off
        </li>
        <li>
          You respond in <strong>Form ASMT-11</strong> within 30 days
          (usually extendable) — explain the discrepancy, or pay the
          shortfall with interest
        </li>
        <li>
          If your explanation is accepted, the officer closes the matter
          with <strong>Form ASMT-12</strong> — no further action
        </li>
        <li>
          If not satisfied, the matter can escalate to audit (Section
          65/66), inspection (Section 67), or a formal demand notice
          (Section 73 for genuine errors, Section 74 for suspected fraud)
        </li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Why an ASMT-10 Is Worth Taking Seriously
        </h3>
        <p className="text-gray-700 leading-8">
          It looks routine, and often is — but an ignored or poorly
          documented response is exactly what escalates a minor
          discrepancy into a formal audit or demand notice. A clear,
          well-supported reply within the deadline closes most scrutiny
          matters at this first stage.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Three Assessment Types (Sections 62-64)
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Section</th>
              <th className="border px-4 py-3 text-left">Applies To</th>
              <th className="border px-4 py-3 text-left">Key Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">62 — Best judgment (non-filers)</td>
              <td className="border px-4 py-3">Registered persons who don't file despite a Section 46 reminder</td>
              <td className="border px-4 py-3">Order (ASMT-13) deemed withdrawn if valid return filed within 30 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">63 — Unregistered persons</td>
              <td className="border px-4 py-3">Those liable to register but didn't, or operating after cancellation</td>
              <td className="border px-4 py-3">Notice ASMT-14, order ASMT-15; can involve heavy demand + penalty</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">64 — Summary assessment</td>
              <td className="border px-4 py-3">Urgent cases needing immediate revenue protection</td>
              <td className="border px-4 py-3">Needs Additional/Joint Commissioner approval; order ASMT-16, can be withdrawn via ASMT-17/18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Departmental Audit (Section 65) vs Special Audit (Section 66)
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left"></th>
              <th className="border px-4 py-3 text-left">Section 65 — Departmental Audit</th>
              <th className="border px-4 py-3 text-left">Section 66 — Special Audit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Conducted by</td>
              <td className="border px-4 py-3">Commissioner or authorised GST officers</td>
              <td className="border px-4 py-3">Independent CA/CMA appointed by the department</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">When used</td>
              <td className="border px-4 py-3">Any registered person, often risk-based selection (high ITC, mismatches, turnover spikes)</td>
              <td className="border px-4 py-3">Complex valuation disputes or unusually high ITC claims flagged during scrutiny/audit</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Notice</td>
              <td className="border px-4 py-3">Form ADT-01, 15 working days' advance notice</td>
              <td className="border px-4 py-3">Form ADT-03 order</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Timeline</td>
              <td className="border px-4 py-3">3 months, extendable by 6 months</td>
              <td className="border px-4 py-3">90 days, extendable by another 90</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Report</td>
              <td className="border px-4 py-3">Form ADT-02</td>
              <td className="border px-4 py-3">Form ADT-04; audit cost borne by the department</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        In either case, if the audit finds no discrepancy, it simply
        closes with no further action. If issues are found, the next step
        is a show-cause notice under Section 73 (genuine error — lower
        penalty) or Section 74 (fraud/suppression — steep penalty), though
        paying the tax and interest voluntarily before a notice is issued
        can avoid formal proceedings altogether.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Received a GST Notice? Get It Reviewed Before Responding
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles GST notice replies, scrutiny
        responses and audit representation for businesses across India,
        with in-person support for clients in Ambala.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/gst-notice-reply" className={linkClass}>
          GST Notice Reply service
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
        CGST Act, 2017 (Sections 61-66) and related rules as of September
        2026. Every notice is fact-specific and deadlines are strict —
        please consult a professional promptly on receiving any GST
        notice rather than relying solely on general guidance.
      </p>
    </>
  );
}
