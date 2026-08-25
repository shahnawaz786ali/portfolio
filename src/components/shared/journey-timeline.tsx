import { AnimatedStagger, AnimatedStaggerItem } from "@/components/shared/animated-section";

const journey = [
  { title: "Technical Education", detail: "Coding • Robotics • AI" },
  { title: "Software Development", detail: "Python • Django • APIs" },
  { title: "Full-Stack Development", detail: "React • Next.js • PostgreSQL" },
  { title: "Production & DevOps", detail: "Docker • Nginx • DigitalOcean" },
];

export function JourneyTimeline() {
  return (
    <AnimatedStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {journey.map((stage, i) => (
        <AnimatedStaggerItem key={stage.title} className="relative">
          <div className="glow-border glass-panel h-full p-6 transition-transform duration-300 hover:-translate-y-1">
            <span className="gradient-text-brand font-mono text-xs font-semibold">0{i + 1}</span>
            <p className="mt-3 text-base font-semibold">{stage.title}</p>
            <p className="mt-1.5 text-sm text-muted">{stage.detail}</p>
          </div>
          {i < journey.length - 1 ? (
            <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 text-border lg:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : null}
        </AnimatedStaggerItem>
      ))}
    </AnimatedStagger>
  );
}
