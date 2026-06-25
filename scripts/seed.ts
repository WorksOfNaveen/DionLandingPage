import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { defaultProducts } from "@/lib/seed-data";
import { products } from "@/lib/schema";

config({ path: ".env.local" });

async function seed() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set in .env.local");
  }

  const client = postgres(connectionString, { prepare: false });
  const db = drizzle(client);

  const existing = await db.select({ id: products.id }).from(products).limit(1);

  if (existing.length > 0) {
    console.log("Products already seeded. Skipping.");
    await client.end();
    return;
  }

  await db.insert(products).values(
    defaultProducts.map((product) => ({
      name: product.name,
      category: product.category,
      description: product.description,
      capacity: product.capacity,
      lifecycle: product.lifecycle,
      sortOrder: product.sortOrder,
      active: true,
    })),
  );

  console.log(`Seeded ${defaultProducts.length} products.`);
  await client.end();
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
