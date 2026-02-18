import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
});

pool.connect()
    .then((client) => {
        console.log({ databaseMessage: "Connected successfully!" });
        client.release();
    })
    .catch((err) => {
        console.error(
            { databaseError: "Connection Failed, please check" },
            err.message,
        );
    });

const db = drizzle(pool);

export default db;
