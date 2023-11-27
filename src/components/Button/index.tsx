// @ts-expect-error: panda-css declaration types
import { cx } from '/styled-system/css';
import { buttonStyle } from './Button.styles';
import type { ButtonProps } from './Button.types';

function Button({ children, handleClick, className, type, disabled, ...rest }: ButtonProps) {
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

export default Button;
