import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { LazyGlobe } from "@/components/three/lazy-globe";

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div className="absolute inset-0 noise-fade" aria-hidden />
      <Container className="relative flex flex-col items-center text-center">
        <AnimatedSection className="relative flex h-[320px] w-full max-w-lg items-center justify-center sm:h-[380px]">
          <LazyGlobe
            className="absolute inset-0"
            fallbackClassName="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_65%)]"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-6 max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Building <span className="gradient-text-brand">Technology Without Boundaries</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Remote-first, cloud-native, and built to reach production wherever it needs to
            run — from a single Linux server to a fully orchestrated deployment.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
