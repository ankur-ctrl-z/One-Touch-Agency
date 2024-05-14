import { useEffect, useState } from 'react'
import backgroundVideo from '../../assets/video.mp4'
function Video() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(function(){
    const timeout = setTimeout(function(){
      setShowOverlay(false);
    },3000);
    return () => clearInterval(timeout)
  })
  return (
    <div className='relative overflow-hidden rounded-md'>
      <video src={backgroundVideo}  className='w-full'></video>

      {showOverlay && (
        <div className='absolute inset-0 bg-black opacity-50 transition-opacity duration-1000' style={{zIndex: 1}}></div>
      )}
    </div>
  )
}

export default Video