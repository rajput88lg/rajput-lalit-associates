import Link from "next/link";

const faqs = [
  {
    q: "IGST kab lagta hai?",
    a: "Jab supplier ki location aur place of supply alag states me hon, ya supply import ya export ho.",
  },
  {
    q: "Buyer ki GST registration state aur place of supply alag ho sakte hain?",
    a: "Haan. Goods me delivery ki location aur services me recipient ki location ya service ke type par place of supply tay hota hai.",
  },
  {
    q: "Agar galat tax head (CGST-SGST ki jagah IGST) lag gaya to?",
    a: "Buyer ko ITC ka problem ho sakta hai. Invoice amend karna ya credit note banakar naya invoice nikalna hota hai. Rules GST law ke hisaab se follow karein.",
  },
  {
    q: "B2C service me place of supply kya hota hai?",
    a: "Jab recipient ka address record me ho, to wahi. Warna supplier ki location place of supply maani jaati hai.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GstPlaceOfSupplyIgstVsCgstSgstRulesBlog() {
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
        Invoice banate waqt sabse pehla sawaal hota hai: IGST lagana hai ya CGST plus SGST? Iska jawab &apos;place of supply&apos; se milta hai. Galat tax head lagane se buyer ko ITC nahi milta aur aapko dobara invoice nikalna padta hai. Is guide me goods aur services dono ke rules simple tareeke se hain.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li><strong>Intra-state:</strong> supplier ki location aur place of supply ek hi state me ho to CGST + SGST</li>
          <li><strong>Inter-state:</strong> dono alag states me ho to IGST</li>
          <li>Goods ke rules IGST Act ki <strong>Section 10</strong> me aur services ke <strong>Section 12 aur 13</strong> me hain</li>
          <li>Goods me aam rule: jahan delivery <strong>khatam</strong> hoti hai, wahi place of supply</li>
          <li>Services me aam rule: B2B me <strong>recipient ki location</strong>, B2C me recipient ka address</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Basic Rule: Intra-State Ya Inter-State
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Situation</th>
              <th className="border px-4 py-3 text-left">Tax</th>
              <th className="border px-4 py-3 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Supplier aur place of supply <strong>ek hi state</strong></td>
              <td className="border px-4 py-3">CGST + SGST</td>
              <td className="border px-4 py-3">Ambala se Panchkula (Haryana)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Supplier aur place of supply <strong>alag states</strong></td>
              <td className="border px-4 py-3">IGST</td>
              <td className="border px-4 py-3">Ambala se Delhi</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Import ya export</td>
              <td className="border px-4 py-3">IGST</td>
              <td className="border px-4 py-3">Foreign buyer ya seller</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Yaad rakhein: tax ka head supplier ki location aur place of supply ke comparison se tay hota hai, buyer ki registration state se nahi. Dono alag cheezein ho sakti hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Goods Ka Place Of Supply (Section 10)
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li><strong>Goods ki movement ho rahi hai:</strong> jahan delivery khatam hoti hai. Delhi ka supplier Ambala ke customer ko maal bhejta hai, to place of supply Haryana</li>
        <li><strong>Movement nahi ho rahi:</strong> jahan goods delivery ke waqt maujood hain</li>
        <li><strong>Bill-to ship-to:</strong> agar buyer ne goods kisi third person ko bhejne ko kaha hai, to place of supply buyer (bill-to party) ki location maani jaati hai</li>
        <li><strong>Goods assemble ya install karne hain:</strong> installation ki jagah place of supply hai</li>
      </ul>

      <div className="bg-blue-50 border-blue-600 border-l-4 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Bill-to ship-to ka example
        </h3>
        <p className="text-gray-700 leading-8">
          Haryana ka dealer A, Punjab ke supplier B se maal mangwa kar seedhe Rajasthan ke customer C ko bhijwata hai. Place of supply A ki location (Haryana) maani jaayegi. B ko A par IGST lagana hoga, aur A apne invoice me C ko alag tax ke saath bill karega.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Services Ka Place Of Supply (Section 12 Aur 13)
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Service type</th>
              <th className="border px-4 py-3 text-left">Place of supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">B2B service (registered recipient)</td>
              <td className="border px-4 py-3">Recipient ki location, yaani uska registered address</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">B2C service (unregistered recipient)</td>
              <td className="border px-4 py-3">Recipient ka address agar record me hai, nahi to supplier ki location</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Immovable property (rent, construction, hotel)</td>
              <td className="border px-4 py-3">Jahan property sthit hai</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Restaurant, event, training jo physically deliver hoti hai</td>
              <td className="border px-4 py-3">Jahan service actually perform hui</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Transport of goods</td>
              <td className="border px-4 py-3">Registered recipient ki location; unregistered ke case me jahan goods transport ke liye handover hue</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Passenger transport (unregistered passenger)</td>
              <td className="border px-4 py-3">Jahan passenger vehicle me chadhta hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Property ki rent par GST ke special rules {" "}<Link href="/blog/gst-on-rent-commercial-residential-property-rcm" className={linkClass}>GST on rent guide</Link>{" "} me aur real estate ke rules {" "}<Link href="/blog/gst-on-real-estate-under-construction-property" className={linkClass}>GST on real estate guide</Link>{" "} me diye gaye hain.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Export Of Services Ka Rule
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Jab supplier India me ho aur recipient India ke bahar, to ye <strong>export of services</strong> ho sakta hai, agar IGST Act ki Section 2(6) ki saari shartein poori hon: supplier India me, recipient India ke bahar, place of supply India ke bahar, payment foreign currency me (ya RBI-permitted tareeke se), aur dono alag legal entities hon. Aisi supply zero-rated hoti hai aur LUT ke saath bina IGST ke ki ja sakti hai. Freelancers ke liye {" "}<Link href="/blog/gst-freelancers-export-of-services-lut" className={linkClass}>LUT guide</Link>{" "} padhein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Galtiyan
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>Buyer ki registration state dekh kar tax head tay kar lena, jabki place of supply alag ho</li>
        <li>Bill-to ship-to case me ship-to state ke hisaab se IGST ya CGST-SGST laga dena</li>
        <li>Service me recipient ka address record na rakhna aur supplier ki state maan lena</li>
        <li>Online services me recipient ki location ka proof na rakhna</li>
        <li>Galat head lagne par ITC reject hota hai aur credit note plus naya invoice banana padta hai</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Invoicing me galat tax head lagne se buyer ke ITC par asar padta hai aur relation kharab hota hai. Hamari {" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing service</Link>{" "} me aise issues pehle se pakde jaate hain. Apne case ke liye {" "}<Link href="/#appointment" className={linkClass}>free consultation</Link>{" "} book karein.
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
        Ye jaankari 30 September 2026 tak ki GST law aur notifications par based hai. GST rules, due dates aur rates badalte rehte hain, isliye koi bhi decision lene se pehle latest notification check karein ya humse consult karein.
      </p>
    </>
  );
}
