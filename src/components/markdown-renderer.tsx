"use client";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface MarkdownRendererProps {
  content: string;
  onHeadingsChange?: (headings: Heading[]) => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function MarkdownRenderer({ content, onHeadingsChange }: MarkdownRendererProps) {
  const [html, setHtml] = useState("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const processMarkdown = async () => {
      // Extract headings first
      const headingMatches = content.match(/^(#{1,6})\s+(.*)$/gm) || [];
      const extractedHeadings: Heading[] = headingMatches.map((match) => {
        const [, hashes, text] = match.match(/^(#{1,6})\s+(.*)$/) || [];
        const level = hashes.length;
        const cleanText = text.trim();
        const id = slugify(cleanText);
        return { id, text: cleanText, level };
      });

      // Process markdown with remark
      let processedContent = content;
      
      // Add IDs to headings
      extractedHeadings.forEach((heading) => {
        const regex = new RegExp(`^#{${heading.level}}\\s+${heading.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'm');
        processedContent = processedContent.replace(regex, `${'#'.repeat(heading.level)} ${heading.text} {#${heading.id}}`);
      });

      try {
        const result = await remark()
          .use(remarkGfm)
          .use(remarkHtml, { sanitize: false })
          .process(processedContent);

        let htmlOutput = String(result);
        
        // Post-process to add proper heading IDs
        extractedHeadings.forEach((heading) => {
          const headingRegex = new RegExp(`<h${heading.level}[^>]*>${heading.text}\\s*\\{#${heading.id}\\}<\/h${heading.level}>`, 'g');
          htmlOutput = htmlOutput.replace(headingRegex, `<h${heading.level} id="${heading.id}" class="heading-${heading.level}">${heading.text}</h${heading.level}>`);
        });

        // Clean up any remaining {#id} patterns
        htmlOutput = htmlOutput.replace(/\s*\{#[^}]+\}/g, '');

        setHtml(htmlOutput);
        setHeadings(extractedHeadings);
        onHeadingsChange?.(extractedHeadings);
      } catch (error) {
        console.error("Error processing markdown:", error);
        setHtml('<p>Error rendering markdown content</p>');
      }
    };

    processMarkdown();
  }, [content, onHeadingsChange]);

  return (
    <div className="markdown-content">
      <div 
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-none"
      />
    </div>
  );
}
