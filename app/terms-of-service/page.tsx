import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Rajput Lalit & Associates",
  description:
    "Read the Terms of Service for Rajput Lalit & Associates, covering website use, our GST, Income Tax and Accounting services, and our YouTube channel.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-[#002B5C] mb-6">
          Terms of Service
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: September 2026
        </p>

        <section className="space-y-8 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website of Rajput Lalit & Associates
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;),
              including our free tools, appointment booking system, and our
              YouTube channel (DASHINGLALITT), you agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              2. Services Provided
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>GST Registration and Compliance Services</li>
              <li>Income Tax Filing and Advisory</li>
              <li>Accounting and TDS Services</li>
              <li>Business Registration and LEI Registration</li>
              <li>Free online tools (e.g. NRI Property TDS Calculator, NRI Residential Status Check)</li>
              <li>Educational content on GST and Income Tax published on our YouTube channel (DASHINGLALITT)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              3. Educational Content Disclaimer
            </h2>
            <p>
              Content published on our website and on our YouTube channel
              (DASHINGLALITT) is for general informational and educational
              purposes only and does not constitute professional tax, legal,
              or financial advice. Tax laws and rates change frequently;
              please consult us directly, or verify with official government
              sources, before acting on any information shared in our videos
              or on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              4. User Responsibilities
            </h2>
            <p>
              You agree to provide accurate and complete information when
              using our website, free tools, or booking an appointment, and
              to use our website only for lawful purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              5. Fees and Payment
            </h2>
            <p>
              Fees for our professional services are communicated separately
              and are payable as agreed. Online payments, where applicable,
              are processed through secure third-party payment gateways. We
              do not store your card or banking details on our servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website and on our YouTube channel,
              including text, graphics, logos, and videos, is the property of
              Rajput Lalit & Associates unless otherwise stated, and may not
              be reproduced without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              While we strive for accuracy, Rajput Lalit & Associates shall
              not be held liable for any loss or damage arising from reliance
              on general information provided through our website, free
              tools, or YouTube content, in the absence of a formal client
              engagement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Changes
              will be posted on this page with an updated &ldquo;Last
              Updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India, and any disputes
              shall be subject to the jurisdiction of the courts in Ambala
              City, Haryana.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              10. Contact Us
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
