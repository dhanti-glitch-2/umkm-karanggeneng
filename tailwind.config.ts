import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet "Kayu Jati & Sawah" — identitas visual Desa Karanggeneng
        paper: "#F6F1E4", // dasar krem serat kertas/anyaman
        ink: "#2B2118", // teks utama, coklat gelap kayu jati
        teak: {
          DEFAULT: "#6B4226",
          light: "#8A5A34",
          dark: "#4A2D18",
        },
        sawah: {
          DEFAULT: "#55703B",
          light: "#728F4F",
          dark: "#3C5029",
        },
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E0BE6E",
          dark: "#9C7526",
        },
        cream: "#FBF8F1",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "url('/images/texture-grain.svg')",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        reveal: "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
