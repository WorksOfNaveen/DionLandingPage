import type { BatteryProduct } from "@/types";

export const defaultProducts: Array<BatteryProduct & { sortOrder: number }> = [
  {
    name: "BikeMax 12V",
    category: "Two-Wheeler",
    description:
      "Reliable 12V battery for motorcycles and bikes with strong cranking power and dependable daily use.",
    capacity: "9 Ah",
    lifecycle: "18 months warranty",
    sortOrder: 1,
  },
  {
    name: "ScootVolt 12V",
    category: "Scooter / E-Scooter",
    description:
      "Built for scooters and e-scooters with stable performance, quick starts, and consistent ride readiness.",
    capacity: "12 Ah",
    lifecycle: "18 months warranty",
    sortOrder: 2,
  },
  {
    name: "AutoPower 12V",
    category: "Auto Rickshaw",
    description:
      "Heavy-duty battery option for auto rickshaws that need durable backup for frequent starts and long shifts.",
    capacity: "80 Ah",
    lifecycle: "24 months warranty",
    sortOrder: 3,
  },
  {
    name: "CarVolt Pro",
    category: "Passenger Car",
    description:
      "A dependable car battery line for sedans and hatchbacks with steady power delivery and low-maintenance use.",
    capacity: "55 Ah",
    lifecycle: "24 months warranty",
    sortOrder: 4,
  },
  {
    name: "HomeGuard Inverter",
    category: "Home Inverter",
    description:
      "Tubular inverter battery for homes and small offices, designed for longer backup during outages.",
    capacity: "150 Ah",
    lifecycle: "36 months warranty",
    sortOrder: 5,
  },
  {
    name: "TruckMaster 12V",
    category: "Commercial Vehicle",
    description:
      "High-capacity battery built for trucks and heavy commercial vehicles, handling long hauls and frequent engine restarts with ease.",
    capacity: "150 Ah",
    lifecycle: "30 months warranty",
    sortOrder: 6,
  },
  {
    name: "SUVolt 12V",
    category: "SUV / MUV",
    description:
      "Engineered for SUVs and MUVs, this battery delivers powerful cranking performance and supports higher electrical loads from modern vehicle features.",
    capacity: "75 Ah",
    lifecycle: "24 months warranty",
    sortOrder: 7,
  },
  {
    name: "SolarStore 12V",
    category: "Solar / Off-Grid",
    description:
      "Deep-cycle battery optimised for solar panels and off-grid setups, with high charge acceptance and extended cycle life.",
    capacity: "200 Ah",
    lifecycle: "48 months warranty",
    sortOrder: 8,
  },
  {
    name: "UPSGuard Pro",
    category: "UPS / Industrial",
    description:
      "VRLA AGM battery for UPS systems, server rooms, and industrial equipment requiring reliable, maintenance-free standby power.",
    capacity: "100 Ah",
    lifecycle: "36 months warranty",
    sortOrder: 9,
  },
  {
    name: "E-RickPower 48V",
    category: "E-Rickshaw",
    description:
      "Traction battery pack designed for e-rickshaws, offering stable deep-discharge recovery and long daily range on a single charge.",
    capacity: "100 Ah",
    lifecycle: "24 months warranty",
    sortOrder: 10,
  },
];
