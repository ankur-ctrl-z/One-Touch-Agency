import backgroundVideo from '../../assets/video.mp4'
function Video() {
  return (
    <div className='overflow-hidden rounded-md'>
      <video src={backgroundVideo}  className='w-full' autoPlay loop muted></video>
    </div>
  )
}

export default Video