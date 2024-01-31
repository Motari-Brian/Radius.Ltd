import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Radius.Ltd/",
  plugins: [react()],
  server: { port: 3000 },
});
