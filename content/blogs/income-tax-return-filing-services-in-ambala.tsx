import Link from "next/link";

const faqs = [
  {
    q: "Ambala mein koi local Income Tax office hai kya?",
    a: "Haan, Ambala Cantt mein hi ek local Income Tax Office (Range/Circle/Ward) hai — routine jurisdictional matters ke liye Chandigarh ya Panchkula jaane ki zaroorat nahi.",
  },
  {
    q: "FY 2025-26 ke liye ITR filing ki last date kya hai?",
    a: "Zyadatar individual/non-audit filers ke liye 31 July 2026, aur audit-applicable business/professional filers ke liye 31 October 2026. Presumptive-taxation (ITR-3/4 non-audit) filers apni exact deadline hamse confirm kar lein kyunki isme kuch confusion reported hui hai.",
  },
  {
    q: "Kya Haryana mein income tax ke rates alag hain?",
    a: "Nahi — income tax central (Union) subject hai, poore India mein same rates aur rules apply hote hain. Sirf local jurisdiction/office alag hota hai.",
  },
  {
    q: "Kya main online hi ITR file kar sakta hoon ya office jaana padega?",
    a: "ITR filing poori tarah online hoti hai — office jaane ki zaroorat sirf kisi specific grievance/facilitation matter ke liye padti hai, jiske liye Ambala ki apni Ayakar Seva Kendra hai.",
  },
  {
    q: "Agar main deadline miss kar doon to kya hoga?",
    a: "Belated return 31 December 2026 tak file ki ja sakti hai, lekin late fee aur kuch deductions/carry-forward losses ka nuksaan ho sakta hai — jitni jaldi ho, file kar dena behtar hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxReturnFilingServicesInAmbala() {
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
        Ambala City mein rehte hue income tax return file karana lagta hai ek simple online kaam, lekin sahi jurisdiction samajhna, apne category ke hisaab se sahi ITR form choose karna, aur deadlines miss na karna — ye woh cheezein hain jaha log galti karte hain. Ye guide Ambala ke residents aur small businesses ke liye local context ke saath poora process samjhata hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Ambala ka income-tax administration Haryana charge (CCIT Panchkula) ke tahat aata hai, North-West Region (headquarter Chandigarh) ke andar</li>
          <li>Ambala Cantt mein hi ek local Income Tax Office hai — routine matters ke liye Chandigarh/Panchkula jaane ki zaroorat nahi</li>
          <li>ITR due date: 31 July 2026 zyadatar individual/non-audit filers ke liye; audit cases 31 October 2026</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Ambala Ka Income Tax Jurisdiction
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Ambala district ke Income Tax offices (Range/Circle/Wards) Haryana charge ke Chief Commissioner of Income Tax (CCIT), Panchkula ke through report karte hain, jo North-West Region (Punjab, Haryana, Himachal Pradesh, aur J&amp;K/Ladakh/Chandigarh UT samet) ke antargat aata hai — jiska head office Chandigarh mein hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Achhi baat ye hai ki Ambala Cantt mein hi ek local Income Tax Office maujood hai — matlab routine jurisdictional matters ke liye Chandigarh ya Panchkula travel karne ki zaroorat nahi padti. Ambala ki apni Ayakar Seva Kendra (taxpayer facilitation counter) bhi hai, jahan grievance/facilitation ke routine kaam ho sakte hain.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        FY 2025-26 (AY 2026-27) ke Liye Due Dates
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Individual/HUF (non-audit, ITR-1/2)</td>
                <td className="border px-4 py-3">31 July 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Business/professional (tax audit applicable)</td>
                <td className="border px-4 py-3">31 October 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Transfer pricing cases (Form 3CEB)</td>
                <td className="border px-4 py-3">30 November 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Belated return</td>
                <td className="border px-4 py-3">31 December 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Revised return</td>
                <td className="border px-4 py-3">31 March 2027</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Presumptive Taxation Filers — Deadline Par Ek Note
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          ITR-3/ITR-4 (non-audit) deadline par confusion — verify zaroor karein
        </h3>
        <p className="text-gray-700 leading-8">
          ITR-1/ITR-2 filers ke liye 31 July 2026 clear hai. Lekin ITR-3/ITR-4 (non-audit — jaise presumptive taxation wale small business owners aur professionals) ki deadline ko lekar kuch sources 31 August 2026 bata rahe hain, jabki dusre sources 31 July 2026 hi keh rahe hain. Hum aapke specific case ke liye current official notification confirm karke hi aapko exact deadline batate hain — is confusion mein khud guess na karein.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Income Tax Ek Central Subject Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Income tax poore India mein same hai — Haryana ke liye koi alag state-level income tax nahi hai. Jo alag hai wo sirf aapka local jurisdiction/office hai, jo ye guide cover karta hai. TRACES aur PAN services bhi national online portals hain, lekin Ambala mein kai authorized agents (UTIITSL/NSDL-Protean) local support ke liye available hain.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Chahe aap salaried individual hon, small business owner, ya professional — sahi ITR form, sahi deductions, aur time par filing seedha aapke refund aur future loan/visa applications par asar dalte hain. Rajput Lalit &amp; Associates Ambala City mein based hai aur hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>Income Tax Return Filing</Link>{" "}service aapki poori filing khud handle karti hai. Agar aap presumptive taxation ke tahat aate hain,{" "}<Link href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation" className={linkClass}>44ADA Presumptive Taxation Guide</Link>{" "}bhi zaroor padhein.
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
        Jurisdiction details Income Tax Department ke publicly available documents par based hain aur officer-level changes samay-samay par ho sakte hain — ye article designations tak simit hai, kisi specific officer ka naam nahi deta. ITR due dates official notifications ke hisaab se badal sakti hain — filing se pehle current status hamse confirm karein.
      </p>
    </>
  );
}
