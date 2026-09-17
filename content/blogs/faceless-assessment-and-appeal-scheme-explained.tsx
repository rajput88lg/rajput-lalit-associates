import Link from "next/link";

const faqs = [
  {
    q: "Kya faceless assessment mein mujhe koi hearing mil sakti hai?",
    a: "Traditional in-person nahi, lekin aap video-conferencing hearing request kar sakte hain, khaas kar jab income addition propose ho rahi ho — department ko ye facilitate karna zaroori hai.",
  },
  {
    q: "Agar main faceless notice ka deadline miss kar doon to kya hoga?",
    a: "Best-judgment assessment ho sakta hai (jo aam taur par zyada tax demand deta hai), aur non-compliance ke liye ek alag penalty bhi lag sakta hai.",
  },
  {
    q: "Faceless assessment order ke khilaaf appeal kaise karein?",
    a: "Form 35 se order ki date se 30 din ke andar file karein — appeal National Faceless Appeal Centre ke through ek CIT(A) unit ko randomly assign hoti hai.",
  },
  {
    q: "Kya appeal file karne se tax recovery ruk jaati hai?",
    a: "Nahi automatically — recovery par stay paane ke liye aam taur par disputed demand ka ~20% alag se deposit karna padta hai.",
  },
  {
    q: "Kya sabhi income tax cases faceless hote hain?",
    a: "Nahi — search/survey cases, international taxation, transfer pricing, aur kuch CBDT-notified sensitive categories iske bahar hain aur regular jurisdictional assessment se hi handle hote hain.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function FacelessAssessmentAndAppealSchemeExplained() {
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
        Agar aapko income tax department se ek faceless assessment notice mila hai, to sabse pehli baat samajhne wali ye hai ki 'faceless' ka matlab 'no accountability' nahi hai — ye ek structured, portal-based process hai jisme aapke rights bhi hain, jaisे video-conferencing hearing ka option. Ye guide poora process, aapke rights, aur common galtiyan samjhata hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>National Faceless Assessment Centre (NFAC) ke through poora assessment online hota hai — officer ki identity kabhi disclose nahi hoti</li>
          <li>Video-conferencing hearing request kar sakte hain, khaas kar jab income addition proposed ho</li>
          <li>Faceless Appeal Form 35 se 30 din mein file karni hoti hai, lekin appeal filing se recovery automatically nahi rukti</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Faceless Assessment Kaise Kaam Karta Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        National Faceless Assessment Centre (NFAC), Delhi-based, ek single point of contact hota hai — wo kabhi bhi us officer ki identity disclose nahi karta jo aapka case handle kar raha hai. Cases automated/algorithmic tareeke se poore India mein kisi bhi Assessment Unit ko allocate hote hain, geography ke hisaab se nahi.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Process flow: risk-analytics ke through case select hota hai → notice issue hoti hai e-filing portal ke through → aap 'e-Proceedings' ke through electronically respond karte hain, documents ke saath → zaroorat padne par Verification Units (field checks) aur Technical Units (legal/valuation expertise) bhi involve ho sakte hain → Assessment Unit draft proposal banata hai → Review Unit quality-check karta hai → final order electronically serve hota hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Naye Income-tax Act, 2025 (1 April 2026 se effective) mein faceless assessment ko ek executive scheme se statutory chapter mein badal diya gaya hai — matlab ab isme koi bhi badlaav sirf Parliament se hi ho sakta hai, jo isko zyada permanent aur predictable banata hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Video-Conferencing Hearing — Ek Aapka Right
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          'Faceless' ka matlab 'no hearing' nahi hai
        </h3>
        <p className="text-gray-700 leading-8">
          Aap video-conferencing ke through personal hearing request kar sakte hain — khaas kar jab income addition propose ho rahi ho. Department ko ye technologically feasible hone tak facilitate karna zaroori hai. Aap Chartered Accountant ya authorised representative ke through bhi represent ho sakte hain.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Response Deadline Aur Documents
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Response deadline notice type ke hisaab se aam taur par 7 se 15 din tak hoti hai — extension request due date se pehle portal par file karni chahiye. Documents PDF format mein, generally ~20 MB tak, sahi tarike se labelled/indexed hone chahiye — ye chhoti si baat aapke case ko organize dikhane mein bahut madad karti hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Faceless Appeal Process
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Form 35 se, order (assessment/penalty/intimation) ki date se 30 din ke andar file karna</li>
          <li>National Faceless Appeal Centre randomly, jurisdiction-free tareeke se aapki appeal ko ek CIT(A) unit ko assign karta hai</li>
          <li>Appeal fee: ₹250 (assessed income ₹2 lakh tak), ₹500 (₹2-5 lakh), ₹1,000 (₹5 lakh se zyada) — Challan 280 se, non-refundable</li>
          <li>Zaroori: appeal file karne se demand ki recovery automatically nahi rukti — recovery par stay ke liye aam taur par disputed demand ka ~20% alag se deposit karna padta hai</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Ignore Karne Ka Nateeja
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap deadline miss karte hain, best-judgment assessment ho sakta hai — jo aam taur par zyada tax demand wala hota hai. Iske saath non-compliance ke liye ek alag penalty bhi lag sakta hai. Isliye faceless notice ko bhi utni hi seriousness se lena chahiye jitni traditional assessment ko.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Faceless assessment/appeal ka sabse bada practical challenge ye hai ki aapke paas time kam hota hai aur reply generic template mein nahi, specific evidence ke saath hona chahiye. Hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>Income Tax Return Filing</Link>{" "}service faceless notices ka professional reply prepare karti hai.{" "}<Link href="/blog/income-tax-notice-types-143-1-148-139-9-explained" className={linkClass}>Income Tax Notice Types 143(1)/148/139(9)</Link>{" "}guide bhi zaroor dekhein alag notice types ke liye.
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
        Naye Income-tax Act, 2025 ke tahat faceless assessment/appeal ke exact section numbers abhi confirm ho rahe hain — ye article process aur taxpayer rights ke general framework par based hai. Apne specific notice ke liye exact section reference aur deadline humse confirm karein.
      </p>
    </>
  );
}
