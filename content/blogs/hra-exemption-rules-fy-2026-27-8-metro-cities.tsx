import Link from "next/link";

const faqs = [
  {
    q: "FY 2026-27 mein HRA ke liye metro cities kaunsi hain?",
    a: "Income-tax Rules 2026 ke hisaab se 8 cities: Mumbai, Delhi, Kolkata, Chennai, Bengaluru, Hyderabad, Pune aur Ahmedabad — in sab mein 50% limit lagti hai.",
  },
  {
    q: "Kya new tax regime mein HRA exemption milta hai?",
    a: "Nahi. HRA exemption sirf old tax regime mein available hai.",
  },
  {
    q: "Landlord ka PAN kab dena zaroori hai?",
    a: "Agar saal bhar ka rent ₹1 lakh se zyada hai, to employer ko landlord ka PAN dena zaroori hai.",
  },
  {
    q: "Kya main parents ko rent dekar HRA claim kar sakta hoon?",
    a: "Haan, agar ghar parents ke naam par hai, aap actually rent pay karte hain (bank transfer behtar hai) aur parents us rent ko apni ITR mein income ke roop mein dikhate hain.",
  },
  {
    q: "Agar employer ne HRA exemption nahi diya to kya ITR mein claim kar sakte hain?",
    a: "Haan, old regime choose karke ITR file karte waqt HRA exemption claim kar sakte hain, bas rent receipts aur proofs sambhal kar rakhein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function HraExemptionRulesFy2026278MetroCitiesBlog() {
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
        Kiraye ke ghar mein rehne wale salaried employees ke liye HRA sabse badi tax saving hai. <strong>1 April 2026 se</strong> Income-tax Rules 2026 ke saath isme ek bada badlav aaya hai — ab Bengaluru, Hyderabad, Pune aur Ahmedabad mein rehne walon ko bhi Mumbai-Delhi ki tarah <strong>50% wali limit</strong> milegi. Ye guide formula, naye rules aur zaroori documents ko simple tarike se samjhati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>HRA exemption sirf <strong>old tax regime</strong> mein milta hai — new regime mein nahi</li>
          <li>Exemption = teen amounts mein se jo sabse kam ho (least of three)</li>
          <li>FY 2026-27 se 50% wali list mein 8 cities: Mumbai, Delhi, Kolkata, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad</li>
          <li>Baaki shehron (jaise Ambala, Chandigarh) ke liye 40% limit hi hai</li>
          <li>Employer ko declaration ab Form 12BB ki jagah naye <strong>Form 124</strong> mein jaata hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        HRA Exemption Ka Formula — Least of Three
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        HRA exemption in teen mein se <strong>sabse kam</strong> amount hota hai:
      </p>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Employer se mila actual HRA</li>
        <li>Diya gaya rent <strong>minus</strong> salary ka 10%</li>
        <li>Salary ka 50% (8 metro cities mein) ya 40% (baaki shehron mein)</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Yahan <strong>salary</strong> ka matlab hai Basic + DA (agar DA retirement benefits ke liye count hota hai) + turnover par commission (agar fixed percentage ho). Gross salary nahi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kya Badla — 4 Naye Shehar 50% List Mein
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Tax year</th>
              <th className="border px-4 py-3 text-left">50% limit wale shehar</th>
              <th className="border px-4 py-3 text-left">Baaki shehar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">FY 2025-26 tak</td>
              <td className="border px-4 py-3">Mumbai, Delhi, Kolkata, Chennai</td>
              <td className="border px-4 py-3">40%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">FY 2026-27 se</td>
              <td className="border px-4 py-3">Upar ke 4 + Bengaluru, Hyderabad, Pune, Ahmedabad</td>
              <td className="border px-4 py-3">40%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ye badlav July 2026 wali ITR mein nahi dikhega
        </h3>
        <p className="text-gray-700 leading-8">
          Naya rule income earned from 1 April 2026 par lagta hai. FY 2025-26 ki return (jo 2026 mein file hui) mein purana 4-city rule hi lagu tha. Naya fayda aapko FY 2026-27 ki salary TDS mein aur 2027 mein file hone wali return mein milega.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Example — Pune Ka Employee
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Basic + DA: ₹50,000/month (₹6,00,000/saal). HRA mila: ₹25,000/month (₹3,00,000). Rent diya: ₹22,000/month (₹2,64,000).
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Calculation</th>
              <th className="border px-4 py-3 text-left">FY 2025-26 (40%)</th>
              <th className="border px-4 py-3 text-left">FY 2026-27 (50%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Actual HRA</td>
              <td className="border px-4 py-3">₹3,00,000</td>
              <td className="border px-4 py-3">₹3,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Rent − 10% salary</td>
              <td className="border px-4 py-3">₹2,04,000</td>
              <td className="border px-4 py-3">₹2,04,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">40% / 50% of salary</td>
              <td className="border px-4 py-3">₹2,40,000</td>
              <td className="border px-4 py-3">₹3,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Exemption (least)</strong></td>
              <td className="border px-4 py-3"><strong>₹2,04,000</strong></td>
              <td className="border px-4 py-3"><strong>₹2,04,000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Is example mein exemption rent wali limit se decide hua, isliye badlav ka asar nahi pada. Jinka rent zyada hai aur salary ka percentage limit ban raha tha, unhe sabse zyada fayda hoga. Apne numbers daal kar dekhne ke liye hamara free{" "}<Link href="/hra-exemption-calculator" className={linkClass}>HRA Exemption Calculator</Link>{" "}use karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Zaroori Documents aur Rules
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Rent receipts ya rent agreement — employer maang sakta hai</li>
        <li>Saal ka rent <strong>₹1 lakh se zyada</strong> ho to landlord ka <strong>PAN</strong> dena zaroori hai</li>
        <li>Naye <strong>Form 124</strong> mein landlord ke saath aapka rishta (relationship) bhi batana hota hai</li>
        <li>Parents ko rent de sakte hain agar ghar unke naam hai aur wo us rent ko apni income mein dikhate hain — spouse ko rent dena aam taur par scrutiny mein aata hai</li>
        <li>Apne khud ke ghar mein reh rahe hain to HRA exemption nahi milta</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old vs New Regime — HRA Ke Saath Kaunsa Behtar
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        New regime mein HRA exemption nahi hai, lekin slab rates kam hain aur ₹12 lakh tak (standard deduction ke baad) tax zero hai. Agar aapka HRA exemption, 80C aur home loan interest mila kar bada banta hai, to old regime faydemand ho sakta hai. Dono compare karne ke liye hamara{" "}<Link href="/income-tax-calculator" className={linkClass}>Income Tax Calculator</Link>{" "}use karein aur{" "}<Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>regime comparison guide</Link>{" "}padhein.
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
        HRA rules Income-tax Rules, 2026 (1 April 2026 se lagu) par based hain aur 24 September 2026 tak verify kiye gaye hain. Apni salary structure ke hisaab se exact exemption ke liye humse consult karein.
      </p>
    </>
  );
}
