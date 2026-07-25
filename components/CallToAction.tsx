import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="bg-[#002b5c] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Need Professional GST & Tax Assistance?
        </h2>

        <p className="mt-5 text-blue-100 text-lg max-w-3xl mx-auto leading-8">
          Rajput Lalit & Associates provides GST Registration,
          GST Return Filing, Income Tax, Accounting,
          TDS, MSME Registration, Company Incorporation,
          Website Development and Business Consultancy
          services across India.
        </p>

        <div className="flex justify-center mt-10">
          <Link
            href="/appointment"
            className="bg-[#d99a2b] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-lg"
          >
            <FaCalendarCheck />
            Book Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}