// import Stall from "../Button/Button";
import stallImage from "../../assets/Founder & Manager image/founder image.jpg";

const StallFabrication = () => {
  return (
    <div className="w-full flex bg-[#0C1219] relative">
      <div className="w-11/12 mx-auto ">
        <div className="md:flex gap-5 lg:gap-20">
          {/* content */}
          <div className="md:w-1/2 lg:w-1/2 w-full text-white">
            <h2 className="text-3xl mt-5 font-semibold leading-[61px] text-center">
              Stall Fabrication
            </h2>
            <p className="mt-6 text-semibold text-[17px] max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error aliquid expedita reprehenderit placeat nisi ab praesentium,
              porro aut minima aspernatur, numquam molestiae. Laborum maiores
              repellendus beatae tempora culpa dolore nulla sit repellat cumque
              animi est quae aut minus cupiditate iure omnis, impedit quis,
              soluta illum. Delectus, ratione nulla soluta corrupti assumenda
              ipsum ipsam quod. Nostrum corrupti magni expedita laborum delectus
              odit atque maiores quod! Autem temporibus aliquam debitis atque,
              quis quo accusantium quidem aut iusto? Ipsa nihil iste debitis?
            </p>
            <button>View all</button>
          </div>

          {/* images */}
          <div className="md:w-1/2 lg:w-1/2 flex-wrap w-full mt-12 mb-5">
            <div className="">
              <img
                className="h-64 w-64 ml-14 lg:h-[18rem] lg:w-[18rem] "
                src={stallImage}
                alt="stall image"
              />
              <img
                className="h-64 w-64 ml-24 -mt-40 md:ml-24 lg:h-[18rem] lg:w-[18rem] "
                src={stallImage}
                alt="stall image"
              />
              <img
                className="h-60 w-72 -mt-40 lg:w-[18rem]"
                src={stallImage}
                alt="stall image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallFabrication;