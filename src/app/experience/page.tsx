import type { Metadata } from "next";
import { Code2, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedSection } from "@/components/shared/animated-section";
import { experienceEntries } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "6+ years of software development experience across backend, full-stack, and deployment work, plus 2 years in technical education, coding, robotics, and AI training.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A Professional Journey Across Two Disciplines"
        description="Software development is the core of my career today, built on an earlier foundation in technical education."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {experienceEntries.map((entry, i) => {
              const Icon = entry.type === "development" ? Code2 : GraduationCap;
              return (
                <AnimatedSection key={entry.id} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="glass flex size-11 shrink-0 items-center justify-center rounded-full text-accent shadow-[var(--shadow-glow-purple)]">
                        <Icon className="size-5" />
                      </div>
                      {i < experienceEntries.length - 1 ? (
                        <div className="mt-2 w-px flex-1 bg-gradient-to-b from-accent/40 to-transparent" />
                      ) : null}
                    </div>

                    <div className="glow-border glass-panel flex-1 p-6 sm:p-7">
                      <span className="gradient-text-brand font-mono text-xs font-semibold">{entry.period}</span>
                      <h2 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                        {entry.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                        {entry.summary}
                      </p>
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {entry.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
