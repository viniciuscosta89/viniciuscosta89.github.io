import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLProps, ReactNode } from 'react';
// @ts-ignore
import { css, cx } from '/styled-system/css';

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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isButton?: boolean;
  children: ReactNode | string;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

export default function Button({
  isButton,
  children,
  handleClick,
  className,
  type,
  disabled,
  ...rest
}: ButtonProps) {
  const rootClassName = cx(buttonStyle, className);

  return (
    <button
      className={rootClassName}
      {...rest}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
