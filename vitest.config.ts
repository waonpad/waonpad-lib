// import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    globals: false,
    // environment: 'happy-dom',
    include: ["src/**/*.test.{ts,tsx}"],
    // alias: {
    //   "@": resolve(__dirname, "./src"),
    // },
    setupFiles: [],
  },
});
