import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#00152f] via-[#001d40] to-[#002b5c] text-white">
      
      {/* DECORATION */}
      <div className="absolute -top-40 -right-32 w-[450px] h-[450px] rounded-full border-[70px] border-white/[0.025]" />
      <div className="absolute -bottom-48 -left-32 w-[450px] h-[450px] rounded-full bg-[#d99a2b]/5" />

      {/* MAIN FOOTER */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-10 lg:gap-8">
          
          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Rajput Lalit & Associates"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold leading-tight">
                  Rajput Lalit & Associates
                </h2>
                <p className="mt-1 text-[#f0b84b] text-sm font-bold tracking-wide">
                  TAX • ACCOUNTING • COMPLIANCE
                </p>
              </div>
            </div>

            <p className="mt-6 text-blue-100 leading-8 max-w-md">
              Professional GST, Income Tax, Accounting and Business Compliance services with practical experience and client-focused support.
            </p>

            <div className="mt-6 border-l-4 border-[#d99a2b] pl-4">
              <p className="text-white font-bold leading-7">
                Your Trusted Partner for Tax, Accounting & Business Compliance.
              </p>
            </div>

            {/* CONTACT BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+919354953603"
                className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#d99a2b] transition"
                aria-label="Call Rajput Lalit & Associates"
              >
                <FaPhoneAlt />
              </a>

              <a
                href="https://wa.me/919354953603"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#d99a2b] transition"
                aria-label="WhatsApp Rajput Lalit & Associates"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="mailto:gst3603@gmail.com"
                className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#d99a2b] transition"
                aria-label="Email Rajput Lalit & Associates"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-extrabold">Our Services</h3>
            <div className="w-12 h-1 bg-[#d99a2b] rounded-full mt-3" />

            <ul className="mt-6 space-y-3 text-blue-100">
              {[
                "GST Services",
                "Income Tax",
                "Accounting & TDS",
                "Business Registration",
                "LEI Registration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaArrowRight className="text-[#d99a2b] text-xs flex-shrink-0" />
                  <Link
                    href="/#services"
                    className="hover:text-[#f0b84b] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-extrabold">Quick Links</h3>
            <div className="w-12 h-1 bg-[#d99a2b] rounded-full mt-3" />

            <ul className="mt-6 space-y-3 text-blue-100">
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#d99a2b] text-xs" />
                <Link href="/#home" className="hover:text-[#f0b84b] transition">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#d99a2b] text-xs" />
                <Link href="/#about" className="hover:text-[#f0b84b] transition">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#d99a2b] text-xs" />
                <Link href="/#services" className="hover:text-[#f0b84b] transition">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#d99a2b] text-xs" />
                <Link href="/#appointment" className="hover:text-[#f0b84b] transition">
                  Book Appointment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#d99a2b] text-xs" />
                <Link href="/#contact" className="hover:text-[#f0b84b] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-extrabold">Contact Information</h3>
            <div className="w-12 h-1 bg-[#d99a2b] rounded-full mt-3" />

            <div className="mt-6 space-y-5">
              <a
                href="tel:+919354953603"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Phone</p>
                  <p className="mt-1 font-semibold group-hover:text-[#f0b84b] transition">
                    +91 9354953603
                  </p>
                </div>
              </a>

              <a
                href="mailto:gst3603@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="mt-1 font-semibold break-all group-hover:text-[#f0b84b] transition">
                    gst3603@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Office Address</p>
                  <p className="mt-1 font-semibold leading-6">
                    1805, Sector-9,
                    <br />
                    Ambala City,
                    <br />
                    Haryana - 134003
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-sm" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Office Hours</p>
                  <p className="mt-1 text-sm leading-6">
                    Mon – Fri: 10 AM – 6 PM
                    <br />
                    Sat & Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GOLD DIVIDER */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#d99a2b] to-transparent" />

      {/* COPYRIGHT */}
      <div className="relative max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-sm text-blue-200">
            © {currentYear} Rajput Lalit & Associates. All Rights Reserved.
          </p>
          <p className="text-sm text-blue-200">
            GST • Income Tax • Accounting • Business Compliance
          </p>
        </div>
      </div>
    </footer>
  );
}