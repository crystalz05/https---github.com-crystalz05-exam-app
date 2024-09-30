module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },

      fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['Russo One', 'sans-serif'],
        third: ['Orbitron', 'sans-serif']
      },
      
      backgroundImage: {
        site: "url('./assets/site.jpg')",
        page: "url('./assets/page.jpg')",
        page1: "url('./assets/page1.svg')",
      },
    },
  },
  plugins: [],
};