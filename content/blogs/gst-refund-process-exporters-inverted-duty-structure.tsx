import Link from "next/link";

const faqs = [
  {
    q: "Do I need to pay IGST to claim an export refund?",
    a: "No — you can export under a Letter of Undertaking (LUT) without paying IGST at all, and instead claim a refund of the accumulated ITC used to make that export. Paying IGST and claiming it back is the alternative route, often used when the LUT route's ITC refund would be more complex to compute.",
  },
  {
    q: "What is an inverted duty structure in simple terms?",
    a: "It's when the GST rate you pay on your inputs (raw materials, services) is higher than the GST rate you charge on your final product or service. Your input credit builds up faster than your output liability can absorb it, so the law allows you to claim the excess back.",
  },
  {
    q: "How long does a GST refund actually take to arrive?",
    a: "For exports, 90% is meant to arrive within 7 days of acknowledgment as a provisional refund — a working-capital protection built into the law. The remaining 10% typically follows within 60 days after verification, though delays happen if documentation has gaps.",
  },
  {
    q: "What's the most common reason refund claims get rejected?",
    a: "Mismatches — between the shipping bill, GSTR-1, and GSTR-3B figures for exports, or an incorrectly computed Rule 89(5) formula for inverted duty claims. Clean, monthly reconciliation (not just at refund-filing time) prevents most of these.",
  },
  {
    q: "Can a service exporter also claim this refund?",
    a: "Yes — export of services (which has its own conditions under Section 2(6) of the IGST Act) is treated as a zero-rated supply the same way export of goods is, and follows the same LUT or IGST-paid refund routes.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTRefundProcessExportersInvertedDutyStructure() {
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
        Accumulated input tax credit that can't be used up is dead cash sitting in your GST ledger — and for exporters and inverted-duty businesses, it happens structurally, not by mistake. GST law provides a formal refund route for exactly this situation. Here's how it actually works.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Two refund routes for exporters: under LUT (no IGST paid) or pay IGST and claim it back</li>
          <li>90% provisional refund released within 7 days of acknowledgment; remaining 10% after verification</li>
          <li>Time limit to claim any GST refund: 2 years from the 'relevant date'</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Route 1 — Exports
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Exporters have two options:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Export under Letter of Undertaking (LUT), without paying IGST — then claim a refund of the accumulated, unutilised input tax credit relating to that export</li>
          <li>Pay IGST on the export and claim a refund of that IGST paid — usually processed faster since it's linked directly to the shipping bill (treated as the refund application itself for this route)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Route 2 — Inverted Duty Structure
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        An inverted duty structure exists when the GST rate on your inputs is higher than the GST rate on your output supply — common in certain textile, footwear, and fertiliser-adjacent segments. Since you're paying more tax on what you buy than you collect on what you sell, credit piles up with no way to use it against output liability. Section 54(3) allows a refund of this accumulated credit, computed under a formula (Rule 89(5)) based on turnover of the inverted-rated supply, net ITC, and adjusted total turnover — best left to your GST consultant to compute precisely, since a wrong formula application is one of the most common reasons refund applications get rejected or delayed.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How the Refund Process Actually Works
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>File Form RFD-01 online on the GST portal with supporting statements (statement 3/3A for exports, statement 1/1A for inverted duty)</li>
          <li>Acknowledgment issued in RFD-02 (or a deficiency memo in RFD-03 if documents are incomplete — this restarts your filing)</li>
          <li>90% provisional refund credited within 7 days of acknowledgment for zero-rated (export) claims — this is meant to protect exporters' working capital</li>
          <li>Balance 10% released after the officer's verification, typically within 60 days of the original application</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Time Limit — Don't Miss This
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          2 Years From the Relevant Date
        </h3>
        <p className="text-gray-700 leading-8">
          Every GST refund claim must be filed within 2 years of the 'relevant date' — for exports, this is generally the date goods leave India (or the date of receipt of payment, for services); for inverted duty refunds, it's the due date of filing the return for the relevant period. Miss this window and the refund is simply gone — there's no discretionary extension.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Refund applications are one of the most document-heavy parts of GST — a small mismatch between your shipping bill, GSTR-1, and GSTR-3B figures is enough to trigger a deficiency memo and reset the clock. Rajput Lalit &amp; Associates handles refund filings end-to-end for exporters and businesses with inverted duty accumulation.{" "}<Link href="/#appointment" className={linkClass}>Book a free consultation</Link>{" "}or see our{" "}<Link href="/blog/input-tax-credit-gst-rules-reversal" className={linkClass}>Input Tax Credit guide</Link>{" "}for the ITC rules that feed into these refund calculations.
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
        This article explains the general GST refund framework for exports and inverted duty structure as of September 2026. The exact refund formula, eligible categories for inverted duty refund, and time limits are governed by CGST Rules and periodic CBIC notifications — please get your specific claim verified by a professional before filing.
      </p>
    </>
  );
}
