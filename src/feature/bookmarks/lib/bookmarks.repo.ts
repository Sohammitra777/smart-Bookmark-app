import db from "@/src/config/drizzle/db";
import { bookmarks } from "@/src/config/drizzle/schema/schema";
import { eq } from "drizzle-orm";

export const bookmarksRepo = {
    insertBookmark: async (userId: string, title: string, url: string) => {
        await db.insert(bookmarks).values({ userId, title, url });
    },

    getBookmarksByUserId: async (userId: string) => {
        return db.select().from(bookmarks).where(eq(bookmarks.userId, userId));
    },

    deleteBookmark: async (id: string) => {
        await db.delete(bookmarks).where(eq(bookmarks.id, id));
    },
};
