// @ts-expect-error: panda-css declaration types
import { css } from '/styled-system/css';

export const buttonStyle = css({
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
