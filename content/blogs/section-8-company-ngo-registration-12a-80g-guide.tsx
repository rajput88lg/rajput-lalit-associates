import Link from "next/link";

const faqs = [
  {
    q: "Section 8 company aur trust me kya behtar hai?",
    a: "Bade funding aur credibility ke liye Section 8 company, chhote kaam ke liye trust. Compliance Section 8 me zyada hai.",
  },
  {
    q: "12A aur 80G me kya fark hai?",
    a: "12A sanstha ki income par tax exemption deta hai. 80G donors ko donation par tax deduction deta hai.",
  },
  {
    q: "Kya NGO me salary le sakte hain?",
    a: "Haan, reasonable salary di ja sakti hai, lekin profit distribute nahi kar sakte aur shartein lagti hain.",
  },
  {
    q: "NGO registration me kitna time lagta hai?",
    a: "Section 8 company me aam taur par kuch hafte (licence process ki wajah se). Trust me kam. 12A/80G ki approval alag se aati hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Section8CompanyNgoRegistration12a80gGuideBlog() {
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
        Samaj sewa ke liye NGO shuru karna ek acchi soch hai, lekin registration ke teen alag raaste hain aur har ek ke apne rules, fayde aur compliance hain. Saath hi 12A aur 80G approval ke bina donors ko tax benefit nahi milta aur sanstha ki income par tax lag sakta hai. Is guide me sab kuch simple bhasha me hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>NGO teen tarah se ban sakta hai: <strong>Trust, Society ya Section 8 Company</strong></li>
          <li><strong>12A/12AB</strong> se sanstha ki income tax-exempt hoti hai</li>
          <li><strong>80G</strong> se donors ko donation par tax deduction milta hai</li>
          <li>12A aur 80G ki application <strong>Form 10A/10AB</strong> se Income Tax portal par hoti hai</li>
          <li>Registered NGO ko <strong>ITR-7, audit aur donation reporting</strong> jaisi compliance karni padti hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Trust, Society Aur Section 8 Company Me Fark
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Trust</th>
              <th className="border px-4 py-3 text-left">Society</th>
              <th className="border px-4 py-3 text-left">Section 8 Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Governing law</td>
              <td className="border px-4 py-3">Indian Trusts Act / state law</td>
              <td className="border px-4 py-3">Societies Registration Act</td>
              <td className="border px-4 py-3">Companies Act, 2013 (Section 8)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Minimum members</td>
              <td className="border px-4 py-3">Kam se kam 2 trustees (aam taur par)</td>
              <td className="border px-4 py-3">Kam se kam 7 members (state ke rules)</td>
              <td className="border px-4 py-3">Kam se kam 2 directors aur 2 members (private)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Registration kahan</td>
              <td className="border px-4 py-3">Sub-registrar ke paas</td>
              <td className="border px-4 py-3">Registrar of Societies</td>
              <td className="border px-4 py-3">MCA, ROC</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Compliance</td>
              <td className="border px-4 py-3">Kam</td>
              <td className="border px-4 py-3">Medium</td>
              <td className="border px-4 py-3"><strong>Zyada</strong> (ROC filings)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Credibility/funding</td>
              <td className="border px-4 py-3">Medium</td>
              <td className="border px-4 py-3">Medium</td>
              <td className="border px-4 py-3"><strong>High</strong>, CSR funding me easy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap bade donors, CSR funds ya foreign funding chahte hain, to Section 8 company aksar behtar maani jaati hai. Chhote local kaam ke liye trust ya society aasan aur sasti hoti hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section 8 Company Registration Ka Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Directors ke liye <strong>DSC aur DIN</strong> banwayein. DSC ki detail {" "}<Link href="/blog/digital-signature-certificate-dsc-guide-business-registration" className={linkClass}>DSC guide</Link>{" "} me hai</li>
        <li>Company ke naam ka approval (naam me &apos;Foundation&apos; ya &apos;Charitable&apos; jaisa shabd ho sakta hai)</li>
        <li>MCA portal par <strong>SPICe+</strong> aur licence application bharein</li>
        <li><strong>MOA aur AOA</strong> me charitable objects likhein</li>
        <li>Registrar se <strong>licence</strong> milne ke baad incorporation certificate issue hota hai</li>
        <li>PAN, TAN aur bank account kholein</li>
      </ol>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Section 8 company ko <strong>dividend ya profit distribute</strong> karne ki permission nahi hoti</li>
        <li>Saari income sanstha ke objects me hi use karni hoti hai</li>
        <li>Directors ko salary dene ki limit aur conditions hoti hain</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        12A Aur 80G Kya Hain
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Registration</th>
              <th className="border px-4 py-3 text-left">Fayda</th>
              <th className="border px-4 py-3 text-left">Kisko milta hai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>12A/12AB</strong></td>
              <td className="border px-4 py-3">Sanstha ki income par <strong>tax exemption</strong> (shartein poori hone par)</td>
              <td className="border px-4 py-3">NGO ko</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>80G</strong></td>
              <td className="border px-4 py-3">Donation dene waale ko <strong>tax deduction</strong></td>
              <td className="border px-4 py-3">Donor ko (old regime me)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Naye NGO ko pehle <strong>provisional registration</strong> (aam taur par 3 saal) milta hai</li>
        <li>Activities shuru hone ke baad (ya provisional registration expire hone se pehle) <strong>regular registration</strong> ke liye Form 10AB file karna padta hai</li>
        <li>Regular registration aam taur par <strong>5 saal</strong> ke liye hoti hai aur phir renew karwani padti hai</li>
        <li>80G me donation ka 50% ya 100% deductible ho sakta hai, limit ke saath, NGO ki approval ke hisaab se</li>
        <li>80G ka fayda sirf <strong>old tax regime</strong> me milta hai. Is regime ke deductions {" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C se 80U guide</Link>{" "} me hain</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Donors ke liye
        </h3>
        <p className="text-gray-700 leading-8">
          Donor ko 80G deduction tabhi milta hai jab NGO ke paas valid 80G registration ho aur donation digital tareeke se ya limit ke andar cash me diya gaya ho. Receipt me NGO ka PAN, 80G number aur donor ka PAN hona chahiye.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        NGO Ki Annual Compliance
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>ITR-7</strong> file karna (income ka exemption claim karne ke liye)</li>
        <li>Jab income basic exemption limit se zyada ho, to <strong>audit report (Form 10B/10BB)</strong> file karna</li>
        <li>Saal ki income ka <strong>85%</strong> tak apply ya accumulate karna hota hai (kuch shartein)</li>
        <li><strong>Form 10BD</strong> me donations ki annual statement file karni hoti hai, aur donors ko <strong>Form 10BE</strong> certificate dena hota hai</li>
        <li>Section 8 company ko ROC me <strong>AOC-4 aur MGT-7</strong> file karne padte hain. Calendar {" "}<Link href="/blog/roc-annual-compliance-calendar-pvt-ltd-llp" className={linkClass}>ROC compliance guide</Link>{" "} me hai</li>
        <li>Foreign donation ke liye <strong>FCRA registration</strong> alag se lena padta hai</li>
        <li>CSR funds lene ke liye <strong>Form CSR-1</strong> registration chahiye</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaun Sa Structure Chunein
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Chhota local kaam, kam funds:</strong> Trust ya Society</li>
        <li><strong>Bade donors, CSR, institutional funding:</strong> Section 8 company</li>
        <li><strong>Family charitable kaam:</strong> Private trust, lekin iske tax rules alag hain</li>
        <li>Company structure ka fark {" "}<Link href="/blog/company-llp-registration-consultant-ambala" className={linkClass}>Company/LLP guide</Link>{" "} me bhi samajh sakte hain</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        NGO registration, 12A/80G aur compliance sab ek jagah karwane ke liye hamari {" "}<Link href="/company-registration" className={linkClass}>Company Registration service</Link>{" "} se baat karein. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
