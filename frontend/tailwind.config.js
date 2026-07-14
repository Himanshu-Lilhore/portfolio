/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050912",
          900: "#0a0f1e",
          800: "#111a30",
          700: "#1a2540",
        },
        surface: "rgba(255,255,255,0.04)",
        brand: {
          DEFAULT: "#38e0d4", // aqua — nods to the original ocean/cyan
          400: "#5eeae0",
          500: "#38e0d4",
          600: "#14b8ae",
        },
        coral: {
          DEFAULT: "#ff8a5b", // warm accent — nods to the original orange
          400: "#ffa477",
          500: "#ff8a5b",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(56,224,212,0.45)",
        card: "0 20px 50px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        /* Waves are tiled as THREE copies (w-300%); shifting by one copy
           (-33.333%) loops seamlessly and leaves two spare copies of margin so
           pointer/scroll shifts never expose an edge. */
        "wave-drift": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.3333%)" },
        },
        "wave-drift-rev": {
          from: { transform: "translateX(-33.3333%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        // Slow, subtle automatic drift — pointer movement is the primary motion.
        "wave-1": "wave-drift 60s linear infinite",
        "wave-2": "wave-drift-rev 48s linear infinite",
        "wave-3": "wave-drift 40s linear infinite",
        "wave-4": "wave-drift-rev 32s linear infinite",
        "wave-5": "wave-drift 26s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "gradient-pan": "gradient-pan 6s ease infinite",
      },
    },
  },
  plugins: [],
};
