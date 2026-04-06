import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Silence Browserslist “caniuse-lite is old” noise in CI/Vercel (Autoprefixer)
process.env.BROWSERSLIST_IGNORE_OLD_DATA = "1";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
