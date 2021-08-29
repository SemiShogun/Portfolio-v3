module.exports = {
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2C2F33",
        "really-dark-gray": "#23272A",
      },
    },
  },
  variants: {},
  plugins: [],
};
