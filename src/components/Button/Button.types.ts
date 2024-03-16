import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	isButton?: boolean;
	children: ReactNode | string;
	disabled?: boolean;
	type: 'button' | 'submit' | 'reset';
	handleClick?: () => void;
}
