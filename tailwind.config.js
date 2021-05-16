module.exports = {
  important: true,
  darkMode: "media",
  purge: ["./src/**/*.html"],
  theme: {
    extend: {
      maxWidth: { prose: "65ch" },
      colors: {
        primary: {
          50: "#f3fbf9",
          100: "#e6f7f3",
          200: "#ccefe6",
          300: "#b3e7d9",
          400: "#a6e3d3",
          500: "#99decc",
          600: "#86c3b3",
          700: "#73a799",
          800: "#608b80",
          900: "#4d6f66",
        },
        gray: {
          300: "#fafafa",
          800: "#111111",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              "ol > li::before": {
                color: theme("colors.gray.600"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
            },
          ],
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.300"),
              '[class~="lead"]': {
                color: theme("colors.gray.200"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.400"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
