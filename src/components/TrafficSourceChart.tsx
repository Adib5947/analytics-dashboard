"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { trafficSourcesData } from "@/data/chartData";

export default function TrafficSourceChart() {
  return (
    <div className="h-[360px] rounded-xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-gray-800 transition-all hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
      <h3 className="text-sm font-medium mb-2">Traffic Sources</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={trafficSourcesData} layout="vertical">
          <XAxis type="number" stroke="#94a3b8" />
          <YAxis dataKey="name" type="category" stroke="#94a3b8" />


          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(59,130,246,0.6)",
              borderRadius: "8px",
              color: "#fff",
            }}
          />


          <Bar
            dataKey="value"
            radius={[0, 6, 6, 0]}
            fill="#3b82f6"
            activeBar={{
              fill: "#3b82f6",
              stroke: "#60a5fa",
              strokeWidth: 1,
              filter: "drop-shadow(0 0 8px rgba(59,130,246,0.9))",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
