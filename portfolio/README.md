# Lufene Mark Travis — Portfolio

Modern developer portfolio built with **React + TypeScript + Tailwind CSS + Framer Motion**.

## ✨ Features

- Editorial dark design with gold/amber accents
- Playfair Display serif headlines + DM Sans body
- Framer Motion scroll animations & micro-interactions
- Fully responsive (mobile-first)
- Formspree contact form integration
- SEO meta tags
- Deployable to Vercel or Netlify in one command

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import that repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done ✅

## 🌐 Deploy to Netlify

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy** ✅

## 📝 Customizing Content

All content lives in one file:

```
src/data/content.ts
```

Edit `personal`, `about`, `skills`, `projects`, `experience`, `education`, and `certifications` there — no need to touch any component files.

## 📬 Contact Form

The form uses **Formspree** (endpoint already configured). To use your own:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the endpoint in `src/data/content.ts`:

```ts
formspree: 'https://formspree.io/f/YOUR_FORM_ID',
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── hooks/
│   └── useScrollReveal.ts
├── data/
│   └── content.ts       ← edit this file to update all content
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
```
