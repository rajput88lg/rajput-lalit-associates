import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import { CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <Reveal>  
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white"
    >
      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#d99a2b]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />


      {/* MAIN CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="max-w-5xl mx-auto text-center">


          {/* TRUST BADGE */}

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 rounded-full">

            <span className="w-2 h-2 bg-[#f0b84b] rounded-full" />

            <p className="text-sm font-semibold tracking-wide">
              Trusted Tax & Financial Consultancy
            </p>

          </div>


          {/* MAIN HEADING */}

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08]">

            Smart Tax Solutions.

            <span className="block text-[#f0b84b] mt-3">
              Stronger Business.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="mt-7 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">

            Professional GST, Income Tax, Accounting and Business
            Compliance services backed by over 15 years of practical
            experience.

          </p>


          {/* SERVICES */}

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">

              <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

              <span>
                GST & Tax Consultancy
              </span>

            </div>


            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">

              <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

              <span>
                Accounting Services
              </span>

            </div>


            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">

              <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

              <span>
                Business Registration
              </span>

            </div>


            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">

              <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />

              <span>
                Notice & Compliance Support
              </span>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition shadow-lg"
            >

              <CalendarDays size={20} />

              Book Appointment

            </a>


            <a
              href="tel:+919354953603"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#002b5c] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
            >

              <FaPhoneAlt />

              Call Now

            </a>


            <a
              href="https://wa.me/919354953603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition"
            >

              <FaWhatsapp className="text-xl" />

              WhatsApp

            </a>

          </div>


          {/* STATS */}

          <div className="mt-14 pt-9 border-t border-white/20 grid grid-cols-3 max-w-2xl mx-auto">

            <div>

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                15+
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Years Experience
              </p>

            </div>


            <div className="border-x border-white/20">

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                200+
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Happy Clients
              </p>

            </div>


            <div>

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                6000+
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Returns Filed
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* GOLD BOTTOM LINE */}

      <div className="h-1 bg-gradient-to-r from-[#d99a2b] via-[#f0b84b] to-[#d99a2b]" />

    </section>
</Reveal>
  );
}