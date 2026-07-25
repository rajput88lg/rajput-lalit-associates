import Link from "next/link";
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

          <div className="mt-10 flex justify-center">
  <Link
    href="/appointment"
    className="bg-[#d99a2b] hover:bg-[#f0b84b] px-8 py-4 rounded-lg font-bold transition flex items-center gap-2"
  >
    <CalendarDays size={20} />
    Book Appointment
  </Link>
</div>

        </div>

      </div>
    </section>
  );
}