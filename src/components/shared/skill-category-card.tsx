import { SkillCategory } from "@/types";
import { AnimatedStaggerItem } from "@/components/shared/animated-section";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <AnimatedStaggerItem className="glow-border glass-panel group p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <h3 className="text-lg font-semibold">{category.category}</h3>
      <p className="mt-2 text-sm text-muted">{category.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors group-hover:border-accent/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </AnimatedStaggerItem>
  );
}
