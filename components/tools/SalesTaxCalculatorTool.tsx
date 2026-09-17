"use client";

import { useMemo, useState } from "react";
import { Receipt, ShoppingBag, Percent } from "lucide-react";

import {
  calculateSalesTaxAdd,
  calculateSalesTaxRemove,
  formatUSD,
} from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolModeToggle,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

type Mode = "add" | "remove";

export default function SalesTaxCalculatorTool() {
  const [mode, setMode] = useState<Mode>("add");
  const [amount, setAmount] = useState(100);
  const [ratePct, setRatePct] = useState(10);

  const result = useMemo(() => {
    return mode === "add"
      ? calculateSalesTaxAdd(amount, ratePct)
      : calculateSalesTaxRemove(amount, ratePct);
  }, [mode, amount, ratePct]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Receipt size={28} />}
          title="Sales Tax / VAT Calculator"
          subtitle="Add sales tax or VAT to a price, or work backwards from a tax-inclusive total."
        >
          <ToolModeToggle
            options={[
              { value: "add", label: "Add tax to a price" },
              { value: "remove", label: "Remove tax from a total" },
            ]}
            value={mode}
            onChange={setMode}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField
              label={mode === "add" ? "Price (before tax)" : "Total (tax-inclusive)"}
              icon={<ShoppingBag size={16} />}
              value={amount}
              onChange={setAmount}
              min={0}
            />
            <ToolNumberField label="Tax / VAT Rate" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} max={100} step={0.1} suffix="%" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Receipt size={24} />}
            label={mode === "add" ? "Total (with tax)" : "Price (before tax)"}
            value={formatUSD(mode === "add" ? result.totalPrice : result.basePrice)}
            description={
              <>
                Tax amount: <strong>{formatUSD(result.taxAmount)}</strong> at{" "}
                <strong>{result.ratePct}%</strong>.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Price before tax" value={formatUSD(result.basePrice)} />
              <ToolRow label="Tax amount" value={formatUSD(result.taxAmount)} highlight />
              <ToolRow label="Total (tax-inclusive)" value={formatUSD(result.totalPrice)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> works with any country&apos;s sales tax,
            VAT or GST rate — just enter the applicable percentage. For
            India-specific GST with CGST/SGST split, use our{" "}
            <a href="/gst-calculator" className="underline font-semibold text-[#002b5c]">GST Calculator</a>.
          </p>

          <ToolConsultCta context="GST registration, returns and business compliance in India" />
        </div>
      </div>
    </section>
  );
}
