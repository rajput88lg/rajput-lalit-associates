import Link from "next/link";

const faqs = [
  {
    q: "Kya kheti ki income par bilkul tax nahi lagta?",
    a: "Seedha tax nahi lagta, lekin agar aapki doosri income taxable limit se zyada hai, to partial integration ke through tax ki rate par asar pad sakta hai.",
  },
  {
    q: "Kya agricultural income ITR me dikhana zaroori hai?",
    a: "Haan, jab ITR file karni ho. Agricultural income exempt hai, lekin use Schedule EI me dikhana hota hai.",
  },
  {
    q: "Kya gaon ki kheti ki zameen bechne par tax lagta hai?",
    a: "Rural agricultural land aam taur par capital asset nahi maani jaati, to capital gains tax nahi lagta. Sale se pehle classification confirm karein.",
  },
  {
    q: "Dairy farming ki income agricultural hai?",
    a: "Nahi. Dairy, poultry aur bee-keeping agricultural income ki definition me nahi aate, ye business income hoti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function AgriculturalIncomeTaxRulesIndiaExemptionBlog() {
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
        Kheti ki income par tax nahi lagta, ye baat sab jaante hain. Lekin aksar ye nahi pata hota ki iski ek shart hai: agar aapki doosri income bhi hai, to agricultural income tax ki calculation me asar daal sakti hai. Haryana-Punjab jaise agricultural areas me ye jaankari khaas kaam ki hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Agricultural income <strong>Section 10(1) ke under exempt</strong> hai</li>
          <li>Lekin agar kheti ke alawa income taxable limit se zyada hai, to <strong>partial integration</strong> method lagta hai</li>
          <li>Dairy, poultry aur processing ki income kai cases me <strong>agricultural nahi</strong> maani jaati</li>
          <li>ITR me agricultural income <strong>Schedule EI</strong> me dikhani hoti hai</li>
          <li>Rural agricultural land ki sale par aam taur par capital gains tax nahi lagta</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Agricultural Income Kya Maani Jaati Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>India me sthit zameen ka <strong>lagaan ya kiraya</strong>, jo kheti ke kaam me use ho</li>
        <li>Kheti ki operations se <strong>fasal ki bikri</strong> ki income</li>
        <li>Farm building se income, agar building kisan ne kheti ke liye banayi ho aur zameen ke paas ho</li>
        <li>Nursery me paudhe ugakar bechne ki income aksar agricultural maani jaati hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Dhyan rakhein: dairy farming, poultry farming, bee-keeping aur sirf trading jaise kaam &apos;agricultural&apos; ki definition me nahi aate. Fasal ko bazaar me bechne layak banane ki basic process (safai, sukhana) tak ki income agricultural hai, lekin usse aage badi processing ki income partially business income ho sakti hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Partial Integration Method
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapki agricultural income ₹5,000 se zyada hai <strong>aur</strong> non-agricultural income basic exemption limit se zyada hai, to tax ki calculation me agricultural income ko rate decide karne ke liye jodte hain, lekin use tax nahi karte. Is tarike ko partial integration kehte hain.
      </p>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Non-agricultural income + agricultural income jodkar slab se tax nikaalein (Step A)</li>
        <li>Agricultural income + basic exemption limit par tax nikaalein (Step B)</li>
        <li>Payable tax = <strong>Step A minus Step B</strong></li>
      </ol>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example (new regime, cess aur rebate chhodkar)
        </h3>
        <p className="text-gray-700 leading-8">
          Non-agricultural income ₹15 lakh aur agricultural income ₹3 lakh. Step A: ₹18 lakh par tax ₹1,60,000. Step B: ₹3 lakh + ₹4 lakh (basic exemption) = ₹7 lakh par tax ₹15,000. Payable tax = ₹1,60,000 − ₹15,000 = <strong>₹1,45,000</strong>, plus 4% cess. Agar agricultural income na hoti to ₹15 lakh par tax ₹1,05,000 hota.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR Me Kya Dikhana Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Agricultural income <strong>Schedule EI</strong> (Exempt Income) me dikhayein</li>
        <li>ITR-1 me agricultural income sirf <strong>₹5,000 tak</strong> dikha sakte hain. Usse zyada par ITR-2 ya ITR-3 use karein</li>
        <li>Agar business ya capital gains hain to ITR-3</li>
        <li>Zameen ki location, khasra ya survey number aur kitni zameen hai, ye record rakhein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Kaun si ITR sahi hai ye {" "}<Link href="/blog/income-tax-return-filing-online-india" className={linkClass}>ITR filing guide</Link>{" "} me dekh sakte hain, aur ITR-2/3 ke changes {" "}<Link href="/blog/new-itr-forms-ay-2026-27-changes-explained" className={linkClass}>new ITR forms guide</Link>{" "} me hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Agricultural Land Bechne Par Tax
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Zameen ka type</th>
              <th className="border px-4 py-3 text-left">Capital gains tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>Rural agricultural land</strong> (municipality limits se bahar, population aur distance ki conditions ke saath)</td>
              <td className="border px-4 py-3">Aam taur par <strong>nahi lagta</strong>, kyunki ye &apos;capital asset&apos; nahi hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Urban agricultural land</strong> (municipality ke andar ya uske paas nirdharit distance me)</td>
              <td className="border px-4 py-3">Lagta hai. LTCG 24 mahine ke baad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Is ke liye municipality ke population ke hisaab se 2, 6 ya 8 km ka distance test dekha jaata hai. Sale se pehle zameen ki classification confirm karein. Urban zameen par Section 54B jaise exemptions bhi milte hain. Property sale ke baaki rules {" "}<Link href="/blog/capital-gains-tax-on-property-sale-section-54" className={linkClass}>capital gains guide</Link>{" "} me hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Galtiyan
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Kheti ki income ko ITR me bilkul na dikhana. Isse baad me explain karna mushkil hota hai</li>
        <li>Dairy ya poultry ki income ko agricultural maan lena</li>
        <li>Cash me fasal bechkar record na rakhna</li>
        <li>Non-agricultural income bhi ho to partial integration ka dhyan na rakhna</li>
        <li>HUF ki ancestral zameen ka proper record na rakhna. Is par {" "}<Link href="/blog/huf-hindu-undivided-family-tax-benefits" className={linkClass}>HUF guide</Link>{" "} dekhein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapki kheti ke saath doosri income bhi hai (job, business, rent), to ITR me sahi treatment zaroori hai. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} se sahi ITR file karwayein. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
