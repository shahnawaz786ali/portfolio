import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Engineering",
    description: "Building robust, secure server-side systems and data models.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Authentication",
      "Role-Based Access Control",
      "API Documentation",
      "Swagger / OpenAPI",
    ],
  },
  {
    category: "Frontend Development",
    description: "Building fast, responsive, SEO-friendly interfaces.",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Responsive UI", "API Integration"],
  },
  {
    category: "Infrastructure & Deployment",
    description: "Taking applications from code to production and keeping them running.",
    skills: [
      "Linux",
      "DigitalOcean",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Gunicorn",
      "Git & GitHub",
      "SSL / Let's Encrypt",
      "CI/CD",
      "DNS & Domain Configuration",
    ],
  },
];
