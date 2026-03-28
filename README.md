# ☠️ One Piece Portfolio — Ankit Premi

> An Awwwards-inspired cinematic portfolio built with Next.js 14, Three.js, GSAP, Framer Motion, and a One Piece universe theme.

## 🚀 Quick Start

### 1. Install Node.js (if not installed)
```bash
# macOS
brew install node

# or download from https://nodejs.org
```

### 2. Create the Next.js project
```bash
npx create-next-app@latest one-piece-portfolio \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd one-piece-portfolio
```

### 3. Install all dependencies (one command)
```bash
npm install three @react-three/fiber @react-three/drei gsap lenis framer-motion lucide-react clsx tailwind-merge axios react-icons lottie-react zustand @studio-freight/lenis react-intersection-observer next-themes mongoose zod react-hook-form @hookform/resolvers @emailjs/browser react-hot-toast recharts nodemailer

npm install -D @types/three prettier prettier-plugin-tailwindcss
```

### 4. Copy all source files from this repo into `src/`

### 5. Setup environment
```bash
cp .env.local.example .env.local
# Edit .env.local with your values
```

### 6. Add public assets
Place these in `/public/`:
- `resume.pdf` — Your resume PDF
- `/characters/zoro.png`, `luffy.png`, etc. — Character images (optional for enhancements)

### 7. Run
```bash
npm run dev
# → http://localhost:3000
```

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Contact form API
│   │   └── github/route.ts        # GitHub stats API
│   ├── globals.css                # Full cinematic CSS
│   ├── layout.tsx
│   └── page.tsx                   # Main assembly
│
├── components/
│   ├── three/
│   │   ├── KatanaScene.tsx        # 3D floating katana
│   │   └── ParticleField.tsx      # Sakura + haki particles
│   │
│   ├── sections/
│   │   ├── Hero.tsx               # Luffy — Grand Line intro
│   │   ├── Skills.tsx             # Zoro — Sword rack
│   │   ├── Experience.tsx         # Robin — Poneglyph cards
│   │   ├── Projects.tsx           # Franky — Blueprint cards
│   │   ├── Analytics.tsx          # Nami — Dashboard + charts
│   │   ├── Achievements.tsx       # Usopp — Animated counters
│   │   └── Contact.tsx            # Shanks — Red emperor form
│   │
│   └── ui/
│       ├── Loader.tsx             # Cinematic loading screen
│       ├── Navbar.tsx             # Scroll-aware navbar
│       ├── CustomCursor.tsx       # Green haki cursor
│       ├── GlassCard.tsx          # Glassmorphism card
│       └── SectionLabel.tsx       # Pirate section headers
│
├── hooks/
│   ├── useLenis.ts                # Smooth scrolling
│   ├── useScrollProgress.ts       # Progress bar
│   └── useMouseParallax.ts        # Parallax effect
│
├── lib/
│   ├── constants.ts               # All portfolio data
│   ├── animations.ts              # Framer Motion presets
│   └── utils.ts                   # Helpers
│
└── store/
    └── usePortfolioStore.ts       # Zustand state
```

---

## 🎨 Sections

| Section | Pirate | Theme | Feature |
|---|---|---|---|
| Hero | Luffy | Grand Line | 3D Katana, parallax, animated text |
| Skills | Zoro | Sword Rack | Interactive 5-sword selector |
| Experience | Robin | Poneglyphs | Expandable stone cards |
| Projects | Franky | Blueprints | Blueprint grid cards |
| Analytics | Nami | Data Ocean | Radar + Bar charts |
| Achievements | Usopp | Sniper | Animated number counters |
| Contact | Shanks | Red Emperor | Form + social links |

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Add environment variables in Vercel dashboard.

---

## ✨ Tech Stack

- **Next.js 14** App Router + TypeScript
- **Three.js** + React Three Fiber + Drei (3D scenes)
- **Framer Motion** (cinematic transitions)
- **GSAP** (scroll animations)
- **Lenis** (ultra smooth scrolling)
- **Recharts** (analytics dashboard)
- **Zustand** (state management)
- **Tailwind CSS** (utility styling)
- **Zod + React Hook Form** (form validation)

---

Built by Ankit Premi · 2026 · ⚓ The Grand Line Awaits
