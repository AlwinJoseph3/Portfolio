import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";

// Pull your project IDs to automate sitemap routes
const projectIds = ["1", "2", "3"];
const dynamicRoutes = projectIds.map((id) => `/project/${id}`);

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: { enabled: true },
      registerType: "autoUpdate",
      includeAssets: ["omlete.png", "Resume.pdf", "logo.png"], // Added logo.png for caching
      manifest: {
        name: "Alwin Joseph | Creative Developer",
        short_name: "Alwin Joseph",
        description:
          "Portfolio of Alwin Joseph. Specializing in Frontend Development, UI/UX, and 3D Web Experiences.",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/omlete.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable", // Critical for Lighthouse PWA score
          },
          {
            src: "/omlete.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    sitemap({
      hostname: "https://alwinjoseph.netlify.app", // Replace with your actual URL
      dynamicRoutes: dynamicRoutes,
    }),
  ],
  base: "/",
});
