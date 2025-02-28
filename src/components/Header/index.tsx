import profileDesktop from '@assets/image-profile-desktop.webp';
import Container from '@components/Container';
import { socialNetworks } from '@data/social-networks';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isSticky, setSticky] = useState(false);

  const element = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > element.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    });
  }, []);

  return (
    <header
      id="header"
      ref={element}
      className={`before:content[''] before:md:none after:md:none bg-bg sticky top-0 left-0 z-10 mb-10 overflow-x-hidden leading-none text-white transition-all duration-300 before:absolute before:top-[35%] before:-left-full before:z-auto before:block before:h-[129px] before:w-[530px] before:transition-all md:mb-[5.62rem] md:overflow-x-visible lg:mb-32 before:lg:top-[185%] before:lg:left-[-5%] before:lg:block ${isSticky ? 'shadow-[0_4px_16px_hsl(0_0_0_/_0.5)]' : 'before:bg-[url(/src/assets/pattern-rings.svg)]'}`}
    >
      <Container align="mobileCenter">
        <div
          className={`relative z-10 mb-12 flex flex-col items-center justify-between gap-5 pr-0 transition-all duration-300 md:mb-0 md:flex-row lg:pr-[1.84rem] ${isSticky ? 'py-4' : 'pt-[2.44rem] md:pt-8 lg:pt-[2.44rem]'}`}
        >
          <div className="flex items-center text-[2rem] leading-none tracking-[-0.02081rem]">
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

        <AnimatePresence>
          {isSticky ? null : (
            <motion.img
              className="-md:right-8 relative top-0 right-0 mx-auto -mt-4 block max-w-[10.88794rem] md:absolute md:mt-0 md:max-w-[20.125rem] lg:right-0 lg:z-[5] lg:max-w-[27.8125rem]"
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
  );
}

export default Header;
