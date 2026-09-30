import Link from "next/link";

const faqs = [
  {
    q: "Kya NPS ka extra ₹50,000 new regime me milta hai?",
    a: "Nahi. 80CCD(1B) sirf old regime me milta hai. New regime me sirf employer contribution (80CCD(2)) allowed hai.",
  },
  {
    q: "Kya 80C aur 80CCD(1B) dono ek saath le sakte hain?",
    a: "Haan. 80C/80CCD(1) ki ₹1.5 lakh limit alag hai aur 80CCD(1B) ke ₹50,000 alag, total ₹2 lakh tak.",
  },
  {
    q: "NPS me se kab paisa nikaal sakte hain?",
    a: "Normal exit 60 saal par hota hai. Uske pehle partial withdrawal ya premature exit ke liye PFRDA ke specific rules hain.",
  },
  {
    q: "Kya NPS pension par tax lagta hai?",
    a: "Haan, annuity se mila monthly pension aapki income me add hota hai aur slab ke hisaab se taxable hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NpsTaxBenefits80ccd1bEmployerContributionBlog() {
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
        NPS sirf retirement ke liye nahi, tax bachane ke liye bhi popular hai. Is me teen alag sections se deduction milta hai, aur ek section new tax regime me bhi kaam karta hai. Is guide me hum dekhenge kaun sa deduction kitna hai aur kiske liye behtar hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>80CCD(1):</strong> apna contribution, 80C ki ₹1.5 lakh limit ke andar</li>
          <li><strong>80CCD(1B):</strong> extra <strong>₹50,000</strong> deduction, sirf old regime me</li>
          <li><strong>80CCD(2):</strong> employer ka contribution, <strong>new regime me bhi</strong> allowed</li>
          <li>Employee contribution limit: salary (Basic + DA) ka 10%, self-employed ke liye gross income ka 20%</li>
          <li>Maturity par 60% tak lump-sum tax-free hai, baaki pension/annuity</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        NPS Me Teen Deductions
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Section</th>
              <th className="border px-4 py-3 text-left">Kya hai</th>
              <th className="border px-4 py-3 text-left">Limit</th>
              <th className="border px-4 py-3 text-left">Regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">80CCD(1)</td>
              <td className="border px-4 py-3">Employee/self ka contribution</td>
              <td className="border px-4 py-3">Salary ka 10% (self-employed: gross income ka 20%), 80C ke ₹1.5 lakh me included</td>
              <td className="border px-4 py-3">Old regime</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">80CCD(1B)</td>
              <td className="border px-4 py-3">Extra NPS contribution</td>
              <td className="border px-4 py-3">Extra <strong>₹50,000</strong></td>
              <td className="border px-4 py-3">Old regime</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">80CCD(2)</td>
              <td className="border px-4 py-3">Employer ka contribution</td>
              <td className="border px-4 py-3">Salary ka prescribed percentage (new regime me 14%)</td>
              <td className="border px-4 py-3">Old aur new dono</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Yaani old regime me NPS ke through aap ₹1.5 lakh (80C ke saath share karke) plus ₹50,000 tak, total ₹2 lakh tak deduction le sakte hain. Baaki deductions ki list {" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C se 80U guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Employer Contribution Ka Fayda (80CCD(2))
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapka employer aapke NPS account me contribution karta hai, to wo amount salary ke ek nishchit percentage tak aapki taxable income se bahar rehta hai. Ye is wajah se khaas hai ki <strong>ye new tax regime me bhi available hai</strong>, jahan zyada tar deductions nahi milte.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>New regime me employer contribution limit Basic + DA ka <strong>14%</strong> hai</li>
        <li>Old regime me limit traditionally 10% rahi hai. Is percentage me badlaav ki khabrein aati rehti hain, isliye payroll se latest limit confirm karein</li>
        <li>Ye deduction 80CCD(1B) ke ₹50,000 se <strong>alag</strong> hai</li>
        <li>Employer contribution ki kisi bhi situation me payroll me &apos;CTC restructure&apos; se fayda le sakte hain</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Salary structure me kaise use karein
        </h3>
        <p className="text-gray-700 leading-8">
          Agar employer salary structure me NPS ka option deta hai, to aap Basic ka ek hissa employer NPS me divert karwa sakte hain. Isse taxable salary kam hoti hai, chahe aap new regime me hi kyun na hon. Salary planning ke aur tareeke {" "}<Link href="/blog/salary-structure-tax-saving-allowances-perquisites" className={linkClass}>salary structure guide</Link>{" "} me hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Old Regime Vs New Regime Me NPS
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
              <td className="border px-4 py-3">80CCD(1) aur 80CCD(1B)</td>
              <td className="border px-4 py-3">Milta hai</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">80CCD(2) employer contribution</td>
              <td className="border px-4 py-3">Milta hai</td>
              <td className="border px-4 py-3">Milta hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Kis ke liye NPS fit</td>
              <td className="border px-4 py-3">Jo 80C aur dusre deductions use kar rahe hain</td>
              <td className="border px-4 py-3">Jo employer NPS se fayda lena chahte hain</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Regime chunne se pehle {" "}<Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>slab comparison</Link>{" "} aur {" "}<Link href="/income-tax-calculator" className={linkClass}>Income Tax Calculator</Link>{" "} se dono ka hisaab lagayein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Withdrawal Par Tax
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>60 saal par maturity:</strong> NPS corpus ka <strong>60%</strong> tak lump-sum nikaalna <strong>tax-free</strong> hai</li>
        <li>Baaki hissa annuity (pension) me jaata hai. Annuity ki minimum requirement PFRDA ke rules ke hisaab se badalti rehti hai</li>
        <li>Annuity se mila monthly pension <strong>taxable</strong> hai, aapki slab ke hisaab se</li>
        <li>Partial withdrawal (shartein poori hone par) par bhi tax-free limits hain. Latest rules PFRDA ki website par dekhein</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        NPS Lena Chahiye Ya Nahi
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        NPS me paisa retirement tak <strong>lock</strong> rehta hai, isliye emergency fund ke liye ye sahi nahi hai. Agar aapko long-term retirement saving chahiye aur old regime me aap tax bachana chahte hain, to NPS ek acchha option hai. Retirement goal ke liye kitna corpus chahiye, ye {" "}<Link href="/retirement-corpus-calculator" className={linkClass}>Retirement Calculator</Link>{" "} se dekh sakte hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Aapke liye old regime behtar hai ya new, aur NPS kitna fit baithta hai, ye hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me tax planning ke saath bataya jaata hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
