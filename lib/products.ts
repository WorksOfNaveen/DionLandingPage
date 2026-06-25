import { defaultProducts } from "@/lib/seed-data";
import type { BatteryProduct } from "@/types";

export async function getProducts(): Promise<BatteryProduct[]> {
  return defaultProducts.map(({ name, category, description, capacity, lifecycle }) => ({
    name,
    category,
    description,
    capacity,
    lifecycle,
  }));
}
