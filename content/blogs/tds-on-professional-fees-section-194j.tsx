import Link from "next/link";

const faqs = [
  {
    q: "What's the TDS rate for professional fees vs technical fees?",
    a: "10% for professional services — this covers CAs, lawyers, doctors, engineers, architects, and similar professionals. 2% for technical services and for call-centre payments. Both fall under the same section (new Section 393(1), old 194J) but carry different rates depending on the exact nature of the service, so classifying a payment correctly matters.",
  },
  {
    q: "What is the threshold below which no TDS is needed?",
    a: "₹50,000 per payee in a financial year, for the aggregate of payments in that category (professional fees, technical fees, royalty, or Section 28(va) receipts). This was raised from ₹30,000 by the Finance Act 2025, effective 1 April 2025 — a meaningful relief for anyone paying occasional, small professional fees who previously crossed the lower threshold easily.",
  },
  {
    q: "Who is required to deduct this TDS?",
    a: "Companies, partnerships, LLPs, and any individual or HUF whose business turnover exceeded ₹1 crore or professional receipts exceeded ₹50 lakh in the immediately preceding financial year. An individual below these limits paying a CA or lawyer generally doesn't need to deduct TDS on that payment.",
  },
  {
    q: "What if the payee doesn't provide their PAN?",
    a: "The rate jumps to 20%, regardless of whether the payment is for professional or technical services. This is a significant jump from the standard 10%/2% rates, so collecting PAN details before making the payment (or at least before the TDS is due) avoids an unnecessarily large deduction.",
  },
  {
    q: "By when must this TDS be deposited and reported?",
    a: "Deposit by the 7th of the following month (for March deductions, by 30 April). It's reported quarterly in what was Form 26Q, now Form 140, and the TDS certificate — formerly Form 16A — is now Form 131, downloaded from TRACES after the quarterly return is filed.",
  },
  {
    q: "What happens if a business doesn't deduct TDS on professional fees it pays?",
    a: "30% of that expense gets disallowed when computing the payer's taxable business income — a real cost even beyond the TDS itself — on top of 1% monthly interest for non-deduction and possible penalty proceedings. This disallowance is often the bigger financial hit than the TDS amount itself, which is why it's worth getting right even for occasional professional payments.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSOnProfessionalFeesSection194J() {
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
        Pay a CA, lawyer, consultant, doctor, or IT support vendor above a
        certain amount, and you're on the hook to deduct TDS before you
        pay them — get it wrong and it's not just interest, a full 30% of
        that expense can get disallowed from your own taxable income.
        Here's how the current rules work, including the threshold that
        changed in 2025.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Professional services (CA, legal, medical,
            engineering etc.):</strong> 10% TDS
          </li>
          <li>
            <strong>Technical services / call-centre payments:</strong> 2%
            TDS
          </li>
          <li>
            <strong>Threshold:</strong> ₹50,000/year per payee (raised
            from ₹30,000, effective 1 Apr 2025)
          </li>
          <li>
            <strong>No PAN:</strong> rate jumps to 20%
          </li>
          <li>
            <strong>New Act section:</strong> 393(1) (old Section 194J)
          </li>
          <li>
            <strong>Non-deduction penalty:</strong> 30% of the expense
            disallowed, plus interest
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Rates — Professional vs Technical Services
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Payment Type</th>
              <th className="border px-4 py-3 text-left">Examples</th>
              <th className="border px-4 py-3 text-left">TDS Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Professional services</td>
              <td className="border px-4 py-3">CA, lawyer, doctor, architect, engineer, interior decorator</td>
              <td className="border px-4 py-3">10%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Technical services</td>
              <td className="border px-4 py-3">IT support, technical consultancy, call-centre operations</td>
              <td className="border px-4 py-3">2%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">No PAN provided</td>
              <td className="border px-4 py-3">Either category</td>
              <td className="border px-4 py-3">20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Threshold Just Went Up — ₹30,000 to ₹50,000
        </h3>
        <p className="text-gray-700 leading-8">
          The Finance Act 2025 raised the no-TDS threshold from ₹30,000 to
          ₹50,000 per payee per financial year, effective 1 April 2025.
          This aggregates across all payments to the same person or firm
          in a year — so ten payments of ₹6,000 each to the same
          consultant cross the ₹50,000 threshold and require TDS on the
          full amount, even though each individual payment looked small.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Must Deduct
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Companies, partnerships, and LLPs — always, regardless of size</li>
        <li>
          Individuals/HUFs with business turnover above ₹1 crore, or
          professional receipts above ₹50 lakh, in the immediately
          preceding financial year
        </li>
        <li>
          Individuals/HUFs below these limits generally don't need to
          deduct TDS on professional payments they make personally
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deposit, Returns &amp; Certificates
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Deposit TDS by the 7th of the following month (March deductions: by 30 April)</li>
        <li>Report quarterly in <strong>Form 140</strong> (old Form 26Q)</li>
        <li>Issue <strong>Form 131</strong> (old Form 16A) to the payee, downloaded from TRACES after the quarterly return is filed</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Real Cost of Getting This Wrong
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If you fail to deduct TDS on a professional or technical payment
        that required it, 30% of that expense gets disallowed when
        computing your own business's taxable income — often a far bigger
        hit than the TDS amount itself, on top of 1% monthly interest for
        non-deduction and the possibility of penalty proceedings. This is
        why it's worth tracking cumulative payments to each vendor across
        the year, not just checking each invoice in isolation.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Compliance Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps businesses track vendor
        payments, deduct TDS correctly, and file quarterly TDS returns on
        time.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/tds-return-filing" className={linkClass}>
          TDS Return Filing service
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
        Income-tax Act, 2025 (Section 393(1), corresponding to the old
        Section 194J) and the Finance Act 2025 threshold change, as
        applicable from 1 April 2025/2026 and current as of September
        2026. Please verify the latest position or consult a professional
        for your specific situation before relying on it.
      </p>
    </>
  );
}
