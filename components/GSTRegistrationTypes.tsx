import {
  FaBuilding,
  FaStore,
  FaGlobeAsia,
  FaUniversity,
  FaUsers,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const types = [
  {
    icon: <FaBuilding size={34} />,
    title: "Regular Taxpayer",
    desc: "Suitable for most businesses supplying goods or services across India.",
  },
  {
    icon: <FaStore size={34} />,
    title: "Composition Scheme",
    desc: "Designed for eligible small businesses with simplified GST compliance.",
  },
  {
    icon: <FaGlobeAsia size={34} />,
    title: "Casual Taxable Person",
    desc: "For businesses participating in exhibitions, trade fairs or temporary locations.",
  },
  {
    icon: <FaUsers size={34} />,
    title: "Non-Resident Taxable Person",
    desc: "Applicable for foreign businesses supplying goods or services in India.",
  },
  {
    icon: <FaUniversity size={34} />,
    title: "Input Service Distributor (ISD)",
    desc: "For distribution of Input Tax Credit among different branches.",
  },
  {
    icon: <FaFileInvoiceDollar size={34} />,
    title: "TDS / TCS Registration",
    desc: "Applicable for entities required to deduct or collect tax under GST provisions.",
  },
];

export default function GSTRegistrationTypes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-[#d99a2b] font-semibold uppercase tracking-widest">
            GST Registration
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#002b5c]">
            Types of GST Registration
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Different businesses require different GST registration categories.
            Our experts help you choose the correct registration based on your
            business structure and legal requirements.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-[#d99a2b]">
                {type.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#002b5c]">
                {type.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {type.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}