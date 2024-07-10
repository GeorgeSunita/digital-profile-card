/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "400px",
        md: "400px",
        lg: "400px",
        xl: "400px",
        "2xl": "400px",
      },
    },

    extend: {},
  },
  plugins: [],
};
