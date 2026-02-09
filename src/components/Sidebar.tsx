"use client";

import clsx from "clsx";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const navItems = ["Dashboard", "Users", "Orders", "Settings"];

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  return (
    <>

      {onClose && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={clsx(
          "fixed z-50 h-full w-64 bg-[#0b1220] border-r border-gray-800 p-6 transition-transform duration-300",
          "lg:static lg:translate-x-0",
          onClose ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""
        )}
      >

        <h2 className="text-xl font-bold mb-8 tracking-tight">
          <span className="text-white">Appify</span>
          <span className="text-blue-500">Devs</span>
        </h2>


        <nav className="space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
                block rounded-xl px-4 py-2 text-sm
                bg-[#0f172a]
                text-gray-300
                border border-gray-800
                hover:border-blue-500/60
                hover:text-white
                hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]
                transition-all
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
