import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Rajput Lalit & Associates",
  description:
    "Terms & Conditions for using the services of Rajput Lalit & Associates.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-[#002B5C] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: July 2026
        </p>

        <section className="space-y-8 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this website, you agree to comply with
              these Terms & Conditions. If you do not agree, please do not use
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              2. Our Services
            </h2>
            <p>
              Rajput Lalit & Associates provides professional services including
              GST Registration, GST Return Filing, Income Tax Return Filing,
              Accounting, TDS, MSME Registration, Company Incorporation, Website
              Development, and Business Consultancy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              3. User Responsibilities
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate and complete information.</li>
              <li>Submit genuine business documents.</li>
              <li>Keep your contact details up to date.</li>
              <li>Cooperate during the service process.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              4. Payments
            </h2>

            <p>
              Professional fees and consultation charges must be paid through
              the approved payment methods available on our website. Government
              fees, taxes, and statutory charges (if applicable) are separate
              unless specifically mentioned.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              5. Appointment Policy
            </h2>

            <p>
              Appointments are confirmed only after successful payment (where
              applicable). Rescheduling requests should be made in advance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              6. Intellectual Property
            </h2>

            <p>
              All website content, including text, graphics, logos, and
              branding, is the property of Rajput Lalit & Associates and may
              not be copied or reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              7. Limitation of Liability
            </h2>

            <p>
              We strive to provide accurate and timely professional services.
              However, we shall not be liable for losses arising from incorrect
              information provided by the client, delays caused by government
              authorities, or circumstances beyond our reasonable control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              8. Changes to These Terms
            </h2>

            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Any changes will be published on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              9. Contact Us
            </h2>

            <p><strong>Rajput Lalit & Associates</strong></p>
            <p>📍 Ambala City, Haryana, India</p>
            <p>📞 +91 93549 53603</p>
            <p>✉️ gst3603@gmail.com</p>

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