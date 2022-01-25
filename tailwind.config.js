module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    `./node_modules/gatsby-theme-terminal/src/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        mirage: '#20222E',
        pacificBlue: '#00ACC1',
        cinnabar: '#E53935',
        fruitSalad: '#43A047',
        gorse: '#FDD835',
      },
      fontFamily: {
        sans: ['Fira Code'],
      },
    },
  },
  plugins: [],
}
