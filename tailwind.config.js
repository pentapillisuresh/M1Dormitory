
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        ink: "#202522",
        primary: "#15803D",
        primaryDark: "#166534",
        ivory: "#F8F6F0",
        gold: "#C5A46D",
        muted: "#EFEEE8",
        body: "#292D2A",
        logoRed: "#DC2626",
        white: "#FFFFFF",
      },

      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },

      boxShadow: {
        soft: "0 12px 40px rgba(32,37,34,.08)",
      },
    },
  },

  plugins: [],
};
