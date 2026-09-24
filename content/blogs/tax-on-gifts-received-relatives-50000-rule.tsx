import Link from "next/link";

const faqs = [
  {
    q: "Kya maa-baap se mile ₹10 lakh par tax lagega?",
    a: "Nahi. Parents 'relative' ki definition mein aate hain, isliye unse mila gift kitna bhi ho, tax-free hai. Gift deed aur bank transfer ka record rakhna achha hai.",
  },
  {
    q: "Dost se ₹60,000 mile to kitne par tax lagega?",
    a: "Poore ₹60,000 par, kyunki saal bhar mein non-relatives ke gifts ka total ₹50,000 se zyada ho gaya.",
  },
  {
    q: "Kya NRI bhai se mila paisa taxable hai?",
    a: "Nahi, bhai relative hai. NRI relative se mila gift bhi tax-free hai; bas bank ka FIRC/credit record rakhein.",
  },
  {
    q: "Gift ko ITR mein dikhana padta hai?",
    a: "Taxable gift 'Income from Other Sources' mein dikhana hota hai. Exempt gifts ko ITR-2/3 mein exempt income schedule mein dikhana behtar practice hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TaxOnGiftsReceivedRelatives50000RuleBlog() {
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
        India mein alag se &apos;gift tax&apos; nahi hai, lekin gift mein mili cheez kai baar aapki <strong>income</strong> maani jaati hai aur us par normal slab rate se tax lagta hai. Achhi baat ye hai ki family se mile gifts pure tax-free hain. Pareshani tab hoti hai jab dost, door ke rishtedaar ya business contacts se gift milta hai. Ye guide ₹50,000 wala rule clear karti hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Non-relatives se saal bhar mein mile gifts ka total ₹50,000 se zyada ho to <strong>poora amount</strong> taxable</li>
          <li>&apos;Relative&apos; se mila gift kitna bhi bada ho, tax-free hai</li>
          <li>Shaadi par mile gifts (kisi se bhi) tax-free hain</li>
          <li>Wirasat/will se mili property ya paisa tax-free hai</li>
          <li>Property gift mein mili to stamp duty value par rule lagta hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ₹50,000 Ka Rule Kaise Kaam Karta Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar kisi saal mein aapko <strong>non-relatives</strong> se gifts mile aur unka <strong>total ₹50,000 se zyada</strong> ho gaya, to poora total amount &apos;Income from Other Sources&apos; mein taxable ho jaata hai — sirf ₹50,000 se upar wala hissa nahi. Example: dost se ₹30,000 aur ek client se ₹25,000 mila — total ₹55,000 hai, to <strong>poore ₹55,000</strong> par tax lagega.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Relative Kaun Hai — Legal List
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Pati/patni (spouse)</li>
        <li>Bhai-behan (aapke aur aapke spouse ke)</li>
        <li>Parents ke bhai-behan (chacha, bua, mama, mausi)</li>
        <li>Lineal ascendants aur descendants — maa-baap, dada-dadi, bachche, pote-potiyan (aapke aur aapke spouse ke)</li>
        <li>Upar di gayi har category ke logon ka spouse</li>
        <li>HUF ke case mein uske members</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Dhyan dein: <strong>dost, cousin (chachere/mamere bhai-behan) aur bhatija/bhanja</strong> is list mein nahi hain. Inse ₹50,000 se zyada gift mila to taxable ho sakta hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaun Se Gifts Hamesha Tax-Free Hain
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Relative se gift (koi bhi amount)</td>
              <td className="border px-4 py-3">Tax-free</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Apni shaadi par mile gifts (kisi se bhi)</td>
              <td className="border px-4 py-3">Tax-free</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Will ya wirasat se mila</td>
              <td className="border px-4 py-3">Tax-free</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Local authority, charitable trust se mila</td>
              <td className="border px-4 py-3">Tax-free</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Non-relatives se total ₹50,000 tak</td>
              <td className="border px-4 py-3">Tax-free</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Non-relatives se total ₹50,000 se zyada</td>
              <td className="border px-4 py-3">Poora amount taxable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Birthday aur anniversary par exemption nahi hai
        </h3>
        <p className="text-gray-700 leading-8">
          Sirf shaadi ke gifts exempt hain. Birthday, anniversary ya tyohaar par dost se mila bada gift ₹50,000 ki limit mein count hota hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Property, Jewellery aur Shares Gift Mein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar non-relative se <strong>zameen/ghar bina paise ke</strong> mila aur uski stamp duty value ₹50,000 se zyada hai, to poori stamp duty value taxable hai. Jewellery, shares, paintings jaisi cheezon par unki <strong>fair market value</strong> dekhi jaati hai. Relative se mili property par koi tax nahi — lekin baad mein bechne par capital gains lagega, jisme purane owner ki cost aur holding period count hota hai. Property bechne ke rules hamari{" "}<Link href="/blog/capital-gains-tax-on-property-sale-section-54" className={linkClass}>property capital gains guide</Link>{" "}mein hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Clubbing Ka Dhyan Rakhein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Patni ko gift diya paisa tax-free hai, lekin us paise se jo income banti hai (FD interest, rent) wo <strong>pati ki income mein club</strong> hoti hai. Isliye tax planning ke liye spouse ke naam investment karte waqt ye rule yaad rakhein. Family ke liye tax planning ke liye{" "}<Link href="/blog/huf-hindu-undivided-family-tax-benefits" className={linkClass}>HUF guide</Link>{" "}bhi useful hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Bade gifts ko hamesha <strong>gift deed</strong> aur bank transfer se document karein — baad mein notice aaye to yahi aapka proof hai. Kisi confusion mein{" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "}book karein.
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
        Gift taxation ke rules Income-tax Act ke tahat hain (1 April 2026 se Income-tax Act, 2025 mein renumber hue, substance same). Ye jaankari 24 September 2026 tak ki hai — bade gifts ke liye humse pehle salah lein.
      </p>
    </>
  );
}
