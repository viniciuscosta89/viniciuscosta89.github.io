import { dividerStyle } from './Divider.styles';
import { motion } from 'framer-motion';
import type { DividerProps } from './Divider.types';

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
