import fs from "fs";
import path from "path";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

export type Note = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  body: string;
};

function parseNote(filename: string): Note {
  const slug = filename.replace(/\.md$/, "");
  const text = fs.readFileSync(path.join(NOTES_DIR, filename), "utf8");

  if (!text.startsWith("---\n")) {
    return { slug, title: slug, tags: [], date: "", body: text.trim() };
  }

  const [, frontmatter, ...rest] = text.split("---\n");
  const body = rest.join("---\n").trim();

  const meta: Record<string, string> = {};
  for (const line of frontmatter.trim().split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  const tags = (meta.tags ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    slug,
    title: meta.title ?? slug,
    tags,
    date: meta.date ?? "",
    body,
  };
}

export function getAllNotes(): Note[] {
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));
  return files.map(parseNote).sort((a, b) => a.title.localeCompare(b.title));
}

export function getNoteBySlug(slug: string): Note | undefined {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(NOTES_DIR, file))) return undefined;
  return parseNote(file);
}
