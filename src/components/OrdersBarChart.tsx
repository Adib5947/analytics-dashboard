"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ordersData } from "@/data/chartData";

export default function OrdersBarChart() {
  return (
    <div
      className="
        h-[360px]
        rounded-xl
        p-4
        bg-linear-to-br from-slate-900 to-slate-800
        border border-gray-800
        transition-all
        hover:border-emerald-400/60
        hover:shadow-[0_0_22px_rgba(34,197,94,0.35)]
      "
    >
      <h3 className="text-sm font-medium mb-2 text-white">
        Orders Per Month
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ordersData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />

          {/* ✅ Remove white hover background */}
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(34,197,94,0.6)",
              borderRadius: "8px",
              color: "#fff",
            }}
            itemStyle={{ color: "#22c55e" }}
            labelStyle={{ color: "#86efac" }}
          />

          {/* ✅ Glow ONLY the active green bar */}
          <Bar
            dataKey="orders"
            fill="#22C55E"
            radius={[6, 6, 0, 0]}
            activeBar={{
              fill: "#22C55E",
              stroke: "#4ade80",
              strokeWidth: 2,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
