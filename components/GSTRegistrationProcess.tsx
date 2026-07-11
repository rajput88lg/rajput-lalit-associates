export default function GSTRegistrationProcess() {
  const steps = [
    {
      title: "Share Your Documents",
      description:
        "Send PAN Card, Aadhaar Card, Address Proof and other required documents.",
    },
    {
      title: "Application Preparation",
      description:
        "Our experts prepare and verify your GST Registration application.",
    },
    {
      title: "GST Portal Submission",
      description:
        "Application is filed on the GST Portal with complete compliance.",
    },
    {
      title: "GSTIN Issued",
      description:
        "After approval, you receive your GST Registration Certificate (GSTIN).",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#002b5c]">
            GST Registration Process
          </h2>

          <p className="mt-4 text-gray-600">
            Simple 4 Step Process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-full bg-[#d99a2b] text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#002b5c]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}