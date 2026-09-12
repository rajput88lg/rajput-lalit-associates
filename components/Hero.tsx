import { FaCheckCircle } from "react-icons/fa";

import { CalendarDays } from "lucide-react";
import CountUp from "@/components/CountUp";

const highlights = [
  "GST & Tax Consultancy",
  "Accounting Services",
  "Business Registration",
  "Notice & Compliance Support",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white"
    >
      {/* BACKGROUND DECORATION */}

      <div className="blob-top-right absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="blob-bottom-left absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#d99a2b]/10 rounded-full blur-3xl" />


      {/* MAIN CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="max-w-5xl mx-auto text-center">


          {/* TRUST BADGE */}

          <div className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 rounded-full">

            <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />

            <p className="text-sm font-semibold tracking-wide">
              Trusted Tax & Financial Consultancy
            </p>

          </div>


          {/* MAIN HEADING */}

          <h1 className="hero-in hero-in-2 mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08]">

            Smart Tax Solutions.

            <span className="block text-[#f0b84b] mt-3">
              Stronger Business.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="hero-in hero-in-3 mt-7 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">

            Professional GST, Income Tax, Accounting and Business
            Compliance services backed by over 15 years of practical
            experience.

          </p>


          {/* SERVICES */}

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {highlights.map((item, index) => (
              <div
                key={item}
                className={`hero-in hero-in-${index + 3} group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/[0.12] border border-white/10 hover:border-[#f0b84b]/40 rounded-xl px-4 py-4 transition-all duration-300 hover:-translate-y-1`}
              >

                <FaCheckCircle className="icon-pop text-[#f0b84b] flex-shrink-0" />

                <span>
                  {item}
                </span>

              </div>
            ))}

          </div>


          {/* BUTTONS */}

          <div className="hero-in hero-in-6 mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#appointment"
              className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >

              <CalendarDays size={20} />

              Book Appointment

            </a>

          </div>


          {/* STATS */}

          <div className="hero-in hero-in-6 mt-14 pt-9 border-t border-white/20 grid grid-cols-3 max-w-2xl mx-auto">

            <div>

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                <CountUp end={15} suffix="+" />
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Years Experience
              </p>

            </div>


            <div className="border-x border-white/20">

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                <CountUp end={200} suffix="+" />
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Happy Clients
              </p>

            </div>


            <div>

              <p className="text-3xl md:text-4xl font-extrabold text-[#f0b84b]">
                <CountUp end={6000} suffix="+" />
              </p>

              <p className="text-sm text-blue-100 mt-2">
                Returns Filed
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* GOLD BOTTOM LINE */}

      <div className="gold-shimmer h-1" />

    </section>
  );
}
