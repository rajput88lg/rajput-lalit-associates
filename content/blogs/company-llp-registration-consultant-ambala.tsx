import Link from "next/link";

const faqs = [
  {
    q: "Kya Ambala ki companies ab RoC Delhi ke through register hoti hain?",
    a: "Nahi — 2026 mein Haryana ki apni dedicated Registrar of Companies ban gayi hai (RoC Haryana, Chandigarh mein based), jo February 2026 se operational hai. Pehle ye Delhi ke saath combined tha.",
  },
  {
    q: "Kya Haryana mein Professional Tax dena padta hai?",
    a: "Nahi, Haryana Professional Tax lagu nahi karta — ye ek genuine advantage hai us compliance ke muqable jo doosri states mein hota hai.",
  },
  {
    q: "Company registration mein kitna time lagta hai?",
    a: "Typically 7-10 working din, SPICe+ process ke through — documents sahi aur complete hon to jaldi ho sakta hai.",
  },
  {
    q: "Kya Ambala mein hi koi RoC office hai?",
    a: "Nahi, RoC Haryana ka office Chandigarh mein hai — lekin poora incorporation process online (MCA21 portal) hota hai, isliye physically wahan jaane ki zaroorat nahi padti.",
  },
  {
    q: "Kya naye registered business ko Haryana ki MSME policy ka fayda milta hai?",
    a: "Ho sakta hai — Haryana Progressive MSME & Export Promotion Policy 2026 ke tahat kuch incentives available hain, lekin exact eligibility apni specific business ke hisaab se confirm karni chahiye.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function CompanyLLPRegistrationConsultantAmbala() {
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
        Ambala mein apni company ya LLP register karana chahte hain? 2026 mein ek genuinely naya badlaav hua hai jo Haryana ki businesses ko directly asar karta hai — Ministry of Corporate Affairs ne Haryana ke liye ek dedicated Registrar of Companies bana diya hai, jo pehle Delhi ke saath combined tha. Ye guide Ambala/Haryana ke context mein poora registration process samjhata hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>2026 mein Haryana ki apni alag Registrar of Companies (RoC Haryana) ban gayi hai, jo Chandigarh mein based hai — pehle combined RoC Delhi &amp; Haryana tha</li>
          <li>Haryana mein Professional Tax lagu nahi hota — ek genuine compliance-saving jo kai doosre states mein nahi milti</li>
          <li>SPICe+ process (DSC → name reservation → incorporation) same rehta hai, typically 7-10 working din mein complete</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Naya — Registrar of Companies, Haryana (2026)
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ab RoC Delhi nahi, RoC Haryana
        </h3>
        <p className="text-gray-700 leading-8">
          MCA Notification (23 October 2025) ke through purani combined 'RoC Delhi &amp; Haryana' ko alag kar diya gaya — ab Haryana ki apni dedicated Registrar of Companies hai, jo Chandigarh mein based hai, 15/16 February 2026 se operational. Isi ke saath ek naya Regional Directorate (NR-II, Chandigarh) bhi bana hai jo Haryana, Himachal Pradesh, Punjab, Uttarakhand aur kuch UTs cover karta hai. Matlab ab Ambala ki koi bhi company/LLP registration Haryana-specific RoC ke through hoti hai, Delhi ke through nahi.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Haryana Mein Professional Tax Nahi Lagta
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Ye ek genuine advantage hai — Haryana state Professional Tax lagu nahi karta, jiska matlab hai industrial/commercial property owners aur employers ko is registration process aur ongoing compliance se guzarna nahi padta, jaisa Maharashtra, Karnataka, ya West Bengal jaisi states mein hota hai. Ambala mein registered company/LLP ke liye ye ek compliance step kam ho jaata hai.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Incorporation Process — SPICe+
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>DSC (Digital Signature Certificate) — sabhi directors/subscribers ke liye mandatory</li>
          <li>SPICe+ Part A — company/LLP naam reserve karna</li>
          <li>SPICe+ Part B — incorporation, jisme PAN, TAN, GST, EPFO, ESIC registration bhi integrated hai (AGILE-PRO-S ke through)</li>
          <li>eMoA (INC-33) aur eAOA (INC-34) file karna (companies ke liye)</li>
          <li>Typical MCA processing time: 7-10 working din (documents ki accuracy par depend karta hai)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Haryana MSME/Business Incentives
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Haryana government ne 'Haryana Progressive MSME &amp; Export Promotion Policy 2026' notify ki hai, jo state mein MSME investment aur exports ko promote karti hai. Iske exact eligibility criteria aur incentive amounts official notification (msme.haryana.gov.in) se hi confirm karne chahiye — hum apne clients ko ye check karne mein madad karte hain ki unki naye registered company/LLP is policy ke tahat kya benefits claim kar sakti hai.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Ambala mein company ya LLP registration karana ab pehle se zyada local ho gaya hai — apni Haryana-specific RoC ke saath, aur professional tax jaisi extra compliance ke bina. Hamari{" "}<Link href="/company-registration" className={linkClass}>Company Registration</Link>{" "}aur{" "}<Link href="/blog/llp-registration-process-cost-vs-pvt-ltd" className={linkClass}>LLP Registration</Link>{" "}guides dekhein detailed process ke liye, ya seedha humse baat karein — Rajput Lalit &amp; Associates Ambala City mein hi based hai.
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
        RoC jurisdiction ki jaankari MCA ke official notifications par based hai jo February 2026 mein effective hui — office-holder ke naam samay ke saath badal sakte hain isliye is article mein sirf designation/office ka zikr kiya gaya hai. Haryana ki MSME policy ke exact incentive figures official notification se confirm karein.
      </p>
    </>
  );
}
