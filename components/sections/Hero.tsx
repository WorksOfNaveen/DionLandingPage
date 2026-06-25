"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroStats } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top">
      <div className="relative m-[10px] h-[42vh] min-h-[240px] overflow-hidden rounded-2xl sm:h-[50vh] sm:min-h-[300px] lg:h-[58vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src="/dions.mp4" type="video/mp4" />
        </video>
      </div>

      <Container className="relative z-10 pb-20 pt-14 sm:pb-24 sm:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-foreground shadow-card"
            >
              <Zap size={16} className="text-accent" />
              Cleaner power. Smarter backup. Stronger reliability.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Power every critical moment with{" "}
                <span className="text-primary">Dion Power Solutions</span> and a
                cleaner <span className="text-accent">thunderbolt-ready</span>{" "}
                energy experience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                We build dependable battery and energy systems for homes,
                businesses, and industrial operations that need uninterrupted
                performance with a modern service experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="#contact">
                Get a Free Consultation
                <ArrowRight size={16} />
              </Button>
              <Button href="#products" variant="secondary">
                Explore Battery Range
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3 rounded-3xl border border-[color:var(--border)] bg-white px-5 py-4 text-sm text-muted shadow-card"
            >
              <ShieldCheck size={18} className="text-primary" />
              Secure inquiry workflow, validated submissions, and performance-led
              frontend architecture.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="shadow-soft relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-8">
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-accent/20 blur-xl" />
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent via-primary to-primary-dark" />

              <div className="grid gap-6 pl-4 sm:grid-cols-3 lg:grid-cols-1">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-[color:var(--border)] bg-surface p-6"
                  >
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                  Why teams choose Dion
                </p>
                <p className="mt-3 text-lg leading-8 text-white/90">
                  Right-sized battery recommendations, resilient backup design,
                  and a polished customer journey from first consultation to
                  after-sales support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
