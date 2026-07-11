import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    title: "Proprietorship Firm",
    price: "₹5,000",
    note: "Professional Fee",
  },
  {
    title: "Partnership Firm",
    price: "₹10,000",
    note: "Professional Fee",
  },
  {
    title: "Private Limited Company",
    price: "₹30,000",
    note: "Professional Fee",
  },
];

export default function GSTRegistrationFees() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#d99a2b] font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#002b5c]">
            GST Registration Professional Fees
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            Transparent pricing with complete documentation support and
            professional assistance throughout the GST registration process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition"
            >
              <div className="bg-[#002b5c] text-white text-center p-8">

                <h3 className="text-2xl font-bold">
                  {plan.title}
                </h3>

                <div className="mt-6 text-5xl font-extrabold">
                  {plan.price}
                </div>

                <p className="mt-3 text-blue-100">
                  {plan.note}
                </p>

              </div>

              <div className="p-8">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>GST Registration Filing</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Complete Documentation Support</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Application Tracking</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>GST Certificate Assistance</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Professional Consultation</span>
                  </div>

                </div>

                <div className="grid gap-3 mt-8">

                  <a
                    href="tel:+919354953603"
                    className="flex justify-center items-center gap-2 bg-[#002b5c] text-white py-3 rounded-lg font-bold hover:bg-[#001b39] transition"
                  >
                    <FaPhoneAlt />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919354953603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> Above prices are our professional service
            charges. Any applicable statutory or government charges (if
            applicable in a specific case) are separate.
          </p>
        </div>

      </div>
    </section>
  );
}