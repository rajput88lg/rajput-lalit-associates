import Link from "next/link";

const faqs = [
  {
    q: "Kya YouTube income par tax lagta hai?",
    a: "Haan. YouTube AdSense aur brand deals se kamai business/profession income hai aur slab rates par taxable hai.",
  },
  {
    q: "Kya YouTubers ko GST registration lena padta hai?",
    a: "Jab services ka annual turnover ₹20 lakh cross ho (special category states mein ₹10 lakh). AdSense income aam taur par export of services maani jaati hai, jis par LUT ke saath 0% GST lagta hai.",
  },
  {
    q: "Brand ne free phone diya — kya us par tax lagega?",
    a: "Agar aapne product rakh liya aur saal bhar ke perks ki value ₹20,000 se zyada hai, to brand 10% TDS kaatega aur product ki value aapki income mein aayegi. Product wapas kar diya to tax nahi.",
  },
  {
    q: "Creator ko kaunsi ITR bharni chahiye?",
    a: "Presumptive scheme mein ITR-4, aur actual accounts ke saath ya capital gains hone par ITR-3.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function YoutuberInfluencerIncomeTaxGstGuideBlog() {
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
        YouTube, Instagram ya blog se kamai ab side income nahi, poora career ban chuki hai. Lekin zyada tar creators tab tak tax ke baare mein nahi sochte jab tak notice na aa jaaye. Brand ke saath deal hote hi aapka data AIS mein aa jaata hai. Ye guide creators ke liye tax aur GST ke basic rules simple tarike se samjhati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Creator ki kamai <strong>business/profession income</strong> hai — &apos;hobby income&apos; jaisa kuch nahi</li>
          <li>AdSense, brand deals, affiliate commission, sponsorship — sab taxable</li>
          <li>Brand se ₹20,000+ ke free products/perks par brand 10% TDS kaatta hai (old Section 194R)</li>
          <li>Presumptive scheme (44ADA/44AD) se bina books ke ITR-4 file ho sakti hai</li>
          <li>Services se turnover ₹20 lakh cross hone par GST registration zaroori</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaunsi Income Kaise Taxable Hai
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Income source</th>
              <th className="border px-4 py-3 text-left">Tax treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">YouTube AdSense</td>
              <td className="border px-4 py-3">Business/profession income (Google foreign currency mein pay karta hai)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Brand collaboration / sponsored post</td>
              <td className="border px-4 py-3">Business income; brand TDS kaat sakta hai (professional/technical fees ya contract)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Free products jo rakh liye</td>
              <td className="border px-4 py-3">Market value par income; ₹20,000+ par brand 10% TDS kaatta hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Affiliate commission</td>
              <td className="border px-4 py-3">Business income; commission par TDS lag sakta hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Online course / membership</td>
              <td className="border px-4 py-3">Business income; GST bhi lag sakta hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        44ADA ya 44AD — Kaunsa Presumptive Scheme
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>Section 44ADA</strong> professionals ke liye hai — gross receipts ₹75 lakh tak (agar 95%+ receipts digital hain) ho to receipts ka <strong>50%</strong> profit maan kar tax dena hota hai, books rakhne ki zaroorat nahi. <strong>Section 44AD</strong> business ke liye hai — turnover ₹3 crore tak (digital receipts ke saath) aur digital receipts par <strong>6%</strong> profit.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          44AD chunne par notice aa sakta hai
        </h3>
        <p className="text-gray-700 leading-8">
          6% wala 44AD bahut aakarshak lagta hai, lekin department un creators se sawaal kar raha hai jinka kaam profession jaisa hai (content creation, consultancy). Galat scheme chunna scrutiny ka kaaran ban sakta hai. Apne kaam ki nature dekh kar hi scheme chunein — hamari{" "}<Link href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation" className={linkClass}>44ADA guide</Link>{" "}padhein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaunsi ITR File Karein
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Presumptive scheme (44ADA/44AD) chuni hai: <strong>ITR-4</strong> (limits ke andar)</li>
        <li>Actual income-expenses dikhane hain, ya capital gains bhi hain: <strong>ITR-3</strong></li>
        <li>Actual kharche (camera, editing software, internet, travel) zyada hain to regular books rakh kar ITR-3 behtar pad sakti hai</li>
        <li>Income ₹12 lakh+ ho aur saal ka tax ₹10,000+ ho to{" "}<Link href="/advance-tax-calculator" className={linkClass}>advance tax</Link>{" "}bharna zaroori hai</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST — Kab Registration Lena Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Services ke liye GST registration ki limit <strong>₹20 lakh</strong> (special category states mein ₹10 lakh) hai. Indian brands se deal par 18% GST charge karna hota hai. <strong>AdSense income</strong> jo Google ki foreign entity se foreign currency mein aati hai, aam taur par <strong>export of services</strong> maani jaati hai — LUT file karke 0% GST par ki ja sakti hai. LUT ka process hamari{" "}<Link href="/blog/gst-freelancers-export-of-services-lut" className={linkClass}>export of services guide</Link>{" "}mein hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Creators Ke Liye Checklist
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>AdSense account mein PAN aur tax info update karein — foreign withholding tax kam hota hai (DTAA)</li>
        <li>Har brand deal ka invoice banayein aur payment bank mein lein</li>
        <li>Free products ki list aur value ka record rakhein</li>
        <li>Har quarter AIS check karein — brands ka TDS wahan dikhna chahiye</li>
        <li>Equipment ki bills sambhal kar rakhein (ITR-3 mein depreciation milta hai)</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Creators ke liye ITR, GST registration aur monthly return — sab ek jagah{" "}<Link href="/gst-registration" className={linkClass}>GST Registration</Link>{" "}aur{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing</Link>{" "}services mein cover hota hai. Apni situation discuss karne ke liye{" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "}book karein.
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
        Creator taxation ke rules Income-tax Act aur GST law par based hain; 1 April 2026 se TDS sections Income-tax Act, 2025 ke Section 393 mein aa gaye hain. Ye jaankari 24 September 2026 tak ki hai — apne case ke liye humse consult karein.
      </p>
    </>
  );
}
