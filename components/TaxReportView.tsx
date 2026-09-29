import type { TaxReport } from "@/lib/taxReport";
import type { RegimeBreakdown } from "@/lib/incomeTaxCalculator";

const inr = (v: number) => "₹" + Math.round(v).toLocaleString("en-IN");

function RegimeRows({ old: o, next: n }: { old: RegimeBreakdown; next: RegimeBreakdown }) {
  const rows: [string, number, number][] = [
    ["Gross income", o.grossIncome, n.grossIncome],
    ["Standard deduction", o.standardDeduction, n.standardDeduction],
    ["Other deductions / exemptions", o.otherDeductions, n.otherDeductions],
    ["Taxable income", o.taxableIncome, n.taxableIncome],
    ["Tax on slabs", o.taxBeforeRebate, n.taxBeforeRebate],
    ["Rebate u/s 87A + marginal relief", o.rebate + o.marginalRelief, n.rebate + n.marginalRelief],
    ["Health & education cess (4%)", o.cess, n.cess],
  ];
  return (
    <>
      {rows.map(([label, a, b]) => (
        <tr key={label} className="border-b border-gray-200">
          <td className="py-2 pr-3 text-gray-700">{label}</td>
          <td className="py-2 px-3 text-right tabular-nums">{inr(a)}</td>
          <td className="py-2 pl-3 text-right tabular-nums">{inr(b)}</td>
        </tr>
      ))}
      <tr className="font-extrabold text-[#002b5c]">
        <td className="py-3 pr-3">Total tax payable</td>
        <td className="py-3 px-3 text-right tabular-nums">{inr(o.totalTax)}</td>
        <td className="py-3 pl-3 text-right tabular-nums">{inr(n.totalTax)}</td>
      </tr>
    </>
  );
}

export default function TaxReportView({ report, name }: { report: TaxReport; name?: string }) {
  const best = Math.min(report.oldRegime.totalTax, report.newRegime.totalTax);
  return (
    <article className="report-print space-y-8 text-gray-800">
      <header className="rounded-2xl bg-[#002b5c] p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f0b84b]">
          Personal Tax Saving Report · {report.fy}
        </p>
        <h1 className="mt-2 text-2xl font-extrabold md:text-3xl">
          {name ? `Prepared for ${name}` : "Your tax saving report"}
        </h1>
        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          <Stat label="Gross income" value={inr(report.grossIncome)} />
          <Stat label="Better regime" value={report.recommended === "new" ? "New" : "Old"} />
          <Stat label="Tax right now" value={inr(best)} />
          <Stat label="Can save up to" value={inr(report.potentialSaving)} gold />
        </div>
      </header>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">1. Old vs New regime</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b-2 border-[#002b5c] text-left">
                <th className="py-2 pr-3" />
                <th className="py-2 px-3 text-right">Old regime</th>
                <th className="py-2 pl-3 text-right">New regime</th>
              </tr>
            </thead>
            <tbody>
              <RegimeRows old={report.oldRegime} next={report.newRegime} />
            </tbody>
          </table>
        </div>
        <p className="mt-3 rounded-xl bg-green-50 p-4 text-sm text-green-900">
          {report.regimeDifference > 0 ? (
            <>
              The <strong>{report.recommended} regime</strong> saves you <strong>{inr(report.regimeDifference)}</strong> with your
              current figures.
            </>
          ) : (
            <>Both regimes give the same tax with your current figures.</>
          )}{" "}
          {report.breakEvenDeductions > 0 && (
            <>
              The old regime becomes cheaper only if your total old-regime deductions (HRA, 80C, 80D, NPS, home loan etc.) cross{" "}
              <strong>{inr(report.breakEvenDeductions)}</strong> — you have {inr(report.totalOldDeductions)} now.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">2. Deductions: used vs available (old regime)</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b-2 border-[#002b5c] text-left">
                <th className="py-2 pr-3">Section</th>
                <th className="py-2 px-3 text-right">Limit</th>
                <th className="py-2 px-3 text-right">You claim</th>
                <th className="py-2 px-3 text-right">Unused</th>
                <th className="py-2 pl-3 text-right">Tax saved if used</th>
              </tr>
            </thead>
            <tbody>
              {report.deductions.map((d) => (
                <tr key={d.section} className="border-b border-gray-200 align-top">
                  <td className="py-2 pr-3">
                    <strong>{d.section}</strong>
                    <span className="block text-xs text-gray-500">{d.label}</span>
                  </td>
                  <td className="py-2 px-3 text-right tabular-nums">{d.limit === null ? "As per rules" : inr(d.limit)}</td>
                  <td className="py-2 px-3 text-right tabular-nums">{inr(d.claimed)}</td>
                  <td className="py-2 px-3 text-right tabular-nums">{d.gap > 0 ? inr(d.gap) : "—"}</td>
                  <td className="py-2 pl-3 text-right tabular-nums font-semibold text-green-700">
                    {d.taxSavedIfFilled > 0 ? inr(d.taxSavedIfFilled) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Using every unused limit means investing {inr(report.oldWithGapsFilled.extraInvestment)} more — your old-regime tax would then be{" "}
          <strong>{inr(report.oldWithGapsFilled.totalTax)}</strong> vs <strong>{inr(report.newRegime.totalTax)}</strong> in the new regime.
        </p>
      </section>

      {report.employerNpsTip && (
        <section>
          <h2 className="text-xl font-extrabold text-[#002b5c]">3. Salary restructuring: employer NPS</h2>
          <p className="mt-3 text-sm leading-7">
            If {inr(report.employerNpsTip.suggestedAmount)} of your yearly CTC is paid into NPS by your employer (80CCD(2), up to 14% of
            Basic+DA), your new-regime tax drops to <strong>{inr(report.employerNpsTip.newRegimeTax)}</strong> — a saving of{" "}
            <strong className="text-green-700">{inr(report.employerNpsTip.saving)}</strong> every year, without any extra money from your
            pocket. Ask your HR team whether they offer corporate NPS.
          </p>
        </section>
      )}

      <section>
        <h2 className="text-xl font-extrabold text-[#002b5c]">{report.employerNpsTip ? "4" : "3"}. Your action plan</h2>
        <ol className="mt-3 space-y-3">
          {report.actions.map((a, i) => (
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
          {report.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="mt-2">
          Rajput Lalit &amp; Associates · Ambala City, Haryana · +91 93549 53603 · info@rajputlalitassociates.in
        </p>
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
