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
  const element = document.querySelector(`#${id}`);
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const scrollIntoView = () => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  console.log(
    id,
    elementIsVisible,
    element.getBoundingClientRect().top,
    element.getBoundingClientRect().bottom,
    element.scrollHeight,
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setElementIsVisible(
        element.getBoundingClientRect().top <= 64 &&
          element.getBoundingClientRect().bottom > 64,
        // element.getBoundingClientRect().top > -element.scrollHeight,
      );
    });
  });

  return (
    <button
      onClick={scrollIntoView}
      type="button"
      className={`flex flex-col items-center gap-2 py-4 text-sm tracking-wide uppercase transition duration-300 hover:text-red-500 ${elementIsVisible ? 'text-red-500' : 'text-white'} ${isLast ? '' : 'border-b-1 border-b-neutral-600'}`}
    >
      {children}
    </button>
  );
}

export default VerticalNavItem;
