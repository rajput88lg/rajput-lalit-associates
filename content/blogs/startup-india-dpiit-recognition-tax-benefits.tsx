import Link from "next/link";

const faqs = [
  {
    q: "DPIIT recognition ke liye turnover limit kya hai 2026 mein?",
    a: "4 February 2026 ki notification ke baad ₹200 crore (Deep Tech startups ke liye ₹300 crore).",
  },
  {
    q: "Kya proprietorship firm startup recognition le sakti hai?",
    a: "Nahi. Sirf Pvt Ltd Company, LLP, registered Partnership Firm aur Co-operative Society eligible hain.",
  },
  {
    q: "DPIIT recognition milte hi tax holiday mil jaata hai?",
    a: "Nahi. 80-IAC tax holiday ke liye alag application aur Inter-Ministerial Board approval chahiye, aur uski conditions (1 April 2030 se pehle incorporation, ₹100 crore turnover) alag hain.",
  },
  {
    q: "DPIIT recognition ki government fee kitni hai?",
    a: "DPIIT recognition ke liye koi government fee nahi hai — application online aur free hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function StartupIndiaDpiitRecognitionTaxBenefitsBlog() {
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
        Naya business shuru kiya hai aur uska idea innovative hai? To Startup India ke tahat <strong>DPIIT recognition</strong> aapke liye bahut kaam ka ho sakta hai — tax holiday, aasaan compliance aur government tenders mein chhoot. February 2026 mein iske rules update hue aur turnover limit double ho gayi. Ye guide batati hai ki kaun eligible hai aur kya fayde milte hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Private Limited Company, LLP, registered Partnership Firm aur ab Co-operative Society bhi eligible</li>
          <li>Incorporation se 10 saal tak aur turnover ₹200 crore tak (pehle ₹100 crore)</li>
          <li>Naya Deep Tech category: 20 saal tak aur ₹300 crore turnover tak</li>
          <li>80-IAC: 10 saal mein kisi bhi 3 lagatar saal ka 100% profit tax-free (alag approval chahiye)</li>
          <li>Recognition free hai aur Startup India portal par online milti hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Eligibility — Kaun Apply Kar Sakta Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Condition</th>
              <th className="border px-4 py-3 text-left">Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Entity type</td>
              <td className="border px-4 py-3">Pvt Ltd Company, LLP, registered Partnership Firm, Co-operative Society</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Age</td>
              <td className="border px-4 py-3">Incorporation/registration se 10 saal tak (Deep Tech: 20 saal)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Turnover</td>
              <td className="border px-4 py-3">Kisi bhi saal ₹200 crore se zyada nahi (Deep Tech: ₹300 crore)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Nature of business</td>
              <td className="border px-4 py-3">Innovation, product/process improvement ya scalable business model</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Formation</td>
              <td className="border px-4 py-3">Existing business ko split ya reconstruct karke nahi bana hona chahiye</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Sole proprietorship aur unregistered partnership eligible nahi hain. Isliye startup recognition chahiye to pehle{" "}<Link href="/company-registration" className={linkClass}>Private Limited Company</Link>{" "}ya LLP banana hota hai — farak samajhne ke liye hamari{" "}<Link href="/blog/llp-registration-process-cost-vs-pvt-ltd" className={linkClass}>LLP vs Pvt Ltd guide</Link>{" "}dekhein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        DPIIT Recognition Ke Fayde
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Tax holiday (80-IAC):</strong> 10 saal mein 3 lagatar saal 100% profit par income tax nahi — iske liye alag se Inter-Ministerial Board ki approval chahiye</li>
        <li><strong>Angel tax khatam:</strong> Budget 2024 ke baad unlisted company ke share premium par &apos;angel tax&apos; poori tarah hat chuka hai</li>
        <li><strong>Self-certification:</strong> 6 labour laws aur 3 environment laws mein self-certification — shuru ke saalon mein inspection kam</li>
        <li><strong>Patent/trademark:</strong> patent fees mein 80% tak aur trademark fees mein 50% tak chhoot, fast-track examination</li>
        <li><strong>Government tenders:</strong> prior experience aur turnover ki conditions mein relaxation, EMD mein chhoot</li>
        <li><strong>Funding:</strong> Fund of Funds aur Seed Fund Scheme ke through investment ka rasta</li>
        <li><strong>Aasaan exit:</strong> fast-track winding up ka option</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          80-IAC ki limits alag hain
        </h3>
        <p className="text-gray-700 leading-8">
          DPIIT recognition ki turnover limit ₹200 crore ho gayi, lekin <strong>80-IAC tax holiday</strong> ki apni conditions hain: company/LLP 1 April 2016 ke baad aur <strong>1 April 2030 se pehle</strong> incorporate hui ho, aur turnover ₹100 crore tak. Recognition milne se tax holiday apne aap nahi milta — alag application karni padti hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Apply Karne Ka Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Entity register karein (Pvt Ltd / LLP / Partnership)</li>
        <li>startupindia.gov.in par profile banayein</li>
        <li>DPIIT recognition form bharein — incorporation certificate, directors/partners ki details</li>
        <li>Business ka short description: innovation kya hai, kaunsi problem solve karta hai</li>
        <li>Website, pitch deck ya product video (optional lekin helpful)</li>
        <li>Submit karein — sab sahi ho to aam taur par kuch hafton mein certificate mil jaata hai</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Trademark ki chhoot ka fayda lene ke liye hamari{" "}<Link href="/blog/trademark-registration-for-small-business" className={linkClass}>trademark registration guide</Link>{" "}dekhein. MSME benefits ke liye{" "}<Link href="/msme-registration" className={linkClass}>Udyam registration</Link>{" "}bhi saath mein kar lena achha hai. Company registration se DPIIT recognition tak — sab ke liye{" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "}book karein.
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
        Startup recognition ke rules DPIIT notification G.S.R. 108(E) (4 February 2026) par based hain aur 24 September 2026 tak verify kiye gaye hain. Apne business ki eligibility ke liye humse consult karein.
      </p>
    </>
  );
}
