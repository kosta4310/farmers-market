/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Rubik', 'sans'],
      },
      backgroundColor: {
        default: '#00A919',
        'green-basic': '#0D7211',
      },
      textColor: {
        default: '#00A919',
      },
      gridTemplateColumns: {
        dash: '25% 1fr',
        max2: 'max-content max-content',
      },
      colors: {
        text_com: '#444444',
        input: '#BDBDBD',
        secondary: '#0D7211',
        white: '#FFFFFF',
        attention: '#FF4646',
        disabled: '#888888',
        stroke_input: '#E2E2E2',
        card_background: '#F4F4F4',
        orange: '#FF7A00',
        blue: '#003171',
        purple: '#7000FF',
        but_backgraund: '#00A9191A',
      },
      boxShadow: {
        basket_info: ' 0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
