module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        'black-medium': '#212121d9',
        white: '#FAF9F6',
      },
      borderRadius: {
        theme: '8px',
      },
      maxWidth: {
        theme: '1640px',
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
        header: ['Corben', 'cursive'],
      },
      transitionProperty: {
        theme: 'all 1s ease',
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  //   presets: [require('./utils/tailwind-preset')],
};
