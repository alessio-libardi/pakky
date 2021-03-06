import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  //base: process.env.ENV === "development" ? "/" : "/pakky/",
  server: {
    open: true,
  },
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        faq: resolve(__dirname, "src/faq/index.html"),
        shop: resolve(__dirname, "src/shop/index.html"),
        404: resolve(__dirname, "src/404.html"),
      },
    },
  },
});
