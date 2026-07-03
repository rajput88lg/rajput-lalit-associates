"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

        if (!form.current) return;

    setLoading(true);
    setStatus("");

    try {

      await emailjs.sendForm(
        "service_omi5m0r",
        "template_ni2x60v",
        form.current,
        "aslDxgzgmR4GWDM2D"
      );

      form.current.reset();

      setStatus("✅ Message Sent Successfully");

    } catch (error) {

      console.log(error);

      setStatus("❌ Failed to Send Message");

    }

    setLoading(false);

  };
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          We'd love to hear from you. Get in touch with us today.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">
                    +91 9354953603
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaWhatsapp className="text-green-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="text-gray-600">
                    +91 9354953603
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-red-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-600">
                    gst3603@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-red-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Office Address</h4>
                  <p className="text-gray-600">
                    1805, Sector-9 <br />
                    Ambala City, Haryana - 134003
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday – Friday <br />
                    10:00 AM – 6:00 PM <br />
                    Saturday & Sunday : Closed
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              Send us a Message
            </h3>

            <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-5"
>
              <input
  type="text"
  name="name"
  required
  placeholder="Your Name"
  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
/>

              <input
  type="email"
  name="email"
  required
  placeholder="Your Email"
  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
/>

              <input
  type="tel"
  name="phone"
  required
  placeholder="Mobile Number"
  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
/>

              <textarea
  rows={6}
  name="message"
  required
  placeholder="Your Message"
  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
/>

              <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? "Sending..." : "Send Message"}
</button>

{status && (
  <div
    className={`text-center font-semibold mt-4 ${
      status.includes("✅") ? "text-green-600" : "text-red-600"
    }`}
  >
    {status}
  </div>
)}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}