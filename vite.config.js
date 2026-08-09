import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Code splitting untuk optimasi
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-framer-motion";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("swiper")) return "vendor-swiper";
            if (id.includes("react-helmet-async")) return "vendor-helmet";
            if (id.includes("node_modules")) return "vendor";
          }
        },
        // Naming convention yang lebih baik
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    minify: "esbuild",
    cssCodeSplit: true,

    // Target browsers modern
    target: "esnext",

    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // Optimasi dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },

  // Server config (untuk development)
  server: {
    port: 3000,
  },
});
