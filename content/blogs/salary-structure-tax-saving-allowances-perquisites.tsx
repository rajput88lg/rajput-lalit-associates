import Link from "next/link";

const faqs = [
  {
    q: "Kya CTC restructure karke tax bacha sakte hain?",
    a: "Haan, agar employer flexible components deta hai, jaise NPS, LTA ya reimbursements. Sab kuch policy aur regime par depend karta hai.",
  },
  {
    q: "Standard deduction kitna hai?",
    a: "New regime me ₹75,000 aur old regime me ₹50,000 salaried aur pensioners ke liye.",
  },
  {
    q: "Kya new regime me HRA milta hai?",
    a: "Nahi. HRA exemption sirf old regime me milta hai.",
  },
  {
    q: "Employer NPS new regime me kitna allowed hai?",
    a: "Basic + DA ka 14% tak. Ye deduction new regime me bhi available hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function SalaryStructureTaxSavingAllowancesPerquisitesBlog() {
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
        Do log same CTC par kaam karte hain, lekin ek ka tax kam aur doosre ka zyada hota hai. Fark hota hai salary structure ka. Salary me kaun sa hissa taxable hai aur kaun sa exempt, ye samajh lein to legally tax kaafi kam kar sakte hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Salary me <strong>Basic, HRA, allowances, perquisites aur employer ke contributions</strong> hote hain</li>
          <li><strong>Standard deduction:</strong> ₹75,000 (new regime), ₹50,000 (old regime)</li>
          <li>Zyada tar allowances (HRA, LTA) sirf <strong>old regime</strong> me exempt hote hain</li>
          <li><strong>Employer NPS</strong> new regime me bhi allowed hai</li>
          <li>EPF, NPS aur superannuation ke employer contribution par ₹7.5 lakh ka combined limit hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Salary Ke Main Components
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Component</th>
              <th className="border px-4 py-3 text-left">Taxable ya exempt</th>
              <th className="border px-4 py-3 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Basic + DA</td>
              <td className="border px-4 py-3">Taxable</td>
              <td className="border px-4 py-3">PF, gratuity aur HRA ka base yahi hota hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">HRA</td>
              <td className="border px-4 py-3">Old regime me rent ke hisaab se exempt</td>
              <td className="border px-4 py-3">Calculation {" "}<Link href="/blog/hra-exemption-rules-fy-2026-27-8-metro-cities" className={linkClass}>HRA guide</Link>{" "} me</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Special/other allowance</td>
              <td className="border px-4 py-3">Taxable</td>
              <td className="border px-4 py-3">Sabse zyada hissa aksar yahi hota hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">LTA</td>
              <td className="border px-4 py-3">Old regime me exempt (travel proof par)</td>
              <td className="border px-4 py-3">Saal me 2 journeys, 4 saal ke block me</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employer EPF</td>
              <td className="border px-4 py-3">Exempt</td>
              <td className="border px-4 py-3">Combined ₹7.5 lakh limit tak</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employer NPS</td>
              <td className="border px-4 py-3">Exempt</td>
              <td className="border px-4 py-3">Limit tak, new regime me bhi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Reimbursements (bills par)</td>
              <td className="border px-4 py-3">Kuch cases me exempt</td>
              <td className="border px-4 py-3">Policy aur regime par depend</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Standard Deduction
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Salaried employees ko standard deduction bina kisi proof ke milta hai: new regime me ₹75,000 aur old regime me ₹50,000. Isme kuch karna nahi padta, ye automatically apply hota hai. Dono regimes ka pura fark {" "}<Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>slabs guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old Regime Me Kaam Aane Wale Components
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>HRA:</strong> actual HRA, rent minus 10% of salary aur basic ka 50%/40%, in teeno me se kam wala exempt hota hai</li>
        <li><strong>LTA:</strong> domestic travel ke kharche par (hotel/khaana nahi), 4 calendar year ke block me 2 journeys ke liye</li>
        <li><strong>Children education allowance:</strong> prescribed monthly amount per child, maximum 2 bachon ke liye. Amount chhoti hai, lekin claim kar sakte hain</li>
        <li><strong>Professional tax:</strong> state ke rules ke hisaab se deductible hai</li>
        <li><strong>Section 80C aur 80D:</strong> EPF, PPF, health insurance ki detail {" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C se 80U guide</Link>{" "} aur {" "}<Link href="/blog/section-80d-health-insurance-deduction-limit-guide" className={linkClass}>80D guide</Link>{" "} me hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Regime Me Bhi Kaam Karne Wale Options
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Standard deduction ₹75,000</strong></li>
        <li><strong>Employer NPS contribution (80CCD(2))</strong> jo Basic + DA ka 14% tak hai. Detail {" "}<Link href="/blog/nps-tax-benefits-80ccd-1b-employer-contribution" className={linkClass}>NPS guide</Link>{" "} me</li>
        <li><strong>Employer EPF contribution</strong> ki limit tak</li>
        <li>Kuch allowances jo official duty ke liye milte hain (jaise travel for duty) rules ke hisaab se</li>
      </ul>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Dhyan rakhein
        </h3>
        <p className="text-gray-700 leading-8">
          New regime me HRA, LTA aur zyada tar deductions nahi milte. Isliye agar aapka rent aur deductions kam hain, to new regime aksar behtar hota hai. Decision sirf calculation se lein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Perquisites Jo Taxable Ho Sakte Hain
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Employer ki taraf se mila <strong>rent-free ya concessional accommodation</strong></li>
        <li>Company <strong>car</strong> ka personal use</li>
        <li><strong>ESOP/RSU</strong> ka benefit, detail {" "}<Link href="/blog/esop-rsu-tax-employees-india-perquisite-capital-gains" className={linkClass}>ESOP guide</Link>{" "} me</li>
        <li><strong>Employee ke EPF contribution ka interest</strong>, agar saal me employee ka contribution ₹2.5 lakh se zyada ho</li>
        <li>Employer ke EPF + NPS + superannuation ka <strong>combined contribution ₹7.5 lakh</strong> se zyada ho, to upar ka hissa taxable</li>
        <li>Loan jo employer ne kam ya zero interest par diya ho (chhote loans ke exceptions hain)</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Practical Steps
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>HR se <strong>salary break-up</strong> aur CTC structure maangein</li>
        <li>Dekhein ki kaun se components flexible hain (NPS, food coupon, LTA)</li>
        <li>Dono regimes me tax calculate karke comparison karein</li>
        <li>Saal ke shuru me declaration dein aur proof time par submit karein</li>
        <li>Form 16 aur AIS check karke ITR file karein. Form 16 ki detail {" "}<Link href="/blog/tds-on-salary-form-16-explained" className={linkClass}>Form 16 guide</Link>{" "} me hai</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Salary structure ka sahi planning saal bhar ka tax bacha sakta hai. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me har salaried client ke liye regime comparison free hota hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
