import Link from "next/link";

const faqs = [
  {
    q: "Kya sabhi insurance policies par ab GST zero hai?",
    a: "Nahi — sirf individual life aur individual health insurance policies GST-exempt hui hain (18% se 0%, 22 September 2025 se). Group/employer-sponsored policies abhi bhi 18% GST par hain.",
  },
  {
    q: "Naye scooter ya motorcycle par ab kitna GST lagta hai?",
    a: "350cc tak ke engines par 18% (pehle 28%), aur 350cc se zyada par 40% (pehle 28%+3% cess). Electric two-wheelers 5% par hi hain.",
  },
  {
    q: "September 2025 ke baad koi aur GST rate change hua hai?",
    a: "Sirf ek confirmed change hai — tobacco/pan masala compensation cess ka transition, 1 February 2026 se effective. 57th GST Council meeting 7 October 2026 tak postpone ho chuki hai, abhi tak koi naya rate decision nahi aaya hai.",
  },
  {
    q: "Kya daily-use FMCG items sasta hua hai?",
    a: "Haan — shampoo, toothpaste, soap, bicycles jaise items 18%/12% se 5% par aa gaye, aur UHT milk, paneer, Indian breads jaise staples 0% ho gaye, 22 September 2025 se.",
  },
  {
    q: "Kya 40% slab ka matlab sab kuch mehnga ho gaya?",
    a: "Nahi — 40% sirf demerit/luxury items (badi SUVs, luxury cars, 350cc se upar ki bikes, tobacco-linked products) par hai, jabki zyadatar mass-consumption goods 5% ya 0% par aa gaye hain.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GST20Reforms2026SectorImpactGuide() {
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
        September 2025 mein GST Council ne dashकों purani 5/12/18/28% slab structure ko simplify karke 0%, 5%, 18% aur 40% (sirf demerit/luxury items ke liye) mein badal diya — jise 'GST 2.0' kaha ja raha hai. Ek saal ho chuka hai is reform ko, aur 2026 mein iska real impact har sector mein clearly dikh raha hai. Ye article batata hai ki insurance, auto aur daily-use goods par exactly kya badla, aur 2026 mein aage kya hua.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>22 September 2025 se GST ke 4 slabs ho gaye hain: 0%, 5%, 18%, aur 40% (demerit goods ke liye)</li>
          <li>Individual life aur health insurance policies par GST 18% se ghatkar 0% ho gaya hai — lekin group/employer policies abhi bhi 18% par hi hain</li>
          <li>Shampoo, toothpaste, soap jaise daily-use items 18% se 5% aa gaye, aur UHT milk/paneer/roti 0% ho gaye</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Insurance — Individual Policies Par GST Khatam, Group Par Nahi
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Individual life insurance (term, ULIP, endowment) aur individual health insurance (family floater, senior-citizen plans samet) par GST 18% se seedha NIL (0%) kar diya gaya, 22 September 2025 se effective.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Lekin ye galatfahmi mat rakhiye ki 'sab insurance GST-free ho gaya' — group/employer-sponsored policies (group health, group term life) abhi bhi 18% GST par hi taxable hain. Agar aap apne employees ko group health cover dete hain, us par GST abhi bhi lagta hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Auto Sector — Two-Wheelers aur Small Cars
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">Purana Rate</th>
              <th className="border px-4 py-3 text-left">Naya Rate (22 Sep 2025 se)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Two-wheelers (350cc tak)</td>
                <td className="border px-4 py-3">28%</td>
                <td className="border px-4 py-3">18%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Two-wheelers (350cc se zyada)</td>
                <td className="border px-4 py-3">28% + 3% cess</td>
                <td className="border px-4 py-3">40%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Electric two-wheelers</td>
                <td className="border px-4 py-3">5%</td>
                <td className="border px-4 py-3">5% (koi badlaav nahi)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Small cars (petrol/CNG ≤1200cc, diesel ≤1500cc, ≤4000mm)</td>
                <td className="border px-4 py-3">28%</td>
                <td className="border px-4 py-3">18%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Three-wheelers</td>
                <td className="border px-4 py-3">28%</td>
                <td className="border px-4 py-3">18%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Auto parts (general)</td>
                <td className="border px-4 py-3">18%/28% (mixed)</td>
                <td className="border px-4 py-3">18% (uniform)</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Daily-Use Goods (FMCG)
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Hair oil, shampoo, toothpaste, toilet soap: 18% se 5%</li>
          <li>Bicycles: 12% se 5%</li>
          <li>UHT milk, packaged paneer/chhena: 5% se 0%</li>
          <li>Roti, paratha, chapati jaise Indian breads: 0%</li>
          <li>Manmade fibre: 18% se 5%; manmade yarn: 12% se 5%</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        2026 Update — Tobacco/Pan Masala Cess Transition
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Compensation Cess 31 March 2026 ko khatam ho raha hai
        </h3>
        <p className="text-gray-700 leading-8">
          COVID-era state-compensation borrowings chukane ke liye chal rahi GST Compensation Cess 31 March 2026 ko khatam ho rahi hai. Ispe transition ke tahat, 1 February 2026 se tobacco aur pan masala products par compensation cess ko NIL kar diya gaya hai, aur inhe ab 28% GST + Central Excise Duty/ek naya cess structure ke through tax kiya ja raha hai, MRP-based valuation ke saath. Exact naye cess ka structure abhi bhi evolve ho raha hai — agar aap is category mein business karte hain, latest CBIC notification zaroor check karein.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        57th GST Council Meeting — Postponed
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        57th GST Council meeting jo 12 September 2026 ko hone wali thi, BRICS Leaders' Summit ke saath clash hone ki wajah se 7 October 2026 tak postpone kar di gayi hai. Is document likhne tak (17 September 2026) ye meeting hui nahi hai — isliye koi bhi 'expected agenda' ko final fact mat maaniye, jab tak official announcement na aaye.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        GST 2.0 ke sector-wise changes seedha aapke business ki pricing, invoicing aur ITC calculation par asar dalte hain — khaas kar agar aap insurance, auto parts, ya FMCG products deal karte hain. Hum apne{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>{" "}clients ke liye regular rate-change updates track karte hain taaki koi bhi invoice galat rate par na bane. Agar aapko apne specific product/service ki current GST rate confirm karni hai, hamse baat karein.
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
        GST rates समय-samay par notifications ke through badalte rehte hain. Ye article September 2025 ke GST 2.0 rollout aur uske baad ke known updates (17 September 2026 tak) par based hai — apne specific product/service ki current rate ke liye latest CBIC notification ya humse confirm karein.
      </p>
    </>
  );
}
