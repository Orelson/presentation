/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        camept: {
          blue: '#0B63A3',
          'blue-light': '#1476B8',
          dark: '#083F63',
          darker: '#0B2F4A',
          orange: '#EF5B00',
          'orange-light': '#F26A00',
          yellow: '#F7C400',
          'yellow-light': '#FFCF24',
          green: '#159B37',
          'green-light': '#21A63A',
          cyan: '#00A7C8',
          'cyan-light': '#20B8CF',
          bg: '#F6F8FA',
          'bg-alt': '#F7F3EA',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(8, 63, 99, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px rgba(8, 63, 99, 0.12)',
      }
    },
  },
  plugins: [],
}
