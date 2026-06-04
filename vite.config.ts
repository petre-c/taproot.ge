/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// base: "./" -> relative asset URLs so the same build works at
// petre-c.github.io/taproot.ge/ now AND at https://taproot.ge later.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  test: {
    environment: "node",
    include: ["src/test/**/*.test.ts"],
  },
});
