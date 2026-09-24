import Link from "next/link";

const faqs = [
  {
    q: "Restaurant par GST kitna lagta hai 2026 mein?",
    a: "Normal restaurant par 5% GST lagta hai bina ITC ke. Sirf 'specified premises' (jis hotel mein ₹7,500+ tariff ka room ho) ke restaurant par 18% ITC ke saath lagta hai.",
  },
  {
    q: "₹5,000 ke hotel room par kitna GST hai?",
    a: "₹1,001 se ₹7,500 tak ke room par 22 September 2025 se 5% GST lagta hai, aur is par ITC nahi milta.",
  },
  {
    q: "Kya restaurant ITC le sakta hai?",
    a: "5% wale rate par restaurant apni purchases ka ITC nahi le sakta. Specified premises wale restaurant jo 18% charge karte hain, wo ITC le sakte hain.",
  },
  {
    q: "Swiggy/Zomato order par GST kaun bharta hai?",
    a: "App (e-commerce operator) customer se 5% GST collect karke government ko jama karta hai. Restaurant ko un orders par alag se GST nahi bharna hota, lekin reporting karni hoti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstOnRestaurantsHotelsRates2026Blog() {
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
        22 September 2025 se GST 2.0 lagu hua aur hospitality sector ke rates badal gaye. Sabse bada badlav hotel rooms mein aaya — ₹7,500 tak ke room par GST 12% se ghatkar 5% ho gaya, lekin <strong>bina Input Tax Credit ke</strong>. Restaurant chalane walon aur hotel owners ke liye ye samajhna zaroori hai ki unke case mein kaunsa rate lagega aur ITC milega ya nahi.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Standalone restaurant (aur ₹7,500 se kam tariff wale hotel ka restaurant): 5% GST, ITC nahi</li>
          <li>Hotel room ₹7,500 per day tak: 5% GST, ITC nahi (pehle 12% ITC ke saath tha)</li>
          <li>Hotel room ₹7,500 se upar: 18% GST, poora ITC</li>
          <li>₹7,500+ room wale hotel ka restaurant (&apos;specified premises&apos;): 18% GST ITC ke saath</li>
          <li>Food delivery app se order: GST app (e-commerce operator) collect karke jama karta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Restaurant Services — 5% Bina ITC
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Dine-in, takeaway ya home delivery — ek normal restaurant par <strong>5% GST</strong> lagta hai aur restaurant owner ko apni purchases (raw material, rent, equipment) par diye GST ka ITC nahi milta. Isliye restaurant ke liye 5% hi final cost hai, aur ye customer ke bill mein dikhta hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Exception: agar restaurant kisi aise hotel mein hai jahan kisi bhi room ka tariff ₹7,500 per day ya usse zyada hai, to use <strong>specified premises</strong> mana jaata hai — wahan restaurant service par 18% GST ITC ke saath lagta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Hotel Room Tariff — Naye Rates
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Room tariff per day</th>
              <th className="border px-4 py-3 text-left">GST rate</th>
              <th className="border px-4 py-3 text-left">ITC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">₹1,000 tak</td>
              <td className="border px-4 py-3">Exempt</td>
              <td className="border px-4 py-3">—</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">₹1,001 se ₹7,500</td>
              <td className="border px-4 py-3">5%</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">₹7,500 se zyada</td>
              <td className="border px-4 py-3">18%</td>
              <td className="border px-4 py-3">Poora milta hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Business travellers dhyan dein
        </h3>
        <p className="text-gray-700 leading-8">
          ₹7,500 tak ke room par ab 5% GST hai lekin ITC available nahi hai — na hotel ko, na us company ko jiska employee ruka. Pehle 12% wale rate par business guests ITC le lete the, jo ab nahi hoga. Travel policy banate waqt ye dhyan rakhein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Food Delivery Apps aur Cloud Kitchen
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Zomato, Swiggy jaise apps se order hone par restaurant service ka 5% GST <strong>e-commerce operator (app) collect karke jama karta hai</strong> (Section 9(5)). Restaurant ko un sales par dobara GST nahi bharna hota, lekin ye sales apni GSTR-1 aur GSTR-3B mein sahi table mein dikhani hoti hain. Cloud kitchen par bhi yahi 5% rule lagta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Restaurant Owners Ke Liye Compliance Checklist
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Turnover ₹20 lakh cross hote hi GST registration lein (composition scheme restaurant ke liye 5% par available hai, lekin tab app se sale par restrictions hoti hain)</li>
        <li>Menu aur bill par GST alag se dikhayein — &apos;inclusive&apos; likha ho to bhi breakup rakhein</li>
        <li>App sales aur direct sales ka alag record rakhein taaki GSTR-1 mein mismatch na ho</li>
        <li>Alcohol GST mein nahi aata — us par state VAT lagta hai, bill alag rakhein</li>
        <li>Agar hotel mein ₹7,500+ tariff ke room hain, to restaurant ka rate 18% hoga — pricing usi hisaab se karein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        GST 2.0 ke baaki sector-wise badlav hamari{" "}<Link href="/blog/gst-2-0-reforms-2026-sector-impact-guide" className={linkClass}>GST 2.0 reforms guide</Link>{" "}mein hain, aur poori item-wise list{" "}<Link href="/blog/gst-rates-2026-slab-list-item-wise" className={linkClass}>GST rates 2026</Link>{" "}mein. Restaurant ya hotel ki GST registration aur monthly filing ke liye hamari{" "}<Link href="/gst-registration" className={linkClass}>GST Registration service</Link>{" "}dekhein.
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
        Ye rates GST Council ki 56th meeting ke decisions (22 September 2025 se lagu) par based hain aur 24 September 2026 tak verify kiye gaye hain. Apne business ke exact rate ke liye humse confirm karein.
      </p>
    </>
  );
}
