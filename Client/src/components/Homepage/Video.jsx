import backgroundVideo from '../../assets/OneTouch video.mp4'
function Video() {
  return (
    <div className='md:py-[6rem] relative overflow-hidden bg-gray-900'>
      <video src={backgroundVideo} autoPlay loop className='w-45 h-45 pt-[6.7rem] sm:pt-0'></video>
    </div>
  )
}

export default Video
 
