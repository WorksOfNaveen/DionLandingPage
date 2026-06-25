import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

type ActionButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function getButtonClasses(variant: ButtonVariant) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]";

  if (variant === "secondary") {
    return `${base} border border-[color:var(--border)] bg-white/80 text-foreground hover:-translate-y-0.5 hover:border-primary hover:bg-white`;
  }

  if (variant === "ghost") {
    return `${base} bg-transparent text-primary hover:-translate-y-0.5 hover:text-primary-dark`;
  }

  return `${base} bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary-dark`;
}

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const variant = props.variant ?? "primary";
  const className = `${getButtonClasses(variant)} ${props.className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, children, variant: _variant, className: _className, ...linkProps } = props;
    return (
      <Link href={href} className={className} {...linkProps}>
        {children}
      </Link>
    );
  }

  const actionProps = props as ActionButtonProps;
  const {
    children,
    type = "button",
    variant: _variant,
    className: _className,
    ...buttonProps
  } = actionProps;

  return (
    <button type={type} className={className} {...buttonProps}>
      {children}
    </button>
  );
}
