# Salman Car Lift Dubai — React Architecture & Vercel Deployment

A modern, high-performance React + Vite web platform engineered for **Salman Car Lift Dubai**, offering reliable monthly, weekly, and daily passenger transport services across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates.

Deployed preview: [https://salman-carleft-dubai.web.app/](https://salman-carleft-dubai.web.app/)

---

## 🚀 Key Features & Enhancements

1. **Modern Component Architecture**:
   - Built with **React 18** and **Vite** for blazing fast compilation and instant hot-module replacement.
   - Clean separation of concerns: `components/common`, `components/layout`, `components/sections`, `pages`, `hooks`, `utils`, `styles`.
   - **Centralized Business Configuration**: Update phone numbers, WhatsApp links, operating hours, route data, and packages in one single file (`src/utils/contactLinks.js`).

2. **Preserved & Elevated Brand Identity**:
   - Signature night highway navy (`#070f1c`, `#0b1a2e`) with UAE warm gold (`#e4c777`, `#c9a24b`) and WhatsApp green (`#25d366`).
   - Authentic **ticket-stub card design system** with perforated dividers and punch details.
   - Animated SVG highway route visual tracking major UAE commuter corridors (DXB, SHJ, AJM, AUH, FUJ) with continuous moving vehicle beacon.

3. **Subtle Premium Navbar Redesign**:
   - Slim, elegant glassmorphic navbar with backdrop blur.
   - Smooth scroll detection with subtle elevated shadow on scroll.
   - Fully accessible mobile drawer menu with automatic scroll lock, escape-key closing, and route transition resets.
   - Prominent, high-converting WhatsApp and Call Now actions.

4. **Technical SEO & Search Optimization**:
   - Reactive head synchronization via `useDocumentSeo` updating page title, meta description, and canonical tag per route.
   - Rich **Schema.org / JSON-LD** structured data for `LocalBusiness`, `Service`, `BreadcrumbList`, and `FAQPage`.
   - Production `robots.txt` and comprehensive `sitemap.xml` with priority and change frequencies.
   - Open Graph and Twitter Card tags with `og-cover.jpg` for rich link previews on WhatsApp, iMessage, Facebook, and X.

5. **Production Ready for Vercel**:
   - Native `vercel.json` configuration for automated edge deployment.
   - SPA route rewrite rule (`/*` -> `/index.html`) ensuring clean URLs and deep linking work flawlessly without breaking static files (`robots.txt`, `sitemap.xml`, images, or assets).
   - Production caching and security headers.

---

## 📁 Project Structure

```
salman-car-website/
├── public/
│   ├── favicon.svg          # High-resolution SC emblem
│   ├── og-cover.jpg         # Open Graph sharing preview banner
│   ├── robots.txt           # Search crawler directives
│   ├── sitemap.xml          # Search engine URL registry
│   └── site.webmanifest     # Progressive web application manifest
├── src/
│   ├── assets/
│   │   └── images/          # Image assets
│   ├── components/
│   │   ├── common/          # Reusable UI primitives (Button, Logo, SectionHeading, WhatsAppButton, ScrollToTop)
│   │   ├── layout/          # Navbar, Footer, FloatingActions
│   │   └── sections/        # Hero, TrustStrip, ServicesPreview, RoutesPreview, PackagesPreview, TestimonialsPreview, FAQPreview, CTASection
│   ├── pages/               # Home, AboutPage, ServicesPage, RoutesPage, PackagesPage, GalleryPage, TestimonialsPage, FAQPage, ContactPage, PrivacyPage, TermsPage, NotFound
│   ├── hooks/               # useScrollPosition
│   ├── utils/               # contactLinks, seoConfig
│   ├── styles/              # variables.css, index.css, responsive.css
│   ├── App.jsx              # Main router with legacy .html alias fallbacks
│   └── main.jsx             # React entry point
├── index.html               # HTML entry with font preconnects & JSON-LD
├── package.json             # Scripts & dependencies
├── vite.config.js           # Vite build & development configuration
├── vercel.json              # Vercel deployment specification & SPA rewrites
└── README.md
```

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js v18 or higher (v20+ recommended)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Step 1: Push Project to GitHub
```bash
git add .
git commit -m "feat: configure Vercel deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/salman-car-website.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** -> **Project**.
3. Select your `salman-car-website` repository from GitHub.

### Step 3: Verify Build Settings
Vercel automatically detects Vite from `vercel.json`:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Deploy
Click **Deploy**. Vercel will build the application in under 30 seconds and provide a global edge production URL (e.g., `https://salman-car-lift-dubai.vercel.app`).

The included `vercel.json` ensures all client-side routes (`/services`, `/routes`, `/packages`, `/about`, `/contact`, `/faq`, etc.) and legacy `.html` routes route smoothly to `/index.html` without breaking static assets or XML sitemaps.

---

## 📞 Centralized Business Contact Details

To update the phone number, WhatsApp greeting, coverage areas, or rates across the entire website, simply edit `src/utils/contactLinks.js`:

```javascript
export const BUSINESS_CONFIG = {
  name: "Salman Carlift Dubai",
  phoneDisplay: "+971 52 148 8011",
  phoneRaw: "+971521488011",
  whatsappNumber: "971521488011",
  defaultWhatsAppMessage: "Hi Salman Carlift, I need a car lift booking.",
  hours: "24 Hours a day, 7 days a week (including public holidays)",
  coverage: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain & Al Ain"
};
```
All buttons, headers, footers, and contact cards will update automatically.
