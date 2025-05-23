import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: "var(--font-heading)",
				body: "var(--font-body)",
			},
			colors: {
				alabaster: "#EBEBE3",
				licorice: "#150B0A",
				"apple-green": "#B0B436",
				"black-bean": "#340000",
				"rose-red": "#B91C4F",
			},
			screens: {
				md: "768px",
				lg: "1280px",
			},
			borderRadius: {
				sm: "0.25rem",
				md: "1rem",
				lg: "1.25rem",
			},
			padding: {
				sm: "1rem",
				md: "3rem",
				lg: "4rem",
			},
		},
	},
	plugins: [],
} satisfies Config;
