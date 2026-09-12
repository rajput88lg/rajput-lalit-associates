import Link from "next/link";
import { CalendarDays } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">

      {/* BACKGROUND DECORATION */}
      <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
      <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="max-w-4xl mx-auto text-center">

          <p className="hero-in hero-in-1 text-[#f0b84b] font-semibold uppercase tracking-wider">
            Rajput Lalit & Associates
          </p>

          <h1 className="hero-in hero-in-2 mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h1>

          <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8">
            {subtitle}
          </p>

          <div className="hero-in hero-in-4 mt-10 flex justify-center">
            <Link
              href="/#appointment"
              className="btn-shine bg-[#d99a2b] hover:bg-[#f0b84b] px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
            >
              <CalendarDays size={20} />
              Book Appointment
            </Link>
          </div>

        </div>

      </div>

      {/* GOLD BOTTOM LINE */}
      <div className="gold-shimmer h-1" />

    </section>
  );
}