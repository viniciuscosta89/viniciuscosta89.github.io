import { useEffect, useState } from 'react';

function VerticalNavItem({
	children,
	id,
	isLast,
}: {
	children: React.ReactNode;
	id: string;
	isLast?: boolean;
}) {
	const [elementIsVisible, setElementIsVisible] = useState(false);

	const scrollIntoView = () => {
		document.querySelector(`#${id}`)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	useEffect(() => {
		const element = document.querySelector(`#${id}`);
		if (!element) return;

		const onScroll = () => {
			const { top, bottom } = element.getBoundingClientRect();
			setElementIsVisible(top <= 64 && bottom > 64);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [id]);

	return (
		<button
			onClick={scrollIntoView}
			type="button"
			aria-current={elementIsVisible ? 'location' : undefined}
			className={`flex flex-1 flex-col items-center gap-1 py-2 text-[0.625rem] tracking-wide uppercase transition duration-300 hover:text-red-500 md:text-xs lg:flex-none lg:gap-2 lg:py-4 lg:text-sm ${elementIsVisible ? 'text-red-500' : 'text-white'} ${isLast ? '' : 'border-r-1 border-r-neutral-600 lg:border-r-0 lg:border-b-1 lg:border-b-neutral-600'}`}
		>
			{children}
		</button>
	);
}

export default VerticalNavItem;
