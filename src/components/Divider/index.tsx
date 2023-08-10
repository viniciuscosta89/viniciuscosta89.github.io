// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

const dividerStyle = css({
	bg: 'white',
	color: 'white',
	height: '0.0625rem',
	width: '100%',
});

interface DividerProps {
	delay?: number;
}

function Divider({ delay }: DividerProps) {
	return (
		<motion.hr
			className={dividerStyle}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: delay }}
		/>
	);
}

export default Divider;
