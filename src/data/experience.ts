import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "software-development",
    period: "6+ Years",
    title: "Software Development",
    type: "development",
    summary:
      "Building backend systems, full-stack applications, and REST APIs — covering architecture, PostgreSQL data design, SaaS and business platforms, and production deployment.",
    highlights: [
      "Backend development with Python and Django",
      "Full-stack application development with React and Next.js",
      "REST API architecture and documentation",
      "PostgreSQL database design",
      "SaaS and business platform development (LMS, HRMS, license management)",
      "Asynchronous processing with Celery and Redis",
      "Production deployment and server management",
    ],
  },
  {
    id: "technical-education",
    period: "2 Years",
    title: "Technical Education & STEM Training",
    type: "education",
    summary:
      "Taught Coding, Robotics, and Artificial Intelligence to students across schools and colleges before transitioning fully into software development.",
    highlights: [
      "Coding education for school and college students",
      "Robotics instruction, including Arduino and electronics",
      "Introductory Artificial Intelligence concepts",
      "STEM curriculum delivery across educational institutions",
    ],
  },
];
