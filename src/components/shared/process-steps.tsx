import { processSteps } from "@/data/process";
import { AnimatedStagger, AnimatedStaggerItem } from "@/components/shared/animated-section";

export function ProcessSteps() {
  return (
    <AnimatedStagger className="flex flex-wrap gap-4">
      {processSteps.map((step) => (
        <AnimatedStaggerItem
          key={step.number}
          className="glow-border glass-panel min-w-[240px] flex-1 basis-1/4 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
        >
          <span className="gradient-text-brand font-mono text-sm font-semibold">
            {step.number}
          </span>
          <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
        </AnimatedStaggerItem>
      ))}
    </AnimatedStagger>
  );
}
