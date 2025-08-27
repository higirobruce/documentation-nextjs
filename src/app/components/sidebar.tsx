"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function Sidebar() {
  const [softwareOpen, setSoftwareOpen] = useState(false);

  const items = [
    { label: "Overview", href: "/" },
    { label: "View Guidelines", href: "/guidelines" },
  ];

  const softwareSubItems = [
    { label: "Software Technical Documentation", href: "/guidelines/software/technical-docs" },
    { label: "Software Lifecycle Management", href: "/guidelines/software/lifecycle" },
  ];

  return (
    <aside className="w-64 border-r p-4 m-4 h-80 bg-[#F8FAFD] border-gray-300 border-2 rounded-md">
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

        <button
          onClick={() => setSoftwareOpen(!softwareOpen)}
          className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20 flex justify-between items-center"
        >
          Software Engineering
          <span>{softwareOpen ? "▲" : "▼"}</span>
        </button>

        {softwareOpen &&
          softwareSubItems.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={cn(
                "block rounded-md px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200/20"
              )}
            >
              {sub.label}
            </Link>
          ))}

        <Link
          href="/guidelines/certificate"
          className={cn(
            "block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20"
          )}
        >
          Digital Certificate
        </Link>
      </nav>
    </aside>
  );
}
