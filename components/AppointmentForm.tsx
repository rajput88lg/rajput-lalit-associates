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
    <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-green-700">
          Payment Successful ✓
        </h3>

        <p className="text-gray-600 mt-2">
          Please enter your details to complete the appointment request.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-white border border-green-300 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">✓</div>

          <h3 className="text-2xl font-bold text-green-700">
            Appointment Request Submitted
          </h3>

          <p className="text-gray-600 mt-3">
            Thank you. We have received your appointment details.
          </p>

          <p className="text-gray-600 mt-2">
            Our team will contact you shortly to confirm the appointment.
          </p>

          <div className="mt-5 bg-green-50 rounded-lg p-3 text-sm">
            <strong>Payment ID:</strong>
            <div className="break-all mt-1">{paymentId}</div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter email address"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Preferred Date
              </label>

              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Preferred Time
              </label>

              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 text-sm">
            <p>
              <strong>Consultation:</strong> {service}
            </p>

            <p className="mt-1 break-all">
              <strong>Payment ID:</strong> {paymentId}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Confirming Appointment..." : "Confirm Appointment"}
          </button>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-center">
              Failed to submit appointment. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
}