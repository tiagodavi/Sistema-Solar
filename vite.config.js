import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://imvitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [react()],
});
