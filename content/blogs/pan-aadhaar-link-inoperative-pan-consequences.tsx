import Link from "next/link";

const faqs = [
  {
    q: "PAN inoperative hai ya nahi kaise check karein?",
    a: "incometax.gov.in par bina login ke 'Link Aadhaar Status' ya 'Verify Your PAN' option se check kar sakte hain.",
  },
  {
    q: "Kya ₹1,000 fee ke bina link ho sakta hai?",
    a: "30 June 2023 ke baad link karne par ₹1,000 fee dena zaroori hai (exempt categories ko chhodkar).",
  },
  {
    q: "Inoperative PAN se ITR file ho sakti hai?",
    a: "ITR file ho sakti hai, lekin refund nahi milega aur kai processing issues aa sakte hain. Pehle link karna behtar hai.",
  },
  {
    q: "Link hone ke baad zyada kata TDS wapas milega?",
    a: "Zyada kata TDS aapki ITR mein credit ke roop mein adjust hoga aur extra hone par refund milega — bas PAN operative hona chahiye.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function PanAadhaarLinkInoperativePanConsequencesBlog() {
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
        Agar aapka PAN Aadhaar se link nahi hai, to wo <strong>inoperative</strong> ho chuka hai — aur iska asar aapko tab pata chalta hai jab salary ya FD par achanak 20% TDS katne lagta hai, ya refund aata hi nahi. Achhi khabar ye hai ki ise theek karna aasaan hai. Ye guide nuksaan aur solution dono batati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>PAN-Aadhaar link ki deadline 30 June 2023 thi — uske baad link na hua PAN inoperative hai</li>
          <li>Inoperative PAN par TDS/TCS <strong>zyada rate</strong> (aam taur par 20%) se katta hai</li>
          <li>Refund nahi milta, aur inoperative period ka refund interest bhi nahi</li>
          <li>₹1,000 fee bhar kar abhi bhi link kar sakte hain</li>
          <li>Link hone ke baad lagbhag 30 din mein PAN operative ho jaata hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        PAN Inoperative Hone Ke Nuksaan
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Area</th>
              <th className="border px-4 py-3 text-left">Asar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">TDS / TCS</td>
              <td className="border px-4 py-3">Normal rate ki jagah zyada rate — aam taur par 20% (ya normal rate ka double)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Income tax refund</td>
              <td className="border px-4 py-3">Refund jaari nahi hota; PAN operative hone tak ka interest bhi nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Banking</td>
              <td className="border px-4 py-3">Naya account, ₹50,000+ cash deposit jaise kaam atak sakte hain</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Investments</td>
              <td className="border px-4 py-3">Mutual fund, demat aur shares mein KYC issue</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Salary</td>
              <td className="border px-4 py-3">Employer ko zyada TDS kaatna padta hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        PAN-Aadhaar Kaise Link Karein — Step by Step
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>incometax.gov.in par jaakar &apos;Link Aadhaar Status&apos; se check karein ki link hai ya nahi</li>
        <li>Agar nahi hai, to e-Pay Tax se <strong>₹1,000 fee</strong> challan bharein (Assessment Year aur &apos;Other Receipts&apos; option chunein)</li>
        <li>Payment ke 4-5 din baad &apos;Link Aadhaar&apos; option par PAN, Aadhaar aur mobile OTP daal kar request submit karein</li>
        <li>Request ka status portal par track karein</li>
        <li>Link hone ke baad lagbhag <strong>30 din</strong> mein PAN operative ho jaata hai</li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Naam ya date of birth match nahi ho raha?
        </h3>
        <p className="text-gray-700 leading-8">
          Sabse common problem hai PAN aur Aadhaar mein naam/DOB ka alag hona. Pehle jahan galti hai (PAN mein ya Aadhaar mein) wahan correction karwayein, uske baad hi link request daalein — warna request reject hoti rahegi.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kin Logon Ko Link Karna Zaroori Nahi
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>80 saal ya usse zyada umar ke log</li>
        <li>Non-residents (NRI) jo Aadhaar ke liye eligible nahi</li>
        <li>Jo Indian citizen nahi hain</li>
        <li>Assam, Meghalaya aur Jammu &amp; Kashmir ke kuch residents (notified exemption)</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        NRI dhyan dein: agar aapka residential status department ke records mein update nahi hai, to exempt hote hue bhi PAN inoperative dikh sakta hai. Aise case mein jurisdictional officer ko residential status update karwana padta hai. NRI tax ki baaki jaankari hamare{" "}<Link href="/nri-tax-services" className={linkClass}>NRI Tax Services</Link>{" "}page par hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deductor Ke Liye Relief
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar kisi ka PAN inoperative tha aur deductor ne zyada TDS nahi kaata, lekin wo PAN (tax deduct hone wale mahine ke end se) <strong>2 mahine ke andar</strong> operative ho gaya, to deductor par short-deduction ki demand nahi aati. Businesses ke liye TDS compliance hamari{" "}<Link href="/tds-return-filing" className={linkClass}>TDS Return Filing</Link>{" "}service mein cover hota hai.
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
        PAN-Aadhaar linking ke rules aur fee Income-tax Rules ke tahat hain aur 24 September 2026 tak verify kiye gaye hain. Apne case ke liye humse sampark karein.
      </p>
    </>
  );
}
