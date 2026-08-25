"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: React.ReactNode | false;
  className?: string;
  external?: boolean;
}

const defaultIcon = (
  <ArrowRight className="relative size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
);

const variants = {
  primary:
    "text-accent-foreground bg-gradient-to-r from-purple via-blue to-purple bg-[length:200%_100%] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  secondary: "glass text-foreground hover:bg-surface-hover",
  ghost: "text-foreground hover:text-accent",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  external,
}: CTAButtonProps) {
  const resolvedIcon = icon === undefined ? defaultIcon : icon;
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.4);
  }

  function handleLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleLeave,
    style: { x: springX, y: springY },
    className: cn(
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-[background-position,box-shadow,border-color] duration-300",
      variants[variant],
      sizes[size],
      variant === "primary" && "hover:shadow-[var(--shadow-glow-purple)]",
      className
    ),
  };

  const content = (
    <>
      {variant === "primary" ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={hovered ? { translateX: ["-100%", "100%"] } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      ) : null}
      <span className="relative">{children}</span>
      {resolvedIcon || null}
    </>
  );

  if (external) {
    return (
      <MotionAnchor
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {content}
      </MotionAnchor>
    );
  }

  return (
    <MotionLink ref={ref} href={href} {...sharedProps}>
      {content}
    </MotionLink>
  );
}
