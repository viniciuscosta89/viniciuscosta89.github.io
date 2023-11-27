// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const footerStyle = css({
  bg: 'black.700',
  py: {
    base: '2.44rem 3.75rem',
    md: '2rem',
  },
});

export const footerGrid = css({
  display: 'grid',
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, auto)',
  },
  justifyContent: {
    base: 'center',
    md: 'space-between',
  },
  gap: '1.25rem',
  textAlign: {
    base: 'center',
    md: 'left',
  },
});

export const footerTitleStyle = css({
  display: 'flex',
  alignItems: 'center',
  fontSize: '3',
  letterSpacing: '-0.02081rem',

  '& span': {
    fontWeight: 'light',
  },

  '& strong': {
    fontWeight: 'bold',
  },
});

export const socialNetworksStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  position: 'relative',

  '& a': {
    display: 'block',
    transition: 'all 0.3s ease-in-out',

    _hover: {
      color: 'red.300',
      transform: 'scale(1.15)',
    },
  },
});
