import type { NriReport } from "@/lib/nriHealthCheck";

const inr = (v: number) => "₹" + Math.round(Math.abs(v)).toLocaleString("en-IN");

export default function NriReportView({ report, name }: { report: NriReport; name?: string }) {
  const r = report;
  const refund = r.refundOrDue;
  return (
    <article className="report-print space-y-8 text-gray-800">
      <header className="rounded-2xl bg-[#002b5c] p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f0b84b]">
          NRI India Tax Health Check · Tax year 2026-27 · Living in {r.country}
        </p>
        <h1 className="mt-2 text-2xl font-extrabold md:text-3xl">{name ? `Prepared for ${name}` : "Your India tax health check"}</h1>
        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          <Stat label="Residential status" value={r.status.shortLabel} />
          <Stat label="Indian ITR" value={r.itr.required ? "Required" : r.itr.recommended ? "Recommended" : "Not required"} />
          <Stat label="Estimated India tax" value={inr(r.estimatedTax)} />
          <Stat label={refund >= 0 ? "Likely refund" : "Likely tax still due"} value={inr(refund)} gold />
        </div>
      </header>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">1. Your residential status: {r.status.status}</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
          {r.status.reasons.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="mt-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">{r.status.taxScope}</p>
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">2. Your Indian income and tax</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b-2 border-[#002b5c] text-left">
                <th className="py-2 pr-3">Income</th>
                <th className="py-2 px-3 text-right">Amount</th>
                <th className="py-2 pl-3 text-right">Taxable in India</th>
              </tr>
            </thead>
            <tbody>
              {r.income.map((row) => (
                <tr key={row.label} className="border-b border-gray-200 align-top">
                  <td className="py-2 pr-3">
                    {row.label}
                    {row.note && <span className="block text-xs text-gray-500">{row.note}</span>}
                  </td>
                  <td className="py-2 px-3 text-right tabular-nums">{inr(row.amount)}</td>
                  <td className="py-2 pl-3 text-right tabular-nums">{inr(row.taxable)}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-200 font-semibold">
                <td className="py-2 pr-3">Taxable income</td>
                <td />
                <td className="py-2 pl-3 text-right tabular-nums">{inr(r.taxableIncome)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">Estimated tax (new regime, incl. 4% cess — no 87A rebate for NRIs)</td>
                <td />
                <td className="py-2 pl-3 text-right tabular-nums">{inr(r.estimatedTax)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-3">TDS {r.tdsIsEstimate ? "(estimated at 31.2% on NRO interest and rent)" : "deducted"}</td>
                <td />
                <td className="py-2 pl-3 text-right tabular-nums">{inr(r.tds)}</td>
              </tr>
              <tr className="font-extrabold text-[#002b5c]">
                <td className="py-3 pr-3">{refund >= 0 ? "Likely refund if you file" : "Likely tax still payable"}</td>
                <td />
                <td className="py-3 pl-3 text-right tabular-nums">{inr(refund)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {r.specialRateWarning && (
          <p className="mt-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
            Your dividends / capital gains are significant. For NRIs these are often taxed at special or treaty rates, so the real figure can
            differ from this slab-rate estimate.
          </p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">3. Do you need to file an Indian return?</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
          {r.itr.reasons.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">4. {r.country === "Other" ? "Your country of residence" : r.country}: what to tell your tax adviser</h2>
        <p className="mt-3 text-sm font-semibold leading-6">{r.countryNotes.title}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
          {r.countryNotes.points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">5. Your bank accounts and moving money</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
          {r.money.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">6. Your action plan</h2>
        <ol className="mt-3 space-y-3">
          {r.actions.map((a, i) => (
            <li key={a.title} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d99a2b] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-[#002b5c]">{a.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-700">{a.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <footer className="rounded-xl bg-gray-50 p-4 text-xs leading-6 text-gray-600">
        <p className="font-semibold text-gray-700">Please note</p>
        <ul className="list-disc pl-5">
          {r.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="mt-2">Rajput Lalit &amp; Associates · India · WhatsApp +91 93549 53603 · info@rajputlalitassociates.in</p>
      </footer>
    </article>
  );
}

function Stat({ label, value, gold }: { label: string; value: string; gold?: boolean }) {
  return (
    <div>
      <p className="text-xs text-blue-100">{label}</p>
      <p className={`text-xl font-extrabold ${gold ? "text-[#f0b84b]" : ""}`}>{value}</p>
    </div>
  );
}
