import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/lib/schema";

const globalForDb = globalThis as unknown as {
  sql: ReturnType<typeof postgres> | undefined;
};

function createClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!globalForDb.sql) {
    globalForDb.sql = postgres(connectionString, { prepare: false });
  }

  return globalForDb.sql;
}

export function getDb() {
  const client = createClient();

  if (!client) {
    return null;
  }

  return drizzle(client, { schema });
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}
