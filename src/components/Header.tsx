"use client";

import { Menu, Bell } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-[#0b1220] px-6 py-4 border-b border-gray-800">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg font-semibold">Dashboard Overview</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-800 transition">
          <Bell size={18} />
        </button>

        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}
