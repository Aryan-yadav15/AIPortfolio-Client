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
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
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
        slow: "80s",
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
        {items.map((item, idx) => (
          <li
            key={item.name}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] card-background-white-gray"
          >
            <blockquote className="relative p-2 border rounded-lg bg-gray-50">
              <div className="relative z-20 mt-2 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="leading-[1.6] text-xl text-gray-800 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-800 font-normal bg-blue-100 rounded-lg px-2 py-1 mb-4">
                    {item.title}
                  </span>
                </span>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none mt-4 -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-900 font-normal">
                {item.quote}
              </span>
            </blockquote>


          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
