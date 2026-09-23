# yash37158.github.io — portfolio

Static portfolio site built with Next.js 15 (App Router, `output: "export"`), React 19 and plain CSS. No backend.

- Content: [`content.ts`](content.ts) — edit this, not the JSX.
- Layout: [`app/page.tsx`](app/page.tsx) · Styles: [`app/globals.css`](app/globals.css)
- Images: `public/avatar.jpg`, `public/projects/*.png`

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

Deploy `out/` to any static host (Vercel, Netlify, GitHub Pages).
