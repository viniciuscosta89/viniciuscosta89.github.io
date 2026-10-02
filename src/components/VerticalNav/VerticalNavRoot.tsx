import { type ReactNode, useEffect, useState } from 'react';

function VerticalNavRoot({ children }: { children: ReactNode }) {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const threshold = 0;
		let lastScrollY = window.scrollY;
		let ticking = false;
		let timeoutId: NodeJS.Timeout;

		const updateScrollDir = () => {
			const scrollY = window.scrollY;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}

			setIsScrolling(scrollY !== lastScrollY);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;

			clearTimeout(timeoutId); // Clear any existing timeout
			timeoutId = setTimeout(() => {
				setIsScrolling(false);
			}, 3000);
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		// Horizontal bar pinned to the bottom on mobile/tablet, so it doesn't
		// cover the content; vertical on the left from `lg` up. It hides when
		// idle but comes back while it holds keyboard focus, so tabbing never
		// lands on invisible buttons.
		<nav
			aria-label="Sections"
			className={`fixed inset-x-4 bottom-4 z-50 flex flex-row rounded-sm bg-neutral-800 p-2 shadow-[0_0_16px_hsl(0_0_0_/0.5)] transition-all duration-300 ease-in-out md:inset-x-8 lg:inset-x-auto lg:bottom-auto lg:left-8 lg:flex-col lg:px-4 lg:py-2 focus-within:translate-0 focus-within:opacity-100 lg:focus-within:translate-0 ${isScrolling ? 'translate-0 opacity-100' : 'translate-y-[calc(100%+2rem)] opacity-0 lg:-translate-x-40 lg:translate-y-0'}`}
		>
			{children}
		</nav>
	);
}

export default VerticalNavRoot;
