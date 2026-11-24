/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Autobuy Blue colors
        "autobuy-blue-6": "#edf4ff",
        "autobuy-blue-5": "#cce0ff",
        "autobuy-blue-4": "#99c2ff",
        "autobuy-blue-3": "#66a3ff",
        "autobuy-blue-2": "#3385ff",
        "autobuy-blue-1": "#0066cc",
        "autobuy-primary2.5": "#0A6DFF",

        // Autobuy Orange colors
        "autobuy-orange-5": "#fce0d1",
        "autobuy-orange-4": "#f9c4a1",
        "autobuy-orange-3": "#f5a07b",
        "autobuy-orange-2": "#f17f5a",
        "autobuy-orange-1": "#e6583d",

        // Autobuy accent colors
        "autobuy-accent": "#f5f5f5",

        // Autobuy neutral colors
        "autobuy-neutral-6": "#EBEBEB",
        "autobuy-neutral-5": "#e4e4e4",
        "autobuy-neutral-4": "#c9c9c9",
        "autobuy-neutral-3": "#808080",
        "autobuy-neutral-2": "#4d4c4c",
        "autobuy-neutral-1": "#1a1a1a",

        // Autobuy Yellow colors
        "autobuy-yellow-3": "#f8f4cf",
        "autobuy-yellow-2": "#f2e572",
        "autobuy-yellow-1": "#efd80f",

        // Autobuy Red colors
        "autobuy-red-3": "#f8c6c6",
        "autobuy-red-2": "#fb7878",
        "autobuy-red-1": "#f12323",

        // Autobuy Green colors
        "autobuy-green-4": "#E5FBE4",
        "autobuy-green-3": "#c3f6c2",
        "autobuy-green-2": "#80d67f",
        "autobuy-green-1": "#34b233",

        // Design system colors (CSS variables)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
