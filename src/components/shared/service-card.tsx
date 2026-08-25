import Link from "next/link";
import { ArrowRight, Layers, Server, LayoutDashboard, Code2, Workflow, Cloud, type LucideIcon } from "lucide-react";
import { Service } from "@/types";
import { AnimatedStaggerItem } from "@/components/shared/animated-section";
import { TiltCard } from "@/components/shared/tilt-card";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Server,
  LayoutDashboard,
  Code2,
  Workflow,
  Cloud,
};

const gradients = [
  "from-purple to-blue",
  "from-blue to-cyan",
  "from-pink to-purple",
  "from-cyan to-blue",
  "from-purple to-pink",
  "from-blue to-purple",
];

export function ServiceCard({
  service,
  index = 0,
  showCTA = false,
}: {
  service: Service;
  index?: number;
  showCTA?: boolean;
}) {
  const Icon = iconMap[service.icon] ?? Layers;
  const gradient = gradients[index % gradients.length];

  return (
    <AnimatedStaggerItem className="h-full">
      <TiltCard className="glow-border glass-panel h-full" tiltAmount={5}>
        <div className="group flex h-full flex-col p-6 sm:p-7">
          <div
            className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-[var(--shadow-card)] transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110`}
          >
            <Icon className="size-5" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          {showCTA ? (
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Discuss Your Project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </TiltCard>
    </AnimatedStaggerItem>
  );
}
