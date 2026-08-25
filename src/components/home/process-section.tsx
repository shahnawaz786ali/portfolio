import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessSteps } from "@/components/shared/process-steps";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How I Work"
          title="A Process Built for Production, Not Just Demos"
          description="Every project moves through the same disciplined process — from understanding the problem to keeping the product running after launch."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Container>
    </section>
  );
}
