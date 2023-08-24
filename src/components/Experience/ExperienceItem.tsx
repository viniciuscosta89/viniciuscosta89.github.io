import type { ReactNode } from 'react';
// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

const experienceItemStyle = css({
  display: 'grid',
  gap: {
    md: '1rem',
  },
  placeItems: {
    base: 'center',
    md: 'flex-start',
  },
});

interface ExperienceItemProps {
  children: ReactNode;
  delay?: number;
}

function ExperienceItem({ children, delay }: ExperienceItemProps) {
  return (
    <motion.article
      className={experienceItemStyle}
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
