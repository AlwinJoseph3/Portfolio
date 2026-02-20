import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { VitePWA } from "vite-plugin-pwa";

// Use your actual project slugs from src/data/projects.ts
const projectIds = ["motobuddy", "shms", "homechef", "elis"];
const dynamicRoutes = projectIds.map((id) => `/project/${id}`);

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.png", "Resume.pdf", "icons/*.svg"],
      devOptions: {
        enabled: true, // Allows testing PWA on localhost
      },
      manifest: {
        name: "Alwin Joseph | Creative Developer",
        short_name: "Alwin Joseph",
        description:
          "Portfolio of Alwin Joseph. Specializing in Frontend Development, UI/UX, and 3D Web Experiences.",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable", // Fixes Lighthouse PWA audit
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    sitemap({
      hostname: "https://alwinjoseph.netlify.app",
      dynamicRoutes: dynamicRoutes,
    }),
  ],
  base: "/",
});
