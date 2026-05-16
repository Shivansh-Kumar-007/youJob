# youJob

**GET HIRED FASTER. SEARCH SMARTER.**

youJob is a high-performance, AI-driven job discovery platform designed for the modern remote worker. Stop scrolling boards manually; upload your CV and let our neural hunt engine index and rank roles that actually fit your career trajectory.

## Features

- **CV-Driven Discovery:** Your resume is your search engine.
- **Neural Matching:** Deep-alignment technology for remote roles.
- **Infinite Discovery:** Real-time indexing of the deep web for job opportunities.
- **High-Drama UI:** A brutalist, motion-heavy experience built for speed.

## Built With

- Next.js (App Router)
- Framer Motion
- Tailwind CSS
- Prisma
- Lucide React

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up your `.env` file
4. Run development server: `npm run dev`

## TinyFish Job Search

The project now includes a TinyFish + Gemini pipeline wired through Server Actions (`src/app/actions/job-search.ts` and `src/app/actions/auth.ts`).

Required env vars:

- `TINYFISH_API_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SUPABASE_RESUME_BUCKET` (example: `resumes`)
- `SUPABASE_RESUME_BUCKET` (server-side bucket override)

When a user verifies OTP with a CV selected, the app now:
1. Uploads CV via Supabase signed upload URL
2. Stores `resumeUrl` path in `UserProfile`
3. Parses resume text and profile fields once with Gemini
4. Stores parsed data (`resumeText`, `parsedProfile`, `skills`, etc.) in DB for reuse in job search

Call the action from your app code instead of hitting a custom API route.

---
Built by [Shivansh Kumar](https://github.com/Shivansh-Kumar-007)
