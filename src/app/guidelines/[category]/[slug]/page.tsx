import { notFound } from "next/navigation";
import { MarkdownPageClient } from "./client-page";

async function getContent(category: string, slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/api/content/${category}/${slug}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.content;
}

export default async function MarkdownPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const content = await getContent(category, slug);

  if (!content) {
    notFound();
  }

  return <MarkdownPageClient content={content} />;
}


