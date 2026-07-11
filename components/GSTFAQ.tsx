const faqs = [
  {
    question: "GST Registration kitne din me ho jati hai?",
    answer:
      "Normally documents complete hone ke baad 3–7 working days me GST Registration process complete ho jata hai.",
  },
  {
    question: "GST Registration ke liye kaun kaun se documents chahiye?",
    answer:
      "PAN Card, Aadhaar Card, Photograph, Mobile Number, Email ID, Address Proof aur Bank Details.",
  },
  {
    question: "Kya GST Registration online hoti hai?",
    answer:
      "Haan. Pura process online hota hai aur certificate bhi online hi issue hota hai.",
  },
  {
    question: "Kya GST Registration mandatory hai?",
    answer:
      "Ye business turnover aur business nature par depend karta hai. Hum eligibility check karke proper guidance dete hain.",
  },
  {
    question: "Kya aap Ambala ke bahar bhi service dete hain?",
    answer:
      "Haan. Hum Haryana aur India ke clients ko online GST Registration service provide karte hain.",
  },
];
export default function GSTFAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#002b5c]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#002b5c]">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}