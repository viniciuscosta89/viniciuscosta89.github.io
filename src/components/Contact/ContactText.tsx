import type { ReactNode } from 'react';
// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

interface ContactTextProps {
  children: ReactNode;
}

const contactTextStyle = css({
  color: 'black.100',
  fontSize: {
    base: '-1',
    md: '0',
  },
  lineHeight: '1.62',
  marginBlockEnd: '3.12rem',
  textAlign: {
    base: 'center',
    lg: 'left',
  },
});

function ContactText({ children }: ContactTextProps) {
  return (
    <motion.p
      className={contactTextStyle}
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring' }}
    >
      {children}
    </motion.p>
  );
}

export default ContactText;
