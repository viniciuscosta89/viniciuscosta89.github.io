import { motion } from 'framer-motion';
import { heroTextStyle } from './Hero.styles';
import type { HeroTextProps } from './Hero.types';

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
