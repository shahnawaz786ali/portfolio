"use client";

import { cn } from "@/lib/utils";

const fieldClasses =
  "peer w-full rounded-xl border border-border bg-background/60 px-4 pb-2.5 pt-5 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-soft)]";
const labelClasses =
  "pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs";

export function FloatingInput({
  id,
  name,
  type = "text",
  required,
  className,
}: {
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <input id={id} name={name} type={type} required={required} placeholder=" " className={fieldClasses} />
      <label htmlFor={id} className={labelClasses}>
        {id === "email" ? "Email" : id.charAt(0).toUpperCase() + id.slice(1)}
        {required ? <span className="text-accent"> *</span> : <span className="text-muted"> (optional)</span>}
      </label>
    </div>
  );
}

export function FloatingTextarea({
  id,
  name,
  required,
  rows = 6,
}: {
  id: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        placeholder=" "
        className={cn(fieldClasses, "resize-none")}
      />
      <label htmlFor={id} className={labelClasses}>
        Message{required ? <span className="text-accent"> *</span> : null}
      </label>
    </div>
  );
}
