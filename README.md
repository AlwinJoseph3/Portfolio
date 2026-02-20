# Portfolio Website

A modern, responsive personal portfolio website designed to showcase professional projects, technical skills, and creative work. This site features a cinematic aesthetic, reflecting a focus on clean UI/UX and high-quality visual presentation.

## 🚀 Technologies Used

- **React.js** - Component-based UI development
- **Tailwind CSS** - Utility-first styling for modern design
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - High-quality iconography
- **Vite** - Fast frontend tooling and bundling

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
- **Project Showcase:** A dedicated section for web development and AI-related projects.
- **Design Gallery:** Integration for visual work, including UI/UX designs and photography.
- **Contact Integration:** Clean forms and social links for professional inquiries.
- **Smooth Navigation:** Intuitive user flow with animated transitions.

## ⚙️ Performance & SEO Optimization

This portfolio has been rigorously optimized using modern web practices to ensure maximum discoverability, accessibility, and speed (verified via high Chrome Lighthouse scores):

- **Search Engine Optimization (SEO):** Deeply integrated `meta` tags, Open Graph (`og:`) and Twitter card properties to ensure visually appealing previews when links are shared on social media.
- **Progressive Web App (PWA):** Configured a full Web App Manifest via `vite-plugin-pwa` to meet PWA installability requirements, including standalone routing, theme coloring, and maskable icons.
- **Dynamic Sitemap Generation:** Leverages `vite-plugin-sitemap` to dynamically generate XML sitemaps for individual project pages, guaranteeing every view is crawled by search engines.
- **Resource Prioritization:** Dramatically improved overall Page Load and Time to Interactive (TTI) metrics by explicitly `<link rel="preconnect">`ing to Google Fonts and using optimized font-display options (`display=swap`).
- **Optimized Image Deliverability:** Resolved cross-origin asset blocking and optimized image handling to drastically reduce Total Blocking Time (TBT).

## 📸 Lighthouse Audit Results

I've actively monitored and improved the performance using Google Lighthouse. Below are the before and after results highlighting the impact of these improvements:

### Before Enhancements:

> _(Upload your "Before" Lighthouse screenshot here!)_
> `![Lighthouse Before Report](./public/lighthouse-before.png)`

### After Enhancements:

> _(Upload your "After" Lighthouse screenshot here!)_
> `![Lighthouse After Report](./public/lighthouse-after.png)`

## 🛠️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/AlwinJoseph3/Portfolio.git](https://github.com/AlwinJoseph3/Portfolio.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

- `/src/components`: Reusable UI elements (Navbar, Project Cards, etc.).
- `/src/assets`: Images, icons, and static media.
- `/src/pages`: Main view sections (Home, About, Projects, Gallery).
- `tailwind.config.js`: Custom theme configurations for typography and colors.

<br><br><br>

<p align="center">Thats it!</p>
