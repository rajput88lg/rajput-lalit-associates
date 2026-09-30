import Link from "next/link";

const faqs = [
  {
    q: "F&O income kaun si ITR me dikhate hain?",
    a: "ITR-3 me, kyunki F&O income business income maani jaati hai.",
  },
  {
    q: "Kya F&O loss hone par ITR file karni zaroori hai?",
    a: "Haan, aur time par. Late file karne par loss carry forward nahi hota.",
  },
  {
    q: "Intraday aur F&O me kya fark hai?",
    a: "Intraday equity speculative business income hai aur F&O non-speculative. Loss ke set-off aur carry forward ke rules dono ke alag hain.",
  },
  {
    q: "Kya F&O me tax audit hamesha lagta hai?",
    a: "Nahi. Turnover ki limit aur profit ke percentage ke hisaab se lagta hai. Apna turnover nikaal kar CA se confirm karein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function FoIntradayTradingIncomeTaxItr3GuideBlog() {
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
        F&amp;O aur intraday se profit hua ya loss, dono cases me ITR file karna zaroori hai. Bahut se traders sochte hain ki ye capital gains hai, jabki ye alag tarah ki income hai aur uske rules bhi alag hain. Is guide me tax ka treatment, turnover ki calculation aur audit ke rules simple tarike se hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>F&amp;O</strong> = non-speculative business income, <strong>intraday equity</strong> = speculative business income</li>
          <li>Dono ke liye <strong>ITR-3</strong> file karni hoti hai, ITR-1/2 nahi</li>
          <li>F&amp;O loss ko 8 saal, speculative loss ko 4 saal tak carry forward kar sakte hain</li>
          <li>Turnover ki calculation ka alag tareeka hai, isse <strong>tax audit</strong> ki applicability tay hoti hai</li>
          <li>Expenses (brokerage, internet, software) <strong>business expense</strong> ke roop me allowed hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaun Sa Trading Kaun Sa Income Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Trade type</th>
              <th className="border px-4 py-3 text-left">Income ka type</th>
              <th className="border px-4 py-3 text-left">Loss ka treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Intraday equity (same day buy-sell)</td>
              <td className="border px-4 py-3"><strong>Speculative</strong> business income</td>
              <td className="border px-4 py-3">Sirf speculative profit se set-off, 4 saal carry forward</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Futures &amp; Options (F&amp;O)</td>
              <td className="border px-4 py-3"><strong>Non-speculative</strong> business income</td>
              <td className="border px-4 py-3">Salary ke alawa kisi bhi income se set-off, 8 saal carry forward</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Delivery based equity (long-term holding)</td>
              <td className="border px-4 py-3">Capital gains (investment)</td>
              <td className="border px-4 py-3">Capital gains ke rules</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Delivery based investing ka tax {" "}<Link href="/blog/capital-gains-tax-shares-mutual-funds-stcg-ltcg" className={linkClass}>capital gains guide</Link>{" "} me hai. Loss ke set-off aur carry forward ki detail {" "}<Link href="/blog/loss-set-off-carry-forward-income-tax-itr" className={linkClass}>loss set-off guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR-3 Zaroori Kyun Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Trading income <strong>business income</strong> hai, isliye ITR-1 (Sahaj) ya ITR-2 use nahi ho sakti. ITR-3 me &apos;Profit &amp; Loss&apos; schedule bharna hota hai. Agar aapke paas salary bhi hai, to bhi ITR-3 hi bharni hogi. Loss hone par bhi ITR-3 time par file karna zaroori hai warna loss carry forward nahi hoga.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Turnover Ki Calculation
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        F&amp;O me turnover profit ya loss ke hisaab se nahi, balki ek specific tareeke se nikaala jaata hai, jo tax audit ki applicability decide karta hai.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Futures:</strong> har trade ka profit aur loss ka <strong>absolute total</strong> (positive numbers me)</li>
        <li><strong>Options:</strong> har trade ka profit ya loss ka absolute total, plus <strong>sale par mila premium</strong></li>
        <li>Reverse trades (square-off) ko sahi tareeke se match karke hi ginte hain</li>
        <li>Turnover ka tareeka ICAI ke guidance note par based hai, jise tax professional se confirm karwana behtar hai</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          Aapne F&amp;O me saal bhar me 40 trades kiye. Un sab ke profit aur loss ko positive number maan kar jode to ₹18 lakh aaya. Aapka turnover ₹18 lakh maana jayega, chahe net profit sirf ₹50,000 ho. Tax audit ki limit isi turnover se dekhi jaati hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tax Audit Kab Zaroori Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Turnover <strong>₹10 crore</strong> se zyada ho (agar cash transactions 5% se kam hon), warna <strong>₹1 crore</strong> se zyada</li>
        <li>Agar aap <strong>44AD presumptive scheme</strong> chun ke profit us se kam dikhate hain aur income basic exemption se zyada hai, to bhi audit ki zaroorat ho sakti hai</li>
        <li>Loss hone par aur turnover limit ke andar ho to bhi, kuch conditions me audit lag sakta hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Audit rules {" "}<Link href="/blog/tax-audit-section-44ab-applicability-turnover-limit" className={linkClass}>tax audit guide</Link>{" "} me detail se hain. Audit case me ITR ki due date alag hoti hai, jo {" "}<Link href="/tax-deadlines" className={linkClass}>tax deadlines page</Link>{" "} par updated milti hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Expenses Jo Claim Kar Sakte Hain
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Brokerage aur exchange charges</li>
        <li><strong>STT</strong> (Securities Transaction Tax), jo business income me allowed hai</li>
        <li>Internet, computer, trading software aur data subscription</li>
        <li>Office ka rent ya ghar ke office ka hissa (proportionate)</li>
        <li>Accountant aur professional fees</li>
        <li>Depreciation computer par</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Personal kharche claim nahi ho sakte. Cash expenses ki limit {" "}<Link href="/blog/business-expenses-allowed-disallowed-40a-3-cash-limit" className={linkClass}>business expenses guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advance Tax Aur Compliance
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Trading income par <strong>advance tax</strong> dena padta hai, quarterly. Schedule {" "}<Link href="/blog/advance-tax-payment-due-dates-interest" className={linkClass}>advance tax guide</Link>{" "} me hai. {" "}<Link href="/advance-tax-calculator" className={linkClass}>Calculator</Link>{" "} se hisaab lagayein</li>
        <li>Broker ka P&amp;L, contract notes aur ledger save karke rakhein</li>
        <li>Audit na hone par bhi <strong>books of accounts</strong> maintain karein</li>
        <li>AIS me broker ki reporting match karein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Trading income ka sahi computation, turnover, audit ki applicability aur loss carry forward, sab me experience kaam aata hai. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me traders ke liye ITR-3 filing hoti hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
