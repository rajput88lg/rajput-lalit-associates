import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-yellow-300 font-semibold mb-4">
          Welcome to Rajput Lalit & Associates
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Rajput Lalit & Associates
        </h1>

        <p className="mt-6 text-2xl font-medium">
          GST • Income Tax • Accounting • Business Registration
        </p>

        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
          We provide professional GST, Income Tax, Accounting,
          Business Registration, LEI Registration and Compliance
          Services with over 15 years of experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="tel:+919354953603"
            className="flex items-center justify-center gap-3 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition duration-300 shadow-lg"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}