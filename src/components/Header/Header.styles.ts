// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';
// @ts-expect-error: panda-css missing declaration types
import { styled } from '/styled-system/jsx';

export const HeaderStyled = styled('header', {
	base: {
		color: 'text',
		lineHeight: 1,
		marginBlockEnd: {
			base: '2.5rem',
			md: '5.62rem',
			lg: '8rem',
		},
		overflowX: {
			base: 'hidden',
			md: 'visible',
		},
		position: 'relative',

		_before: {
			content: '""',
			bgImage: 'url(/src/assets/pattern-rings.svg)',
			display: {
				base: 'block',
				md: 'none',
				lg: 'block',
			},
			position: 'absolute',
			left: {
				base: '-100%',
				lg: '-5%',
				'2xl': '18%',
			},
			top: {
				base: '35%',
				lg: '185%',
			},
			zIndex: '-1',
			width: '530px',
			height: '129px',
		},

		_after: {
			content: '""',
			bgImage: 'url(/src/assets/pattern-circle.svg)',
			display: {
				base: 'block',
				md: 'none',
				lg: 'block',
			},
			position: 'absolute',
			right: {
				base: '-18%',
				lg: '38%',
				'2xl': '43%',
			},
			bottom: {
				base: 0,
				lg: '-850%',
			},
			zIndex: '6',
			width: '129px',
			height: '129px',
		},
	},
});

export const HeaderGrid = styled('div', {
	base: {
		display: 'flex',
		flexDirection: {
			base: 'column',
			md: 'row',
		},
		gap: '1.25rem',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInlineEnd: {
			base: 0,
			lg: '1.84rem',
		},
		paddingBlockStart: {
			base: '2.44rem',
			md: '2rem',
			lg: '2.44rem',
		},
		marginBlockEnd: {
			base: '3rem',
			md: 0,
		},
		position: 'relative',
		zIndex: '10',
	},
});

export const HeaderTitle = styled('div', {
	base: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '3',
		letterSpacing: '-0.02081rem',
		lineHeight: 1,

		'& span': {
			fontWeight: 'light',
		},

		'& strong': {
			fontWeight: 'bold',
		},
	},
});

export const HeaderSocialNetworks = styled('ul', {
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: '2rem',
		position: 'relative',

		'& a': {
			display: 'block',
			transition: 'all 0.3s ease-in-out',

			_hover: {
				color: 'red.300',
				transform: 'scale(1.15)',
			},
		},
	},
});

export const profileImage = css({
	display: 'block',
	position: {
		base: 'relative',
		md: 'absolute',
	},
	right: {
		base: 0,
		md: '-2rem',
		lg: 0,
	},
	top: 0,
	marginBlockStart: {
		base: '-1rem',
		md: '0',
	},
	mx: 'auto',
	maxWidth: {
		base: '10.88794rem',
		md: '20.125rem',
		lg: '27.8125rem',
	},
	zIndex: {
		base: '-1',
		lg: '5',
	},
});

export const ProfileImageReal = styled('div', {
	base: {
		display: {
			base: 'none',
			lg: 'block',
		},
		position: {
			base: 'relative',
			md: 'absolute',
		},
		right: {
			base: 0,
			md: '-2rem',
			lg: 0,
		},
		top: 0,
		marginBlockStart: {
			base: '-7.5rem',
			md: '0',
		},
		mx: 'auto',
		maxWidth: {
			base: '10.88794rem',
			md: '20.125rem',
			lg: '27.8125rem',
		},
		zIndex: '5',

		transformStyle: 'preserve-3d',
		transform: 'translateZ(-1px)',
		transition: 'ease all 1.5s',
	},
});
