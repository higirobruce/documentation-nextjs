
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

const findFile = (dir: string, slug: string): string | null => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      const result = findFile(res, slug);
      if (result) {
        return result;
      }
    } else {
      if (dirent.name.replace(/\.md$/, '') === slug) {
        return res;
      }
    }
  }
  return null;
};

export async function GET(
  _request: NextRequest,
  { params }: { params: { category: string; slug: string } }
) {
  try {
    const { category, slug } = params;
    const categoryPath = path.join(contentDirectory, category);
    const filePath = findFile(categoryPath, slug);

    if (filePath && fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      const content = raw.replace(/^---[\s\S]*?---\n?/, '');
      return NextResponse.json({ content });
    }

    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  } catch (error) {
    console.error('Error reading content file:', error);
    return NextResponse.json({ error: 'Failed to read content file' }, { status: 500 });
  }
}