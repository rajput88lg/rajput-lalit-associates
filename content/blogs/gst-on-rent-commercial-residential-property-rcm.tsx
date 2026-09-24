import Link from "next/link";

const faqs = [
  {
    q: "Kya ghar kiraye par dene par landlord ko GST registration lena padega?",
    a: "Sirf residential rent jo rehne ke liye diya gaya hai, wo exempt hai, isliye uske liye registration nahi chahiye. Registration tab zaroori hai jab taxable supplies (jaise commercial rent) ₹20 lakh ki limit cross karein.",
  },
  {
    q: "Unregistered landlord se dukaan kiraye par li hai — kya mujhe GST bharna hoga?",
    a: "Agar aap GST-registered hain, to 10 October 2024 se aapko 18% GST RCM mein bharna hoga (composition taxpayers ke liye alag relief hai — case confirm karein).",
  },
  {
    q: "RCM mein bhara gaya GST ka ITC milta hai?",
    a: "Haan, agar property business ke kaam mein use ho rahi hai aur ITC ki baaki conditions poori hain, to RCM mein cash se bhare GST ka ITC mil jaata hai.",
  },
  {
    q: "Security deposit par GST lagta hai?",
    a: "Refundable security deposit par aam taur par GST nahi lagta. Lekin agar deposit rent mein adjust hota hai ya forfeit hota hai, to adjust hone wale hisse par GST lag sakta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstOnRentCommercialResidentialPropertyRcmBlog() {
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
        Dukaan, office ya godown kiraye par lena ho ya dena ho — GST ka sawaal zaroor aata hai. Aur ab ye sawaal sirf landlord ka nahi raha: kai cases mein <strong>tenant ko khud GST bharna padta hai</strong> Reverse Charge Mechanism (RCM) ke through. Ye guide teen main situations ko simple tarike se samjhati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Commercial property (shop, office, godown) ka rent: 18% GST</li>
          <li>Residential ghar sirf rehne ke liye kiraye par — aam taur par GST exempt</li>
          <li>GST-registered tenant residential ghar kiraye par le: tenant 18% GST RCM mein bharta hai</li>
          <li>Registered tenant unregistered landlord se commercial property le (10 October 2024 se): tenant 18% RCM mein bharta hai</li>
          <li>RCM ka GST cash mein bharna hota hai; eligible ho to uska ITC mil sakta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Situation 1 — Landlord GST-Registered Hai, Commercial Property
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar landlord GST mein registered hai aur shop/office/godown kiraye par deta hai, to wo apne invoice mein <strong>18% GST</strong> charge karega aur khud jama karega. Tenant agar business ke liye use kar raha hai aur registered hai, to is GST ka Input Tax Credit le sakta hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Landlord ke liye dhyan dene wali baat: agar sirf kiraye ki income ₹20 lakh (kuch special category states mein ₹10 lakh) se zyada hai, to GST registration zaroori ho jaata hai. Registration ka process hamari{" "}<Link href="/blog/gst-registration-online-india" className={linkClass}>GST Registration guide</Link>{" "}mein hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Situation 2 — Residential Ghar Kiraye Par
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rehne ke liye ghar kiraye par dena aam taur par GST se exempt hai. Lekin 18 July 2022 se ek badlav aaya: agar <strong>tenant GST-registered hai</strong>, to residential dwelling ke rent par 18% GST <strong>tenant ko RCM mein</strong> bharna hota hai. Iska main exception ye hai ki agar registered tenant ek proprietor hai aur ghar apne personal rehne ke liye leta hai (business ke liye nahi), to RCM nahi lagta.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Situation 3 — Unregistered Landlord, Registered Tenant, Commercial Property
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>10 October 2024 se</strong> ek naya RCM rule laga: agar koi GST-registered business kisi <strong>unregistered landlord</strong> se commercial property (residential dwelling ke alawa) kiraye par leta hai, to 18% GST tenant ko RCM mein bharna hai. Ambala jaise shehron mein bahut si dukaanein aur godown unregistered landlords ke hote hain, isliye ye rule chhote businesses ko sabse zyada affect karta hai.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kaun kiraye par de raha hai</th>
              <th className="border px-4 py-3 text-left">Kaun le raha hai</th>
              <th className="border px-4 py-3 text-left">Property</th>
              <th className="border px-4 py-3 text-left">GST kaun bharega</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Registered landlord</td>
              <td className="border px-4 py-3">Koi bhi</td>
              <td className="border px-4 py-3">Commercial</td>
              <td className="border px-4 py-3">Landlord (18% forward charge)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Koi bhi</td>
              <td className="border px-4 py-3">Unregistered / personal use</td>
              <td className="border px-4 py-3">Residential</td>
              <td className="border px-4 py-3">Exempt</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Koi bhi</td>
              <td className="border px-4 py-3">Registered tenant (business use)</td>
              <td className="border px-4 py-3">Residential</td>
              <td className="border px-4 py-3">Tenant — RCM 18%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Unregistered landlord</td>
              <td className="border px-4 py-3">Registered tenant</td>
              <td className="border px-4 py-3">Commercial</td>
              <td className="border px-4 py-3">Tenant — RCM 18%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Composition dealers dhyan dein
        </h3>
        <p className="text-gray-700 leading-8">
          Unregistered landlord se commercial property par RCM ke rule mein composition scheme wale taxpayers ko baad mein relief diya gaya tha. Agar aap composition mein hain, to apna case confirm zaroor karwayein — composition scheme ki poori jaankari hamari{" "}<Link href="/blog/gst-composition-scheme-eligibility-rates" className={linkClass}>composition scheme guide</Link>{" "}mein hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        RCM Mein Tenant Ko Kya-Kya Karna Hota Hai
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Har mahine rent par 18% GST calculate karein</li>
        <li>Unregistered landlord ke case mein khud ka <strong>self-invoice</strong> banayein aur payment voucher rakhein</li>
        <li>GST <strong>cash ledger se</strong> jama karein — RCM liability ITC se set-off nahi hoti</li>
        <li>GSTR-3B ki Table 3.1(d) mein RCM liability dikhayein</li>
        <li>Agar property business ke liye use ho rahi hai, to agle hi return mein us GST ka ITC claim karein</li>
      </ol>

      <p className="text-gray-700 leading-8 mb-10">
        Practically, eligible business ke liye RCM ka GST cash flow ka issue hai, cost nahi — kyunki wahi amount ITC mein wapas mil jaata hai. Lekin RCM miss karne par baad mein interest aur notice dono aa sakte hain. RCM ke baaki cases hamari{" "}<Link href="/blog/gst-reverse-charge-mechanism-rcm-explained" className={linkClass}>RCM guide</Link>{" "}mein dekhein, ya apne rent agreements ka review{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>{" "}team se karwayein.
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
        GST on rent ke rules GST Council notifications se badalte rehte hain. Ye jaankari 24 September 2026 tak ke rules par based hai — apne rent agreement ki specific situation ke liye humse consult karein.
      </p>
    </>
  );
}
