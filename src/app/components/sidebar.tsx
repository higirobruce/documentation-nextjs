"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [digitalCertOpen, setDigitalCertOpen] = useState(false);

  const softwareRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const digitalCertRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const softwareSubItems = [
    { label: "Software Technical Documentation", href: "/guidelines/software/technical-docs" },
    { label: "Software Lifecycle Management", href: "/guidelines/software/lifecycle" },
  ];

  const digitalCertSubItems = [
    { label: "Digital Signature Guidelines", href: "/guidelines/digital-cert/signature" },
    { label: "PKI Service Integration Guidelines", href: "/guidelines/digital-cert/pki" },
  ];

  const toggleHeight = (ref: React.RefObject<HTMLDivElement>, open: boolean) => {
    if (!ref.current) return;
    const el = ref.current;

    if (open) {
      el.style.maxHeight = el.scrollHeight + "px";
      setTimeout(() => {
        el.style.maxHeight = "none";
      }, 300);
    } else {
      el.style.maxHeight = el.scrollHeight + "px";
      setTimeout(() => {
        el.style.maxHeight = "0px";
      }, 10);
    }
  };

  useEffect(() => {
    const isSoftwarePage = pathname?.startsWith('/guidelines/software');
    const isDigitalCertPage = pathname?.startsWith('/guidelines/digital-cert');
    
    setSoftwareOpen(isSoftwarePage || false);
    setDigitalCertOpen(isDigitalCertPage || false);
  }, [pathname]);

  useEffect(() => toggleHeight(softwareRef, softwareOpen), [softwareOpen]);
  useEffect(() => toggleHeight(digitalCertRef, digitalCertOpen), [digitalCertOpen]);

  return (
    <aside className="w-[350px] h-[calc(100vh-200px)] border-r p-4 mt-25 ml-6 bg-[#F8FAFD] border-gray-300 border-2 rounded-md transition-all duration-300 ease-in-out">
      <nav className="space-y-2 top-4">
        {/* Overview Heading */}
        <h2 className="text-[#078ECE] text-lg font-semibold px-3 py-2">Overview</h2>

        {/* Software Engineering Dropdown */}
        <button
          onClick={() => setSoftwareOpen(!softwareOpen)}
          className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20 flex justify-between items-center"
        >
          Software Engineering
          {softwareOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <div
          ref={softwareRef}
          style={{ maxHeight: "0px" }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          {softwareSubItems.map((sub) => {
            const isActive = pathname === sub.href;
            return (
              <Link
                key={sub.href}
                href={sub.href}
                className={`w-full block rounded-md px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#F2F8FF] text-[#003D8F] font-semibold  pl-5"
                    : "text-gray-500 hover:bg-[#F2F8FF] hover:text-[#003D8F]"
                }`}
              >
                {sub.label}
              </Link>
            );
          })}
        </div>

        {/* Digital Certificate Dropdown */}
        <button
          onClick={() => setDigitalCertOpen(!digitalCertOpen)}
          className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20 flex justify-between items-center"
        >
          Digital Certificate
          {digitalCertOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <div
          ref={digitalCertRef}
          style={{ maxHeight: "0px" }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          {digitalCertSubItems.map((sub) => {
            const isActive = pathname === sub.href;
            return (
              <Link
                key={sub.href}
                href={sub.href}
                className={`block rounded-md px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#F2F8FF] text-[#003D8F] font-semibold pl-5"
                    : "text-gray-500 hover:bg-[#F2F8FF] hover:text-[#003D8F]"
                }`}
              >
                {sub.label}
              </Link>
            );
          })}
        </div>

        {/* Infrastructure Menu Item */}
        <Link
          href="/guidelines/infrastructure"
          className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            pathname === "/guidelines/infrastructure"
              ? "bg-[#F2F8FF] text-[#003D8F] font-semibold pl-5"
              : "text-gray-600 hover:bg-gray-200/20"
          }`}
        >
          Infrastructure
        </Link>
      </nav>
    </aside>
  );
}
