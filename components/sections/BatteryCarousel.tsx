"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { BatteryProduct } from "@/types";

type BatteryCarouselProps = {
  products: BatteryProduct[];
};

export function BatteryCarousel({ products }: BatteryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: products.length > 1,
  });

  return (
    <SectionWrapper id="products" className="bg-surface">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Battery range
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A versatile carousel of batteries built for modern energy demands
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            From bikes and scooters to cars, autos, and home inverters, Dion
            Power Solutions offers dependable batteries for everyday power needs.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous battery"
              onClick={() => emblaApi?.scrollPrev()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-foreground hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next battery"
              onClick={() => emblaApi?.scrollNext()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-foreground hover:border-primary hover:text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        ) : null}
      </div>

      {products.length === 0 ? (
        <p className="mt-10 rounded-[2rem] border border-[color:var(--border)] bg-white p-8 text-center text-muted shadow-card">
          Products will appear here once the database is connected and seeded.
        </p>
      ) : (
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {products.map((product) => (
              <div
                key={product.name}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="shadow-card h-full rounded-[2rem] border border-[color:var(--border)] bg-white p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {product.category}
                    </span>
                    <Zap size={18} className="text-accent" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {product.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-4 rounded-3xl bg-surface p-5">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.24em] text-muted">
                        Capacity
                      </dt>
                      <dd className="mt-2 text-lg font-semibold text-foreground">
                        {product.capacity}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.24em] text-muted">
                        Lifecycle
                      </dt>
                      <dd className="mt-2 text-lg font-semibold text-foreground">
                        {product.lifecycle}
                      </dd>
                    </div>
                  </dl>
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
