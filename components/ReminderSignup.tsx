"use client";

import { useState } from "react";

import ProductCheckout from "@/components/ProductCheckout";
import { PAID_SERVICES } from "@/lib/paidServices";
import { REMINDER_CATEGORIES, type ReminderCategory } from "@/lib/reminderSchedule";

const PRICE = PAID_SERVICES["compliance-reminders"].amount;

export default function ReminderSignup() {
  const [picked, setPicked] = useState<ReminderCategory[]>(["GST", "TDS", "Income Tax"]);

  const toggle = (key: ReminderCategory) =>
    setPicked((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]));

  return (
    <div className="space-y-5">
      <div>
        <p className="font-bold text-[#002b5c]">Remind me about:</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {REMINDER_CATEGORIES.map((c) => (
            <label
              key={c.key}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                picked.includes(c.key) ? "border-[#d99a2b] bg-amber-50" : "border-gray-200 bg-white"
              }`}
            >
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 accent-[#d99a2b]"
                checked={picked.includes(c.key)}
                onChange={() => toggle(c.key)}
              />
              <span>
                <span className="block font-semibold text-gray-900">{c.label}</span>
                <span className="block text-xs text-gray-500">{c.hint}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
      <ProductCheckout
        service="compliance-reminders"
        buttonLabel={`Pay ₹${PRICE} for 12 months`}
        extra={() => (picked.length ? { categories: picked } : "Please choose at least one category.")}
      />
    </div>
  );
}
