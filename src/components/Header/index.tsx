import profileDesktop from '@assets/image-profile-desktop.webp';
import Container from '@components/Container';
import { socialNetworks } from '@data/social-networks';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function Header() {
	const [isSticky, setSticky] = useState(false);

	const element = useRef<HTMLElement>(null);

	// Publish the header's real height so sections' `scroll-margin-top` and
	// the section nav's active threshold clear it at every breakpoint (it is
	// ~108px when stuck on mobile, not the 64px those used to assume).
	useEffect(() => {
		const header = element.current;
		if (!header) return;

		const observer = new ResizeObserver(() => {
			document.documentElement.style.setProperty(
				'--header-h',
				`${header.getBoundingClientRect().height}px`,
			);
		});

		observer.observe(header);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const onScroll = () =>
			setSticky(
				window.scrollY > (element.current?.getBoundingClientRect().bottom ?? 0),
			);

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const profileImageClassName =
		'relative top-0 right-0 mx-auto -mt-4 md:mt-4 max-w-[10.88794rem] md:max-w-[18rem] lg:absolute lg:mt-0 lg:max-w-80.5 lg:right-0 lg:z-5 xl:max-w-111.25';

	return (
		<>
			<header
				id="header"
				ref={element}
				className={`before:content[''] before:md:none after:md:none bg-bg sticky top-0 left-0 z-10 leading-none text-white transition-all duration-300 before:absolute before:top-[35%] before:-left-full before:z-auto before:hidden before:h-32.25 before:w-132.5 before:transition-all lg:mb-[5.62rem] lg:overflow-x-visible xl:mb-32 before:lg:top-[185%] before:lg:left-[-5%] before:lg:block ${isSticky ? 'shadow-[0_4px_16px_hsl(0_0_0_/_0.5)]' : 'before:bg-[url(/src/assets/pattern-rings.svg)]'}`}
			>
				<Container align="mobileCenter">
					<div
						className={`relative z-10 mb-12 flex flex-col items-center justify-between gap-5 pr-0 transition-all duration-300 md:mb-0 md:flex-row lg:pr-[1.84rem] ${isSticky ? 'py-4' : 'pt-[2.44rem] md:pt-8 lg:pt-[2.44rem]'}`}
					>
						<div className="flex items-center text-3 leading-none tracking-[-0.02081rem]">
							<span className="font-light">vinicius</span>
							<strong>costa</strong>
						</div>

						<ul className="relative flex items-center gap-8">
							{socialNetworks.map(({ id, url, label, logo: Logo }) => (
								<li key={id}>
									<a
										className="block transition-all duration-300 ease-in-out hover:scale-[1.15] hover:text-red-500"
										href={url}
										title={`My ${label} profile`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Logo />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* From `lg` up the image sits beside the header bar and fades out once
				    the header turns sticky. */}
					<AnimatePresence>
						{isSticky ? null : (
							<motion.img
								className={`hidden lg:block ${profileImageClassName}`}
								alt="AI rendered Vinicius Costa"
								// widths={[375, 768, 1140]}
								src={profileDesktop.src}
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
							/>
						)}
					</AnimatePresence>
				</Container>
			</header>

			{/* Below `lg` the image is stacked under the bar. It lives outside the
		    sticky header so it scrolls away with the page; inside the header it
		    kept the header hundreds of pixels tall until a long scroll. */}
			<div className="relative mb-10 before:absolute before:top-0.75 before:-left-full before:block before:h-32.25 before:w-132.5 before:bg-[url(/src/assets/pattern-rings.svg)] before:content-[''] lg:hidden">
				<motion.img
					className={`block ${profileImageClassName}`}
					alt="AI rendered Vinicius Costa"
					src={profileDesktop.src}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
				/>
			</div>
		</>
	);
}

export default Header;
