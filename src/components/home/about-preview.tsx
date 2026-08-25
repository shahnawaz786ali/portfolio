import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { JourneyTimeline } from "@/components/shared/journey-timeline";
import { ProfileCard } from "@/components/shared/profile-card";
import Link from "next/link";

const highlights = [
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

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <ProfileCard />
          </AnimatedSection>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About Me
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              More Than <span className="gradient-text-brand">Just Code</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              I&apos;m a Full-Stack Software Developer with 6+ years of experience building
              scalable, high-performance web applications. My expertise spans backend
              architecture with Python and Django, REST APIs, PostgreSQL, asynchronous
              systems using Celery and Redis, and modern frontend development with React and
              Next.js.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Before focusing fully on software development, I spent 2 years in technical
              education, teaching Coding, Robotics, Artificial Intelligence, and STEM to
              students across schools and colleges.
            </p>

            <AnimatedSection delay={0.1}>
              <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Know More About Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <AnimatedSection delay={0.15} className="mt-20">
          <SectionHeading eyebrow="Journey" title="A Path Shaped by Teaching, Then Engineering" align="center" className="mx-auto" />
          <div className="mt-12">
            <JourneyTimeline />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
