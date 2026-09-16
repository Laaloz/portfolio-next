# laalo.dev

Personal site and portfolio of Laalo Ceesay, full-stack developer in Jyväskylä, Finland.

**Live:** https://laalo.dev

## What it is

A bilingual (FI/EN) portfolio with project write-ups in a challenge → solution format, a skills overview, live GitHub activity, and a contact form. Built to be fast, accessible and easy to maintain rather than flashy.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- Hand-written CSS with design tokens; no UI framework
- **Nodemailer** for the contact form (server-side, no third-party form service)
- Deployed on Vercel

## Quality targets

- Lighthouse 90+ on performance, accessibility, best practices and SEO
- WCAG-conscious markup: semantic HTML, keyboard navigation, focus states, reduced-motion support, sufficient contrast
- Responsive down to small phones without horizontal scroll

## How it was built

Designed in Figma first, then implemented with AI-assisted tooling (OpenCode with Copilot/GPT models, Claude) as part of the workflow: scaffolding, refactors and accessibility checks with agents, every change reviewed by hand before commit.

## Running locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set the SMTP variables for the contact form.

## License

Code is MIT. Content, copy and design are © Laalo Ceesay.
