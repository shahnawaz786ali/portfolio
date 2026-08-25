"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const cards = [
  { label: "Python", top: "8%", left: "4%", depth: 1.2, delay: 0 },
  { label: "Django", top: "20%", left: "78%", depth: 0.8, delay: 0.4 },
  { label: "React", top: "62%", left: "82%", depth: 1.4, delay: 0.8 },
  { label: "Next.js", top: "78%", left: "10%", depth: 1, delay: 1.2 },
  { label: "PostgreSQL", top: "42%", left: "-2%", depth: 0.6, delay: 0.2 },
  { label: "Docker", top: "6%", left: "48%", depth: 0.9, delay: 1.6 },
];

export function FloatingTechCards() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    function handle(e: PointerEvent) {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx);
      my.set(ny);
    }
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [mx, my]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {cards.map((card) => (
        <TechCard key={card.label} card={card} smx={smx} smy={smy} />
      ))}
    </div>
  );
}

function TechCard({
  card,
  smx,
  smy,
}: {
  card: (typeof cards)[number];
  smx: ReturnType<typeof useSpring>;
  smy: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(smx, (v) => v * 26 * card.depth);
  const y = useTransform(smy, (v) => v * 26 * card.depth);

  return (
    <motion.div
      className="absolute"
      style={{ top: card.top, left: card.left, x, y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 + card.delay * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{
          duration: 5 + card.depth,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay,
        }}
        className="glass rounded-xl px-3.5 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-card)]"
      >
        {card.label}
      </motion.div>
    </motion.div>
  );
}
