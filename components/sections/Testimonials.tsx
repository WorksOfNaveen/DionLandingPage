import { Star } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Testimonial } from "@/types";

type TestimonialsProps = {
  reviews: Testimonial[];
};

export function Testimonials({ reviews }: TestimonialsProps) {
  return (
    <SectionWrapper id="reviews">
      <div className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Client reviews
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What customers say on Google Maps
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
          A few highlighted Google Maps reviews from riders, vehicle owners,
          and customers who visited Dion Power Solutions LLP in Venkitangu,
          Kerala.
        </p>
      </div>

      {reviews.length === 0 ? (
        <p className="mt-12 rounded-[2rem] border border-[color:var(--border)] bg-white p-8 text-center text-muted shadow-card">
          Reviews will be added here soon.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="shadow-card rounded-[2rem] border border-[color:var(--border)] bg-white p-8"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-muted">
                “{testimonial.review}”
              </p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted">
                  {testimonial.source ??
                    [testimonial.role, testimonial.company]
                      .filter(Boolean)
                      .join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
