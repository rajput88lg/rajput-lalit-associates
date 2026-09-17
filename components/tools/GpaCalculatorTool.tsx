"use client";

import { useMemo, useState } from "react";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

import { calculateGpa, US_LETTER_GRADE_POINTS } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

type Row = { id: number; course: string; credits: number; grade: string };

const GRADE_OPTIONS = Object.keys(US_LETTER_GRADE_POINTS);

let nextId = 4;

export default function GpaCalculatorTool() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, course: "Course 1", credits: 3, grade: "A" },
    { id: 2, course: "Course 2", credits: 3, grade: "B+" },
    { id: 3, course: "Course 3", credits: 4, grade: "A-" },
  ]);

  const addRow = () => {
    setRows((r) => [...r, { id: nextId++, course: `Course ${r.length + 1}`, credits: 3, grade: "A" }]);
  };

  const removeRow = (id: number) => {
    setRows((r) => (r.length > 1 ? r.filter((row) => row.id !== id) : r));
  };

  const updateRow = (id: number, patch: Partial<Row>) => {
    setRows((r) => r.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  };

  const result = useMemo(
    () =>
      calculateGpa(
        rows.map((r) => ({ credits: r.credits, gradePoints: US_LETTER_GRADE_POINTS[r.grade] ?? 0 }))
      ),
    [rows]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<GraduationCap size={28} />}
          title="GPA / CGPA Calculator"
          subtitle="Add each course's credit hours and grade to calculate your weighted GPA (US 4.0 scale)."
        >
          <div className="space-y-4">
            {rows.map((row, idx) => (
              <div key={row.id} className="grid sm:grid-cols-[1fr_100px_120px_auto] gap-3 items-end">
                <div>
                  {idx === 0 && <label className="text-xs font-bold text-gray-500 mb-1 block">Course name</label>}
                  <input
                    type="text"
                    value={row.course}
                    onChange={(e) => updateRow(row.id, { course: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                </div>
                <div>
                  {idx === 0 && <label className="text-xs font-bold text-gray-500 mb-1 block">Credits</label>}
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    value={Number.isNaN(row.credits) ? "" : row.credits}
                    onChange={(e) => updateRow(row.id, { credits: e.target.value === "" ? 0 : Number(e.target.value) })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                </div>
                <div>
                  {idx === 0 && <label className="text-xs font-bold text-gray-500 mb-1 block">Grade</label>}
                  <select
                    value={row.grade}
                    onChange={(e) => updateRow(row.id, { grade: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  >
                    {GRADE_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => removeRow(row.id)}
                  aria-label="Remove course"
                  className="h-[46px] w-[46px] flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-300 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addRow}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#002b5c] border-2 border-dashed border-gray-300 hover:border-[#d99a2b] rounded-xl px-4 py-2.5 transition"
          >
            <Plus size={16} /> Add another course
          </button>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<GraduationCap size={24} />}
            label="Your GPA"
            value={result.gpa.toFixed(2)}
            description={<>Out of a 4.0 scale, based on {result.totalCredits} total credit hours.</>}
          />

          <div className="mt-6">
            <ToolPanel title="Calculation breakdown">
              <ToolRow label="Total credit hours" value={String(result.totalCredits)} />
              <ToolRow label="Total quality points" value={result.totalQualityPoints.toFixed(2)} />
              <ToolRow label="GPA (quality points ÷ credits)" value={result.gpa.toFixed(2)} bold highlight />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="education loan planning or documentation requiring academic records" />
        </div>
      </div>
    </section>
  );
}
