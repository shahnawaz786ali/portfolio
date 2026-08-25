import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/container";
import { formatDate } from "@/lib/utils";
import { FinalCTA } from "@/components/shared/final-cta";
import { AnimatedSection } from "@/components/shared/animated-section";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-backdrop" aria-hidden />
          <div className="absolute inset-0 noise-fade" aria-hidden />
          <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> All Articles
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-sm text-muted">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>•</span>
              <span>{post.readingTime}</span>
              <span aria-hidden>•</span>
              <span>Md Shahnawaz Ali</span>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <AnimatedSection className="mx-auto max-w-3xl">
              <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-a:text-accent prose-strong:text-foreground prose-code:text-accent">
                <MDXRemote source={post.content} />
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </article>

      <FinalCTA />
    </>
  );
}
