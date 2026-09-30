import Link from "next/link";

const faqs = [
  {
    q: "ESOP par kab tax lagta hai?",
    a: "Do baar: pehle exercise par perquisite ke roop me (salary me) aur phir shares bechne par capital gains ke roop me.",
  },
  {
    q: "RSU par tax kab lagta hai?",
    a: "Vesting ke din FMV par perquisite ke roop me, aur shares bechne par capital gains alag se.",
  },
  {
    q: "Foreign RSU ke liye Schedule FA zaroori hai?",
    a: "Haan. Foreign shares ko Schedule FA me dikhana compulsory hai, chahe aapne shares bechein ya nahi.",
  },
  {
    q: "Kya ESOP ka tax defer ho sakta hai?",
    a: "Eligible (80-IAC certified) startups ke employees ke liye haan, 48 mahine tak ya shares bechne/job chhodne tak, jo pehle ho.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function EsopRsuTaxEmployeesIndiaPerquisiteCapitalGainsBlog() {
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
        Kai companies ab salary ke saath ESOP ya RSU bhi deti hain, khaaskar startups aur MNCs. In par tax do steps me lagta hai, aur aksar employees ko pehle step ka tax tab pata chalta hai jab TDS kat chuka hota hai. Is guide me dono steps aur foreign RSU ke extra compliance samjhate hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Step 1 (exercise/vest par):</strong> FMV minus exercise price ka fark <strong>salary (perquisite)</strong> me taxable</li>
          <li><strong>Step 2 (sale par):</strong> sale price minus exercise date ka FMV par <strong>capital gains</strong></li>
          <li>Listed shares me <strong>12 mahine</strong> ke baad LTCG (12.5%), unlisted/foreign me <strong>24 mahine</strong></li>
          <li>Foreign RSU me <strong>Schedule FA</strong> aur <strong>Form 67</strong> zaroori hai</li>
          <li>Eligible (80-IAC certified) startup employees ke liye tax <strong>defer</strong> hone ka option hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ESOP Aur RSU Me Fark
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">ESOP</th>
              <th className="border px-4 py-3 text-left">RSU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Kya hai</td>
              <td className="border px-4 py-3">Nishchit price par shares khareedne ka <strong>option</strong></td>
              <td className="border px-4 py-3">Bina price diye milne wale <strong>shares</strong> (vesting ke baad)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employee ko paisa dena padta hai?</td>
              <td className="border px-4 py-3">Haan, exercise price</td>
              <td className="border px-4 py-3">Nahi (ya bahut kam)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Tax kab lagta hai</td>
              <td className="border px-4 py-3"><strong>Exercise</strong> par</td>
              <td className="border px-4 py-3"><strong>Vesting</strong> par</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step 1: Exercise Ya Vesting Par Perquisite Tax
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Jab aap ESOP exercise karte hain ya RSU vest hota hai, to us din ke <strong>FMV (fair market value)</strong> aur aapke diye gaye price ka fark aapki salary me &apos;perquisite&apos; ke roop me add hota hai. Is par slab rate se tax lagta hai aur employer TDS kaat leta hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Listed shares:</strong> FMV = exercise date ko stock exchange par opening aur closing price ka average</li>
        <li><strong>Unlisted shares:</strong> FMV ek merchant banker ki valuation se tay hota hai</li>
        <li>Perquisite me ye amount salary ki tarah taxable hai, chahe aapne shares abhi bechein nahi hain</li>
        <li>RSU me exercise price zero hone se poora FMV taxable hota hai</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          Aapko ESOP me ₹100 per share ke price par 1,000 shares mile. Exercise ke din FMV ₹400 hai. Perquisite = (₹400 − ₹100) × 1,000 = <strong>₹3,00,000</strong>. Ye aapki salary me add hokar slab se taxable hoga.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step 2: Shares Bechne Par Capital Gains
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Shares bechne par capital gains = sale price minus exercise date ka FMV (jo aapne perquisite me tax diya). Holding period exercise ki date se ginte hain.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Shares ka type</th>
              <th className="border px-4 py-3 text-left">LTCG ke liye holding</th>
              <th className="border px-4 py-3 text-left">LTCG rate</th>
              <th className="border px-4 py-3 text-left">STCG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Listed (India)</td>
              <td className="border px-4 py-3">12 mahine se zyada</td>
              <td className="border px-4 py-3">12.5% (₹1.25 lakh se upar ke gains par)</td>
              <td className="border px-4 py-3">20%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Unlisted (India) aur foreign shares</td>
              <td className="border px-4 py-3">24 mahine se zyada</td>
              <td className="border px-4 py-3">12.5% (bina indexation)</td>
              <td className="border px-4 py-3">Slab rate</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Listed shares ke rules {" "}<Link href="/blog/capital-gains-tax-shares-mutual-funds-stcg-ltcg" className={linkClass}>capital gains guide</Link>{" "} me detail se hain. Ye dhyan rakhein ki exercise par jo FMV se tax de chuke hain, wahi aapki cost of acquisition maani jaati hai, isliye double tax nahi lagta.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Foreign Company Ke RSU: Extra Compliance
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Schedule FA:</strong> foreign shares aur foreign assets ko ITR ke Schedule FA me dikhana compulsory hai, chahe aapne kuch bechein ya nahi</li>
        <li><strong>Form 67:</strong> agar foreign country me tax kata hai, to credit lene ke liye ITR file karne se pehle Form 67 file karna zaroori hai</li>
        <li><strong>Currency conversion:</strong> SBI ke TTBR rate ke hisaab se INR me convert karein</li>
        <li><strong>Dividend:</strong> foreign shares ke dividend par slab rate se tax lagta hai aur foreign tax ka credit milta hai</li>
        <li>Schedule FA na dikhane par <strong>Black Money Act ke tahat penalty</strong> lag sakti hai, isliye is par dhyan dein</li>
      </ul>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Dhyan rakhein
        </h3>
        <p className="text-gray-700 leading-8">
          Foreign RSU wale employees aksar Schedule FA miss kar dete hain, jabki ye ek serious compliance hai. ITR-2 ya ITR-3 use karni padti hai, ITR-1 me ye option nahi hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Startup Employees Ke Liye Tax Deferral
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Eligible startups (jinhe Section 80-IAC ka certificate mila hai) ke employees ko ESOP exercise par perquisite ka tax turant nahi dena padta. Tax <strong>48 mahine</strong>, shares bechne ya job chhodne me se jo pehle ho, tak defer hota hai. Startup recognition aur 80-IAC ke rules {" "}<Link href="/blog/startup-india-dpiit-recognition-tax-benefits" className={linkClass}>DPIIT guide</Link>{" "} me hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Practical Tips
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Exercise karne se pehle <strong>tax ka cash-flow</strong> plan karein, kyunki TDS payroll se kat&apos;ta hai</li>
        <li>Shares ka FMV proof, vesting statements aur employer ka letter sambhal kar rakhein</li>
        <li>Bechne ka time holding period dekh kar tay karein taaki LTCG rate mile</li>
        <li>Foreign RSU me broker statements aur annual tax forms download karke rakhein</li>
        <li>ITR me salary, capital gains aur Schedule FA teeno sahi bharein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        ESOP aur RSU ki tax planning me galti ki gunjaish zyada hoti hai, khaaskar foreign shares ke case me. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me capital gains aur foreign asset reporting dono cover hote hain. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
