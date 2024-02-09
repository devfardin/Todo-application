/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primery: '#4758B8',
        heading: '#444444',
        text: ' #111827',
        link: ' #3699ff',
        sectionbg: '#F3F4F6',
        sectionbg: '#F8FAFC',
      }
    },
  },
  plugins: [],
}
