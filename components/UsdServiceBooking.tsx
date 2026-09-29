"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import PaidBookingCheckout from "@/components/PaidBookingCheckout";
import { formatPrice, PAID_SERVICES, type PaidServiceKey } from "@/lib/paidServices";

const PLANS: { key: PaidServiceKey; points: string[] }[] = [
  {
    key: "nri-itr-usd",
    points: [
      "Residential status check",
      "Rent, NRO/NRE interest, dividends reported correctly",
      "Form 26AS / AIS matching and DTAA relief",
      "Filing, e-verification and TDS refund follow-up",
    ],
  },
  {
    key: "nri-property-itr-usd",
    points: [
      "Capital gains worked out from purchase and sale records",
      "Refund of the excess TDS the buyer deducted",
      "Exemption planning (Section 54 / 54EC) where eligible",
      "Filing and refund follow-up",
    ],
  },
];

/** Pick an NRI filing plan priced in USD, then pay via the booking checkout. */
export default function UsdServiceBooking() {
  const [picked, setPicked] = useState<PaidServiceKey>("nri-itr-usd");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="space-y-4">
        {PLANS.map((p) => {
          const item = PAID_SERVICES[p.key];
          const on = picked === p.key;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setPicked(p.key)}
              className={`w-full rounded-2xl border-2 bg-white p-5 text-left transition ${
                on ? "border-[#d99a2b] shadow-md" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-extrabold text-[#002b5c]">{item.name}</p>
                <p className="shrink-0 text-2xl font-extrabold text-[#002b5c]">{formatPrice(item)}</p>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {pt}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="font-bold text-[#002b5c]">Book: {PAID_SERVICES[picked].name}</p>
        <p className="mt-1 text-sm text-gray-600">
          After payment we email/WhatsApp you the document list and start within one working day (India time).
        </p>
        <div className="mt-5">
          <PaidBookingCheckout
            key={picked}
            service={picked}
            topics={["Rent / interest only", "Property sale", "Dividends / capital gains", "Not sure"]}
          />
        </div>
      </div>
    </div>
  );
}
