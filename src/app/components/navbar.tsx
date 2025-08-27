"use client"
import Image from "next/image";
import { useState } from "react";
import {Search}  from "lucide-react";

export const Navbar = () => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      
      <div className="flex items-center space-x-4">
        <Image src="/guidelines/risa_logo.png" alt="RISA Logo" width={150} height={150} />
        <span className="text-[rgba(5,77,111,1)] font-semibold text-lg">
          Guidelines
        </span>
      </div>

      
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

      
      <div className="flex items-center space-x-4">
        
        <div className="relative">
          <button
            onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
            className="text-[rgba(5,77,111,1)] font-medium"
          >
            Home ▼
          </button>
          {homeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Reports
              </a>
            </div>
          )}
        </div>

        
        <button className="px-4 py-2 border border-[rgba(5,77,111,1)] text-[rgba(5,77,111,1)] bg-white rounded hover:bg-blue-50">
          Log in
        </button>

    {/* Signup button */}
        <button className="px-4 py-2 bg-[rgba(5,77,111,1)] text-white rounded hover:bg-blue-900">
          Sign up
        </button>
      </div>
    </nav>
  );
};
