"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      
      {/* Logo & Title */}
      <div className="flex items-center space-x-4">
        <Image src="/guidelines/risa_logo.png" alt="RISA Logo" width={150} height={150} />
        <Link href="/" className="text-[#078ECE] font-semibold text-lg hover:text-[#003D8F] transition-colors duration-200">
          Guidelines
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20}/>
          </span>
          <input
            type="text"
            placeholder="Ask or search"
            className="w-full border rounded-lg pl-10 pr-16 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
            CTRL K
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">

        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
            className="flex items-center font-medium hover:cursor-pointer "
          >
            Home <ChevronDown size={16} className="ml-1" />
          </button>
          {homeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <a href="https://www.risa.gov.rw/" className="block px-4 py-2 hover:bg-gray-100">
                Visit our Website
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Contact Us
              </a>
            </div>
          )}
        </div>

        {/* Auth Buttons */}
        <button className="px-4 py-2 border border-[#078ECE] text-[#078ECE] bg-white rounded hover:bg-blue-50">
          Log in
        </button>
        <button className="px-4 py-2 bg-[#078ECE] text-white rounded hover:bg-blue-900">
          Sign up
        </button>
      </div>
    </nav>
  );
};
