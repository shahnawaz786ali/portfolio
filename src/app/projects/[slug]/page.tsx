import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Lock, Hammer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { ProjectCard } from "@/components/projects/project-card";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedSection, AnimatedStagger } from "@/components/shared/animated-section";
import { GithubIcon } from "@/components/ui/brand-icons";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const statusMeta = {
  live: { label: "Live", icon: ArrowUpRight },
  private: { label: "Private Project — Detailed Case Study Available", icon: Lock },
  "in-development": { label: "In Development", icon: Hammer },
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusMeta[project.status];
  const StatusIcon = status.icon;
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Projects", item: `${siteConfig.url}/projects` },
      { "@type": "ListItem", position: 2, name: project.title, item: `${siteConfig.url}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <div className="absolute inset-0 noise-fade" aria-hidden />
        <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> All Projects
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <Badge variant={project.status === "in-development" ? "outline" : "accent"}>
              <StatusIcon className="mr-1.5 size-3" />
              {status.label}
            </Badge>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <CTAButton href={project.liveUrl} external>
                Visit Live Site
              </CTAButton>
            ) : null}
            {project.githubUrl ? (
              <CTAButton href={project.githubUrl} variant="secondary" external icon={false}>
                <GithubIcon className="size-4" /> View on GitHub
              </CTAButton>
            ) : null}
            <CTAButton href="/contact" variant="secondary" icon={false}>
              Discuss a Similar Project
            </CTAButton>
          </div>

          {project.coverImage ? (
            <div className="glow-border relative mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <Image
                src={project.coverImage}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-xl font-semibold">The Problem</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{project.problem}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">The Solution</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{project.solution}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">Key Features</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="glow-border glass-panel p-5">
                      <h3 className="text-sm font-semibold">{feature.title}</h3>
                      <p className="mt-1.5 text-sm text-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">System Architecture</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{project.architecture}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">Technical Challenges</h2>
                <div className="mt-5 space-y-4">
                  {project.challenges.map((challenge) => (
                    <div key={challenge.title} className="border-l-2 border-accent/40 pl-5">
                      <h3 className="text-sm font-semibold">{challenge.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">Screenshots</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {project.screenshots.map((shot) => (
                    <ProjectScreenshot key={shot.caption} caption={shot.caption} src={shot.src} />
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-xl font-semibold">Outcome</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{project.outcome}</p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection className="glow-border glass-panel p-6">
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">My Role</h3>
                <p className="mt-3 text-sm leading-relaxed">{project.role}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.05} className="glow-border glass-panel p-6">
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                  Technology Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-border py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Explore More" title="Related Projects" />
            <AnimatedStagger className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </AnimatedStagger>
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
