import { motion } from 'framer-motion';
import type { LinkProps } from './Link.types';

export default function Link({
  children,
  url = '',
  className,
  target,
  delay,
  hasAnimation,
  ...rest
}: LinkProps) {
  const classes = `text--1 not-[disabled]:hover:text-red-500 not-[disabled]:hover:cursor-pointer not-[disabled]:hover:after:scale-y-[2] disabled:text-disabled relative inline-block border-0 pb-[0.62rem] leading-[1.62] font-bold tracking-[0.14288rem] text-white uppercase transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:bg-red-500 after:transition-all after:duration-300 after:content-[''] disabled:cursor-not-allowed ${className}`;

  return (
    <>
      {hasAnimation ? (
        <motion.a
          className={classes}
          {...rest}
          href={url}
          rel="noopener noreferrer"
          target={target}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', delay: delay }}
        >
          {children}
        </motion.a>
      ) : (
        <a
          className={classes}
          {...rest}
          href={url}
          rel="noopener noreferrer"
          target={target}
        >
          {children}
        </a>
      )}
    </>
  );
}
