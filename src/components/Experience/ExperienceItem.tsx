import { motion } from 'motion/react';
import type { ExperienceItemProps } from './Experience.types';

function ExperienceItem({ children, delay }: ExperienceItemProps) {
	return (
		<motion.article
			className="grid place-items-start content-between gap-1 md:gap-4"
			initial={{ opacity: 0, y: -32 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', delay: delay }}
			viewport={{ once: true }}
		>
			{children}
		</motion.article>
	);
}

export default ExperienceItem;
