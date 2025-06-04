/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neon: ['Orbitron', 'sans-serif'],
        base: ['Inter', 'sans-serif'],
      },
      colors: {
        neon: {
          rage: '#00FFFF',       // calming cyan
          calm: '#00FFAB',       // soft green
          sad: '#FFD6FF',        // light pink/purple
          confident: '#7DF9FF',  // electric sky blue
          focus: '#B983FF',      // focus lavender
        },
        background: {
          DEFAULT: '#0A0A0A',
        },
      },
      boxShadow: {
        neon: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
      },
    },
  },
  plugins: [],
}
