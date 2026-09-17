"use client";

import { useMemo, useState } from "react";
import { BarChart3, Coins } from "lucide-react";

import { calculateProfitMargin, formatUSD } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function ProfitMarginCalculatorTool() {
  const [revenue, setRevenue] = useState(100);
  const [cost, setCost] = useState(80);

  const result = useMemo(() => calculateProfitMargin(revenue, cost), [revenue, cost]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<BarChart3 size={28} />}
          title="Profit Margin Calculator"
          subtitle="Find your gross profit margin from revenue and cost."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField label="Revenue (Sales)" icon={<Coins size={16} />} value={revenue} onChange={setRevenue} min={0} />
            <ToolNumberField label="Cost (COGS)" icon={<Coins size={16} />} value={cost} onChange={setCost} min={0} />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<BarChart3 size={24} />}
            label="Profit Margin"
            value={`${result.marginPct}%`}
            description={
              <>
                Gross profit: <strong>{formatUSD(result.grossProfit)}</strong> on{" "}
                <strong>{formatUSD(result.revenue)}</strong> revenue (equivalent to a{" "}
                <strong>{result.markupPct}%</strong> markup on cost).
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Revenue" value={formatUSD(result.revenue)} />
              <ToolRow label="Cost" value={formatUSD(result.cost)} />
              <ToolRow label="Gross profit" value={formatUSD(result.grossProfit)} bold />
              <ToolRow label="Profit margin" value={`${result.marginPct}%`} highlight />
              <ToolRow label="Markup on cost" value={`${result.markupPct}%`} />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="business accounting, bookkeeping and financial statements" />
        </div>
      </div>
    </section>
  );
}
