import Link from "next/link";

const faqs = [
  {
    q: "Section 128A ne GST khud waive kiya tha kya?",
    a: "Nahi — sirf interest aur penalty waive hoti thi, poora principal tax pay karna zaroori tha.",
  },
  {
    q: "Kya ye scheme fraud cases par bhi apply hoti thi?",
    a: "Nahi — Section 74 (fraud/wilful misstatement/suppression) cases explicitly bahar the, jab tak koi case appellate order se 74 se 73 mein redirect na hua ho.",
  },
  {
    q: "Is scheme mein apply karne ki last date kya thi?",
    a: "Tax payment 31 March 2025 tak, aur application (SPL-01 ya SPL-02) 30 June 2025 tak (kuch redirected cases mein 30 September 2025 tak).",
  },
  {
    q: "Kya 2026 mein koi nayi GST amnesty scheme hai?",
    a: "Is article ke likhe jaane tak (17 September 2026) koi confirmed nayi scheme nahi mili — latest CBIC notifications se confirm karna behtar hai.",
  },
  {
    q: "Kaunse forms use hote the apply karne ke liye?",
    a: "SPL-01 (agar sirf notice stage tha, order nahi aaya) aur SPL-02 (agar order — appellate order samet — pehle se pass ho chuka tha).",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTAmnestySchemeSection128AExplained() {
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
        Section 128A CGST Act ek popular relief scheme thi jisne businesses ko purane GST demands par sirf principal tax pay karke interest aur penalty se chhutkara paane ka mauka diya. Agar aap ye samajhna chahte hain ki ye scheme kya thi, kise fayda hua, aur kya 2026 mein ye abhi bhi apply karne layak hai — ye guide sab clear karti hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Section 128A ne FY2017-18 se FY2019-20 tak ke Section 73 (non-fraud) demands par interest aur penalty (sirf, tax nahi) waive karne ka option diya tha</li>
          <li>Application ki deadline (30 June 2025, kuch cases mein 30 September 2025) already nikal chuki hai — 2026 mein koi confirmed nayi/extended scheme nahi mili hai</li>
          <li>Fraud/suppression wale Section 74 cases is scheme se explicitly bahar the</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Scheme Ne Kya Relief Diya
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 128A (Finance Act 2024 ke through insert) ne Section 73 (non-fraud cases) ke tahat GST demands par interest aur penalty waive karne ka option diya — sirf principal tax poora pay karna hota tha. Ye FY 2017-18, 2018-19, aur 2019-20 (1 July 2017 se 31 March 2020 tak) ke tax periods ke liye tha.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Eligibility — Kaun Apply Kar Sakta Tha
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Case Section 73 ke tahat ho (Section 74 — fraud/suppression — is scheme se bahar hai, jab tak koi appellate order se 74 se 73 mein redirect na hua ho)</li>
          <li>Section 73(1) notice/statement issued ho chuka ho, order abhi na aaya ho, YA</li>
          <li>Section 73(9) order pass ho chuka ho, appeal na file hui ho ya withdraw kar li gayi ho, YA</li>
          <li>Appellate/revisional order pass ho chuka ho, second appeal na file hui ho ya withdraw ho</li>
          <li>Poora tax amount deadline tak pay karna zaroori tha, aur koi pending appeal/writ petition withdraw karni padti thi</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deadlines Aur Forms
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Item</th>
              <th className="border px-4 py-3 text-left">Deadline/Form</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Tax payment deadline</td>
                <td className="border px-4 py-3">31 March 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Application deadline (standard cases)</td>
                <td className="border px-4 py-3">30 June 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Application deadline (Section 75(2) redirected cases)</td>
                <td className="border px-4 py-3">30 September 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Form (order na aaya ho)</td>
                <td className="border px-4 py-3">SPL-01</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Form (order/appellate order aa chuka ho)</td>
                <td className="border px-4 py-3">SPL-02</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Current Status (17 September 2026)
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Application window band ho chuki hai — nayi scheme confirm nahi hui
        </h3>
        <p className="text-gray-700 leading-8">
          Is scheme ki application deadline (30 June/30 September 2025) already nikal chuki hai. Industry bodies ne extension ki maang ki thi, lekin humein koi confirmed 2026 ki nayi ya extended amnesty scheme nahi mili. Agar aapka koi purana GST demand abhi bhi outstanding hai, hum latest CBIC notifications check karke aapko bata sakte hain ki koi nayi relief scheme aayi hai ya nahi.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Section 128A jaisi amnesty schemes samay-samay par aati rehti hain — isliye purane GST demands ko 'kabhi na kabhi waiver mil jaayega' soch kar ignore karna sahi strategy nahi hai. Hamari{" "}<Link href="/gst-notice-reply" className={linkClass}>GST Notice Reply</Link>{" "}service aapke pending demands ko review karke best available option batati hai, chahe wo koi current relief scheme ho ya normal DRC-06 reply.{" "}<Link href="/blog/gst-drc-01-demand-notice-reply-guide" className={linkClass}>GST DRC-01 Notice Reply</Link>{" "}guide bhi zaroor padhein.
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
        Section 128A ki application window is article likhe jaane tak band ho chuki thi. GST Council future meetings mein koi extension ya nayi scheme announce kar sakti hai — apne specific case ke liye latest status humse confirm karein.
      </p>
    </>
  );
}
