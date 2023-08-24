import type { ReactNode } from 'react';
// @ts-ignore
import { cva } from '/styled-system/css';

const containerStyle = cva({
  base: {
    position: 'relative',
    overflow: 'visible',
    maxWidth: '69.375rem',
    mx: 'auto',
    py: {
      base: '0',
      isHero: '2.5rem 6.5rem',
    },
    width: {
      base: 'min(69.375rem, 100% - 2rem)',
      md: 'min(69.375rem, 100% - 4rem)',
    },
  },
  variants: {
    align: {
      mobileCenter: {
        textAlign: {
          base: 'center',
          md: 'left',
        },
      },
    },
    bgColor: {
      gray: {
        bgColor: 'black.700',
      },
      black: {
        bgColor: 'black.900',
      },
    },
    overflow: {
      x: {
        overflowX: 'hidden',
      },
      y: {
        overflowY: 'hidden',
      },
    },
  },
});

interface ContainerProps {
  align?: string;
  bgColor?: string;
  children: ReactNode;
  overflow?: string;
}

function Container({ align, bgColor, children, overflow }: ContainerProps) {
  return (
    <div className={containerStyle({ align: align, bgColor: bgColor, overflow: overflow })}>
      {children}
    </div>
  );
}

export default Container;
