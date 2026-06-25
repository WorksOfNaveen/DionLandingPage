import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { contactDetails, navLinks } from "@/lib/constants";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white/90 py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground">
              Dion Power Solutions
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted">
              Delivering dependable battery and backup power systems with
              performance-first engineering and client-focused support.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm text-muted">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </p>
            <a href={`tel:${contactDetails.phone}`} className="flex items-start gap-3 hover:text-primary">
              <Phone size={16} className="mt-0.5 text-accent" />
              <span>{contactDetails.phone}</span>
            </a>
            <a href={`mailto:${contactDetails.email}`} className="flex items-start gap-3 hover:text-primary">
              <Mail size={16} className="mt-0.5 text-accent" />
              <span>{contactDetails.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span>{contactDetails.address}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-surface hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--border)] pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Dion Power Solutions. Built for reliable
          energy experiences.
        </div>
      </Container>
    </footer>
  );
}
