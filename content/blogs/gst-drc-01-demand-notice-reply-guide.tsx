import Link from "next/link";

const faqs = [
  {
    q: "GST DRC-01 notice ka reply kitne din mein dena hai?",
    a: "Aam taur par notice ki date se 30 din — apni specific notice par exact deadline zaroor confirm karein.",
  },
  {
    q: "Section 73 aur Section 74 notice mein kya farak hai?",
    a: "Section 73 normal short-payment/wrong ITC cases (bina fraud allegation) cover karta hai, jisme penalty max 10% ya ₹10,000 hai agar 30 din mein pay karein. Section 74 fraud/wilful misstatement/suppression allege karta hai, jisme penalty 15% (SCN se pehle pay) se 100% (bahut der se pay) tak jaata hai.",
  },
  {
    q: "Agar main DRC-01 ka koi reply nahi doon to kya hoga?",
    a: "Officer ex-parte order pass kar deta hai (DRC-07), jo legally recoverable ban jaata hai, aur bank attachment jaisi recovery action bhi ho sakti hai.",
  },
  {
    q: "Kya main dispute karte hue bhi DRC-03 se payment kar sakta hoon?",
    a: "Haan — jo hissa dispute nahi hai us par without-prejudice payment DRC-03 se kar sakte hain, aur baaki disputed portion DRC-06 mein contest kar sakte hain — isse interest exposure kam hota hai bina disputed amount concede kiye.",
  },
  {
    q: "Kya DRC-01B aur DRC-01 same hai?",
    a: "Nahi — DRC-01B ek alag, automated GSTR-1 vs GSTR-3B mismatch notice hai jiski reply deadline bahut chhoti (~7 din) hai, jabki DRC-01 ek substantive Section 73/74 demand notice hai jiski standard deadline 30 din hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTDRC01DemandNoticeReplyGuide() {
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
        GST DRC-01 notice mil jaana ghabrane ki baat nahi hai — ye ek show cause notice hai, final demand nahi, aur sahi reply se outcome bahut badal sakta hai. Lekin ise ignore karna sabse badi galti hai jo businesses karte hain. Ye guide DRC-01 ka process, timeline, aur Section 73 vs 74 ka farak samjhata hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>DRC-01 ek show cause notice hai (Section 73 ya 74 ke tahat) — reply ki standard deadline 30 din hai</li>
          <li>Section 73 (non-fraud) mein max penalty 10% ya ₹10,000; Section 74 (fraud) mein penalty 15% se 100% tak, kab pay karte hain uspar depend karta hai</li>
          <li>Notice ignore karne par ex-parte order pass ho jaata hai aur recovery action shuru ho sakta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        DRC-01 Hai Kya
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        DRC-01 ek show cause notice (SCN) hai jo Section 73 (non-fraud/normal cases) ya Section 74 (fraud/wilful misstatement/suppression cases) ke tahat electronically issue hota hai — aam taur par ITC mismatch, tax shortfall, ya audit finding ki wajah se. Iske saath Section 73(3)/74(3) ke tahat ek detailed statement bhi attach hoti hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Ek zaroori distinction: DRC-01B ek alag, automated notice hai (GSTR-1 vs GSTR-3B liability mismatch ke liye), jiski reply deadline bahut chhoti (~7 din) hai aur agla GSTR-1 block ho sakta hai — ise DRC-01 (main demand notice, 30-din reply) ke saath confuse mat karein.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Process — DRC-01 se DRC-07 Tak
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>DRC-01A (optional): officer informal pre-notice de sakta hai; yahan DRC-03 se voluntary payment karne se formal SCN bach sakta hai</li>
          <li>DRC-01: formal SCN, proposed tax/interest/penalty ke statement ke saath</li>
          <li>Aapke paas 2 options: DRC-03 se pay karein (poora ya part), ya DRC-06 se substantive reply file karein (documents, reconciliation, case law ke saath)</li>
          <li>Officer reply consider karta hai, personal hearing bhi ho sakti hai</li>
          <li>DRC-07: agar koi liability confirm hoti hai to final demand order ka summary</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 73 vs Section 74 — Penalty Ka Bada Farak
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kab Pay Karein</th>
              <th className="border px-4 py-3 text-left">Section 73 (Non-Fraud)</th>
              <th className="border px-4 py-3 text-left">Section 74 (Fraud/Suppression)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">SCN se pehle</td>
                <td className="border px-4 py-3">Koi penalty nahi (sirf tax+interest)</td>
                <td className="border px-4 py-3">15%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">SCN ke 30 din ke andar</td>
                <td className="border px-4 py-3">10% ya ₹10,000, jo zyada ho</td>
                <td className="border px-4 py-3">25%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Final order (DRC-07) ke 30 din ke andar</td>
                <td className="border px-4 py-3">—</td>
                <td className="border px-4 py-3">50%</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Usse baad</td>
                <td className="border px-4 py-3">Order mein jo tay ho</td>
                <td className="border px-4 py-3">100%</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Reply Na Dene Ka Nateeja
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ignore karna sabse mehnga vikalp hai
        </h3>
        <p className="text-gray-700 leading-8">
          Agar aap reply nahi dete, officer ex-parte order pass kar deta hai, aur confirmed demand (DRC-07) legally recoverable ban jaati hai — bank account attachment jaisi recovery action bhi ho sakti hai. Ek achhi DRC-06 reply mein genuine clerical error ka explanation, ITC mismatch ka GSTR-2A/2B reconciliation, ya Section 74 ko galat tarike se invoke kiye jaane jaisa point shaamil ho sakta hai.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        DRC-01 notice ka time par aur sahi reply dena — chahe wo DRC-03 se partial payment ho ya DRC-06 se substantive legal reply — outcome mein bahut bada farak daal sakta hai. Hamari{" "}<Link href="/gst-notice-reply" className={linkClass}>GST Notice Reply</Link>{" "}service DRC-01 se lekar appeal tak poora process handle karti hai.{" "}<Link href="/blog/gst-audit-assessment-types-notice" className={linkClass}>GST Audit aur Assessment Types</Link>{" "}guide bhi dekhein agar aapko assessment process samajhna hai.
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
        GST demand notice process aur penalty structure Section 73/74/74A CGST Act par based hai — apni specific notice ke exact timeline aur applicable section ke liye humse turant consult karein, kyunki deadlines miss karne ka nuksaan bada ho sakta hai.
      </p>
    </>
  );
}
