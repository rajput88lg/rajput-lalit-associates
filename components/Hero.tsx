import Image from "next/image";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white"
    >
      {/* DECORATIVE BACKGROUND */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#d99a2b]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />


      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">


          {/* LEFT CONTENT */}

          <div className="pb-14 md:pb-20">

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full">

              <span className="w-2 h-2 bg-[#d99a2b] rounded-full" />

              <p className="text-sm font-semibold tracking-wide">
                Trusted Tax & Financial Consultancy
              </p>

            </div>


            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1]">

              Smart Tax Solutions.

              <span className="block text-[#f0b84b] mt-2">
                Stronger Business.
              </span>

            </h1>


            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-2xl">

              Professional GST, Income Tax, Accounting and
              Business Compliance services backed by over
              15 years of practical experience.

            </p>


            {/* TRUST POINTS */}

            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                <span className="text-blue-50">
                  GST & Tax Consultancy
                </span>
              </div>


              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                <span className="text-blue-50">
                  Accounting Services
                </span>
              </div>


              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                <span className="text-blue-50">
                  Business Registration
                </span>
              </div>


              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

                <span className="text-blue-50">
                  Notice & Compliance Support
                </span>
              </div>

            </div>


            {/* BUTTONS */}

            <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-4">

              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-4 rounded-lg font-bold transition shadow-lg"
              >
                <CalendarDays size={20} />
                Book Appointment
              </a>


              <a
                href="tel:+919354953603"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#002b5c] px-7 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                <FaPhoneAlt />
                Call Now
              </a>


              <a
                href="https://wa.me/919354953603"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-4 rounded-lg font-bold hover:bg-white/20 transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

            </div>


            {/* EXPERIENCE LINE */}

            <div className="mt-10 pt-7 border-t border-white/20 flex flex-wrap gap-8">

              <div>
                <p className="text-3xl font-extrabold text-[#f0b84b]">
                  15+
                </p>

                <p className="text-sm text-blue-100 mt-1">
                  Years Experience
                </p>
              </div>


              <div>
                <p className="text-3xl font-extrabold text-[#f0b84b]">
                  200+
                </p>

                <p className="text-sm text-blue-100 mt-1">
                  Happy Clients
                </p>
              </div>


              <div>
                <p className="text-3xl font-extrabold text-[#f0b84b]">
                  2500+
                </p>

                <p className="text-sm text-blue-100 mt-1">
                  Returns Filed
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT PHOTO */}

          <div className="relative flex justify-center lg:justify-end self-end">

            <div className="absolute w-[380px] h-[380px] bg-[#d99a2b]/20 rounded-full blur-3xl bottom-10 right-5" />

            <div className="relative w-full max-w-[520px] h-[520px] md:h-[610px]">

              <Image
                src="/lalit-professional.png"
                alt="Lalit Rajput - Founder of Rajput Lalit & Associates"
                fill
                priority
                className="object-contain object-bottom"
              />

            </div>


            {/* FOUNDER BADGE */}

            <div className="absolute bottom-8 left-0 md:left-5 bg-white text-[#002b5c] px-5 py-4 rounded-xl shadow-2xl border-l-4 border-[#d99a2b]">

              <p className="font-extrabold text-lg">
                Lalit Rajput
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Founder & Tax Consultant
              </p>

            </div>

          </div>

        </div>
      </div>


      {/* BOTTOM GOLD LINE */}

      <div className="h-1 bg-gradient-to-r from-[#d99a2b] via-[#f0b84b] to-[#d99a2b]" />

    </section>
  );
}