import { motion } from 'framer-motion';
import { sectionTitleStyle } from './SectionTitle.styles';
import type { SectionTitleProps } from './SectionTitle.types';

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
