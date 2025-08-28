
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

const getDirectoryStructure = (dir: string): ({
    name: string;
    children: any;
    path?: undefined;
} | {
    name: string;
    path: string;
    children?: undefined;
})[] => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const structure = dirents
    .map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) {
        return {
          name: dirent.name,
          children: getDirectoryStructure(res),
        };
      } else {
        return {
          name: dirent.name,
          path: res,
        };
      }
    })
    .filter((item) => item !== null);
  return structure;
};

export async function GET() {
  try {
    const structure = getDirectoryStructure(contentDirectory);
    return NextResponse.json(structure);
  } catch (error) {
    console.error('Error reading content directory:', error);
    return NextResponse.json({ error: 'Failed to read content directory' }, { status: 500 });
  }
}
