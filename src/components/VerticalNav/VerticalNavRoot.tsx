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
    <div
      className={`fixed left-4 z-50 flex flex-col rounded-sm bg-neutral-800 px-4 py-2 shadow-[0_0_16px_hsl(0_0_0_/0.5)] transition-all duration-300 ease-in-out md:left-8 ${isScrolling ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default VerticalNavRoot;
