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

          {/* LOGO + FIRM NAME (brand lockup)
              The round logo's curved text is unreadable at header size, so
              the header uses only the bull mark (cropped from logo.png into
              logo-mark.png) next to the firm name set in real text. */}
          <Link
            href="/"
            aria-label="Rajput Lalit & Associates — Home"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0"
            onClick={closeMenu}
          >
            <span className="navbar-logo relative block w-[48px] h-[34px] sm:w-[60px] sm:h-[42px] flex-shrink-0">
              <Image
                src="/logo-mark.png"
                alt=""
                fill
                sizes="60px"
                className="object-contain"
                priority
              />
            </span>

            <span className="flex flex-col min-w-0 border-l border-gray-200 pl-2.5 sm:pl-3">
              <span className="whitespace-nowrap text-[16px] sm:text-[19px] xl:text-[20px] font-extrabold text-[#002b5c] leading-none tracking-tight">
                Rajput Lalit &amp; Associates
              </span>
              <span className="whitespace-nowrap mt-1.5 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#9c680f] leading-none">
                Tax &amp; Compliance Consultants
              </span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-6 ml-6 whitespace-nowrap text-[15px]">
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
              title="Website Development"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              Websites
            </Link>

            {/* Free tools — gold accent taaki dhyaan jaaye, kyunki yahi
                visitors ko site par kheench kar laate hain */}
            <Link
              href="/tools"
              className="nav-link relative text-[#9c680f] font-bold hover:text-[#002b5c] transition"
            >
              Free Tools
            </Link>

            <Link
              href="/nri-tax-services"
              title="NRI Tax Services"
              className="nav-link relative text-[#002b5c] font-semibold hover:text-[#d99a2b] transition"
            >
              NRI
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
              className="btn-shine inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#c88920] text-white px-5 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <CalendarDays size={18} />
              Book Consultation
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 text-[#002b5c]"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="menu-in xl:hidden border-t border-gray-100 py-5">
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
                className="px-4 py-3 rounded-lg text-[#9c680f] font-bold hover:bg-gray-50"
              >
                Free Tools
              </Link>

              <Link
                href="/nri-tax-services"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#002b5c] font-semibold hover:bg-gray-50"
              >
                NRI Services
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