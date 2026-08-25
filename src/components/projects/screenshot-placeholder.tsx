import { ImageIcon } from "lucide-react";

export function ScreenshotPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-dashed border-border bg-surface">
      <div className="flex aspect-video flex-col items-center justify-center gap-2 text-muted">
        <ImageIcon className="size-6" />
        <span className="text-xs">Screenshot to be added</span>
      </div>
      <div className="border-t border-border px-4 py-3 text-xs text-muted">{caption}</div>
    </div>
  );
}
