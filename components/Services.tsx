export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Complete Tax, Accounting & Business Compliance Solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              GST Services
            </h3>
            <ul className="space-y-2">
              <li>✔ GST Registration</li>
              <li>✔ GST Return Filing</li>
              <li>✔ GST Notice Reply</li>
              <li>✔ GST Consultancy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Income Tax
            </h3>
            <ul className="space-y-2">
              <li>✔ ITR Filing</li>
              <li>✔ Tax Planning</li>
              <li>✔ Income Tax Notice Reply</li>
              <li>✔ Tax Consultancy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Accounting
            </h3>
            <ul className="space-y-2">
              <li>✔ Bookkeeping</li>
              <li>✔ Accounting</li>
              <li>✔ TDS Return</li>
              <li>✔ Payroll</li>
              <li>✔ Financial Statements</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Business Registration
            </h3>
            <ul className="space-y-2">
              <li>✔ Company Registration</li>
              <li>✔ LLP Registration</li>
              <li>✔ Partnership Firm Registration</li>
              <li>✔ MSME Registration</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Other Professional Services
            </h3>
            <ul className="space-y-2">
              <li>✔ LEI Registration</li>
              <li>✔ IEC Registration</li>
              <li>✔ Trademark Registration</li>
              <li>✔ Digital Signature (DSC)</li>
              <li>✔ PAN / TAN Registration</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}