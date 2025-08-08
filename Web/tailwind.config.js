/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Code Pro', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        'mono': ['Source Code Pro', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        'primary-cyan': '#09dfff',
        'primary-blue': '#0964ff',
        'accent-red': '#ff2909',
      },
    },
  },
  plugins: [],
}
