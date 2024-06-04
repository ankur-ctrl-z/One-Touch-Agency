import { Link } from 'react-scroll';
import image1 from '../../assets/Clients images/air-asia.png';
import image2 from '../../assets/Clients images/Tata_Chemicals_Limited_-_Logo.svg.png';
import image3 from '../../assets/Clients images/fb.png';
import image4 from '../../assets/Clients images/matrix battery.png';

function Clients() {
  return (
    <div className="bg-gray-900 w-full">
      <h1 className="sm:text-5xl flex justify-center text-2xl pt-18 font-medium title-font mb-2 text-white">Our Valuable Clients</h1>
      <div className="flex justify-start p-4 gap-5 pt-16">
        <div className="h-[10rem] w-[17rem] rounded-lg border border-yellow-500 ml-44 flex items-center justify-center">
          <img src={image1} className="w-full h-full object-fill rounded-lg" alt="Arihant" />
        </div>
        <div className="h-[10rem] w-[17rem] rounded-lg border-2 border-yellow-500 flex items-center justify-center">
          <img src={image2} className="w-full h-full object-fill rounded-lg" alt="Bhanderi Lab Grown Diamonds" />
        </div>
        <div className="h-[10rem] w-[17rem] rounded-lg border border-yellow-500 flex items-center justify-center">
          <img src={image3} className="w-full h-full object-fill rounded-lg" alt="KEI Wires and Cables" />
        </div>
        <div className="h-[10rem] w-[17rem] rounded-lg border border-yellow-500 flex items-center justify-center">
          <img src={image4} className="w-full h-full object-fill rounded-lg" alt="Tata Chemicals Limited" />
        </div>
      </div>
      <div className="flex justify-center">
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="text-white text-xl flex justify-center py-3 px-6 mt-10 mb-2 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
        >
          Be The Next
        </Link>
      </div>
      <hr className="ml-36 mt-10 mb-0" style={{ border: '0.5px solid yellow', width: '81%' }} />
    </div>
  );
}

export default Clients;












  