import { motion } from 'framer-motion';
import type { ProjectItemProps } from './Project.types';
import { projectItemStyle } from './Projects.styles';

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
