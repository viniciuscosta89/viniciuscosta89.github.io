import type { ReactNode } from 'react';

export interface LinkProps {
	className?: never;
	children: ReactNode | string;
	url?: string;
	target?: '_blank' | '_self';
	delay?: number;
	handleClick?: () => void;
}
