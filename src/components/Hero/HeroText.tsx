import type { HeroTextProps } from './Hero.types';

function HeroText({ children }: HeroTextProps) {
  return (
    <p className="text--1 md:text-paragraph mb-6 max-w-[initial] text-center leading-[1.55] text-gray-100 md:mb-[2.13rem] md:max-w-[50%] md:text-left lg:mb-[4.12rem]">
      {children}
    </p>
  );
}

export default HeroText;
