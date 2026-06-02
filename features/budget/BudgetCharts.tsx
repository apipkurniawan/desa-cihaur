"use client";

import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { BudgetCategory } from "@/types/budget";

type BudgetChartsProps = {
  categories: BudgetCategory[];
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    notation: value >= 1000000000 ? "compact" : "standard",
  }).format(value);

export function BudgetCharts({ categories }: BudgetChartsProps) {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setChartReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const pieData = useMemo(
    () =>
      categories.map((item) => ({
        name: item.name,
        value: item.realized,
        color: item.color,
      })),
    [categories],
  );

  const barData = useMemo(
    () =>
      categories.map((item) => ({
        name: item.name.replace("Penyelenggaraan ", "").replace("Kemasyarakatan", "Masyarakat"),
        pagu: item.budget,
        realisasi: item.realized,
      })),
    [categories],
  );

  if (!chartReady) {
    return (
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="h-80 animate-pulse rounded-[28px] bg-white/70" />
        <div className="h-80 animate-pulse rounded-[28px] bg-white/70" />
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-[0_18px_60px_rgba(47,107,63,0.08)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Komposisi Realisasi</p>
            <h2 className="mt-2 text-xl font-bold text-app-text">Sebaran dana per bidang</h2>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Triwulan II</span>
        </div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={68} outerRadius={104} paddingAngle={4}>
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {pieData.map((item) => (
            <div key={item.name} className="flex items-center gap-2 rounded-2xl bg-[#FAFAF7] px-3 py-2 text-xs font-semibold text-app-muted">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="line-clamp-1">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-[#DCCFB7] bg-white p-5 shadow-[0_18px_60px_rgba(47,107,63,0.08)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Pagu vs Realisasi</p>
            <h2 className="mt-2 text-xl font-bold text-app-text">Perbandingan alokasi anggaran</h2>
          </div>
          <span className="rounded-full bg-[#F5EEDC] px-3 py-1 text-xs font-bold text-[#8A5B20]">Dalam rupiah</span>
        </div>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
            <BarChart data={barData} layout="vertical" margin={{ left: 8, right: 18, top: 4, bottom: 4 }}>
              <XAxis type="number" tickFormatter={(value) => formatCurrency(Number(value))} tick={{ fontSize: 11, fill: "#667085" }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" width={116} tick={{ fontSize: 11, fill: "#2D3748" }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} cursor={{ fill: "rgba(47,107,63,0.06)" }} />
              <Bar dataKey="pagu" name="Pagu" fill="#DCCFB7" radius={[0, 10, 10, 0]} barSize={14} />
              <Bar dataKey="realisasi" name="Realisasi" fill="#2F6B3F" radius={[0, 10, 10, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-app-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#DCCFB7]" />
            Pagu
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            Realisasi
          </span>
        </div>
      </section>
    </div>
  );
}
