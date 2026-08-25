import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    shortDescription:
      "A scalable LMS for managing students, teachers, schools, curriculum, lessons, and assessments.",
    description:
      "A scalable Learning Management System designed for managing students, teachers, schools, curriculum, lessons, assessments, and learning workflows end to end.",
    status: "private",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Next.js",
      "Redis",
      "Celery",
      "DigitalOcean",
      "Nginx",
      "Gunicorn",
    ],
    problem:
      "Schools and training organizations needed a single platform to manage students, teachers, curriculum, and assessments — replacing fragmented spreadsheets and disconnected tools with one system that could scale across multiple institutions.",
    solution:
      "Designed and built a multi-tenant-ready LMS with a Django REST Framework backend and a React/Next.js frontend. The system handles role-based access for administrators, teachers, and students, with structured curriculum and assessment data modeled in PostgreSQL and background workflows handled asynchronously via Celery and Redis.",
    role:
      "Full-stack developer and architect — responsible for system design, database schema, REST API development, frontend implementation, and production deployment.",
    features: [
      {
        title: "Role-Based Authentication",
        description: "Separate access levels and permissions for administrators, teachers, and students.",
      },
      {
        title: "Student & Teacher Dashboards",
        description: "Dedicated dashboards surfacing relevant coursework, progress, and activity for each role.",
      },
      {
        title: "School & Curriculum Management",
        description: "Structured management of schools, curriculum, subjects, and lesson sequencing.",
      },
      {
        title: "Quiz & Assessment System",
        description: "Configurable quizzes and assessments with automated scoring workflows.",
      },
      {
        title: "REST API Layer",
        description: "A documented REST API powering the frontend and enabling future integrations.",
      },
    ],
    architecture:
      "Django REST Framework exposes a versioned REST API backed by PostgreSQL. Celery workers, coordinated through Redis, handle background tasks such as notifications and report generation. The React/Next.js frontend consumes the API over authenticated requests. The stack is deployed on DigitalOcean behind Nginx with Gunicorn serving the Django application.",
    challenges: [
      {
        title: "Modeling flexible curriculum structures",
        description:
          "Curriculum, lessons, and assessments needed to support varying structures across schools without over-complicating the data model — solved with a normalized, extensible schema.",
      },
      {
        title: "Role-based access at scale",
        description:
          "Implementing fine-grained permissions across administrator, teacher, and student roles required a consistent authorization layer applied across every API endpoint.",
      },
    ],
    outcome:
      "Delivered a production LMS covering the full lifecycle from student enrollment to assessment, deployed and maintained in a live production environment.",
    coverImage: "/Image/lms.png",
    screenshots: [
      { caption: "Admin dashboard — schools, students, and homework overview", src: "/Image/lms.png" },
      { caption: "Training dashboard — courses, engagement, and progress", src: "/Image/lms1.png" },
    ],
    featured: true,
  },
  {
    slug: "hrms-platform",
    title: "HRMS Platform",
    shortDescription:
      "A centralized HR platform for employee management, attendance, leave, and organizational workflows.",
    description:
      "A centralized Human Resource Management System designed to manage employees, organizational roles, workflows, attendance, and business operations.",
    status: "private",
    technologies: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "React",
      "Next.js",
      "Docker",
    ],
    problem:
      "Growing organizations needed a centralized system to manage employee records, attendance, leave, and reporting — with different access levels for HR staff, managers, and administrators.",
    solution:
      "Built a role-based HRMS with dedicated dashboards for administrators, HR staff, and managers. Attendance and leave workflows run through background task processing, and reporting is generated from a structured PostgreSQL schema designed around organizational hierarchy.",
    role:
      "Full-stack developer — designed the database schema, built the Django REST API, implemented role-based permissions, developed the frontend, and containerized the application with Docker.",
    features: [
      {
        title: "Employee Management",
        description: "Centralized records for employee profiles, roles, and organizational structure.",
      },
      {
        title: "Admin, HR & Manager Dashboards",
        description: "Purpose-built dashboards tailored to each role's responsibilities.",
      },
      {
        title: "Attendance & Leave Management",
        description: "Structured workflows for tracking attendance and processing leave requests.",
      },
      {
        title: "Role-Based Permissions",
        description: "Granular access control enforced consistently across the API and UI.",
      },
      {
        title: "Reporting",
        description: "Operational reports generated from structured attendance and employee data.",
      },
      {
        title: "Background Task Processing",
        description: "Asynchronous processing for notifications and scheduled operations via Celery.",
      },
    ],
    architecture:
      "A Django REST Framework backend exposes API endpoints consumed by a React/Next.js frontend. PostgreSQL stores employee, attendance, and organizational data. Celery and Redis handle background jobs such as leave notifications. The application is containerized with Docker for consistent deployment across environments.",
    challenges: [
      {
        title: "Organizational hierarchy modeling",
        description:
          "Representing reporting lines and manager relationships in a way that stayed queryable and performant required careful schema design.",
      },
      {
        title: "Consistent role-based access",
        description:
          "HR, manager, and admin roles each needed distinct visibility into employee data — enforced through a shared permission layer rather than duplicated logic per view.",
      },
    ],
    outcome:
      "Delivered a working HRMS handling employee management, attendance, and leave workflows for internal business operations.",
    coverImage: "/Image/hrms.png",
    screenshots: [
      { caption: "Manager home — approvals inbox and team overview", src: "/Image/hrms.png" },
    ],
    featured: true,
  },
  {
    slug: "enterprise-license-management-system",
    title: "Enterprise License Management System",
    shortDescription:
      "A centralized system for tracking enterprise software licenses, usage, and allocation across branches.",
    description:
      "A centralized software license management system designed to track enterprise software licenses, employee usage, branches, shifts, and license allocation.",
    status: "private",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Next.js",
    ],
    problem:
      "Enterprises using multiple paid software licenses across branches and shifts had no centralized way to track allocation, usage, and expiry — leading to inefficient license utilization and manual tracking overhead.",
    solution:
      "Built a centralized license management system that tracks license allocation per employee, branch, and shift, with usage history and expiry tracking to give administrators visibility into license utilization across the organization.",
    role:
      "Full-stack developer — designed the data model for licenses, branches, and shifts, built the REST API, and implemented the admin dashboard.",
    features: [
      { title: "License Management", description: "Centralized tracking of software licenses across the organization." },
      { title: "Employee Usage Tracking", description: "Per-employee visibility into license usage and history." },
      { title: "Branch & Shift Management", description: "License allocation modeled around branches and work shifts." },
      { title: "License Allocation", description: "Structured assignment of available licenses to employees." },
      { title: "Expiry Tracking", description: "Visibility into upcoming license expirations to avoid service interruption." },
      { title: "Admin Dashboard", description: "A central view for administrators to manage licenses across branches." },
    ],
    architecture:
      "A Django REST Framework API backed by PostgreSQL models licenses, branches, shifts, and allocation records. The React/Next.js frontend provides the administrative interface for managing and auditing license usage.",
    challenges: [
      {
        title: "Modeling allocation across branches and shifts",
        description:
          "Licenses needed to be tracked per branch and shift without duplicating allocation logic — solved with a relational model tying licenses to allocation records rather than directly to employees.",
      },
      {
        title: "Expiry and usage visibility",
        description:
          "Surfacing upcoming expirations and usage history required efficient queries over allocation history as the dataset grew.",
      },
    ],
    outcome:
      "Delivered a system giving administrators centralized visibility into license allocation, usage, and expiry across branches — solving a real operational tracking problem.",
    screenshots: [{ caption: "License allocation dashboard" }],
    featured: true,
  },
  {
    slug: "community-platform",
    title: "Community Platform",
    shortDescription:
      "A social and community platform with profiles, feeds, events, and student project showcases.",
    description:
      "A community and social platform bringing together user profiles, community feeds, student projects, events, and announcements in one place.",
    status: "in-development",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "React", "Next.js", "Redis"],
    problem:
      "Communities and learning groups often lack a dedicated space to share updates, showcase projects, and stay informed about events — relying instead on scattered social media groups.",
    solution:
      "Building a purpose-built community platform combining social feed features with structured spaces for project showcases, events, and announcements.",
    role: "Full-stack developer — architecture, backend, and frontend implementation (in progress).",
    features: [
      { title: "User Profiles", description: "Personal profiles for community members." },
      { title: "Community Feed", description: "Posts, likes, and comments across the community." },
      { title: "Student Projects", description: "A dedicated space for showcasing student and member projects." },
      { title: "Events & Announcements", description: "Structured event listings and community announcements." },
      { title: "Marketplace", description: "A planned space for community members to exchange resources." },
      { title: "Notifications", description: "Real-time updates for community activity." },
    ],
    architecture:
      "A Django REST Framework backend with PostgreSQL, designed for social-graph-style relationships between users, posts, and projects. Notifications and feed updates are planned to use Redis-backed background processing.",
    challenges: [
      {
        title: "Designing a scalable feed model",
        description:
          "Balancing a performant activity feed with flexible content types (posts, projects, events) is an active design consideration.",
      },
    ],
    outcome:
      "Currently in active development — a detailed case study will be published as the platform nears completion.",
    coverImage: "/Image/community-app.png",
    screenshots: [
      { caption: "Community feed and student project showcase", src: "/Image/community-app.png" },
    ],
    featured: true,
  },
  {
    slug: "expatria-corporate-website",
    title: "Expatria — Corporate Mobility Website",
    shortDescription:
      "A marketing and informational website for a global mobility and immigration services company serving multinational corporations.",
    description:
      "A corporate marketing website for Expatria, a company managing immigration, relocation, fleet, and compliance services for multinational companies moving employees across India.",
    status: "private",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    problem:
      "The client needed a fast, professional, content-driven marketing site to present its immigration and mobility services to multinational corporate clients — clearly communicating its service areas, experience, and reach.",
    solution:
      "Built a responsive, content-driven marketing website with a clear service breakdown, company credentials, and consultation-focused calls to action, optimized for fast loading and search visibility.",
    role: "Full-stack developer — frontend implementation, content structure, and deployment.",
    features: [
      { title: "Service Overview", description: "Structured presentation of immigration, relocation, fleet, and compliance services." },
      { title: "Company Credentials", description: "Experience, nationalities served, and corporate partnerships presented clearly on the homepage." },
      { title: "Consultation CTAs", description: "Clear calls to action for booking a consultation throughout the site." },
      { title: "Responsive Design", description: "A fully responsive layout across desktop and mobile." },
    ],
    architecture:
      "Built with Next.js and TypeScript on the frontend, styled with Tailwind CSS, and deployed for fast, SEO-friendly delivery of marketing content.",
    challenges: [
      {
        title: "Communicating scale and credibility",
        description:
          "The site needed to present the company's experience and reach concisely on the homepage without overwhelming visitors — solved with a focused hero section and a compact credentials strip.",
      },
    ],
    outcome:
      "Delivered a fast, professional marketing website that clearly communicates the company's services to its corporate client base.",
    coverImage: "/Image/informational-website.png",
    screenshots: [{ caption: "Homepage", src: "/Image/informational-website.png" }],
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
