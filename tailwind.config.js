/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: "#9C8C77",       // Luxury Sand Bronze
          indigo: "#C26B4F",     // Terracotta Accent
          emerald: "#5C6353",    // Sage Green
          black: "#1C1A17",      // Matte Charcoal/Black (buttons, titles)
          dark: "#FCFAF6",       // Warm Cream Alabaster (panel bg)
          slate: "#F4F1EA",      // Sand Beige secondary
          border: "#E5E0D8",     // Sand grey borders
          text: "#1C1A17",       // Deep Neutral black text
          muted: "#7A756E"       // Warm Grey copy
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left": "slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow": "glow 3s ease-in-out infinite alternate"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        }
      }
    },
  },
  plugins: [],
}
