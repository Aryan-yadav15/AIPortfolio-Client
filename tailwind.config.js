/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '390px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xlg': '1440px',
      // => @media (min-width: 1280px) { ... }
      '2xlg': '1800px',
    },
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(114deg, rgba(216, 213, 209, .6), #f1f0ee 44%, rgba(216, 213, 209, .6))',
      },
      colors: {
        transparent: 'transparent',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        customDarkGray: '#161616', // Replace with your exact RGB values
      },
      flex: {
        '1': '1 1 0%',
        '2': '2 2 0%', // Adding flex-2
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))", // Ensure transform syntax is valid
          },
        },
      },
    },
  },
  plugins: [ [addVariablesForColors],
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      })
    }
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}