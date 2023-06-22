import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="home"
      className="place-content-center h-screen  w-full  bg-white text-black text-left font-sans "
    >
      <div className="  flex flex-col items-center justify-center  md:flex-row overflow-hidden  pt-0.5">
        <div className=" cursor-pointer mb-56 ml-6 h-20 w-64
        ">
          <img src={Logo} alt="" />
        </div>
        <div className="px-6 pt-12 flex flex-col justify-center pr-16 ">
          <p className="  text-black py-4 max-w-md">Supporting city skin</p>
          <p className="text-3xl   text-gray-800 ">
            Parsley Seed Anti-Oxidant Intense Serum
          </p>
          <p className="  font-medium text-black py-4 max-w-md ">
            Explore how this anti-oxidant-rich serum hydrates, replenishes and
            fortifies the skin via a suite of ingredients selected with urban
            dwellers in mind.
          </p>

          <div className="pt-6">
            <a
              href="https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-neutral-900 text-black h-14 hover:text-white  w-11/12 px-3 py-1 flex items-center border-2  border-gray-300  cursor-pointer ">
                <span className="text-sm">Discover the formulation</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-10/12 h-80 mb-32 ">
          <img src={Pic} class=" " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
