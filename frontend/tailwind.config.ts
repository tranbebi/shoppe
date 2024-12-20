import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				secondary: "#F5F5F5",
				border: "rgb(255 255 255 / 22%)",
			},
		},
	},
	plugins: [],
} satisfies Config;
