/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7F50",//+
        primaryDark: "#D55745",//+
        primary15: "rgba(255, 111, 97, 0.15)",
        textPrimary: "#FFFFFF",//+
        textSecondary: "#B0B0B0",//+
        // textSecondary99: "#CCCCCC",
        background: "#0D1117",//+
        cardBackground: "#060014",//+
        darkCardBackground: "#1A202C",//+
        borderGray: "#D1D5DB",//+
        darkBorderGray: "#4A5568",//+
        lightGray: "#E5E7EB",
        gradientFrom: "#0D1117",//+
        gradientTo: "#1C2233",//+
        //light colors
        lightprimary: "#FFA070",
        lightprimaryDark: "#D97A50",
        lightprimary15: "rgba(255, 160, 112, 0.15)",
        lighttextPrimary: "#2D3748",//+
        lighttextSecondary: "#4A5568",//+
        // lighttextSecondary99: "#718096",
        lightbackground: "#FFF8F0",//+
        lightcardBackground: "#FFEEDD",//+
        lightdarkCardBackground: "#FFD9C2",//+
        lightborderGray: "#E2CFCB",//+
        lightdarkBorderGray: "#B8A1A1",
        lightlightGray: "#FFF3E6",
        lightgradientFrom: "#FFF8F0",//+
        lightgradientTo: "#FFEEDD",//+
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
