"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  glowClassName,
  tiltAmount = 8,
}: {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
  tiltAmount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 250, damping: 22 });
  const sry = useSpring(ry, { stiffness: 250, damping: 22 });
  const glowX = useTransform(sry, [-tiltAmount, tiltAmount], [0, 100]);
  const glowY = useTransform(srx, [tiltAmount, -tiltAmount], [0, 100]);
  const background = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(circle at ${gx}% ${gy}%, rgba(139,92,246,0.16), transparent 60%)`
  );

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * tiltAmount);
    rx.set(-py * tiltAmount);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", className)}
    >
      <motion.div
        aria-hidden
        className={cn("pointer-events-none absolute -inset-px rounded-[inherit]", glowClassName)}
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}
