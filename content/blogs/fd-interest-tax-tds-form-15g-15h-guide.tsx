import Link from "next/link";

const faqs = [
  {
    q: "Kya FD par hamesha TDS kat'ta hai?",
    a: "Nahi. Ek bank se saal ka interest ₹50,000 (senior ke liye ₹1 lakh) se zyada ho tabhi TDS kat'ta hai.",
  },
  {
    q: "Form 15G kab dena chahiye?",
    a: "Har financial year ki shuruaat me, jab aapki total income par tax zero ho. Senior citizens Form 15H denge.",
  },
  {
    q: "TDS kat gaya lekin income kam hai, ab kya karein?",
    a: "ITR file karke refund claim karein. Bank ko Form 15G/15H agle saal time par dena behtar rahega.",
  },
  {
    q: "Cumulative FD par tax kab lagta hai?",
    a: "Har saal accrued interest par tax lagta hai, chahe paisa maturity par hi mile.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function FdInterestTaxTdsForm15g15hGuideBlog() {
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
        FD ka interest bank account me aata hai to laga ki kamai ho gayi, lekin us par tax bhi lagta hai. Bank kabhi kabhi TDS bhi kaat leta hai, chahe aapki income taxable limit se kam ho. Is guide me FD interest ka tax, TDS limit aur Form 15G/15H ka sahi istemaal samjhein.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>FD interest <strong>&apos;Income from Other Sources&apos;</strong> me aata hai aur aapki slab par taxable hai</li>
          <li>Bank TDS tab kaatta hai jab ek bank se saal ka interest <strong>₹50,000</strong> se zyada ho (senior citizen ke liye <strong>₹1 lakh</strong>)</li>
          <li>TDS rate <strong>10%</strong>, PAN na dene par <strong>20%</strong></li>
          <li>Kam income wale log <strong>Form 15G (60 se kam)</strong> ya <strong>15H (60+)</strong> de kar TDS rok sakte hain</li>
          <li>Cumulative FD ka interest bhi <strong>har saal accrue</strong> hokar taxable hota hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        FD Interest Ka Tax Kaise Lagta Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        FD ka interest aapki total income me add hota hai aur slab rate par tax lagta hai. Agar aap 30% slab me hain, to interest par bhi 30% (plus cess) lagega. Cumulative FD me interest maturity par milta hai, lekin tax <strong>har saal accrual basis</strong> par dena hota hai. Isliye maturity ka intezaar na karein.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Interest ko ITR me &apos;Income from Other Sources&apos; me dikhana hota hai</li>
        <li>Bank FD, post office time deposit aur corporate FD sab par ye rule lagta hai</li>
        <li>Interest par tax tabhi nahi lagta jab aapki total income taxable limit ke andar ho</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Bank TDS Ki Limit Aur Rate
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">General</th>
              <th className="border px-4 py-3 text-left">Senior citizen (60+)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">TDS limit (ek bank se saal ka interest)</td>
              <td className="border px-4 py-3">₹50,000</td>
              <td className="border px-4 py-3">₹1,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS rate (PAN ke saath)</td>
              <td className="border px-4 py-3">10%</td>
              <td className="border px-4 py-3">10%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">PAN na hone par rate</td>
              <td className="border px-4 py-3">20%</td>
              <td className="border px-4 py-3">20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Limit <strong>ek hi bank ki sabhi branches</strong> ke interest ko milakar calculate hoti hai. Agar aapke 3 alag banks me FD hain, to har bank apni limit alag dekhta hai. Isliye total interest ₹50,000 se kam ho tab bhi, har bank me interest alag alag dekhna padta hai.
      </p>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Dhyan rakhein
        </h3>
        <p className="text-gray-700 leading-8">
          TDS kaatna bank ki zimmedari hai, lekin <strong>tax dena</strong> aapki zimmedari hai. TDS na kate tab bhi interest ITR me dikhana zaroori hai. Sab TDS ka record {" "}<Link href="/blog/form-26as-ais-tis-reconciliation-itr" className={linkClass}>AIS aur 26AS guide</Link>{" "} me check kar sakte hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 15G Aur 15H Kya Hain
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Form</th>
              <th className="border px-4 py-3 text-left">Kiske liye</th>
              <th className="border px-4 py-3 text-left">Shart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>Form 15G</strong></td>
              <td className="border px-4 py-3">60 saal se kam resident individual aur HUF</td>
              <td className="border px-4 py-3">Estimated total income par tax <strong>zero</strong> ho</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Form 15H</strong></td>
              <td className="border px-4 py-3">60 saal ya usse zyada ke resident senior citizens</td>
              <td className="border px-4 py-3">Estimated total income par tax <strong>zero</strong> ho</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Form <strong>har financial year ke shuru me</strong> bank me dena hota hai, har bank ko alag</li>
        <li>PAN dena zaroori hai, aur declaration sahi hona chahiye</li>
        <li>Galat declaration dena punishable hai</li>
        <li>Jin logon ki income taxable limit se kam hai (jaise pensioner, homemaker), unke liye ye bahut kaam ka hai</li>
        <li>NRI ye forms nahi de sakte</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Kat Gaya To Refund Kaise Milega
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapki income taxable limit se kam thi lekin phir bhi TDS kat gaya, to ITR file karke refund claim kar sakte hain. Refund me delay ke reasons {" "}<Link href="/blog/income-tax-refund-status-delay-reasons" className={linkClass}>refund status guide</Link>{" "} me hain. Isliye Form 15G/15H time par dena zyada aasan hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deductions: 80TTA Aur 80TTB
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>80TTA:</strong> savings account ke interest par ₹10,000 tak deduction (60 se kam age waalon ke liye, old regime)</li>
        <li><strong>80TTB:</strong> senior citizens ke liye FD aur savings dono ke interest par ₹50,000 tak (old regime)</li>
        <li>80TTA/80TTB sirf <strong>old regime</strong> me milte hain</li>
        <li>FD ke interest par 80TTA nahi milta, wo sirf savings account ke liye hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Senior citizens ke baaki benefits {" "}<Link href="/blog/senior-citizen-income-tax-benefits-fy-2026-27" className={linkClass}>senior citizen guide</Link>{" "} me hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        FD, savings aur dusre interest ka tax planning karke TDS refund ya extra tax se bach sakte hain. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me ye sab cover hota hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
