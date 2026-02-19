import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import sitemap from "vite-plugin-sitemap";

// Pull your project IDs to automate sitemap routes
const projectIds = ["1", "2", "3"];
const dynamicRoutes = projectIds.map((id) => `/project/${id}`);

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      hostname: "https://alwinjoseph.netlify.app", // Replace with your actual URL
      dynamicRoutes: dynamicRoutes,
    }),
  ],
  base: "/",
});
