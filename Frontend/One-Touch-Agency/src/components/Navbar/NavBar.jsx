import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import logo from '../../assets/R.png'
function Logo() {
  return (
    <div className='bg-black relative w-full h-20 rounded-lg'>

      {/* Logo*/}

      <img src={logo} alt='logo' className='w-20 h-20 ml-4'></img>

      {/* Links */}

      <div className="relative" style={{top: '-60px', right:'30px'}} >
      <div className="space-x-6 text-white flex justify-center items-start text-2xl">
      <a href="">Home</a>
      <a href="">About Us</a>
      <a href="">Services</a>
      <a href="">Portfolio</a>
      </div>
      
      {/* Social-Media Icons */}

      <div className="absolute right-0 top-0 pr-4 text-white z-10">
      <div className='text-2xl space-x-3 flex justify-end'>
        
        <a href='' target="_blank" rel="noopener noreferrer">
          <FaInstagram className=" hover:text-pink-800" />
        </a>
        
        <a href='' target='_blank' rel='noopener noreferrer'><FaLinkedin className=" hover:text-blue-600"></FaLinkedin></a>

        <a href='' target='_blank' rel='noopener noreferrer'><FaFacebook className='hover:text-blue-500'></FaFacebook></a>
        
        <a href='' target='_blank' rel='noopener noreferrer'><FaTwitter className='hover:text-blue-600'></FaTwitter></a>
        
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Logo