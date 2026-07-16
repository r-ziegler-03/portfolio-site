import { NextRequest, NextResponse } from "next/server";
import { getAllNotes } from "@/lib/notes";

/**
 * GET /api/notes            -> every note
 * GET /api/notes?tag=sql    -> notes tagged "sql"
 */
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const notes = getAllNotes();

  const filtered = tag
    ? notes.filter((note) =>
        note.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      )
    : notes;

  return NextResponse.json(filtered);
}
