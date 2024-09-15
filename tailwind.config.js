/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      colors:{
        primary: "#000814",
        secondary: "#ffc300",
        primaryAccent:{
          light: "#001d3d",
          medium: "#003566",
        },
        secondaryAccent:{
          light: "#ffd60a",
          medium: ""
        },
        scrollbarTrack: '#f0f0f0',
        scrollbarThumb: '#888',
        scrollbarThumbHover: '#555',
      },

      fontFamily:{
        merriweather: ['Merriweather', 'sans-serif']
      },
    },
  },
  plugins: [],
}

