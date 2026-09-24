import Link from "next/link";

const faqs = [
  {
    q: "Company band karne mein kitna time lagta hai?",
    a: "STK-2 file hone ke baad C-PACE mein aajkal lagbhag 70-90 din lagte hain, public notice period milakar. Documentation aur pending filings mein pehle alag time lagta hai.",
  },
  {
    q: "Kya pending annual returns ke saath company band ho sakti hai?",
    a: "Nahi. STK-2 se pehle pending financial statements aur annual returns file karni padti hain.",
  },
  {
    q: "Company band na karein to kya hoga?",
    a: "Har saal ROC filings ki additional fee badhti rahegi, aur 3 saal filings na hone par directors 5 saal ke liye disqualify ho sakte hain.",
  },
  {
    q: "Kya strike off company ko wapas active kiya ja sakta hai?",
    a: "Haan, NCLT mein 20 saal ke andar restoration application di ja sakti hai, lekin ye mehnga aur lamba process hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function StrikeOffPrivateLimitedCompanyStk2ClosureBlog() {
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
        Company banayi thi, business nahi chala ya band ho gaya — lekin company abhi bhi MCA records mein &apos;Active&apos; hai. Bahut log sochte hain ki kuch na karo to company apne aap khatam ho jaayegi. Aisa nahi hai: har saal ROC filings pending hoti rehti hain, penalty badhti hai, aur directors <strong>disqualify</strong> ho sakte hain. Sahi tareeka hai <strong>STK-2 se strike off</strong>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Company ne 2 saal se business nahi kiya, ya incorporation ke 1 saal mein business shuru hi nahi kiya — strike off ke liye eligible</li>
          <li>Company par koi liability nahi honi chahiye aur bank account band hona chahiye</li>
          <li>Application Form STK-2 MCA portal par fee ke saath</li>
          <li>C-PACE (MCA ka central centre) process karta hai — aajkal lagbhag 70-90 din</li>
          <li>Band na karne par annual filing penalty badhti hai aur directors disqualify ho sakte hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Strike Off Ke Liye Eligibility
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Pichle <strong>2 financial years</strong> se koi business operation nahi, aur dormant status ke liye apply nahi kiya, <strong>ya</strong></li>
        <li>Incorporation ke <strong>1 saal ke andar</strong> business shuru nahi kiya</li>
        <li>Company ki <strong>koi liability nahi</strong> — creditors, taxes, employees, loans sab clear</li>
        <li>Bank account <strong>band</strong> ho chuka ho</li>
        <li>Pending annual filings (AOC-4, MGT-7) pehle update karni hoti hain</li>
        <li>Listed company, jiske khilaaf investigation/prosecution chal raha ho, ya Section 8 company jaise kuch cases eligible nahi</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Zaroori Documents
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Document</th>
              <th className="border px-4 py-3 text-left">Kya hai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Board resolution / special resolution</td>
              <td className="border px-4 py-3">Shareholders ki consent (75% share capital)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Indemnity bond (Form STK-3)</td>
              <td className="border px-4 py-3">Har director ka, notarised</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Affidavit (Form STK-4)</td>
              <td className="border px-4 py-3">Har director ka, notarised</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Statement of accounts</td>
              <td className="border px-4 py-3">Application se 30 din ke andar ki, CA dwara certified — nil assets, nil liabilities</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Bank closure certificate</td>
              <td className="border px-4 py-3">Bank account band hone ka proof</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Pending returns</td>
              <td className="border px-4 py-3">Last filed financial statements tak ki filings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Process — Step by Step
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Pending ROC filings aur income tax/GST returns poori karein; GST registration cancel karein</li>
        <li>Saari liabilities clear karke bank account band karein</li>
        <li>Board meeting aur shareholders ki meeting mein strike off ka resolution pass karein</li>
        <li>CA se statement of accounts certify karwayein, directors ke STK-3/STK-4 notarise karein</li>
        <li>MCA V3 portal par <strong>Form STK-2</strong> fee ke saath file karein</li>
        <li>C-PACE application check karta hai aur public notice (STK-6) jaari karta hai</li>
        <li>Koi objection na aaye to company strike off hokar Official Gazette mein publish hoti hai</li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Band na karne ka asli nuksaan
        </h3>
        <p className="text-gray-700 leading-8">
          Har saal AOC-4 aur MGT-7 na bharne par <strong>per-day additional fee</strong> lagti hai jo saalon mein lakhon tak pahunch sakti hai. Lagatar 3 saal filings na hone par company ke directors <strong>5 saal ke liye disqualify</strong> ho sakte hain — yaani wo kisi aur company mein bhi director nahi ban sakte. ROC compliance ki dates hamare{" "}<Link href="/blog/roc-annual-compliance-calendar-pvt-ltd-llp" className={linkClass}>ROC compliance calendar</Link>{" "}mein hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Strike Off Ya Dormant Status
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap company ko future mein phir se use karna chahte hain (brand name, bank relationships ke liye), to strike off ki jagah <strong>dormant company</strong> status (Section 455) le sakte hain — isme compliance kam ho jaata hai. Poori tarah band karna hai to STK-2 sahi hai. MCA ne 2026 mein ek compliance facilitation scheme (CCFS-2026) chalayi thi jisme strike off fee mein chhoot thi; wo 31 August 2026 ko khatam ho chuki hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        LLP band karna ho to process alag hai (Form 24). Company closure ki poori documentation aur filing hamari{" "}<Link href="/company-registration" className={linkClass}>Company Registration &amp; Compliance</Link>{" "}team karti hai. Business ke liye{" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>bookkeeping</Link>{" "}band hone tak chalti rahni chahiye taaki closure ke waqt accounts ready hon.
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
        Company strike off ke rules Companies Act, 2013 (Section 248) aur Companies (Removal of Names) Rules par based hain aur 24 September 2026 tak verify kiye gaye hain. Current MCA fee aur apne case ke liye humse confirm karein.
      </p>
    </>
  );
}
