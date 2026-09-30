import Link from "next/link";

const faqs = [
  {
    q: "Cash payment ki limit kya hai?",
    a: "Ek din me ek vyakti ko ₹10,000 se zyada cash me payment karne par kharcha disallow ho jaata hai (goods carriage hire ke liye ₹35,000).",
  },
  {
    q: "Kya personal kharche business me claim kar sakte hain?",
    a: "Nahi. Sirf business ke liye kiye gaye kharche allowed hain.",
  },
  {
    q: "TDS na kaatne par kya hota hai?",
    a: "Us expense ka 30% disallow ho jaata hai, aur interest aur penalty alag se lag sakte hain.",
  },
  {
    q: "Kya bina bill ke kharcha claim ho sakta hai?",
    a: "Technically ho sakta hai, lekin proof ke bina department disallow kar sakta hai. Bill aur bank payment hamesha rakhein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function BusinessExpensesAllowedDisallowed40a3CashLimitBlog() {
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
        Business ka tax profit par lagta hai, aur profit = income minus expenses. Isliye kaun sa kharcha profit se ghatane layak hai aur kaun sa nahi, ye jaanna seedha tax bachata hai. Lekin kuch kharche, bhale business ke hi ho, cash me payment ya TDS ki galti ki wajah se disallow ho jaate hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Sirf wo kharche allowed hain jo <strong>business ke liye hi</strong> aur <strong>revenue nature</strong> ke ho (Section 37(1))</li>
          <li><strong>Cash payment ₹10,000 se zyada</strong> ek din me ek vyakti ko karne par kharcha <strong>disallow</strong> (40A(3))</li>
          <li><strong>TDS na kaatne</strong> par kharche ka <strong>30%</strong> disallow (40(a)(ia))</li>
          <li>MSME ko <strong>45 din</strong> ke andar payment na karne par bhi disallowance ho sakta hai</li>
          <li>Personal, penalty aur capital kharche allowed nahi</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Allowed Kharche
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Rent, bijli, pani, internet aur phone</li>
        <li>Employees ki salary, bonus aur staff welfare</li>
        <li>Business loan par interest</li>
        <li>Stock ki purchase aur transport</li>
        <li>Repair aur maintenance (capital nature ka nahi)</li>
        <li>Insurance premium (business assets ka)</li>
        <li>Advertising aur marketing</li>
        <li>Accounting, audit aur professional fees</li>
        <li>Depreciation (assets par)</li>
        <li>Bad debts jo books me write-off hue</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Cash Payment Ki Limit: Section 40A(3)
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap kisi ek vyakti ko ek din me <strong>₹10,000 se zyada</strong> ka payment cash me karte hain, to wo poora kharcha disallow ho jaata hai, yaani profit se nahi ghata sakte. Goods carriage ko hire ya lease par lene ke payment ke liye limit ₹35,000 hai. Digital payment (bank transfer, UPI, cheque) karna iska simple solution hai.
      </p>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Example
        </h3>
        <p className="text-gray-700 leading-8">
          Aapne ek supplier ko ek din me ₹25,000 cash me de diye. Ye poore ₹25,000 disallow honge. Agar wahi payment UPI ya NEFT se hota, to poora expense allowed hota. Ek hi din me kai chhote payments ek hi vyakti ko karne par unhe jodkar dekha jaata hai.
        </p>
      </div>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Kuch exceptions hain (Rule 6DD), jaise gaon me jahan banking facility nahi hai</li>
        <li>Bank ki holiday ya bank strike jaise special cases</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Expenses Jo Disallow Ho Sakte Hain
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Kharcha</th>
              <th className="border px-4 py-3 text-left">Kyun disallow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Personal expenses (ghar, family)</td>
              <td className="border px-4 py-3">Business ke liye nahi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Income tax aur penalty</td>
              <td className="border px-4 py-3">Tax aur fine business expense nahi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Capital expenditure (machine, building)</td>
              <td className="border px-4 py-3">Sirf depreciation milta hai, poora kharcha nahi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Cash payment ₹10,000+</td>
              <td className="border px-4 py-3">Section 40A(3)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">TDS nahi kaata ya deposit nahi kiya</td>
              <td className="border px-4 py-3">30% disallow, Section 40(a)(ia). Rules {" "}<Link href="/blog/tds-return-filing-due-dates-late-fee" className={linkClass}>TDS return guide</Link>{" "} aur {" "}<Link href="/blog/tds-on-contractor-payments-section-194c-rates-due-dates" className={linkClass}>194C guide</Link>{" "} me</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">MSME ko 45 din ke baad payment</td>
              <td className="border px-4 py-3">43B(h), jab tak payment na ho. Detail {" "}<Link href="/blog/msme-45-day-payment-rule-section-43b-h" className={linkClass}>MSME guide</Link>{" "} me</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Related party ko zyada payment</td>
              <td className="border px-4 py-3">40A(2), excess hissa disallow</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Employee ka PF/ESI late deposit</td>
              <td className="border px-4 py-3">Due date ke baad deposit hone par disallow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Books Aur Proof Kyun Zaroori Hain
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Income tax department expenses ko tabhi accept karta hai jab wo <strong>books me record</strong> ho aur <strong>bill ya proof</strong> maujood ho. Bina bill ke kharcha claim karne par disallowance ka risk badhta hai. Accounting ke types {" "}<Link href="/blog/accrual-vs-cash-accounting-small-business" className={linkClass}>accrual vs cash guide</Link>{" "} me hain, aur monthly books ke fayde {" "}<Link href="/blog/why-small-businesses-need-monthly-bookkeeping" className={linkClass}>bookkeeping guide</Link>{" "} me.
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Har kharche ka <strong>GST bill</strong> ya invoice rakhein</li>
        <li>Bank se payment karein taaki proof ban jaaye</li>
        <li>Personal aur business bank account alag rakhein</li>
        <li>GST ITC ke liye bhi bill zaroori hai. ITC rules {" "}<Link href="/blog/input-tax-credit-gst-rules-reversal" className={linkClass}>ITC guide</Link>{" "} me hain</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Presumptive Taxation Me Expenses
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap 44AD ya 44ADA jaisi presumptive scheme me hain, to alag se expenses claim nahi karte, kyunki profit ek percentage par maana jaata hai. Scheme ke rules {" "}<Link href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation" className={linkClass}>44ADA guide</Link>{" "} me hain.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Kharche sahi tarike se claim karna profit aur tax dono par asar daalta hai. Hamari {" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>Accounting &amp; Bookkeeping service</Link>{" "} me books aur tax compliance dono handle hote hain. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
