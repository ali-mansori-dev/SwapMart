// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  build: {
    minify: "esbuild",
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
