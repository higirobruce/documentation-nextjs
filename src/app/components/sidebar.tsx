'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItemData {
  name: string;
  children?: NavItemData[];
  path?: string;
}

const NavItem = ({ item, parentPath, currentPath, openItems, setOpenItems }: { item: NavItemData; parentPath: string; currentPath: string | null; openItems: string[]; setOpenItems: (items: string[]) => void; }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const itemName = item.name.replace(/\.md$/, '');
  const linkPath = `${parentPath}/${itemName}`;

  const isOpen = openItems.includes(linkPath);

  const normalizePath = (path: string | null) => path?.replace(/\/$/, '') || '';

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (isOpen) {
      setOpenItems(openItems.filter(item => item !== linkPath));
    } else {
      setOpenItems([...openItems, linkPath]);
    }
  };

  if (item.children) {
    return (
      <div>
        <button
          onClick={handleToggle}
          className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200/20 flex justify-between items-center"
        >
          {item.name}
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden transition-max-height duration-300 ease-in-out"
        >
          {item.children.map((child) => (
            <NavItem key={child.name} item={child} parentPath={linkPath} currentPath={currentPath} openItems={openItems} setOpenItems={setOpenItems} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={linkPath}
      className={`w-full block rounded-md px-6 py-2 text-sm font-medium transition-colors duration-200 text-gray-500 hover:bg-[#F2F8FF] hover:text-[#003D8F] ${
        normalizePath(currentPath) === normalizePath(linkPath)
          ? 'bg-[#F2F8FF] text-[#003D8F] font-semibold pl-5'
          : ''
      }`}
    >
      {itemName}
    </Link>
  );
};

export function Sidebar() {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<NavItemData[]>([]);
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setNavItems(data));
  }, []);

  useEffect(() => {
    const activePath = navItems.flatMap(item => item.children ? item.children.map(child => `/guidelines/${item.name}/${child.name.replace(/\.md$/, '')}`) : []).find(path => pathname?.startsWith(path));
    if (activePath) {
      setOpenItems(prev => [...new Set([...prev, activePath.substring(0, activePath.lastIndexOf('/'))])]);
    }
  }, [pathname, navItems]);

  return (
    <aside className="w-[350px] h-[calc(100vh-200px)] border-r p-4 mt-25 ml-6 bg-[#F8FAFD] border-gray-300 border-2 rounded-md transition-all duration-300 ease-in-out">
      <nav className="space-y-2 top-4">
        <h2 className="text-[#078ECE] text-lg font-semibold px-3 py-2">Overview</h2>
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} parentPath="/guidelines" currentPath={pathname} openItems={openItems} setOpenItems={setOpenItems} />
        ))}
      </nav>
    </aside>
  );
}
