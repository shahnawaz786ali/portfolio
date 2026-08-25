import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { AnimatedStagger } from "@/components/shared/animated-section";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Writing"
            title="From the Blog"
            description="Notes on Django, REST APIs, PostgreSQL, and shipping software to production."
          />
          <CTAButton href="/blog" variant="secondary" className="shrink-0">
            All Articles
          </CTAButton>
        </div>

        <AnimatedStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
