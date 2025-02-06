import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ContactTextProps {
  children: ReactNode;
}

function ContactText({ children }: ContactTextProps) {
  return (
    <motion.p
      className="text--1 md:text-0 mb-[3.12rem] text-center leading-[1.62] text-neutral-100 lg:text-left"
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring' }}
    >
      {children}
    </motion.p>
  );
}

export default ContactText;
