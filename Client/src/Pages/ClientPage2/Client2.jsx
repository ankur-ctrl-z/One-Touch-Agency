import React from "react";
import pureChamper from "../ClientPage2/client2-images/303 camphor.jpeg";
import arihant from "../ClientPage2/client2-images/arihant.png";
import charatech from "../ClientPage2/client2-images/chara_tech_logo.jpeg";
import download from "../ClientPage2/client2-images/download.jpeg";
import fusion from "../ClientPage2/client2-images/fusion.jpeg";
import greenGranite from "../ClientPage2/client2-images/green granite.jpeg";
import kalpa from "../ClientPage2/client2-images/kalpa.jpeg";
import kalpa1 from "../ClientPage2/client2-images/kalpa1.jpeg";
import kei from "../ClientPage2/client2-images/kei.jpeg";
import LDJS from "../ClientPage2/client2-images/LDJS.jpeg";
import logo from "../ClientPage2/client2-images/logo.png";
import lotusMarble from "../ClientPage2/client2-images/lotusmarble.png";
import NU from "../ClientPage2/client2-images/NU.png";
import oracle from "../ClientPage2/client2-images/oracle.png";
import portal from "../ClientPage2/client2-images/portal.jpeg";
import shakti from "../ClientPage2/client2-images/sakhti.png";
import tatach from "../ClientPage2/client2-images/tata_ch.jpeg";
import tatanq from "../ClientPage2/client2-images/tatanq.png";
import vecomocon from "../ClientPage2/client2-images/vecomocon.png";
import wingsgroup from "../ClientPage2/client2-images/wings grooup.jpeg";

const clients2 = [
  {
    id: 1,
    img: pureChamper,
  },
  {
    id: 2,
    img: arihant,
  },
  {
    id: 3,
    img: charatech,
  },
  {
    id: 4,
    img: download,
  },
  {
    id: 5,
    img: greenGranite,
  },
  {
    id: 6,
    img: kalpa,
  },
  {
    id: 7,
    img: kalpa1,
  },
  {
    id: 8,
    img: kei,
  },
  {
    id: 9,
    img: LDJS,
  },
  {
    id: 10,
    img: logo,
  },
  {
    id: 11,
    img: lotusMarble,
  },
  {
    id: 12,
    img: NU,
  },
  {
    id: 13,
    img: oracle,
  },
  {
    id: 14,
    img: portal,
  },
  {
    id: 15,
    img: shakti,
  },
  {
    id: 16,
    img: tatach,
  },
  {
    id: 17,
    img: tatanq,
  },
  {
    id: 18,
    img: vecomocon,
  },
  {
    id: 19,
    img: wingsgroup,
  },

  {
    id: 20,
    img: fusion,
  },
];

const Client2 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 w-full">
      <div className="mt-32 mb-10 ml-5 mr-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {clients2.map((client) => {
          return (
            <div key={client.id} className="h-[9rem] sm:w-[10rem] w-[14rem] md:h-[10rem] md:w-[18rem]">
              <img className="w-full h-full object-fill rounded-lg" src={client.img} alt="this is client-2 image" />
            </div>
          );
        })}
      </div>


      <div className="flex justify-center">
          <a
            smooth={true}
            duration={500}
            style={{ fontFamily: "Chivo, sans-serif" }}
            className="text-white text-xl flex justify-center py-3 px-6 mt-4 mb-14 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
            href="/"
          >
            Back To Home
          </a>
        </div>
    </div>
  );
};

export default Client2;
