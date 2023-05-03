/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440pxs",
		},
		extend: {
			colors: {},
		},
	},
	plugins: [],
};
