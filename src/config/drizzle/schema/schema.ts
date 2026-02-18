// import table + column helpers
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    email: varchar("email", { length: 255 }).unique(),
});

export const bookmarks = pgTable("bookmarks", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id)
        .notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    url: varchar("url").notNull(),
});
