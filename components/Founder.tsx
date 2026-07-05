import Image from "next/image";
import {
  FaQuoteLeft,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24">

      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Leadership
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Message from the Founder
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

        </div>


        {/* MAIN FOUNDER CARD */}

        <div className="mt-14 overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-2xl">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">


            {/* LEFT PHOTO SIDE */}

            <div className="relative min-h-[520px] bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] overflow-hidden">

              {/* GOLD DECORATION */}

              <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#d99a2b]" />

              <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#d99a2b]" />


              {/* PHOTO */}

              <div className="absolute inset-0 flex items-end justify-center">

                <div className="relative w-full h-full">

                  <Image
                    src="/lalit-professional.png"
                    alt="Lalit Rajput - Founder of Rajput Lalit & Associates"
                    fill
                    className="object-contain object-bottom"
                  />

                </div>

              </div>


              {/* NAME CARD */}

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border-l-4 border-[#d99a2b]">

                <h3 className="text-2xl font-extrabold text-[#002b5c]">
                  Lalit Rajput
                </h3>

                <p className="text-[#d99a2b] font-bold mt-1">
                  Founder & Tax Consultant
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  Rajput Lalit & Associates
                </p>

              </div>

            </div>


            {/* RIGHT MESSAGE SIDE */}

            <div className="relative p-8 md:p-12 lg:p-14">

              <FaQuoteLeft className="text-5xl text-[#d99a2b]/20" />


              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                Professional Guidance with Personal Commitment
              </h3>


              <div className="mt-6 space-y-5 text-gray-600 leading-8">

                <p>
                  Welcome to{" "}
                  <strong className="text-[#002b5c]">
                    Rajput Lalit & Associates
                  </strong>
                  . I am{" "}
                  <strong className="text-[#002b5c]">
                    Lalit Rajput
                  </strong>
                  , founder of the firm.
                </p>


                <p>
                  With over{" "}
                  <strong className="text-[#002b5c]">
                    15 years of practical experience
                  </strong>{" "}
                  in Accounting, GST, Income Tax, TDS and Business
                  Compliance, my focus has always been to provide clear,
                  practical and professional assistance to individuals,
                  startups and businesses.
                </p>


                <p>
                  Over the years, we have served more than{" "}
                  <strong className="text-[#002b5c]">
                    200 clients
                  </strong>{" "}
                  and handled over{" "}
                  <strong className="text-[#002b5c]">
                    2,500 tax returns
                  </strong>
                  , with a strong focus on timely compliance,
                  transparency and dependable service.
                </p>

              </div>


              {/* MISSION QUOTE */}

              <div className="mt-7 bg-[#002b5c] text-white rounded-2xl p-6 border-l-4 border-[#d99a2b]">

                <p className="text-lg md:text-xl font-bold leading-8">
                  “Your Trusted Partner for Tax, Accounting
                  & Business Compliance.”
                </p>

              </div>


              {/* VALUES */}

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99a2b] flex-shrink-0" />

                  <span className="font-semibold text-gray-700">
                    Professional Service
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99a2b] flex-shrink-0" />

                  <span className="font-semibold text-gray-700">
                    Clear Communication
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99a2b] flex-shrink-0" />

                  <span className="font-semibold text-gray-700">
                    Timely Compliance
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99a2b] flex-shrink-0" />

                  <span className="font-semibold text-gray-700">
                    Client Commitment
                  </span>
                </div>

              </div>


              {/* SIGNATURE */}

              <div className="mt-9 pt-7 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                <div>
                  <p className="text-xl font-extrabold text-[#002b5c]">
                    Lalit Rajput
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Founder, Rajput Lalit & Associates
                  </p>
                </div>


                <a
                  href="tel:+919354953603"
                  className="inline-flex items-center justify-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-5 py-3 rounded-lg font-bold transition"
                >
                  <FaPhoneAlt />
                  Speak With Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}