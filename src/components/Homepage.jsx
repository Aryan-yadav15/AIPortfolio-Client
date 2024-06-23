import React from 'react';
import Herosections from './sections/Herosections';
import BackgroundAudioPlayer from './BackgroundAudio.jsx'; // Import your BackgroundAudio component

const Homepage = ({ contactRef,overviewRef }) => {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id="upper" className="h-full">
        <section id="hero" className='pt-20'>
          <Herosections overviewRef={overviewRef} />
        </section>
      </section>
    </div>
  );
};

export default Homepage;
