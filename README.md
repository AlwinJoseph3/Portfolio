<div align="center">
  <h1>Alwin Joseph | Portfolio</h1>
<br>
  <p>
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  </p>
</div>

---

A modern, highly responsive personal portfolio website designed to showcase professional projects, technical skills, and creative work. This site features a sleek, cinematic aesthetic with smooth animations, reflecting a deep focus on clean UI/UX, robust performance, and high-quality visual presentation.

## 🚀 Technologies Used

- **React 19** - Component-based UI development framework.
- **Tailwind CSS** - Utility-first styling for rapid, scalable design.
- **Framer Motion** - Fluid page animations and micro-interactions.
- **Three.js & React Three Fiber** - Immersive 3D interactive experiences and backgrounds.
- **TypeScript** - Strongly typed JavaScript for highly maintainable code.
- **Vite** - Lightning-fast frontend tooling, bundling, and HMR.
- **Lucide React** - High-quality, customizable iconography.

## ✨ Features

- **Immersive 3D Graphics:** Interactive 3D particle systems and object physics using `@react-three/fiber` and `@react-three/cannon`.
- **Responsive & Fluid UI:** Fully optimized layout for mobile, tablet, and desktop viewports without sacrificing polish.
- **Cinematic Aesthetic:** A dark, visually engaging cyberpunk-inspired theme utilizing deep blacks (`#000000`), micro-animations, and animated marquees.
- **Dynamic Project Routing:** A modular, scalable project gallery that generates dynamic routes to detailed nested project pages.
- **Progressive Web App (PWA):** Fully installable natively on devices with full offline caching support and web app manifests.
- **Seamless Navigation:** Smooth routing with beautiful animated transitions between pages using Framer Motion.

## ⚡ SEO & Performance Optimization

This portfolio has been rigorously audited and optimized to achieve maximum **Lighthouse** scores across all metrics (Performance, Accessibility, Best Practices, and SEO).

### Key Optimizations:

- **PWA & Installability:** Utilizes `vite-plugin-pwa` to auto-generate `manifest.json`, configure maskable icons (`any maskable`), and ensure offline resilience.
- **Dynamic Sitemap Generation:** Leverages `vite-plugin-sitemap` to programmatically crawl and index all dynamic routes (e.g., individual project pages), significantly improving search engine indexing.
- **Preconnected Font Assets:** Avoids render-blocking delays by strategically using `<link rel="preconnect">` and CSS `font-display: swap` for all Google Fonts (Inter, Space Grotesk, Space Mono).
- **Comprehensive Meta Tags:** Implemented rich Open Graph (OG) and Twitter Card metadata for perfectly styled social media link previews (`https://alwinjoseph.netlify.app/`).
- **GPU Accelerated Animations:** Heavily relies on `transform` and `opacity` for CSS loaders and elements instead of paint-heavy calculations.

### Lighthouse Reports 🚦

> **[ BEFORE OPTIMIZATION ]**  
> <img src='./public/before.png'>

> **[ AFTER OPTIMIZATION ]**  
> <img src='./public/after.png'>
`

## 📂 Project Structure

- `src/components/` - Reusable, isolated UI pieces (Navbar, Interactive Canvas, Loaders, Techstack).
- `src/pages/` - Core routing views (Home, ProjectDetail, etc.).
- `src/assets/` - Static media like webp images and SVG icons.
- `src/index.css` - Global Tailwind imports and advanced custom CSS animations (glitch effects, parallax, starry skies).
- `vite.config.ts` - Robust Vite configuration including PWA auto-update and Sitemap parameters.

<br><br>

<div align="center">
  <p>Built with ❤️ by <b>Alwin Joseph</b></p>
  <a href="https://alwinjoseph.netlify.app/"><b>Visit</b></a>
</div>
