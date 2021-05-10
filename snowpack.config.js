module.exports = {
  root: "src",
  buildOptions: {
    out: "dist",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  plugins: ["@snowpack/plugin-postcss"],
};
