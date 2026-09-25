"use client";

import { useState } from "react";
import {
  Globe,
  MapPin,
  Gauge,
  Mail,
  MessageCircle,
  Wrench,
} from "lucide-react";
import { sendLead } from "@/lib/sendLead";
import { trackFormSubmit } from "@/lib/gaEvents";
import LeadFallback from "@/components/LeadFallback";

/**
 * Small, quick website jobs + a free website check form (lead magnet).
 * No prices here until Lalit confirms them — each job is quoted on WhatsApp.
 */
const JOBS = [
  { icon: Globe, title: "One-Page Business Website", text: "Services, photos, map, call and WhatsApp buttons — ideal for shops, clinics and coaching centres." },
  { icon: MapPin, title: "Google Business Profile Setup", text: "Get found on Google Maps: correct category, hours, photos, services and a review link." },
  { icon: Gauge, title: "Speed & SEO Fix", text: "Slow or not showing on Google? We fix titles, speed, mobile issues and basic SEO." },
  { icon: Wrench, title: "Changes to an Existing Site", text: "New page, updated prices, broken form, new photos — small edits done quickly." },
  { icon: Mail, title: "Domain & Business Email", text: "yourname.com plus info@yourname.com, set up properly on your phone and laptop." },
  { icon: MessageCircle, title: "WhatsApp & Enquiry Forms", text: "Enquiry forms that actually reach your inbox, WhatsApp chat button and booking forms." },
];

const NEEDS = [
  "New website",
  "One-page website",
  "Google Business Profile",
  "Speed / SEO fix",
  "Changes to my website",
  "Domain & business email",
  "Not sure — please suggest",
];

export default function QuickWebsiteJobs() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [business, setBusiness] = useState("");
  const [site, setSite] = useState("");
  const [need, setNeed] = useState(NEEDS[0]);
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^\d{10}$/.test(mobile.replace(/\D/g, "").slice(-10))) {
      setError("Please enter your name and a 10-digit mobile number.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      await sendLead("website-check", {
        name,
        mobile,
        service: `Website: ${need}`,
        payment_id: "Free Website Check",
        message: `Business: ${business || "-"}\nCurrent website: ${site || "No website"}\nNeeds: ${need}`,
        company_website: hp,
      });
      setStatus("sent");
      trackFormSubmit("website_check");
    } catch {
      setStatus("error");
    }
  };

  const input = "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white";
  const label = "block text-sm font-bold text-[#002b5c] mb-1.5";

  return (
    <section id="quick-jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#002b5c] font-semibold text-sm">
            Small Jobs Welcome
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#002b5c]">
            Don&apos;t Need a Big Website? Start Small.
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            Many businesses only need one thing fixed or set up. Tell us what you need — we
            reply on WhatsApp with a fixed price before any work starts.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {JOBS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-gray-200 rounded-2xl p-6 bg-[#f7f9fc]">
                <div className="w-11 h-11 rounded-xl bg-[#002b5c] text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#002b5c]">{title}</h3>
                <p className="mt-2 text-gray-600 leading-7 text-[15px]">{text}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-28 bg-white rounded-2xl border border-gray-200 shadow-xl p-6 md:p-7">
            <h3 className="text-xl font-extrabold text-[#002b5c]">Free Website Check</h3>
            <p className="mt-1 text-sm text-gray-600">
              Send your details — we look at your website (or Google listing) and tell you
              what to fix first. No charge, no obligation.
            </p>

            {status === "sent" ? (
              <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-5 text-green-800 font-semibold">
                ✅ Received. We&apos;ll WhatsApp you within office hours (Mon–Sat, 10 AM – 7 PM).
              </div>
            ) : (
              <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
                <input
                  type="text"
                  name="company_website"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label htmlFor="wc-name" className={label}>Your name</label>
                  <input id="wc-name" value={name} onChange={(e) => setName(e.target.value)} className={input} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="wc-mobile" className={label}>Mobile / WhatsApp</label>
                  <input id="wc-mobile" inputMode="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className={input} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="wc-business" className={label}>Business name &amp; type</label>
                  <input id="wc-business" placeholder="e.g. Sharma Dental Clinic" value={business} onChange={(e) => setBusiness(e.target.value)} className={input} />
                </div>
                <div>
                  <label htmlFor="wc-site" className={label}>Current website (if any)</label>
                  <input id="wc-site" placeholder="Leave blank if none" value={site} onChange={(e) => setSite(e.target.value)} className={input} />
                </div>
                <div>
                  <label htmlFor="wc-need" className={label}>What do you need?</label>
                  <select id="wc-need" value={need} onChange={(e) => setNeed(e.target.value)} className={input}>
                    {NEEDS.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#d99a2b] hover:bg-[#c88920] disabled:opacity-60 text-white py-3.5 rounded-lg font-bold transition"
                >
                  {status === "sending" ? "Sending…" : "Get My Free Website Check"}
                </button>
                {status === "error" && (
                  <>
                    <p className="text-sm font-semibold text-red-700">
                      Couldn&apos;t send by email — please use WhatsApp below.
                    </p>
                    <LeadFallback
                      form="website_check"
                      fields={{ Naam: name, Mobile: mobile, Business: business, Website: site, Need: need }}
                    />
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
