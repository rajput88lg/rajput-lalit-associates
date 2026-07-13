import Link from "next/link";
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaHome } from "react-icons/fa";

export const metadata = {
  title: "Appointment Confirmed | Rajput Lalit & Associates",
  description:
    "Your consultation appointment has been successfully booked.",
};

export default function AppointmentSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">

        <FaCheckCircle
          className="mx-auto text-green-600 mb-6"
          size={80}
        />

        <h1 className="text-4xl font-bold text-[#002B5C] mb-4">
          Payment Successful!
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          Thank you for booking your consultation with
          <strong> Rajput Lalit & Associates.</strong>
        </p>

        <p className="text-gray-600 mt-6 leading-8">
          We have received your payment successfully. Our team will review your
          appointment request and contact you shortly to confirm the date and
          time of your consultation.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8 text-left">
          <h2 className="font-semibold text-green-700 mb-3">
            What Happens Next?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Your payment has been successfully received.</li>
            <li>Our team will contact you to confirm your appointment.</li>
            <li>Please keep your payment reference for future communication.</li>
            <li>If required, we may ask you to share relevant documents before the consultation.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">

          <a
            href="tel:+919354953603"
            className="bg-[#002B5C] text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <Link
            href="/"
            className="bg-gray-200 text-gray-800 rounded-lg py-3 font-semibold flex items-center justify-center gap-2 hover:bg-gray-300 transition"
          >
            <FaHome />
            Home
          </Link>

        </div>

      </div>
    </main>
  );
}