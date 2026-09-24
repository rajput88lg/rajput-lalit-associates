import Link from "next/link";

const faqs = [
  {
    q: "Kya naye labour codes mere 15-employee business par apply hote hain?",
    a: "Haan — codes broadly apply hote hain; har worker ko sahi appointment letter dena zaroori hai, aur apni basic-pay structure ko naye 50% wage rule ke hisaab se check karna chahiye. Zyadatar thresholds (grievance committee 20+, crèche 50+, standing orders 300+) tabhi lagu hote hain jab employee count us number ko cross kare.",
  },
  {
    q: "Kya mera basic salary exactly CTC ka 50% hona chahiye?",
    a: "Code exact 50% mandate nahi karta, lekin agar excluded components (HRA, conveyance, bonus waghera) ka total, total pay ke 50% se zyada ho jaaye, to wo extra amount PF aur gratuity calculation ke liye 'wages' maana jaata hai — effectively ek 50% floor ban jaata hai.",
  },
  {
    q: "Kya main apne 8-mahine wale fixed-term employee ko gratuity doon?",
    a: "Agar wo Fixed-Term Employee hai (directly engaged, contractor ke through nahi) aur kam se kam 1 saal service complete ki hai (final saal mein 6+ mahine round up ho jaata hai), to haan, pro-rata gratuity ab deni hogi.",
  },
  {
    q: "Kya mujhe grievance redressal committee banani hogi?",
    a: "Sirf tab jab aapke establishment mein 20 ya usse zyada workers ho jaayein.",
  },
  {
    q: "Kya Haryana ne apne state rules finalize kar diye hain?",
    a: "General market coverage ke hisaab se Haryana un states mein tha jinke rules early 2026 tak finalize ho gaye the, lekin exact notification date ke liye Haryana Labour Department ke portal se confirm karna behtar hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NewLabourCodes2026EmployerGuide() {
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
        4 naye Labour Codes — Code on Wages, Industrial Relations Code, Code on Social Security, aur Occupational Safety Health &amp; Working Conditions Code — 21 November 2025 se effective ho chuke hain, aur inke Central Rules 2026 mein finalize ho gaye. Bahut se chhote business owners ko abhi bhi lagta hai ye sirf badi companies ke liye hai, jabki isme kai changes 10-50 employees wali firms par bhi seedha lagu hote hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>4 Labour Codes 21 November 2025 se effective ho chuke hain, aur Central Rules May 2026 mein notify ho gaye</li>
          <li>'Wages' ki nayi definition mein basic+DA kam se kam total remuneration ka ~50% hona chahiye — isse PF aur gratuity calculation par asar padta hai</li>
          <li>Fixed-Term Employees ko ab sirf 1 saal service ke baad hi gratuity milegi (pehle 5 saal tha)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Wages Ki Nayi Definition — '50% Rule'
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Code on Wages ke Section 2(y) ke tahat 'wages' ab = basic pay + dearness allowance + retaining allowance. HRA, conveyance, overtime allowance, employer PF/pension contribution, commission, gratuity, retrenchment compensation, bonus jaise items ispe se exclude hote hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Lekin ek important proviso hai: agar exclude kiye gaye components ka total, remuneration ke 50% se zyada ho jaaye, to wo extra amount wapas 'wages' mein add ho jaata hai. Practical asar: jo businesses basic salary ko CTC ke 30-40% par rakhte the (jo bahut common practice hai), unhe ab restructure karna padega, kyunki basic+DA ab 50% se kam nahi ho sakta.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Isse PF contribution aur gratuity calculation ka base badh jaata hai — kyunki dono basic wages par calculate hote hain.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Fixed-Term Employees Ko Gratuity — Genuinely Naya Right
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          1 saal mein gratuity, 5 saal ka wait nahi
        </h3>
        <p className="text-gray-700 leading-8">
          Fixed-Term Employees (FTEs) — jo employer dwara seedha engage kiye gaye hain, contractor ke through nahi — ab sirf 1 saal continuous service ke baad hi pro-rata gratuity ke haqdaar hain, jabki regular employees ke liye 5 saal ka rule abhi bhi hai. Agar final saal mein 6-12 mahine ki service hui hai, to wo puri saal ki tarah round up ho jaati hai.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Working Hours Aur Overtime
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Normal working day: 8 ghante; normal working week: 48 ghante</li>
          <li>Overtime rate: normal wage ka 2x</li>
          <li>Rounding: 15-30 minute extra kaam adhe ghante mein round hota hai; 30 minute se zyada poore ghante mein</li>
          <li>Overtime cap state-wise alag ho sakta hai — apne state ke specific rule se confirm karein</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Employee-Count Thresholds — Kab Kya Apply Hota Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Requirement</th>
              <th className="border px-4 py-3 text-left">Employee Threshold</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Mandatory appointment letters</td>
                <td className="border px-4 py-3">Har employee (koi threshold nahi)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Grievance Redressal Committee</td>
                <td className="border px-4 py-3">20+ workers</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Crèche facility (ya equivalent allowance)</td>
                <td className="border px-4 py-3">50+ employees</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Works Committee</td>
                <td className="border px-4 py-3">100+ workers</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Standing Orders certification</td>
                <td className="border px-4 py-3">300+ workers (pehle 100 tha)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Retrenchment/layoff govt approval</td>
                <td className="border px-4 py-3">300+ workers (pehle 100 tha)</td>
              </tr>
          </tbody>
        </table>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        10-50 employees wali chhoti businesses ke liye sabse zaroori 2 cheezein hain: (1) har employee ko naye format mein appointment letter dena, aur (2) apne salary structure ko 50% wage-rule ke hisaab se check karna. Standing orders aur retrenchment approval jaise bade thresholds (300+) aam taur par chhoti firms par apply nahi hote — ye actually compliance burden kam karta hai. Hamari{" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>Payroll aur Accounting</Link>{" "}service aapke salary structure ko naye rules ke hisaab se review kar sakti hai.
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
        Labour Codes ke Central Rules May 2026 mein notify hue, aur state-wise rules alag-alag stage par hain. Ye article general framework par based hai — apne specific state (Haryana) ke rules aur apne business ki exact category ke liye hamse consult karein, kyunki state-level implementation details badal sakte hain.
      </p>
    </>
  );
}
