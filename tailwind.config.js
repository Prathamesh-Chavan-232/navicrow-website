

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f1efec",
        "olive-green": "#293a2c",
        "light-green": "#b1b886",
        "gray-green": "#d9dec5",

				// Red / Orangish
				brightRed: "hsl(12,88%,59%)",
				brightRedLight: "hsl(12,88%,69%)",
				brightRedVLight: "hsl(12,88%,95%)",
				veryPaleRed: "hsl(13, 100%, 96%)",

				// Dark Blue
				darkBlue: "hsl(228, 39%, 23%)",
				darkGrayishBlue: "hsl(227, 12%, 61%)",
				veryDarkBlue: "hsl(233, 12%, 13%)",

				// Gray
				veryLightGray: "hsl(0, 0%, 98%)",
			},
			backgroundImage: {
				africa: "url('/src/assets/landscapes/africa.jpg')",
				"carousel-1": "url('/src/assets/landscapes/mountains-7.jpg')",
				"carousel-2": "url('/src/assets/landscapes/travel-style.jpg')",
				"carousel-3": "url('/src/assets/landscapes/mountains.jpg')",	
				"card-1":"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.6)), url()"
			},
			fontFamily: {
				fancy: ["Playfair Display", "serif"],
			},
		},
	},
	plugins: [],
};
