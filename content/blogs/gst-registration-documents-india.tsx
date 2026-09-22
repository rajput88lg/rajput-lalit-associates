import Link from "next/link";

const faqs = [
  {
    q: "What documents are required for GST registration of a proprietorship?",
    a: "PAN and Aadhaar of the proprietor, a passport-size photograph, proof of the business address (electricity bill, property tax receipt or municipal khata — plus a rent agreement or consent letter if the place is not yours), and bank account proof such as a cancelled cheque or bank statement.",
  },
  {
    q: "What is accepted as address proof for GST registration?",
    a: "For your own premises: a recent electricity bill, property tax receipt or municipal khata copy. For rented premises: the rent/lease agreement plus one ownership document of the landlord. For premises you use without rent (a relative's shop or home): a consent letter / NOC from the owner plus one ownership document of the owner.",
  },
  {
    q: "Can I get GST registration on my home address?",
    a: "Yes. A residential address is allowed as the principal place of business if you submit valid address proof. If the house is in a family member's name, attach a consent letter from them along with their electricity bill or property tax receipt.",
  },
  {
    q: "GST registration ke liye kaun se documents chahiye?",
    a: "PAN card, Aadhaar card, photo, business address proof (bijli bill / property tax receipt, aur kiraye ki jagah ho to rent agreement ya malik ka NOC), aur bank proof (cancelled cheque ya statement). Partnership, LLP aur company ke liye deed / incorporation certificate aur authorisation letter bhi lagta hai.",
  },
  {
    q: "Is bank account proof mandatory at the time of application?",
    a: "Under Rule 10A you can furnish bank account details within 30 days of getting registration, or before filing your first GSTR-1/IFF, whichever is earlier. Many applicants still upload it upfront so nothing is pending later.",
  },
  {
    q: "Is biometric Aadhaar authentication required?",
    a: "Aadhaar authentication is required for most applicants. On 8 September 2026 the Delhi High Court directed that no new GST registration be granted anywhere in India without biometric Aadhaar authentication. Carry the original PAN, Aadhaar and the documents you uploaded when you visit the GST Suvidha Kendra, and check the latest GSTN advisory before applying.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";
const th = "border px-4 py-3 text-left";
const td = "border px-4 py-3 align-top";

export default function GSTRegistrationDocumentsIndia() {
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

      <p className="text-gray-700 leading-8 mb-6">
        Most GST registration applications that get stuck are not rejected for the
        business itself — they are held up by one weak document, usually the address
        proof. This checklist covers every business type, explains exactly which
        address proof works in which situation, and lists the mistakes that trigger a
        clarification notice (Form REG-03).
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-[#002b5c] mb-3">Quick Checklist (All Businesses)</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>PAN of the business (or of the proprietor)</li>
          <li>Aadhaar and photograph of the proprietor / partners / directors</li>
          <li>Proof of constitution — deed, incorporation certificate (not needed for proprietorship)</li>
          <li>Principal place of business address proof (see the table below)</li>
          <li>Authorisation for the signatory (not needed for proprietorship)</li>
          <li>Bank account proof — can also be added within 30 days after approval</li>
          <li>Mobile number and email linked to the applicant, for OTPs</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Documents by Business Type
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className={th}>Business type</th>
              <th className={th}>Documents required</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className={td}><strong>Proprietorship</strong></td>
              <td className={td}>
                PAN and Aadhaar of proprietor, photograph, business address proof,
                bank proof. Signed with Aadhaar OTP (EVC).
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}><strong>Partnership firm</strong></td>
              <td className={td}>
                Partnership deed, PAN of firm, PAN + Aadhaar + photo of all partners,
                authorisation letter for the signing partner, address proof, bank proof.
              </td>
            </tr>
            <tr>
              <td className={td}><strong>LLP</strong></td>
              <td className={td}>
                Certificate of incorporation, LLP agreement, PAN of LLP, PAN + Aadhaar +
                photo of designated partners, authorisation / resolution, address proof,
                bank proof. <strong>Must be signed with a DSC.</strong>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}><strong>Private Limited / OPC</strong></td>
              <td className={td}>
                Certificate of incorporation, MOA and AOA, company PAN, PAN + Aadhaar +
                photo of directors, board resolution appointing the authorised
                signatory, address proof, bank proof.{" "}
                <strong>Must be signed with a DSC.</strong>
              </td>
            </tr>
            <tr>
              <td className={td}><strong>HUF</strong></td>
              <td className={td}>
                PAN of HUF, PAN + Aadhaar + photo of the Karta, address proof, bank
                proof.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Address Proof for GST Registration — Which Document When
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        This is where most applications fail. The rule is simple: you must show the
        place exists (an ownership-type document) <em>and</em> that you have the right
        to use it (if it is not yours).
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className={th}>Your situation</th>
              <th className={th}>Upload this</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className={td}>Own premises</td>
              <td className={td}>
                Any one: recent electricity bill, property tax receipt, or municipal
                khata copy in your name.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}>Rented / leased premises</td>
              <td className={td}>
                Rent or lease agreement <strong>plus</strong> one ownership document of
                the landlord (electricity bill, property tax receipt or khata).
              </td>
            </tr>
            <tr>
              <td className={td}>Family member&apos;s or friend&apos;s premises, no rent</td>
              <td className={td}>
                Consent letter / NOC signed by the owner <strong>plus</strong> one
                ownership document of the owner.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className={td}>Home used as office</td>
              <td className={td}>
                Same as above — your own bill/tax receipt if you own it, or consent
                letter + owner&apos;s document if it is in a family member&apos;s name.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-8 mb-10">
        During verification the officer may also ask for a photograph of the premises
        with the business name board. If the address on the electricity bill is
        incomplete, add a clear full address in the application and keep the consent
        letter consistent with it — address mismatches are the single most common
        reason for a REG-03 notice.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Bank Account Proof</h2>
      <p className="text-gray-700 leading-8 mb-10">
        A cancelled cheque, the first page of the passbook, or a recent bank statement
        showing the account holder&apos;s name, account number and IFSC. Under Rule 10A
        this can also be added within 30 days of registration or before your first
        GSTR-1/IFF, whichever is earlier — but uploading it upfront avoids a pending
        item later.
      </p>

      <div className="bg-[#fff9ed] border-l-4 border-[#d99a2b] rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-[#002b5c] mb-2">
          Update — September 2026: Biometric Aadhaar Authentication
        </h2>
        <p className="text-gray-700 leading-7">
          On 8 September 2026 the Delhi High Court directed that no fresh GST
          registration be granted anywhere in India without biometric Aadhaar
          authentication. In Haryana, applicants were already being called to a GST
          Suvidha Kendra (GSK) for this. When you go, carry the original PAN, Aadhaar
          and every document you uploaded. Check the latest GSTN advisory before
          applying, since the court is still hearing the matter and the process may
          be refined.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Reasons Applications Get Held Up
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Address on the proof does not match the address typed in the application.</li>
        <li>Rent agreement uploaded without any ownership document of the landlord.</li>
        <li>Consent letter not signed by the actual owner shown on the bill or tax receipt.</li>
        <li>Name or date of birth on PAN and Aadhaar do not match.</li>
        <li>Blurred, cropped or password-protected scans.</li>
        <li>Wrong constitution selected (for example, a partnership filed as a proprietorship).</li>
        <li>Missing DSC for a company or LLP application.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Related Guides</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-8 mb-10">
        <li>
          <Link href="/blog/gst-registration-fees-india" className={linkClass}>
            GST Registration Fees in India — Full Cost Breakdown
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
          Not sure your address proof will pass? Send it to us before you apply. Our{" "}
          <Link href="/gst-registration" className={linkClass}>
            GST Registration service
          </Link>{" "}
          checks every document first, so you do not lose weeks on a clarification
          notice.
        </p>
      </div>
    </>
  );
}
