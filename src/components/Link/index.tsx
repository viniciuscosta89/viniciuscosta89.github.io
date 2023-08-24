import type { ReactNode } from 'react';
// @ts-ignore
import { css, cx } from '/styled-system/css';
import { motion } from 'framer-motion';

const buttonStyle = css({
  color: 'white',
  border: 'none',
  display: 'inline-block',
  fontSize: '-1',
  fontWeight: 'bold',
  lineHeight: 1.62,
  letterSpacing: '0.14288rem',
  paddingBlockEnd: '0.62rem',
  position: 'relative',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease-in-out',

  '&:not(:disabled):hover': {
    color: 'red.300',
    cursor: 'pointer',

    _after: {
      transform: 'scaleY(2)',
    },
  },

  _after: {
    content: '""',
    bg: 'red.300',
    position: 'absolute',
    display: 'block',
    bottom: 0,
    left: 0,
    height: '0.125rem',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
  },

  _disabled: {
    color: 'disabled',
    cursor: 'not-allowed',

    _after: {
      bg: 'disabled',
    },
  },
});

interface LinkProps {
  className?: never;
  children: ReactNode | string;
  url?: string;
  target?: '_blank' | '_self';
  delay?: number;
  handleClick?: () => void;
}

export default function Link({
  children,
  url = '',
  handleClick,
  className,
  target,
  delay,
  ...rest
}: LinkProps) {
  const rootClassName = cx(buttonStyle, className);

  return (
    <motion.a
      className={rootClassName}
      {...rest}
      href={url}
      target={target}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', delay: delay }}
    >
      {children}
    </motion.a>
  );
}
