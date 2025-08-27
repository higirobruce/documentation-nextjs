"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function Sidebar() {
  const items = [
    { label: "Overview", href: "/" },
    { label: "View Guidelines", href: "/guidelines" },
    { label: "Software Engineering", href: "/guidelines/software" },
    { label: "Digital Certificate", href: "/guidelines/certificate" },
  ];

  return (
    <aside className="w-64 border-r p-4" style={{ backgroundColor: "rgba(248, 250, 253, 1)" }}>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
