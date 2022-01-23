module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'lincoln-green': '#17631B',
      rust: '#B63910',
      'indigo-dye': '#1E3B69',
      champaign: '#E9DDC3',
      tumbleweed: '#E7A888',
      'mountbatten-pink': '#98717B',
      white: '#ffffff'
    },
    fontFamily: {
      sans: ['Hind', 'sans-serif'],
      serif: ['Rufina', 'serif']
    },
    extend: {
      height: {
        min: 'min-content'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
