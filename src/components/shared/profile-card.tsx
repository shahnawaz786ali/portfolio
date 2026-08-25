"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Cpu, Rocket, GraduationCap } from "lucide-react";

const badges = [
  { icon: Code2, label: "Coding Education" },
  { icon: Cpu, label: "Robotics" },
  { icon: Rocket, label: "Artificial Intelligence" },
  { icon: GraduationCap, label: "STEM Training" },
];

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const glowX = useTransform(sry, [-10, 10], [0, 100]);
  const glowY = useTransform(srx, [10, -10], [0, 100]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div className="relative mx-auto max-w-sm">
      <div className="ambient-glow animate-pulse-glow -left-10 -top-10 size-64 bg-purple/30" aria-hidden />
      <div className="ambient-glow -right-8 bottom-0 size-56 bg-blue/25" aria-hidden />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
        className="glass-panel relative aspect-[4/5] overflow-hidden p-1.5"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-8 opacity-70"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(139,92,246,0.35), transparent 55%)`
            ),
          }}
        />
        <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius-lg)-6px)]">
          <Image
            src="/Image/profile.jpg"
            alt="Md Shahnawaz Ali"
            fill
            priority
            sizes="(min-width: 640px) 384px, 90vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass absolute -bottom-8 -right-4 w-56 rounded-2xl p-4 shadow-[var(--shadow-card)] sm:-right-10"
      >
        <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-muted">
          Also Experienced In
        </p>
        <ul className="space-y-2">
          {badges.map((badge) => (
            <li
              key={badge.label}
              className="group flex items-center gap-2 text-xs text-foreground/90 transition-colors hover:text-accent"
            >
              <badge.icon className="size-3.5 text-accent transition-transform group-hover:scale-110" />
              {badge.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
