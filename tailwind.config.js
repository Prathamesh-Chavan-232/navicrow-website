/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440pxs",
		},
		extend: {
			colors: {
				"light-gray": "#f1efec",
				"olive-green": "#293a2c",
			},
			fontFamily: {
				"font-fancy": "",
			},
		},
	},
	plugins: [],
};
