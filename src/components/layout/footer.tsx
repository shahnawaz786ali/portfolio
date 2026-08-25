import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, socialLinks } from "@/data/nav";
import { siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="text-base font-semibold tracking-tight">
              Shahnawaz Ali
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.headline} Senior Full-Stack Software Developer specializing in
              Django, React, and Next.js.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = icons[link.icon as keyof typeof icons];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="glass flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
                  >
                    {Icon ? <Icon className="size-4" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium">Navigate</h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/projects" className="text-sm text-muted hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-sm text-muted hover:text-foreground">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Get in Touch</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted hover:text-foreground">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Md Shahnawaz Ali. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
