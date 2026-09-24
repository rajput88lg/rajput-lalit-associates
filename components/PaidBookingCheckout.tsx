"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Loader2, LockKeyhole, ShieldCheck } from "lucide-react";

import LeadFallback from "@/components/LeadFallback";
import { trackEvent, trackFormSubmit } from "@/lib/gaEvents";
import { tagUrgency } from "@/lib/leadTriage";
import { PAID_SERVICES, type PaidServiceKey } from "@/lib/paidServices";

type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayInstance = {
  open: () => void;
  on: (event: string, cb: (res: { error?: { description?: string } }) => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

const CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

/** Loads Razorpay's checkout script only when the visitor clicks Pay. */
function loadCheckout(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);
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

export default function PaidBookingCheckout({
  service,
  topics,
}: {
  service: PaidServiceKey;
  /** Optional dropdown of topics (e.g. ITR, GST, Notice). */
  topics?: string[];
}) {
  const router = useRouter();
  const item = PAID_SERVICES[service];

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    topic: topics?.[0] ?? "",
    slot: "",
    query: "",
    company_website: "", // honeypot — real visitors leave this empty
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const sendBookingEmail = async (paymentId: string) => {
    const message = tagUrgency(
      `
PAID BOOKING — ${item.name} (₹${item.amount})

Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
Topic: ${form.topic || "-"}
Preferred slot: ${form.slot || "-"}
Query: ${form.query || "-"}

Razorpay payment ID: ${paymentId}
`.trim()
    );
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          service: item.name,
          payment_id: paymentId,
          message,
        },
        "aslDxgzgmR4GWDM2D"
      );
    } catch (err) {
      // Payment is already verified and the details are saved in the
      // Razorpay order notes, so a failed email must not block the visitor.
      console.error("EmailJS error:", err);
      trackEvent("form_error", { form: `paid_${service}_email` });
    }
  };

  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.company_website.trim() !== "") return; // bot

    setBusy(true);
    setError("");
    trackEvent("paid_booking_start", { service });

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          topic: form.topic,
          slot: form.slot,
          query: form.query,
        }),
      });
      const data = await res.json();
      if (!data?.success) throw new Error(data?.message || "Order failed");

      const ready = await loadCheckout();
      if (!ready || !window.Razorpay) throw new Error("Checkout failed to load");

      const rzp = new window.Razorpay({
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
          const verify = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payment),
          }).then((r) => r.json()).catch(() => null);

          if (!verify?.success) {
            setBusy(false);
            setError(
              `Payment verify nahi ho paya. Agar paise kat gaye hain to ye Payment ID ke saath WhatsApp karein: ${payment.razorpay_payment_id}`
            );
            return;
          }

          await sendBookingEmail(payment.razorpay_payment_id);
          trackFormSubmit(`paid_${service}`);
          trackEvent("purchase", { value: item.amount, currency: "INR", service });
          router.push("/appointment/success");
        },
      });
      rzp.on("payment.failed", (resp) => {
        setBusy(false);
        setError(resp?.error?.description || "Payment fail ho gaya. Dobara try karein.");
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      setBusy(false);
      setError("Online payment abhi shuru nahi ho paya. Neeche WhatsApp button se booking kar lijiye.");
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className={inputClass} required placeholder="Your name" aria-label="Your name" value={form.name} onChange={set("name")} />
        <input className={inputClass} required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Mobile (WhatsApp)" aria-label="Mobile number" value={form.mobile} onChange={set("mobile")} />
      </div>
      <input className={inputClass} type="email" placeholder="Email (optional)" aria-label="Email" value={form.email} onChange={set("email")} />

      {topics && topics.length > 0 && (
        <select className={inputClass} aria-label="Topic" value={form.topic} onChange={set("topic")}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      )}

      <input className={inputClass} placeholder="Preferred day & time (e.g. Mon 4 PM)" aria-label="Preferred slot" value={form.slot} onChange={set("slot")} />
      <textarea className={inputClass} rows={3} maxLength={250} placeholder="Your question in short (optional)" aria-label="Your question" value={form.query} onChange={set("query")} />

      {/* Honeypot — hidden from real visitors */}
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
            <LockKeyhole size={18} /> Pay ₹{item.amount} &amp; Book
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck size={14} /> Secure payment via Razorpay — UPI, cards, net banking
      </p>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
          <LeadFallback
            form={`paid_${service}`}
            fields={{ Service: item.name, Naam: form.name, Mobile: form.mobile, Topic: form.topic, Slot: form.slot }}
          />
        </div>
      )}
    </form>
  );
}
