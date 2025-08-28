import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MarkdownPageClient } from "./client-page";

function getFilePath(category: string, slug: string) {
  const base = path.join(process.cwd(), "content");
  if (category === "software") {
    if (slug === "technical-docs") {
      return path.join(base, "software-engineering", "software-technical-documentation.md");
    }
    if (slug === "lifecycle") {
      return path.join(base, "software-engineering", "software-lifecycle-management.md");
    }
  }
  if (category === "digital-cert") {
    if (slug === "signature") {
      return path.join(base, "digital-cert", "signature.md");
    }
    if (slug === "pki") {
      return path.join(base, "digital-cert", "pki.md");
    }
  }
  return null;
}

export default async function MarkdownPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const filePath = getFilePath(category, slug);
  if (!filePath || !fs.existsSync(filePath)) {
    notFound();
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const content = raw.replace(/^---[\s\S]*?---\n?/, "");

  return <MarkdownPageClient content={content} />;
}


