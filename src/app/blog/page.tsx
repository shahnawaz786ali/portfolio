import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedStagger } from "@/components/shared/animated-section";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on Django, Django REST Framework, PostgreSQL, Celery, Docker, React, Next.js, and shipping software to production.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Writing on Backend, Frontend & Production"
        description="Practical notes from building and deploying real software — Django, REST APIs, PostgreSQL, Celery, Docker, and the React/Next.js frontend layer."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <AnimatedStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
