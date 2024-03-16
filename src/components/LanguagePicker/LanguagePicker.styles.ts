// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const languagePickerStyle = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: {
		base: 'center',
		md: 'space-between',
	},
	gap: '1.25rem',
	position: {
		base: 'absolute',
		md: 'relative',
	},
	right: 0,
	flexDirection: {
		base: 'column',
		md: 'row',
	},
});

export const languagePickerFlag = css({
	display: 'flex',
	height: {
		base: '2rem',
		md: '2rem',
	},
	filter: 'grayscale(100%)',
	transition: 'all 0.3s ease-in-out',

	_hover: {
		filter: 'grayscale(0)',
		transform: 'scale(1.15)',
	},
});
