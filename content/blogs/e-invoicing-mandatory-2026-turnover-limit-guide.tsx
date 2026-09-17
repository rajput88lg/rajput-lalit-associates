import Link from "next/link";

const faqs = [
  {
    q: "2026 mein e-invoicing ka current threshold kya hai?",
    a: "₹5 crore aggregate turnover, kisi bhi saal mein FY2017-18 se — August 2023 se unchanged hai, 2026 mein koi aur reduction confirm nahi hui hai.",
  },
  {
    q: "Agar mera turnover ₹5 crore se neeche chala jaaye, to kya e-invoicing rukk jaayegi?",
    a: "Nahi. Ek baar aapka aggregate turnover kisi bhi saal ₹5 crore cross kar gaya, ye obligation permanent hai — baad mein turnover kam hone se ye khatam nahi hoti.",
  },
  {
    q: "Kya B2C bills ke liye bhi e-invoice banana hai?",
    a: "Nahi, e-invoicing (IRN) sirf B2B, B2G, aur export invoices ke liye mandatory hai. Lekin agar turnover ₹500 crore se zyada hai, B2C invoices par dynamic QR code zaroori hai.",
  },
  {
    q: "Agar main e-invoice banana bhool jaaun to kya hoga?",
    a: "100% tax due ya ₹10,000 (jo zyada ho) penalty ka risk hai, aur bina valid IRN wali invoice valid tax document nahi maani jaati, jisse buyer ka ITC bhi affect ho sakta hai.",
  },
  {
    q: "Kya IRP par invoice report karne ki koi time limit hai?",
    a: "₹10 crore ya usse zyada turnover wale taxpayers ke liye, invoice IRP par 30 din ke andar report karna zaroori hai (1 April 2025 se) — usse zyada der karne par portal reject kar deta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function EInvoicingMandatory2026TurnoverLimitGuide() {
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
        Agar aapki business ka turnover ₹5 crore se zyada hai (chahe sirf ek hi saal mein hua ho), to aapke liye B2B invoices ke liye e-invoicing mandatory hai — matlab sirf normal invoice banana kaafi nahi, use GST portal se digitally register bhi karana hoga. Bahut se business owners ko lagta hai ye rule sirf bade corporates par hai, jabki threshold dheere-dheere itna neeche aa chuka hai ki ab kayi mid-size aur growing small businesses bhi ispar aa gaye hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Current threshold: ₹5 crore se zyada annual turnover (kisi bhi saal mein FY2017-18 se) — August 2023 se lagu hai, 2026 mein aur nahi ghata</li>
          <li>Ek baar threshold cross ho gaya to e-invoicing obligation permanent hai — turnover baad mein kam ho jaaye to bhi</li>
          <li>E-invoice na banane par penalty: 100% tax ya ₹10,000 (jo zyada ho), aur buyer ka ITC bhi risk mein aa sakta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Threshold Kaise Ghatta Gaya — 2020 se Ab Tak
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Phase</th>
              <th className="border px-4 py-3 text-left">Threshold</th>
              <th className="border px-4 py-3 text-left">Effective From</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">1</td>
                <td className="border px-4 py-3">₹500 crore</td>
                <td className="border px-4 py-3">Oct 2020</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">2</td>
                <td className="border px-4 py-3">₹100 crore</td>
                <td className="border px-4 py-3">Jan 2021</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">3</td>
                <td className="border px-4 py-3">₹50 crore</td>
                <td className="border px-4 py-3">Apr 2021</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">4</td>
                <td className="border px-4 py-3">₹20 crore</td>
                <td className="border px-4 py-3">Apr 2022</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">5</td>
                <td className="border px-4 py-3">₹10 crore</td>
                <td className="border px-4 py-3">Oct 2022</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">6 (current)</td>
                <td className="border px-4 py-3">₹5 crore</td>
                <td className="border px-4 py-3">Aug 2023</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaunsi Businesses Cover Hoti Hain
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Koi bhi GST-registered business jiska aggregate turnover FY2017-18 se lekar kisi bhi saal mein ₹5 crore cross kar chuka hai, use B2B supplies, exports, aur government entities ko supplies ke liye e-invoice banana zaroori hai. Ye obligation permanent hai — agar aapka turnover baad mein ₹5 crore se neeche bhi chala jaaye, e-invoicing ki zimmedari khatam nahi hoti.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        B2C transactions e-invoicing (IRN) se exempt hain. Lekin agar aapka turnover ₹500 crore se zyada hai, to B2C invoices par ek dynamic QR code print karna zaroori hai (ye ek alag, purana rule hai).
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        ₹10 crore ya usse zyada turnover wale taxpayers ke liye ek 30-din ka reporting rule bhi hai (1 April 2025 se) — invoice ko IRP par 30 din ke andar report karna zaroori hai, warna portal use reject kar deta hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        E-Invoice Generate Karne ka Process
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Apne accounting software (Tally, Busy, Zoho waghera) mein invoice prepare karein</li>
          <li>Invoice data ko GSTN-authorised IRP (jaise NIC-IRP ya private IRPs) par upload karein</li>
          <li>IRP data verify karke ek unique Invoice Reference Number (IRN) aur digitally-signed QR code generate karta hai</li>
          <li>IRN aur QR code wapas mil jaata hai — inhe invoice par print karein</li>
          <li>IRN + QR code wali finalized invoice customer ko bheji jaati hai</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Non-Compliance Par Penalty
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          ITC risk sabse bada practical khatra hai
        </h3>
        <p className="text-gray-700 leading-8">
          E-invoice na banane par: 100% tax due ya ₹10,000 (jo zyada ho), har invoice ke liye. Galat/erroneous e-invoice par ₹25,000 ka penalty. Isse bhi zyada practical risk ye hai — jahan e-invoicing mandatory hai wahan bina valid IRN wali invoice ko valid tax invoice hi nahi maana jaata, jiski wajah se buyer ka Input Tax Credit claim bhi risk mein aa sakta hai.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        E-invoicing threshold dheere-dheere ghatte-ghatte ab ₹5 crore tak aa gaya hai — agar aapka business is saal ya pichle kisi saal ₹5 crore turnover cross kar chuka hai, ye zimmedari permanent ban chuki hai, chahe turnover baad mein kam ho jaaye. Hum apne{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>{" "}clients ke liye ye check karte hain ki unka e-invoicing setup sahi tarike se ho raha hai, taaki na koi penalty lage aur na buyer ka ITC atke. Agar aapki business abhi threshold ke aas-paas hai, hamse baat karke confirm kar lein.
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
        E-invoicing rules CBIC notifications ke through samay-samay par update hote hain. Ye article 17 September 2026 tak ke known rules par based hai — apni specific turnover category ke liye current GST e-invoice portal advisory se confirm karein.
      </p>
    </>
  );
}
