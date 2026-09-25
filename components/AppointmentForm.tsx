"use client";

import { useState } from "react";
import { sendLead } from "@/lib/sendLead";
import LeadFallback from "@/components/LeadFallback";

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
import { trackFormSubmit } from "@/lib/gaEvents";
import { tagUrgency } from "@/lib/leadTriage";

type AppointmentFormProps = {
  service: string;
  paymentId?: string;
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
    company_website: "", // honeypot — real visitors leave this empty
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

    // Honeypot spam-trap: a field real visitors never see or fill, but
    // basic spam bots auto-fill every input they find. Act as if it
    // succeeded — no error shown, no email actually sent.
    if (formData.company_website.trim() !== "") {
      setStatus("success");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        date: "",
        time: "",
        company_website: "",
      });
      return;
    }

    setLoading(true);
    setStatus("");

    const rawMessage = `
New Appointment Enquiry (Free Consultation)

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Consultation: ${service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
      `;

    const templateParams = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      service: service,
      payment_id: paymentId || "Free Consultation (No Payment)",

      // GST Notice Reply bookings are always urgency-tagged automatically;
      // other services still get keyword-checked (e.g. someone typing
      // "urgent" in a field, or the service name itself matching).
      message:
        service.toLowerCase().includes("notice")
          ? tagUrgency(`GST/Income Tax NOTICE-related booking.\n${rawMessage}`)
          : tagUrgency(rawMessage),
    };

    try {
      await sendLead(
        "appointment",
        templateParams
      );

      setStatus("success");
      trackFormSubmit("appointment");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        date: "",
        time: "",
        company_website: "",
      });
    } catch (error) {
      console.error("Lead email error:", error);

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
              Free Consultation
            </p>

            <h3 className="mt-1 text-2xl md:text-3xl font-extrabold">
              Complete Your Appointment Request
            </h3>

            <p className="mt-2 text-blue-100">
              No payment required. Please provide your preferred appointment details below.
            </p>

          </div>

        </div>

      </div>


      <div className="p-6 md:p-10">

        {status === "success" ? (

          /* SUCCESS SCREEN */

          <div role="status" aria-live="polite" className="max-w-2xl mx-auto text-center py-6 md:py-10">

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
                    Consultation: {service}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Our team will call you shortly to confirm your appointment.
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

            {/* HONEYPOT — spam bots ke liye, humans ko nahi dikhta */}
            <div
              className="absolute -left-[9999px] w-px h-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="appt-company-website">Leave this field empty</label>
              <input
                id="appt-company-website"
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company_website}
                onChange={handleChange}
              />
            </div>

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

              <label htmlFor="appt-name" className="block text-sm font-bold text-[#002b5c] mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                />

                <input
                  id="appt-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
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

                <label htmlFor="appt-mobile" className="block text-sm font-bold text-[#002b5c] mb-2">
                  Mobile Number
                </label>

                <div className="relative">

                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                  />

                  <input
                    id="appt-mobile"
                    type="tel"
                    name="mobile"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                    placeholder="Enter mobile number"
                  />

                </div>

              </div>


              <div>

                <label htmlFor="appt-email" className="block text-sm font-bold text-[#002b5c] mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                  />

                  <input
                    id="appt-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
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

                <label htmlFor="appt-date" className="block text-sm font-bold text-[#002b5c] mb-2">
                  Preferred Date
                </label>

                <div className="relative">

                  <CalendarDays
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b] pointer-events-none"
                  />

                  <input
                    id="appt-date"
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

                <label htmlFor="appt-time" className="block text-sm font-bold text-[#002b5c] mb-2">
                  Preferred Time
                </label>

                <div className="relative">

                  <Clock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b] pointer-events-none"
                  />

                  <input
                    id="appt-time"
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
                    Booking Summary
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
                        Consultation Fee:
                      </strong>{" "}
                      Free — no payment required
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
              <div
                role="alert"
                aria-live="polite"
                className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center font-medium"
              >
                Booking email se nahi ja payi — neeche wale button se WhatsApp par bhej dijiye.
              </div>
            )}

            {status === "error" && (
              <LeadFallback
                form="appointment"
                fields={{
                  Naam: formData.name,
                  Mobile: formData.mobile,
                  Email: formData.email,
                  Service: service,
                  Date: formData.date,
                  Time: formData.time,
                }}
              />
            )}

          </form>

        )}

      </div>

    </div>
  );
}