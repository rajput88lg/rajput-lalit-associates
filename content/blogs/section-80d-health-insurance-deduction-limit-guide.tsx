import Link from "next/link";

const faqs = [
  {
    q: "Kya parents ka health insurance hum claim kar sakte hain?",
    a: "Haan, agar premium aap pay karte hain. Parents dependent ho ya nahi, is se fark nahi padta. Limit ₹25,000, ya senior citizen parents ke liye ₹50,000.",
  },
  {
    q: "Kya cash me premium pay karne par 80D milta hai?",
    a: "Nahi. Sirf preventive health check-up cash me pay kar sakte hain. Premium ke liye banking channel zaroori hai.",
  },
  {
    q: "Kya new regime me 80D milta hai?",
    a: "Nahi, 80D sirf old tax regime me available hai.",
  },
  {
    q: "Employer ka group insurance aur personal policy dono claim ho sakti hain?",
    a: "Employer ka group insurance aapki income me perquisite nahi gina jaata. 80D me sirf wo premium claim hota hai jo aapne khud pay kiya hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Section80dHealthInsuranceDeductionLimitGuideBlog() {
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
        Health insurance sirf medical kharche se bachata nahi, tax bhi bachata hai. Section 80D me aap khud, family aur parents ke health insurance premium par deduction claim kar sakte hain. Lekin ye deduction sirf old tax regime me milta hai, isliye kitna fayda hoga ye pehle compare karna zaroori hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Self, spouse aur dependent children: <strong>₹25,000</strong> (senior citizen hone par <strong>₹50,000</strong>)</li>
          <li>Parents ke liye alag: <strong>₹25,000</strong> (senior citizen parents ke liye <strong>₹50,000</strong>)</li>
          <li>Zyada se zyada deduction: <strong>₹1 lakh</strong> (dono taraf senior citizens hon to)</li>
          <li>Preventive health check-up ₹5,000 tak, isi limit ke andar</li>
          <li>Ye deduction <strong>old regime</strong> me hai, new regime me nahi</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        80D Ki Limits: Kitna Deduction Milta Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kiske liye premium</th>
              <th className="border px-4 py-3 text-left">Normal (60 saal se kam)</th>
              <th className="border px-4 py-3 text-left">Senior citizen (60+)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Self, spouse, dependent children</td>
              <td className="border px-4 py-3">₹25,000</td>
              <td className="border px-4 py-3">₹50,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Parents (dependent ho ya nahi)</td>
              <td className="border px-4 py-3">₹25,000</td>
              <td className="border px-4 py-3">₹50,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Maximum total</strong></td>
              <td className="border px-4 py-3"><strong>₹50,000</strong></td>
              <td className="border px-4 py-3"><strong>₹1,00,000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Yaani agar aap 40 saal ke hain aur parents 65 saal ke hain, to aap khud ke liye ₹25,000 aur parents ke liye ₹50,000, total ₹75,000 tak claim kar sakte hain. Agar aap khud aur parents dono senior citizens hain, to total ₹1 lakh tak.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Preventive Health Check-Up
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Preventive health check-up ke kharche par ₹5,000 tak ka deduction milta hai. Ye alag se nahi milta, balki upar wali limits ke <strong>andar hi</strong> shamil hai. Iska fayda ye hai ki is par payment <strong>cash me bhi</strong> kar sakte hain, baaki premium ke liye digital payment zaroori hai.
      </p>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          Aap 35 saal ke hain, apne aur family ke liye ₹20,000 premium dete hain aur ₹5,000 ka health check-up karwate hain. Self-category ki limit ₹25,000 hai, to ₹25,000 (₹20,000 + ₹5,000) tak deduction milega.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Payment Aur Eligibility Ke Rules
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Premium <strong>bank, card, UPI ya cheque</strong> jaise non-cash tareeke se pay karna chahiye. Cash premium par deduction nahi milta (sirf preventive check-up iska exception hai)</li>
        <li>Individual ya HUF claim kar sakta hai. Company ya firm ko 80D nahi milta</li>
        <li><strong>Parents ka premium bhi aap claim kar sakte hain</strong>, chahe wo aap par dependent na hon, lekin premium aapko khud pay karna hoga</li>
        <li>Sasural waalon (in-laws) ka premium claim nahi ho sakta</li>
        <li>Life insurance ya critical illness ka rider health insurance ke part me aata hai, lekin pure life insurance premium 80D me nahi aata</li>
        <li>Senior citizen ke paas insurance na ho to <strong>medical expenditure</strong> par bhi ₹50,000 tak claim ho sakta hai (cash me bhi), lekin tab wo insurance premium ke saath claim nahi ho sakta</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old Regime Vs New Regime
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        80D sirf old tax regime me milta hai. Agar aap new regime me hain, to is deduction ka fayda nahi milega. Kaun sa regime aapke liye sahi hai, ye {" "}<Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>slabs comparison</Link>{" "} aur {" "}<Link href="/income-tax-calculator" className={linkClass}>Income Tax Calculator</Link>{" "} se check karein. Bina 80D ke bhi new regime kabhi kabhi zyada bachata hai, isliye total deductions ka hisaab lagana zaroori hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Income-tax Act 2025 me health insurance deduction ka section number badal kar Section 126 ho gaya hai. Limits aur rules ka basic structure wahi hai. Sabhi deductions ki detail {" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C se 80U guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Claim Karne Ke Steps
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Premium ki receipt aur policy certificate sambhal kar rakhein</li>
        <li>Bank statement me premium ki payment ka proof rakhein</li>
        <li>ITR me deduction ka section aur amount sahi jagah bharein</li>
        <li>Parents ka alag premium ho to alag dikhayein</li>
        <li>Employer se health insurance mila ho to uska treatment check karein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Kaun sa regime aapke liye behtar hai aur 80D ka kitna fayda milega, ye hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me tax planning ke saath bataya jaata hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
        Ye jaankari 30 September 2026 tak ki hai. 1 April 2026 se Income-tax Act, 2025 lagu ho chuka hai, jisme sections ke number badal gaye hain (is article me purane section numbers isliye diye gaye hain ki aap unhe pehchaan sakein). Rules aur rates Budget me badalte rehte hain, isliye apne case ke liye hamse consult karein.
      </p>
    </>
  );
}
