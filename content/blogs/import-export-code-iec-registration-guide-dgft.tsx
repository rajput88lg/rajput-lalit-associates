import Link from "next/link";

const faqs = [
  {
    q: "IEC ki fees kitni hai?",
    a: "DGFT par ek baar ki fees ₹500 hai. Professional service lene par alag se charges lag sakte hain.",
  },
  {
    q: "Kya services export ke liye IEC chahiye?",
    a: "Aam taur par nahi, lekin Foreign Trade Policy ke benefits claim karne ke liye chahiye ho sakta hai.",
  },
  {
    q: "IEC kitne din me banta hai?",
    a: "Documents sahi hone par aam taur par 1 se 2 din me.",
  },
  {
    q: "Kya ek PAN par do IEC ban sakte hain?",
    a: "Nahi, ek PAN par ek hi IEC milta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function ImportExportCodeIecRegistrationGuideDgftBlog() {
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
        Agar aap goods import ya export karna chahte hain, to sabse pehla registration hai Import Export Code (IEC). Ye 10-digit code DGFT (Directorate General of Foreign Trade) jaari karta hai aur customs, bank aur shipping me aapki pehchaan hota hai. Process online hai aur zyada mushkil nahi, lekin kuch zaroori baatein dhyan me rakhni chahiye.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>IEC <strong>DGFT portal</strong> par online banta hai, fees <strong>₹500</strong> (ek baar)</li>
          <li>Ye <strong>PAN par based</strong> hai, ek PAN par ek IEC</li>
          <li>IEC ki validity <strong>lifetime</strong> hai, lekin har saal <strong>April se June</strong> ke beech confirm/update karna hota hai</li>
          <li><strong>Goods ke import-export</strong> ke liye zaroori, services export me aam taur par nahi</li>
          <li>Application me <strong>PAN, Aadhaar, bank proof aur address proof</strong> lagta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        IEC Kis Ko Chahiye
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Jo business <strong>goods import ya export</strong> karta hai</li>
        <li>E-commerce se goods bahar bhejne wale sellers</li>
        <li>Manufacturers jo apna maal bahar bhejte hain</li>
        <li>Merchant exporters aur traders</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        IEC ke bina customs clearance aur foreign remittance me dikkat aati hai. Services export ke liye aam taur par IEC zaroori nahi hota, lekin agar aap Foreign Trade Policy ke kisi benefit ka claim karna chahte hain, to chahiye ho sakta hai. Freelancers ke liye {" "}<Link href="/blog/gst-freelancers-export-of-services-lut" className={linkClass}>LUT aur export guide</Link>{" "} alag se useful hai.
      </p>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Exceptions
        </h3>
        <p className="text-gray-700 leading-8">
          Personal use ke liye goods import ya export karne par IEC zaroori nahi hota. Kuch government departments aur specific categories ko bhi exemption hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Zaroori Documents
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Applicant ya firm ka <strong>PAN</strong></li>
        <li><strong>Aadhaar</strong> (authentication ke liye)</li>
        <li><strong>Bank proof</strong>: cancelled cheque ya bank certificate</li>
        <li>Business ka <strong>address proof</strong> (rent agreement, bijli bill ya ownership document)</li>
        <li>Firm/company ke cases me <strong>incorporation documents</strong> aur authorised signatory ka proof</li>
        <li>Mobile number aur email (OTP verification ke liye)</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Apply Kaise Karein
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>DGFT portal</strong> par login ya registration karein</li>
        <li><strong>IEC application form</strong> me business details bharein</li>
        <li>Documents upload karein aur Aadhaar OTP se verify karein</li>
        <li>₹500 fees online pay karein</li>
        <li>Application approve hone par <strong>IEC certificate</strong> email par mil jaata hai, aam taur par 1 se 2 din me</li>
      </ol>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        IEC Ke Baad Ke Zaroori Steps
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Step</th>
              <th className="border px-4 py-3 text-left">Kya hai</th>
              <th className="border px-4 py-3 text-left">Kiske liye</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>AD Code registration</strong></td>
              <td className="border px-4 py-3">Customs port par bank ka Authorised Dealer code register karna</td>
              <td className="border px-4 py-3">Export shipments ke liye</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>RCMC</strong></td>
              <td className="border px-4 py-3">Export Promotion Council ka membership certificate</td>
              <td className="border px-4 py-3">Export benefits lene ke liye</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>GST registration</strong></td>
              <td className="border px-4 py-3">Export par GST aur refund ke liye</td>
              <td className="border px-4 py-3">Sabhi exporters. Detail {" "}<Link href="/gst-registration" className={linkClass}>GST Registration guide</Link>{" "} me</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>LUT</strong></td>
              <td className="border px-4 py-3">Bina IGST ke export karne ke liye</td>
              <td className="border px-4 py-3">Goods aur services exporters</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Bank account (current)</strong></td>
              <td className="border px-4 py-3">Foreign remittance receive karne ke liye</td>
              <td className="border px-4 py-3">Sabhi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Export ke baad IGST refund ke liye {" "}<Link href="/blog/gst-refund-process-exporters-inverted-duty-structure" className={linkClass}>GST refund guide</Link>{" "} dekhein. Business setup ke liye {" "}<Link href="/msme-registration" className={linkClass}>MSME registration</Link>{" "} bhi kaam aa sakti hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Annual Update Ki Zaroorat
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        IEC lifetime valid rehta hai, lekin DGFT ke rules ke hisaab se har saal <strong>April se June</strong> ke beech IEC ki details ko online confirm ya update karna hota hai, chahe koi badlaav na ho. Na karne par IEC deactivate ho sakta hai. Update karne ke baad reactivate kiya ja sakta hai. Exact timeline aur procedure DGFT portal par check kar lein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Galtiyan
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>IEC ke bajay sirf GST registration par export shuru kar dena</li>
        <li>Bank account details galat dena, jisse remittance me problem aati hai</li>
        <li>Annual update bhool jaana</li>
        <li>Export ke liye LUT file na karna, jisse IGST dena pad jaata hai</li>
        <li>Business address badalne par IEC me update na karna</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        IEC, GST, LUT aur current account, export ke liye sab ek saath set up karwane me hamari team madad karti hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
