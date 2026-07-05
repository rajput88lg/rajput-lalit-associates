"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  CalendarDays,
  Clock,
  Mail,
  Phone,
  User,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

type AppointmentFormProps = {
  service: string;
  paymentId: string;
};

export default function AppointmentForm({
  service,
  paymentId,
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const templateParams = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      service: service,
      payment_id: paymentId,

      message: `
New Appointment Booking

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Consultation: ${service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Payment ID: ${paymentId}
      `,
    };

    try {
      await emailjs.send(
        "service_omi5m0r",
        "template_ni2x60v",
        templateParams,
        "aslDxgzgmR4GWDM2D"
      );

      setStatus("success");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-2xl">

      {/* TOP SUCCESS BAR */}

      <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#d99a2b] flex items-center justify-center flex-shrink-0 shadow-lg">

            <CheckCircle2 size={30} />

          </div>

          <div>

            <p className="text-[#f0b84b] font-bold uppercase tracking-wider text-sm">
              Payment Verified
            </p>

            <h3 className="mt-1 text-2xl md:text-3xl font-extrabold">
              Complete Your Appointment Request
            </h3>

            <p className="mt-2 text-blue-100">
              Your payment was successful. Please provide your preferred appointment details.
            </p>

          </div>

        </div>

      </div>


      <div className="p-6 md:p-10">

        {status === "success" ? (

          /* SUCCESS SCREEN */

          <div className="max-w-2xl mx-auto text-center py-6 md:py-10">

            <div className="mx-auto w-20 h-20 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center">

              <CheckCircle2 size={44} />

            </div>


            <p className="mt-6 text-[#d99a2b] font-bold uppercase tracking-[0.15em] text-sm">
              Request Received
            </p>


            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Appointment Request Submitted
            </h3>


            <p className="mt-5 text-gray-600 leading-8">
              Thank you. We have received your appointment details.
              Our team will contact you to confirm the appointment schedule.
            </p>


            <div className="mt-7 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-5 text-left">

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={22}
                  className="text-[#d99a2b] flex-shrink-0 mt-0.5"
                />

                <div className="min-w-0">

                  <p className="font-bold text-[#002b5c]">
                    Verified Payment ID
                  </p>

                  <p className="mt-2 text-sm text-gray-600 break-all">
                    {paymentId}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ) : (

          /* APPOINTMENT FORM */

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <p className="text-[#d99a2b] font-bold uppercase tracking-wider text-sm">
                Appointment Details
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                Tell Us Your Preferred Schedule
              </h3>

              <p className="mt-2 text-gray-600">
                Fill in the details below and our team will contact you for confirmation.
              </p>

            </div>


            {/* NAME */}

            <div>

              <label className="block text-sm font-bold text-[#002b5c] mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  placeholder="Enter your full name"
                />

              </div>

            </div>


            {/* MOBILE AND EMAIL */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Mobile Number
                </label>

                <div className="relative">

                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                    placeholder="Enter mobile number"
                  />

                </div>

              </div>


              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                    placeholder="Enter email address"
                  />

                </div>

              </div>

            </div>


            {/* DATE AND TIME */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Preferred Date
                </label>

                <div className="relative">

                  <CalendarDays
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b] pointer-events-none"
                  />

                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  />

                </div>

              </div>


              <div>

                <label className="block text-sm font-bold text-[#002b5c] mb-2">
                  Preferred Time
                </label>

                <div className="relative">

                  <Clock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b] pointer-events-none"
                  />

                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                  />

                </div>

              </div>

            </div>


            {/* BOOKING SUMMARY */}

            <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl p-5">

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={23}
                  className="text-[#d99a2b] flex-shrink-0"
                />

                <div className="min-w-0">

                  <p className="font-extrabold text-[#002b5c]">
                    Verified Booking Summary
                  </p>


                  <div className="mt-3 space-y-2 text-sm text-gray-600">

                    <p>
                      <strong className="text-gray-800">
                        Consultation:
                      </strong>{" "}
                      {service}
                    </p>

                    <p>
                      <strong className="text-gray-800">
                        Fee Paid:
                      </strong>{" "}
                      ₹999
                    </p>

                    <p className="break-all">
                      <strong className="text-gray-800">
                        Payment ID:
                      </strong>{" "}
                      {paymentId}
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-[#002b5c] hover:bg-[#06477f] text-white py-4 rounded-xl font-extrabold transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {loading ? (
                "Confirming Appointment..."
              ) : (
                <>
                  <Send size={19} />
                  Confirm Appointment
                </>
              )}

            </button>


            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center font-medium">
                Failed to submit appointment. Please try again.
              </div>
            )}

          </form>

        )}

      </div>

    </div>
  );
}