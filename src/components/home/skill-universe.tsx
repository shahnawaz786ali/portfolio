"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Python", angle: -90, radius: 42 },
  { label: "Django", angle: -38, radius: 40 },
  { label: "PostgreSQL", angle: 14, radius: 42 },
  { label: "Next.js", angle: 66, radius: 40 },
  { label: "React", angle: 118, radius: 42 },
  { label: "Redis", angle: 170, radius: 40 },
  { label: "Celery", angle: 222, radius: 42 },
  { label: "Docker", angle: 274, radius: 40 },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

export function SkillUniverse() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-xl lg:block">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        {nodes.map((node, i) => {
          const { x, y } = polarToXY(node.angle, node.radius);
          return (
            <motion.line
              key={node.label}
              x1={50}
              y1={50}
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth={0.25}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4f7dfb" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center shadow-[var(--shadow-glow-purple)]"
      >
        <span className="text-sm font-semibold leading-tight">Full-Stack</span>
        <span className="text-sm font-semibold leading-tight">Development</span>
      </motion.div>

      {nodes.map((node, i) => {
        const { x, y } = polarToXY(node.angle, node.radius);
        return (
          <motion.div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              whileHover={{ scale: 1.12 }}
              className="glass cursor-default rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-glow-blue)]"
            >
              {node.label}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
