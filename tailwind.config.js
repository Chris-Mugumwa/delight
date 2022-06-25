/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					light: '#8ECAE6',
					normal: '#219EBC',
					dark: '#023047',
				},
				yellow: {
					dark: '#FFB703',
				},
				orange: {
					dark: '#FB8500',
				},
				gray: {
					dark: '#484545',
					light: '#EEEEEE',
				},
			},
			fontFamily: {
				catamaran: ['Catamaran', 'sans-serif'],
				'merriweather-sans': ['Merriweather Sans', 'serif'],
			},
		},
	},
	plugins: [],
}
