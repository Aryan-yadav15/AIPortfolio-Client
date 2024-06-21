import React, { useState } from 'react'
import { HeroScrollDemo } from '../../test'
import Equalizer from '../Equalizer'
import BackgroundAudioPlayer from '../BackgroundAudio'
import "./PreLoader.css"
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormModal from './TryBeatModal';

const Herosections = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTryBetaClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className=''>
        <div className=" w-full mt-8 xsm:mt-0 sm:mt-24 md:mt-[-10rem]  lg:mt-0 xlg:mt-[1rem] mb-20 flex flex-col justify-center items-center gap-5 relative h-[calc(100vh_-_20px)]">
          <div className="flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 2.5, ease: "easeIn" }}
              className="flex flex-col items-center relative"
            >
              <Equalizer />
            </motion.div>
            <div className="flex flex-col gap-40 xsm:gap-48 sm:gap-28  md:gap-80 lg:gap-10 xlg:gap-48 2xlg:gap-64">
              <div className='pt-10 lg:pt-0 xlg:pt-10'>
                <div className="px-4 lg:px-12 xlg:px-28 text-center">
                  <h1 className="text-4xl md:text-6xl  lg:p-10 xlg:p-8 md:leading-normal xlg:leading-normal xlg:text-7xl font-regular bg-gradient-custom bg-clip-text text-transparent leading-normal sm:leading-relaxed lg:leading-normal ">
                    <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/2 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">
                      Revolutionizing
                    </span>{" "}
                    Your Digital Life{" "} 
                    <span className="bg-gradient-to-r animate-slide from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">
                      With AI
                    </span>
                  </h1>
                </div>
                
              </div>
              <div className="md:pt-8 mt-10 sm:mt-[-10px] text-lg font-light flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center md:mt-4 ">
                <button
                  className="z-10 bg-gradient-to-r border-l-4 border-r-4 border-pink-400 border-opacity-40 from-pink-500/5 to-pink-500/20 text-white hover:font-semibold hover:text-2xl transition-all font-normal py-2 px-6 sm:px-10 md:py-3 md:px-12 lg:py-4 lg:px-16 rounded-lg focus:outline-none"
                  onClick={handleTryBetaClick}
                >
                  Try Beta
                </button>
                <BackgroundAudioPlayer />
                <button
                  className="z-10 bg-gradient-to-l border-l-4 border-r-4 border-pink-400 border-opacity-40 from-pink-500/5 to-pink-500/20 text-white hover:font-semibold hover:text-2xl transition-all font-normal py-2 px-6 sm:px-10 md:py-3 md:px-12 lg:py-4 lg:px-16 rounded-lg focus:outline-none"
                >
                  Product
                </button>
                {isModalVisible && <FormModal onClose={handleCloseModal} />}
                <ToastContainer position="bottom-right" />
              </div>
            </div>
          </div>
          {/* <HeroScrollDemo /> */}
        </div >

      </div >
    </>
  )
}

export default Herosections