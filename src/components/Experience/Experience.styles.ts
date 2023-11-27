// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const experienceGridStyle = css({
  display: 'grid',
  gap: {
    base: '1.5rem',
    md: '3.25rem',
    lg: '3.62rem',
  },
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
  py: {
    base: '2.5rem',
    md: '3.25rem 2.25rem',
  },
});

export const experienceItemStyle = css({
  display: 'grid',
  gap: {
    md: '1rem',
  },
  placeItems: {
    base: 'center',
    md: 'flex-start',
  },
});

export const experienceNameStyle = css({
  color: 'white',
  fontSize: {
    base: '5',
    lg: '',
  },
  fontWeight: 'bold',
  letterSpacing: {
    base: '-0.0625rem',
    lg: '-0.09375rem',
  },
  lineHeight: {
    base: '1.25',
    lg: '1.16',
  },
});

export const experienceRootStyle = css({
  position: 'relative',
});

export const experienceTextStyle = css({
  color: 'black.100',
  fontSize: {
    base: '-1',
    lg: '0',
  },
  fontWeight: 'regular',
  lineHeight: {
    base: '1.62',
    lg: '1.55',
  },
});
