"use client";

import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4">
        <div
          className={`rounded-full border px-4 py-3 transition-all ${
            isScrolled
              ? "glass-panel shadow-card border-[color:var(--border)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/dion-logo.png"
                alt="Dion Power"
                width={150}
                height={80}
                className="h-10 w-auto"
                priority
              />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button href="#contact">Request a Call</Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-foreground md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 flex flex-col gap-4 border-t border-[color:var(--border)] pt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-muted hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                    <Zap size={16} />
                    Talk to Dion
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
