import { useEffect, useState } from "react";
import "./bar.css";
import Bar from "./Bar";


const Equalizer = () => {
  const [bars, setBars] = useState([]);
  const [numBars, setNumBars] = useState(100); // Initial number of bars

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let updatedNumBars;

      if (screenWidth >= 1700) {
        updatedNumBars = 90; // Number of bars for extra large screens (xlg)
      }  else if (screenWidth >= 1440) {
        updatedNumBars = 70; // Number of bars for medium screens (md)
      }
       else if (screenWidth >= 1024) {
        updatedNumBars = 60; // Number of bars for large screens (lg)
      } else if (screenWidth >= 768) {
        updatedNumBars = 40; // Number of bars for medium screens (md)
      }  else if (screenWidth >= 500) {
        updatedNumBars = 30; // Number of bars for medium screens (md)
      }
       else {
        updatedNumBars = 25; // Number of bars for small screens (sm)
      }

      setNumBars(updatedNumBars);
    };

    // Initial adjustment
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const initialBars = [];
    for (let i = 0; i < numBars; i++) {
      const center = Math.floor(numBars / 2);
      const distanceFromCenter = Math.abs(i - center);
      const height = (1 - distanceFromCenter / (numBars / 2)) * 100; // Adjust max height
      initialBars.push({ height, targetHeight: Math.random() * 50 });
    }
    setBars(initialBars);

    const intervalId = setInterval(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          height: bar.height + (bar.targetHeight - bar.height) * 0.1,
        }))
      );

      // Randomly update target heights
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          targetHeight: Math.random() * 50,
        }))
      );
    }, 100); // Adjust interval for animation speed

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [numBars]);

  return (
    <div className="h-[90vh] w-[90vw] md:opacity-80 xlg:opacity-100 absolute items-center justify-center z-0 xsm:mt-[-5rem]  md:mt-[-10vh] lg:mt-[10vh] xlg:mt-[5vh] 2xlg:mt-5 overflow-hidden">
      <div className="equalizer-container">
        <div className="glow-background"></div>
        <div className="equalizer">
          {bars.map((bar, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${bar.height}%`, width: `${100 / numBars}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equalizer;