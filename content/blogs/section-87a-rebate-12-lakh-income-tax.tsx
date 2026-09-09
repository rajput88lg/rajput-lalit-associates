export default function Section87ARebate12LakhIncomeTax() {
  const marginalReliefRows = [
    { income: "₹12,00,000", tax: "₹60,000", excess: "₹0", payable: "₹0" },
    { income: "₹12,10,000", tax: "₹61,500", excess: "₹10,000", payable: "₹10,000" },
    { income: "₹12,50,000", tax: "₹67,500", excess: "₹50,000", payable: "₹50,000" },
  ];

  const slabRows = [
    { range: "Up to ₹4,00,000", rate: "Nil" },
    { range: "₹4,00,001 – ₹8,00,000", rate: "5%" },
    { range: "₹8,00,001 – ₹12,00,000", rate: "10%" },
    { range: "₹12,00,001 – ₹16,00,000", rate: "15%" },
    { range: "₹16,00,001 – ₹20,00,000", rate: "20%" },
    { range: "₹20,00,001 – ₹24,00,000", rate: "25%" },
    { range: "Above ₹24,00,000", rate: "30%" },
  ];

  const faqs = [
    {
      q: "Kya ₹12 lakh income par sach mein zero tax lagta hai?",
      a: "Haan, naye tax regime mein agar aapki total taxable income ₹12 lakh tak hai, to Section 87A ke under ₹60,000 tak ka rebate milta hai, jisse tax payable Nil ho jaata hai.",
    },
    {
      q: "Salaried employees ke liye limit kitni hai?",
      a: "Salaried individuals ko ₹75,000 ka standard deduction bhi milta hai, isliye unke liye effective tax-free income limit ₹12.75 lakh tak ho jaati hai.",
    },
    {
      q: "Agar income ₹12 lakh se thodi zyada ho to kya hota hai?",
      a: "Marginal relief provision ke wajah se aapko sirf ₹12 lakh se upar ki excess income jitna hi tax dena padta hai, poore slab ke hisaab se tax nahi lagta. Ye relief lagbhag ₹12.75 lakh income tak available hai.",
    },
    {
      q: "Kya ye rebate old tax regime mein bhi milta hai?",
      a: "Old regime mein Section 87A rebate sirf ₹12,500 tak hai, aur wo bhi sirf ₹5 lakh tak ki taxable income par milta hai. ₹60,000 wala rebate sirf new tax regime ke liye hai.",
    },
    {
      q: "Kya capital gains par bhi ye rebate milega?",
      a: "Nahi. Section 111A (short-term capital gains), Section 112/112A (long-term capital gains) aur lottery jaisi special rate income par ye rebate apply nahi hota, chahe total income ₹12 lakh se kam hi kyun na ho.",
    },
    {
      q: "Rebate claim karne ke liye kya karna padta hai?",
      a: "Rebate automatically ITR filing ke waqt calculate ho jaata hai jab aap new tax regime select karte hain. Alag se koi application dene ki zaroorat nahi hoti, bas ITR sahi tarike se aur time par file karna zaroori hai.",
    },
  ];

  return (
    <>
      <p className="text-gray-700 leading-8 mb-6">
        Budget 2025 ke baad se ek sawaal sabse zyada pucha ja raha hai — <strong>&quot;kya ₹12 lakh tak income par sach mein koi tax nahi lagta?&quot;</strong> Iska jawaab hai haan, lekin iske peeche ek specific provision kaam karta hai jise <strong>Section 87A Rebate</strong> kehte hain. Is guide mein hum simple bhasha mein samjhenge ki ye rebate kaise kaam karta hai, kise milta hai, aur agar aapki income ₹12 lakh se thodi upar ho to kya hota hai.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">Quick Answer</h3>
        <p className="text-gray-700 leading-8">
          New tax regime mein, agar resident individual ki total taxable income ₹12,00,000 tak hai, to Section 87A ke under ₹60,000 tak ka rebate milta hai — jisse tax payable Nil ho jaata hai. Salaried employees ke liye ₹75,000 standard deduction milane par ye limit ₹12.75 lakh tak badh jaati hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Section 87A Rebate Kya Hai?</h2>
      <p className="text-gray-700 leading-8 mb-10">
        Section 87A, Income Tax Act ka ek provision hai jo eligible resident individuals ko unki tax liability se seedha rebate deta hai — matlab slab ke hisaab se calculate hui tax ko is rebate se kam kar diya jaata hai. Budget 2025 mein iss rebate ki limit new tax regime ke liye badhakar ₹60,000 kar di gayi, jo pehle ₹25,000 thi.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">New Tax Regime Slab Rates (FY 2026-27)</h2>
      <p className="text-gray-700 leading-8 mb-6">
        Rebate samajhne se pehle, new regime ke slab rates dekh lete hain jinke upar ye rebate apply hota hai:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3">Income Range</th>
              <th className="border px-4 py-3">Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {slabRows.map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-3">{row.range}</td>
                <td className="border px-4 py-3">{row.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">₹12 Lakh Tak Zero Tax Kaise Ho Jaata Hai?</h2>
      <p className="text-gray-700 leading-8 mb-4">
        Agar total taxable income exactly ₹12,00,000 hai, to slab ke hisaab se tax calculate hoga ₹60,000 — lekin Section 87A ke under aapko poora ₹60,000 ka rebate mil jaata hai, isliye final tax payable ho jaata hai <strong>₹0</strong>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-8">
          <strong>Salaried employees ke liye:</strong> ₹75,000 ka standard deduction milane ke baad, gross salary ₹12,75,000 tak bhi ho to bhi taxable income ₹12 lakh reh jaati hai — matlab effective tax-free income limit ₹12.75 lakh tak ho jaati hai.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Agar Income ₹12 Lakh Se Thodi Zyada Ho To?</h2>
      <p className="text-gray-700 leading-8 mb-6">
        Yahan par <strong>Marginal Relief</strong> ka concept aata hai. Bina marginal relief ke, ₹12 lakh se sirf ₹1 zyada income hone par bhi poora ₹60,000 ka rebate khatam ho jaata — jo unfair hota. Isliye ye provision ensure karta hai ki aapko sirf ₹12 lakh se upar ki excess income jitna hi extra tax dena pade, poore slab ka tax nahi.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3">Taxable Income</th>
              <th className="border px-4 py-3">Slab Tax</th>
              <th className="border px-4 py-3">Excess over ₹12L</th>
              <th className="border px-4 py-3">Tax Payable (after relief)</th>
            </tr>
          </thead>
          <tbody>
            {marginalReliefRows.map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-3">{row.income}</td>
                <td className="border px-4 py-3">{row.tax}</td>
                <td className="border px-4 py-3">{row.excess}</td>
                <td className="border px-4 py-3 font-semibold">{row.payable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Marginal relief ka benefit lagbhag ₹12.75 lakh taxable income tak milta rehta hai, uske baad normal slab rates hi apply hote hain (cess alag se add hoga).
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Ye Rebate Kis Par Apply Nahi Hota</h2>
      <p className="text-gray-700 leading-8 mb-4">
        Section 87A rebate har type ki income par apply nahi hota. Ye niche di gayi &quot;special rate&quot; incomes par available nahi hai, chahe total income ₹12 lakh se kam hi kyun na ho:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Short-term capital gains under Section 111A</li>
        <li>Long-term capital gains under Sections 112 aur 112A</li>
        <li>Lottery, betting ya casual income jaisi special rate income</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Old Tax Regime Mein Ye Rebate</h2>
      <p className="text-gray-700 leading-8 mb-10">
        Old tax regime mein Section 87A rebate ki limit alag hai — sirf ₹12,500 tak, aur wo bhi sirf un individuals ko milta hai jinki taxable income ₹5 lakh tak hai. ₹60,000 wala badha hua rebate sirf new tax regime choose karne walon ke liye hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Rebate Claim Kaise Karein</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Alag se koi application ya form fill karne ki zaroorat nahi hoti.</li>
        <li>New tax regime select karke ITR file karte waqt rebate automatically calculate ho jaata hai.</li>
        <li>Sirf ye ensure karein ki income sahi tarike se report ho aur ITR time par file ho.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">Professional Advice Zaroori Hai</h3>
        <p className="text-gray-700 leading-8">
          Agar aapki income ₹12 lakh ke aas-paas hai, ya aapke paas capital gains jaisi special rate income bhi hai, to rebate aur marginal relief ka sahi calculation thoda complex ho sakta hai. Aisi situation mein CA ya tax expert se salah lena best rehta hai, taaki aap sahi tax pay karein aur koi notice na aaye.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Frequently Asked Questions</h2>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
