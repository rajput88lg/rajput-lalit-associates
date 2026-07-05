"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
      console.error("Contact Email Error:", error);

      setStatus("❌ Failed to Send Message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Contact Us
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Have a question about GST, Income Tax, Accounting or
            Business Compliance? Contact us for professional assistance.
          </p>

        </div>


        {/* MAIN CONTACT AREA */}

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">

          {/* LEFT CONTACT INFORMATION */}

          <div className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-8 md:p-10 shadow-2xl">

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/[0.04]" />

            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#d99a2b]/10 rounded-full" />


            <div className="relative">

              <p className="text-[#f0b84b] font-bold uppercase tracking-[0.2em] text-sm">
                Contact Information
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Professional Support
                <span className="block text-[#f0b84b] mt-2">
                  When You Need It
                </span>
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Reach us by phone, WhatsApp, email or visit our office
                for professional tax, accounting and compliance assistance.
              </p>


              <div className="mt-8 space-y-4">

                {/* PHONE */}

                <a
                  href="tel:+919354953603"
                  className="flex items-start gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4 hover:bg-white/[0.13] transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="font-bold">
                      Phone
                    </p>

                    <p className="text-blue-100 mt-1">
                      +91 9354953603
                    </p>
                  </div>
                </a>


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/919354953603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4 hover:bg-white/[0.13] transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-xl" />
                  </div>

                  <div>
                    <p className="font-bold">
                      WhatsApp
                    </p>

                    <p className="text-blue-100 mt-1">
                      +91 9354953603
                    </p>
                  </div>
                </a>


                {/* EMAIL */}

                <a
                  href="mailto:gst3603@gmail.com"
                  className="flex items-start gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4 hover:bg-white/[0.13] transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="font-bold">
                      Email
                    </p>

                    <p className="text-blue-100 mt-1 break-all">
                      gst3603@gmail.com
                    </p>
                  </div>
                </a>


                {/* ADDRESS */}

                <div className="flex items-start gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4">

                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="font-bold">
                      Office Address
                    </p>

                    <p className="text-blue-100 mt-1 leading-6">
                      1805, Sector-9,
                      <br />
                      Ambala City, Haryana - 134003
                    </p>
                  </div>

                </div>


                {/* HOURS */}

                <div className="flex items-start gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4">

                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <FaClock />
                  </div>

                  <div>
                    <p className="font-bold">
                      Office Hours
                    </p>

                    <p className="text-blue-100 mt-1 leading-6">
                      Monday – Friday: 10:00 AM – 6:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT CONTACT FORM */}

          <div className="bg-white border border-gray-200 rounded-3xl p-7 md:p-10 shadow-xl">

            <div>

              <p className="text-[#d99a2b] font-bold uppercase tracking-[0.15em] text-sm">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                How Can We Help You?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Fill in the form below and share your query with us.
              </p>

            </div>


            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-7 space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Your Name
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]" />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  />

                </div>

              </div>


              {/* PHONE */}

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Mobile Number
                </label>

                <div className="relative">

                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter mobile number"
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                />

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-[#002b5c] hover:bg-[#06477f] text-white px-8 py-4 rounded-xl font-extrabold transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >

                <FaPaperPlane />

                {loading
                  ? "Sending Message..."
                  : "Send Message"}

              </button>


              {/* STATUS */}

              {status && (
                <div
                  className={`text-center font-semibold p-4 rounded-xl border ${
                    status.includes("✅")
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-red-50 border-red-200 text-red-700"
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