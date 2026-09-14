import Link from "next/link";

const faqs = [
  {
    q: "Does a freelancer with foreign clients need GST registration?",
    a: "Not compulsorily, as long as aggregate turnover stays below ₹20 lakh in a financial year (₹10 lakh for special category states). Export of services counts as an inter-state supply under the IGST Act, but Notification No. 10/2017-Integrated Tax specifically exempts service providers making inter-state supplies from compulsory registration below this threshold. Many freelancers still register voluntarily — see below for why.",
  },
  {
    q: "What exactly counts as 'export of services' under GST?",
    a: "Five conditions must all be true under Section 2(6) of the IGST Act: the supplier is located in India, the recipient is located outside India, the place of supply is outside India, payment is received in convertible foreign exchange (or Indian rupees where RBI permits), and the supplier and recipient are not merely establishments of the same legal entity. Miss any one — for example, an Indian company's own overseas branch — and it isn't treated as an export for GST purposes.",
  },
  {
    q: "If export of services is zero-rated, why would I still register for GST?",
    a: "Three practical reasons: you can claim Input Tax Credit on business expenses (software subscriptions, laptop, internet, office rent) and get that back as a refund since exports are zero-rated; you can file a Letter of Undertaking (LUT) to invoice without charging any GST at all, which clients prefer; and once your turnover naturally crosses ₹20 lakh, you'll need to register anyway — starting early avoids a scramble later.",
  },
  {
    q: "What is a LUT and how is it different from paying IGST and claiming a refund?",
    a: "A Letter of Undertaking (Form GST RFD-11) lets a GST-registered exporter invoice foreign clients with zero GST charged, with no cash outflow. Without a LUT, you'd have to charge and pay 18% IGST on the invoice first, then apply separately for a refund — which ties up cash for weeks or months. Almost all freelancers and small exporters opt for the LUT route once registered.",
  },
  {
    q: "How long is a LUT valid, and do I need to renew it?",
    a: "One financial year (1 April to 31 March). It must be filed fresh every year before you invoice any export under it for that year — there's no automatic rollover. Filing is done online on the GST portal and typically takes 10–15 minutes with Aadhaar-based e-verification.",
  },
  {
    q: "What proof do I need to show that my income is genuinely export income?",
    a: "Primarily the Foreign Inward Remittance Certificate (FIRC) or Bank Realisation Certificate (BRC) from your bank, showing payment received in convertible foreign exchange against a specific invoice. Keep these matched against your invoices — they're the document GST officers and your bank will ask for, and they're also what supports any ITC refund claim.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTFreelancersExportOfServicesLUT() {
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
        Indian freelancers, developers, designers and consultants working
        with clients abroad are in an unusual spot under GST — their
        services are "exports" and taxed at zero rate, but the rules
        around registration, invoicing and getting that zero rate to
        actually apply confuse most people who've never dealt with them.
        Here's how export of services works in plain terms, and when a
        Letter of Undertaking (LUT) makes sense.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>GST registration:</strong> not compulsory below ₹20
            lakh turnover (₹10 lakh in special category states), even for
            export income
          </li>
          <li>
            <strong>Export of services:</strong> zero-rated — no GST charged
            to the foreign client, if the 5 conditions under Section 2(6)
            IGST Act are met
          </li>
          <li>
            <strong>LUT (Form RFD-11):</strong> lets a registered exporter
            invoice with zero GST, no cash blocked — valid for one
            financial year, renew annually
          </li>
          <li>
            <strong>Without LUT:</strong> must charge 18% IGST, pay it, then
            claim a refund separately — slower, ties up cash
          </li>
          <li>
            <strong>Proof needed:</strong> FIRC/BRC from your bank showing
            payment received in foreign exchange
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Counts as "Export of Services"
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Under Section 2(6) of the IGST Act, all five of these must be true
        for your income to qualify as an export (and therefore zero-rated)
        rather than a normal taxable supply:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Supplier (you) is located in India</li>
        <li>Recipient (your client) is located outside India</li>
        <li>Place of supply is outside India</li>
        <li>
          Payment is received in convertible foreign exchange, or in Indian
          rupees where RBI specifically permits
        </li>
        <li>
          Supplier and recipient are not merely two establishments of the
          same legal person (e.g. an Indian branch invoicing its own
          overseas head office generally does not qualify)
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Do You Need to Register for GST?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        This is the most common confusion. Export is legally treated as an
        inter-state supply under the IGST Act, and inter-state suppliers
        normally must register regardless of turnover. But{" "}
        <strong>Notification No. 10/2017-Integrated Tax</strong>{" "}
        specifically carves out an exception:
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Rule Most Freelancers Get Wrong
        </h3>
        <p className="text-gray-700 leading-8">
          Persons making inter-state supplies of taxable <strong>services</strong>{" "}
          (this includes export of services) are exempt from compulsory GST
          registration as long as their aggregate all-India turnover stays
          below ₹20 lakh (₹10 lakh in special category states). This is
          different from goods — an inter-state supplier of goods must
          register regardless of turnover. If you're a freelancer earning
          purely from services and below this threshold, you are not
          legally required to register, even though you're technically
          making an inter-state (export) supply.
        </p>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        That said, plenty of freelancers register voluntarily even below
        the threshold — mainly to claim ITC refunds on business expenses,
        to file a LUT and invoice cleanly with zero GST shown, and because
        many overseas clients and payment platforms feel more comfortable
        with a GSTIN on the invoice.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        LUT vs Paying IGST and Claiming Refund
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Route</th>
              <th className="border px-4 py-3 text-left">How It Works</th>
              <th className="border px-4 py-3 text-left">Cash Flow Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">With LUT (Form RFD-11)</td>
              <td className="border px-4 py-3">Invoice client with zero GST charged, no tax paid upfront</td>
              <td className="border px-4 py-3">None — no cash blocked</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Without LUT</td>
              <td className="border px-4 py-3">Charge and pay 18% IGST on the invoice, then file for a refund</td>
              <td className="border px-4 py-3">Cash tied up until refund is processed (often weeks)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Almost every registered freelancer or small exporter opts for LUT
        for exactly this reason — there's no upside to blocking your own
        cash with the government when a simple annual filing avoids it
        entirely. LUT eligibility is broad (any GST-registered exporter can
        file it); the only real bar is for someone previously prosecuted for
        tax evasion above ₹2.5 crore, who must furnish a bond with bank
        guarantee instead.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        LUT — Key Facts
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Filed as Form GST RFD-11 on the GST portal</li>
        <li>
          Valid for one financial year only (1 April – 31 March) — must be
          renewed every year before invoicing exports under it
        </li>
        <li>Filing is fully online, takes about 10–15 minutes with Aadhaar e-verification</li>
        <li>No fee, no physical documents to submit in the normal case</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Documentation to Keep
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Export invoice</strong> marked "Supply meant for export
          under LUT without payment of IGST"
        </li>
        <li>
          <strong>FIRC or BRC</strong> from your bank for every payment
          received — this is your proof of foreign exchange receipt
        </li>
        <li>
          <strong>Contract or agreement/email trail</strong> with the
          client showing the nature of services and their location outside
          India
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Registration &amp; LUT Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps freelancers and consultants with
        foreign clients decide whether to register, complete GST
        registration, file LUT annually, and reconcile ITC refunds where
        applicable.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/gst-registration" className={linkClass}>
          GST Registration service
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
        IGST Act, 2017, CGST Rules and Notification No. 10/2017-Integrated
        Tax as of September 2026. Registration thresholds, LUT procedure
        and RBI-permitted payment routes can change — please verify the
        current position or consult a professional for your specific
        situation before relying on it.
      </p>
    </>
  );
}
