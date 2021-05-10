module.exports = {
  darkMode: "media",
  purge: ["./src/**/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      white: "white",
      primary: "#10B981",
      gray: {
        light: "#fafafa",
        dark: "#111111",
      },
    },
    extend: {
      animation: {
        title: "bottom-left-fade-in 250ms ease-in 250ms forwards",
        subtitle: "bottom-left-fade-in 350ms ease-in 600ms forwards",
      },
      keyframes: {
        "bottom-left-fade-in": {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, 15%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
};
