import Link from "next/link";

const faqs = [
  {
    q: "Senior citizen ke liye kaunsa regime behtar hai?",
    a: "₹12-13 lakh tak ki income (mostly pension/interest) par new regime mein tax aksar zero aata hai. Zyada deductions (80D, 80TTB) ho to old regime compare karein.",
  },
  {
    q: "FD interest par TDS kab katta hai senior citizens ke liye?",
    a: "Jab ek bank se saal ka interest ₹1 lakh se zyada ho. Income taxable limit se kam hai to Form 15H dekar TDS rukwa sakte hain.",
  },
  {
    q: "Kya senior citizens ko advance tax bharna padta hai?",
    a: "Agar business/profession ki income nahi hai to nahi. Tax ITR file karte waqt self-assessment tax mein bhar sakte hain.",
  },
  {
    q: "80TTB aur 80TTA dono mil sakte hain?",
    a: "Nahi. Senior citizen ko 80TTB milta hai (₹50,000, savings + FD), aur tab 80TTA nahi milta.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function SeniorCitizenIncomeTaxBenefitsFy202627Blog() {
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
        Retirement ke baad income ka zariya pension, FD interest aur rent ban jaata hai — aur yahan tax planning galat hone par har saal hazaaron rupaye zyada kat jaate hain. Tax law 60 saal se upar walon ko kai special benefits deta hai. Ye guide un sab ko ek jagah samjhati hai, taaki aap ya aapke parents inka poora fayda utha sakein.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Senior citizen: 60-79 saal; super senior citizen: 80+ saal</li>
          <li>Old regime: basic exemption ₹3 lakh (60+) aur ₹5 lakh (80+); new regime mein sabke liye same slabs</li>
          <li>80TTB: bank/post office interest par ₹50,000 tak deduction (old regime)</li>
          <li>Bank FD interest par TDS tabhi jab ek bank se saal ka interest ₹1 lakh se zyada ho</li>
          <li>Business income na ho to advance tax nahi bharna padta</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old vs New Regime — Senior Citizens Ke Liye
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Old regime</th>
              <th className="border px-4 py-3 text-left">New regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Basic exemption (60-79)</td>
              <td className="border px-4 py-3">₹3,00,000</td>
              <td className="border px-4 py-3">₹4,00,000 (sabke liye)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Basic exemption (80+)</td>
              <td className="border px-4 py-3">₹5,00,000</td>
              <td className="border px-4 py-3">₹4,00,000 (sabke liye)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">87A rebate</td>
              <td className="border px-4 py-3">₹5 lakh taxable income tak</td>
              <td className="border px-4 py-3">₹12 lakh taxable income tak</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">80TTB (interest ₹50,000)</td>
              <td className="border px-4 py-3">Milta hai</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">80D (health insurance)</td>
              <td className="border px-4 py-3">₹50,000 tak</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Standard deduction on pension</td>
              <td className="border px-4 py-3">₹50,000</td>
              <td className="border px-4 py-3">₹75,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Zyada tar pensioners ke liye jinki income ₹12-13 lakh tak hai, <strong>new regime mein tax zero</strong> aa jaata hai (87A rebate aur ₹75,000 standard deduction ki wajah se). Lekin jinka medical insurance premium aur FD interest zyada hai, unhe dono regime compare karne chahiye. Hamara{" "}<Link href="/income-tax-calculator" className={linkClass}>Income Tax Calculator</Link>{" "}60+ aur 80+ age group ke hisaab se compare karta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        80TTB — Interest Income Par ₹50,000 Deduction
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Old regime mein senior citizens ko bank, co-operative bank aur post office ke <strong>savings aur FD dono</strong> ke interest par ₹50,000 tak deduction milti hai (naye Act mein renumbered). Ye deduction 80TTA (₹10,000, sirf savings) ki jagah milti hai — dono ek saath nahi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        FD Interest Par TDS — ₹1 Lakh Ki Limit
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Senior citizens ke liye bank tabhi TDS kaatta hai jab <strong>ek bank se saal ka interest ₹1 lakh</strong> se zyada ho. Agar aapki total income taxable limit se kam hai, to bank ko <strong>Form 15H</strong> (naye rules mein naya form number) dekar TDS rukwa sakte hain. Budget 2026 ne ise aur aasaan kiya — ab depository ke through ek hi declaration kaafi hogi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advance Tax Se Chhoot
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Resident senior citizen jinki <strong>business ya profession ki income nahi hai</strong>, unhe advance tax nahi bharna padta — chahe tax ₹10,000 se zyada bane. Wo ITR file karte waqt self-assessment tax bhar sakte hain, bina interest ke. Business income wale seniors ko advance tax dena padta hai — schedule dekhne ke liye{" "}<Link href="/advance-tax-calculator" className={linkClass}>Advance Tax Calculator</Link>{" "}use karein.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          75+ ke liye ITR se chhoot — lekin conditions ke saath
        </h3>
        <p className="text-gray-700 leading-8">
          75 saal se upar ke resident senior citizen jinki income <strong>sirf pension aur usi bank ke interest</strong> se hai, wo bank ko declaration dekar ITR file karne se chhoot le sakte hain — bank hi tax kaat leta hai. Rent ya doosre bank ka interest bhi hai to ye chhoot nahi milti.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Health Insurance — 80D
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Old regime mein senior citizen ke health insurance premium par <strong>₹50,000</strong> tak deduction milti hai. Agar senior citizen ka insurance nahi hai, to medical kharche par bhi ₹50,000 tak deduction mil sakti hai. Bachche apne senior citizen parents ka premium bharein to unhe bhi alag se ₹50,000 tak ki deduction milti hai. Baaki deductions hamari{" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C to 80U guide</Link>{" "}mein hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Apne parents ki ITR aur tax planning ke liye hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing service</Link>{" "}mein senior citizens ke liye special dhyan rakha jaata hai.
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
        Ye jaankari FY 2026-27 ke rules par based hai (Budget 2026 mein slabs mein koi badlav nahi hua) aur 24 September 2026 tak verify ki gayi hai. Section numbers 1 April 2026 se Income-tax Act, 2025 mein badle hain — apne case ke liye humse salah lein.
      </p>
    </>
  );
}
