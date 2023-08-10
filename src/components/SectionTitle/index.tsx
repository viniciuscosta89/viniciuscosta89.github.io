// @ts-ignore
import { cva } from '/styled-system/css';
import { motion } from 'framer-motion';

const sectionTitleStyle = cva({
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

interface SectionTitleProps {
	text: string;
	align?: string | 'center';
	hasMarginBottom?: boolean;
}

function SectionTitle({ text, hasMarginBottom, align }: SectionTitleProps) {
	return (
		<motion.h2
			className={sectionTitleStyle({ hasMarginBottom: hasMarginBottom, align: align })}
			initial={{ opacity: 0, x: -32 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring' }}
			viewport={{ once: true }}
		>
			{text}
		</motion.h2>
	);
}

export default SectionTitle;
