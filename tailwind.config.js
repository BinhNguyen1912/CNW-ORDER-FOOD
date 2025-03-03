/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        bg_footer: '#000000D9'
      },
      colors: {
        logo: '#F59F62',
        link: '#0055AA',
        header_color: '#E2DCCC',
        bg_footer: '#000000D9'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}
