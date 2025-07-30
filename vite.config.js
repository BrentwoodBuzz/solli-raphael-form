import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"), // enables ~ to point to /src
    },
  },
  server: {
    proxy: {
      // Proxy frontend requests to backend UploadThing endpoint
      "/api/uploadthing": "http://localhost:4000",
    },
  },
});
