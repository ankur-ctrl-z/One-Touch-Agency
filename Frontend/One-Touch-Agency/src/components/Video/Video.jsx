import backgroundVideo from '../../assets/video.mp4'
function Video() {
  return (
    <div className='relative overflow-hidden bg-gray-900'>
      <video src={backgroundVideo}  className='w-45 h-45'></video>
    </div>
  )
}

export default Video