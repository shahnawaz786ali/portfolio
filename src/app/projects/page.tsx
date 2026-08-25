import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedStagger } from "@/components/shared/animated-section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of software products I've designed and built end-to-end — a Learning Management System, HRMS platform, Enterprise License Management System, and a Community Platform.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected Projects"
        description="Products I've taken from requirements to production — covering backend architecture, REST APIs, frontend development, and deployment."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedStagger className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
