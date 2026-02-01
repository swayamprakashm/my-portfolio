// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ✅ this is required for class-based toggling
  theme: {
    extend: {},
  },
  plugins: [],
}
