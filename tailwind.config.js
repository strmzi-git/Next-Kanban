/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentRose: "#FF649C",
        secondaryPurple: "#9B92FF",
        gray100: "#F8F8F8",
        gray300: "#EAEAEA",
        gray500: "#D4D4D4",
        gray600: "#A9A9A9",
        gray700: "#7B7B7B",
        gray800: "#525252",
        gray900: "#3C3C3C",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
