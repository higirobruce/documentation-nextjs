"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleHeadings.length > 0) {
          // Get the first visible heading
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0
      }
    );

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const getLevelClass = (level: number) => {
    switch (level) {
      case 1:
        return "text-sm font-semibold text-gray-900";
      case 2:
        return "text-sm font-medium text-gray-700 ml-2";
      case 3:
        return "text-sm text-gray-600 ml-4";
      default:
        return `text-sm text-gray-500 ml-${Math.min(level * 2, 8)}`;
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="w-56 p-6 bg-white sticky top-24 h-[calc(100vh-8rem)] overflow-auto">
      <h3 className="text-gray-800 text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        Contents
      </h3>
      <nav className="space-y-0">
        {headings.filter(h => h.level <= 3).map((heading) => (
          <button
            key={heading.id}
            onClick={() => handleClick(heading.id)}
            className={`
              block w-full text-left py-2 transition-all duration-150 border-l-2 border-transparent hover:border-gray-300
              ${getLevelClass(heading.level)}
              ${activeId === heading.id 
                ? "border-l-2 !border-blue-500 bg-blue-50/50 text-blue-700" 
                : "hover:text-gray-900 hover:bg-gray-50/50"
              }
            `}
          >
            <span className="leading-relaxed block overflow-hidden text-ellipsis whitespace-nowrap">
              {heading.text}
            </span>
          </button>
        ))}
      </nav>
      
      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">
          {activeId && headings.find(h => h.id === activeId) 
            ? `Reading: ${headings.find(h => h.id === activeId)?.text?.slice(0, 25)}${(headings.find(h => h.id === activeId)?.text?.length || 0) > 25 ? '...' : ''}`
            : 'Scroll to navigate'
          }
        </div>
      </div>
    </aside>
  );
}
