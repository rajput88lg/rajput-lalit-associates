"use client";

import { useState } from "react";
import { NRI_COUNTRIES, NRI_WHATSAPP_SERVICES } from "@/lib/nriServices";
import { trackWhatsAppClick } from "@/lib/gaEvents";

/** Country + service picker that opens WhatsApp with a ready message. */
export default function NriWhatsAppPicker() {
  const [country, setCountry] = useState("USA");
  const [service, setService] = useState(NRI_WHATSAPP_SERVICES[0]);

  const text = `Namaste, main ${country} mein rehta/rehti hoon (NRI). Mujhe "${service}" ke liye help chahiye.`;
  const href = `https://wa.me/919354953603?text=${encodeURIComponent(text)}`;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nri-country" className="block text-sm font-bold text-[#002b5c] mb-2">
            You live in
          </label>
          <select
            id="nri-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white"
          >
            {NRI_COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nri-service" className="block text-sm font-bold text-[#002b5c] mb-2">
            You need help with
          </label>
          <select
            id="nri-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white"
          >
            {NRI_WHATSAPP_SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(`nri_picker_${country}`)}
        className="mt-5 flex items-center justify-center bg-[#147438] hover:bg-[#0f5429] text-white py-3.5 rounded-lg font-bold transition"
      >
        Send on WhatsApp
      </a>
      <p className="mt-3 text-xs text-gray-600 text-center">
        WhatsApp works from any country. Share documents there too.
      </p>
    </div>
  );
}
