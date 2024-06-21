import React, { useEffect, useRef, useState } from "react";
import "./InfiniteMovingCards.css"

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (items.length) {
      addAnimation();
    }
  }, [items]);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      scrollerRef.current.innerHTML = ""; // Clear previous content
      const fragment = document.createDocumentFragment();

      items.forEach((item) => {
        const li = document.createElement('li');
        li.className = "w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] card-background-white-gray";
        li.innerHTML = `
          <blockquote class="relative p-2 border rounded-lg bg-gray-50">
            <div class="relative z-20 mt-2 flex flex-row items-center">
              <span class="flex flex-col gap-1">
                <span class="leading-[1.6] text-xl text-gray-800 font-semibold">${item.name}</span>
                <span class="text-sm leading-[1.6] text-gray-800 font-normal bg-blue-100 rounded-lg px-2 py-1 mb-4">${item.title}</span>
              </span>
            </div>
            <div aria-hidden="true" class="user-select-none mt-4 -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
            <span class="relative z-20 text-sm leading-[1.6] text-gray-900 font-normal">${item.quote}</span>
          </blockquote>
        `;
        fragment.appendChild(li);
      });

      scrollerRef.current.appendChild(fragment);

      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "60s",
        normal: "80s",
        slow: "100s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-9xl overflow-hidden ${className ? className : ""
        } mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start ? "animate-scroll " : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {/* Items will be dynamically added here */}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
