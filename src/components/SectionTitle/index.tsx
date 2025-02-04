import { motion } from 'framer-motion';
import type { SectionTitleProps } from './SectionTitle.types';

function SectionTitle({ text, hasMarginBottom, align }: SectionTitleProps) {
  return (
    <motion.h2
      className={`text-4 md:text-8 lg:text-9 leading-none font-bold tracking-[-0.071rem] md:tracking-[-0.12781rem] lg:tracking-[-0.15625rem] ${hasMarginBottom ? 'mb-5' : ''} ${align === 'center' ? 'text-center lg:text-left' : ''}`}
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
