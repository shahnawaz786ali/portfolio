import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/service-card";
import { AnimatedStagger } from "@/components/shared/animated-section";

export function ServicesPreview() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="How I Can Help You"
            description="From a single API to a full production platform — I can own as much or as little of the stack as you need."
          />
          <CTAButton href="/services" variant="secondary" className="shrink-0">
            All Services
          </CTAButton>
        </div>

        <AnimatedStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
