import Link from "next/link";

const faqs = [
  {
    q: "Kya GST late fee Input Tax Credit se pay ho sakti hai?",
    a: "Nahi. Late fee hamesha electronic cash ledger se hi pay hoti hai. ITC ka use sirf tax liability ke liye hota hai, late fee ya penalty ke liye nahi.",
  },
  {
    q: "Nil GSTR-3B late file karne par kitni late fee lagti hai?",
    a: "Nil return par ₹20 per day (₹10 CGST + ₹10 SGST) lagti hai, jiski maximum limit ₹500 per return hai.",
  },
  {
    q: "Kya late fee maaf ho sakti hai?",
    a: "Government kabhi-kabhi amnesty scheme ke through late fee waive ya kam karti hai, lekin ye regular nahi hota. Normal case mein late fee dena padta hai, isliye time par filing hi sabse sasta rasta hai.",
  },
  {
    q: "Interest gross tax par lagta hai ya net tax par?",
    a: "Deadline ke baad file ki gayi return mein interest sirf us tax par lagta hai jo cash ledger se pay hua — yaani ITC adjust karne ke baad ka net amount.",
  },
  {
    q: "GSTR-1 late hone par late fee kab pay karni padti hai?",
    a: "GSTR-1 ki late fee GST portal agli GSTR-3B mein automatically jod deta hai, aur wahi GSTR-3B file karte waqt cash mein pay karni hoti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstLateFeeInterestGstr3bGstr1GuideBlog() {
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
        GST return ek din bhi late hua to do alag kharche shuru ho jaate hain — <strong>late fee</strong> (return late file karne ki fixed penalty) aur <strong>interest</strong> (tax late jama karne ka byaaj). Bahut se chhote businesses in dono ko ek hi samajhte hain, aur isi confusion mein zyada paisa de dete hain. Ye guide batati hai ki kab kya lagta hai, kitna lagta hai, aur kaise bachein.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Late fee (Section 47) return late file karne par lagti hai — chahe tax zero ho</li>
          <li>GSTR-3B / GSTR-1: ₹50 per day (₹25 CGST + ₹25 SGST); nil return par ₹20 per day</li>
          <li>Late fee ki maximum limit turnover par depend karti hai — ₹2,000 / ₹5,000 / ₹10,000; nil return par ₹500</li>
          <li>Interest (Section 50) 18% saalana — sirf us tax par jo cash ledger se late jama hua</li>
          <li>Late fee kabhi ITC se pay nahi hoti — ye hamesha cash mein jaati hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee aur Interest — Dono Mein Farak Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>Late fee</strong> ek fixed per-day charge hai jo sirf return ki deadline miss karne par lagta hai. Agar aapka us mahine ka tax zero bhi hai, tab bhi late fee lagegi. <strong>Interest</strong> tab lagta hai jab aapne tax deadline ke baad jama kiya — ye 18% saalana rate se din ke hisaab se calculate hota hai. Matlab ek hi late GSTR-3B par dono lag sakte hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GSTR-3B aur GSTR-1 Late Fee — Current Rates
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Late fee per day</th>
              <th className="border px-4 py-3 text-left">Maximum cap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Nil return (koi tax liability nahi)</td>
              <td className="border px-4 py-3">₹20 (₹10 CGST + ₹10 SGST)</td>
              <td className="border px-4 py-3">₹500 per return</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Pichle saal ka turnover ₹1.5 crore tak</td>
              <td className="border px-4 py-3">₹50 (₹25 + ₹25)</td>
              <td className="border px-4 py-3">₹2,000 per return</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Turnover ₹1.5 crore se ₹5 crore</td>
              <td className="border px-4 py-3">₹50 (₹25 + ₹25)</td>
              <td className="border px-4 py-3">₹5,000 per return</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Turnover ₹5 crore se zyada</td>
              <td className="border px-4 py-3">₹50 (₹25 + ₹25)</td>
              <td className="border px-4 py-3">₹10,000 per return</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Ye caps har return par alag lagte hain. Agar aapne 3 mahine ke GSTR-3B pending rakhe hain, to teeno par alag late fee banegi. GSTR-1 par bhi GST portal agli return file karte waqt late fee automatically calculate karke GSTR-3B mein add kar deta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        18% Interest Kaise Calculate Hota Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 50 ke tahat interest <strong>net cash liability</strong> par lagta hai — yaani ITC set-off ke baad jo tax aapne cash ledger se jama kiya, sirf us par. Formula simple hai: <strong>Cash mein jama tax × 18% × late din ÷ 365</strong>.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>Example:</strong> Aapki GSTR-3B ki cash liability ₹40,000 thi, due date 20 tareekh thi, aur aapne 15 din late (5 tareekh agle mahine) file kiya. Interest = ₹40,000 × 18% × 15 ÷ 365 = lagbhag <strong>₹296</strong>. Saath mein late fee: 15 din × ₹50 = <strong>₹750</strong>. Kul extra kharcha ₹1,046 — sirf 15 din ki der se.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Galat ITC claim par interest alag hai
        </h3>
        <p className="text-gray-700 leading-8">
          Agar aapne galat Input Tax Credit claim karke use bhi kar liya, to us par 18% interest lagta hai. Sirf galti se claim hua ITC jo use nahi hua, us par interest nahi banta. ITC ke rules samajhne ke liye hamari{" "}<Link href="/blog/input-tax-credit-gst-rules-reversal" className={linkClass}>Input Tax Credit guide</Link>{" "}dekhein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee Se Bachne Ke Practical Tareeke
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Har mahine 10 tareekh tak apni sales/purchase ki entries poori kar lein — 20 tareekh ki last date par rush nahi hoga</li>
        <li>Agar paisa kam hai, tab bhi <strong>return time par file karein</strong> — late fee return late hone par lagti hai, sirf interest tax late hone par</li>
        <li>Nil return ho to SMS se bhi file ho sakti hai — ise kabhi pending na chhodein</li>
        <li>QRMP scheme (₹5 crore tak turnover) mein quarterly return se compliance ka bojh kam hota hai</li>
        <li>Portal par GSTR-2B har mahine check karein taaki ITC mismatch ki wajah se return atke nahi</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap har mahine deadline ke saath jujh rahe hain, to hamari{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing service</Link>{" "}mein hum aapki monthly filing time par handle karte hain. Aane wali saari dates ke liye hamara{" "}<Link href="/tax-deadlines" className={linkClass}>Tax Deadlines calendar</Link>{" "}bookmark kar lein.
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
        Late fee rates aur caps GST notifications ke through badal sakte hain. Ye jaankari 24 September 2026 tak ke rules par based hai — apne case ki exact calculation ke liye humse sampark karein.
      </p>
    </>
  );
}
