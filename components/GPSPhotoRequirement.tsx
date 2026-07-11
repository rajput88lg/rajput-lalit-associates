import {
  FaCamera,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function GPSPhotoRequirement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-[#d99a2b] font-semibold uppercase tracking-widest">
            Important Requirement
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#002b5c]">
            Business Place GPS Tagged Photo
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            During GST Registration, GST authorities may ask for a GPS Tagged
            (Geo Tagged) photograph of your business premises for address
            verification. We guide you in preparing the correct photo.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          <div className="bg-[#f8fafc] rounded-2xl p-8 border">

            <h3 className="text-2xl font-bold text-[#002b5c] mb-6">
              Photo Should Include
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Clear Front View of Business Premises</p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Business Name Board (if available)</p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Latitude & Longitude (GPS Location)</p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Date & Time Stamp (if required)</p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>High Quality & Clearly Visible Image</p>
              </div>

            </div>

          </div>

          <div className="bg-[#002b5c] text-white rounded-2xl p-8">

            <div className="flex items-center gap-3">

              <FaCamera size={28} className="text-[#f0b84b]" />

              <h3 className="text-2xl font-bold">
                Need Help?
              </h3>

            </div>

            <p className="mt-6 leading-8 text-blue-100">
              Don't worry if you don't know how to capture a GPS Tagged Photo.
              Our team will guide you step-by-step and help you prepare the
              correct photo required for GST Registration.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#f0b84b]" />
                GPS Location Guidance
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-[#f0b84b]" />
                Quick Support
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b]" />
                100% Documentation Assistance
              </div>

            </div>

            <a
              href="https://wa.me/919354953603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-[#d99a2b] hover:bg-[#f0b84b] px-8 py-4 rounded-lg font-bold transition"
            >
              Get WhatsApp Support
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}