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

	useEffect(() => {
		const element = document.querySelector(`#${id}`);
		if (!element) return;

		const onScroll = () => {
			// The section counts as current once it reaches the sticky header's
			// bottom edge (+1px for sub-pixel scroll positions).
			const headerBottom =
				document.getElementById('header')?.getBoundingClientRect().bottom ?? 64;
			const { top, bottom } = element.getBoundingClientRect();
			setElementIsVisible(top <= headerBottom + 1 && bottom > headerBottom + 1);
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [id]);

	// A plain in-page link: the smooth scroll and the header offset come from
	// CSS (`scroll-behavior`, `scroll-margin-top`), so it works before hydration.
	return (
		<a
			href={`#${id}`}
			aria-current={elementIsVisible ? 'location' : undefined}
			className={`flex flex-1 flex-col items-center gap-1 py-2 text-[0.625rem] tracking-wide uppercase transition duration-300 hover:text-red-500 md:text-xs lg:flex-none lg:gap-2 lg:py-4 lg:text-sm ${elementIsVisible ? 'text-red-500' : 'text-white'} ${isLast ? '' : 'border-r-1 border-r-neutral-600 lg:border-r-0 lg:border-b-1 lg:border-b-neutral-600'}`}
		>
			{children}
		</a>
	);
}

export default VerticalNavItem;
