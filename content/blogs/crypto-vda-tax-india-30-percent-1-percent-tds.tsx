import Link from "next/link";

const faqs = [
  {
    q: "Crypto par kitna tax lagta hai India mein?",
    a: "Profit par flat 30% + surcharge (agar lagu) + 4% cess. Income slab ya basic exemption limit ka fayda nahi milta.",
  },
  {
    q: "Crypto loss ko shares ke profit se set-off kar sakte hain?",
    a: "Nahi. VDA ka loss kisi bhi doosri income — shares, salary, ya doosre crypto — se set-off nahi hota aur carry forward bhi nahi hota.",
  },
  {
    q: "1% TDS kata hai to kya aur tax dena padega?",
    a: "Haan, 1% TDS sirf advance collection hai. Final tax 30% profit par banta hai; TDS usme adjust hoga aur baaki tax aapko bharna hoga.",
  },
  {
    q: "Kya crypto ko hold karne par tax lagta hai?",
    a: "Sirf hold karne par nahi. Tax tab lagta hai jab aap bechte, swap karte ya crypto se kuch khareedte hain.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function CryptoVdaTaxIndia30Percent1PercentTdsBlog() {
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
        Crypto par tax ke rules India mein sabse sakht hain — aur Budget 2026 ne bhi inme koi relief nahi di. Ulta, FY 2026-27 se exchanges ka data seedha tax department tak jaane laga hai, isliye crypto income chhupana ab aur mushkil hai. Ye guide batati hai ki kitna tax lagta hai, TDS kaise kaam karta hai aur ITR mein kya dikhana hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Crypto/VDA bechne par profit par <strong>flat 30%</strong> tax (+ surcharge + 4% cess), income slab chahe kuch bhi ho</li>
          <li>Sirf <strong>cost of acquisition</strong> deduct hoti hai — fees, internet, software ka kharcha nahi</li>
          <li>Crypto ka <strong>loss</strong> kisi bhi income se set-off nahi hota, aur carry forward bhi nahi</li>
          <li>Bechne par <strong>1% TDS</strong> (limit: specified persons ke liye ₹50,000, baaki ke liye ₹10,000 per saal)</li>
          <li>FY 2026-27 se platforms transaction data seedha department ko report karte hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        30% Tax Ka Matlab Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Aapki income ₹3 lakh ho ya ₹30 lakh — crypto ke profit par tax <strong>30% hi</strong> lagega. ₹12 lakh wali 87A rebate is income par nahi milti. Example: ₹1 lakh ka Bitcoin ₹1.5 lakh mein becha, to ₹50,000 profit par 30% = ₹15,000 + 4% cess = <strong>₹15,600</strong> tax.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Loss Ka Koi Fayda Nahi
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar ek coin mein ₹40,000 profit aur doosre mein ₹30,000 loss hua, to bhi tax <strong>₹40,000 par</strong> lagega — ek VDA ka loss doosre VDA ke profit se bhi set-off nahi hota. Isliye crypto trading mein tax ka impact actual profit se zyada lagta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        1% TDS Kaise Kaam Karta Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kaun</th>
              <th className="border px-4 py-3 text-left">TDS kab lagta hai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Specified person (jinka business/professional turnover limit se kam hai, ya jinki business income nahi)</td>
              <td className="border px-4 py-3">Saal mein total sale consideration ₹50,000 se zyada</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Baaki log</td>
              <td className="border px-4 py-3">Saal mein total ₹10,000 se zyada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Indian exchange khud 1% TDS kaat leta hai aur ye aapke <strong>Form 26AS / AIS</strong> mein dikhta hai. Ye TDS aapki final tax liability mein adjust hota hai. Foreign exchange ya P2P trade par TDS ki zimmedari khareedne wale par aa sakti hai — aise trades mein extra dhyan rakhein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Airdrop, Staking aur Gift
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Airdrop / staking reward:</strong> receive karne par fair value par income (slab rate ya business income, nature ke hisaab se); baad mein bechne par 30%</li>
        <li><strong>Crypto gift mein mila:</strong> relative ke alawa kisi se ₹50,000 se zyada value ka mila to taxable —{" "}<Link href="/blog/tax-on-gifts-received-relatives-50000-rule" className={linkClass}>gift tax rules</Link>{" "}dekhein</li>
        <li><strong>Mining:</strong> cost of mining deduct nahi hoti, sell par poora amount taxable maana jaata hai</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ab data seedha department ke paas hai
        </h3>
        <p className="text-gray-700 leading-8">
          FY 2026-27 se naye reporting rules ke tahat Indian crypto platforms transaction details directly tax department ko dete hain, aur reporting miss karne par penalty ka provision bhi aaya hai. AIS mein aapke crypto trades dikhenge — ITR mein na dikhane par mismatch notice aana lagbhag tay hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR Mein Kaise Dikhayein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Crypto income ke liye <strong>ITR-2</strong> (investment) ya <strong>ITR-3</strong> (agar trading business hai) use hoti hai — ITR-1/ITR-4 nahi. Har transaction ki date of purchase, date of sale, cost aur sale value <strong>Schedule VDA</strong> mein bharni hoti hai. Isliye exchange se poora tax report/P&amp;L statement download karke rakhein.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Crypto ke saath shares/mutual fund bhi bechte hain to unke rules alag hain —{" "}<Link href="/blog/capital-gains-tax-shares-mutual-funds-stcg-ltcg" className={linkClass}>capital gains guide</Link>{" "}dekhein. Schedule VDA ke saath sahi ITR file karwane ke liye hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing service</Link>{" "}available hai.
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
        Crypto/VDA taxation ke rules Budget 2026 ke baad bhi same hain (30% tax, 1% TDS). Ye jaankari 24 September 2026 tak verify ki gayi hai — trading volume zyada ho to professional salah zaroor lein.
      </p>
    </>
  );
}
