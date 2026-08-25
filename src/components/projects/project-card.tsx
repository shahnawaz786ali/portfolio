"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Lock, Hammer } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { AnimatedStaggerItem } from "@/components/shared/animated-section";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TiltCard } from "@/components/shared/tilt-card";

const statusMeta = {
  live: { label: "Live", icon: ArrowUpRight },
  private: { label: "Private Project", icon: Lock },
  "in-development": { label: "In Development", icon: Hammer },
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const status = statusMeta[project.status];
  const StatusIcon = status.icon;

  return (
    <AnimatedStaggerItem className="h-full">
      <TiltCard className="glow-border glass-panel h-full overflow-hidden" tiltAmount={6}>
        <Link href={`/projects/${project.slug}`} className="group relative flex h-full flex-col justify-between">
          <div className="relative aspect-video w-full overflow-hidden border-b border-border">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="noise-fade grid-backdrop absolute inset-0 flex items-center justify-center text-xs text-muted">
                Case study — screenshots available on request
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-3">
                <Badge variant={project.status === "in-development" ? "outline" : "accent"}>
                  <StatusIcon className="mr-1.5 size-3" />
                  {status.label}
                </Badge>
                <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {project.shortDescription}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-background px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 ? (
                <span className="rounded-full bg-background px-2.5 py-1 text-xs text-muted">
                  +{project.technologies.length - 5}
                </span>
              ) : null}
            </div>

            <div className="mt-5 flex items-center justify-between">
              {project.githubUrl ? (
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <GithubIcon className="size-3.5" /> Public repository
                </div>
              ) : (
                <span />
              )}
              <span className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Case Study <ArrowUpRight className="size-3" />
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </AnimatedStaggerItem>
  );
}
