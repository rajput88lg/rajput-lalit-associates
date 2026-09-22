import Link from "next/link";

const faqs = [
  {
    q: "Is GST registration free in India?",
    a: "Yes. The government charges no fee for GST registration on the official GST portal (gst.gov.in) — for any business type, regular or composition. You pay only if you hire a consultant, and companies/LLPs need a Digital Signature Certificate (DSC) to sign the application.",
  },
  {
    q: "GST registration fees kitni hai?",
    a: "Sarkari fees ₹0 hai — GST portal par registration bilkul free hai. Agar aap consultant se karwate hain to unki professional fees lagti hai (aam taur par kuch hazaar rupaye, business type ke hisaab se). Company ya LLP ke liye DSC ka kharcha (₹1,000–₹2,500) alag se lagta hai.",
  },
  {
    q: "How much do consultants charge for GST registration?",
    a: "In 2026 most consultants charge roughly ₹1,500–₹5,000 for a regular registration of a proprietorship, partnership, LLP or company. Casual and non-resident taxable person registrations cost more because they need extra work. Always ask what is included — replies to department queries and help with biometric Aadhaar authentication should be part of it.",
  },
  {
    q: "Is there any hidden cost in GST registration?",
    a: "The main extra costs are a DSC for companies and LLPs, notarisation or stamp paper for a rent agreement or consent letter if your premises are rented or borrowed, and an advance tax deposit for casual and non-resident taxable persons. None of these is a government registration fee.",
  },
  {
    q: "What is the penalty for not taking GST registration?",
    a: "Under Section 122 of the CGST Act, a business that is liable to register but does not register can face a penalty of ₹10,000 or 10% of the tax due, whichever is higher — plus the tax itself with interest. Registering on time is far cheaper than any consultant fee.",
  },
  {
    q: "Is biometric Aadhaar authentication now required for every GST registration?",
    a: "On 8 September 2026 the Delhi High Court directed that no fresh GST registration be granted anywhere in India without biometric Aadhaar authentication. Haryana applicants were already being called to a GST Suvidha Kendra (GSK) for biometrics. Check the latest GSTN advisory before you apply, since the exact process may be updated after further hearings.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";
const th = "border px-4 py-3 text-left";
const td = "border px-4 py-3 align-top";

export default function GSTRegistrationFeesIndia() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-[#002b5c] mb-3">Quick Answer</h2>
        <p className="text-gray-700 leading-8">
          <strong>The government fee for GST registration is ₹0.</strong> Registration on
          the official GST portal is free for every type of business. What you actually
          pay depends on whether you hire a consultant (typically ₹1,500–₹5,000 in 2026)
          and whether you are a company or LLP (which needs a Digital Signature
          Certificate costing roughly ₹1,000–₹2,500).
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Complete Cost Breakdown (2026)
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Here is everything that can go into the cost of getting a GSTIN, and who
        actually has to pay each item.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className={th}>Cost item</th>
              <th className={th}>Amount</th>
              <th className={th}>Who pays it</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className={td}>Government registration fee</td>
              <td className={td}>₹0</td>
              <td className={td}>Nobody — free for all applicants</td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}>Consultant / professional fee</td>
              <td className={td}>≈ ₹1,500–₹5,000 (regular registration)</td>
              <td className={td}>Only if you hire a consultant</td>
            </tr>
            <tr>
              <td className={td}>Digital Signature Certificate (Class 3)</td>
              <td className={td}>≈ ₹1,000–₹2,500</td>
              <td className={td}>
                Companies and LLPs (must sign with DSC). Proprietors and partnership
                firms can sign with Aadhaar OTP (EVC) instead.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}>Rent agreement / consent letter notarisation</td>
              <td className={td}>Small, varies by state</td>
              <td className={td}>If the business premises are rented or borrowed</td>
            </tr>
            <tr>
              <td className={td}>Advance tax deposit</td>
              <td className={td}>Estimated tax liability</td>
              <td className={td}>
                Casual and non-resident taxable persons only — this is tax paid in
                advance, not a fee
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Consultant Fees by Registration Type
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Professional fees are not fixed by law, so they vary between consultants and
        cities. The ranges below reflect typical 2026 market rates. Registrations
        that need more work — foreign applicants, casual dealers at exhibitions, Input
        Service Distributors — cost more.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className={th}>Registration type</th>
              <th className={th}>Typical consultant fee</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className={td}>Proprietorship (regular or composition)</td><td className={td}>₹1,500–₹3,000</td></tr>
            <tr className="bg-gray-50"><td className={td}>Partnership / LLP / Private Limited</td><td className={td}>₹2,000–₹5,000</td></tr>
            <tr><td className={td}>Additional place of business / another state</td><td className={td}>₹1,500–₹3,000</td></tr>
            <tr className="bg-gray-50"><td className={td}>Casual taxable person</td><td className={td}>₹3,000–₹5,000</td></tr>
            <tr><td className={td}>Non-resident taxable person</td><td className={td}>₹5,000–₹10,000</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-8 mb-10">
        A low headline fee is not always cheaper. Ask whether the fee includes
        answering the officer&apos;s clarification notice (Form REG-03), helping with
        biometric authentication, and adding bank details after approval — these are
        where cheap registrations usually get stuck.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Real Cost: Not Registering When You Should
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Registration is compulsory once your aggregate turnover crosses{" "}
        <strong>₹40 lakh for goods or ₹20 lakh for services</strong> in normal
        category states like Haryana — and from day one for inter-state suppliers of
        goods and e-commerce sellers, whatever their turnover.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        If you are liable and do not register, Section 122 of the CGST Act allows a
        penalty of <strong>₹10,000 or 10% of the tax due, whichever is higher</strong>,
        on top of the unpaid tax and interest. Compared to that, even a consultant fee
        is small.
      </p>

      <div className="bg-[#fff9ed] border-l-4 border-[#d99a2b] rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-[#002b5c] mb-2">
          Update — September 2026: Biometric Aadhaar for Every New Registration
        </h2>
        <p className="text-gray-700 leading-7">
          On 8 September 2026 the Delhi High Court directed that no fresh GST
          registration be granted anywhere in India without biometric Aadhaar
          authentication (fingerprint or face match). Until now this was triggered
          mainly for flagged applications, though Haryana applicants were already
          being called to a GST Suvidha Kendra (GSK). This does not add any
          government fee, but plan for a visit or face-authentication step, and check
          the latest GSTN advisory before applying — the court is still hearing the
          matter.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">How Long Does It Take?</h2>
      <p className="text-gray-700 leading-8 mb-10">
        After a complete application and successful Aadhaar authentication, the
        officer normally decides within 7 working days. It can take up to 30 days if
        physical verification of your premises is needed. Small businesses whose
        monthly output tax to registered buyers is up to ₹2.5 lakh can opt for the
        simplified scheme under Rule 14A (from 1 November 2025), with approval in about
        3 working days. Keep your{" "}
        <Link href="/blog/gst-registration-documents-india" className={linkClass}>
          GST registration documents
        </Link>{" "}
        ready before you start — most delays come from a weak address proof.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Related Guides</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-10">
        <li>
          <Link href="/blog/gst-registration-documents-india" className={linkClass}>
            Documents Required for GST Registration (with address proof rules)
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-registration-online-india" className={linkClass}>
            GST Registration Online — Step-by-Step Process
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-registration-ambala" className={linkClass}>
            GST Registration in Ambala — Local Guide
          </Link>
        </li>
        <li>
          <Link
            href="/blog/digital-signature-certificate-dsc-guide-business-registration"
            className={linkClass}
          >
            Digital Signature Certificate (DSC) Guide
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-complete-guide-india-2026" className={linkClass}>
            GST Complete Guide India 2026
          </Link>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 mb-10">
        {faqs.map((faq) => (
          <div key={faq.q} className="border rounded-xl p-6">
            <h3 className="font-bold text-lg text-[#002b5c] mb-2">{faq.q}</h3>
            <p className="text-gray-700 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
        <p className="text-gray-700 leading-7">
          Want a clear quote before you start? Our{" "}
          <Link href="/gst-registration" className={linkClass}>
            GST Registration service
          </Link>{" "}
          includes document review, filing, handling the officer&apos;s queries, and
          guidance through biometric authentication — first consultation is free.
        </p>
      </div>
    </>
  );
}
