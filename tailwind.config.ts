import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "deep-black": "#050505",
        "haki-green": "#00ff88",
        "haki-green-dark": "#00cc66",
        "luffy-red": "#e63946",
        "luffy-red-dark": "#c1121f",
        "zoro-green": "#2dc653",
        "nami-orange": "#f4a261",
        "robin-purple": "#6a0572",
        "gold": "#ffd700",
        "gold-dark": "#b8860b",
        "glass-white": "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        "noto-jp": ["var(--font-noto)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-cinzel)", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "haki-pulse": "hakiPulse 1.5s ease-in-out infinite",
        "sakura-fall": "sakuraFall 8s linear infinite",
        "text-shimmer": "textShimmer 3s linear infinite",
        "sword-draw": "swordDraw 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "counter-spin": "counterSpin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,255,136,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(0,255,136,0.8), 0 0 100px rgba(0,255,136,0.4)" },
        },
        hakiPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        sakuraFall: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        swordDraw: {
          "0%": { transform: "scaleX(0) translateX(-100%)", opacity: "0" },
          "100%": { transform: "scaleX(1) translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        counterSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "haki-gradient": "linear-gradient(135deg, #00ff88 0%, #00cc66 50%, #009944 100%)",
        "luffy-gradient": "linear-gradient(135deg, #e63946 0%, #c1121f 50%, #780000 100%)",
        "ocean-gradient": "linear-gradient(180deg, #000000 0%, #0a1628 50%, #051020 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
        "gold-gradient": "linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ffd700 100%)",
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
