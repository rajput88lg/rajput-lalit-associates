import Link from "next/link";

const faqs = [
  {
    q: "Kya ye rule Medium enterprises ko bhi apply hota hai?",
    a: "Nahi. Ye sirf Micro aur Small enterprises (Udyam-registered) ko apply hota hai — Medium enterprises is section se explicitly bahar hain.",
  },
  {
    q: "Agar main return file karne se pehle (lekin 45 din ke baad) payment kar doon, to kya deduction mil jaayega?",
    a: "Nahi. Normal Section 43B items ke uljat, isme ye relief nahi hai — agar 45-din/agreed-date ke andar payment nahi hui, deduction sirf actual payment wale saal mein milega.",
  },
  {
    q: "Kya trader (wholesale/retail) ko bhi ye protection milti hai?",
    a: "Aam taur par nahi — MSMED Act ke tahat delayed-payment protection sirf manufacturing/service enterprises ko milta hai, traders ko nahi, chahe wo Udyam-registered hi kyun na ho.",
  },
  {
    q: "Kya GST input tax credit par bhi asar padta hai?",
    a: "Nahi, ye sirf income tax expense deduction ko affect karta hai — GST/ITC alag hai aur isse prabhavit nahi hota.",
  },
  {
    q: "Kya ye rule naye Income-tax Act 2025 mein badal gaya hai?",
    a: "Section number Section 43B(h) se Section 37(2)(g) ho gaya hai (1 April 2026 se), lekin rule ka substance same hai — sirf renumbering hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function MSME45DayPaymentRuleSection43BH() {
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
        Agar aap kisi Micro ya Small enterprise se saamaan ya service kharidte hain, to unko time par payment karna sirf ek 'achhi practice' nahi raha — ab ye seedha aapke income tax deduction se juda hua hai. Section 43B(h) (jo ab naye Income-tax Act, 2025 mein Section 37(2)(g) ban gaya hai) kehta hai ki agar aapne MSME supplier ko time par payment nahi ki, to wo poora expense us saal ke liye deduct nahi hoga jis saal aapne kharida tha — deduction milega sirf usi saal jab aap actual mein payment karte hain, chahe wo saalon baad ho.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Micro/Small enterprises (Udyam-registered) ko payment agreed date ya 45 din mein karna zaroori hai — Medium enterprises is rule mein cover nahi hote</li>
          <li>Agar time par payment nahi hui, to expense deduction sirf jis saal actual payment ho, us saal milega — return-filing-date-se-pehle wali normal chhoot yahan nahi milti</li>
          <li>Naya Income-tax Act 2025 mein ye rule Section 43B(h) se Section 37(2)(g) ban gaya hai (1 April 2026 se) — substance same hai, sirf number badla hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kise Apply Hota Hai — Micro/Small, Medium Nahi
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Ye rule sirf Micro aur Small enterprises par apply hota hai jo Udyam registered hain — Medium enterprises is section se explicitly bahar hain. Current MSME classification: Micro = investment ≤ ₹1 crore aur turnover ≤ ₹5 crore; Small = investment ≤ ₹10 crore aur turnover ≤ ₹50 crore.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Ek zaroori aur aksar miss hone wali baat: wholesale aur retail traders — chahe wo Udyam-registered hi kyun na ho — is 45-din protection ke daayre mein aam taur par nahi aate, kyunki MSMED Act ke tahat 'delayed payment' protection sirf manufacturing/service enterprises ko milta hai, traders ko nahi. Aur supplier ko us tareekh tak Udyam-registered hona chahiye jab supply hui thi — baad mein register karwaane se pichle transactions cover nahi honge.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        45-Din ki Deadline Kaise Calculate Hoti Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Payment Deadline</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Written agreement hai supplier ke saath</td>
                <td className="border px-4 py-3">Agreed date YA 45 din (jo pehle aaye), acceptance ki date se</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Koi written agreement nahi hai</td>
                <td className="border px-4 py-3">15 din, acceptance/deemed-acceptance ki date se</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Deemed acceptance</td>
                <td className="border px-4 py-3">Delivery ki date — jab tak buyer 15 din ke andar written objection na de</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deduction Par Asar — Ye Normal Section 43B se Alag Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 43B ke doosre items (jaise PF, bonus) mein ek relief milti hai: agar aap return file karne ki due date se pehle payment kar dete hain, to deduction usi saal mil jaata hai. Lekin Section 43B(h)/37(2)(g) mein ye relief nahi hai — agar 45-din (ya agreed date) ke andar payment nahi hui, to deduction sirf actual payment wale saal mein milega, chahe aapne return file karne se pehle hi pay kar diya ho.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        GST/ITC par koi asar nahi padta — sirf income tax ke tahat expense deduction disallow hota hai. Tax audit report (Form 3CD) mein ye disallowed amount Clause 22 ke tahat report karna zaroori hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Naya Income-tax Act 2025 — Renumbering, Substance Same
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          FY 2025-26 return abhi bhi purane number se, aage se naya
        </h3>
        <p className="text-gray-700 leading-8">
          FY 2025-26 (jis saal ka return abhi file ho raha hai) ke liye purana Section 43B(h) hi apply hota hai. Tax Year 2026-27 se (1 April 2026 se) yehi rule Section 37(2)(g) ke naam se naye Income-tax Act, 2025 mein continue hota hai — mechanism bilkul same hai, sirf section number badla hai.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Bahut se businesses ye galti karte hain ki wo apne MSME vendors ki payment ko normal 'credit period' ki tarah treat karte hain — jabki tax law ke hisaab se 45 din (ya kam) ki hard deadline hai. Hum aapke vendor payment cycle ko review karke ye check karte hain ki kaunse payments is rule ke risk mein hain, aur{" "}<Link href="/blog/tax-audit-section-44ab-applicability-turnover-limit" className={linkClass}>Tax Audit</Link>{" "}ke saath isse sahi tarike se Form 3CD mein report karte hain. Agar aap khud MSME hain aur payment delay se jooj rahe hain, hamara{" "}<Link href="/accounting" className={linkClass}>Accounting aur Bookkeeping</Link>{" "}service aapke vendor ageing ko track karne mein madad karta hai.
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
        Ye article Section 43B(h)/Section 37(2)(g) ke general framework par based hai, jisme MSMED Act 2006 ke Section 15 ki payment timeline shaamil hai. Trader-exclusion jaisa point industry commentary/government FAQs par based hai, statute ka exact wording alag tarike se interpret ho sakta hai — apni specific transaction ke liye hamse consult karein.
      </p>
    </>
  );
}
