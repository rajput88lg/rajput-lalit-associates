import Link from "next/link";

const faqs = [
  {
    q: "Home loan interest par kitni tax deduction milti hai?",
    a: "Self-occupied ghar par old regime mein max ₹2 lakh per saal. Let-out ghar par poora interest deduct hota hai, lekin doosri income se loss set-off ₹2 lakh tak hi hota hai.",
  },
  {
    q: "Kya new tax regime mein home loan ka benefit milta hai?",
    a: "Self-occupied ghar ke liye nahi. Let-out ghar ka interest rental income se deduct hota hai, lekin loss doosri income se set-off nahi hota.",
  },
  {
    q: "Joint home loan mein dono ko benefit milta hai?",
    a: "Haan, agar dono co-owner aur co-borrower hain aur EMI mein contribute karte hain, to dono apni alag limits tak benefit le sakte hain.",
  },
  {
    q: "Pre-construction interest kab claim hota hai?",
    a: "Possession wale saal se shuru karke 5 barabar kiston mein, self-occupied ke case mein ₹2 lakh ki overall limit ke andar.",
  },
  {
    q: "Personal loan lekar ghar banaya to interest deduct hoga?",
    a: "Haan, agar loan ka paisa actually ghar khareedne/banane mein laga aur aapke paas iska proof hai, to lender chahe koi bhi ho, interest deduction mil sakti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function HomeLoanTaxBenefitsSection24b80cBlog() {
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
        Ghar khareedna zindagi ka sabse bada kharcha hota hai, aur home loan ki EMI saalon tak chalti hai. Achhi baat ye hai ki is EMI ke dono hisson — <strong>interest</strong> aur <strong>principal</strong> — par tax benefit milta hai. Lekin ye benefit kaafi had tak aapke chune gaye tax regime par depend karta hai. Ye guide batati hai ki kitna aur kaise milta hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Interest: self-occupied ghar par max ₹2 lakh per saal (Section 24(b)) — sirf old regime</li>
          <li>Principal: Section 80C mein ₹1.5 lakh ki overall limit ke andar — sirf old regime</li>
          <li>Stamp duty aur registration charges bhi 80C mein aate hain (jis saal pay kiye)</li>
          <li>Joint home loan mein har co-owner apna alag-alag benefit le sakta hai</li>
          <li>New regime mein self-occupied ghar ka koi benefit nahi; let-out ghar ka interest deduct hota hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Interest Par Deduction — Section 24(b)
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Jis ghar mein aap rehte hain (self-occupied), uske home loan interest par <strong>saal mein max ₹2,00,000</strong> ki deduction milti hai. Ye limit tab lagti hai jab loan 1 April 1999 ke baad ghar khareedne ya banane ke liye liya ho aur construction 5 saal ke andar poora ho jaaye; nahi to limit ₹30,000 reh jaati hai. Let-out ghar ke case mein poora interest deduct hota hai (kiraye ke against).
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Principal Par Deduction — Section 80C
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        EMI ka principal hissa Section 80C (naye Act mein Section 123) mein aata hai — lekin ye ₹1.5 lakh ki <strong>same limit</strong> mein hai jisme PF, PPF, LIC, ELSS, bachchon ki tuition fee sab aate hain. Agar aapka PF hi ₹1.5 lakh bhar deta hai, to principal ka extra fayda nahi milega. Ek important condition: ghar possession ke <strong>5 saal ke andar bech diya</strong> to pehle liya gaya 80C benefit reverse ho jaata hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Under-Construction Property — Pre-Construction Interest
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Construction ke dauran jo interest diya, uski deduction us waqt nahi milti. Possession milne ke baad ye poora pre-construction interest <strong>5 barabar kiston</strong> mein milta hai — lekin self-occupied ghar ke liye ye bhi usi ₹2 lakh ki overall limit ke andar hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Joint Home Loan — Double Benefit
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar pati-patni (ya koi do log) property ke <strong>co-owner</strong> bhi hain aur <strong>co-borrower</strong> bhi, aur dono EMI mein hissa dete hain, to dono alag-alag ₹2 lakh interest aur ₹1.5 lakh 80C ka benefit le sakte hain. Yaani ek ghar par family ko ₹4 lakh tak interest deduction mil sakti hai. Dono ka naam property documents aur loan dono mein hona zaroori hai.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Benefit</th>
              <th className="border px-4 py-3 text-left">Old regime</th>
              <th className="border px-4 py-3 text-left">New regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Self-occupied interest (24(b))</td>
              <td className="border px-4 py-3">Max ₹2,00,000</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Let-out interest</td>
              <td className="border px-4 py-3">Poora (loss set-off max ₹2 lakh)</td>
              <td className="border px-4 py-3">Poora (loss set-off nahi)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Principal (80C)</td>
              <td className="border px-4 py-3">₹1.5 lakh limit ke andar</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Stamp duty / registration (80C)</td>
              <td className="border px-4 py-3">₹1.5 lakh limit ke andar</td>
              <td className="border px-4 py-3">Nahi milta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Section 80EEA ab naye loans ke liye nahi hai
        </h3>
        <p className="text-gray-700 leading-8">
          Affordable housing par extra ₹1.5 lakh interest deduction (Section 80EEA) sirf un loans ke liye tha jo 31 March 2022 tak sanction hue. Aaj naya loan lene par ye benefit nahi milta — kai purane articles abhi bhi ise dikhate hain.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Kaunsa Regime Chunein
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aapka home loan interest ₹2 lakh ke paas hai, HRA nahi hai aur 80C full use hota hai, to old regime mein kaafi saving ho sakti hai. Agar loan chhota hai ya khatam hone wala hai, to new regime ke kam rates behtar pad sakte hain. Apni EMI ka interest-principal breakup dekhne ke liye{" "}<Link href="/home-loan-emi-calculator" className={linkClass}>Home Loan EMI Calculator</Link>{" "}aur dono regime compare karne ke liye{" "}<Link href="/income-tax-calculator" className={linkClass}>Income Tax Calculator</Link>{" "}use karein. Baaki deductions ke liye hamari{" "}<Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>80C to 80U guide</Link>{" "}dekhein.
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
        Home loan ke tax benefits Income-tax Act ke provisions par based hain (1 April 2026 se Income-tax Act, 2025 mein renumber hue). Ye jaankari 24 September 2026 tak ki hai — apne loan documents ke saath exact benefit ke liye humse consult karein.
      </p>
    </>
  );
}
