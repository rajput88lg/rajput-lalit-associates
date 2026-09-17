"use client";

import { useState } from "react";
import { Dice5, Shuffle } from "lucide-react";

import { generateRandomInts } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function RandomNumberGeneratorTool() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(5);
  const [unique, setUnique] = useState(true);
  const [results, setResults] = useState<number[]>(() => generateRandomInts({ min: 1, max: 100, count: 5, unique: true }));

  const generate = () => {
    setResults(generateRandomInts({ min, max, count, unique }));
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Dice5 size={28} />}
          title="Random Number Generator"
          subtitle="Generate random numbers within any range — for draws, samples, passwords or games."
        >
          <div className="grid sm:grid-cols-3 gap-4">
            <ToolNumberField label="Minimum" icon={<Dice5 size={16} />} value={min} onChange={setMin} />
            <ToolNumberField label="Maximum" icon={<Dice5 size={16} />} value={max} onChange={setMax} />
            <ToolNumberField label="How many numbers?" icon={<Dice5 size={16} />} value={count} onChange={setCount} min={1} step={1} />
          </div>

          <label className="flex items-center gap-3 text-sm font-bold text-[#002b5c]">
            <input
              type="checkbox"
              checked={unique}
              onChange={(e) => setUnique(e.target.checked)}
              className="w-5 h-5 accent-[#d99a2b]"
            />
            No duplicates (unique numbers only)
          </label>

          <button
            type="button"
            onClick={generate}
            className="btn-shine inline-flex items-center justify-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
          >
            <Shuffle size={18} /> Generate Random Numbers
          </button>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Dice5 size={24} />}
            label="Result"
            value={results.join(", ")}
            description={
              <>
                {results.length} random number{results.length !== 1 ? "s" : ""} between{" "}
                <strong>{min}</strong> and <strong>{max}</strong>
                {unique ? " (all unique)" : ""}.
              </>
            }
          />

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="lucky draws, employee selection or audit sampling for your business" />
        </div>
      </div>
    </section>
  );
}
