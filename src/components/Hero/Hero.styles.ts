// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const heroRootStyle = css({
	marginBlockEnd: {
		base: '5rem',
		md: '3.75rem',
		lg: '8.70rem',
	},
	position: 'relative',
});

export const heroTextStyle = css({
	color: 'black.100',
	fontSize: {
		base: '-1',
		md: 'paragraph',
	},
	lineHeight: '1.55',
	marginBlockEnd: {
		base: '1.5rem',
		md: '2.13rem',
		lg: '4.12rem',
	},
	maxWidth: {
		base: 'initial',
		md: '50%',
	},
	textAlign: {
		base: 'center',
		md: 'left',
	},
});

export const heroTitleStyles = css({
	fontSize: {
		base: '4',
		md: '8',
		lg: 'xl',
	},
	fontWeight: 'bold',
	letterSpacing: {
		base: '-0.075rem',
		md: '-0.12781rem',
		lg: '-2.5px',
	},
	lineHeight: 1,
	marginBlockEnd: {
		base: '1.25rem',
		md: '3.75rem',
		lg: '2.7rem',
	},
	maxWidth: {
		md: '70%',
	},
	position: 'relative',
	textWrap: {
		base: 'auto',
		md: 'balance',
	},

	'& h1': {
		display: 'inline-block',
		position: 'relative',

		_after: {
			content: '""',
			display: 'block',
			position: 'absolute',
			bottom: 0,
			left: 0,
			backgroundColor: 'red.300',
			width: '100%',
			height: {
				base: '0.25rem',
				md: '0.375rem',
			},
			transition: 'all 0.3s ease-in-out',
		},

		_hover: {
			_after: {
				transform: 'scaleY(2)',
			},
		},
	},
});
