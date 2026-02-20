# Portfolio Website

A modern, immersive, and responsive personal portfolio website designed to showcase professional projects, technical skills, and creative work. This site features a cinematic aesthetic with interactive 3D elements, reflecting a focus on clean UI/UX and high-performance WebGL presentations.

## 🚀 Technologies Used

- **React.js (v19)** - Component-based UI development.
- **Vite** - Lightning-fast frontend tooling and bundling.
- **Tailwind CSS** - Utility-first styling for modern, consistent design.
- **Three.js & React Three Fiber** - 3D animations, interactive hero canvas, and WebGL rendering.
- **Framer Motion** - Smooth animations, gestures, and layout transitions.
- **Lucide React** - High-quality, scalable iconography.
- **Vite PWA & Sitemap** - For advanced SEO and progressive web app capabilities.

## ✨ Features

- **Immersive 3D Experiences:** Interactive 3D Hero canvas and Torus knots built with `@react-three/fiber` and `@react-three/drei`.
- **High-Performance Animations:** Complex animations using Framer Motion with hardware acceleration for maximum framerates (LCP and CLS optimized).
- **Responsive Design:** Fully tailored for mobile, tablet, and desktop viewports without compromising visual fidelity.
- **Project Showcase:** A dedicated spotlight section for web development, AI, and full-stack projects, featuring tailored project detail pages.
- **Cinematic UI Elements:** Dynamic starfield backgrounds, cursor trails, signal glitches, and scramble text effects.
- **Contact & Accessibility:** Clean contact interfaces, copy-to-clipboard functionality, and WCAG-compliant color contrast ratios.
- **Smooth Navigation:** Intuitive hash-link scrolling and staggered animated routing.

## ⚡ SEO & Performance Optimization

A massive focus during development was ensuring top-tier performance and search engine visibility. Key optimizations include:

- **Lighthouse Scores maximized:** Achieved exceptional scores in Performance, Accessibility, Best Practices, and SEO.
- **Lazy Loading & Code Splitting:** Heavy components (like Three.js canvases and large routes) are lazy-loaded via `React.lazy` and `Suspense` to significantly lower Initial Load Time.
- **Image & Font Optimization:** Preconnecting to Google Fonts and using optimized `.webp` and `.png` image formats.
- **PWA Ready:** Implemented `vite-plugin-pwa` for standalone installability with an explicit manifest for cross-device support.
- **Dynamic Sitemap Generation:** Set up `vite-plugin-sitemap` to ensure proper indexing of dynamic project detail pages (`/project/:id`).
- **Semantic HTML & Meta Tags:** Configured Open Graph tags, Twitter Cards, proper indexing, and precise meta descriptions in `index.html`.
- **Eliminating Layout Shift (CLS):** Absolute positioning fallbacks and strict structural allocations.

_### Before & After Lighthouse Reports_  
_(Remember to upload your screenshots here!)_

- **Before Optimization:** `![Before Lighthouse](placeholder_link_or_path_here)`
- **After Optimization:** `![After Lighthouse](placeholder_link_or_path_here)`

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AlwinJoseph3/Portfolio.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Portfolio
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `/src/components` - Reusable UI elements (Navbar, 3D HeroCanvas, TechStack, Spotlights, Footer).
- `/src/pages` - Main view sections (Home, ProjectDetail, individual project pages).
- `/src/data` - Local JSON stores for `projects` and `tech` stack categories.
- `/src/assets` - Images, icons, and static media (Resume.pdf).
- `tailwind.config.js` - Custom theme configurations for typography, brand colors, and animations.
- `vite.config.ts` - PWA configuration, sitemaps, and build tooling modifications.

<br><br><br>

<p align="center">Crafted with ❤️ by Alwin Joseph</p>
