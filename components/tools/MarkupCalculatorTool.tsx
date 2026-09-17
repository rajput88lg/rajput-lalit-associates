"use client";

import { useMemo, useState } from "react";
import { Store, Coins, Percent } from "lucide-react";

import { calculateMarkup, formatUSD } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function MarkupCalculatorTool() {
  const [cost, setCost] = useState(80);
  const [markupPct, setMarkupPct] = useState(25);

  const result = useMemo(() => calculateMarkup(cost, markupPct), [cost, markupPct]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Store size={28} />}
          title="Markup Calculator"
          subtitle="Work out your selling price from cost price and desired markup %."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField label="Cost Price" icon={<Coins size={16} />} value={cost} onChange={setCost} min={0} />
            <ToolNumberField label="Markup" icon={<Percent size={16} />} value={markupPct} onChange={setMarkupPct} min={0} suffix="%" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Store size={24} />}
            label="Selling Price"
            value={formatUSD(result.sellingPrice)}
            description={
              <>
                Gross profit: <strong>{formatUSD(result.grossProfit)}</strong> — that&apos;s a{" "}
                <strong>{result.marginPct}%</strong> profit margin (not the same as your{" "}
                {result.markupPct}% markup).
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Cost price" value={formatUSD(result.cost)} />
              <ToolRow label="Markup %" value={`${result.markupPct}%`} />
              <ToolRow label="Selling price" value={formatUSD(result.sellingPrice)} bold />
              <ToolRow label="Gross profit" value={formatUSD(result.grossProfit)} highlight />
              <ToolRow label="Profit margin (of selling price)" value={`${result.marginPct}%`} />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Markup vs margin:</strong> markup is profit as a % of
            cost; margin is profit as a % of selling price. The two numbers
            are never equal (except at 0%) — this is one of the most common
            pricing mistakes small businesses make.
          </p>

          <ToolConsultCta context="business accounting, GST invoicing and pricing compliance" />
        </div>
      </div>
    </section>
  );
}
