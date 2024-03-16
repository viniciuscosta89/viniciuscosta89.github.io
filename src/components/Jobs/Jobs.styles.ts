// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const jobsStyle = css({
	position: 'relative',
	py: {
		base: '5rem',
		md: '5rem 6.25rem',
		lg: '5rem 8.70rem',
	},
});

export const jobsTimeline = css({
	px: '0.5rem !important',
	overflowX: 'hidden',
	width: '100% !important',

	'&.vertical-timeline': {
		'&::before': {
			transform: {
				base: 'translateX(8px)',
				lg: 'translateX(0)',
			},
		},
	},
});

export const jobName = css({
	color: 'primary',
	fontSize: '3',
	position: 'relative',
	textTransform: 'uppercase',

	_after: {
		content: '""',
		bg: 'red.300',
		position: 'absolute',
		display: 'block',
		bottom: '-2px',
		left: 0,
		height: '0.125rem',
		width: '100%',
		transform: 'scaleX(0)',
		transformOrigin: 'right',
		transition: 'transform 0.3s ease-in-out',
	},

	_hover: {
		_after: {
			transform: 'scaleX(1)',
			transformOrigin: 'left',
		},
	},

	_focus: {
		_after: {
			transform: 'scaleX(1)',
			transformOrigin: 'left',
		},
	},
});

export const jobRole = css({
	fontSize: '1 !important',
	fontWeight: 'regular !important',
	my: '0.5rem 0.75rem !important',
	textTransform: 'uppercase',
});

export const jobActivities = css({
	display: 'flex',
	flexDirection: 'column',
	fontWeight: 'light',
	gap: '0.5rem',
	listStyle: 'disc',
	listStylePosition: 'inside',

	'& li': {
		'&::marker': {
			color: 'var(--colors-primary)',
		},
	},
});

export const jobDateStyle = css({
	fontSize: '-1 !important',
	py: '1rem 0 !important',
});

export const jobIconContainerStyle = css({
	bg: 'black.700',

	'& img': {
		display: 'block',
		width: '24px',
		height: '24px',
		position: 'relative',
		left: '50%',
		top: '50%',
		marginLeft: '-12px',
		marginTop: '-12px',
	},
});
