import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CalendarDays } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#f0b84b] font-semibold uppercase tracking-wider">
            Rajput Lalit & Associates
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 leading-8">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#appointment"
              className="bg-[#d99a2b] hover:bg-[#f0b84b] px-7 py-4 rounded-lg font-bold transition flex items-center gap-2"
            >
              <CalendarDays size={20} />
              Book Appointment
            </a>

            <a
              href="tel:+919354953603"
              className="bg-white text-[#002b5c] px-7 py-4 rounded-lg font-bold flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919354953603"
              target="_blank"
              className="border border-white px-7 py-4 rounded-lg font-bold flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}