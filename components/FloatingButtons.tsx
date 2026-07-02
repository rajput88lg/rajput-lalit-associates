import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919354953603"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center text-white text-2xl z-50 transition hover:scale-110"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+919354953603"
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-blue-700 hover:bg-blue-800 shadow-xl flex items-center justify-center text-white text-xl z-50 transition hover:scale-110"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}