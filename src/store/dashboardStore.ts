import { create } from "zustand";

export type DateRange = "7d" | "30d" | "12m";
export type UserType = "all" | "free" | "premium" | "enterprise";

type DashboardState = {
  dateRange: DateRange;
  userType: UserType;
  setDateRange: (range: DateRange) => void;
  setUserType: (type: UserType) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  dateRange: "30d",
  userType: "all",
  setDateRange: (range) => set({ dateRange: range }),
  setUserType: (type) => set({ userType: type }),
}));
