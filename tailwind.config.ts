import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f203b",
        yellow: "#f8be13",
        sand: "#f7f6f2",
        graphite: "#1c2431",
        slate: "#394251",
        ember: "#c0562d"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(15, 32, 59, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
