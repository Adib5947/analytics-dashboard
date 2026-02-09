"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 6500 },
  { month: "Jul", revenue: 7500 },
  { month: "Aug", revenue: 6800 },
  { month: "Sep", revenue: 7200 },
  { month: "Oct", revenue: 8300 },
  { month: "Nov", revenue: 9200 },
  { month: "Dec", revenue: 10200 },
];

export default function RevenueLineChart() {
  return (
    <div className="h-[360px] rounded-xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-gray-800 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all">
      <h3 className="text-sm font-medium mb-2">Revenue Over Time</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(59,130,246,0.6)",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
