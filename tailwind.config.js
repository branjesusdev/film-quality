export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: ['cine-light', 'system-ui', 'ui-sans-serif'],
        custom: ['cine-regular', 'system-ui', 'ui-sans-serif'],
        bold: ['cine-bold', 'system-ui', 'ui-sans-serif'],
        semibold: ['cine-semibold', 'system-ui', 'ui-sans-serif'],
      },
      colors: {
        black:{
          light: 'var(--black-light)'
        }
      },
      
    },
  },
  plugins: [],
}

