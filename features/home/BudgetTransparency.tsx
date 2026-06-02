"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { budgetItems } from "@/lib/data/home";
import { MotionSection } from "./Motion";
import { SectionHeading } from "./SectionHeading";

const chartData = [
  { name: "Pembangunan", value: 38, color: "#2F6B3F" },
  { name: "Pemberdayaan", value: 24, color: "#6BA368" },
  { name: "Bantuan Sosial", value: 20, color: "#D4A72C" },
  { name: "Operasional", value: 18, color: "#A8B99B" },
];

export function BudgetTransparency() {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setChartReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <MotionSection className="bg-accent/65 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparansi Anggaran"
          title="APBDes Tahun Berjalan"
          description="Ringkasan pendapatan, belanja, dan realisasi anggaran sebagai bentuk keterbukaan informasi publik."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {budgetItems.map((item) => (
              <Card key={item.label} className="bg-white">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-app-muted">{item.label}</p>
                      <p className="mt-1 text-2xl font-bold text-app-text">{item.value}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-accent">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-white">
            <CardContent className="p-5">
              {chartReady ? (
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
                    <PieChart>
                      <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={70} outerRadius={105} paddingAngle={3}>
                        {chartData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-72 animate-pulse rounded-2xl bg-accent" />
              )}
              <div className="grid gap-2 sm:grid-cols-2">
                {chartData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm text-app-muted">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href="/warga/transparansi">Lihat Detail Anggaran</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}
