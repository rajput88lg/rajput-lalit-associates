"use client";

/**
 * Shared visual shell for the "Free Worldwide Tools" (Round 1+).
 * Keeps every simple tool's input card / result card / CTA looking
 * consistent with the site's existing calculators (GstCalculator.tsx,
 * LoanEmiCalculator.tsx) without repeating the markup 50 times.
 */

import Link from "next/link";
import type { ReactNode } from "react";

export function ToolInputCard({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden print:hidden">
      <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
            <p className="mt-1 text-blue-100 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-10 space-y-8">{children}</div>
    </div>
  );
}

export function ToolResultHeadline({
  icon,
  label,
  value,
  description,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  description?: ReactNode;
}) {
  return (
    <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">{label}</p>
          <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
            {value}
          </p>
          {description && <div className="mt-3 text-gray-700 leading-7">{description}</div>}
        </div>
      </div>
    </div>
  );
}

export function ToolPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <h3 className="font-extrabold text-[#002b5c] text-xl">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function ToolRow({
  label,
  value,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-2.5 border-b border-gray-100 last:border-0 ${
        bold ? "font-extrabold text-[#002b5c]" : "text-gray-700"
      }`}
    >
      <span className="text-sm">{label}</span>
      <span className={`text-sm text-right ${highlight ? "text-[#d99a2b] font-bold" : ""}`}>
        {value}
      </span>
    </div>
  );
}

export function ToolSliderField({
  label,
  icon,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string;
  icon: ReactNode;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c]">
          <span className="text-[#d99a2b]">{icon}</span>
          {label}
        </label>
        <span className="text-sm font-extrabold text-[#002b5c] bg-[#f7f9fc] border border-gray-200 rounded-lg px-3 py-1">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#d99a2b]"
      />
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>{min.toLocaleString("en-US")}</span>
        <span>{max.toLocaleString("en-US")}</span>
      </div>
    </div>
  );
}

export function ToolNumberField({
  label,
  icon,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  icon: ReactNode;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2">
        <span className="text-[#d99a2b]">{icon}</span>
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={Number.isNaN(value) ? "" : value}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          min={min}
          max={max}
          step={step ?? "any"}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
        />
        {suffix && <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{suffix}</span>}
      </div>
    </div>
  );
}

export function ToolModeToggle<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`py-3 px-2 rounded-xl font-bold text-sm border-2 transition ${
            value === opt.value
              ? "bg-[#002b5c] border-[#002b5c] text-white"
              : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function ToolConsultCta({ context }: { context: string }) {
  return (
    <div className="mt-8 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 md:p-10 shadow-2xl print:hidden">
      <h3 className="text-2xl md:text-3xl font-extrabold">Need help with {context}?</h3>
      <p className="mt-3 text-blue-100 leading-7 max-w-2xl">
        Rajput Lalit &amp; Associates handles GST, income tax, accounting and
        business compliance for individuals and businesses across India. The
        first consultation is free.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          href="/#appointment"
          className="btn-shine inline-flex items-center justify-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
        >
          Book a Free Consultation
        </Link>
        <a
          href="https://wa.me/919354953603"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white hover:text-[#002b5c] px-7 py-3.5 rounded-xl font-bold transition"
        >
          Talk on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function ToolPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center justify-center gap-2 border-2 border-[#002b5c] text-[#002b5c] hover:bg-[#002b5c] hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
    >
      Save / Print Result
    </button>
  );
}
