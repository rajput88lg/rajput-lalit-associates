import Link from "next/link";

const faqs = [
  {
    q: "ITR file karne ke kitne din baad refund aata hai?",
    a: "E-verification ke baad aam taur par kuch hafton mein, lekin mismatch ya verification pending ho to mahino lag sakte hain. Portal par processing status dekhte rahein.",
  },
  {
    q: "Refund galat bank account mein chala gaya to?",
    a: "Refund sirf pre-validated aur PAN se linked account mein jaata hai. Agar account band ho gaya tha to refund fail hota hai — naya account validate karke reissue request daalein.",
  },
  {
    q: "Kya refund par interest milta hai?",
    a: "Haan, late refund par aam taur par 0.5% per month interest milta hai, jo agle saal taxable income hai.",
  },
  {
    q: "Refund demand ke against adjust ho gaya — kya kar sakte hain?",
    a: "Agar demand galat hai to portal par 'Response to Outstanding Demand' mein disagree karke reason aur proof submit karein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxRefundStatusDelayReasonsBlog() {
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
        ITR file ho gayi, refund dikh raha hai — lekin paisa account mein nahi aaya. Ye sawaal har season mein hamare office mein sabse zyada aata hai. Zyada tar cases mein refund kisi chhoti si technical wajah se atka hota hai jo 10 minute mein theek ho sakti hai. Ye guide batati hai ki status kaise check karein aur kaunsi problem ka kya ilaaj hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Refund tabhi process hota hai jab ITR <strong>e-verify</strong> ho chuki ho</li>
          <li>Refund sirf <strong>pre-validated</strong> bank account mein aata hai</li>
          <li>PAN inoperative (Aadhaar link nahi) ho to refund nahi milta</li>
          <li>AIS/26AS se mismatch ho to refund kam ya adjust ho sakta hai</li>
          <li>Late refund par department interest deta hai (normally 0.5% per month)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Status Kaise Check Karein
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>incometax.gov.in par login karein</li>
        <li>e-File → Income Tax Returns → View Filed Returns par jaayein</li>
        <li>Us saal ki return par &apos;View Details&apos; karein — processing aur refund ka poora status dikhega</li>
        <li>NSDL/Protean ke refund status page par PAN aur assessment year daal kar bhi check kar sakte hain</li>
      </ol>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Late Hone Ke 7 Common Kaaran
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kaaran</th>
              <th className="border px-4 py-3 text-left">Kya karein</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">ITR e-verify nahi hui</td>
              <td className="border px-4 py-3">30 din ke andar Aadhaar OTP/net banking se e-verify karein — bina verification ke return process hi nahi hoti</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Bank account pre-validated nahi</td>
              <td className="border px-4 py-3">Portal par Profile → My Bank Account mein account validate karein aur &apos;nominate for refund&apos; karein</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Naam PAN aur bank mein alag</td>
              <td className="border px-4 py-3">Bank se KYC update karwayein taaki naam PAN se match kare</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">PAN inoperative hai</td>
              <td className="border px-4 py-3">PAN-Aadhaar link karein; link hone tak refund nahi aata aur us period ka interest bhi nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS mismatch (26AS/AIS)</td>
              <td className="border px-4 py-3">Deductor se TDS return correct karwayein ya ITR revise karein</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Purani demand pending hai</td>
              <td className="border px-4 py-3">Department refund ko demand ke against adjust kar sakta hai (Section 245 ki intimation aati hai) — response dein</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Return scrutiny mein hai</td>
              <td className="border px-4 py-3">Notice ka jawab time par dein — scrutiny poori hone tak refund ruk sakta hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Refund failed dikh raha hai?
        </h3>
        <p className="text-gray-700 leading-8">
          Agar status &apos;Refund Failed&apos; hai, to pehle bank account validate karein, phir Services → Refund Reissue Request se nayi request daalein. Ek hi account ko baar-baar try karne se pehle wajah (closed account, IFSC change, naam mismatch) theek karna zaroori hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Par Interest
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar refund late aata hai to department aapko us par interest deta hai — aam taur par <strong>0.5% per month</strong> (6% saalana), jo 1 April se refund ki date tak (time par ITR file karne walon ke liye) calculate hota hai. Ye interest agle saal ki ITR mein &apos;Income from Other Sources&apos; mein taxable hai — ise dikhana na bhoolein, AIS mein dikhta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Refund Jaldi Paane Ke Tips
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>ITR file karne se pehle{" "}<Link href="/blog/form-26as-ais-tis-reconciliation-itr" className={linkClass}>Form 26AS aur AIS se reconcile</Link>{" "}karein</li>
        <li>Filing ke turant baad Aadhaar OTP se e-verify karein</li>
        <li>Bank account hamesha pre-validated rakhein</li>
        <li>Galti dikhe to{" "}<Link href="/blog/belated-revised-itr-ay-2026-27" className={linkClass}>revised return</Link>{" "}jaldi file karein</li>
        <li>Department ki kisi bhi email/notice ko ignore na karein —{" "}<Link href="/blog/income-tax-notice-types-143-1-148-139-9-explained" className={linkClass}>notice types guide</Link>{" "}dekhein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Refund 3-4 mahine se zyada atka hai aur wajah samajh nahi aa rahi, to hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing team</Link>{" "}aapka portal check karke problem identify kar sakti hai.
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
        Refund process aur interest ke rules Income-tax Act ke provisions par based hain. Ye jaankari 24 September 2026 tak ki hai — atke hue refund ke liye humse sampark karein.
      </p>
    </>
  );
}
