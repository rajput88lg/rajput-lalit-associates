import Link from "next/link";

const faqs = [
  {
    q: "Kya kiraye ki poori income par tax lagta hai?",
    a: "Nahi. Municipal tax minus karne ke baad 30% standard deduction milti hai, aur let-out property ke home loan ka interest bhi deduct hota hai.",
  },
  {
    q: "Dukaan ke kiraye par bhi 30% deduction milti hai?",
    a: "Haan, commercial property ka kiraya bhi 'house property' income hai (agar aap khud business nahi chala rahe), aur 30% standard deduction milti hai. Lekin commercial rent par GST ka rule alag hai.",
  },
  {
    q: "Kya repair ka kharcha alag se deduct kar sakte hain?",
    a: "Nahi. 30% standard deduction hi saare repair/maintenance kharchon ke liye hai — actual kharche alag se deduct nahi hote.",
  },
  {
    q: "Kiraya cash mein milta hai to bhi dikhana zaroori hai?",
    a: "Haan, rental income cash mein mile ya bank mein, ITR mein dikhana zaroori hai. AIS mein tenant ka TDS aur bank credits dikh sakte hain, isliye income chhupana notice ka kaaran ban sakta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxOnRentalIncomeHousePropertyBlog() {
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
        Ghar, flat ya dukaan kiraye par di hai to kiraya aapki income hai aur us par tax lagta hai — lekin poore kiraye par nahi. Income Tax law rental income ko &apos;Income from House Property&apos; maanta hai aur isme kuch automatic deductions milti hain jo tax kaafi kam kar deti hain. Ye guide calculation step-by-step samjhati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Rental income &apos;Income from House Property&apos; head mein taxable hai</li>
          <li>Saal mein diya gaya <strong>municipal/house tax</strong> kiraye se minus hota hai</li>
          <li>Uske baad <strong>30% standard deduction</strong> automatic milti hai — actual kharche dikhane ki zaroorat nahi</li>
          <li>Let-out property ke home loan ka poora interest deduct hota hai</li>
          <li>House property ka loss doosri income se max ₹2 lakh tak hi set-off hota hai (old regime)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Rental Income Ka Calculation — 4 Steps
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Step</th>
              <th className="border px-4 py-3 text-left">Kya karna hai</th>
              <th className="border px-4 py-3 text-left">Example (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">1</td>
              <td className="border px-4 py-3">Gross Annual Value — saal bhar ka kiraya (₹25,000 × 12)</td>
              <td className="border px-4 py-3">3,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">2</td>
              <td className="border px-4 py-3">Minus: saal mein bhara municipal/property tax</td>
              <td className="border px-4 py-3">(10,000)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">3</td>
              <td className="border px-4 py-3">= Net Annual Value</td>
              <td className="border px-4 py-3">2,90,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">4</td>
              <td className="border px-4 py-3">Minus: 30% standard deduction</td>
              <td className="border px-4 py-3">(87,000)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">5</td>
              <td className="border px-4 py-3">Minus: home loan interest (agar hai)</td>
              <td className="border px-4 py-3">(1,20,000)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"></td>
              <td className="border px-4 py-3"><strong>Taxable house property income</strong></td>
              <td className="border px-4 py-3"><strong>83,000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Dhyan dein: 30% standard deduction maintenance, repairs, painting jaise kharchon ke liye fixed deduction hai. Aap actual kharche alag se nahi dikha sakte, chahe zyada hue hon ya kam.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Self-Occupied Ghar Ka Rule
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Jis ghar mein aap khud rehte hain, uski annual value <strong>zero</strong> maani jaati hai. Aap <strong>do ghar</strong> tak self-occupied maan sakte hain (dono ki annual value zero). Teesra ghar khaali bhi ho, to use &apos;deemed let-out&apos; maana jaata hai aur uske notional rent par tax lagta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Home Loan Interest — Let-Out vs Self-Occupied
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Property type</th>
              <th className="border px-4 py-3 text-left">Interest deduction</th>
              <th className="border px-4 py-3 text-left">Regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Self-occupied</td>
              <td className="border px-4 py-3">Max ₹2,00,000 per saal</td>
              <td className="border px-4 py-3">Sirf old regime</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Let-out</td>
              <td className="border px-4 py-3">Poora interest, koi limit nahi</td>
              <td className="border px-4 py-3">Dono regime</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Loss set-off (doosri income se)</td>
              <td className="border px-4 py-3">Max ₹2,00,000; baaki 8 saal carry forward</td>
              <td className="border px-4 py-3">Old regime</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          New regime mein loss set-off nahi hota
        </h3>
        <p className="text-gray-700 leading-8">
          New tax regime mein let-out property ka interest deduct to hota hai, lekin agar house property se loss banta hai to use salary ya business income se set-off nahi kar sakte. Jinka home loan interest kiraye se zyada hai, unke liye old regime behtar ho sakta hai. Details hamari{" "}<Link href="/blog/home-loan-tax-benefits-section-24b-80c" className={linkClass}>home loan tax benefits guide</Link>{" "}mein hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaunsi ITR File Karein
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Salary + <strong>ek</strong> house property + interest income (total ₹50 lakh tak): <strong>ITR-1</strong></li>
        <li>Ek se zyada house property, ya capital gains: <strong>ITR-2</strong></li>
        <li>Business/profession income bhi hai: <strong>ITR-3</strong> (ya presumptive mein ITR-4, ek house property tak)</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Tenant agar mahine ka ₹50,000 se zyada kiraya deta hai to wo TDS kaat sakta hai — ye TDS aapke Form 26AS/AIS mein dikhega aur tax mein adjust hoga. Iske rules hamari{" "}<Link href="/blog/tds-on-rent-section-194ib" className={linkClass}>TDS on rent guide</Link>{" "}mein hain. NRI landlords ke liye alag rules hain —{" "}<Link href="/blog/nri-rental-income-india-tax-tds-guide" className={linkClass}>NRI rental income guide</Link>{" "}dekhein. Rental income ke saath ITR file karwane ke liye hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing service</Link>{" "}available hai.
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
        House property income ke rules Income-tax Act ke tahat hain (1 April 2026 se Income-tax Act, 2025 mein renumber hue hain, substance same hai). Ye jaankari 24 September 2026 tak ki hai — apne case ke liye humse consult karein.
      </p>
    </>
  );
}
