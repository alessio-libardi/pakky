const { resolve } = require("path");

export default {
  root: "src",
  //base: "/pakky/",
  server: {
    open: true,
  },
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
};
