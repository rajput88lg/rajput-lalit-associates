import Link from "next/link";

const faqs = [
  {
    q: "RNOR status kitne saal milta hai?",
    a: "Aam taur par 10+ saal bahar rehne walon ko 2-3 financial years tak, jo pichle saalon ke India stay ke din par depend karta hai.",
  },
  {
    q: "Kya RNOR ki foreign salary par India mein tax lagta hai?",
    a: "Nahi, agar wo videsh mein kamai aur receive hui hai aur India se controlled business/profession se nahi hai.",
  },
  {
    q: "Wapas aane ke baad NRE account ka kya karein?",
    a: "Use resident savings account ya RFC account mein convert karwana hota hai. FCNR deposits maturity tak chal sakte hain.",
  },
  {
    q: "Kya RNOR ko Schedule FA bharna padta hai?",
    a: "Nahi. Foreign assets ki reporting Resident & Ordinarily Resident bante hi zaroori hoti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function RnorStatusReturningNriTaxGuideBlog() {
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
        Saalon videsh mein rehne ke baad India wapas aana ek bada faisla hai — aur tax ke hisaab se ye transition sabse zyada galat plan hota hai. Achhi baat ye hai ki law aapko ek <strong>transition period</strong> deta hai jise <strong>RNOR (Resident but Not Ordinarily Resident)</strong> kehte hain. Is dauran aapki foreign income par India mein tax nahi lagta. Sahi planning se ye 2-3 saal kaafi tax bacha sakte hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>RNOR ek beech ka status hai — Resident aur NRI ke beech</li>
          <li>RNOR hone par foreign income (videsh mein kamai, videsh ke investments) India mein taxable nahi</li>
          <li>Aam taur par 2-3 saal ke liye milta hai, pichle saalon ke stay par depend karta hai</li>
          <li>RNOR ko foreign assets ITR mein report nahi karne padte</li>
          <li>Ordinary Resident bante hi worldwide income aur foreign assets dono report karne hote hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Residential Status — Teen Categories
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Status</th>
              <th className="border px-4 py-3 text-left">India mein kya taxable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Non-Resident (NRI)</td>
              <td className="border px-4 py-3">Sirf India mein kamai/receive hui income</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">RNOR</td>
              <td className="border px-4 py-3">India ki income + videsh ki woh income jo India se controlled business/profession se ho</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Resident &amp; Ordinarily Resident</td>
              <td className="border px-4 py-3">Worldwide income</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Pehle ye dekhna hota hai ki aap &apos;Resident&apos; hain ya nahi (182 din ya 60+365 din wala test). Apna status check karne ke liye hamara free{" "}<Link href="/nri-residential-status-calculator" className={linkClass}>NRI Residential Status Calculator</Link>{" "}use karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        RNOR Kab Banta Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Resident hone ke baad, aap RNOR hain agar in mein se <strong>koi ek</strong> condition poori ho:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Pichle <strong>10 mein se 9 saal</strong> aap Non-Resident the, <strong>ya</strong></li>
        <li>Pichle <strong>7 saal</strong> mein India mein total stay <strong>729 din ya kam</strong> tha</li>
        <li>India ki income (foreign income chhodkar) ₹15 lakh se zyada hai aur India mein 120-181 din rahe — tab bhi RNOR maane jaate hain</li>
        <li>Deemed resident (India income ₹15 lakh+, kisi desh mein tax resident nahi) bhi RNOR hote hain</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Jo log 10+ saal bahar rahe, unhe aam taur par wapas aane ke baad <strong>2 ya 3 financial years</strong> tak RNOR status milta hai. Exact saal aapke har saal ke India stay ke din ginne se tay hota hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        RNOR Period Mein Kya Karein
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Foreign investments ka review:</strong> jo bechna hai, wo RNOR period mein bechne par India mein tax nahi (videsh ka tax rules alag)</li>
        <li><strong>NRE account:</strong> wapas aane par NRE ko resident account ya <strong>RFC (Resident Foreign Currency)</strong> account mein badalna hota hai; RFC mein foreign currency rakh sakte hain</li>
        <li><strong>FCNR deposits:</strong> maturity tak chal sakte hain, RNOR period mein interest tax-free rehta hai</li>
        <li><strong>Foreign retirement accounts (401k etc.):</strong> withdrawal ki timing plan karein</li>
        <li><strong>Bank/KYC update:</strong> banks aur mutual funds mein residential status turant update karein</li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ordinary Resident bante hi Schedule FA
        </h3>
        <p className="text-gray-700 leading-8">
          RNOR period khatam hote hi aapko ITR mein <strong>saare foreign bank accounts, shares, property aur retirement accounts</strong> Schedule FA mein dikhane hote hain. Foreign asset report na karne par Black Money Act ke tahat bhaari penalty ho sakti hai — ye sabse badi galti hai jo returning NRIs karte hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Double Taxation Se Kaise Bachein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Wapas aane wale saal mein aap dono desh mein resident maane ja sakte hain. Aise mein <strong>DTAA</strong> ke tie-breaker rules aur foreign tax credit (Form 67) se double tax bachta hai. Isliye wapas aane ki date aur us saal ki income ko plan karna zaroori hai. Hamari{" "}<Link href="/blog/nri-itr-filing-which-form-dtaa-relief" className={linkClass}>NRI ITR guide</Link>{" "}mein DTAA relief ka process hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Wapas aane se 6-12 mahine pehle planning shuru karna sabse faydemand hai. Hamari{" "}<Link href="/nri-tax-services" className={linkClass}>NRI Tax Services</Link>{" "}team returning NRIs ke liye RNOR planning, account conversion aur ITR sab handle karti hai —{" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "}book karein.
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
        Residential status ke rules Income-tax Act (1 April 2026 se Income-tax Act, 2025 ka Section 6) par based hain aur 24 September 2026 tak verify kiye gaye hain. Returning NRI planning har case mein alag hoti hai — humse zaroor consult karein.
      </p>
    </>
  );
}
