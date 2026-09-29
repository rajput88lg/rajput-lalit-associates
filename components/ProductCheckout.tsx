"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LockKeyhole, ShieldCheck } from "lucide-react";

import LeadFallback from "@/components/LeadFallback";
import { trackEvent } from "@/lib/gaEvents";
import { formatPrice, PAID_SERVICES, type PaidServiceKey } from "@/lib/paidServices";

/**
 * Checkout for self-serve products (tax report, download kits, reminders).
 * Flow: /api/create-order → Razorpay popup → /api/fulfil (verifies the
 * signature, emails the buyer) → /purchase?order=..&t=.. shows the product.
 */

type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type Checkout = {
  open: () => void;
  on: (event: string, cb: (res: { error?: { description?: string } }) => void) => void;
};

type RazorpayCtor = new (options: Record<string, unknown>) => Checkout;

const CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function getRazorpay(): RazorpayCtor | undefined {
  return (window as unknown as { Razorpay?: RazorpayCtor }).Razorpay;
}

function loadCheckout(): Promise<boolean> {
  if (getRazorpay()) return Promise.resolve(true);
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = CHECKOUT_SRC;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]";

export default function ProductCheckout({
  service,
  extra,
  buttonLabel,
  compact = false,
}: {
  service: PaidServiceKey;
  /** Extra data sent to create-order (tax inputs, categories). Return a string to show a validation error. */
  extra?: () => Record<string, unknown> | string;
  buttonLabel?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const item = PAID_SERVICES[service];
  const intl = item.currency === "USD";
  const [form, setForm] = useState({ name: "", mobile: "", email: "", company_website: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.company_website.trim() !== "") return; // bot

    const extraData = extra ? extra() : {};
    if (typeof extraData === "string") {
      setError(extraData);
      return;
    }

    setBusy(true);
    setError("");
    trackEvent("begin_checkout", { value: item.amount, currency: item.currency ?? "INR", service });

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          ...extraData,
        }),
      });
      const data = await res.json();
      if (!data?.success) {
        if (res.status === 400 && data?.message) {
          setBusy(false);
          setError(data.message);
          return;
        }
        throw new Error(data?.message || "Order failed");
      }

      const ready = await loadCheckout();
      const Razorpay = getRazorpay();
      if (!ready || !Razorpay) throw new Error("Checkout failed to load");

      const rzp = new Razorpay({
        key: data.keyId,
        order_id: data.order.id,
        amount: data.order.amount,
        currency: "INR",
        name: "Rajput Lalit & Associates",
        description: item.checkoutDescription,
        prefill: { name: form.name, email: form.email, contact: form.mobile },
        theme: { color: "#002b5c" },
        modal: { ondismiss: () => setBusy(false) },
        handler: async (payment: RazorpayResponse) => {
          const result = await fetch("/api/fulfil", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              order_id: payment.razorpay_order_id,
              payment_id: payment.razorpay_payment_id,
              signature: payment.razorpay_signature,
            }),
          })
            .then((r) => r.json())
            .catch(() => null);

          if (!result?.success) {
            setBusy(false);
            setError(
              intl
                ? `Payment received, but your report couldn't load. WhatsApp us with this payment ID and we'll send it right away: ${payment.razorpay_payment_id}`
                : `Payment mil gaya hai lekin product abhi load nahi ho paya. Is Payment ID ke saath WhatsApp karein, hum turant bhej denge: ${payment.razorpay_payment_id}`
            );
            return;
          }

          trackEvent("purchase", {
            value: item.amount,
            currency: item.currency ?? "INR",
            service,
            transaction_id: payment.razorpay_payment_id,
          });
          router.push(`/purchase?order=${result.orderId}&t=${result.token}`);
        },
      });
      rzp.on("payment.failed", (resp) => {
        setBusy(false);
        setError(resp?.error?.description || (intl ? "Payment failed. Please try again." : "Payment fail ho gaya. Dobara try karein."));
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      setBusy(false);
      setError(
        intl
          ? "Online payment couldn't start right now. Please try again shortly, or WhatsApp us below and we'll send you a payment link."
          : "Online payment abhi shuru nahi ho paya. Thodi der baad try karein ya WhatsApp karein."
      );
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-3">
      <div className={compact ? "space-y-3" : "grid sm:grid-cols-2 gap-3"}>
        <input className={inputClass} required placeholder="Your name" aria-label="Your name" autoComplete="name" value={form.name} onChange={set("name")} />
        <input className={inputClass} required type="tel" pattern={intl ? "[0-9+\\(\\)\\- ]{7,20}" : "[0-9+ ]{10,15}"} placeholder={intl ? "Phone / WhatsApp (with country code)" : "Mobile (WhatsApp)"} aria-label="Mobile number" autoComplete="tel" value={form.mobile} onChange={set("mobile")} />
      </div>
      <input className={inputClass} required type="email" placeholder={intl ? "Email (your report is sent here)" : "Email (product is sent here)"} aria-label="Email" autoComplete="email" value={form.email} onChange={set("email")} />

      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.company_website} onChange={set("company_website")} />

      <button
        type="submit"
        disabled={busy}
        className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-[#d99a2b] px-6 py-4 font-extrabold text-white transition hover:bg-[#c98a1e] disabled:opacity-60"
      >
        {busy ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Processing...
          </>
        ) : (
          <>
            <LockKeyhole size={18} /> {buttonLabel || `Pay ${formatPrice(item)}`}
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck size={14} />{" "}
        {intl ? "Secure payment via Razorpay — international cards and PayPal" : "Secure payment via Razorpay — UPI, cards, net banking"}
      </p>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
          <LeadFallback form={`product_${service}`} fields={{ Product: item.name, Naam: form.name, Mobile: form.mobile }} />
        </div>
      )}
    </form>
  );
}
