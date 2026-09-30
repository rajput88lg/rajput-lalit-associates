import Link from "next/link";

const faqs = [
  {
    q: "Ek hi invoice me do alag rate wale items ho to kya karein?",
    a: "Agar wo alag alag supplies hain aur bundle nahi, to har item par apna rate lagta hai. Agar bundle hai, to composite ya mixed supply ke rules lagenge.",
  },
  {
    q: "Principal supply kya hoti hai?",
    a: "Composite supply me wo item jo supply ka main maqsad ho, jiske liye customer payment kar raha hai. Baaki cheezein uske saath ancillary hoti hain.",
  },
  {
    q: "Mixed supply me sabse zyada rate kyun lagta hai?",
    a: "Section 8(b) ke hisaab se mixed supply ka tax us item ke rate par hota hai jiska rate sabse zyada hai. Ye rule revenue protect karne ke liye hai.",
  },
  {
    q: "Kya hotel room aur breakfast composite supply hai?",
    a: "Aam taur par haan, agar breakfast room tariff me included hai. Lekin exact treatment case ke facts aur notification par depend karta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstMixedSupplyCompositeSupplyTaxRateBlog() {
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
        Agar aap ek hi invoice me kai cheezein bechte hain, jaise hamper, package ya service ke saath goods, to sawaal aata hai: poore invoice par ek hi GST rate lagega ya alag alag? Iska jawab CGST Act ki Section 8 deti hai, jo mixed supply aur composite supply ka fark batati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Composite supply:</strong> goods/services jo naturally saath bikte hain, tax <strong>principal supply</strong> ke rate par</li>
          <li><strong>Mixed supply:</strong> alag alag items ek price par, tax us item ke rate par jo <strong>sabse zyada</strong> hai</li>
          <li>Dono me invoice ek hota hai, lekin tax ka tareeka alag</li>
          <li>Galat classification se tax kam ya zyada pay ho sakta hai aur notice aa sakta hai</li>
          <li>Doubt me ho to GST classification pehle confirm karein</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Composite Supply Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Composite supply tab hoti hai jab do ya zyada supplies <strong>naturally bundled</strong> hote hain, yaani normal business me wo saath saath hi supply hote hain, aur unme se ek <strong>principal supply</strong> hoti hai. Puri supply par tax principal supply ke rate se lagta hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Example 1:</strong> Ek computer bechna, saath me packing, delivery aur 1 saal ki warranty. Principal supply computer hai, to GST computer ke rate par lagega</li>
        <li><strong>Example 2:</strong> Hotel ka room book karna jisme breakfast included ho. Principal supply room ki hai</li>
        <li><strong>Example 3:</strong> AC ki sale ke saath installation, principal supply AC ki hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Mixed Supply Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Mixed supply me do ya zyada alag alag items <strong>ek single price</strong> par bechte hain, lekin wo naturally saath nahi bikte, yaani customer chahe to unhe alag bhi khareed sakta hai. Is case me tax us item ke rate par lagta hai jiska rate <strong>sabse zyada</strong> hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Example 1:</strong> Diwali gift pack jisme mithai, dry fruits, chocolates aur cold drink ek box me hain. Sabse zyada rate wale item ke rate par poore pack par tax lagega</li>
        <li><strong>Example 2:</strong> Goods aur unrelated service ka ek package ek hi price par</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Fark samajhne ka simple tareeka
        </h3>
        <p className="text-gray-700 leading-8">
          Sawaal puchiye: kya ye cheezein normal business me hamesha saath hi milti hain? Agar haan, to <strong>composite</strong>. Agar customer inhe alag alag bhi khareed sakta hai aur aapne sirf offer ke liye pack kiya hai, to <strong>mixed</strong>.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Dono Me Comparison
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Composite Supply</th>
              <th className="border px-4 py-3 text-left">Mixed Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Naturally bundled</td>
              <td className="border px-4 py-3">Haan</td>
              <td className="border px-4 py-3">Nahi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Principal supply</td>
              <td className="border px-4 py-3">Hoti hai</td>
              <td className="border px-4 py-3">Nahi hoti</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Tax kis rate par</td>
              <td className="border px-4 py-3">Principal supply ke rate par</td>
              <td className="border px-4 py-3">Sabse zyada rate wale item ke rate par</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Customer alag khareed sakta hai?</td>
              <td className="border px-4 py-3">Aam taur par nahi</td>
              <td className="border px-4 py-3">Haan, sakta hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Legal reference</td>
              <td className="border px-4 py-3">Section 2(30) aur Section 8(a)</td>
              <td className="border px-4 py-3">Section 2(74) aur Section 8(b)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Practical Problems Aur Risks
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Galat classification:</strong> Composite ko mixed maan lene par zyada rate lag sakta hai, ya ulta</li>
        <li><strong>Separate invoice:</strong> Agar items alag alag invoice me bechein, to har item ka apna rate lagega. Sirf offer ke liye ek invoice banana theek nahi</li>
        <li><strong>Rate changes:</strong> Jab GST rates badlein, to mixed supply me sabse zyada rate wala item naya rate decide karta hai. Recent reforms ke liye {" "}<Link href="/blog/gst-2-0-reforms-2026-sector-impact-guide" className={linkClass}>GST 2.0 guide</Link>{" "} dekhein</li>
        <li><strong>Invoice format:</strong> Invoice me description saaf likhna zaroori hai. Format ke liye {" "}<Link href="/blog/gst-tax-invoice-format-mandatory-fields" className={linkClass}>tax invoice guide</Link>{" "} padhein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapke products ka rate kis slab me aata hai ye check karna hai, to {" "}<Link href="/blog/gst-rates-2026-slab-list-item-wise" className={linkClass}>GST rates list</Link>{" "} dekhein ya hamare {" "}<Link href="/gst-calculator" className={linkClass}>GST Calculator</Link>{" "} ka use karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Business Ke Liye Tips
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Har package ka <strong>HSN/SAC aur rate</strong> pehle se decide karke rakhein</li>
        <li>Bundle offer banane se pehle check karein ki wo composite hai ya mixed</li>
        <li>Agar sure nahi, to items ko <strong>alag invoice lines</strong> me dikhayein, har line par apna rate</li>
        <li>Decision ko note karke rakhein taaki audit me explain kar sakein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Product bundle ya service package ka sahi GST classification business ki profit par seedha asar daalta hai. Hamari {" "}<Link href="/gst-registration" className={linkClass}>GST Registration aur compliance service</Link>{" "} me aapke business ke hisaab se guidance milti hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
        Ye jaankari 30 September 2026 tak ki GST law aur notifications par based hai. GST rules, due dates aur rates badalte rehte hain, isliye koi bhi decision lene se pehle latest notification check karein ya humse consult karein.
      </p>
    </>
  );
}
