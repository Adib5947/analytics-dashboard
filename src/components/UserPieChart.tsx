"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userDistributionData } from "@/data/chartData";

const COLORS = ["#3b82f6", "#f59e0b", "#22c55e"];

export default function UserPieChart() {
  return (
    <div className="h-[360px] rounded-xl p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-gray-800 transition-all hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
      <h3 className="text-sm font-medium mb-2">User Distribution</h3>

      <div className="flex h-full items-center">
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userDistributionData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {userDistributionData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>

              {/* ✅ FIX: dark tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(59,130,246,0.6)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-1/2 space-y-3 pl-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            Desktop
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            Tablet
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            Mobile
          </div>
        </div>
      </div>
    </div>
  );
}
