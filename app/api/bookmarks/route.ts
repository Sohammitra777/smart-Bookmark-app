import bookmarkServices from "@/src/feature/bookmarks/lib/bookmarks.services";
import { NextResponse } from "next/server";

export const bookmarksController = {
    getBookmarks: async (userId: string) => {
        try {
            if (!userId) {
                return NextResponse.json(
                    { error: "Missing userId" },
                    { status: 400 },
                );
            }

            const bookmarks = await bookmarkServices.getBookmarks(userId);

            return NextResponse.json(bookmarks, { status: 200 });
        } catch (error: any) {
            console.error("GET BOOKMARKS ERROR:", error);

            return NextResponse.json(
                { error: "Failed to fetch bookmarks" },
                { status: 500 },
            );
        }
    },

    insertBookmark: async (userId: string, title: string, url: string) => {
        try {
            if (!userId || !title || !url) {
                return NextResponse.json(
                    { error: "Missing fields" },
                    { status: 400 },
                );
            }

            await bookmarkServices.insertBookmark(userId, title, url);

            return NextResponse.json({ success: true }, { status: 201 });
        } catch (error: any) {
            console.error("INSERT BOOKMARK ERROR:", error);

            return NextResponse.json(
                { error: "Failed to insert bookmark" },
                { status: 500 },
            );
        }
    },

    deleteBookmark: async (id: string) => {
        try {
            if (!id) {
                return NextResponse.json(
                    { error: "Missing bookmark id" },
                    { status: 400 },
                );
            }

            await bookmarkServices.deleteBookmark(id);

            return NextResponse.json({ success: true }, { status: 200 });
        } catch (error: any) {
            console.error("DELETE BOOKMARK ERROR:", error);

            return NextResponse.json(
                { error: "Failed to delete bookmark" },
                { status: 500 },
            );
        }
    },
};
