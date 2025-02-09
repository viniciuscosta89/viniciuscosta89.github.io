import { motion } from 'framer-motion';
import type { ProjectItemProps } from './Project.types';

function ProjectItem({ children, delay }: ProjectItemProps) {
  return (
    <motion.article
      className="project-item group relative grid content-start"
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
