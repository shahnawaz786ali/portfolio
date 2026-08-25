import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border", className)}>
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div className="absolute inset-0 noise-fade" aria-hidden />
      <div className="ambient-glow left-[-10%] top-[-10%] size-[360px] bg-purple/20" aria-hidden />
      <div className="ambient-glow right-[-8%] top-[10%] size-[320px] bg-blue/15" aria-hidden />
      <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg text-balance">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
