"use client";

import { useState } from "react";

import {
  CalendarDays,
  Clock,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  ArrowRight,
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
      setMessage(
        "Please select a consultation service."
      );

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

        amount:
          orderData.order.amount,

        currency:
          orderData.order.currency,

        name:
          "Rajput Lalit & Associates",

        description:
          service,

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
          color: "#002b5c",
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
    <section
      id="appointment"
      className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24"
    >
      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Professional Consultation
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Book an Appointment
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Get professional guidance for GST,
            Income Tax, notices, accounting and
            business compliance matters.
          </p>

        </div>


        {/* MAIN BOOKING AREA */}

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">


          {/* LEFT CONSULTATION INFORMATION */}

          <div className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-8 md:p-10 shadow-2xl">

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/[0.04]" />

            <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-[#d99a2b]/10 rounded-full" />


            <div className="relative">

              <p className="text-[#f0b84b] font-bold uppercase tracking-[0.2em] text-sm">
                Consultation Details
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Professional Advice for
                <span className="block text-[#f0b84b] mt-2">
                  Important Business Matters
                </span>
              </h3>

              <p className="mt-6 text-blue-100 leading-8">
                Select the consultation service you need,
                complete the secure payment and submit your
                preferred appointment details.
              </p>


              {/* DETAIL ITEMS */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4">

                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">

                    <Clock size={21} />

                  </div>

                  <div>
                    <p className="font-bold">
                      Professional Consultation
                    </p>

                    <p className="text-sm text-blue-100 mt-1">
                      Dedicated consultation session
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4">

                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">

                    <CalendarDays size={21} />

                  </div>

                  <div>
                    <p className="font-bold">
                      Appointment Scheduling
                    </p>

                    <p className="text-sm text-blue-100 mt-1">
                      Select preferred date and time after payment
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4 bg-white/[0.08] border border-white/10 rounded-xl p-4">

                  <div className="w-11 h-11 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">

                    <ShieldCheck size={22} />

                  </div>

                  <div>
                    <p className="font-bold">
                      Secure Payment
                    </p>

                    <p className="text-sm text-blue-100 mt-1">
                      Appointment form opens after payment verification
                    </p>
                  </div>

                </div>

              </div>


              {/* PRICE */}

              <div className="mt-8 pt-7 border-t border-white/20">

                <p className="text-blue-100 text-sm">
                  Professional Consultation Fee
                </p>

                <div className="mt-2 flex items-end gap-2">

                  <span className="text-5xl font-extrabold text-[#f0b84b]">
                    ₹999
                  </span>

                  <span className="text-blue-100 mb-1">
                    per consultation
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT PAYMENT CARD */}

          <div className="bg-white border border-gray-200 rounded-3xl p-7 md:p-10 shadow-xl">

            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center flex-shrink-0">

                <CreditCard size={27} />

              </div>

              <div>

                <p className="text-sm text-[#d99a2b] font-bold uppercase tracking-wider">
                  Secure Booking
                </p>

                <h3 className="mt-1 text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                  Select Consultation
                </h3>

              </div>

            </div>


            <p className="mt-6 text-gray-600 leading-7">
              Choose the service you want to discuss.
              Your appointment details can be submitted
              after successful payment verification.
            </p>


            {/* SERVICE SELECT */}

            <div className="mt-7">

              <label className="block text-sm font-bold text-[#002b5c] mb-2">
                Consultation Service
              </label>

              <select
                value={service}
                onChange={(e) => {
                  setService(
                    e.target.value
                  );

                  setMessage("");

                  setPaymentId("");
                }}
                className="w-full border border-gray-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/30 focus:border-[#d99a2b]"
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

            </div>


            {/* PRICE SUMMARY */}

            <div className="mt-6 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-5">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-[#d99a2b]/15 text-[#d99a2b] flex items-center justify-center">

                    <IndianRupee size={20} />

                  </div>

                  <div>
                    <p className="font-bold text-[#002b5c]">
                      Consultation Fee
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Secure online payment
                    </p>
                  </div>

                </div>


                <span className="text-3xl font-extrabold text-[#002b5c]">
                  ₹999
                </span>

              </div>

            </div>


            {/* PAYMENT PROCESS */}

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm text-gray-600">

                <CheckCircle2
                  size={18}
                  className="text-[#d99a2b]"
                />

                Select your consultation service

              </div>


              <div className="flex items-center gap-3 text-sm text-gray-600">

                <CheckCircle2
                  size={18}
                  className="text-[#d99a2b]"
                />

                Complete secure online payment

              </div>


              <div className="flex items-center gap-3 text-sm text-gray-600">

                <CheckCircle2
                  size={18}
                  className="text-[#d99a2b]"
                />

                Submit appointment details after verification

              </div>

            </div>


            {/* PAYMENT BUTTON */}

            <button
              type="button"
              onClick={handlePayment}
              disabled={
                !service ||
                loading ||
                Boolean(paymentId)
              }
              className="mt-7 w-full flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white py-4 px-5 rounded-xl font-extrabold transition shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
            >

              {paymentId ? (
                <>
                  <CheckCircle2 size={21} />
                  Payment Successful
                </>
              ) : loading ? (
                "Processing Payment..."
              ) : (
                <>
                  Pay ₹999 & Book Appointment
                  <ArrowRight size={20} />
                </>
              )}

            </button>


            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">

              <ShieldCheck size={16} />

              Appointment request is available only after successful payment verification.

            </div>


            {/* STATUS MESSAGE */}

            {message && (
              <div
                className={`mt-5 rounded-xl p-4 text-center text-sm font-medium border ${
                  paymentId
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-[#fff9ed] border-[#d99a2b]/30 text-[#7a5514]"
                }`}
              >
                {message}
              </div>
            )}

          </div>

        </div>


        {/* APPOINTMENT FORM AFTER PAYMENT */}

        {paymentId && (
          <div className="mt-10">
            <AppointmentForm
              service={service}
              paymentId={paymentId}
            />
          </div>
        )}

      </div>
    </section>
  );
}