// @ts-ignore
import { css } from '/styled-system/css';
import { motion } from 'framer-motion';

const heroTitleStyles = css({
  fontSize: {
    base: '4',
    md: '8',
    lg: 'xl',
  },
  fontWeight: 'bold',
  letterSpacing: {
    base: '-0.075rem',
    md: '-0.12781rem',
    lg: '-2.5px',
  },
  lineHeight: 1,
  marginBlockEnd: {
    base: '1.25rem',
    md: '3.75rem',
    lg: '2.7rem',
  },
  maxWidth: {
    md: '70%',
  },
  position: 'relative',
  textWrap: {
    base: 'auto',
    md: 'balance',
  },

  '& h1': {
    display: 'inline-block',
    position: 'relative',

    _after: {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'red.300',
      width: '100%',
      height: {
        base: '0.25rem',
        md: '0.375rem',
      },
      transition: 'all 0.3s ease-in-out',
    },

    _hover: {
      _after: {
        transform: 'scaleY(2)',
      },
    },
  },
});

interface HeroTitleProps {
  name: string;
}

function HeroTitle({ name }: HeroTitleProps) {
  return (
    <motion.div
      className={heroTitleStyles}
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
    >
      <div>
        <span>Nice to</span>{' '}
        <span className={css({ whiteSpace: { base: 'wrap', md: 'nowrap' } })}>meet you! I'm</span>{' '}
        <h1>{name}</h1>.
      </div>
    </motion.div>
  );
}

export default HeroTitle;
