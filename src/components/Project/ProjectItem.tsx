import type { ReactNode } from 'react';
// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

interface ProjectItemProps {
	children: ReactNode;
	delay?: number;
}

const projectItemStyle = css({
	display: 'grid',
	alignContent: 'flex-start',
	position: 'relative',
	gridTemplateAreas: {
		lg: `'img'
				'name'
				'stack'
		`,
	},

	_hover: {
		lg: {
			'& .project__actions': {
				opacity: 1,
				visibility: 'visible',
			},
		},
	},
});

function ProjectItem({ children, delay }: ProjectItemProps) {
	return (
		<motion.article
			className={projectItemStyle}
			initial={{ opacity: 0, y: -32 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', delay: delay }}
			viewport={{ once: true }}
		>
			{children}
		</motion.article>
	);
}

export default ProjectItem;
