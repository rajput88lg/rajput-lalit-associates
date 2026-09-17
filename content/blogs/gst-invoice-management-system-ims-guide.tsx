import Link from "next/link";

const faqs = [
  {
    q: "GST IMS kab shuru hua tha?",
    a: "Ye GST portal par 1 October 2024 se live hua, aur 14 October 2024 se taxpayers actions lena shuru kar sake.",
  },
  {
    q: "Agar main kisi invoice par koi action na loon to kya hoga?",
    a: "Jab GSTR-2B generate hoti hai to wo 'deemed accepted' maani jaati hai aur ITC automatically flow ho jaata hai — matlab inaction ITC ko block nahi karta, lekin jo aapko disagree hai use actively Reject karna zaroori hai.",
  },
  {
    q: "GSTR-2B generate hone ke baad kya main decision badal sakta hoon?",
    a: "Haan, IMS mein action badal sakte hain, lekin agar ye ~14 tareekh ke draft GSTR-2B ke baad kiya jaaye to GSTR-2B recompute karni padegi GSTR-3B file karne se pehle.",
  },
  {
    q: "Kya invoice Reject karne se ITC hamesha ke liye chala jaata hai?",
    a: "Us period ke liye ITC GSTR-2B/3B mein nahi aata; baad mein claim karne ke liye aam taur par supplier ko GSTR-1A ke through invoice re-file/amend karni padti hai, ya dono parties ke beech resolve karna padta hai.",
  },
  {
    q: "Kya IMS se Section 16(4) ki ITC deadline badal gayi hai?",
    a: "Nahi — Section 16(4) ki statutory deadline IMS se alag hi apply hoti hai; IMS mein 'Pending' sirf portal-level deferral hai, statutory extension nahi.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTInvoiceManagementSystemIMSGuide() {
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
        GST Invoice Management System (IMS) ne recipients ke liye ITC claim karne ka tareeka badal diya hai. Pehle log apne books ko GSTR-2A/2B se khud reconcile karte the aur mismatches baad mein notices ke through sort hote the. Ab IMS ek dashboard deta hai jahan har supplier ki invoice par pehle hi Accept/Reject/Pending ka decision liya ja sakta hai — isse GSTR-2B aur ultimately GSTR-3B directly banti hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>IMS ek GST portal feature hai jahan recipient har inward invoice ko Accept, Reject, ya Pending kar sakta hai — 1 October 2024 se live hai</li>
          <li>Koi action na loon to invoice 'deemed accepted' ho jaata hai jab GSTR-2B generate hoti hai — ITC automatically flow ho jaata hai</li>
          <li>October 2025 se credit notes ke liye bhi Pending option, aur reject/pending par mandatory remarks zaroori hain</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        IMS Hai Kya
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        IMS GST portal ka ek feature hai (Dashboard &gt; Services &gt; Returns &gt; Invoice Management System) jo recipient ko har us invoice/credit-debit note par action lene deta hai jo supplier ne GSTR-1/1A/IFF ke through report ki hai — pehle ye ITC mein aaye, uske pehle.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Ye 1 October 2024 se portal par available hai, aur 14 October 2024 se actions lena shuru ho gaya (October 2024 tax period ki GSTR-2B ke liye time par).
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Step-by-Step Process
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>GST portal login karein → Dashboard → Services → Returns → Invoice Management System (IMS)</li>
          <li>'Inward Supplies' view kholkar har invoice/credit note/debit note review karein</li>
          <li>Har record par: Accept (ITC mein include karna hai), Reject (dispute hai, ITC mein nahi chahiye), ya Pending (decision baad mein) chunein</li>
          <li>Koi action nahi liya to GSTR-2B generate hote time record 'deemed accepted' ho jaata hai</li>
          <li>Draft GSTR-2B (~14 tareekh ko available) review karke confirm karein ki actions sahi se reflect ho rahe hain</li>
          <li>GSTR-3B file karein, jo IMS actions/GSTR-2B ke basis par auto-populate hoti hai</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GSTR-2B ke Saath Connection
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Ab GSTR-2B directly IMS actions se banti hai — sirf Accepted aur deemed-accepted invoices 'ITC Available' table mein jaate hain; Rejected invoices ek separate 'ITC Rejected' section mein rehte hain aur kabhi ITC-eligible figures mein nahi aate.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Section 16(4), CGST Act ka statutory time limit ITC claim karne ke liye alag se apply hota rehta hai — IMS mein 'Pending' status sirf portal-level deferral hai, ye statutory deadline ko extend nahi karta.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        October 2025 Se Enhancements
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Naye features jo aapko pata hone chahiye
        </h3>
        <p className="text-gray-700 leading-8">
          October 2025 tax period se, credit notes aur kuch amendments ke liye bhi 'Pending' option mil gaya hai (limited window ke saath), recipients ab exact/partial ITC reversal amount declare kar sakte hain (poora automatic reversal nahi), aur Reject ya Pending mark karte waqt ab mandatory remarks dena zaroori hai — isse audit trail banta hai aur arbitrary rejections kam hote hain.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        IMS ka sahi tarike se use karna ab ITC accuracy ke liye zaroori ho gaya hai — koi bhi action na lena bhi ek decision hai (deemed acceptance), aur ye galti se galat ITC claim kara sakta hai agar aap regularly review nahi karte. Hamari{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>{" "}service mein hum aapke IMS dashboard ko monthly review karte hain taaki koi bhi invoice galti se accept/reject na ho.{" "}<Link href="/blog/gstr-9c-reconciliation-statement-guide-fy-2025-26" className={linkClass}>GSTR-9C Reconciliation</Link>{" "}guide bhi dekhein agar aap annual reconciliation kar rahe hain.
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
        IMS ka process GSTN advisories ke through samay-samay par update hota hai. Ye article 17 September 2026 tak ke known process par based hai — latest GSTN advisory se confirm karein.
      </p>
    </>
  );
}
