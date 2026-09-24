import Link from "next/link";

const faqs = [
  {
    q: "Property TDS ke liye buyer ko TAN chahiye?",
    a: "Resident seller se khareedne par nahi — PAN se Form 141 bhar sakte hain. NRI seller ke case mein TAN zaroori hai.",
  },
  {
    q: "Form 26QB ab kab use hota hai?",
    a: "Sirf un payments ke liye jo 1 April 2026 se pehle hui thi. Uske baad ki payments ke liye Form 141.",
  },
  {
    q: "₹49 lakh ki property par TDS lagega?",
    a: "Nahi, agar consideration aur stamp duty value dono ₹50 lakh se kam hain. Lekin stamp duty value ₹50 lakh+ hai to TDS lagega.",
  },
  {
    q: "Seller ka PAN nahi hai to kya karein?",
    a: "Us case mein TDS 20% ki rate se kaatna padta hai, isliye deal se pehle seller ka valid aur operative PAN le lein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TdsOnPropertyPurchaseForm14126qbBlog() {
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
        Ghar ya plot khareedte waqt ek zimmedari <strong>khareedar (buyer)</strong> par hoti hai jo aksar bhool jaati hai — seller ko payment karte waqt 1% TDS kaat kar government mein jama karna. <strong>1 April 2026 se</strong> iska form bhi badal gaya hai: purane Form 26QB ki jagah ab <strong>Form 141</strong> aa gaya hai. Ye guide naya process batati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>₹50 lakh ya usse zyada ki immovable property (agricultural land chhodkar) par buyer 1% TDS kaatega</li>
          <li>1 April 2026 se: Section 393(1) (pehle 194IA), <strong>Form 141</strong> (pehle 26QB), certificate <strong>Form 132</strong> (pehle 16B)</li>
          <li>Buyer ko TAN lene ki zaroorat nahi — PAN se hi kaam ho jaata hai</li>
          <li>Kai sellers hon to bhi ab ek buyer ek hi Form 141 bharta hai</li>
          <li>Seller NRI hai to ye rule nahi — zyada rate se TDS aur TAN zaroori</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Kab aur Kitna
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Kab lagta hai</td>
              <td className="border px-4 py-3">Property ka consideration ya stamp duty value ₹50 lakh ya zyada</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Rate</td>
              <td className="border px-4 py-3">1% (seller ka PAN na ho ya inoperative ho to 20%)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Kis amount par</td>
              <td className="border px-4 py-3">Consideration aur stamp duty value mein jo zyada ho</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Kisko kaatna hai</td>
              <td className="border px-4 py-3">Buyer (khareedne wala)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Kab jama karna hai</td>
              <td className="border px-4 py-3">Jis mahine payment/TDS kata, uske end se 30 din ke andar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Installments mein payment ho rahi hai (under-construction flat) to <strong>har installment</strong> par 1% TDS kaatna hai. Dhyan dein: ₹50 lakh ki limit poori property ki value par dekhi jaati hai, har installment par nahi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 26QB Se Form 141 — Kya Badla
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left"></th>
              <th className="border px-4 py-3 text-left">31 March 2026 tak</th>
              <th className="border px-4 py-3 text-left">1 April 2026 se</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Section</td>
              <td className="border px-4 py-3">194IA (Income-tax Act 1961)</td>
              <td className="border px-4 py-3">393(1) (Income-tax Act 2025)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Challan-cum-statement</td>
              <td className="border px-4 py-3">Form 26QB</td>
              <td className="border px-4 py-3">Form 141</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS certificate</td>
              <td className="border px-4 py-3">Form 16B</td>
              <td className="border px-4 py-3">Form 132</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Kai sellers</td>
              <td className="border px-4 py-3">Har seller ke liye alag 26QB</td>
              <td className="border px-4 py-3">Ek buyer ka ek Form 141</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Payment ki <strong>date</strong> decide karti hai ki kaunsa form lagega. 1 April 2026 se pehle ki payment ke liye purana 26QB process, uske baad ki payment ke liye Form 141.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step-by-Step Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>incometax.gov.in par login karke e-Pay Tax mein property TDS (Form 141) option chunein</li>
        <li>Buyer, seller aur property ki details bharein (PAN, address, agreement date, value)</li>
        <li>TDS amount online pay karein aur challan receipt download karein</li>
        <li>Kuch din baad TRACES se <strong>Form 132</strong> (TDS certificate) download karke seller ko dein</li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Late hone par kharcha
        </h3>
        <p className="text-gray-700 leading-8">
          TDS late kaata to 1% per month, late jama kiya to 1.5% per month interest lagta hai. Statement late bharne par ₹200 per day late fee (TDS amount tak) lagti hai. Registration ke waqt kai jagah TDS proof maanga jaata hai, isliye ise payment ke saath hi nipta lein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Seller NRI Hai To Alag Rule
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Seller non-resident hai to 1% wala rule <strong>lagu nahi hota</strong>. Buyer ko TAN lena padta hai aur capital gains par kaafi zyada rate (LTCG par 12.5% + surcharge + cess) se TDS kaatna hota hai — Section 393(2) (pehle 195) ke tahat. Seller lower TDS certificate le sakta hai. Iske liye hamara{" "}<Link href="/nri-property-tds-calculator" className={linkClass}>NRI Property TDS Calculator</Link>{" "}aur{" "}<Link href="/nri-lower-tds-certificate-checklist" className={linkClass}>lower TDS certificate checklist</Link>{" "}dekhein.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Property bechne wale ke tax ki jaankari{" "}<Link href="/blog/capital-gains-tax-on-property-sale-section-54" className={linkClass}>property capital gains guide</Link>{" "}mein hai. TDS compliance mein madad ke liye hamari{" "}<Link href="/tds-return-filing" className={linkClass}>TDS Return Filing</Link>{" "}service available hai.
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
        Form 141 aur Form 132 ke naye rules Income-tax Rules, 2026 (1 April 2026 se lagu) par based hain aur 24 September 2026 tak verify kiye gaye hain. Apne transaction ke liye humse confirm karein.
      </p>
    </>
  );
}
