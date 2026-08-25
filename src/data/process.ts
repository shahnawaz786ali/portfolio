import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand Requirements",
    description: "Digging into the business problem, users, and constraints before writing a single line of code.",
  },
  {
    number: "02",
    title: "Plan Architecture",
    description: "Designing the system architecture, data model, and technology choices to fit the problem at hand.",
  },
  {
    number: "03",
    title: "Build Backend & Database",
    description: "Implementing the Django backend, database schema, and REST APIs on a solid data foundation.",
  },
  {
    number: "04",
    title: "Develop Frontend",
    description: "Building a responsive, accessible React or Next.js frontend that integrates cleanly with the API.",
  },
  {
    number: "05",
    title: "Test & Optimize",
    description: "Verifying functionality and performance, and optimizing queries, load times, and API responses.",
  },
  {
    number: "06",
    title: "Deploy to Production",
    description: "Shipping to production with Docker, Nginx, Gunicorn, SSL, and proper environment configuration.",
  },
  {
    number: "07",
    title: "Monitor & Maintain",
    description: "Keeping the application healthy in production — monitoring, fixes, and ongoing improvements.",
  },
];
