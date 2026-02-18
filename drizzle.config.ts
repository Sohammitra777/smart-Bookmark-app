import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./config/drizzle/schema",
    out: "./config/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!, // <— using connection string
    },
    verbose: true,
    strict: true,
});
