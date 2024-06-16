import backgroundVideo from '../../assets/OneTouch video.mp4'
import React, { useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function Video() {

  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    // <div className='w-full h-full md:py-[6rem] relative overflow-hidden bg-gray-900'>
    //   <video src={backgroundVideo} autoPlay loop className='w-45 h-45 pt-[6.7rem] sm:pt-0'></video>
    // </div>

    <div className='w-full h-full md:py-[6rem] relative overflow-hidden bg-gray-900'>
    <video
      ref={videoRef}
      loop
     controls
      className='w-45 h-45 pt-[6.7rem] sm:pt-0'
      src={backgroundVideo}
     
    />
    <button
      onClick={toggleMute}
      className='absolute ml-[83%] sm:ml-[88%] -mt-10  border-none cursor-pointer text-white text-[24px] '
    >
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  </div>
  )
}

export default Video;


