import Link from "next/link";

const faqs = [
  {
    q: "194C me TDS ki limit kya hai?",
    a: "Ek payment ₹30,000 se zyada, ya saal ke total payments ₹1 lakh se zyada hone par TDS lagta hai.",
  },
  {
    q: "Contractor individual hai to rate kya hai?",
    a: "Individual ya HUF contractor ko payment par 1%, baaki ko 2%.",
  },
  {
    q: "Kya GST amount par bhi TDS kaatna hai?",
    a: "Agar GST invoice me alag dikhaya gaya hai, to TDS GST chhodkar base amount par kaata jaata hai.",
  },
  {
    q: "TDS deposit ki last date kya hai?",
    a: "Agle mahine ki 7 tareekh. March ke TDS ke liye 30 April.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TdsOnContractorPaymentsSection194cRatesDueDatesBlog() {
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
        Agar aap kisi contractor, labour supplier, transporter ya advertising agency ko payment karte hain, to aapko TDS kaatna pad sakta hai. Section 194C ye rule batata hai. TDS na kaatne par expense disallow ho sakta hai aur interest lagta hai, isliye business owners ke liye ye jaanna zaroori hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>194C <strong>work contracts</strong> par lagta hai: construction, labour supply, advertising, catering, transport aadi</li>
          <li>Rate: <strong>1%</strong> (individual/HUF ko payment), <strong>2%</strong> (company/firm aur doosre ko)</li>
          <li>Threshold: ek payment <strong>₹30,000</strong> se zyada ya saal ka total <strong>₹1 lakh</strong> se zyada</li>
          <li>Personal use ke liye kaam karwane wale individual/HUF ko TDS kaatna zaroori nahi</li>
          <li>PAN na dene par rate <strong>20%</strong></li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        194C Kis Par Lagta Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Kisi bhi work ke liye contract: building/road construction, repair, installation</li>
        <li>Labour supply ya manpower contracts</li>
        <li>Advertising contracts (jaise hoarding, production)</li>
        <li>Catering, housekeeping aur security services</li>
        <li>Transport (goods/passenger) carriage ke contracts</li>
        <li>Sub-contractor ko payment</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          194C vs 194J
        </h3>
        <p className="text-gray-700 leading-8">
          Agar kaam &apos;professional ya technical service&apos; hai (jaise CA, lawyer, consultant), to Section 194J lagta hai. Contract for work (kaam ka theka) par 194C lagta hai. Professional fees ka TDS {" "}<Link href="/blog/tds-on-professional-fees-section-194j" className={linkClass}>194J guide</Link>{" "} me hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Rates Aur Limits
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Point</th>
              <th className="border px-4 py-3 text-left">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Rate: Individual/HUF contractor ko payment</td>
              <td className="border px-4 py-3">1%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Rate: Company, firm, LLP ya doosre ko payment</td>
              <td className="border px-4 py-3">2%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">PAN na dene par</td>
              <td className="border px-4 py-3">20%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Single payment ki limit</td>
              <td className="border px-4 py-3">₹30,000 se zyada par TDS lagta hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Saal ke total ki limit</td>
              <td className="border px-4 py-3">₹1,00,000 se zyada par TDS lagta hai (ek se zyada payment)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Dhyan rakhein: agar ek hi contractor ko saal bhar me kai chhote payments hote hain, to total ₹1 lakh cross karte hi TDS lagna shuru ho jaata hai, chahe ek payment ₹30,000 se kam ho.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kin Par 194C Me TDS Nahi Lagta
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Transport contractor jiske paas <strong>10 ya usse kam goods carriages</strong> hain aur wo PAN dekar declaration deta hai</li>
        <li>Individual ya HUF jo apne <strong>personal use</strong> ke liye kaam karwa rahe hain (business ke liye nahi)</li>
        <li>Jis contractor ke paas <strong>lower/nil deduction certificate</strong> hai</li>
        <li>Payment limit se kam hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Ke Saath TDS
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar invoice me GST alag se dikhaya gaya hai, to TDS <strong>GST ko chhodkar</strong> base amount par kaata jaata hai (CBDT circular ke mutabik). Isliye invoice me GST alag likhna zaroori hai. Invoice format {" "}<Link href="/blog/gst-tax-invoice-format-mandatory-fields" className={linkClass}>tax invoice guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deposit Aur Return Ki Due Dates
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>TDS <strong>agle mahine ki 7 tareekh</strong> tak deposit karein (March ka TDS 30 April tak)</li>
        <li>Quarterly <strong>Form 26Q</strong> file karein. Due dates aur late fee {" "}<Link href="/blog/tds-return-filing-due-dates-late-fee" className={linkClass}>TDS return guide</Link>{" "} me hain</li>
        <li>Contractor ko TDS certificate (Form 16A) dein</li>
        <li>Quarterly return me deductee ka PAN sahi ho</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Na Kaatne Ke Nuksaan
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Default</th>
              <th className="border px-4 py-3 text-left">Consequence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">TDS kaata hi nahi</td>
              <td className="border px-4 py-3"><strong>1% per month</strong> interest, kaatne ki date tak</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS kata lekin deposit nahi kiya</td>
              <td className="border px-4 py-3"><strong>1.5% per month</strong> interest</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS na kaatna</td>
              <td className="border px-4 py-3">Expense ka <strong>30%</strong> disallow (Section 40(a)(ia))</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Return late file</td>
              <td className="border px-4 py-3"><strong>₹200 per day</strong> late fee (Section 234E)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Income-tax Act 2025 me 194C ki provision ab Section 393 ki table me hai, lekin rate aur threshold ka basic structure same hai. Business expenses ke aur disallowance rules {" "}<Link href="/blog/business-expenses-allowed-disallowed-40a-3-cash-limit" className={linkClass}>business expenses guide</Link>{" "} me hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        TDS deduction aur return ka timing miss hone par penalty hoti hai. Hamari {" "}<Link href="/tds-return-filing" className={linkClass}>TDS Return Filing service</Link>{" "} me aapke TDS ka poora compliance handle hota hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
