import Link from "next/link";

const faqs = [
  {
    q: "Kya 2B me na dikhne wala ITC claim kar sakte hain?",
    a: "Aam taur par nahi. Section 16(2)(aa) ke hisaab se ITC tabhi allowed hai jab invoice GSTR-2B me reflect ho. RCM ka ITC iska exception hai.",
  },
  {
    q: "GSTR-2B kab generate hoti hai?",
    a: "Har mahine ki 14 tareekh ke aas-paas. Previous month ke suppliers ki filing ke basis par ye statement banti hai.",
  },
  {
    q: "Agar 2B se kam ITC claim karein to?",
    a: "Koi dikkat nahi. Jo ITC baaki hai wo next month me claim kar sakte hain, bas Section 16(4) ki last date ke andar.",
  },
  {
    q: "Excess ITC claim ho gaya, ab kya karein?",
    a: "Next month ki GSTR-3B me use reverse karein aur applicable interest ke saath pay karein. Notice aane se pehle khud correct karna behtar hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function Gstr2bVsGstr3bItcMismatchReconciliationBlog() {
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
        Har mahine GSTR-3B file karte waqt sabse zyada confusion ITC ko lekar hoti hai: GSTR-2B me jo credit dikh raha hai, kya wahi claim karna hai? Agar aap 2B se zyada ITC claim kar dete hain, to GST portal aur department dono ki nazar aap par aa jaati hai. Is guide me hum dekhenge ki mismatch kyun aata hai aur use kaise theek karein.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>GSTR-2B ek <strong>static statement</strong> hai jo har mahine ki 14 tareekh ke aas-paas generate hoti hai</li>
          <li>Section 16(2)(aa) ke hisaab se ITC tabhi milta hai jab supplier ka invoice aapki GSTR-2B me dikhe</li>
          <li>GSTR-3B me 2B se zyada ITC claim karna notice aur interest ka sabse bada kaaran hai</li>
          <li>Mismatch ke common reasons: supplier ki late filing, galat month, blocked credit aur RCM</li>
          <li>Har mahine 3B file karne se pehle 2B ka reconciliation karein</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GSTR-2B Aur GSTR-3B Me Fark Kya Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">GSTR-2B</th>
              <th className="border px-4 py-3 text-left">GSTR-3B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Kya hai</td>
              <td className="border px-4 py-3">Auto-drafted ITC statement (sirf dekhne ke liye)</td>
              <td className="border px-4 py-3">Monthly/quarterly summary return jisme tax pay hota hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Data kahan se</td>
              <td className="border px-4 py-3">Suppliers ki GSTR-1, 5, 6 aur ISD se</td>
              <td className="border px-4 py-3">Aap khud (ya accountant) bharte hain</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Badal sakta hai?</td>
              <td className="border px-4 py-3">Nahi, static hai</td>
              <td className="border px-4 py-3">Haan, filing se pehle</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">ITC ka role</td>
              <td className="border px-4 py-3">Bataati hai kitna ITC <strong>eligible</strong> hai</td>
              <td className="border px-4 py-3">Yahan ITC actually <strong>claim</strong> hota hai (Table 4)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Seedhi baat: 2B aapka &apos;allowed limit&apos; hai aur 3B me aap use claim karte hain. Claim 2B ke andar rehna chahiye. Kaun sa ITC eligible hai aur kaun sa reverse hoga, ye hamari {" "}<Link href="/blog/input-tax-credit-gst-rules-reversal" className={linkClass}>Input Tax Credit guide</Link>{" "} me detail me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Mismatch Ke Common Reasons
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Supplier ne GSTR-1 late file ki</strong> — invoice agle mahine ki 2B me aayega</li>
        <li><strong>Invoice galat period me upload hua</strong> — supplier ne date ya month galat daal diya</li>
        <li><strong>Blocked credit (Section 17(5))</strong> — 2B me dikhta hai lekin claim nahi kar sakte, jaise motor vehicle, food aur personal use</li>
        <li><strong>RCM ka ITC</strong> — 2B me nahi dikhta, lekin 3B me alag se claim hota hai</li>
        <li><strong>Credit note ya amendment</strong> — supplier ne baad me invoice badal diya</li>
        <li><strong>Invoice Management System (IMS)</strong> — aapne invoice ko reject ya pending rakha, to 2B me nahi aayega. Detail {" "}<Link href="/blog/gst-invoice-management-system-ims-guide" className={linkClass}>IMS guide</Link>{" "} me dekhein</li>
      </ul>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Sabse badi galti
        </h3>
        <p className="text-gray-700 leading-8">
          Purchase register ke hisaab se ITC claim kar lena aur 2B se match na karna. Agar supplier ne GST file hi nahi kiya, to ITC aapke liye allowed nahi hai, chahe aapne payment kar di ho. Isliye supplier ki filing regularly check karein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step-By-Step Reconciliation Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>GST portal se <strong>GSTR-2B</strong> (Excel) download karein — mahine ki 14 tareekh ke baad</li>
        <li>Apna <strong>purchase register</strong> (Tally ya Excel) nikaalein</li>
        <li>GSTIN, invoice number, date aur tax amount ke basis par dono ko match karein</li>
        <li>Jo invoices <strong>sirf books me</strong> hain, unki list banayein aur supplier ko follow-up karein</li>
        <li>Jo invoices <strong>sirf 2B me</strong> hain, unhe check karein: kya purchase sahi hai? Agar haan, books me enter karein</li>
        <li>Blocked credit aur RCM ko alag dikhayein</li>
        <li>Final eligible ITC calculate karke 3B ke <strong>Table 4</strong> me bharein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Jo ITC is mahine nahi mila, use track karte rahein. Section 16(4) ke hisaab se ITC claim karne ki last date financial year ke baad ke <strong>30 November</strong> tak (ya annual return ki date, jo pehle ho) hoti hai. Uske baad ITC lapse ho jaata hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Excess ITC Claim Karne Par Kya Hota Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Portal par <strong>mismatch ka alert</strong> aata hai aur 3B me warning dikh sakti hai</li>
        <li>Excess ITC par <strong>18% interest</strong> (Section 50) lag sakta hai</li>
        <li>Department <strong>DRC-01 ya ASMT-10 notice</strong> bhej sakta hai. Reply ka tareeka {" "}<Link href="/blog/gst-drc-01-demand-notice-reply-guide" className={linkClass}>DRC-01 guide</Link>{" "} me hai</li>
        <li>Galat ya fraud ITC par 100% penalty tak ho sakti hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Agar galti se excess ITC claim ho gaya hai, to next month ki 3B me use <strong>reverse</strong> karke interest ke saath pay kar dein. Notice aane ka intezaar na karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Monthly Reconciliation Checklist
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Mahine ki 14 tareekh ke baad 2B download karein</li>
        <li>Purchase register se match karein aur difference ki list banayein</li>
        <li>Supplier ko reminder bhejein jinki filing pending hai</li>
        <li>Blocked aur ineligible credit alag karein</li>
        <li>RCM ka ITC alag se add karein</li>
        <li>3B file karne se pehle ITC summary ka screenshot ya file save karein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Mahine ka reconciliation time leta hai aur ek galti notice tak pahunch sakti hai. Hamari {" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing service</Link>{" "} me ITC reconciliation included hai. Apne case ke liye {" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "} book karein.
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
        Ye jaankari 30 September 2026 tak ki GST law aur notifications par based hai. GST rules, due dates aur rates badalte rehte hain, isliye koi bhi decision lene se pehle latest notification check karein ya humse consult karein.
      </p>
    </>
  );
}
