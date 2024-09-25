/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary-red': '#E51E37',
				'primary-blue': '#2C2D43',
				'secondary-blue': '#8F99AF',
			},
		},
	},
	plugins: [],
}
