import { heroTextStyle } from './Hero.styles';
import type { HeroTextProps } from './Hero.types';

function HeroText({ children }: HeroTextProps) {
	return <p className={heroTextStyle}>{children}</p>;
}

export default HeroText;
