import { useState } from "react";

import logo2 from "../../assets/one-touch logo.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <header
      className={
        "fixed w-full h-[5.6rem] top-0 z-50 transition-all duration-300 bg-gray-900 text-white shadow-2xl  "
      }
    >
      <div className="sm:flex flex-wrap mt-2">
        <Link to={"/"}>
          <div className="flex -mt-3">
            <img
              src={logo2}
              alt="logo"
              className="w-32 h-24 sm:ml-10 ml-2 rounded-lg transition-all duration-300"
            />
          </div>
        </Link>

        <nav className="hidden md:block sm:mt-7 lg:mr-[3rem] xl:mr-[4rem] 2xl:mr-[4rem] sm:ml-auto sm:mr-auto md:mr-6 items-center text-xl md:text-2xl justify-center">
          <Link
            to={"/"}
            className=" mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "Adamina, serif" }}
          >
            Home
          </Link>

          <Link
            className=" mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "Adamina, serif" }}
            to={"/services2"}
          >
            Services
          </Link>

          <Link
            className=" mx-2 hover:text-[26px]  lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "Adamina, serif" }}
            to={"/portfolio2"}
          >
            Portfolio
          </Link>

          <Link
            to={"/contactus"}
            className=" mx-2 hover:text-[26px]  lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "Adamina, serif" }}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* for small devices  */}
      <div className="w-full bg-gray-900 sm:hidden">
        <div
          onClick={navHandler}
          className="flex justify-end mr-5 -mt-[4.4rem] text-white font-bold text-4xl "
        >
          {nav ? (
            <div className="font-bold">
              <RxCross2 />
            </div>
          ) : (
            <div className="font-bold">
              <IoMenu />
            </div>
          )}
        </div>

        <div className="mt-4">
          {nav && (
            <div className="flex flex-col ">
              {/* nav bar */}
              <nav className="flex flex-col gap-1 text-[1.3rem] items-center justify-center sm:mt-10 lg:mr-10 sm:ml-auto sm:mr-auto md:text-2xl">
                <Link
                  to={"/"}
                  className=" nav-link mx-2 lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition duration-300 ease-in-out"
                  style={{ fontFamily: "Adamina, serif" }}
                >
                  Home
                </Link>

                <Link
                  className="nav-link mx-2 lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition duration-300 ease-in-out"
                  style={{ fontFamily: "Adamina, serif" }}
                  to={"/services2"}
                >
                  Services
                </Link>
                <Link
                  className="nav-link mx-2 lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition duration-300 ease-in-out"
                  style={{ fontFamily: "Adamina, serif" }}
                  to={"/portfolio2"}
                >
                  Portfolio
                </Link>

                <Link
                  to={"/contactus"}
                  className="nav-link mx-2 lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition duration-300 "
                  style={{ fontFamily: "Adamina, serif" }}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
