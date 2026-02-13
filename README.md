# Designer Portfolio

> Crafting Digital Experiences That Inspire

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Portfolio of Alex Designer, a freelance UI/UX designer and brand strategist creating stunning digital experiences for startups and established brands.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark mode support
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Image gallery showcase
- Customer testimonials
- FAQ section

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, gallery, features, testimonials, cta
- **Projects** (`/projects`) — page-header, gallery
- **Project Detail** (`/projects/[slug]`) — project-header, image-gallery, project-content, project-nav
- **About** (`/about`) — about-hero, timeline, skills, features
- **Blog** (`/blog`) — page-header, featured-post, blog-grid
- **Blog Post** (`/blog/[slug]`) — post-header, post-content, post-footer, related-posts
- **Contact** (`/contact`) — page-header, contact-split, faq

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── page.tsx
├── components/
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilter.tsx
│   └── Timeline.tsx
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── types/
    └── index.ts
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#6366f1](https://via.placeholder.com/15/6366f1/000000?text=+) | `#6366f1` |
| Secondary | ![#818cf8](https://via.placeholder.com/15/818cf8/000000?text=+) | `#818cf8` |
| Accent | ![#a5b4fc](https://via.placeholder.com/15/a5b4fc/000000?text=+) | `#a5b4fc` |
| Background | ![#0f0f14](https://via.placeholder.com/15/0f0f14/000000?text=+) | `#0f0f14` |

## Typography

- **Headings:** Space Grotesk
- **Body:** Inter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mlkw2dti.git

# Navigate to the project
cd proj_mlkw2dti

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mlkw2dti)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
