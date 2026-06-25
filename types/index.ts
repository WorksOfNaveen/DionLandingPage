export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type BatteryProduct = {
  name: string;
  category: string;
  description: string;
  capacity: string;
  lifecycle: string;
};

export type Testimonial = {
  name: string;
  review: string;
  rating: number;
  source?: string;
  role?: string;
  company?: string;
};

export type ContactDetails = {
  phone: string;
  email: string;
  address: string;
  hours: string;
};
