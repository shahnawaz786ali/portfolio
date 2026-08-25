import Image from "next/image";
import { ScreenshotPlaceholder } from "./screenshot-placeholder";

export function ProjectScreenshot({ caption, src }: { caption: string; src?: string }) {
  if (!src) return <ScreenshotPlaceholder caption={caption} />;

  return (
    <div className="glow-border overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="border-t border-border px-4 py-3 text-xs text-muted">{caption}</div>
    </div>
  );
}
