import { BatteryCharging, Leaf, LifeBuoy } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { features } from "@/lib/constants";

const icons = [Leaf, BatteryCharging, LifeBuoy];

export function Features() {
  return (
    <SectionWrapper id="solutions">
      <div className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Core strengths
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Production-grade energy experiences backed by practical engineering
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
          Dion Power Solutions combines a refined customer experience with
          dependable battery systems chosen for performance, safety, and long
          operating life.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = icons[index];

          return (
            <article
              key={feature.title}
              className="shadow-card rounded-[2rem] border border-[color:var(--border)] bg-white p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-primary">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
