import Link from "next/link";

const faqs = [
  {
    q: "Property bechne par kitna tax lagta hai 2026 mein?",
    a: "24 mahine se zyada rakhi property par 12.5% LTCG (bina indexation). 23 July 2024 se pehle khareedi property par resident individual/HUF 20% with indexation ka option bhi le sakte hain, jo kam ho.",
  },
  {
    q: "Kya plot bechne par Section 54 milta hai?",
    a: "Section 54 sirf residential ghar bechne par hai. Plot bechne par Section 54F (poori sale value naye ghar mein) ya 54EC bonds ka option hai.",
  },
  {
    q: "Naya ghar khareedne mein kitna time milta hai?",
    a: "Section 54/54F mein bechne se 1 saal pehle ya 2 saal baad tak khareed sakte hain, ya 3 saal mein construct kar sakte hain.",
  },
  {
    q: "Capital gains account scheme kya hai?",
    a: "Agar ITR due date tak paisa naye ghar mein nahi laga, to use bank ki Capital Gains Account Scheme mein jama karke exemption bachayi ja sakti hai; baad mein usi paise se ghar lena hota hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function CapitalGainsTaxOnPropertySaleSection54Blog() {
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
        Property bechte waqt sabse bada sawaal hota hai — &apos;kitna tax lagega aur kaise bachayein?&apos; July 2024 ke Budget ke baad rules badle, aur ab puraani property ke liye aapke paas <strong>do options</strong> hain. Sahi option chunna aur sahi exemption lena lakhon rupaye bacha sakta hai. Ye guide poora process samjhati hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>24 mahine se zyada rakhi property: Long Term Capital Gain (LTCG); kam: Short Term (slab rate)</li>
          <li>23 July 2024 ke baad bechi property par LTCG <strong>12.5% bina indexation</strong></li>
          <li>23 July 2024 se <strong>pehle khareedi</strong> property: resident individual/HUF 12.5% (bina indexation) aur 20% (indexation ke saath) mein se kam wala chun sakte hain</li>
          <li>Section 54/54F mein naye ghar mein invest karke exemption — max ₹10 crore tak</li>
          <li>Section 54EC bonds mein 6 mahine mein ₹50 lakh tak invest karke exemption</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Short Term vs Long Term
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Holding period</th>
              <th className="border px-4 py-3 text-left">Type</th>
              <th className="border px-4 py-3 text-left">Tax rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">24 mahine tak</td>
              <td className="border px-4 py-3">Short Term Capital Gain</td>
              <td className="border px-4 py-3">Aapke income slab ke hisaab se</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">24 mahine se zyada</td>
              <td className="border px-4 py-3">Long Term Capital Gain</td>
              <td className="border px-4 py-3">12.5% (ya grandfathered option mein 20% with indexation)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Gift ya wirasat mein mili property ke case mein, purane owner ka holding period bhi count hota hai aur unki cost hi aapki cost maani jaati hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        12.5% vs 20% — Grandfathering Option
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Budget 2024 ne property par indexation hata kar LTCG rate 12.5% kar diya. Lekin <strong>resident individuals aur HUF</strong> jinki property <strong>23 July 2024 se pehle</strong> khareedi gayi thi, wo tax dono tarike se calculate karke <strong>jo kam aaye</strong> wo chun sakte hain:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Option A:</strong> (Sale price − actual cost) × 12.5%</li>
        <li><strong>Option B:</strong> (Sale price − indexed cost) × 20%</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        <strong>Example:</strong> 2010 mein ₹20 lakh ka plot khareeda, 2026 mein ₹80 lakh mein becha. Option A: ₹60 lakh × 12.5% = ₹7.5 lakh. Option B: indexed cost maan lijiye ₹45 lakh, to ₹35 lakh × 20% = ₹7 lakh. Yahan Option B sasta hai. Purani property mein aksar indexation wala option faydemand hota hai, nayi property mein 12.5% wala.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Loss hone par dhyan dein
        </h3>
        <p className="text-gray-700 leading-8">
          Indexation se bana &apos;loss&apos; grandfathered option mein set-off ya carry forward ke liye available nahi hai — sirf tax ki tulna ke liye option hai. Isliye final computation professional se karwana behtar hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tax Bachane Ke Exemptions
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Section</th>
              <th className="border px-4 py-3 text-left">Kab milta hai</th>
              <th className="border px-4 py-3 text-left">Kya karna hai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">54</td>
              <td className="border px-4 py-3">Residential ghar becha</td>
              <td className="border px-4 py-3">LTCG ka amount naye ghar mein — bechne se 1 saal pehle ya 2 saal baad khareedein, ya 3 saal mein banayein</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">54F</td>
              <td className="border px-4 py-3">Ghar ke alawa koi long-term asset (plot, shop, gold) becha</td>
              <td className="border px-4 py-3">Poori net sale value naye ghar mein invest karein (proportionate exemption milti hai)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">54EC</td>
              <td className="border px-4 py-3">Zameen/building becha</td>
              <td className="border px-4 py-3">Bechne ke 6 mahine mein NHAI/REC jaise specified bonds mein max ₹50 lakh; 5 saal lock-in</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Section 54 aur 54F mein exemption ki <strong>maximum limit ₹10 crore</strong> hai. Agar ITR ki due date tak naya ghar nahi khareeda, to utna amount <strong>Capital Gains Account Scheme</strong> (bank mein) mein jama karna zaroori hai — warna exemption nahi milegi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS aur Doosri Zaroori Baatein
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Khareedar ₹50 lakh+ ki property par 1% TDS kaatta hai —{" "}<Link href="/blog/tds-on-property-purchase-form-141-26qb" className={linkClass}>property TDS guide</Link>{" "}dekhein</li>
        <li>Seller NRI hai to TDS kaafi zyada hota hai —{" "}<Link href="/blog/nri-sale-of-inherited-property-tax-tds-guide" className={linkClass}>NRI inherited property guide</Link>{" "}aur{" "}<Link href="/nri-property-tds-calculator" className={linkClass}>NRI Property TDS Calculator</Link>{" "}</li>
        <li>Sale price stamp duty value se kam hai (10% se zyada farak) to stamp duty value hi sale price maani jaati hai</li>
        <li>Brokerage, legal fees aur improvement ke kharche (bills ke saath) cost mein jud sakte hain</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Property sale ka tax computation aur ITR-2 filing hamari{" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR filing service</Link>{" "}mein ki jaati hai. Bade transaction se pehle{" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "}zaroor lein.
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
        Capital gains ke rates Finance Act 2024 ke baad ke hain; 1 April 2026 se capital gains ke provisions Income-tax Act, 2025 mein renumber hue hain. Ye jaankari 24 September 2026 tak ki hai — property sale se pehle humse exact computation karwayein.
      </p>
    </>
  );
}
