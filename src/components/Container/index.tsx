import type { ContainerProps } from './Container.types';

function Container({ align, bgColor, children, overflow }: ContainerProps) {
  return (
    <div
      className={`relative mx-auto w-[min(69.375rem,100%-2rem)] max-w-[69.375rem] overflow-visible py-0 md:w-[min(69.375rem,100%-4rem)] ${align === 'mobileCenter' ? 'text-center md:text-left' : ''} ${bgColor === 'gray' ? 'bg-neutral-700' : ''} ${bgColor === 'black' ? 'bg-neutral-900' : ''} ${overflow === 'x' ? 'overflow-x-hidden' : ''} ${overflow === 'y' ? 'overflow-y-hidden' : ''}`}
    >
      {children}
    </div>
  );
}

export default Container;
