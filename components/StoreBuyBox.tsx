"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import ProductCheckout from "@/components/ProductCheckout";
import { trackEvent } from "@/lib/gaEvents";
import { PAID_SERVICES, formatPrice, type PaidServiceKey } from "@/lib/paidServices";

/** "Buy" button on a store card that opens the checkout form in place. */
export default function StoreBuyBox({ service, highlight = false }: { service: PaidServiceKey; highlight?: boolean }) {
  const [open, setOpen] = useState(false);
  const item = PAID_SERVICES[service];

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent("store_buy_click", { service });
        }}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-extrabold transition ${
          highlight ? "bg-[#d99a2b] text-white hover:bg-[#c98a1e]" : "bg-[#002b5c] text-white hover:bg-[#06477f]"
        }`}
      >
        <ShoppingCart size={18} /> Buy for {formatPrice(item)}
      </button>
    );
  }

  return <ProductCheckout service={service} compact buttonLabel={`Pay ${formatPrice(item)} & Download`} />;
}
