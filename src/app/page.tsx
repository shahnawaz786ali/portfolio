import { Hero } from "@/components/home/hero";
import { MetricsSection } from "@/components/home/metrics-section";
import { AboutPreview } from "@/components/home/about-preview";
import { SkillsSection } from "@/components/home/skills-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { FinalCTA } from "@/components/shared/final-cta";
import { GlobeSection } from "@/components/shared/globe-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <AboutPreview />
      <GlobeSection />
      <SkillsSection />
      <FeaturedProjects />
      <ProcessSection />
      <ServicesPreview />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
