import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // Add base URL configuration
  base: "./",
  // Add build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    // Ensure clean builds
    emptyOutDir: true,
    // Configure rollup options
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
