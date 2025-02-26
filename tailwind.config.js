/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        bg_logo: '#F59F62'
      },
      colors: {
        logo: '#F59F62',
        link: '#0055AA'
      }
    }
  },
  plugins: []
}
