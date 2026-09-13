"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Scroll hone par navbar thoda compact ho jata hai (professional touch).
  // Passive listener use kiya hai taaki scroll performance par asar na pade.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar-shell sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`navbar-row flex items-center justify-between ${
            scrolled ? "h-[68px]" : "h-[82px]"
          }`}
        >

          {/* LOGO AND FIRM NAME */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0"
            onClick={closeMenu}
          >
            <div className="navbar-logo relative w-[62px] h-[62px] flex-shrink-0">
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
              {/*
                Tagline sirf tab tak dikhti hai jab tak hamburger menu chalu
                hai (sm se lg tak). lg se upar poora desktop menu khulta hai
                aur us tagline (~325px) ke liye jagah nahi bachti — measure
                karke confirm kiya. Firm ka naam upar har jagah dikhta hai.
              */}
              <p className="hidden sm:block lg:hidden text-[12px] md:text-[13px] text-[#d99a2b] font-semibold tracking-wide mt-1">
                GST • INCOME TAX • ACCOUNTING • WEBSITE DEVELOPMENT
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/#home"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              About
            </Link>

            <Link
              href="/#services"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Services
            </Link>

            <Link
              href="/website-development"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Website Development
            </Link>

            {/* Free tools — gold accent taaki dhyaan jaaye, kyunki yahi
                visitors ko site par kheench kar laate hain */}
            <Link
              href="/tools"
              className="nav-link relative text-[#d99a2b] font-bold hover:text-[#002b5c] transition"
            >
              Free Tools
            </Link>

            <Link
              href="/blog"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Blog
            </Link>

            <Link
              href="/#contact"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Contact
            </Link>

            <Link
              href="/#appointment"
              className="btn-shine inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#c88920] text-white px-5 py-3 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <CalendarDays size={18} />
              Book Consultation
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 text-[#002b5c]"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="menu-in lg:hidden border-t border-gray-100 py-5">
            <div className="flex flex-col gap-2">
              <Link
                href="/#home"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Home
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                About
              </Link>

              <Link
                href="/#services"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Services
              </Link>

              <Link
                href="/website-development"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Website Development
              </Link>

              <Link
                href="/tools"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#d99a2b] font-bold hover:bg-gray-50"
              >
                Free Tools
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Blog
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                Contact
              </Link>

              <Link
                href="/#appointment"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 bg-[#d99a2b] text-white px-5 py-3 rounded-lg font-bold"
              >
                <CalendarDays size={18} />
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}