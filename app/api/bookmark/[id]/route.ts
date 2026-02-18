import bookmarkServices from "@/src/feature/bookmarks/lib/bookmarks.services";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const result = await bookmarkServices.deleteBookmark(id);
    return NextResponse.json(result);
}
