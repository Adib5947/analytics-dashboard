"use client";

import { useEffect, useState } from "react";

import KpiCard from "@/components/KpiCard";
import RevenueLineChart from "@/components/RevenueLineChart";
import OrdersBarChart from "@/components/OrdersBarChart";
import UserPieChart from "@/components/UserPieChart";
import TrafficSourceChart from "@/components/TrafficSourceChart";
import Filters from "@/components/Filters";
import SkeletonCard from "@/components/SkeletonCard";
import SkeletonChart from "@/components/SkeletonChart";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="mt-2 text-gray-400">
          Welcome to the admin analytics overview.
        </p>
      </div>


      {!loading && <Filters />}


      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Key Metrics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }) : []).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

          {!loading && (
            <>
              <KpiCard title="Total Revenue" value="$54,230" change={12.5} />
              <KpiCard title="Total Users" value="1,245" change={8.2} />
              <KpiCard title="Orders" value="342" change={-3.4} />
              <KpiCard title="Conversion Rate" value="4.3%" change={1.1} />
            </>
          )}
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Performance Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <>
              <SkeletonChart />
              <SkeletonChart />
            </>
          ) : (
            <>
              <RevenueLineChart />
              <OrdersBarChart />
            </>
          )}
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Users & Traffic Sources
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <>
              <SkeletonChart />
              <SkeletonChart />
            </>
          ) : (
            <>
              <UserPieChart />
              <TrafficSourceChart />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
