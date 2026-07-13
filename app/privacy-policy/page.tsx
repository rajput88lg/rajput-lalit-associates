import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Rajput Lalit & Associates",
  description:
    "Read the Privacy Policy of Rajput Lalit & Associates regarding data collection, usage, cookies, and security.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-[#002B5C] mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: July 2026
        </p>

        <section className="space-y-8 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              1. Introduction
            </h2>
            <p>
              Rajput Lalit & Associates values your privacy. This Privacy
              Policy explains how we collect, use, and protect the personal
              information you provide while using our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              2. Information We Collect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Business Information</li>
              <li>GST Related Details (only if shared by you)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>To provide GST and Tax Consultancy.</li>
              <li>To respond to enquiries.</li>
              <li>To schedule appointments.</li>
              <li>To improve our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              4. Payment Information
            </h2>

            <p>
              Online payments are processed through secure third-party payment
              gateways. We do not store your card or banking details on our
              servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              5. Cookies
            </h2>

            <p>
              Our website may use cookies to improve user experience and website
              performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              6. Data Security
            </h2>

            <p>
              We implement appropriate security measures to protect your
              information from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              7. Third Party Services
            </h2>

            <p>
              We may use trusted third-party services such as EmailJS,
              Razorpay, Google Analytics, and Google Maps to provide and improve
              our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              8. Contact Us
            </h2>

            <p>
              Rajput Lalit & Associates
            </p>

            <p>📍 Ambala City, Haryana, India</p>

            <p>📞 +91 93549 53603</p>

            <p>✉ gst3603@gmail.com</p>
          </div>

        </section>

        <div className="mt-12">
          <Link
            href="/"
            className="bg-[#002B5C] text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}