"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function WargaChart({ data }: { data: { dusun: string; total: number }[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <div className="h-80 min-h-80 w-full animate-pulse rounded-[24px] bg-primary/10" />;
  }

  return (
    <div className="h-80 min-h-80 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <BarChart data={data} margin={{ left: -16, right: 8, top: 12, bottom: 0 }}>
          <CartesianGrid stroke="#E7E2D4" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="dusun" tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(47,107,63,0.06)" }}
            contentStyle={{
              border: "1px solid #E7E2D4",
              borderRadius: 16,
              boxShadow: "0 18px 60px rgba(47,107,63,0.12)",
            }}
          />
          <Bar dataKey="total" name="Jumlah Warga" fill="#2F6B3F" radius={[10, 10, 0, 0]} barSize={34} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
