import Link from "next/link";

const faqs = [
  {
    q: "TDS return kya hoti hai aur kise file karni chahiye?",
    a: "TDS return ek quarterly statement hai jisme deductor (employer, business ya koi bhi person jo tax deduct karta hai) apne saare TDS deductions, PAN-wise details aur government ko deposit ki gayi tax ki jaankari deta hai. Jis bhi person ke paas TAN hai aur usne kisi bhi payment (salary, rent, professional fees, contractor payment, commission etc.) par TDS deduct kiya hai, use applicable quarterly return file karni hoti hai — chahe TDS amount chhota hi kyun na ho.",
  },
  {
    q: "Form 24Q aur Form 26Q ab kis naam se jaane jaate hain?",
    a: "Income-tax Act, 2025 aur Income-tax Rules, 2026 ke under, Tax Year 2026-27 (1 April 2026 se) ke returns ke liye Form 24Q (salary TDS) ka naam badalkar Form 138 ho gaya hai aur Form 26Q (non-salary resident TDS) ka naam Form 140 ho gaya hai. Purane naam abhi bhi popular hain isliye log inhe '24Q/26Q' hi bolte hain, lekin naya return in naye form numbers mein hi file hota hai.",
  },
  {
    q: "TDS return late file karne par kitna late fee lagta hai?",
    a: "Section 427 (purana Section 234E) ke under, due date ke baad har din ke liye ₹200 late fee lagta hai, jab tak return file nahi hota. Ye fee us quarter ke total TDS/TCS amount se zyada nahi ho sakti. Ye fee mandatory hai — return file karte waqt automatically pay karni padti hai, isme koi discretion nahi hota.",
  },
  {
    q: "Late fee aur penalty mein kya fark hai?",
    a: "Late fee (Section 427) automatic hai aur return submit karte time hi charge ho jaati hai. Penalty (Section 461, purana Section 271H) alag se hai aur Assessing Officer discretion se laga sakta hai — ye ₹10,000 se ₹1,00,000 tak ho sakti hai, agar return bilkul file nahi ki gayi ho ya usme galat jaankari di gayi ho. Agar deductor TDS, interest aur late fee pay kar de aur return due date se 1 saal ke andar file kar de, to aam taur par ye penalty nahi lagti.",
  },
  {
    q: "TDS deposit late karne par interest kaise lagta hai?",
    a: "Section 398(3A) (purana Section 201(1A)) ke under, agar TDS deduct hi nahi kiya gaya to 1% per month interest lagta hai (deduction due date se actual deduction tak), aur agar TDS deduct kar liya lekin government ko deposit nahi kiya to 1.5% per month interest lagta hai (deduction date se actual deposit tak). Mahine ka hissa bhi pura mahina maana jaata hai.",
  },
  {
    q: "TDS certificate (Form 16 / Form 16A) ki bhi koi due date hoti hai?",
    a: "Haan. Tax Year 2026-27 se Form 16 ka naam Form 130 aur Form 16A ka naam Form 131 ho gaya hai. Form 130 (salary certificate) generally us tax year ke baad 15 June tak issue karna hota hai, aur Form 131 (non-salary certificate) quarterly issue hota hai — 15 August, 15 November, 15 February aur agle financial year ki 15 June tak. Certificate late issue karne par bhi separate penalty lag sakti hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSReturnFilingGuide() {
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
        Every business, professional or organisation that deducts TDS —
        whether on salary, rent, professional fees, contractor payments or
        commission — must file a quarterly TDS return with the Income Tax
        Department. From Tax Year 2026-27 (1 April 2026 onwards), TDS return
        filing works under the new{" "}
        <strong>Income-tax Act, 2025</strong>, and the familiar Form 24Q and
        Form 26Q have been replaced with new form numbers. This guide explains
        the current due dates, the new form names, late fee and penalty rules
        in simple language.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Form 24Q → Form 138</strong> (salary TDS) and{" "}
            <strong>Form 26Q → Form 140</strong> (non-salary resident TDS)
            from Tax Year 2026-27
          </li>
          <li>
            <strong>Quarterly due dates:</strong> 31 July, 31 October, 31
            January and 31 May
          </li>
          <li>
            <strong>Late fee:</strong> ₹200 per day under Section 427 (capped
            at the TDS/TCS amount)
          </li>
          <li>
            <strong>Penalty:</strong> ₹10,000 to ₹1,00,000 under Section 461
            for non-filing or incorrect filing
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Must File a TDS Return?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Any person or entity holding a <strong>TAN (Tax Deduction Account
        Number)</strong> who deducts tax at source on payments such as salary,
        rent, professional or technical fees, contractor payments, commission,
        interest or brokerage is required to file the applicable quarterly TDS
        statement — even if the amount deducted in a quarter is small. This
        applies equally to proprietorships, partnership firms, LLPs,
        companies and government offices.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        If you are still setting up your tax compliance or are unsure whether
        a particular payment attracts TDS, it is worth reviewing this
        alongside your regular{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return filing
        </Link>{" "}
        obligations, since TDS credit directly affects the payee&apos;s ITR
        and refund.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Form 24Q/26Q Renamed Under the Income-tax Act, 2025
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        The Income-tax Act, 2025 applies from 1 April 2026 (Tax Year
        2026-27). Along with renumbering many sections, the TDS/TCS return
        forms have also been renamed. The information reported stays
        broadly similar, but returns for Tax Year 2026-27 onwards must be
        filed using the new form numbers — filing with the old form number
        will not be accepted.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Old Form (up to FY 2025-26)</th>
              <th className="border px-4 py-3 text-left">New Form (from Tax Year 2026-27)</th>
              <th className="border px-4 py-3 text-left">Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Form 24Q</td>
              <td className="border px-4 py-3 font-semibold">Form 138</td>
              <td className="border px-4 py-3">TDS on salary payments</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Form 26Q</td>
              <td className="border px-4 py-3 font-semibold">Form 140</td>
              <td className="border px-4 py-3">
                TDS on non-salary payments to residents (rent, professional
                fees, contractor payments, commission, interest etc.)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Form 27Q</td>
              <td className="border px-4 py-3 font-semibold">Form 144</td>
              <td className="border px-4 py-3">TDS on payments to non-residents</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Form 27EQ</td>
              <td className="border px-4 py-3 font-semibold">Form 143</td>
              <td className="border px-4 py-3">TCS (Tax Collected at Source) return</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">
                Form 26QB / 26QC / 26QD / 26QE
              </td>
              <td className="border px-4 py-3 font-semibold">Form 141</td>
              <td className="border px-4 py-3">
                Challan-cum-statement for TDS on property purchase, rent (by
                individuals/HUF), certain contractor/professional payments
                and virtual digital assets
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Return Due Dates (Tax Year 2026-27)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        TDS returns continue to be filed quarterly. The due date is generally
        the last day of the month following the end of the quarter, except
        for the last quarter of the year:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Quarter</th>
              <th className="border px-4 py-3 text-left">Period</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Q1</td>
              <td className="border px-4 py-3">April – June</td>
              <td className="border px-4 py-3">31 July</td>
            </tr>
            <tr className="bg-amber-50">
              <td className="border px-4 py-3 font-semibold">Q2</td>
              <td className="border px-4 py-3">July – September</td>
              <td className="border px-4 py-3">31 October</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Q3</td>
              <td className="border px-4 py-3">October – December</td>
              <td className="border px-4 py-3">31 January</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Q4</td>
              <td className="border px-4 py-3">January – March</td>
              <td className="border px-4 py-3">31 May</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        For Tax Year 2026-27, the Q1 return (Form 138/140) was due on 31 July
        2026. The next upcoming due date is <strong>31 October 2026 for the
        Q2 (July–September) return</strong>, so deductors should start
        reconciling their non-salary and salary TDS data well before that
        date.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Deposit Due Date (Before Filing the Return)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Before filing the quarterly return, the deducted tax itself must be
        deposited to the government within the prescribed time:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          TDS deducted in any month (April to February) must generally be
          deposited by the <strong>7th of the next month</strong>.
        </li>
        <li>
          TDS deducted in <strong>March</strong> must be deposited by{" "}
          <strong>30 April</strong> of the following financial year.
        </li>
        <li>
          For TDS deducted on property purchase, rent by individuals/HUF or
          similar specified payments (reported in Form 141), the
          challan-cum-statement must be filed within 30 days from the end of
          the month in which the deduction was made.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee Under Section 427 (Earlier Section 234E)
      </h2>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-10">
        <h3 className="text-2xl font-bold text-red-700 mb-4">
          ₹200 Per Day Late Fee
        </h3>
        <p className="text-gray-700 leading-8 mb-4">
          If a TDS/TCS return is filed after its due date, Section 427 of the
          Income-tax Act, 2025 (corresponding to the earlier Section 234E)
          levies a mandatory fee of <strong>₹200 for every day of delay</strong>,
          counted from the day after the due date until the return is
          actually filed.
        </p>
        <p className="text-gray-700 leading-8">
          This fee is automatically computed and must be paid before the
          return is accepted. However, the total late fee for a quarter
          cannot exceed the total amount of TDS/TCS deductible for that
          quarter.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Penalty Under Section 461 (Earlier Section 271H)
      </h2>

      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-8 mb-10">
        <h3 className="text-2xl font-bold text-[#002b5c] mb-4">
          ₹10,000 to ₹1,00,000 Penalty
        </h3>
        <p className="text-gray-700 leading-8 mb-4">
          Apart from the late fee, the Assessing Officer may separately levy
          a penalty ranging from <strong>₹10,000 to ₹1,00,000</strong> under
          Section 461 where a TDS/TCS return is not filed at all, or is filed
          with incorrect details such as a wrong PAN or wrong tax amount.
        </p>
        <p className="text-gray-700 leading-8">
          As a relief, this penalty is generally not levied if the deductor
          pays the TDS along with applicable interest and late fee, and files
          the correct return within one year from the due date.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Interest for Late Deduction or Late Deposit
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Interest under Section 398(3A) (earlier Section 201(1A)) applies
        separately from the late fee and penalty:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Default</th>
              <th className="border px-4 py-3 text-left">Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Tax not deducted (from the date it was deductible to the date
                it is actually deducted)
              </td>
              <td className="border px-4 py-3">1% per month</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Tax deducted but not deposited (from the date of deduction to
                the date of actual deposit)
              </td>
              <td className="border px-4 py-3">1.5% per month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        A part of a month is treated as a full month for interest
        calculation. In cases of wilful default in depositing collected tax,
        prosecution provisions under Section 476 may also apply.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS Certificates: Form 130 &amp; Form 131 (Earlier Form 16 &amp; 16A)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        After depositing TDS and filing the return, the deductor must also
        issue a TDS certificate to the deductee. Under the Income-tax Act,
        2025, Form 16 is renamed <strong>Form 130</strong> and Form 16A is
        renamed <strong>Form 131</strong>.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Certificate</th>
              <th className="border px-4 py-3 text-left">For</th>
              <th className="border px-4 py-3 text-left">Frequency &amp; Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">
                Form 130 (earlier Form 16)
              </td>
              <td className="border px-4 py-3">Salary TDS certificate</td>
              <td className="border px-4 py-3">
                Annual — by 15 June following the end of the tax year
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">
                Form 131 (earlier Form 16A)
              </td>
              <td className="border px-4 py-3">Non-salary TDS certificate</td>
              <td className="border px-4 py-3">
                Quarterly — 15 August, 15 November, 15 February and 15 June
                (following the financial year)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Mistakes That Attract Late Fee or Penalty
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Filing the quarterly return after the due date without checking the applicable late fee.</li>
        <li>Quoting an incorrect or unverified PAN of the deductee, leading to defective return notices.</li>
        <li>Mismatch between the TDS deposited (as per challan) and the amount reported in the return.</li>
        <li>Using the old form numbers (24Q/26Q file formats) instead of the current Form 138/140 utility.</li>
        <li>Delaying issue of Form 130/131 (TDS certificates) to employees or vendors.</li>
        <li>Not filing a correction statement promptly after receiving a defective return notice.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How Rajput Lalit &amp; Associates Can Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        We assist proprietorships, firms, LLPs and companies across India
        with TDS applicability review, challan payment, quarterly return
        filing (Form 138/140/141/144), correction statements and timely
        issue of TDS certificates, along with related{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return filing
        </Link>{" "}
        support.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a consultation
        </Link>{" "}
        to get your TDS compliance reviewed before the next due date.
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
        Disclaimer: This article reflects the TDS return filing framework
        under the Income-tax Act, 2025 and Income-tax Rules, 2026 as of
        September 2026, based on publicly available guidance. Provisions,
        form utilities and due dates can be revised by the CBDT from time to
        time, so please verify the latest position on the Income Tax
        Department portal or consult a professional before acting.
      </p>
    </>
  );
}
