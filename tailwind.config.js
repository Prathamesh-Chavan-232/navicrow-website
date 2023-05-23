/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1600px",
		},
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
				"carousel-1": "url('/assets/landscapes/mountains.jpg')",
				"carousel-2": "url('/assets/landscapes/mountains2.jpg')",
				africa: "url('/assets/landscapes/africa.jpg')",
			},
			fontFamily: {
				fancy: ["Playfair Display", "serif"],
			},
		},
	},
	plugins: [],
};
