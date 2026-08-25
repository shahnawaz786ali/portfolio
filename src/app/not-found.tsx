import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div className="ambient-glow animate-pulse-glow left-1/2 top-1/3 size-96 -translate-x-1/2 bg-purple/25" aria-hidden />
      <Container className="relative flex min-h-[80vh] flex-col items-center justify-center pt-32 pb-20 text-center sm:pt-40">
        <span className="gradient-text-brand font-mono text-6xl font-bold sm:text-7xl">404</span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex gap-4">
          <CTAButton href="/">Back to Home</CTAButton>
          <CTAButton href="/projects" variant="secondary" icon={false}>
            View Projects
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
