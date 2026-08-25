import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedStagger } from "@/components/shared/animated-section";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A look at the products I've designed and built end-to-end — from database schema to production deployment."
          />
          <CTAButton href="/projects" variant="secondary" className="shrink-0">
            View All Projects
          </CTAButton>
        </div>

        <AnimatedStagger className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
