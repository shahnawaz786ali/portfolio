import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development — from backend architecture and database design to frontend implementation and deployment.",
    icon: "Layers",
    deliverables: [
      "System architecture & data modeling",
      "Django backend development",
      "React / Next.js frontend",
      "Production deployment",
    ],
  },
  {
    slug: "django-rest-api-development",
    title: "Django & REST API Development",
    description:
      "Secure, scalable Django applications and well-documented REST APIs built with Django REST Framework.",
    icon: "Server",
    deliverables: [
      "REST API design & documentation",
      "Authentication & role-based access control",
      "Database schema design",
      "PostgreSQL optimization",
    ],
  },
  {
    slug: "saas-business-platforms",
    title: "SaaS & Business Platforms",
    description:
      "Custom SaaS platforms, dashboards, LMS, HRMS, CRM, and internal business tools tailored to your workflows.",
    icon: "LayoutDashboard",
    deliverables: [
      "Multi-role dashboards",
      "Custom business logic",
      "Reporting & analytics",
      "Scalable data architecture",
    ],
  },
  {
    slug: "react-nextjs-development",
    title: "React & Next.js Development",
    description:
      "Modern, responsive, SEO-friendly web applications built with React and Next.js.",
    icon: "Code2",
    deliverables: [
      "Server & client component architecture",
      "SEO-optimized rendering",
      "API integration",
      "Responsive, accessible UI",
    ],
  },
  {
    slug: "background-processing-automation",
    title: "Background Processing & Automation",
    description:
      "Asynchronous workflows, scheduled tasks, notifications, and automation using Celery and Redis.",
    icon: "Workflow",
    deliverables: [
      "Celery task queues",
      "Scheduled & periodic jobs",
      "Notification systems",
      "Business process automation",
    ],
  },
  {
    slug: "deployment-infrastructure",
    title: "Deployment & Infrastructure",
    description:
      "Production deployment and server configuration using Linux, DigitalOcean, Docker, Nginx, Gunicorn, SSL, and CI/CD.",
    icon: "Cloud",
    deliverables: [
      "Linux server setup & hardening",
      "Docker & Docker Compose",
      "Nginx & Gunicorn configuration",
      "SSL, DNS & CI/CD pipelines",
    ],
  },
];
