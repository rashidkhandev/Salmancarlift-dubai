# Salman Car Lift Dubai — React Architecture & Render Deployment

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

5. **Production Ready for Render**:
   - Native `render.yaml` configuration for automated Static Site deployment.
   - SPA route rewrite rule (`/*` -> `/index.html`) ensuring clean URLs and deep linking work flawlessly.
   - Production caching headers for assets and images.

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
├── render.yaml              # Render blueprint specification
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

## 🌐 Deploying to Render

### Method A: Deploy using Blueprint (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Log into your [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** and select **Blueprint**.
4. Connect your `salman-car-website` repository.
5. Render will automatically detect `render.yaml` and set up:
   - **Environment**: Static Site
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
   - **Routes**: Rewrite `/*` to `/index.html` (for SPA routing)
6. Click **Apply** to deploy!

### Method B: Manual Static Site Setup
1. In Render Dashboard, click **New +** -> **Static Site**.
2. Connect your Git repository.
3. Configure the following fields:
   - **Name**: `salman-car-lift-dubai`
   - **Branch**: `main` (or `master`)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. In **Redirects / Rewrites**, add:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
5. Click **Create Static Site**.

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
