import { FaCheckCircle } from "react-icons/fa";

const eligibility = [
  "Businesses crossing the GST turnover limit.",
  "Inter-State suppliers of goods or services.",
  "E-commerce sellers selling through Amazon, Flipkart etc.",
  "Businesses supplying through online platforms.",
  "Casual Taxable Persons.",
  "Input Service Distributors (ISD).",
  "Businesses liable under Reverse Charge Mechanism (RCM).",
  "Existing businesses migrating under GST rules.",
];

export default function GSTEligibility() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-[#d99a2b] font-semibold uppercase tracking-widest">
            Eligibility
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#002b5c]">
            Who Needs GST Registration?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            GST Registration is mandatory for certain businesses under the GST Act.
            If your business falls into any of the following categories, registration
            may be required.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {eligibility.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border rounded-xl hover:shadow-lg transition"
            >
              <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />

              <p className="text-gray-700 text-lg leading-7">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}