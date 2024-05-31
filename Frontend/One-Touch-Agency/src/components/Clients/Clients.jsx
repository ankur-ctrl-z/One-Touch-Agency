import image1 from '../../assets/Clients images/arihant.png';
import image2 from '../../assets/Clients images/bhanderi-lab-grown-diamonds.png';
import image3 from '../../assets/Clients images/KEI Wires and Cabel.png';
import image4 from '../../assets/Clients images/Tata_Chemicals_Limited_-_Logo.svg.png';

function Clients() {
  return (
    <div className="bg-gray-900 w-full">
      <h1 className="sm:text-5xl flex justify-center text-2xl pt-10 font-medium title-font mb-2 text-white">Our Valuable Clients</h1>
      <div className="flex justify-start p-4 gap-5 pt-16">
        <div className="h-[9rem] w-[16rem] rounded-lg border border-yellow-500 ml-44 flex items-center justify-center">
          <img src={image1} className="w-full h-full object-fill rounded-lg" alt="Arihant" />
        </div>
        <div className="h-[9rem] w-[16rem] rounded-lg border-2 border-yellow-500 flex items-center justify-center">
          <img src={image2} className="w-full h-full object-fill rounded-lg" alt="Bhanderi Lab Grown Diamonds" />
        </div>
        <div className="h-[9rem] w-[16rem] rounded-lg border border-yellow-500 flex items-center justify-center">
          <img src={image3} className="w-full h-full object-fill rounded-lg" alt="KEI Wires and Cables" />
        </div>
        <div className="h-[9rem] w-[16rem] rounded-lg border border-yellow-500 flex items-center justify-center">
          <img src={image4} className="w-full h-full object-fill rounded-lg" alt="Tata Chemicals Limited" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4">Be The Next</button>
      </div> 
    </div>
  );
}

export default Clients;





  