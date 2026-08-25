import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";
import { AnimatedStagger } from "@/components/shared/animated-section";
import { SkillCategoryCard } from "@/components/shared/skill-category-card";
import { SkillUniverse } from "@/components/home/skill-universe";

export function SkillsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A Technology Stack Built for Production"
          description="Not just frameworks I know — tools I use daily to design, build, and ship complete software products."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16">
          <SkillUniverse />
        </div>

        <AnimatedStagger className="mt-4 grid gap-6 lg:hidden lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.category} category={category} />
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
