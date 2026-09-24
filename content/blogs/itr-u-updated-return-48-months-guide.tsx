import Link from "next/link";

const faqs = [
  {
    q: "ITR-U kitne saal purani return ke liye file ho sakti hai?",
    a: "Finance Act 2025 ke baad assessment year khatam hone ke 48 mahine tak.",
  },
  {
    q: "Kya ITR-U se refund le sakte hain?",
    a: "Nahi. ITR-U sirf tax badhane ke liye hai — refund claim ya refund badhane ke liye nahi.",
  },
  {
    q: "ITR-U mein kitna extra tax lagta hai?",
    a: "Tax + interest ka 25% (12 mahine tak), 50% (24 tak), 60% (36 tak) ya 70% (48 mahine tak).",
  },
  {
    q: "Kya ITR-U file karne par penalty lagti hai?",
    a: "Additional tax dene ke baad us chhooti income par under-reporting penalty aam taur par nahi lagti — isi wajah se ITR-U notice ka intezaar karne se behtar hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function ItrUUpdatedReturn48MonthsGuideBlog() {
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
        ITR file karna bhool gaye, ya file ki thi lekin kuch income dikhana reh gaya? Pehle iska ek hi ilaaj tha — notice ka intezaar. Ab <strong>Updated Return (ITR-U)</strong> se aap khud aage aakar galti sudhaar sakte hain. Finance Act 2025 ke baad iski time limit 24 se badhkar <strong>48 mahine</strong> ho gayi hai. Lekin ye muft nahi hai — jitni der, utna zyada extra tax.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>ITR-U assessment year khatam hone ke <strong>48 mahine</strong> tak file ho sakti hai</li>
          <li>Sirf income <strong>badhane</strong> ya tax <strong>badhane</strong> ke liye — refund lene ya badhane ke liye nahi</li>
          <li>Extra tax: 12 mahine mein 25%, 24 mein 50%, 36 mein 60%, 48 mein 70% (tax + interest ka)</li>
          <li>Search, survey ya notice ke baad ITR-U file nahi hoti</li>
          <li>Pehle poora tax + interest + additional tax bharna, phir ITR-U file karna</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR-U Kab File Kar Sakte Hain
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Original ITR file hi nahi ki thi</li>
        <li>Income galat head mein dikhayi thi</li>
        <li>Koi income dikhana bhool gaye (FD interest, rent, capital gains)</li>
        <li>Galat rate se tax calculate kiya tha</li>
        <li>Carry-forward loss ya unabsorbed depreciation kam karna hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Additional Tax — Jitni Der, Utna Mehnga
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">ITR-U kab file ki (AY khatam hone ke baad)</th>
              <th className="border px-4 py-3 text-left">Additional tax (tax + interest ka)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">12 mahine ke andar</td>
              <td className="border px-4 py-3">25%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">12 se 24 mahine</td>
              <td className="border px-4 py-3">50%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">24 se 36 mahine</td>
              <td className="border px-4 py-3">60%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">36 se 48 mahine</td>
              <td className="border px-4 py-3">70%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>Example:</strong> Aapne FY 2024-25 (AY 2025-26) ki return mein ₹2 lakh ki FD interest nahi dikhayi. Tax + interest milakar ₹70,000 banta hai. AY 2025-26 31 March 2026 ko khatam hua. Agar aap <strong>31 March 2027 tak</strong> ITR-U file karte hain to additional tax 25% = ₹17,500; agar 31 March 2029 ke baad (36 mahine ke baad) karte hain to 70% = ₹49,000. Isliye galti pata chalte hi jaldi file karna sasta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kab ITR-U File NAHI Ho Sakti
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Loss return ya refund badhane ke liye</li>
        <li>Tax liability kam karne ke liye</li>
        <li>Search, survey ya requisition shuru ho chuka ho</li>
        <li>Us saal ke liye assessment/reassessment pending ya complete ho</li>
        <li>Department ke paas aapki us income ki specific information hai aur notice aa chuka hai</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ek saal ke liye sirf ek baar
        </h3>
        <p className="text-gray-700 leading-8">
          Ek assessment year ke liye ITR-U sirf ek hi baar file ho sakti hai. Isliye poori income, AIS, 26AS aur bank statements check karke hi file karein — dobara mauka nahi milega.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR-U File Karne Ka Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Us saal ka AIS/26AS download karke chhooti income identify karein</li>
        <li>Updated return ke hisaab se tax, interest aur additional tax calculate karein</li>
        <li>Challan se poora amount pehle jama karein</li>
        <li>Portal par ITR-U select karke sahi ITR form bharein aur challan details daalein</li>
        <li>Reason chunein (income not reported, wrong head, etc.) aur e-verify karein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Normal cases mein pehle{" "}<Link href="/blog/belated-revised-itr-ay-2026-27" className={linkClass}>belated ya revised return</Link>{" "}ka option dekhein — wo sasta hai. Notice aa gaya hai to ITR-U ki jagah{" "}<Link href="/blog/income-tax-notice-types-143-1-148-139-9-explained" className={linkClass}>notice ka jawab</Link>{" "}dena padta hai. ITR-U ka computation aur filing hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing team</Link>{" "}karti hai.
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
        ITR-U ke rules Finance Act 2025 ke amendments ke baad ke hain (1 April 2026 se Income-tax Act, 2025 mein renumber). Ye jaankari 24 September 2026 tak ki hai — ITR-U file karne se pehle humse computation verify karwayein.
      </p>
    </>
  );
}
