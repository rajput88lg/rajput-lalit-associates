import Link from "next/link";

const faqs = [
  {
    q: "NRI landlord ko rent dene par kitna TDS kaatna hai?",
    a: "30% + surcharge (agar lagu) + 4% cess — aam taur par 31.2%, jab tak NRI ne lower TDS certificate na diya ho.",
  },
  {
    q: "Kya chhote kiraye par bhi TDS lagta hai NRI ke case mein?",
    a: "Haan. NRI ko payment par koi threshold nahi hai — har rupaye ke kiraye par TDS lagta hai.",
  },
  {
    q: "NRI ka zyada kata TDS kaise wapas milega?",
    a: "India mein ITR file karke. Actual tax (30% standard deduction ke baad) kam bana to baaki TDS refund ho jaata hai.",
  },
  {
    q: "Kya tenant ko TAN lena zaroori hai?",
    a: "Haan, NRI landlord ke case mein TDS jama karne aur Form 27Q file karne ke liye TAN zaroori hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NriRentalIncomeIndiaTaxTdsGuideBlog() {
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
        Videsh mein rehte hue India wala ghar kiraye par dena bahut NRIs karte hain. Lekin yahan ek surprise hota hai — tenant ko kiraye ka <strong>lagbhag 31%</strong> TDS kaatna padta hai, chahe aapki actual tax liability bahut kam ho. Aur zyada tar tenants ko ye pata hi nahi hota, jisse baad mein dono ko notice aata hai. Ye guide NRI landlord aur tenant dono ke liye hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>NRI ko kiraya dene par tenant <strong>30% + surcharge + 4% cess</strong> (aam taur par 31.2%) TDS kaatega</li>
          <li>Koi threshold nahi — ₹1 ke kiraye par bhi TDS</li>
          <li>Tenant ko <strong>TAN</strong> lena aur quarterly <strong>Form 27Q</strong> file karna padta hai</li>
          <li>Actual tax kam hai to NRI <strong>lower TDS certificate</strong> le sakta hai</li>
          <li>Zyada kata TDS ITR file karke <strong>refund</strong> mein wapas milta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Resident vs NRI Landlord — Farak
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Resident landlord</th>
              <th className="border px-4 py-3 text-left">NRI landlord</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">TDS rate</td>
              <td className="border px-4 py-3">2% (monthly rent ₹50,000+ par, individual tenant)</td>
              <td className="border px-4 py-3">30% + surcharge + cess</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Threshold</td>
              <td className="border px-4 py-3">₹50,000 per month</td>
              <td className="border px-4 py-3">Koi threshold nahi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Tenant ko TAN</td>
              <td className="border px-4 py-3">Nahi chahiye</td>
              <td className="border px-4 py-3">Zaroori</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Return</td>
              <td className="border px-4 py-3">Challan-cum-statement</td>
              <td className="border px-4 py-3">Quarterly Form 27Q</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        NRI Ki Actual Tax Liability Kitni
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rental income par NRI ko bhi <strong>30% standard deduction</strong> aur municipal tax ki deduction milti hai. Example: saal ka kiraya ₹4.8 lakh, municipal tax ₹10,000. Net Annual Value ₹4.7 lakh, minus 30% = <strong>₹3.29 lakh taxable</strong>. NRI ke liye new regime mein ₹4 lakh tak tax zero hai, aur 87A rebate NRI ko nahi milti — lekin is example mein tax lagbhag <strong>zero</strong> banta hai. Jabki tenant ne ₹4.8 lakh ka 31.2% = <strong>₹1.5 lakh</strong> TDS kaat liya! Ye paisa refund se hi wapas aayega.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Isliye lower TDS certificate zaroori hai
        </h3>
        <p className="text-gray-700 leading-8">
          Refund ka intezaar karne ki jagah NRI landlord income tax department se <strong>lower/nil TDS certificate</strong> le sakta hai (naye rules mein Section 395 / Form 128). Certificate milne par tenant usi kam rate se TDS kaatega. Hamari{" "}<Link href="/nri-lower-tds-certificate-checklist" className={linkClass}>lower TDS certificate checklist</Link>{" "}mein poora process hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tenant Ki Zimmedari
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>TAN ke liye apply karein (Form 49B ke naye equivalent se)</li>
        <li>Har payment par TDS kaat kar agle mahine ki 7 tareekh tak jama karein</li>
        <li>Har quarter Form 27Q file karein</li>
        <li>Landlord ko TDS certificate (Form 16A ka naya equivalent) dein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Tenant ne TDS nahi kaata to rent ka kharcha nahi, balki <strong>poora TDS amount + interest + penalty</strong> tenant se vasool ho sakta hai. Isliye NRI landlord ke saath rent agreement karte waqt tenant ye zaroor samjhe.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kiraya Kahan Lein aur Bahar Kaise Bhejein
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Rental income <strong>NRO account</strong> mein aani chahiye (NRE mein nahi) —{" "}<Link href="/blog/nre-nro-fcnr-bank-accounts-explained" className={linkClass}>NRE/NRO/FCNR guide</Link>{" "}</li>
        <li>NRO se bahar paisa bhejne ke liye tax paid hone ka proof aur CA certificate lag sakta hai —{" "}<Link href="/nri-fund-repatriation-guide" className={linkClass}>fund repatriation guide</Link>{" "}</li>
        <li>Rehne wale desh mein bhi rental income dikhani pad sakti hai — DTAA se India mein bhara tax credit milta hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        ITR file karni hai ya nahi, ye jaanne ke liye{" "}<Link href="/nri-itr-filing-requirement-checker" className={linkClass}>NRI ITR Filing Requirement Checker</Link>{" "}use karein, aur kaunsi ITR bharein ye{" "}<Link href="/blog/nri-itr-filing-which-form-dtaa-relief" className={linkClass}>NRI ITR guide</Link>{" "}mein dekhein. Hamari{" "}<Link href="/nri-tax-services" className={linkClass}>NRI Tax Services</Link>{" "}lower TDS certificate se refund tak sab handle karti hai.
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
        NRI rental TDS ke rules 1 April 2026 se Income-tax Act, 2025 ke Section 393(2) mein hain (pehle Section 195) aur 24 September 2026 tak verify kiye gaye hain. Apne case ke liye humse consult karein.
      </p>
    </>
  );
}
