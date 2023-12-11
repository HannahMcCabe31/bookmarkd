import pg from "pg";

const databaseUrl = process.env.DATABASE_STRING;

if (undefined === databaseUrl) {
        throw new Error(
                "This project requires a database URL"
        )
}

export const pool = new pg.Pool({
        connectionString: databaseUrl,
})
