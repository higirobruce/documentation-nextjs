"use client";

import { useState } from "react";
import { Navbar } from "@/app/components/navbar";
import { Sidebar } from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { TableOfContents } from "@/components/table-of-contents";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface MarkdownPageClientProps {
  content: string;
}

export function MarkdownPageClient({ content }: MarkdownPageClientProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <main className="flex-1 p-8 mt-12">
          <div className="max-w-4xl">
            <MarkdownRenderer 
              content={content} 
              onHeadingsChange={setHeadings}
            />
          </div>
        </main>
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}
