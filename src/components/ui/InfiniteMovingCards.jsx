import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn.js';
import './InfiniteMovingCards.css'; // Ensure you import the CSS file

const clientTexts = [
  "Building the future of convenience",
  "Innovating with excellence",
  "Shaping tomorrow's solutions",
  "Pioneering new possibilities",
  "Leading the way in technology",
  "Delivering unmatched quality",
  "Redefining standards",
];

const clients = clientTexts.map((text, index) => ({
  key: index,
  text: text
}));

export const InfiniteMovingCards = ({
  items = clients,
  direction = 'right',
  speed = 'slow',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty('--animation-direction', 'forwards');
      // Force reflow (optional)
      scrollerRef.current.style.display = 'none';
      scrollerRef.current.offsetHeight; // read to force reflow
      scrollerRef.current.style.display = '';
    }
  };

  const getSpeed = () => {
    if (scrollerRef.current) {
      if (speed === 'fast') {
        scrollerRef.current.style.setProperty('--animation-duration', '80s');
      } else if (speed === 'normal') {
        scrollerRef.current.style.setProperty('--animation-duration', '80s');
      } else {
        scrollerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
    }
    getDirection();
    getSpeed();
    setStart(true);
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] bg-gray-200',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
          items.length > 0 && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <p key={item.key} className='text-gray-800 font-semibold text-2xl'>{item.text}</p>
        ))}
      </ul>
    </div>
  );
};
