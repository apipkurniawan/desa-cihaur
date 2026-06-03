"use client";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type StatusDatum = {
  name: string;
  value: number;
  color: string;
};

export function StatusDonutChart({ data }: { data: StatusDatum[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <div className="h-64 animate-pulse rounded-[24px] bg-primary/10" />;
  }

  return (
    <div className="h-64 min-h-64 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={92} paddingAngle={4}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              border: "1px solid #E7E2D4",
              borderRadius: 16,
              boxShadow: "0 18px 60px rgba(47,107,63,0.12)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
