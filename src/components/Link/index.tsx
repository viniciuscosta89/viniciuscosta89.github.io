import { motion } from 'framer-motion';
// @ts-expect-error: panda-css missing declaration types
import { cx } from '/styled-system/css';
import { buttonStyle } from './Link.styles';
import type { LinkProps } from './Link.types';

export default function Link({
	children,
	url = '',
	className,
	target,
	delay,
	hasAnimation,
	...rest
}: LinkProps) {
	const rootClassName = cx(buttonStyle, className);

	return (
		<>
			{hasAnimation ? (
				<motion.a
					className={rootClassName}
					{...rest}
					href={url}
					rel="noopener noreferrer"
					target={target}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', delay: delay }}
				>
					{children}
				</motion.a>
			) : (
				<a
					className={rootClassName}
					{...rest}
					href={url}
					rel="noopener noreferrer"
					target={target}
				>
					{children}
				</a>
			)}
		</>
	);
}
