"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [submitted, setSubmitted] = useState(false);

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

    const appointmentMessage = `
PAID CONSULTATION APPOINTMENT

Client Name: ${formData.name}

Mobile Number: ${formData.mobile}

Email Address: ${formData.email}

Consultation Service: ${service}

Preferred Date: ${formData.date}

Preferred Time: ${formData.time}

Payment Status: VERIFIED

Payment ID: ${paymentId}

Consultation Fee: ₹999
    `;

    try {
      await emailjs.send(
        "service_omi5m0r",
        "template_ni2x60v",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: appointmentMessage,
        },
        "aslDxgzgmR4GWDM2D"
      );

      setStatus(
        "✅ Appointment Request Submitted Successfully"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Appointment Email Error:", error);

      setStatus(
        "❌ Unable to submit appointment. Please contact us."
      );
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="mt-8 bg-green-50 border border-green-300 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">
          ✓
        </div>

        <h3 className="text-3xl font-bold text-green-700">
          Appointment Request Received
        </h3>

        <p className="text-gray-700 mt-4">
          Your payment has been verified and your
          appointment request has been submitted successfully.
        </p>

        <div className="mt-6 bg-white rounded-xl p-5 text-left max-w-xl mx-auto">
          <p className="mb-2">
            <strong>Client:</strong> {formData.name}
          </p>

          <p className="mb-2">
            <strong>Consultation:</strong> {service}
          </p>

          <p className="mb-2">
            <strong>Preferred Date:</strong> {formData.date}
          </p>

          <p className="mb-2">
            <strong>Preferred Time:</strong> {formData.time}
          </p>

          <p className="break-all">
            <strong>Payment ID:</strong> {paymentId}
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-6">
          Our team will contact you to confirm the appointment schedule.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">

      <div className="text-center mb-7">

        <h3 className="text-3xl font-bold text-green-700">
          Payment Successful ✓
        </h3>

        <p className="text-gray-600 mt-2">
          Please enter your details to complete your
          appointment request.
        </p>

      </div>


      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>

          <label className="block text-sm font-semibold mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your full name"
          />

        </div>


        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm font-semibold mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter mobile number"
            />

          </div>


          <div>

            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter email address"
            />

          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm font-semibold mb-2">
              Preferred Date
            </label>

            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>


          <div>

            <label className="block text-sm font-semibold mb-2">
              Preferred Time
            </label>

            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

        </div>


        <div className="bg-white border border-green-200 rounded-xl p-5">

          <p className="mb-2">
            <strong>Consultation:</strong> {service}
          </p>

          <p className="mb-2">
            <strong>Fee Paid:</strong> ₹999
          </p>

          <p className="break-all text-sm">
            <strong>Payment ID:</strong> {paymentId}
          </p>

        </div>


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-4 rounded-full font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading
            ? "Submitting Appointment..."
            : "Confirm Appointment"}
        </button>


        {status && (
          <div
            className={`text-center font-semibold p-3 rounded-xl ${
              status.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </div>
        )}

      </form>

    </div>
  );
}