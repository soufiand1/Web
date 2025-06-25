/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#121212',
          secondary: '#1e1e1e',
        },
        neon: {
          primary: '#00f2ff',
          accent: '#fb00ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        arabic: ['Amiri', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 242, 255, 0.3), 0 0 20px rgba(251, 0, 255, 0.1)',
      },
      textShadow: {
        'neon': '0 0 5px rgba(0, 242, 255, 0.5), 0 0 10px rgba(0, 242, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
