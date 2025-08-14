# PixelNest — Next.js + Tailwind

A production-ready starter with landing page + About + Services + Contact, wired contact form (Web3Forms), and brand assets.

## Quick Start

```bash
npm i
npm run dev
```

## Configure contact form

1. Create a free account at **https://web3forms.com** and copy your **Access Key**.
2. Create a file named `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=REPLACE_WITH_YOUR_KEY
   ```
3. Restart the dev server.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to **Vercel → New Project → Import** your repo.
3. Add env var: `NEXT_PUBLIC_WEB3FORMS_KEY` with your key.
4. Deploy.

## Tech
- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- Lucide Icons

---

© 2025 PixelNest
