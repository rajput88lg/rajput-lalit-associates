"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BellRing, CheckCircle2, Download, Loader2, Printer } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import TaxReportView from "@/components/TaxReportView";
import NriReportView from "@/components/NriReportView";
import type { TaxReport } from "@/lib/taxReport";
import type { NriReport } from "@/lib/nriHealthCheck";
import { REMINDER_CATEGORIES, type ReminderItem } from "@/lib/reminderSchedule";
import { formatDeadlineDate } from "@/lib/taxDeadlines";

type Result =
  | ({ kind: "report"; report: TaxReport } & Common)
  | ({ kind: "nri-report"; report: NriReport } & Common)
  | ({ kind: "download"; files: { id: string; label: string; url: string }[] } & Common)
  | ({ kind: "subscription"; categories: string[]; validTill: string; upcoming: ReminderItem[] } & Common);

type Common = { product: { name: string; amount: number }; customer: { name: string } };

const WA = "https://wa.me/919354953603";

export default function PurchaseView() {
  const params = useSearchParams();
  const order = params.get("order");
  const token = params.get("t");
  const [data, setData] = useState<Result | null>(null);
  const [fetchError, setFetchError] = useState("");
  const error =
    !order || !token ? "This link is incomplete. Please open the link from your purchase email." : fetchError;

  useEffect(() => {
    if (!order || !token) return;
    fetch("/api/fulfil", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order_id: order, token }),
    })
      .then((r) => r.json())
      .then((d) => (d?.success ? setData(d) : setFetchError(d?.message || "Could not load your purchase.")))
      .catch(() => setFetchError("Could not load your purchase. Please check your internet and refresh."));
  }, [order, token]);

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">
        <p className="font-semibold">{error}</p>
        <a
          href={`${WA}?text=${encodeURIComponent(`Namaste, mujhe apni purchase open karne mein dikkat aa rahi hai. Order: ${order || "-"}`)}`}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white"
        >
          <FaWhatsapp /> WhatsApp us
        </a>
      </div>
    );
  }

  if (!data) {
    return (
      <p className="flex items-center justify-center gap-2 py-20 text-gray-600">
        <Loader2 className="animate-spin" /> Loading your purchase…
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 print:hidden">
        <p className="flex items-center gap-2 font-semibold text-green-800">
          <CheckCircle2 size={20} /> Payment received — {data.product.name}. A copy of this link is in your email.
        </p>
        {(data.kind === "report" || data.kind === "nri-report") && (
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#002b5c] px-5 py-2.5 font-bold text-white"
          >
            <Printer size={18} /> Print / Save as PDF
          </button>
        )}
      </div>

      {data.kind === "report" && (
        <>
          <TaxReportView report={data.report} name={data.customer.name} />
          <Upsell
            title="Want us to file your ITR with these savings?"
            text="We prepare and file your return, match Form 16/AIS and make sure every deduction in this report is claimed."
            href="/income-tax-return-filing"
            cta="See ITR filing service"
          />
        </>
      )}

      {data.kind === "nri-report" && (
        <>
          <NriReportView report={data.report} name={data.customer.name} />
          <Upsell
            title="Want us to file your Indian return?"
            text="We file NRI returns every week — claim your TDS refund, report rent and interest correctly and handle property sales."
            href="/nri-in-usa#services"
            cta="See NRI filing plans"
          />
        </>
      )}

      {data.kind === "download" && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h1 className="text-2xl font-extrabold text-[#002b5c]">Your downloads</h1>
          <p className="mt-1 text-sm text-gray-600">Bookmark this page or keep the email — the links keep working.</p>
          <ul className="mt-5 space-y-3">
            {data.files.map((f) => (
              <li key={f.id}>
                <a
                  href={f.url}
                  className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-4 font-semibold text-[#002b5c] transition hover:border-[#d99a2b] hover:bg-amber-50"
                >
                  {f.label}
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[#d99a2b] px-4 py-2 text-sm text-white">
                    <Download size={16} /> Download
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-600">
            Every file has an &quot;How to use&quot; sheet/page at the start. Stuck? WhatsApp us and we&apos;ll help.
          </p>
          <Upsell
            title="Short on time? Let us do the accounts."
            text="Monthly bookkeeping, GST returns and TDS — handled by our team at a fixed fee."
            href="/accounting-bookkeeping-services"
            cta="See bookkeeping service"
          />
        </div>
      )}

      {data.kind === "subscription" && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold text-[#002b5c]">
            <BellRing className="text-[#d99a2b]" /> Your reminders are active
          </h1>
          <p className="mt-2 text-gray-700">
            Active till <strong>{formatDeadlineDate(data.validTill)}</strong> for{" "}
            <strong>
              {data.categories.map((c) => REMINDER_CATEGORIES.find((x) => x.key === c)?.label || c).join(", ")}
            </strong>
            . You will get an email 7 days and 2 days before each due date.
          </p>
          <h2 className="mt-6 font-bold text-[#002b5c]">Coming up next</h2>
          <ul className="mt-3 divide-y divide-gray-200 rounded-xl border border-gray-200">
            {data.upcoming.map((u) => (
              <li key={u.id} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-4">
                <span className="w-40 shrink-0 font-semibold text-[#002b5c]">{formatDeadlineDate(u.date)}</span>
                <span className="text-gray-700">{u.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Tip: add info@rajputlalitassociates.in to your contacts so reminders don&apos;t go to spam.
          </p>
        </div>
      )}
    </div>
  );
}

function Upsell({ title, text, href, cta }: { title: string; text: string; href: string; cta: string }) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#002b5c] p-6 text-white sm:flex-row sm:items-center sm:justify-between print:hidden">
      <div>
        <p className="text-lg font-extrabold">{title}</p>
        <p className="mt-1 text-sm text-blue-100">{text}</p>
      </div>
      <Link href={href} className="shrink-0 rounded-xl bg-[#d99a2b] px-5 py-3 text-center font-bold text-white">
        {cta}
      </Link>
    </div>
  );
}
