# Portfolio Site

Ross Ziegler's personal portfolio,  projects and the gateway to all other personal sites.
Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Structure

- `src/app/page.tsx` — the single-page layout (Hero, Projects, Interests, Contact)
- `src/lib/data.ts` — project content (add new projects or fill in pending
  repo/screenshot links here)
- `src/components/` — `Nav` and `ProjectCard`

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

Connected to Vercel for auto-deploy on every push to `main`. To deploy manually:

```bash
npx vercel --prod
```
