import Link from "next/link";

const faqs = [
  {
    q: "Physical gold par LTCG kab lagta hai?",
    a: "24 mahine se zyada rakhne par. Uske baad bechne par 12.5% (bina indexation) par tax lagta hai.",
  },
  {
    q: "Kya SGB par tax lagta hai?",
    a: "Interest par slab rate se tax lagta hai. Maturity par individual ke liye capital gains exempt hain.",
  },
  {
    q: "Digital gold par tax kaise lagta hai?",
    a: "Physical gold ki tarah. 24 mahine ke baad LTCG 12.5%, usse pehle slab rate.",
  },
  {
    q: "Kya gift me mile gold par tax lagta hai?",
    a: "Gift ke time par relatives se mila gold tax-free hai. Bechte waqt pichhle owner ki cost aur holding period maani jaati hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GoldTaxIndiaPhysicalGoldEtfSovereignGoldBondBlog() {
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
        Bharat me sona sirf jewellery nahi, investment bhi hai. Lekin sona bechne par tax ka rule is par depend karta hai ki aapne kis form me gold rakha hai: physical gold, gold ETF, digital gold ya sovereign gold bond. Har ek ka tax alag hai, aur galat samajhne par kaafi fark pad sakta hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Physical gold:</strong> 24 mahine ke baad bechne par LTCG <strong>12.5%</strong> bina indexation</li>
          <li><strong>Gold ETF (listed):</strong> 12 mahine ke baad LTCG 12.5%, lekin ₹1.25 lakh ki equity exemption nahi milti</li>
          <li><strong>SGB:</strong> maturity par individual ke liye capital gains <strong>exempt</strong>, interest taxable</li>
          <li><strong>Digital gold</strong> ko bhi physical gold ki tarah treat karte hain</li>
          <li>Short-term gains par slab rate se tax lagta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Gold Ke Forms Aur Tax
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Form</th>
              <th className="border px-4 py-3 text-left">Long-term ke liye holding</th>
              <th className="border px-4 py-3 text-left">LTCG</th>
              <th className="border px-4 py-3 text-left">Short-term</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Physical gold (coins, bars, jewellery)</td>
              <td className="border px-4 py-3">24 mahine se zyada</td>
              <td className="border px-4 py-3">12.5% bina indexation</td>
              <td className="border px-4 py-3">Slab rate</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Digital gold</td>
              <td className="border px-4 py-3">24 mahine se zyada</td>
              <td className="border px-4 py-3">12.5% bina indexation</td>
              <td className="border px-4 py-3">Slab rate</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Gold ETF (listed)</td>
              <td className="border px-4 py-3">12 mahine se zyada</td>
              <td className="border px-4 py-3">12.5%</td>
              <td className="border px-4 py-3">Slab rate</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Sovereign Gold Bond (SGB)</td>
              <td className="border px-4 py-3">Maturity tak</td>
              <td className="border px-4 py-3">Maturity par individual ke liye exempt</td>
              <td className="border px-4 py-3">Exchange par bechne par rules lagte hain</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Gold mutual funds (fund of funds) ke liye holding period aur rate units ke type par depend karta hai, isliye unhe bechne se pehle confirm kar lein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Physical Gold Ka Tax Kaise Calculate Karein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Capital gain = sale price minus cost of acquisition (khareed ki keemat aur making charges ke saath). 24 mahine ke baad bechne par gain par 12.5% tax (plus cess). 24 mahine se pehle bechne par gain aapki income me add hokar slab se tax hota hai.
      </p>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          (Samjhane ke liye kalpanik numbers) Aapne 2019 me sona ₹3 lakh me khareeda aur 2026 me ₹12 lakh me becha. LTCG = ₹9 lakh. Tax = ₹9 lakh × 12.5% = <strong>₹1,12,500</strong> plus cess. Is case me 2024 ke baad indexation ka fayda nahi milega.
        </p>
      </div>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Gift ya inheritance me mile gold me <strong>pichhle owner ki cost aur holding period</strong> maani jaati hai</li>
        <li>Jewellery me GST aur making charges alag hote hain, unhe cost me jod sakte hain agar bill ho</li>
        <li>Bill ya purchase proof sambhal kar rakhein. Bina proof ke cost prove karna mushkil hota hai. Gift ke rules {" "}<Link href="/blog/tax-on-gifts-received-relatives-50000-rule" className={linkClass}>gift tax guide</Link>{" "} me hain</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Sovereign Gold Bond (SGB)
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Interest:</strong> 2.5% saalana interest <strong>taxable</strong> hai (slab rate se)</li>
        <li><strong>Maturity (8 saal) par</strong> individual ke liye capital gains <strong>exempt</strong> hain</li>
        <li>RBI ke through <strong>5th saal ke baad premature redemption</strong> par bhi exemption milta hai</li>
        <li>Exchange par <strong>bechne par</strong> LTCG 12.5% lagta hai (12 mahine ke baad), exemption nahi milti</li>
        <li>SGB ki nayi tranche ab nahi aa rahi, lekin purane bonds exchange par milte hain</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Gold Ko Ghar Me Rakhne Ki Limits
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Income Tax department ke guideline ke hisaab se search ke time shaadi-shuda mahila ke 500 gram, avivahit mahila ke 250 gram aur purush ke 100 gram tak ke jewellery par aam taur par seizure nahi hota. Ye sirf guidelines hain, law nahi. Inheritance, gift ya income source ke documents rakhna hamesha behtar hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Gold khareedne par cash ki limit: ek din ya ek transaction me ₹2 lakh ya usse zyada cash me lena-dena nahi kar sakte (Section 269ST)</li>
        <li>Bill me PAN aur hallmark details rakhein</li>
        <li>Bade transactions AIS me report ho sakte hain</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Gold Bechkar Tax Kaise Bachayein
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>24 mahine se pehle bechne se bachein, taaki LTCG rate mile</li>
        <li>Gold ke gains ko residential house me invest karke <strong>Section 54F</strong> ka exemption le sakte hain (shartein lagti hain). Property ke exemptions {" "}<Link href="/blog/capital-gains-tax-on-property-sale-section-54" className={linkClass}>Section 54 guide</Link>{" "} me hain</li>
        <li>SGB ko maturity tak hold karein agar tax-free gains chahiye</li>
        <li>Losses ho to {" "}<Link href="/blog/loss-set-off-carry-forward-income-tax-itr" className={linkClass}>loss set-off guide</Link>{" "} ke rules dekhein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Gold ya kisi bhi asset ko bechne se pehle tax ka hisaab lagana zaroori hai. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me capital gains ki planning aur filing dono hoti hain. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
