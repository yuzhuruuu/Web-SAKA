/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1769aa',
        'primary-dark': '#0b3b5a',
        accent: '#ffcc00',
      },
    },
  },
  plugins: [],
}
