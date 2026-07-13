import Link from "next/link";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";

export const metadata = {
  title: "Thank You | Rajput Lalit & Associates",
  description:
    "Thank you for contacting Rajput Lalit & Associates. Our team will contact you soon.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">

        <FaCheckCircle
          size={80}
          className="mx-auto text-green-600 mb-6"
        />

        <h1 className="text-4xl font-bold text-[#002B5C] mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          Your enquiry has been submitted successfully.
        </p>

        <p className="mt-5 text-gray-600 leading-8">
          Thank you for contacting <strong>Rajput Lalit & Associates</strong>.
          Our team will review your enquiry and contact you as soon as possible.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 text-left">

          <h2 className="text-xl font-semibold text-[#002B5C] mb-3">
            What Happens Next?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Your enquiry has been received successfully.</li>
            <li>Our team will contact you within business hours.</li>
            <li>Please keep your phone available for our call.</li>
            <li>You may also contact us directly via phone or WhatsApp.</li>
          </ul>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <a
            href="tel:+919354953603"
            className="bg-[#002B5C] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

        <div className="mt-5">

          <a
            href="mailto:gst3603@gmail.com"
            className="inline-flex items-center gap-2 text-[#002B5C] hover:underline"
          >
            <FaEnvelope />
            gst3603@gmail.com
          </a>

        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>
    </main>
  );
}