import Link from "next/link";

const faqs = [
  {
    q: "NRI property sale par buyer kitna TDS kaatta hai?",
    a: "Long-term gain par 12.5% aur short-term par 30% (plus surcharge aur cess), aur ye aam taur par puri sale value par hota hai jab tak lower certificate na ho.",
  },
  {
    q: "Lower TDS certificate kaun sa form se milta hai?",
    a: "Form 13 se, jo Income Tax portal par online file hota hai.",
  },
  {
    q: "Kya certificate ke bina TDS refund mil sakta hai?",
    a: "Haan, ITR file karke refund claim kar sakte hain, lekin isme kaafi mahine lag sakte hain.",
  },
  {
    q: "Buyer ko kya karna padta hai?",
    a: "Buyer ko TAN lena hota hai, TDS kaatkar deposit karna aur Form 27Q file karni hoti hai. Seller ko Form 16A milta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NriLowerTdsCertificateSection197PropertySaleForm13Blog() {
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
        NRI jab India me property bechta hai, to buyer ko TDS kaatna padta hai aur ye aam taur par puri sale value par hota hai, sirf gain par nahi. Isse NRI ka bada paisa refund aane tak fase rehta hai. Lower ya nil TDS certificate isi problem ka solution hai. Is guide me process aur documents simple bhasha me hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Buyer NRI seller se property khareedte waqt <strong>Section 195</strong> ke under TDS kaatta hai (new Act me Section 393(2))</li>
          <li>Certificate na ho to TDS aksar <strong>puri sale value</strong> par lagta hai, actual gain par nahi</li>
          <li><strong>Form 13</strong> se lower ya nil TDS certificate ke liye apply karte hain</li>
          <li>Application <strong>sale se pehle</strong> karni chahiye</li>
          <li>Buyer ko <strong>TAN</strong> lena aur <strong>Form 27Q</strong> file karna padta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Problem Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        NRI ke property sale par long-term capital gains ka rate 12.5% (plus surcharge aur cess) aur short-term par 30% hota hai. Lekin buyer ko TDS ki calculation me cost aur exemption ka pata nahi hota, isliye wo kaafi baar poori sale value par in rates se TDS kaat deta hai. Example: ₹1 crore ki sale me actual gain ₹20 lakh hai, lekin TDS ₹1 crore par ho sakta hai. Is case ki detail {" "}<Link href="/blog/nri-sale-of-inherited-property-tax-tds-guide" className={linkClass}>NRI inherited property guide</Link>{" "} me hai.
      </p>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Solution
        </h3>
        <p className="text-gray-700 leading-8">
          Income Tax department se <strong>lower ya nil deduction certificate</strong> lene par buyer certificate me likhe rate par hi TDS kaatega, jo actual gain ke hisaab se kaafi kam ya zero ho sakta hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Certificate Ke Liye Kaun Apply Karega
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Application <strong>NRI seller</strong> karta hai, buyer nahi</li>
        <li>Form <strong>Form 13</strong> hota hai, jo Income Tax portal par online file hota hai aur <strong>Assessing Officer (International Taxation)</strong> ko jaata hai</li>
        <li>Application me sale ka detail, expected capital gain aur exemption ka plan dikhana hota hai</li>
        <li>Ye provision Income-tax Act, 1961 ke Section 197 (aur uska naya Act me equivalent) ke under hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Zaroori Documents
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>NRI ka <strong>PAN</strong> aur passport/visa ya OCI copy</li>
        <li><strong>Sale agreement</strong> ya draft sale deed</li>
        <li><strong>Purchase deed</strong> aur cost proof, jaise registration, stamp duty aur improvement ke bills</li>
        <li><strong>Capital gains ki calculation</strong> (CA se)</li>
        <li>Buyer ka naam, PAN aur address</li>
        <li>Bank statements aur pichhle saalon ke ITR</li>
        <li>Exemption claim ho to uska plan (jaise {" "}<Link href="/blog/capital-gains-tax-on-property-sale-section-54" className={linkClass}>Section 54/54EC</Link>{" "})</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Documents ki poori list {" "}<Link href="/nri-lower-tds-certificate-checklist" className={linkClass}>NRI lower TDS checklist</Link>{" "} par bhi mil sakti hai, aur TDS ka andaza {" "}<Link href="/nri-property-tds-calculator" className={linkClass}>NRI property TDS calculator</Link>{" "} se laga sakte hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Process Step By Step
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Sale ka rough plan banate hi <strong>CA se capital gains ki calculation</strong> karwayein</li>
        <li><strong>Form 13</strong> online file karein aur documents upload karein</li>
        <li>Department sawaal puchhe to reply karein</li>
        <li>Approve hone par <strong>lower/nil TDS certificate</strong> milta hai</li>
        <li>Certificate buyer ko dein. Buyer usi rate par TDS kaatega</li>
        <li>Sale deed register karein aur TDS payment ka record lein</li>
      </ol>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Timing ka dhyan rakhein
        </h3>
        <p className="text-gray-700 leading-8">
          Certificate aane me aam taur par kuch hafte lag sakte hain, isliye sale registration se kaafi pehle apply karein. Late karne par buyer ko puri rate se hi TDS kaatna padega.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Buyer Ki Responsibilities
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>NRI seller se khareedne wale buyer ko <strong>TAN</strong> lena padta hai</li>
        <li>TDS kaatkar <strong>challan (ITNS 281)</strong> se deposit karna padta hai</li>
        <li><strong>Form 27Q</strong> file karni padti hai aur NRI ko <strong>Form 16A</strong> dena hota hai</li>
        <li>Normal 26QB form jo resident seller ke liye hai, yahan lagu nahi hota. Resident ke liye {" "}<Link href="/blog/tds-on-property-purchase-form-141-26qb" className={linkClass}>26QB guide</Link>{" "} alag hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Sale Ke Baad
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Certificate milne ke baad bhi <strong>ITR file</strong> karni zaroori hai. NRI ke liye form ka guide {" "}<Link href="/blog/nri-itr-filing-which-form-dtaa-relief" className={linkClass}>NRI ITR guide</Link>{" "} me hai</li>
        <li>Jo TDS zyada kata ho, uska <strong>refund</strong> ITR se claim karein</li>
        <li>Sale proceeds ko bahar bhejne ke liye <strong>Form 15CA/15CB</strong> chahiye. Process {" "}<Link href="/nri-fund-repatriation-guide" className={linkClass}>fund repatriation guide</Link>{" "} me hai</li>
        <li>Property ki rent pehle se aa rahi ho to uska alag TDS {" "}<Link href="/blog/nri-rental-income-india-tax-tds-guide" className={linkClass}>NRI rental income guide</Link>{" "} me hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        NRI property sale me lower TDS certificate se lakhon rupaye refund ka intezaar bacha sakte hain. Hamari {" "}<Link href="/nri-tax-services" className={linkClass}>NRI Tax Services</Link>{" "} me Form 13 se lekar ITR aur repatriation tak sab handle hota hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
