import db from "@/src/config/drizzle/db";
import { users } from "@/src/config/drizzle/schema/schema";
import { eq } from "drizzle-orm";

const userRepo = {
    getUserById: async (id: string) => {
        return await db.select().from(users).where(eq(users.id, id));
    },

    insertUser: async (id: string, email: string | undefined) => {
        return await db.insert(users).values({ id, email }).returning();
    },
};

export default userRepo;
