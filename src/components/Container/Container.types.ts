import type { ReactNode } from 'react';

export interface ContainerProps {
	align?: 'mobileCenter';
	bgColor?: 'gray' | 'black';
	children: ReactNode;
	overflow?: 'x' | 'y';
}
