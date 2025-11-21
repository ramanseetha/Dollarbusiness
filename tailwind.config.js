/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 Important
  ],
 theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // move half the total width
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },

  plugins: [],
};
