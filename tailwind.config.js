/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#FF6F61",
        primary: "#FF7F50",
        primaryDark: "#D55745",
        primary15: "rgba(255, 111, 97, 0.15)", // Light version of primary
        textPrimary: "#FFFFFF",
        textSecondary: "#B0B0B0",
        textSecondary99: "#CCCCCC", // Additional gray shade for text
        background: "#0D1117",
        cardBackground: "#060014",
        darkCardBackground: "#1A202C",
        borderGray: "#D1D5DB",
        darkBorderGray: "#4A5568",
        lightGray: "#E5E7EB", // New: Light background for elements
        timelinePurple: "#854CE6",
      },
      fontFamily: {
        jersey: ["Jersey", "sans-serif"],
      },
      screens: {
        vs: "760px",
        v9: "960px",
      },
    },
  },
  plugins: [],
};
