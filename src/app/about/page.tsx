import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { JourneyTimeline } from "@/components/shared/journey-timeline";
import { SkillCategoryCard } from "@/components/shared/skill-category-card";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedSection, AnimatedStagger } from "@/components/shared/animated-section";
import { ProfileCard } from "@/components/shared/profile-card";
import { GlobeSection } from "@/components/shared/globe-section";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Md Shahnawaz Ali — Senior Full-Stack Software Developer with 6+ years of experience building scalable web applications, backend systems, and business platforms.",
  alternates: { canonical: "/about" },
};

const lifecycle = [
  "Understanding business requirements",
  "Designing system architecture",
  "Developing Django backends",
  "Designing REST APIs",
  "Working with PostgreSQL",
  "Implementing Celery and Redis",
  "Building React and Next.js frontends",
  "Deploying applications",
  "Managing Linux servers",
  "Maintaining production applications",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="More Than Just a Developer"
        description="A full-stack developer's job doesn't end at writing code — it starts with understanding the problem and ends with a product running reliably in production."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedSection className="mb-20">
            <ProfileCard />
          </AnimatedSection>

          <div className="grid gap-12 lg:grid-cols-5">
            <AnimatedSection className="lg:col-span-3">
              <h2 className="text-2xl font-semibold tracking-tight">My Background</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I&apos;m a Full-Stack Software Developer with 6+ years of experience building
                  scalable web applications, backend systems, REST APIs, and business platforms.
                  I&apos;ve worked across the complete software development lifecycle — system
                  architecture, backend development, frontend development, database design,
                  asynchronous processing, cloud deployment, and production maintenance.
                </p>
                <p>
                  My core strength is Django and Django REST Framework on the backend, paired
                  with PostgreSQL for data modeling and Celery with Redis for background
                  processing. On the frontend, I build with React and Next.js — and I take
                  applications the rest of the way, deploying and maintaining them on Linux
                  servers with Docker, Nginx, and Gunicorn.
                </p>
                <p>
                  Before focusing fully on software development, I spent two years in technical
                  education and STEM training, teaching Coding, Robotics, and Artificial
                  Intelligence to students in schools and colleges. That experience shaped how I
                  approach engineering today — breaking complex systems into clear, teachable
                  pieces, and communicating technical decisions in a way that non-technical
                  stakeholders can actually follow.
                </p>
                <p>
                  What I bring to a project isn&apos;t just code in one part of the stack — it&apos;s
                  ownership of the whole thing, from the first architecture decision to the
                  server it runs on in production.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="glow-border glass-panel p-6 sm:p-7">
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                  What I Handle End-to-End
                </h3>
                <ul className="mt-5 space-y-3">
                  {lifecycle.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Journey"
            title="From STEM Education to Production Software"
            description="A path shaped by teaching first, then engineering — each stage building on the last."
          />
          <div className="mt-12">
            <JourneyTimeline />
          </div>
        </Container>
      </section>

      <GlobeSection />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Technology I Work With Daily"
            description="A stack chosen for building and running real production software, not just demos."
          />
          <AnimatedStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCategoryCard key={category.category} category={category} />
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
