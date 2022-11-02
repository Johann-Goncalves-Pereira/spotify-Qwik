/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Victor Mono", "JetBrains Mono", "monospace"],
    },
    extend: {
      content: {
        blank: "''",
      },
      colors: {
        brand: {
          60: "hsl(286 100% 49%)",
          30: "hsl(311 96% 43%)",
          10: "hsl(25 100% 50%)",
        },
        surface: {
          100: "hsl(180 4% 6%)",
          200: "hsl(180 4% 10%)",
          300: "hsl(180 4% 15%)",
          400: "hsl(180 4% 32%)",
          500: "hsl(180 4% 45%)",
          600: "hsl(180 4% 64%)",
          700: "hsl(180 4% 83%)",
          800: "hsl(180 4% 94%)",
          900: "hsl(180 4% 96%)",
        },
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(210deg, theme(colors.brand.10), theme(colors.brand.30), theme(colors.brand.60))",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
