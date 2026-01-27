import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*",
  ],
  theme: {
    extend: {
      colors: {
        kupuri: {
          primary: "#6366F1",
          secondary: "#8B5CF6",
          accent: "#EC4899",
          success: "#10B981",
          "text-primary": "#1E293B",
          "text-secondary": "#2D3436",
          "text-muted": "#94A3B8",
          "bg-light": "#F8FAFC",
          "bg-dark": "#0F172A",
          "glass-white": "rgba(255, 255, 255, 0.1)",
          "glass-dark": "rgba(0, 0, 0, 0.05)",
        },
      },
      fontFamily: {
        heading: ["Outfit", "Montserrat", "sans-serif"],
        body: ["Inter", "Open Sans", "sans-serif"],
        display: ["Playfair Display", "Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
