"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-24 ${className}`}>
      <Container className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
