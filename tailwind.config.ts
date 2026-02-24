import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#04040f",
          card: "#0a0a1e",
          elevated: "#0f0f28",
          border: "#1a1a3e",
        },
        neon: {
          green: "#00ff94",
          cyan: "#0af0ff",
          pink: "#ff0066",
          amber: "#ffaa00",
          purple: "#9d4edd",
        },
        text: {
          primary: "#e8eaf6",
          secondary: "#8892b0",
          muted: "#4a5278",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        chakra: ["var(--font-chakra)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 255, 148, 0.3), 0 0 40px rgba(0, 255, 148, 0.1)",
        "neon-cyan": "0 0 20px rgba(10, 240, 255, 0.3), 0 0 40px rgba(10, 240, 255, 0.1)",
        "neon-pink": "0 0 20px rgba(255, 0, 102, 0.4), 0 0 40px rgba(255, 0, 102, 0.15)",
        "neon-amber": "0 0 20px rgba(255, 170, 0, 0.3)",
        "card-glow": "0 4px 32px rgba(10, 240, 255, 0.08), inset 0 0 0 1px rgba(255,255,255,0.05)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "scan-line": "scanLine 8s linear infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        glowPulse: {
          "0%": { textShadow: "0 0 10px rgba(0,255,148,0.5), 0 0 20px rgba(0,255,148,0.3)" },
          "100%": { textShadow: "0 0 20px rgba(0,255,148,0.9), 0 0 40px rgba(0,255,148,0.5), 0 0 60px rgba(0,255,148,0.2)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
