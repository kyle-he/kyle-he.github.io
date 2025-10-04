/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Source Code Pro"', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}

