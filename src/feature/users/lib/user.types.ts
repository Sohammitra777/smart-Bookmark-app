import { users } from "@/src/config/drizzle/schema/schema";

export type UsersType = typeof users.$inferSelect;

export type UserServiceType<T> =
    | {
          success: false;
          message: string;
      }
    | {
          success: true;
          message: string | null;
      };
