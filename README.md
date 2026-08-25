# Md Shahnawaz Ali — Portfolio

A premium, futuristic, motion-driven personal portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber — positioning Md Shahnawaz
Ali as a Senior Full-Stack Software Developer capable of owning a product end-to-end:
architecture, backend, frontend, database design, and production deployment.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based theme, custom design tokens, glassmorphism system)
- **Animation:** Framer Motion (page/scroll motion, 3D tilt, magnetic buttons, count-up)
- **3D:** Three.js + React Three Fiber + drei (hero workspace scene, interactive globe)
- **Icons:** Lucide React
- **Theme:** next-themes (dark mode default, light mode supported)
- **Content:** MDX blog posts via `next-mdx-remote` + `gray-matter`

## Design System

The full token set — colors, glass/glow variants, shadows, radii, and motion timing — lives
in `src/app/globals.css` under `:root` / `:root[data-theme="dark"]`. Key tokens:

- **Color:** `--accent`, `--purple`, `--blue`, `--pink`, `--cyan` (brand palette), plus
  `--background` / `--surface` / `--foreground` / `--muted` / `--border` for the neutral scale.
- **Glass:** `.glass` / `.glass-panel` utility classes (blur + translucent background + border).
- **Glow:** `.glow-border` (animated gradient border on hover), `--shadow-glow-purple` /
  `--shadow-glow-blue`, `.gradient-text` / `.gradient-text-brand` (animated gradient text).
- **Motion:** `--ease-premium`, `--duration-micro` / `--duration-card` / `--duration-section`;
  `prefers-reduced-motion` is respected globally (CSS media query) and 3D scenes additionally
  check it via `usePrefersReducedMotion()` before mounting.

## 3D & Motion Architecture

- `src/components/three/` holds all React Three Fiber scenes: `hero-scene.tsx` (floating
  monitor with animated code, orbital rings, particle field, pointer parallax) and
  `globe-scene.tsx` (particle globe with orbiting ring). Both are pure primitives/points — no
  external 3D model files — to keep bundle size and GPU cost low.
- Every scene is loaded via `next/dynamic({ ssr: false })` and wrapped so it never ships in the
  server bundle. `lazy-globe.tsx` additionally mounts only once its section is scrolled near the
  viewport (`IntersectionObserver`) and skips WebGL entirely when `prefers-reduced-motion` is
  set, falling back to a static CSS glow.
- The hero's 3D scene and floating tech cards are hidden below the `lg` breakpoint — mobile gets
  a fast, fully-2D hero instead of a scaled-down WebGL scene.
- `components/shared/tilt-card.tsx` provides the reusable 3D hover-tilt used by project, blog,
  and service cards; `components/ui/cta-button.tsx` provides the magnetic-hover button.

## Project Structure

```text
src/
├── app/                  # Routes (App Router) — pages, layout, sitemap, robots, OG image
├── components/
│   ├── layout/           # Navbar (floating glass), Footer, ThemeToggle
│   ├── home/              # Homepage sections (hero, skill universe, floating tech cards...)
│   ├── three/              # React Three Fiber scenes (hero workspace, globe) + lazy loaders
│   ├── projects/          # Project card + screenshot placeholder
│   ├── blog/               # Blog card
│   ├── contact/            # Contact form + floating-label inputs
│   ├── shared/              # Cross-page reusable sections (timeline, process, CTA, tilt card...)
│   └── ui/                  # Base primitives (Container, CTAButton, Badge, SectionHeading...)
├── data/                 # Data-driven content: projects, skills, services, experience, nav
├── content/blog/         # MDX blog posts
├── lib/                  # Utilities, site config, blog loader, contact delivery
└── types/                # Shared TypeScript types
```

Content lives in `src/data/*.ts` and `src/content/blog/*.mdx` — components render data, they
don't hardcode it. Add a new project by adding an entry to `src/data/projects.ts`; add a new
blog post by dropping a new `.mdx` file into `src/content/blog/`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need:

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | No | Enables the contact form to actually send email via [Resend](https://resend.com). Without it, submissions are logged to the server console instead (useful for local dev). |
| `CONTACT_TO_EMAIL` | No | Destination inbox for contact form submissions. Defaults to the email in `src/lib/site.ts`. |
| `CONTACT_FROM_EMAIL` | No | Verified "from" address for Resend. Defaults to Resend's sandbox sender. |

The contact form posts to `/api/contact` (`src/app/api/contact/route.ts`), which calls
`deliverContactSubmission()` in `src/lib/contact.ts`. That function is the single seam to swap
email delivery for a call to a Django backend later — e.g. `POST ${DJANGO_API_URL}/api/contact/`
— without touching the form component or the route handler.

## Before Deploying to Production

A few placeholders need real values — search for them or check these files directly:

- **`src/lib/site.ts`** — update `url` (your real domain), and the GitHub/LinkedIn URLs under
  `social`.
- **Profile photo** — `src/components/shared/profile-card.tsx` currently renders an "SA"
  initials placeholder; swap in a real photo per the comment inline in that file (a `next/image`
  with `fill`).
- **Project screenshots** — every project case study has placeholder screenshot blocks
  (`src/components/projects/screenshot-placeholder.tsx`) marked "Screenshot to be added."
  Replace `project.screenshots` entries in `src/data/projects.ts` with real images once
  available.
- **Live/GitHub links** — `liveUrl` and `githubUrl` fields on each project in
  `src/data/projects.ts` are omitted by default; add them for any project that's public.
- **Resume** — the `/resume` page renders resume content directly from `src/data/experience.ts`
  and `src/data/skills.ts`; the "Request PDF Resume" button links to a mailto. Add a real
  `public/resume.pdf` and link to it directly if you want a downloadable file.
- **Testimonials** — no testimonials section exists yet since none were provided; add one
  (e.g. a `src/data/testimonials.ts` + a `TestimonialCard` component) once you have real client
  feedback to show.

## SEO

- Per-page metadata (title templates, descriptions, canonical URLs) via the App Router
  `metadata` export on every route.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` / `robots.txt`.
- `src/app/opengraph-image.tsx` and `src/app/icon.tsx` generate the OG image and favicon.
- JSON-LD structured data: `Person`, `WebSite`, and `ProfessionalService` in
  `src/app/layout.tsx`; `BlogPosting` on each blog post; `BreadcrumbList` on each project.

## Deployment

Ready to deploy on [Vercel](https://vercel.com/new) or any Node.js host that supports Next.js:

```bash
npm run build
npm run start
```

On Vercel: connect the repository, set any environment variables from the table above in the
project settings, and deploy — no additional configuration is required.
