import { NextResponse } from "next/server";
import { getNoteBySlug } from "@/lib/notes";

/** GET /api/notes/:slug -> a single note, or 404 if it doesn't exist */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  return NextResponse.json(note);
}
