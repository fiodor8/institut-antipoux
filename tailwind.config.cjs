/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				//'sans': ['General Sans','ui-sans-serif', 'system-ui'],
				alkaline: ['Alkaline', 'sans-serif'],
				thunder: ['Thunder', 'sans-serif'],
			  },
			colors: {
				brand: {"100": "#fce205"}
			  },
		},
	},
	plugins: []
}
