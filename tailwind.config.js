/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FA8B02",
        dune: "#333333",
        lightGray: "#D9D9D9",
      },
      backgroundImage: {
        bgImg1: `url(./assets/julia-solonina.png)`,
        bgImg2: `url(./assets/about-img.png)`,
      },
      fontFamily: {
        GreatVibes: `"Great Vibes", cursive`,
        roboto: `"Roboto", sans-serif`,
      },
    },
  },
  plugins: [],
};
