import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CTAButton } from "@/components/ui/cta-button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { skillCategories } from "@/data/skills";
import { experienceEntries } from "@/data/experience";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Md Shahnawaz Ali — Senior Full-Stack Software Developer with 6+ years of experience in Python, Django, React, Next.js, and production deployment.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <PageHero eyebrow="Resume" title="Md Shahnawaz Ali" description="Senior Full-Stack Software Developer">
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton
            href={`mailto:${siteConfig.email}?subject=Resume Request`}
            icon={<Mail className="size-4" />}
            external
          >
            Request PDF Resume
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" icon={false}>
            Get in Touch
          </CTAButton>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            <AnimatedSection>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-muted">Summary</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Full-Stack Software Developer with 6+ years of experience building scalable web
                applications, backend systems, REST APIs, and business platforms. Experienced
                across the complete software development lifecycle, including system
                architecture, backend development, frontend development, database design,
                asynchronous processing, cloud deployment, and production maintenance. Before
                transitioning fully into software development, spent 2 years working in
                technical education and STEM training, teaching Coding, Robotics, and
                Artificial Intelligence to students across schools and colleges.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-muted">Experience</h2>
              <div className="mt-5 space-y-8">
                {experienceEntries.map((entry) => (
                  <div key={entry.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">{entry.title}</h3>
                      <span className="font-mono text-xs text-accent">{entry.period}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{entry.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {entry.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-muted">Skills</h2>
              <div className="mt-5 space-y-5">
                {skillCategories.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-sm font-semibold">{category.category}</h3>
                    <p className="mt-1.5 text-sm text-muted">{category.skills.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-muted">Contact</h2>
              <p className="mt-4 text-sm text-muted">
                {siteConfig.email} · {siteConfig.phone} · Available for remote freelance and
                full-time opportunities
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
