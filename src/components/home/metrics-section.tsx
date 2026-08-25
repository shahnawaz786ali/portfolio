"use client";

import { Code2, GraduationCap, Layers, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CountUp } from "@/components/shared/count-up";

const metrics = [
  { icon: Code2, value: 6, suffix: "+ Years", label: "Software Development" },
  { icon: GraduationCap, value: 2, suffix: " Years", label: "Technical Education & STEM" },
  { icon: Layers, value: null, display: "Full Stack", label: "Backend to Deployment" },
  { icon: Workflow, value: null, display: "End-to-End", label: "Product Development" },
];

export function MetricsSection() {
  return (
    <section className="relative py-8 sm:py-12">
      <Container>
        <AnimatedSection className="glass-panel grid grid-cols-2 gap-y-10 px-6 py-10 sm:px-10 md:grid-cols-4 md:divide-x md:divide-border">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group flex flex-col items-center px-2 text-center transition-transform duration-300 hover:-translate-y-1 md:px-6"
            >
              <metric.icon className="mb-3 size-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {metric.value !== null ? (
                  <CountUp value={metric.value} suffix={metric.suffix} />
                ) : (
                  metric.display
                )}
              </p>
              <p className="mt-1.5 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
