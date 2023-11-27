import { containerStyle } from './Container.styles';
import type { ContainerProps } from './Container.types';

function Container({ align, bgColor, children, overflow }: ContainerProps) {
  return (
    <div className={containerStyle({ align: align, bgColor: bgColor, overflow: overflow })}>
      {children}
    </div>
  );
}

export default Container;
