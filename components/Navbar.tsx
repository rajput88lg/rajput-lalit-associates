"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-[82px] flex items-center justify-between">

          {/* LOGO AND FIRM NAME */}

          <a
            href="#home"
            className="flex items-center gap-3 min-w-0"
            onClick={closeMenu}
          >
            <div className="relative w-[62px] h-[62px] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Rajput Lalit & Associates"
                fill
                sizes="62px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-[20px] md:text-[22px] font-extrabold text-[#002b5c] leading-tight">
                Rajput Lalit & Associates
              </h1>

              <p className="text-[12px] md:text-[13px] text-[#d99a2b] font-semibold tracking-wide mt-1">
                GST • INCOME TAX • ACCOUNTING
              </p>
            </div>
          </a>


          {/* DESKTOP MENU */}

          <div className="hidden lg:flex items-center gap-7">
            <a
              href="#home"
              className="relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              About
            </a>

            <a
              href="#services"
              className="relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Contact
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#c88920] text-white px-5 py-3 rounded-lg font-bold transition shadow-md"
            >
              <CalendarDays size={18} />
              Book Appointment
            </a>
          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 text-[#002b5c]"
            aria-label="Open navigation menu"
          >
            {menuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>


        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-5">
            <div className="flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                About
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Services
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Contact
              </a>

              <a
                href="#appointment"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 bg-[#d99a2b] text-white px-5 py-3 rounded-lg font-bold"
              >
                <CalendarDays size={18} />
                Book Appointment
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}