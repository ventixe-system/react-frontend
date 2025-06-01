/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F26CF9',
          90: '#F589FA',
          50: '#FCD3FE',
          40: '#FCE2FE',
          30: '#FDEDFE',
        },
        secondary: {
          110: '#1C2346',
          100: '#37437D',
          90: '#5562A2',
          70: '#707DBF',
          60: '#ABB4DD',
          50: '#D3DAF9',
        },
        yellow: {
          100: '#FFCA39',
          90: '#FFFEC3',
        },
        grey: {
          10: '#FFFFFF',
          20: '#F7F7F7',
          30: '#EDEDED',
          40: '#E0E0E1',
          50: '#C3C3C4',
          60: '#9F9FA1',
          70: '#777779',
          80: '#636365',
          90: '#434345',
          100: '#1E1E20',
        },
        coolgrey: {
          10: '#EEEEFF',
          20: '#E4E5F5',
          30: '#DDDEED',
          40: '#D1D2E0',
          50: '#B0B1BD',
          60: '#8F8F99',
          70: '#72737A',
          80: '#56565C',
          90: '#39393D',
          100: '#131314',
        }
      }
    },
  },
  plugins: [],
}


