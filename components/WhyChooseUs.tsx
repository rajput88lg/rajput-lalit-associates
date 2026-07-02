export default function WhyChooseUs() {
  const features = [
    {
      title: "15+ Years of Experience",
      description:
        "Providing professional GST, Income Tax, Accounting and Compliance services with dedication."
    },
    {
      title: "200+ Happy Clients",
      description:
        "Trusted by individuals, startups and businesses across various industries."
    },
    {
      title: "2500+ Returns Filed",
      description:
        "Successfully filed GST and Income Tax Returns with accuracy and timely compliance."
    },
    {
      title: "Quick Response",
      description:
        "Fast support through Phone, WhatsApp and Email whenever you need assistance."
    },
    {
      title: "Transparent Pricing",
      description:
        "Professional services with clear pricing and no hidden charges."
    },
    {
      title: "Trusted Business Partner",
      description:
        "Helping businesses stay compliant and grow with confidence."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose Rajput Lalit & Associates?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Your Trusted Partner for Tax, Accounting & Business Compliance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                ⭐ {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}