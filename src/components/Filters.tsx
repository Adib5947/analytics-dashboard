"use client";

import {
  useDashboardStore,
  DateRange,
  UserType,
} from "@/store/dashboardStore";

export default function Filters() {
  const {
    dateRange,
    userType,
    setDateRange,
    setUserType,
  } = useDashboardStore();

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {/* Date Range */}
      <select
        value={dateRange}
        onChange={(e) =>
          setDateRange(e.target.value as DateRange)
        }
        className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-sm"
      >
        <option value="7d">Last 7 Days</option>
        <option value="30d">Last 30 Days</option>
        <option value="12m">Last 12 Months</option>
      </select>

      {/* User Type */}
      <select
        value={userType}
        onChange={(e) =>
          setUserType(e.target.value as UserType)
        }
        className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-sm"
      >
        <option value="all">All Users</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
}
