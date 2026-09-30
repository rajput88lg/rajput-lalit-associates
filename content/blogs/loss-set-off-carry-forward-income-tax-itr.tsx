import Link from "next/link";

const faqs = [
  {
    q: "Kya business loss ko salary income se set-off kar sakte hain?",
    a: "Nahi. Business loss ko salary income se set-off nahi kar sakte. Wo doosre heads (jaise house property, capital gains) ya aage ke business profit se adjust hota hai.",
  },
  {
    q: "Kitne saal tak loss carry forward ho sakta hai?",
    a: "Business aur capital loss 8 saal, speculative loss 4 saal. Unabsorbed depreciation indefinite.",
  },
  {
    q: "Kya late ITR file karne par loss carry forward hota hai?",
    a: "Aam taur par nahi. Business aur capital loss ke liye ITR due date ke andar file honi chahiye. Sirf house property loss iska exception hai.",
  },
  {
    q: "Kya loss hone par bhi ITR file karni chahiye?",
    a: "Haan, bilkul. Loss carry forward ka fayda tabhi milta hai jab aap ITR time par file karte hain.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function LossSetOffCarryForwardIncomeTaxItrBlog() {
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
        Loss hona bura hai, lekin ITR me us loss ko sahi tarike se dikhana tax bacha sakta hai. Income tax me loss ko usi saal ki doosri income se adjust (set-off) kar sakte hain, aur jo bach jaye use aage ke saalon me carry forward kar sakte hain. Lekin isme kai shartein hain, sabse badi: ITR time par file karna.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Pehle <strong>same head</strong> me set-off hota hai, phir <strong>different head</strong> me</li>
          <li>House property loss ka set-off <strong>₹2 lakh per year</strong> tak hi hota hai</li>
          <li>Non-speculative business loss <strong>8 saal</strong>, speculative loss <strong>4 saal</strong> carry forward ho sakta hai</li>
          <li>Capital loss <strong>8 saal</strong>, long-term loss sirf long-term gain se adjust hota hai</li>
          <li><strong>ITR due date ke andar file</strong> karna zaroori hai, warna zyada tar losses carry forward nahi hote</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Set-Off Kya Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Set-off ka matlab hai ek source ke loss ko usi saal ki doosri income se ghatana. Ye do steps me hota hai: <strong>intra-head</strong> (same head ke andar) aur <strong>inter-head</strong> (alag head ke beech).
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Intra-head:</strong> ek business ka loss doosre business ke profit se, ek property ka loss doosri property ke rent se</li>
        <li><strong>Inter-head:</strong> house property ka loss salary ya business income se (limit ke saath)</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Loss Ke Types Aur Rules
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Loss ka type</th>
              <th className="border px-4 py-3 text-left">Kis se set-off</th>
              <th className="border px-4 py-3 text-left">Carry forward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">House property loss</td>
              <td className="border px-4 py-3">Doosre head ki income se, <strong>₹2 lakh tak</strong></td>
              <td className="border px-4 py-3">8 saal, sirf house property income ke against</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Non-speculative business loss (jaise F&amp;O)</td>
              <td className="border px-4 py-3">Salary ko chhod kar kisi bhi head se</td>
              <td className="border px-4 py-3">8 saal, sirf business income ke against</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Speculative business loss (intraday)</td>
              <td className="border px-4 py-3">Sirf speculative profit se</td>
              <td className="border px-4 py-3">4 saal</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Short-term capital loss</td>
              <td className="border px-4 py-3">Short-term ya long-term capital gain se</td>
              <td className="border px-4 py-3">8 saal</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Long-term capital loss</td>
              <td className="border px-4 py-3">Sirf long-term capital gain se</td>
              <td className="border px-4 py-3">8 saal</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Unabsorbed depreciation</td>
              <td className="border px-4 py-3">Kisi bhi head se (salary chhod kar)</td>
              <td className="border px-4 py-3">Indefinite</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR Time Par File Karna Kyun Zaroori Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Income Tax Act ke hisaab se business loss, capital loss aur speculative loss ko carry forward karne ke liye ITR <strong>due date ke andar (139(1))</strong> file honi chahiye. Late file karne par aap ye losses aage ke saalon me adjust nahi kar sakte. Sirf house property loss ko late ITR ke baad bhi carry forward kiya ja sakta hai. Late ITR ke options {" "}<Link href="/blog/belated-revised-itr-ay-2026-27" className={linkClass}>belated/revised ITR guide</Link>{" "} me hain.
      </p>

      <div className="bg-amber-50 border-amber-500 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Bada nuksaan
        </h3>
        <p className="text-gray-700 leading-8">
          Agar aapko share market me capital loss hua aur aapne ITR time par file nahi ki, to wo loss aage ke saalon ke profit se adjust nahi ho paayega aur aap us par tax bachane ka mauka kho denge. ITR file karna hi nahi, time par file karna zaroori hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Example
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Mohit ko is saal listed shares se short-term capital loss ₹1 lakh hua. Isi saal usse long-term capital gain ₹2 lakh hua. Short-term loss long-term gain se adjust ho sakta hai, to net long-term gain ₹1 lakh rahega, jo ₹1.25 lakh ki LTCG exemption limit ke andar hai, yaani us par tax nahi lagega. Shares ka tax {" "}<Link href="/blog/capital-gains-tax-shares-mutual-funds-stcg-ltcg" className={linkClass}>capital gains guide</Link>{" "} me hai.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Ek aur example: Mohit ko ek property se ₹3 lakh ka house property loss (home loan interest se) hai aur salary ₹10 lakh hai. Is saal sirf ₹2 lakh ka loss salary se set-off hoga. Baaki ₹1 lakh agle saal carry forward hoga.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Regime Me Kya Badla
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        New tax regime me house property loss ka <strong>inter-head set-off allowed nahi</strong> hai, yaani ye loss salary ya business income se adjust nahi hoga. Lekin ise carry forward kiya ja sakta hai aur aage house property income ke against adjust kar sakte hain. Iska asar home loan waalon par padta hai, detail {" "}<Link href="/blog/home-loan-tax-benefits-section-24b-80c" className={linkClass}>home loan guide</Link>{" "} me hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Checklist
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>ITR <strong>due date se pehle</strong> file karein</li>
        <li>Har saal ke losses ka alag record rakhein (kis saal ka, kitna, kitna adjust hua)</li>
        <li>Schedule CFL (Carried Forward Losses) sahi bharein</li>
        <li>Trading loss ke liye {" "}<Link href="/blog/fo-intraday-trading-income-tax-itr-3-guide" className={linkClass}>F&amp;O/intraday guide</Link>{" "} dekhein</li>
        <li>Audit applicable hone par due date ki alag deadline check karein</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Loss ki sahi planning tax ka bada hissa bacha sakti hai. Hamari {" "}<Link href="/income-tax-return-filing" className={linkClass}>ITR Filing service</Link>{" "} me loss carry forward ka record har saal maintain hota hai. {" "}<Link href="/#appointment" className={linkClass}>Free consultation</Link>{" "} book karein.
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
