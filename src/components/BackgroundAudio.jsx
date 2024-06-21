import React, { useRef, useState } from 'react';
import "./BackgroundAudio.css"

const BackgroundAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log('Playback error:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='z-10'>
      <audio ref={audioRef} src="/zora_intro.mp3" loop>
        Your browser does not support the audio element.
      </audio>
      <button className='z-10' onClick={handlePlayPause}>
        {isPlaying ?
          <img className='hover:shadow-sm hover:w-[120px] opacity-100 transition-all' src="/mic.png" alt="Mic Open" width={150} />
          :
          <img className='hover:shadow-sm hover:w-[120px] opacity-100 transition-all' src="/micClose.png" alt="Mic Closed" width={150} />
        }
      </button>
    </div>
  );
};

export default BackgroundAudioPlayer;
