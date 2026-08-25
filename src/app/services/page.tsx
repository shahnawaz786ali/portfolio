import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessSteps } from "@/components/shared/process-steps";
import { ServiceCard } from "@/components/shared/service-card";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedStagger } from "@/components/shared/animated-section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development, Django & REST API development, SaaS platforms, React & Next.js development, background processing, and deployment & infrastructure services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="How I Can Help You"
        description="From a single Django API to a fully deployed, production-grade platform — here's how I can support your product."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedStagger className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} showCTA />
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How a Project Typically Runs"
            description="A consistent process regardless of scope — so you always know what's happening and what comes next."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
