// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';
// @ts-expect-error: panda-css missing declaration types
import type { SystemStyleObject } from '../../styled-system/types';

export const contactFormStyle = css({
	bg: 'black.700',
	display: 'grid',
	gap: '2rem',
	paddingBlockEnd: '5.44rem',

	'& label': {
		display: 'none',
	},
});

export const inputStyle: SystemStyleObject = css({
	bg: 'transparent',
	borderBottomColor: 'white',
	borderBottomWidth: '0.0625rem',
	borderBottomStyle: 'solid',
	color: 'white',
	fontSize: '-1',
	gridArea: 'input',
	p: '1rem 1.5rem',
	textTransform: 'uppercase',
	transition: 'all 0.3s ease-in-out',
	width: '100%',

	_focus: {
		bg: 'black.600',
		borderColor: 'red.300',
		outlineOffset: '2px',
	},

	_placeholder: {
		letterSpacing: '-0.01388rem',
		opacity: 0.5,
	},
});

export const contactFieldsetStyle = css({
	display: 'grid',
	gridTemplateAreas: `
		"input"
		"errors"
	`,
	alignItems: 'center',
	gap: '0.5rem',
	position: 'relative',
	zIndex: '0',
});

export const contactFieldsetTextareaStyle = css({
	display: 'grid',
	gridTemplateAreas: `
		"input"
		"errors"
	`,
	alignItems: 'flex-start',
	gap: '0.5rem',
	position: 'relative',
	zIndex: '0',
});

export const errorMessage = css({
	color: 'red.400',
	fontSize: '-2',
	gridArea: 'errors',
	justifySelf: 'flex-end',
});

export const errorIcon = css({
	color: 'red.400',
	gridArea: 'input',
	justifySelf: 'flex-end',
});

export const errorMessageIcon = css({
	color: 'red.400',
	gridArea: 'input',
	justifySelf: 'flex-end',
	py: '1rem',
});

export const patternRingsStyle = css({
	position: 'absolute',
	display: {
		base: 'block',
		md: 'none',
		lg: 'block',
	},
	maxWidth: 'unset',
	left: {
		base: '-100%',
		lg: '-225%',
	},
	bottom: {
		base: '-50%',
	},
	zIndex: '-1',
});

export const contactRootStyle = css({
	bg: 'black.700',
	paddingBlockStart: '3.75rem',
	px: {
		md: '8rem',
	},
});

export const contactGridStyle = css({
	display: 'grid',
	gap: {
		lg: '13.75rem',
	},
	gridTemplateColumns: {
		base: '1fr',
		lg: 'repeat(2, 1fr)',
	},
});
