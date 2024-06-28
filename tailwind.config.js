/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLght: "#ECFDF3",
        greenMedium: "#ABEFC6",
        Orange: "#DC4A2D",
        OrangeLight: "#FEF4F2",
        orangeBorder: "#FCB4A5",
        grayLight: "#B0B0B0",
        grayLight2: "#6E6D6D",
        grayMedium: "#888888",
        grayDark: "#5D5D5D",
        grayDark2: "#3D3D3D",
        blueDark: "#344054",
      },
    },
  },
  plugins: [],
};
