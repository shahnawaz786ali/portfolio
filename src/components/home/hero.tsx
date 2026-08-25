"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { socialLinks } from "@/data/nav";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { LazyHeroScene } from "@/components/three/lazy-hero-scene";
import { FloatingTechCards } from "@/components/home/floating-tech-cards";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

const techStack = ["Python", "Django", "React", "Next.js", "PostgreSQL", "Redis", "Celery"];

function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="scrollbar-thin relative mt-5 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 font-mono text-sm text-muted">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-foreground/80">{tech}</span>
            <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    function handle(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      el!.style.setProperty("--mx", `${px}%`);
      el!.style.setProperty("--my", `${py}%`);
    }
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-32 pb-20 sm:pt-40"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      <div
        className="absolute inset-0 grid-backdrop-animated transition-[mask-position] duration-300"
        style={{ maskPosition: "var(--mx) var(--my)" }}
        aria-hidden
      />
      <div
        className="ambient-glow animate-pulse-glow left-[-10%] top-[10%] size-[420px] bg-purple/30"
        aria-hidden
      />
      <div
        className="ambient-glow animate-pulse-glow right-[-8%] top-[30%] size-[380px] bg-blue/25"
        aria-hidden
      />
      <div
        className="ambient-glow left-[30%] bottom-[-10%] size-[360px] bg-pink/15"
        aria-hidden
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-sm text-muted">
              👋 Hello, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Md <span className="gradient-text-brand">Shahnawaz</span> Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-4 inline-block text-2xl font-medium text-muted sm:text-3xl"
          >
            Senior Full-Stack Software Developer
            <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-purple via-blue to-transparent" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <TechMarquee />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-xl font-medium leading-snug text-balance"
          >
            I build scalable software products from idea to production.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted"
          >
            With 6+ years of experience in software development, I build robust backend
            systems, modern web applications, scalable APIs, and business platforms. I also
            handle cloud deployment, infrastructure, and production maintenance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <CTAButton href="/projects" size="lg">
              View My Work
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg" icon={false}>
              Let&apos;s Work Together ⚡
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = icons[link.icon as keyof typeof icons];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="glass flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
                >
                  {Icon ? <Icon className="size-4" /> : null}
                </a>
              );
            })}
          </motion.div>
        </div>

        <div className="relative hidden aspect-square lg:block">
          <LazyHeroScene />
          <FloatingTechCards />
        </div>
      </Container>
    </section>
  );
}
