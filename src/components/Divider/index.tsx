import { motion } from 'framer-motion';
import type { DividerProps } from './Divider.types';

function Divider({ delay, className }: DividerProps) {
  return (
    <motion.hr
      className={`h-[0.0625rem] w-full bg-white text-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
    />
  );
}

export default Divider;
