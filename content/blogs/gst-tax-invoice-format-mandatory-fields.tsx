import Link from "next/link";

const faqs = [
  {
    q: "Kya GST invoice handwritten ho sakta hai?",
    a: "Haan, agar usme Rule 46 ki saari mandatory details hain to handwritten invoice bhi valid hai. Lekin e-invoice wale businesses ke liye B2B invoice IRP par generate karna zaroori hai.",
  },
  {
    q: "Invoice number har saal naye se shuru kar sakte hain?",
    a: "Haan, har financial year mein naya series shuru kar sakte hain, bas year ke andar number unique aur consecutive hona chahiye.",
  },
  {
    q: "Bill of supply kab banana hota hai?",
    a: "Jab aap composition scheme mein hon ya exempt/non-taxable supply kar rahe hon, tab tax invoice ki jagah bill of supply banta hai.",
  },
  {
    q: "Invoice copies kitni banani hoti hain?",
    a: "Goods ke liye teen copies (original for recipient, duplicate for transporter, triplicate for supplier) aur services ke liye do copies. E-invoice ya e-way bill wale cases mein digital record kaafi hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstTaxInvoiceFormatMandatoryFieldsBlog() {
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
        GST mein invoice sirf ek bill nahi hai — yahi document aapke customer ke Input Tax Credit ka aadhar hai. Invoice mein ek zaroori detail bhi missing ho to customer ka ITC atak sakta hai aur notice ke waqt aapka case kamzor ho jaata hai. Ye guide batati hai ki ek valid GST invoice mein kya-kya hona chahiye.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Tax invoice ke mandatory fields CGST Rules ke Rule 46 mein diye gaye hain</li>
          <li>Invoice number ek financial year mein unique aur consecutive hona chahiye (max 16 characters)</li>
          <li>Composition dealer ya exempt supply par tax invoice nahi, <strong>bill of supply</strong> banta hai</li>
          <li>₹5 crore se zyada turnover par B2B invoices ke liye e-invoice (IRN) zaroori hai</li>
          <li>Inter-state supply mein IGST, intra-state mein CGST + SGST alag dikhana hota hai</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Valid Tax Invoice Ke Mandatory Fields
      </h2>

      <ol className="list-decimal pl-6 text-gray-700 leading-8 mb-10">
        <li>Supplier ka naam, address aur GSTIN</li>
        <li>Invoice number — unique, consecutive, 16 characters tak (letters, numbers, &apos;-&apos; aur &apos;/&apos; allowed)</li>
        <li>Invoice ki date</li>
        <li>B2B mein recipient ka naam, address aur GSTIN</li>
        <li>B2C mein ₹50,000 se zyada ki unregistered sale par recipient ka naam, address aur delivery address</li>
        <li>HSN code (goods) ya SAC code (services) — turnover ke hisaab se 4 ya 6 digit</li>
        <li>Goods/service ka description, quantity aur unit</li>
        <li>Total value aur taxable value (discount ke baad)</li>
        <li>Tax rate aur tax amount — CGST, SGST/UTGST ya IGST alag-alag</li>
        <li>Place of supply (state ke naam ke saath) — inter-state supply mein zaroori</li>
        <li>Reverse charge lagta hai ya nahi — iska mention</li>
        <li>Supplier ya authorised person ka signature ya digital signature</li>
      </ol>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        HSN Code Kitne Digit Ka
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Pichle saal ka turnover</th>
              <th className="border px-4 py-3 text-left">HSN digits (invoice par)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">₹5 crore tak</td>
              <td className="border px-4 py-3">4 digit (B2B invoice par zaroori)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">₹5 crore se zyada</td>
              <td className="border px-4 py-3">6 digit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tax Invoice vs Bill of Supply
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Agar aap <strong>composition scheme</strong> mein hain ya <strong>exempt goods/services</strong> (jaise fresh vegetables) bech rahe hain, to aap tax invoice nahi bana sakte — aapko <strong>bill of supply</strong> banana hota hai, jismein GST charge nahi hota. Composition dealer ko bill par &apos;composition taxable person, not eligible to collect tax on supplies&apos; likhna zaroori hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        E-Invoice Kab Zaroori Hai
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Jin businesses ka kisi bhi saal ka aggregate turnover ₹5 crore se zyada raha hai, unhe B2B invoices ke liye e-invoice (IRP par IRN generate karke QR code ke saath) banana zaroori hai. Iski poori details hamari{" "}<Link href="/blog/e-invoicing-mandatory-2026-turnover-limit-guide" className={linkClass}>e-invoicing guide</Link>{" "}mein hain.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Ye galtiyan customer ka ITC rok deti hain
        </h3>
        <p className="text-gray-700 leading-8">
          Galat GSTIN, galat place of supply (IGST ki jagah CGST+SGST), invoice number ka repeat hona, aur GSTR-1 mein invoice report na karna — ye chaar sabse common galtiyan hain. Customer ko ITC tabhi milta hai jab invoice unke GSTR-2B mein dikhe, isliye GSTR-1 time par file karna utna hi zaroori hai jitna sahi invoice banana.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Invoice Kab Issue Karna Hai
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Goods: goods ki removal/delivery se pehle ya uske waqt</li>
        <li>Services: service dene ke 30 din ke andar (banks/NBFC ke liye 45 din)</li>
        <li>Advance milne par: receipt voucher, aur baad mein tax invoice</li>
        <li>Return/rate change par: credit note ya debit note — original invoice edit nahi hota</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Invoice sahi banane ke saath-saath monthly GSTR-1 aur GSTR-3B ka match hona bhi zaroori hai. Invoices ki sahi reporting ke liye{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>{" "}service, aur naye IMS system ke liye hamari{" "}<Link href="/blog/gst-invoice-management-system-ims-guide" className={linkClass}>Invoice Management System guide</Link>{" "}dekhein.
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
        Invoice rules CGST Rules 2017 (Rule 46, 48, 49) par based hain. Ye jaankari 24 September 2026 tak ki hai — apne business ke invoice format ka review karwane ke liye humse sampark karein.
      </p>
    </>
  );
}
