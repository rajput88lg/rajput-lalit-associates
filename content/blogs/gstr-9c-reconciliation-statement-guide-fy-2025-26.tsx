import Link from "next/link";

const faqs = [
  {
    q: "Is GSTR-9C compulsory for everyone above ₹2 crore turnover?",
    a: "No. GSTR-9 (the annual return) is mandatory above ₹2 crore. GSTR-9C (the reconciliation statement) only becomes mandatory once aggregate turnover crosses ₹5 crore. Between ₹2 crore and ₹5 crore, you file GSTR-9 alone.",
  },
  {
    q: "Do I still need a CA to sign off on GSTR-9C?",
    a: "Not anymore. Since FY 2020-21, GSTR-9C is self-certified by the taxpayer using a digital signature or Aadhaar e-sign — the earlier requirement for a separate CA/CMA certification was removed. Many businesses still choose to have a professional prepare and review it, but the legal sign-off is now yours.",
  },
  {
    q: "What is the due date for GSTR-9C for FY 2025-26?",
    a: "31 December 2026 — the same date as GSTR-9 for the same financial year, since both are filed together.",
  },
  {
    q: "What happens if I file GSTR-9C late?",
    a: "A late fee applies under Section 47(2) of the CGST Act, capped at 0.25% of turnover in the relevant state/UT (combined with the GSTR-9 late fee cap, not an additional separate cap on top). There is no advantage to delaying — the earlier a mismatch is caught, the easier it is to explain or correct.",
  },
  {
    q: "Can GSTR-9C be revised after filing?",
    a: "No, GST law does not currently allow revision of a filed GSTR-9C. This is exactly why the reconciliation checklist matters — get it right before filing, since there's no correction window afterward.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTR9CReconciliationStatementGuideFY202526() {
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
        GSTR-9C often gets confused with GSTR-9 — the two are related but not the same. GSTR-9 is the annual return every regular taxpayer above the exemption threshold files; GSTR-9C is a separate reconciliation statement that only kicks in once turnover crosses ₹5 crore, and it exists purely to catch mismatches between your books of accounts and what you actually declared in your GST returns through the year.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Applicable only above ₹5 crore aggregate annual turnover</li>
          <li>Due date FY 2025-26: 31 December 2026 — same date as GSTR-9</li>
          <li>Self-certified since FY 2020-21 — no CA/CMA signature required</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Must File GSTR-9C
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Applicability is based on aggregate annual turnover (PAN-wide, all GSTINs combined) for the financial year:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Aggregate Turnover</th>
              <th className="border px-4 py-3 text-left">GSTR-9</th>
              <th className="border px-4 py-3 text-left">GSTR-9C</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Up to ₹2 crore</td>
                <td className="border px-4 py-3">Optional (CBIC exemption continues)</td>
                <td className="border px-4 py-3">Not applicable</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">₹2 crore – ₹5 crore</td>
                <td className="border px-4 py-3">Mandatory</td>
                <td className="border px-4 py-3">Not applicable</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Above ₹5 crore</td>
                <td className="border px-4 py-3">Mandatory</td>
                <td className="border px-4 py-3">Mandatory</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Changed: It's Now Self-Certified
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This is the single biggest practical change from the early GST years — the CA/CMA certification requirement was removed starting FY 2020-21. Today, you (the taxpayer) reconcile and certify GSTR-9C yourself, digitally signed, without a separate chartered accountant's audit sign-off. That doesn't mean the numbers matter less — the reconciliation itself still has to genuinely tie out, since it's filed on your own responsibility now, not shielded behind an external certifier.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Reconciliation Checklist — What Actually Needs to Tie Out
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Turnover as per audited financial statements vs turnover declared in GSTR-9/GSTR-1 for the year</li>
          <li>Taxable turnover reconciliation — adjustments for credit notes, debit notes, and unbilled revenue</li>
          <li>ITC as per books (purchase register) vs ITC actually claimed in GSTR-3B and available in GSTR-2B</li>
          <li>Tax paid — cash ledger + credit ledger utilisation matched against total tax liability</li>
          <li>HSN-wise summary of outward supplies</li>
          <li>Any tax payable on reverse charge (RCM) that was missed during the year</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Mismatches Happen (and How to Avoid Them)
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Common Reconciliation Gaps
        </h3>
        <p className="text-gray-700 leading-8">
          Most mismatches trace back to timing differences, not real errors: a credit note issued in April for a March sale, ITC claimed a month later than the purchase invoice date, or an RCM liability on an import of service that never got booked. The fix isn't complicated — a monthly (not annual) reconciliation habit through the year means GSTR-9C in December is a formality, not a scramble.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        If your turnover has crossed ₹5 crore this year, GSTR-9C is not optional — and because it's self-certified now, the responsibility for a clean reconciliation sits entirely with you. Rajput Lalit &amp; Associates handles GSTR-9 and GSTR-9C reconciliation end-to-end, along with the monthly bookkeeping that makes year-end reconciliation painless. See our{" "}<Link href="/blog/gstr-9-annual-return-filing-guide-fy-2025-26" className={linkClass}>GSTR-9 Annual Return guide</Link>{" "}for the base return, or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        This article reflects the GSTR-9C rules and turnover thresholds as commonly understood as of September 2026, based on CBIC notifications and circulars (including Notification 08/2025-Central Tax on late-fee relief for older years). Thresholds and forms are subject to periodic CBIC changes — please verify your specific applicability with a professional before filing.
      </p>
    </>
  );
}
