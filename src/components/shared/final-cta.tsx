import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimatedSection className="glass-panel relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 noise-fade" aria-hidden />
          <div
            className="ambient-glow animate-pulse-glow left-1/4 top-0 size-72 -translate-y-1/2 bg-purple/35"
            aria-hidden
          />
          <div
            className="ambient-glow animate-pulse-glow right-1/4 bottom-0 size-72 translate-y-1/2 bg-blue/30"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Have a <span className="gradient-text-brand">Project</span> in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted text-balance">
              Whether you&apos;re building a new product, improving an existing application,
              or need help with backend, frontend, or deployment — let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/contact" size="lg">
                Start a Conversation
              </CTAButton>
              <CTAButton href="/projects" variant="secondary" size="lg" icon={false}>
                View My Projects
              </CTAButton>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
