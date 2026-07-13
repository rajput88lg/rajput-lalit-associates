import Link from "next/link";

export const metadata = {
  title: "Refund & Rescheduling Policy | Rajput Lalit & Associates",
  description:
    "Refund and Appointment Rescheduling Policy of Rajput Lalit & Associates.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">

        <h1 className="text-4xl font-bold text-[#002B5C] mb-4">
          Refund & Rescheduling Policy
        </h1>

        <p className="text-gray-500 mb-10">
          Last Updated: July 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              1. Consultation Fee
            </h2>

            <p>
              Rajput Lalit & Associates provides professional GST, Income Tax,
              Accounting, Business Registration, and Consultancy services.
              Consultation appointments booked through this website require
              advance payment to reserve the selected time slot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              2. No Refund Policy
            </h2>

            <p>
              All payments made towards consultation or professional services
              are final and non-refundable. Once payment has been successfully
              processed, no refund will be provided for cancellation, change of
              mind, or failure to attend the appointment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              3. Appointment Rescheduling
            </h2>

            <p>
              If you are unable to attend your scheduled consultation, you may
              request to reschedule your appointment by contacting us before the
              scheduled appointment time. Rescheduling requests are subject to
              availability and confirmation from our team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              4. Missed Appointments
            </h2>

            <p>
              If a client does not attend the scheduled appointment and does not
              inform us in advance, the appointment may be treated as completed.
              In such cases, neither refund nor complimentary rescheduling will
              be available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              5. Technical Payment Issues
            </h2>

            <p>
              If your payment is deducted but the appointment is not confirmed
              due to a genuine technical issue, please contact us immediately.
              We will verify the transaction and help complete your booking or
              resolve the payment issue as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002B5C] mb-3">
              6. Contact Us
            </h2>

            <p>
              For appointment rescheduling or payment-related assistance, please
              contact us:
            </p>

            <div className="mt-4 space-y-2">
              <p><strong>Rajput Lalit & Associates</strong></p>
              <p>📍 Ambala City, Haryana, India</p>
              <p>📞 +91 93549 53603</p>
              <p>✉️ gst3603@gmail.com</p>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block bg-[#002B5C] text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}