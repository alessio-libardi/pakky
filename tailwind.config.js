module.exports = {
  darkMode: "media",
  purge: ["./src/**/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      white: "white",
      primary: {
        light: "#059669",
        dark: "#34D399",
      },
      gray: {
        light: "#fafafa",
        dark: "#111111",
      },
    },
    extend: {
      animation: {
        "hero-background": "fade-in 1s ease-in 250ms forwards",
        "hero-title": "fade-in 250ms ease-in 1s forwards",
        "hero-subtitle": "fade-in 250ms ease-in 2s forwards",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        "bottom-left-fade-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
  },
};
