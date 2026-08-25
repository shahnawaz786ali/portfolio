import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { AnimatedSection } from "@/components/shared/animated-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea, existing application, or technical challenge? Get in touch to discuss how I can help — web applications, SaaS platforms, backend/API development, or deployment.",
  alternates: { canonical: "/contact" },
};

const infoCards = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Response Time", value: "Usually within 1–2 business days" },
  { icon: MapPin, label: "Availability", value: "Open to remote freelance & full-time roles" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great"
        description="Have an idea, existing application, or technical challenge? Let's discuss how I can help."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <AnimatedSection className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-6 lg:col-span-2">
              {infoCards.map((card) => (
                <div key={card.label} className="glow-border glass-panel p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <card.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{card.label}</p>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{card.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
