import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BatteryCarousel } from "@/components/sections/BatteryCarousel";
import { Contact } from "@/components/sections/Contact";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { getProducts } from "@/lib/products";
import { getGoogleReviews } from "@/lib/reviews";

export default async function Home() {
  const [products, reviews] = await Promise.all([
    getProducts(),
    getGoogleReviews(),
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <BatteryCarousel products={products} />
        <Testimonials reviews={reviews} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
