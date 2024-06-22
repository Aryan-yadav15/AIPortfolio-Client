import React from 'react';
import Herosections from './sections/Herosections';
import BackgroundAudioPlayer from './BackgroundAudio.jsx'; // Import your BackgroundAudio component

const Homepage = ({ contactRef,projectsRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id="upper" className="h-full">
        <div className="w-full p-1 flex flex-row justify-between">
          <div className="hidden lg:block">
            <img src="/logo-horizontal-light.png" alt="Logo" height={300} width={300} />
          </div>
          <div className="hidden lg:flex flex-row gap-1 justify-center items-center">
            <button
              className="bg-gray-50 z-30 text-gray-900 px-2 rounded-lg font-semibold flex flex-row gap-0 justify-center items-center"
              onClick={() => handleScroll(contactRef)}
            >
              <div>
                <img src="/Message_light.svg" alt="Contact us" className="bg-black invert py-2 px-2" />
              </div>
              <span className='pr-2'>Contact</span>
            </button>
            {/* Call the BackgroundAudio component here */}
          </div>
        </div>

        <section id="hero">
          <Herosections projectsRef={projectsRef} />
        </section>
      </section>
    </div>
  );
};

export default Homepage;
