import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import type { FeeItem } from "@/lib/fees";

const WHATSAPP = "919354953603";

function waLink(service: string) {
  const text = `Namaste, mujhe "${service}" ke baare mein baat karni hai.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

/** Price cards — used on /fees and on service pages. Server component. */
export default function FeeCards({
  items,
  heading,
  intro,
}: {
  items: FeeItem[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {heading && (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c]">{heading}</h2>
            {intro && <p className="mt-4 text-lg text-gray-600 leading-8">{intro}</p>}
          </div>
        )}

        <div
          className={`grid gap-8 ${heading ? "mt-12" : ""} ${
            items.length >= 3 ? "md:grid-cols-3" : items.length === 2 ? "md:grid-cols-2" : "max-w-md mx-auto"
          }`}
        >
          {items.map((item) => (
            <div
              key={item.service}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col"
            >
              <div className="bg-[#002b5c] text-white text-center p-7">
                <h3 className="text-xl font-bold">{item.service}</h3>
                <p className="mt-4 text-sm text-blue-100">Starting fee</p>
                <p className="text-4xl font-extrabold">{item.price}</p>
                <p className="mt-3 text-sm text-blue-100 leading-6">{item.forWhom}</p>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <ul className="space-y-3 text-gray-700">
                  {item.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-700 mt-1 shrink-0" aria-hidden="true" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7 grid gap-3">
                  <a
                    href={waLink(item.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-[#147438] hover:bg-[#0f5429] text-white py-3 rounded-lg font-bold transition"
                  >
                    WhatsApp par baat karein
                  </a>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="text-center text-[#0066cc] font-semibold underline hover:text-[#002b5c] text-sm"
                    >
                      Service details →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 max-w-3xl mx-auto leading-6">
          These are starting fees for a standard case. If your case needs more work
          (several years pending, notices, large number of transactions), we tell you the
          exact fee before starting — no surprises later.
        </p>
      </div>
    </section>
  );
}
