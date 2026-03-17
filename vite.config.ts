import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
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
    {
      name: "copy-social-preview-image",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith("/cadd-solutions.png")) {
            const srcImage = path.resolve(__dirname, "src/assets/device-frames/cadd-solutions.png");

            if (fs.existsSync(srcImage)) {
              res.setHeader("Content-Type", "image/png");
              fs.createReadStream(srcImage).pipe(res);
              return;
            }
          }

          next();
        });
      },
      closeBundle() {
        const srcImage = path.resolve(__dirname, "src/assets/device-frames/cadd-solutions.png");
        const distImage = path.resolve(__dirname, "dist/cadd-solutions.png");

        if (fs.existsSync(srcImage)) {
          fs.copyFileSync(srcImage, distImage);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
