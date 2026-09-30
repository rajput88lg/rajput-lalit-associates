import Link from "next/link";

const faqs = [
  {
    q: "EPF kab zaroori hota hai?",
    a: "Aam taur par jab establishment me 20 ya zyada employees ho. Kam employees hone par bhi voluntary registration le sakte hain.",
  },
  {
    q: "ESI kab applicable hota hai?",
    a: "Aam taur par 10 ya zyada employees wali establishments me, un employees ke liye jinka wage ₹21,000 tak ho. Kuch states aur categories me rules alag ho sakte hain.",
  },
  {
    q: "EPF aur ESI ki due date kya hai?",
    a: "Dono ke liye agle mahine ki 15 tareekh.",
  },
  {
    q: "Late payment par kya hota hai?",
    a: "12% saalana interest lagta hai, aur EPF me delay ke hisaab se damages bhi lag sakte hain.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function EpfEsiRegistrationComplianceSmallBusinessEmployerGuideBlog() {
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
        Jaise hi aapke employees badhte hain, EPF aur ESI ka sawaal aata hai. Dono employees ke liye social security schemes hain aur employer ke liye compliance ka bada hissa. Delay ya galti par interest aur damages lagte hain, isliye shuru se hi sahi process jaanna zaroori hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>EPF</strong> aam taur par <strong>20 ya zyada</strong> employees wali establishments ke liye applicable hai</li>
          <li><strong>ESI</strong> aam taur par <strong>10 ya zyada</strong> employees wali establishments ke liye, wage limit ke saath</li>
          <li>EPF: employee aur employer dono <strong>12%</strong>, ESI: employee <strong>0.75%</strong> aur employer <strong>3.25%</strong></li>
          <li>Payment ki due date <strong>har mahine ki 15 tareekh</strong> hai</li>
          <li>Late payment par <strong>interest aur damages</strong> lagte hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        EPF Aur ESI Me Fark
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">EPF</th>
              <th className="border px-4 py-3 text-left">ESI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Purpose</td>
              <td className="border px-4 py-3">Retirement aur pension savings</td>
              <td className="border px-4 py-3">Medical, sickness aur maternity benefits</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Applicable establishment</td>
              <td className="border px-4 py-3">20 ya zyada employees (voluntary bhi le sakte hain)</td>
              <td className="border px-4 py-3">10 ya zyada employees (kuch states me alag)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Wage ceiling (mandatory)</td>
              <td className="border px-4 py-3">₹15,000 tak ke wages par mandatory</td>
              <td className="border px-4 py-3">₹21,000 tak ke wages par applicable</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employee contribution</td>
              <td className="border px-4 py-3">12% of wages</td>
              <td className="border px-4 py-3">0.75% of wages</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employer contribution</td>
              <td className="border px-4 py-3">12% (isme se 8.33% pension scheme me)</td>
              <td className="border px-4 py-3">3.25% of wages</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Due date</td>
              <td className="border px-4 py-3">Har mahine ki 15 tareekh</td>
              <td className="border px-4 py-3">Har mahine ki 15 tareekh</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Thresholds badal sakte hain
        </h3>
        <p className="text-gray-700 leading-8">
          Wage ceiling aur applicability ki limits sarkar badalti rehti hai aur new labour codes ke under coverage me badlaav ho rahe hain. Latest position ke liye {" "}<Link href="/blog/new-labour-codes-2026-employer-guide" className={linkClass}>labour codes guide</Link>{" "} dekhein aur payroll me confirm karein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        EPF Me Kaun Sa Hissa Kahan Jaata Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Employee ka 12%: seedhe <strong>EPF account</strong> me</li>
        <li>Employer ka 12%: <strong>8.33% (₹15,000 ki limit tak) EPS pension</strong> me aur baaki EPF account me</li>
        <li>Employer ke liye alag se <strong>EDLI (insurance) aur admin charges</strong> lagte hain</li>
        <li>Employee ka UAN (Universal Account Number) banta hai, jo job badalne par bhi same rehta hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Registration Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>EPFO</strong> ke employer portal par apni establishment register karein (DSC, PAN, bank aur address proof ke saath)</li>
        <li><strong>ESIC</strong> portal par employer registration karein aur ESI code lein</li>
        <li>Employees ka data (naam, Aadhaar, bank, salary) portal par daalein</li>
        <li>Har mahine contribution calculate karke <strong>ECR/challan</strong> se payment karein</li>
        <li>Employees ko UAN aur ESIC card ki jaankari dein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Registration me <strong>DSC</strong> zaroori ho sakta hai, jiski detail {" "}<Link href="/blog/digital-signature-certificate-dsc-guide-business-registration" className={linkClass}>DSC guide</Link>{" "} me hai. Business ke baaki registrations ke liye {" "}<Link href="/services" className={linkClass}>Business Registration page</Link>{" "} dekhein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Due Dates Aur Late Payment
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Default</th>
              <th className="border px-4 py-3 text-left">Consequence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">EPF/ESI contribution late</td>
              <td className="border px-4 py-3"><strong>12% saalana interest</strong></td>
            </tr>
            <tr>
              <td className="border px-4 py-3">EPF late payment</td>
              <td className="border px-4 py-3">Isse upar <strong>damages</strong> (delay ke period ke hisaab se, saalana 5% se 25% tak)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employee ka contribution time par deposit na karna</td>
              <td className="border px-4 py-3">Income tax me us expense ka <strong>deduction bhi nahi milta</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Employee ka PF/ESI late deposit hone par income tax me deduction ka nuksaan {" "}<Link href="/blog/business-expenses-allowed-disallowed-40a-3-cash-limit" className={linkClass}>business expenses guide</Link>{" "} me explain kiya gaya hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Employers Ke Liye Checklist
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Employees ki <strong>count</strong> dekhte rahein. Limit cross hote hi registration zaroori hai</li>
        <li>Salary slip me <strong>PF aur ESI deduction</strong> saaf dikhayein</li>
        <li>15 tareekh se pehle payment karein</li>
        <li>Nayi bharti aur resignation ka record portal par update karein</li>
        <li>Payroll ko tax compliance ke saath integrate karein. TDS on salary {" "}<Link href="/blog/tds-on-salary-form-16-explained" className={linkClass}>Form 16 guide</Link>{" "} me hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Payroll, PF, ESI aur TDS ka compliance ek saath handle karwana employers ke liye aasan rehta hai. Hamari {" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>Accounting &amp; Bookkeeping service</Link>{" "} me payroll support bhi hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
        Ye jaankari 30 September 2026 tak ki hai. Government fees, limits aur procedures badalte rehte hain, isliye apply karne se pehle latest rules check karein ya humse consult karein.
      </p>
    </>
  );
}
