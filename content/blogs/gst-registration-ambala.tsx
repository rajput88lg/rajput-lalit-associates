import Link from "next/link";

const faqs = [
  {
    q: "Is there any government fee for GST registration in Ambala?",
    a: "No. GST registration on the official GST portal is free for everyone, including businesses in Ambala City and Ambala Cantt. You only pay a professional fee if you hire a consultant to prepare and file the application for you.",
  },
  {
    q: "What is the GST registration turnover limit for a business in Ambala?",
    a: "Haryana is a normal category state, so registration becomes compulsory once aggregate turnover crosses ₹40 lakh for businesses supplying only goods and ₹20 lakh for service providers (or mixed supplies). Some businesses, such as those making inter-state supplies of goods, must register regardless of turnover.",
  },
  {
    q: "How many days does GST registration take?",
    a: "Under Rule 9 of the CGST Rules, the officer has to decide within 7 working days in a normal case. If physical verification of the premises is required, or Aadhaar authentication is not completed, it can take up to 30 days. Eligible small businesses opting for Rule 14A can get registration within 3 working days after Aadhaar authentication.",
  },
  {
    q: "Do Haryana applicants have to visit a GST Suvidha Kendra for biometric verification?",
    a: "Only some applicants. After you submit Part B of the application, the GST portal sends an email. Depending on your risk profile, you either complete OTP-based Aadhaar authentication online or book an appointment at a GST Suvidha Kendra (GSK) for biometric authentication and verification of original documents.",
  },
  {
    q: "Can I get GST registration on a rented shop or home address in Ambala?",
    a: "Yes. For a rented premises you need the rent agreement plus a recent electricity bill or property document of the owner, and a No Objection Certificate (NOC) from the owner is commonly required. A residential address can also be used as the principal place of business if that is where you actually run the business.",
  },
  {
    q: "Is a bank account necessary to apply for GST registration?",
    a: "You can apply without bank details, but under Rule 10A you must add your business bank account on the GST portal within 30 days of getting registration or before filing your first GSTR-1/IFF, whichever is earlier. Otherwise the registration can be suspended.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTRegistrationAmbala() {
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
        Whether you run a cloth shop in Ambala City, a manufacturing unit in
        Ambala Cantt, or offer services from your home office, GST
        registration is usually the first compliance step for a growing
        business. This guide explains, in simple language, who needs GST
        registration in Ambala, which documents to keep ready, the complete
        online process (including Haryana&apos;s biometric verification step)
        and what it costs.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Government fee:</strong> ₹0 (GST registration is free on
            the GST portal)
          </li>
          <li>
            <strong>Turnover limit in Haryana:</strong> ₹40 lakh (goods) /
            ₹20 lakh (services)
          </li>
          <li>
            <strong>Time:</strong> 7 working days normally; up to 30 days if
            physical verification is needed; 3 working days under Rule 14A
            (for eligible small businesses)
          </li>
          <li>
            <strong>Key documents:</strong> PAN, Aadhaar, photograph, business
            address proof and bank details
          </li>
          <li>
            <strong>Haryana-specific step:</strong> OTP-based or biometric
            Aadhaar authentication (biometric at a GST Suvidha Kendra, if
            asked)
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Needs GST Registration in Ambala?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Haryana is a <strong>normal category state</strong> under GST. So a
        business in Ambala has to register once its aggregate annual turnover
        crosses the following limits:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Type of Business</th>
              <th className="border px-4 py-3 text-left">
                Turnover Limit (Haryana)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Supply of goods only</td>
              <td className="border px-4 py-3">₹40 lakh</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Supply of services (or goods + services)
              </td>
              <td className="border px-4 py-3">₹20 lakh</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-4">
        Some businesses must register <strong>even if turnover is below
        these limits</strong>. Common cases include:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-6">
        <li>Selling goods to buyers in other states (inter-state supply of goods)</li>
        <li>Casual taxable persons, such as traders setting up temporary stalls at exhibitions or fairs</li>
        <li>Persons liable to pay tax under reverse charge</li>
        <li>E-commerce operators, and many sellers who sell through online marketplaces</li>
        <li>Persons required to deduct TDS or collect TCS under GST</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Small sellers on e-commerce platforms have some relaxations (for
        example, certain unregistered suppliers can sell goods within the same
        state through an enrolment facility). Because these rules depend on
        what you sell and where your buyers are, it is best to get your case
        checked before deciding. Many businesses below the limit also choose{" "}
        <strong>voluntary registration</strong>, because large buyers often
        prefer GST-registered suppliers and a GSTIN allows you to claim input
        tax credit.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Documents Required for GST Registration in Ambala
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        The list depends on your type of business. Keep clear scanned copies
        ready before starting the application:
      </p>

      <h3 className="text-2xl font-bold text-[#002b5c] mb-4">
        Proprietorship (single owner)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-8">
        <li>PAN card and Aadhaar card of the proprietor</li>
        <li>Passport-size photograph</li>
        <li>Mobile number and email ID linked to the applicant</li>
        <li>Business address proof (see the address section below)</li>
        <li>Bank proof: cancelled cheque, passbook first page or bank statement</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#002b5c] mb-4">
        Partnership Firm / LLP
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-8">
        <li>PAN card of the firm / LLP</li>
        <li>Partnership deed, or LLP agreement and certificate of incorporation</li>
        <li>PAN, Aadhaar and photographs of partners / designated partners</li>
        <li>Authorisation letter for the authorised signatory</li>
        <li>Business address proof and bank proof in the firm&apos;s name</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#002b5c] mb-4">
        Private Limited Company
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-8">
        <li>Certificate of incorporation, company PAN, MOA and AOA</li>
        <li>PAN, Aadhaar and photographs of directors</li>
        <li>Board resolution appointing the authorised signatory</li>
        <li>Registered office / business address proof and bank proof</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#002b5c] mb-4">
        Business Address Proof (most common reason for delays)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-6">
        <li>
          <strong>Own premises:</strong> recent electricity bill, property tax
          receipt or ownership document
        </li>
        <li>
          <strong>Rented premises:</strong> rent agreement plus the
          owner&apos;s electricity bill or property document, and usually an
          NOC from the owner
        </li>
        <li>
          <strong>Premises of a relative / shared space:</strong> consent
          letter or NOC from the owner along with the owner&apos;s address proof
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        The GST department may also ask for a clear, geo-tagged photograph of
        the business premises showing the name board. For a complete
        entity-wise checklist, read our guide on{" "}
        <Link href="/blog/gst-registration-documents-india" className={linkClass}>
          GST registration documents
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step-by-Step GST Registration Process
      </h2>

      <ol className="list-decimal pl-6 space-y-5 text-gray-700 leading-8 mb-8">
        <li>
          <strong>Part A of Form GST REG-01:</strong> On the GST portal
          (gst.gov.in), enter your legal name as per PAN, state (Haryana),
          district, PAN, mobile number and email. After OTP verification you
          receive a <strong>Temporary Reference Number (TRN)</strong>.
        </li>
        <li>
          <strong>Part B of the application:</strong> Using the TRN, fill in
          business details, promoters / partners, authorised signatory,
          principal place of business, the goods or services you deal in
          (HSN / SAC codes) and upload documents. If you are eligible and want
          fast-track registration, this is where you can opt for Rule 14A.
        </li>
        <li>
          <strong>Aadhaar authentication (important for Haryana):</strong>{" "}
          After submission, the portal sends an email. Based on your risk
          profile, you either complete OTP-based Aadhaar authentication online,
          or you receive a link to book an appointment at a{" "}
          <strong>GST Suvidha Kendra (GSK)</strong> for biometric
          authentication and verification of original documents.
        </li>
        <li>
          <strong>ARN generation:</strong> Once authentication is complete, an
          Application Reference Number (ARN) is generated. You can track the
          status on the portal using this ARN.
        </li>
        <li>
          <strong>Officer verification:</strong> The GST officer reviews the
          application. If something is missing, a clarification notice (Form
          GST REG-03) is issued, and a reply with documents must be filed in
          Form GST REG-04 within 7 working days.
        </li>
        <li>
          <strong>Approval and certificate:</strong> On approval, you receive
          your <strong>GSTIN</strong> and registration certificate (Form GST
          REG-06), which can be downloaded from the portal.
        </li>
        <li>
          <strong>Add bank details:</strong> If you did not add bank details
          while applying, add them within 30 days of registration or before
          filing your first GSTR-1 / IFF, whichever is earlier (Rule 10A).
        </li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Biometric Verification: What Ambala Applicants Should Know
        </h3>
        <p className="text-gray-700 leading-8 mb-3">
          If you are asked for biometric verification, the appointment email
          mentions the GSK assigned to your jurisdiction. As per the Haryana
          notification on GST Suvidha Kendras, the GSK for Ambala is at the{" "}
          <strong>SDO (Civil) Complex, near Ambala Cantt bus stand</strong>.
          Always follow the address and time slot given in your own
          appointment email.
        </p>
        <p className="text-gray-700 leading-8">
          Carry the appointment email, <strong>original Aadhaar and PAN</strong>
          , and originals of every document you uploaded with the application.
          Book the appointment within the time allowed in the email, otherwise
          the application may have to be filed again.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How Long Does GST Registration Take?
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Time Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Normal application, Aadhaar authenticated
              </td>
              <td className="border px-4 py-3">7 working days (Rule 9)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Physical verification required / Aadhaar not authenticated
              </td>
              <td className="border px-4 py-3">Up to 30 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Clarification notice (REG-03) issued
              </td>
              <td className="border px-4 py-3">
                Decision within 7 working days of your reply
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Rule 14A (eligible small businesses)
              </td>
              <td className="border px-4 py-3">3 working days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Rule 14A: Fast-Track Registration for Small Businesses
      </h2>

      <p className="text-gray-700 leading-8 mb-4">
        From 1 November 2025, a simplified registration option under Rule 14A
        of the CGST Rules is available. It suits small businesses whose
        monthly output tax on supplies to <strong>registered buyers
        (B2B)</strong> will not exceed ₹2.5 lakh. After successful Aadhaar
        authentication, registration is granted electronically within 3
        working days.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        This option comes with conditions, for example limits on B2B supplies
        and a specific procedure (Form GST REG-32) to withdraw from it later.
        If you expect your B2B sales to grow quickly, discuss with a
        consultant before choosing it.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Registration Fees in Ambala
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Particular</th>
              <th className="border px-4 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Government fee (GST portal)</td>
              <td className="border px-4 py-3">₹0</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Professional fee</td>
              <td className="border px-4 py-3">
                Depends on business type and case complexity
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        A professional fee covers document review, choosing the correct
        business activity and HSN / SAC codes, filing the application,
        handling biometric verification guidance and replying to any
        clarification notice. You can see our current fixed fees for
        proprietorship, partnership and company registration on our{" "}
        <Link href="/gst-registration" className={linkClass}>
          GST Registration service page
        </Link>
        . For a detailed breakdown, read{" "}
        <Link href="/blog/gst-registration-fees-india" className={linkClass}>
          GST registration fees in India
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Mistakes That Delay Approval
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Name on PAN and Aadhaar not matching the name entered in the application</li>
        <li>Rent agreement without an NOC, or an old / unclear electricity bill</li>
        <li>Address in the application not matching the address proof exactly</li>
        <li>Wrong or incomplete HSN / SAC codes for your goods or services</li>
        <li>Missing the biometric appointment or not carrying original documents</li>
        <li>Not replying to a REG-03 clarification notice within 7 working days</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        After Registration: Compliance You Must Follow
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          Display your GST registration certificate at your principal place of
          business and mention your GSTIN on the name board
        </li>
        <li>Issue proper GST invoices with your GSTIN</li>
        <li>
          File returns on time (GSTR-1 and GSTR-3B, monthly or quarterly),
          including nil returns when there are no sales. Learn more on our{" "}
          <Link href="/gst-return-filing" className={linkClass}>
            GST Return Filing service page
          </Link>
          .
        </li>
        <li>
          Update any change in address, partners or business activity through
          a registration amendment
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Registration Help in Ambala
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates is based at Sector-9, Ambala City. We
        help proprietors, partnership firms, LLPs and companies in Ambala City,
        Ambala Cantt and nearby areas with document preparation, the online
        application, biometric verification guidance and replies to department
        queries. You can visit our office or get everything done online.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a consultation
        </Link>{" "}
        or explore our{" "}
        <Link href="/gst-registration" className={linkClass}>
          GST Registration services
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
        Disclaimer: This article is for general information based on GST law
        and procedures as of September 2026. Rules and portal processes change
        from time to time, so please verify the latest position or consult a
        professional before acting.
      </p>
    </>
  );
}
