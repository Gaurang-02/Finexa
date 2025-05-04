/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        },
      },
    },
    plugins: [],
  }
  