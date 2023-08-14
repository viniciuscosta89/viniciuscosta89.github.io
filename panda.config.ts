import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
	':root': {
		lineHeight: '1.5',
		fontWeight: 'medium',
		fontSynthesis: 'none',
		textRendering: 'optimizeLegibility',
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-text-size-adjust': '100%',
	},

	html: {
		boxSizing: 'border-box',
		scrollBehavior: 'smooth',
		height: '100%',

		'@media (prefers-reduced-motion: reduce)': {
			scrollBehavior: 'auto',

			'body *': {
				animationDuration: '0s !important',
				animationDelay: '0s !important',
			},
		},
	},

	'*, *::after, *::before': {
		boxSizing: 'inherit',
	},

	body: {
		backgroundColor: 'bg',
		color: 'text',
		fontFamily: '',
		overflowX: 'hidden',
	},

	'blockquote, body, figure, h1, h2, h3, h4, h5, h6, hr, li, ol, p, pre, ul': {
		margin: 0,
		padding: 0,
	},

	'ul:where([class])': {
		listStyle: 'none',
	},

	'button, input, select, textarea': {
		color: 'inherit',
		letterSpacing: 'inherit',
		font: 'inherit',
	},

	'input[type="text"], textarea': {
		width: '100%',
	},

	fieldset: {
		padding: 0,
		border: 'none',
	},

	legend: {
		marginBottom: '0.5rem',
		maxWidth: '100%',
	},

	'button, input, textarea': {
		border: 'none',
	},

	'button *': {
		pointerEvents: 'none',
	},

	'button:hover': {
		cursor: 'pointer',
	},

	'embed, iframe, img, object, svg, video': {
		display: 'block',
		maxWidth: '100%',
	},

	table: {
		width: '100%',
		tableLayout: 'fixed',
	},

	'[hidden]': {
		display: 'none !important',
	},

	noscript: {
		display: 'block',
		marginTop: '1em',
		marginBottom: '1em',
	},

	'[tabindex="-1"]': {
		outline: 'none !important',
		boxShadow: 'none !important',
	},
});

export default defineConfig({
	globalCss,
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

	// Files to exclude
	exclude: [],

	jsxFramework: 'react',

	// Useful for theme customization
	theme: {
		extend: {
			breakpoints: {
				md: '768px',
				lg: '1140px',
			},
		},
		tokens: {
			colors: {
				black: {
					900: { value: 'hsl(0deg 0% 0%)' },
					850: { value: 'hsl(0deg 0% 0% / 0.75)' },
					800: { value: 'hsl(0deg 0% 8%)' },
					700: { value: 'hsl(0deg 0% 14%)' },
					600: { value: 'hsl(0deg 0% 22%)' },
					500: { value: 'hsl(0deg 0% 30%)' },
					400: { value: 'hsl(0deg 0% 38%)' },
					300: { value: 'hsl(0deg 0% 46%)' },
					200: { value: 'hsl(0deg 0% 54%)' },
					100: { value: 'hsl(0deg 0% 85%)' },
				},
				red: {
					900: { value: 'hsl(0deg 100% 11.96%)' },
					700: { value: 'hsl(0deg 98.67% 29.41%)' },
					400: { value: 'hsl(0deg 100% 64%)' },
					300: { value: 'hsl(0deg, 71%, 59%)' },
				},
				white: { value: 'hsl(0deg 100% 100%)' },
			},
			spacing: {
				1: { value: '0.5rem' },
				2: { value: '1rem' },
				3: { value: '1.5rem' },
				4: { value: '2rem' },
			},
			fontSizes: {
				'-2': { value: '0.78rem' },
				'-1': { value: '1rem' },
				0: { value: '1.125rem' },
				1: { value: '1.35rem' },
				2: { value: '1.5rem' },
				3: { value: '2rem' },
				4: { value: '2.5rem' },
				5: { value: '3rem' },
				6: { value: '3.36rem' },
				7: { value: '4rem' },
				8: { value: '4.5rem' },
				9: { value: '5.5rem' },
				10: { value: '6.97rem' },
			},
			fonts: {
				DEFAULT: { value: 'Space Grotesk Variable, apple-system, sans-serif' },
			},
			fontWeights: {
				light: { value: '300' },
				regular: { value: '400' },
				medium: { value: '500' },
				bold: { value: '700' },
			},
			radii: {
				circle: { value: '50%' },
				rounded: { value: '4px' },
			},
			shadows: {},
			zIndex: {
				0: { value: 0 },
				1: { value: 10 },
				2: { value: 20 },
				3: { value: 30 },
			},
		},
		semanticTokens: {
			colors: {
				primary: { value: '{colors.red.400}' },
				bg: { value: '{colors.black.800}' },
				bgGray: { value: '{colors.black.700}' },
				text: { value: '{colors.white}' },
				disabled: { value: '{colors.black.400}' },
			},
			fontSizes: {
				paragraph: { value: '{fontSizes.0}' },
				md: { value: '{fontSizes.2}' },
				lg: { value: '{fontSizes.5}' },
				xl: { value: '{fontSizes.9}' },
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	strictTokens: true,
});
