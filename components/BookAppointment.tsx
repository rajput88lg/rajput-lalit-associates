"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import AppointmentForm from "./AppointmentForm";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function BookAppointment() {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [paymentId, setPaymentId] = useState("");

  const services = [
    "GST Consultation",
    "Income Tax Consultation",
    "GST Notice & Reply Consultation",
    "Accounting & Business Consultation",
  ];

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!service) {
      setMessage("Please select a consultation service.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setPaymentId("");

      const scriptLoaded =
        await loadRazorpayScript();

      if (!scriptLoaded) {
        setMessage(
          "Payment system could not be loaded."
        );

        setLoading(false);
        return;
      }

      const orderResponse = await fetch(
        "/api/create-order",
        {
          method: "POST",
        }
      );

      const orderData =
        await orderResponse.json();

      if (
        !orderResponse.ok ||
        !orderData.success
      ) {
        setMessage(
          "Unable to create payment order."
        );

        setLoading(false);
        return;
      }

      const options = {
        key:
          process.env
            .NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: orderData.order.amount,

        currency:
          orderData.order.currency,

        name:
          "Rajput Lalit & Associates",

        description: service,

        order_id:
          orderData.order.id,

        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyResponse =
              await fetch(
                "/api/verify-payment",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body:
                    JSON.stringify(response),
                }
              );

            const verifyData =
              await verifyResponse.json();

            if (
              verifyResponse.ok &&
              verifyData.success
            ) {
              setPaymentId(
                verifyData.paymentId
              );

              setMessage(
                "Payment verified successfully. Please complete your appointment details below."
              );
            } else {
              setMessage(
                "Payment received but verification failed. Please contact support."
              );
            }
          } catch {
            setMessage(
              "Payment verification error. Please contact support."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);

            setMessage(
              "Payment cancelled. Appointment was not booked."
            );
          },
        },

        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject =
        new window.Razorpay(options);

      paymentObject.on(
        "payment.failed",
        function () {
          setLoading(false);

          setMessage(
            "Payment failed. Appointment was not booked."
          );
        }
      );

      paymentObject.open();

    } catch (error) {
      console.error(error);

      setMessage(
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Professional Consultation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Book an Appointment
          </h2>

          <p className="text-gray-600 mt-3">
            Get professional guidance for
            taxation, GST and accounting
            matters.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div className="bg-gray-50 rounded-2xl p-7 shadow-md">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Consultation Details
            </h3>


            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <Clock className="text-blue-600" />

                <span>
                  Professional Consultation
                  Session
                </span>

              </div>


              <div className="flex items-center gap-3">

                <CalendarDays className="text-blue-600" />

                <span>
                  Appointment after payment
                  confirmation
                </span>

              </div>


              <div className="flex items-center gap-3">

                <IndianRupee className="text-blue-600" />

                <span className="font-bold text-xl">
                  ₹999
                </span>

              </div>


              <div className="flex items-center gap-3">

                <ShieldCheck className="text-blue-600" />

                <span>
                  Secure Online Payment
                </span>

              </div>

            </div>

          </div>


          <div className="bg-white border rounded-2xl p-7 shadow-lg">

            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              Select Consultation
            </h3>


            <select
              value={service}

              onChange={(e) => {
                setService(e.target.value);
                setMessage("");
                setPaymentId("");
              }}

              className="w-full border border-gray-300 rounded-lg p-3 mb-5"
            >

              <option value="">
                Select Service
              </option>


              {services.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>


            <div className="bg-blue-50 rounded-xl p-4 mb-5">

              <div className="flex justify-between">

                <span>
                  Consultation Fee
                </span>

                <span className="font-bold text-xl">
                  ₹999
                </span>

              </div>

            </div>


            <button
              onClick={handlePayment}

              disabled={
                !service ||
                loading ||
                Boolean(paymentId)
              }

              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >

              {paymentId
                ? "Payment Successful ✓"
                : loading
                ? "Processing..."
                : "Pay ₹999 & Book Appointment"}

            </button>


            <p className="text-xs text-gray-500 text-center mt-4">
              Appointment will be confirmed
              only after successful payment
              verification.
            </p>


            {message && (

              <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-sm text-gray-800">

                {message}

              </div>

            )}

          </div>

        </div>


        {paymentId && (

          <AppointmentForm
            service={service}
            paymentId={paymentId}
          />

        )}

      </div>

    </section>
  );
}