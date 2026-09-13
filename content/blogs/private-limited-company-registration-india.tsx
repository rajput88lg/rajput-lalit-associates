import Link from "next/link";

const faqs = [
  {
    q: "How many directors and shareholders are needed for a Private Limited Company?",
    a: "A minimum of two directors and two shareholders — the same person can hold both roles. At least one director must be a resident of India, meaning they stayed in India for a total of at least 120 days during the previous financial year (this residency test was relaxed from 182 days some years ago). Maximum shareholders are capped at 200.",
  },
  {
    q: "Is there a minimum capital requirement to register a Private Limited Company?",
    a: "No. The Companies Amendment Act, 2015 removed the earlier minimum paid-up capital requirement of ₹1 lakh. You can incorporate with a nominal authorized capital — many founders start with ₹1 lakh purely to keep stamp duty and MCA fees low, not because it's legally required.",
  },
  {
    q: "How much does it cost to register a Private Limited Company in India?",
    a: "For a typical small company with ₹1 lakh authorized capital, government costs alone run roughly ₹3,000–₹6,000: ₹1,000 for name reservation, nil MCA filing fee (SPICe+ is fee-free up to ₹15 lakh authorized capital), ₹1,500–₹2,500 per director for Digital Signature Certificates, and stamp duty that varies sharply by state — from around ₹500 in Delhi/Maharashtra to over ₹5,000 in Gujarat or Kerala. Professional fees for documentation and filing support are separate.",
  },
  {
    q: "How long does company registration take?",
    a: "Realistically 10–20 working days end-to-end: 1–2 days for Digital Signature Certificates, 3–4 days for name approval, several days to draft the MoA/AoA and file SPICe+, and the remainder for the Registrar of Companies to review and issue the Certificate of Incorporation. With Aadhaar-based signatory verification and error-free documents, it can move closer to 7 days — but name rejections or document queries commonly stretch it past 20 days.",
  },
  {
    q: "What is Form INC-20A and why does it matter right after incorporation?",
    a: "INC-20A is the declaration of commencement of business — you cannot start business operations or exercise borrowing powers until it's filed, and it's due within 180 days of incorporation. Missing it isn't a minor lapse: the penalty is ₹50,000 on the company plus ₹1,000 per day on every officer in default (capped at ₹1 lakh per officer), and the Registrar can eventually strike the company off the register under Section 248 if it appears inactive.",
  },
  {
    q: "Is GST registration compulsory after company incorporation?",
    a: "No, not automatically. GST registration depends on turnover crossing the applicable threshold, the nature of the business, and whether you're making inter-state supplies. A newly incorporated company with no turnover yet is not required to register for GST from day one.",
  },
  {
    q: "Can a company use a residential address as its registered office?",
    a: "Yes, a residential address can be used as the registered office, provided you have valid address proof (a utility bill or similar, usually not older than 2 months) and, if the property isn't owned by a director or subscriber, a No Objection Certificate from the owner.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function PrivateLimitedCompanyRegistrationIndia() {
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

      <h2 className="text-3xl font-bold text-[#002b5c] mt-10 mb-6">
        Private Limited Company Registration in India
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A Private Limited Company is one of the most common business structures
        for startups, growing businesses and entrepreneurs in India. It creates
        a separate legal identity for the business and can help build
        credibility with customers, investors, banks and vendors.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        This guide covers eligibility, documents, the registration process
        with actual costs and timelines, post-incorporation compliance —
        including the Form INC-20A deadline that catches a lot of new
        founders off guard — and common questions.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Minimum requirement:</strong> 2 directors, 2 shareholders, no minimum capital</li>
          <li><strong>Government cost (₹1L authorized capital):</strong> roughly ₹3,000–₹6,000, mostly stamp duty which varies by state</li>
          <li><strong>Timeline:</strong> 10–20 working days typically, 7 days in the best case</li>
          <li><strong>Don't forget:</strong> Form INC-20A within 180 days, or face a ₹50,000+ penalty</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What is a Private Limited Company?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A Private Limited Company is a company registered under the Companies
        Act, 2013. It is treated as a separate legal entity from its owners.
        This means the company can own assets, enter contracts, open a bank
        account, raise invoices and carry out business activities in its own
        name.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        The liability of shareholders is generally limited to their investment,
        subject to applicable law and personal guarantees where relevant. This
        structure is widely used by founders who want an organised and
        scalable business setup.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Key Features of a Private Limited Company
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Separate Legal Entity</h3>
          <p className="text-gray-600">
            The company has its own legal identity, separate from its
            shareholders and directors.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Limited Liability</h3>
          <p className="text-gray-600">
            Shareholders&apos; liability is generally limited to their unpaid
            share capital, subject to applicable legal provisions.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Better Business Credibility</h3>
          <p className="text-gray-600">
            A registered company can build confidence with banks, clients,
            suppliers, investors and government departments.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Scalable Structure</h3>
          <p className="text-gray-600">
            It is often suitable for businesses planning growth, investment,
            partnerships or expansion.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Eligibility for Private Limited Company Registration
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A Private Limited Company requires at least two directors and two
        shareholders — the same person can hold both roles. At least one
        director must satisfy the Indian residency requirement: staying in
        India for a total of at least 120 days during the previous financial
        year.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-12">
        <li>Minimum two directors, maximum 15.</li>
        <li>Minimum two shareholders, maximum 200.</li>
        <li>At least one resident director (120-day India-stay test).</li>
        <li>A proposed company name that meets MCA naming requirements.</li>
        <li>A registered office address in India.</li>
        <li>A lawful proposed business activity.</li>
        <li><strong>No minimum authorized or paid-up capital required</strong> — see below.</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Myth: "You need at least ₹1 lakh capital to register a company"
        </h3>
        <p className="text-gray-700 leading-8">
          Not since the Companies Amendment Act, 2015. There is no minimum
          paid-up or authorized capital requirement anymore. Most founders
          still choose ₹1 lakh as a round, low-cost starting figure — since
          MCA filing is fee-free up to ₹15 lakh authorized capital anyway and
          a higher figure only pushes up stamp duty — but nothing in law
          requires it.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Documents Required for Company Registration
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        The documents required can differ depending on whether the directors,
        shareholders or registered office are located in India or outside
        India. The following documents are commonly required for Indian
        residents.
      </p>

      <div className="overflow-x-auto mb-12">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Document</th>
              <th className="border px-4 py-3 text-left">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                PAN Card of Directors and Shareholders
              </td>
              <td className="border px-4 py-3">
                Identity and tax-related verification.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Aadhaar Card</td>
              <td className="border px-4 py-3">
                Identity and address verification, where applicable.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Passport Size Photograph</td>
              <td className="border px-4 py-3">
                Director and subscriber documentation.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Address Proof of Directors
              </td>
              <td className="border px-4 py-3">
                Commonly includes bank statement, utility bill or other accepted
                proof, as applicable.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Registered Office Address Proof
              </td>
              <td className="border px-4 py-3">
                Proof of the company&apos;s proposed registered office (utility
                bill, usually not older than 2 months).
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                NOC or Rent Agreement, if applicable
              </td>
              <td className="border px-4 py-3">
                Required where the registered office is rented or owned by
                someone else — including a residential address used as the
                registered office.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Does It Actually Cost?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        For a typical small company registering with ₹1 lakh authorized
        capital, here's where the government costs actually come from:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Cost Head</th>
              <th className="border px-4 py-3 text-left">Approximate Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">MCA name reservation (2 name options)</td>
              <td className="border px-4 py-3">₹1,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">SPICe+ incorporation filing fee</td>
              <td className="border px-4 py-3">Nil — free up to ₹15 lakh authorized capital</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Digital Signature Certificate (per director)</td>
              <td className="border px-4 py-3">₹1,500 – ₹2,500</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Stamp duty (₹1L authorized capital)</td>
              <td className="border px-4 py-3">₹500 (Delhi/Maharashtra) to ₹5,000+ (Gujarat/Kerala) — state-dependent</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Form INC-20A (commencement of business)</td>
              <td className="border px-4 py-3">₹200, filed after incorporation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Stamp duty is genuinely the biggest variable — it depends entirely on
        the state where your registered office is located and your
        authorized capital amount, so two companies incorporating on the
        same day with the same capital can pay very different totals. This
        table doesn't include professional fees for documentation, drafting
        and filing support, which are separate.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Private Limited Company Registration Process & Timeline
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Realistically, this takes <strong>10–20 working days</strong> end to
        end — faster with Aadhaar-based e-KYC and clean documents, slower if
        the name gets rejected or the Registrar raises a query:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Stage</th>
              <th className="border px-4 py-3 text-left">Typical Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Digital Signature Certificates for all directors</td>
              <td className="border px-4 py-3">1–2 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Company name reservation</td>
              <td className="border px-4 py-3">3–4 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Drafting MoA/AoA and filing SPICe+</td>
              <td className="border px-4 py-3">3–5 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">RoC review and Certificate of Incorporation</td>
              <td className="border px-4 py-3">5–10 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-8 mb-12">
        <li>
          Discuss the proposed business activity, directors, shareholders and
          capital structure.
        </li>
        <li>
          Collect and verify KYC documents, registered office proof and company
          details.
        </li>
        <li>
          Apply for Digital Signature Certificates for all directors and
          subscribers.
        </li>
        <li>
          Select and apply for the proposed company name through the MCA
          incorporation process.
        </li>
        <li>
          Prepare incorporation documents, including the Memorandum of
          Association and Articles of Association.
        </li>
        <li>
          Submit the incorporation application and linked forms through the MCA
          portal.
        </li>
        <li>
          Respond to any resubmission or clarification request, if raised.
        </li>
        <li>
          Receive the Certificate of Incorporation after approval.
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        SPICe+ and Linked Incorporation Forms
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        The MCA uses the SPICe+ incorporation process for a new company. It
        covers company name reservation, incorporation and other related
        registrations or allotments as applicable.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Supporting forms may include SPICe+ MOA, SPICe+ AOA and AGILE-PRO-S.
        Depending on the application, PAN, TAN, bank account-related services,
        GST registration and other linked registrations may be considered
        through the prescribed process.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Name Approval Matters
        </h3>

        <p className="text-gray-700 leading-8">
          The proposed name should not be identical or too similar to an
          existing company, LLP, registered trademark or reserved name. A
          relevant business-object description and proper supporting documents
          help reduce the risk of resubmission.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Benefits of Registering a Private Limited Company
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Professional Image</h3>
          <p className="text-gray-600">
            A registered company can improve trust among customers, vendors and
            business partners.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Funding Readiness</h3>
          <p className="text-gray-600">
            The structure is commonly preferred by investors, accelerators and
            startups planning to raise funds.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Business Continuity</h3>
          <p className="text-gray-600">
            The company continues to exist independently of changes in its
            shareholders or directors, subject to law.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Easier Expansion</h3>
          <p className="text-gray-600">
            A structured company setup can support hiring, contracts, banking,
            tenders and business growth.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Post-Incorporation Compliance — Don't Miss Form INC-20A
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Incorporation is the beginning of the company&apos;s compliance journey,
        and the very first deadline is the one most new founders don&apos;t know
        about:
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Form INC-20A — Commencement of Business
        </h3>
        <p className="text-gray-700 leading-8">
          You cannot legally start business operations or exercise borrowing
          powers until you file Form INC-20A, declaring that all subscribers
          have paid for their shares. It is due within{" "}
          <strong>180 days of incorporation</strong>, with a government fee of
          ₹200. Miss it, and the penalty is steep: <strong>₹50,000 on the
          company</strong>, plus <strong>₹1,000 per day on every officer in
          default</strong> (capped at ₹1 lakh per officer). If the Registrar
          concludes the company is inactive, it can even initiate striking the
          company off the register under Section 248 of the Companies Act.
        </p>
      </div>

      <p className="text-gray-700 leading-8 mb-6">
        Beyond that, ongoing compliance depends on turnover, business activity
        and employee strength:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-12">
        <li>Opening and maintaining the company bank account (typically 1–2 weeks post-incorporation).</li>
        <li>Issue of shares and related statutory records.</li>
        <li>Income tax return and financial statement filing.</li>
        <li>Annual MCA filings (AOC-4, MGT-7/7A).</li>
        <li>GST registration and GST return filing, where applicable.</li>
        <li>TDS, payroll, EPFO or ESIC compliance, where applicable.</li>
        <li>Maintaining books of accounts and statutory registers.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Mistakes to Avoid
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-12">
        <li>Selecting a name without checking availability or trademark conflicts.</li>
        <li>Using unclear or expired address and identity documents.</li>
        <li>Choosing an incorrect business activity or object clause.</li>
        <li>Forgetting Form INC-20A within the 180-day window.</li>
        <li>Not maintaining proper accounting records from the beginning.</li>
        <li>Assuming incorporation alone completes all business compliance.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-[#002b5c]">{faq.q}</h3>
            <p className="text-gray-700 leading-8">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Choose Rajput Lalit & Associates?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Rajput Lalit & Associates provides professional support for business
        registration, GST, income tax, accounting and compliance services. We
        help founders organise documents, understand the incorporation process
        and prepare for post-registration compliance — including tracking your
        INC-20A deadline so it doesn&apos;t slip past you. See our{" "}
        <Link href="/company-registration" className={linkClass}>
          Company Registration service
        </Link>{" "}
        or our{" "}
        <Link href="/msme-registration" className={linkClass}>
          MSME (Udyam) Registration service
        </Link>{" "}
        if you're registering as a proprietorship or partnership instead.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">
            Structured Documentation Support
          </h3>
          <p className="text-gray-600">
            Guidance for director KYC, registered-office documents and company
            information.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">
            Clear Compliance Guidance
          </h3>
          <p className="text-gray-600">
            Practical next-step support for GST, tax, accounting and related
            obligations — including INC-20A tracking.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">
            Transparent Process
          </h3>
          <p className="text-gray-600">
            Clear communication on the documents and information required for
            your application.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-lg mb-2">Pan India Support</h3>
          <p className="text-gray-600">
            Online assistance for eligible founders and businesses across
            India.
          </p>
        </div>
      </div>

      <div className="bg-[#002b5c] text-white rounded-2xl p-8 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Planning to Register a Private Limited Company?
        </h2>

        <p className="leading-8 text-blue-100 mb-6">
          Book a discussion to understand the documents, process and compliance
          requirements for your proposed business.
        </p>

        <Link
          href="/appointment"
          className="inline-flex bg-[#d99a2b] hover:bg-[#f0b84b] px-8 py-4 rounded-lg font-bold transition"
        >
          Book a Consultation
        </Link>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Disclaimer
        </h3>

        <p className="text-gray-700 leading-8">
          This article is for general informational purposes only and is not
          legal, tax or professional advice, based on the Companies Act, 2013
          and MCA rules as of September 2026. Government fees, stamp duty
          rates and compliance requirements can change and vary by state.
          Please seek professional advice based on your proposed company
          structure and business activity.
        </p>
      </div>
    </>
  );
}
