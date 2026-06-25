import type {
  ContactDetails,
  Feature,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "2+", label: "Years powering installations" },
  { value: "24/7", label: "Support readiness" },
  { value: "99%", label: "Reliable backup uptime focus" },
];

export const features: Feature[] = [
  {
    title: "Clean Performance",
    description:
      "Energy systems designed for stable output, efficient charging, and lower operating overhead.",
  },
  {
    title: "Engineered Durability",
    description:
      "Battery platforms selected for long life cycles, consistent reserve capacity, and dependable field performance.",
  },
  {
    title: "Responsive Support",
    description:
      "Consultative guidance from sizing and selection to after-sales assistance for real-world installations.",
  },
];

export const contactDetails: ContactDetails = {
  phone: "+91 94470 83621",
  email: "dionpowersolutions@gmail.com",
  address:
    "Dion Power Solutions LLP, Near KSRTC Bus Stand, Thrissur, Kerala — 680001",
  hours: "Mon - Sat, 9:00 AM - 6:00 PM",
};
