import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set the base path for assets. For GitHub Pages project sites,
  // set DEPLOY_BASE to the repo name, e.g. "/CADD-Solutions/".
  // Defaults to "/" for local/dev or platforms like Vercel/Netlify.
  base: process.env.DEPLOY_BASE || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
