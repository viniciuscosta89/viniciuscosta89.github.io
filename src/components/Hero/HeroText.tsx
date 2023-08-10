import type { ReactNode } from 'react';
// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

const heroTextStyle = css({
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

interface HeroTextProps {
	children: ReactNode;
}

function HeroText({ children }: HeroTextProps) {
	return (
		<motion.p
			className={heroTextStyle}
			initial={{ opacity: 0, x: -32 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', delay: 1 }}
		>
			{children}
		</motion.p>
	);
}

export default HeroText;
