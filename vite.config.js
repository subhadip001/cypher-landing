import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
    fs: {
      strict: false,
    },
    middleware: (req, res, next) => {
      if (!req.url.startsWith("/api")) {
        req.url = "/";
      }
      next();
    },
  },
});
