/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        aqua: {
          DEFAULT: "#20E0D6",
          light: "#35F2E8",
          dark: "#18B6FF",
        },
        navy: {
          DEFAULT: "#071018",
          card: "#0E1A22",
          light: "#12212B",
          border: "#2A4A57",
        },
      },
      boxShadow: {
        neon: "0 0 15px rgba(32,224,214,0.4), 0 0 30px rgba(32,224,214,0.2)",
        "neon-sm": "0 0 8px rgba(32,224,214,0.3)",
      },
      backgroundImage: {
        "aqua-gradient": "linear-gradient(135deg, #20E0D6 0%, #18B6FF 100%)",
      },
      borderColor: {
        "teal-dim": "#2A4A57",
        "teal-bright": "#20E0D6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
