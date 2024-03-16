// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const dividerStyle = css({
	bg: 'white',
	color: 'white',
	height: '0.0625rem',
	width: '100%',
});
