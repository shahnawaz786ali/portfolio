"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function createInViewScene(loader: () => Promise<{ default: ComponentType }>) {
  const LazyScene = dynamic(loader, { ssr: false, loading: () => null });

  return function InViewScene({
    className,
    fallbackClassName,
  }: {
    className?: string;
    fallbackClassName?: string;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const reducedMotion = usePrefersReducedMotion();

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { rootMargin: "200px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref} className={className}>
        {inView && !reducedMotion ? (
          <LazyScene />
        ) : (
          <div className={fallbackClassName} aria-hidden />
        )}
      </div>
    );
  };
}
