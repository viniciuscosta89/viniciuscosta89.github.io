import type { ButtonProps } from './Button.types';

function Button({
  children,
  handleClick,
  className,
  type,
  disabled,
  ...rest
}: ButtonProps) {
  const rootClassName = `text-white border-none inline-block text--1 font-bold leading-[1.62] tracking-[0.14288rem] pb-[0.62rem] relative uppercase transition-all duration-300 not-[disabled]:hover:text-red-500 not-[disabled]:hover:cursor-pointer after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:bg-red-500 after:transition-all after:duration-300 after:content-[''] disabled:cursor-not-allowed ${className}`;

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
