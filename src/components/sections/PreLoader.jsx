import React from 'react';
import { backInOut, easeOut, motion } from 'framer-motion';
import "./PreLoader.css"

const Preloader = () => {
  const shapeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, scale: 1.2, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } }
  };

  return (
    // <div className="preloader">
    //   <motion.div variants={shapeVariants} animate="animate" initial="initial" exit="exit">
    //     {/* Shape 1 SVG or component */}
    //   </motion.div>
    //   <motion.div variants={shapeVariants} animate="animate" initial="initial" exit="exit" style={{ transformOrigin: "bottom right" }}>
    //     {/* Shape 2 SVG or component */}
    //   </motion.div>
    //   {/* (Optional) Add a third shape with different animation timing or offset */}
    // </div>
    <div className="bg-customDarkGray min-h-screen min-w-full overflow-hidden">
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0], transition: { duration: 4, ease: "easeInOut" } }}
          className='flex flex-row w-full absolute justify-center items-center bg-transparent overflow-hidden  '>
          <motion.span
            initial={{ y: 110 }}
            animate={{ y: [110, 0, 110] }}
            transition={{ duration: 3, delay: 0.1, ease: backInOut }}
            className="text-gray-500 z-10 text-9xl font-bold  bg-gradient-custom bg-clip-text text-transparent lg:leading-normal"
          >
            Z
          </motion.span>
          <motion.span
            initial={{ y: 110 }}
            animate={{ y: [110, 0, 110] }}
            transition={{ duration: 3, delay: 0.2, ease: backInOut }}
            className="text-gray-500 z-10 text-9xl font-bold  bg-gradient-custom bg-clip-text text-transparent lg:leading-normal"
          >
            O
          </motion.span>
          <motion.span
            initial={{ y: 110 }}
            animate={{ y: [110, 0, 110] }}
            transition={{ duration: 3, delay: 0.3, ease: backInOut }}
            className="text-gray-500 z-10 text-9xl font-bold bg-gradient-custom bg-clip-text text-transparent lg:leading-normal "
          >
            R
          </motion.span>
          <motion.span
            initial={{ y: 110 }}
            animate={{ y: [110, 0, 110] }}
            transition={{ duration: 3, delay: 0.4, ease: backInOut }}
            className="text-gray-500 z-10 text-9xl font-bold bg-gradient-custom bg-clip-text text-transparent lg:leading-normal "
          >
            A
          </motion.span>
        </motion.div>
        <div className="flex flex-row items-center relative w-full z-0">

        <motion.div
            initial={{
              y: 0
            }}
            animate={{
              y: ["100%", "0%", "100%"],
              transition: {
                yoyo: Infinity,
                duration: 2.5,
                delay: 2.5,
                ease: "easeInOut"
              }
            }}
            end={{
              y: 0
            }}
            className="flex-1 h-screen bg-white z-0  "></motion.div>
          <motion.div
            initial={{
              y: 0
            }}
            animate={{
              y: ["100%", "0%", "100%"],
              transition: {
                yoyo: Infinity,
                duration: 2.3,
                delay: 2.5,
                ease: "easeInOut"
              }
            }}
            end={{
              y: 0
            }}
            className="flex-1 h-screen bg-white z-0  "></motion.div>
          <motion.div
            initial={{
              y: 0
            }}
            animate={{
              y: ["100%", "0%", "100%"],
              transition: {
                yoyo: Infinity,
                duration: 2.1,
                delay: 2.5,
                ease: "easeInOut"
              }
            }}
            end={{
              y: 0
            }}
            className="flex-1 h-screen bg-white z-0  "></motion.div>
          <motion.div
            initial={{
              y: 0
            }}
            animate={{
              y: ["100%", "0%", "100%"],
              transition: {
                yoyo: Infinity,
                duration: 1.9,
                delay: 2.5,
                ease: "easeInOut"
              }
            }}
            end={{
              y: 0
            }}
            className="flex-1 h-screen bg-white z-0  "></motion.div>

        </div>
      </div>



    </div >
  );
};

export default Preloader;
