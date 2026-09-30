import Link from "next/link";

const faqs = [
  {
    q: "QRMP me kya GST return quarterly hi bharna hai?",
    a: "Haan, GSTR-1 aur GSTR-3B quarterly hote hain, lekin tax ki payment har mahine PMT-06 se karni hoti hai.",
  },
  {
    q: "QRMP ki turnover limit kya hai?",
    a: "Pichhle financial year ka aggregate turnover ₹5 crore tak. Usse zyada hone par monthly filing karni padegi.",
  },
  {
    q: "Kya QRMP ke baad bhi ITC milta hai?",
    a: "Haan, lekin buyer ko ITC tab milta hai jab aapki invoice uski 2B me aaye. Isliye B2B invoices IFF se pehle upload karna helpful hota hai.",
  },
  {
    q: "Kya QRMP chhod kar monthly filing par wapas ja sakte hain?",
    a: "Haan, portal par opt-out ka option hai. Opt-out ya opt-in ka timing portal ke rules ke hisaab se hota hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function QrmpSchemeQuarterlyGstReturnIffGuideBlog() {
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
        Har mahine do return file karna chhote business ke liye bojh ban jaata hai. QRMP scheme (Quarterly Return Monthly Payment) isi ke liye bani hai: return quarter me ek baar, lekin tax har mahine pay karna hota hai. Is guide me eligibility, due dates aur payment ke dono methods simple bhasha me hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>QRMP me <strong>GSTR-1 aur GSTR-3B quarterly</strong> file hote hain, tax <strong>monthly</strong> pay hota hai</li>
          <li>Eligibility: pichhle financial year ka aggregate turnover <strong>₹5 crore tak</strong></li>
          <li>Monthly tax payment <strong>PMT-06 challan</strong> se, mahine ki 25 tareekh tak</li>
          <li>Pehle do mahine me B2B invoices <strong>IFF</strong> se upload kar sakte hain taaki buyer ko ITC mile</li>
          <li>Payment ke do methods hain: <strong>Fixed Sum</strong> aur <strong>Self-Assessment</strong></li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        QRMP Scheme Kya Hai Aur Kaun Le Sakta Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        QRMP scheme un registered taxpayers ke liye hai jinka pichhle financial year ka aggregate turnover ₹5 crore tak hai aur jo apni GSTR-1 aur GSTR-3B quarterly file karna chahte hain. Isme GSTR-3B me tax ki payment har mahine alag se hoti hai, lekin return quarter ke end me file hota hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Turnover ₹5 crore se zyada ho jaye to scheme apne aap band ho jaati hai</li>
        <li>Composition dealers QRMP ke bajay apni alag quarterly process (CMP-08) follow karte hain</li>
        <li>Opt-in ke liye aapke pichhle returns filed hone chahiye</li>
        <li>Scheme portal par khud opt-in ya opt-out ki ja sakti hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Due Dates: Return Aur Payment
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kaam</th>
              <th className="border px-4 py-3 text-left">Due date</th>
              <th className="border px-4 py-3 text-left">Kya file/pay karna hai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Quarterly GSTR-1</td>
              <td className="border px-4 py-3">Quarter ke baad mahine ki <strong>13 tareekh</strong></td>
              <td className="border px-4 py-3">Poore quarter ke outward supplies</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Quarterly GSTR-3B</td>
              <td className="border px-4 py-3">Quarter ke baad mahine ki <strong>22 ya 24 tareekh</strong></td>
              <td className="border px-4 py-3">State category par depend karta hai. Haryana jaise states me 24 tareekh</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Monthly PMT-06 (pehle 2 mahine)</td>
              <td className="border px-4 py-3">Mahine ki <strong>25 tareekh</strong></td>
              <td className="border px-4 py-3">Tax ki monthly payment</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">IFF (optional)</td>
              <td className="border px-4 py-3">Mahine ki <strong>13 tareekh</strong></td>
              <td className="border px-4 py-3">Sirf B2B invoices</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Late fee ka dhyan rakhein
        </h3>
        <p className="text-gray-700 leading-8">
          Return quarterly hone ke baad bhi due date miss hone par late fee aur 18% interest lagta hai. Late fee ke rules hamari {" "}<Link href="/blog/gst-late-fee-interest-gstr-3b-gstr-1-guide" className={linkClass}>late fee guide</Link>{" "} me hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        IFF (Invoice Furnishing Facility) Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Quarterly return me aapke B2B buyers ko ITC tab milta hai jab aap GSTR-1 file karte hain, yaani quarter ke end me. Isse buyer ko pehle do mahine ka ITC late milta hai. IFF ek optional facility hai jisse aap pehle aur doosre mahine me B2B invoices upload kar sakte hain (ek seemit value tak), taaki buyer ko ITC time par mile. Current IFF limit portal par check kar lein.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>IFF me sirf B2B invoices aur credit/debit notes aate hain</li>
        <li>B2C invoices IFF me nahi dale jaate, wo quarterly GSTR-1 me aate hain</li>
        <li>Jo invoices IFF me daal diye, unhe GSTR-1 me dobara nahi daalna hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Monthly Tax Payment Ke Do Methods
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Method</th>
              <th className="border px-4 py-3 text-left">Kaise kaam karta hai</th>
              <th className="border px-4 py-3 text-left">Kiske liye theek</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>Fixed Sum Method</strong></td>
              <td className="border px-4 py-3">Pichhle quarter ki GSTR-3B me pay hui cash liability ka <strong>35%</strong> bina calculation ke PMT-06 se bharte hain</td>
              <td className="border px-4 py-3">Jinka sales stable hai aur calculation ka jhanjhat nahi chahiye</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Self-Assessment Method</strong></td>
              <td className="border px-4 py-3">Us mahine ki actual sales aur ITC ke hisaab se tax calculate karke bharte hain</td>
              <td className="border px-4 py-3">Jinke sales me ups and downs hote hain</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Quarter ke end me GSTR-3B me poore quarter ki liability dikhayi jaati hai aur monthly paid amount adjust ho jaata hai. Agar monthly payment kam rahi, to balance 3B ke saath pay karna hota hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        QRMP Lene Ke Fayde Aur Nuksaan
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Fayda:</strong> Saal me 24 ke bajay sirf 8 returns, compliance ka time aur accountant ka cost kam</li>
        <li><strong>Fayda:</strong> Chhote business ke liye cash flow manage karna aasan</li>
        <li><strong>Nuksaan:</strong> Buyer ko ITC late milta hai, agar IFF use nahi karein</li>
        <li><strong>Nuksaan:</strong> Monthly PMT-06 bhoolne par interest lag sakta hai</li>
        <li><strong>Nuksaan:</strong> Turnover badhne par scheme se bahar hona padta hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapke zyada buyers registered businesses hain aur wo ITC par depend karte hain, to monthly filing ya IFF ka use karna behtar ho sakta hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        QRMP chunna ya monthly filing par rehna, dono ke apne fayde hain. Aapke business ke hisaab se sahi option chunne me hamari {" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing service</Link>{" "} madad karti hai. Seedhe baat karne ke liye {" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "} book karein.
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
