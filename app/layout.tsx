import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dionpowersolutions.com"),
  title: {
    default: "Dion Power Solutions | Reliable Battery & Energy Systems",
    template: "%s | Dion Power Solutions",
  },
  description:
    "Dion Power Solutions delivers dependable batteries and power systems with clean energy performance, resilient engineering, and responsive customer support.",
  keywords: [
    "Dion Power Solutions",
    "battery supplier",
    "energy storage",
    "power backup",
    "industrial batteries",
    "solar battery solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dion Power Solutions",
    description:
      "Smart battery and backup power solutions built for homes, businesses, and industrial operations.",
    url: "/",
    siteName: "Dion Power Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dion Power Solutions",
    description:
      "Explore production-grade battery and power backup solutions from Dion Power Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
