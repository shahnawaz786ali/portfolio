import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { AnimatedStaggerItem } from "@/components/shared/animated-section";
import { TiltCard } from "@/components/shared/tilt-card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <AnimatedStaggerItem className="h-full">
      <TiltCard className="glow-border glass-panel h-full" tiltAmount={4}>
        <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col justify-between p-6 sm:p-7">
          <div>
            <div className="flex items-center justify-between gap-3 text-xs text-muted">
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
              {post.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-full bg-background px-2.5 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </div>
        </Link>
      </TiltCard>
    </AnimatedStaggerItem>
  );
}
