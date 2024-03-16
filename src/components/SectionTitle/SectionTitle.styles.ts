// @ts-expect-error: panda-css missing declaration types
import { cva } from '/styled-system/css';

export const sectionTitleStyle = cva({
	base: {
		fontSize: {
			base: '4',
			md: '8',
			lg: '9',
		},
		fontWeight: 'bold',
		letterSpacing: {
			base: '-0.071rem',
			md: '-0.12781rem',
			lg: '-0.15625rem',
		},
		lineHeight: 1,
	},

	variants: {
		hasMarginBottom: {
			true: {
				marginBottom: '1.25rem',
			},
		},
		align: {
			center: {
				textAlign: {
					base: 'center',
					lg: 'left',
				},
			},
		},
	},
});
