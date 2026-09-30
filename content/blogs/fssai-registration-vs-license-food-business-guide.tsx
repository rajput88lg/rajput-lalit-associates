import Link from "next/link";

const faqs = [
  {
    q: "FSSAI registration aur license me kya fark hai?",
    a: "Registration chhote food businesses ke liye hai (turnover ₹12 lakh tak). License badi turnover ya specific categories ke liye hai, aur ye state ya central level par hota hai.",
  },
  {
    q: "Kya ghar se tiffin service ke liye FSSAI chahiye?",
    a: "Haan, food business karne par basic registration lena zaroori hai, chahe ghar se hi ho.",
  },
  {
    q: "FSSAI license kitne saal ke liye milta hai?",
    a: "1 se 5 saal tak, jitni validity aap chunte hain. Expiry se pehle renew karwana zaroori hai.",
  },
  {
    q: "Kya online delivery platforms ke liye FSSAI zaroori hai?",
    a: "Haan. Zomato, Swiggy jaise platforms par listing ke liye valid FSSAI number dena padta hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function FssaiRegistrationVsLicenseFoodBusinessGuideBlog() {
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
        Agar aap khaane-peene ka koi bhi business karte hain, jaise restaurant, bakery, sweet shop, dhaba, cloud kitchen ya packaged food, to FSSAI registration ya license lena kanoon ke hisaab se zaroori hai. Lekin teen tarah ke options hain, aur galat wala lene par penalty ka risk rehta hai. Is guide me turnover ke hisaab se sahi option samjhate hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>FSSAI ke <strong>teen levels</strong> hain: Basic Registration, State License aur Central License</li>
          <li>Kaun sa lena hai ye mukhya taur par <strong>annual turnover</strong> aur business ke type par depend karta hai</li>
          <li>Application <strong>FoSCoS portal</strong> par online hoti hai</li>
          <li>Bina license food business karne par <strong>imprisonment aur ₹5 lakh tak fine</strong> ho sakta hai</li>
          <li>Bill aur packaging par <strong>14-digit FSSAI number</strong> dikhana zaroori hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Teen Types Ka Fark
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Type</th>
              <th className="border px-4 py-3 text-left">Annual turnover</th>
              <th className="border px-4 py-3 text-left">Kiske liye</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3"><strong>Basic Registration</strong></td>
              <td className="border px-4 py-3">₹12 lakh tak</td>
              <td className="border px-4 py-3">Chhote dukaandar, hawker, tiffin service, chhoti dhaba</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>State License</strong></td>
              <td className="border px-4 py-3">₹12 lakh se ₹20 crore tak</td>
              <td className="border px-4 py-3">Restaurant, bakery, sweet shop, dairy, cloud kitchen</td>
            </tr>
            <tr>
              <td className="border px-4 py-3"><strong>Central License</strong></td>
              <td className="border px-4 py-3">₹20 crore se zyada, ya specific category</td>
              <td className="border px-4 py-3">Importers, e-commerce food operators, bade manufacturers, multiple states me operations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Turnover ke alawa business ka type aur production capacity bhi dekhi jaati hai. Kuch categories (jaise importers) ke liye turnover kuch bhi ho, central license chahiye hota hai. Exact category aur limits FoSCoS par check kar lein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Zaroori Documents
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Applicant ka <strong>photo ID</strong> (Aadhaar, PAN ya passport)</li>
        <li>Business premises ka <strong>address proof</strong> (rent agreement, bijli bill ya ownership document)</li>
        <li><strong>PAN</strong> (proprietor ya company ka)</li>
        <li>Partnership deed, incorporation certificate ya ownership proof, constitution ke hisaab se</li>
        <li>License me <strong>Food Safety Management Plan</strong>, food products ki list aur layout plan</li>
        <li><strong>Declaration form</strong> aur passport size photo</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Online Apply Kaise Karein
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>FoSCoS (Food Safety Compliance System)</strong> portal par account banayein</li>
        <li>Business type aur turnover ke hisaab se Basic, State ya Central chunein</li>
        <li>Application form me business details aur food products ki list bharein</li>
        <li>Documents upload karein aur fees pay karein</li>
        <li>Application ki scrutiny hoti hai, kabhi kabhi inspection bhi hota hai</li>
        <li>Approve hone par certificate aur <strong>14-digit license number</strong> milta hai</li>
      </ol>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Fees
        </h3>
        <p className="text-gray-700 leading-8">
          Basic registration ki fees kam hoti hai, jabki state aur central license ki fees category aur validity (1 se 5 saal) par depend karti hai. Latest fees FSSAI portal par dekhein.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        License Ke Baad Ki Compliance
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>FSSAI number</strong> bill, menu, packaging aur premises par dikhayein</li>
        <li>License ka <strong>renewal</strong> expiry se pehle karwayein, late renewal par penalty lagti hai</li>
        <li>Kuch categories (manufacturers, importers) ko <strong>annual return (Form D-1)</strong> file karni padti hai</li>
        <li>Hygiene aur food safety standards maintain karein, kyunki inspection ho sakta hai</li>
        <li>Dusri registrations: GST registration {" "}<Link href="/gst-registration" className={linkClass}>GST guide</Link>{" "}, MSME registration {" "}<Link href="/msme-registration" className={linkClass}>MSME guide</Link>{" "}</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Restaurants aur hotels ke GST rules {" "}<Link href="/blog/gst-on-restaurants-hotels-rates-2026" className={linkClass}>GST on restaurants guide</Link>{" "} me hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Bina License Ke Risk
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Bina license food business chalane par <strong>6 mahine tak imprisonment aur ₹5 lakh tak fine</strong> ho sakta hai</li>
        <li>Unsafe food par penalty aur bhi zyada ho sakti hai</li>
        <li>Online platforms (Zomato, Swiggy) par listing ke liye FSSAI number zaroori hota hai</li>
        <li>Bank loan ya MSME benefits ke liye bhi FSSAI proof kaam aata hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Food business shuru karne se pehle FSSAI, GST aur MSME sab ek saath karwana sahi rehta hai. Hamari {" "}<Link href="/services" className={linkClass}>Business Registration services</Link>{" "} ke baare me {" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "} book karke jaan sakte hain.
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
        Ye jaankari 30 September 2026 tak ki hai. Government fees, limits aur procedures badalte rehte hain, isliye apply karne se pehle latest rules check karein ya humse consult karein.
      </p>
    </>
  );
}
