import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="place-content-center h-screen w-full  bg-lime-50 text-black text-left"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pl-8 md:flex-row overflow-hidden">
        <div className="flex flex-col justify-center h-full ">
          <p className="  text-black py-4 max-w-md">
            Supporting city skin
          </p>
          <h3 className="wow animate__animated animate__fadeInLeft animate__delay-0.7s lg:mt-0 md:-mt-96 font-bold sm:text-2xl mt-10 text-blackz ">
            Parsley Seed Anti-Oxidant Intense Serum
          </h3>
          <p className="  font-medium text-black py-4 max-w-md ">
            Explore how this anti-oxidant-rich serum hydrates, replenishes and
            fortifies the skin via a suite of ingredients selected with urban
            dwellers in mind.
          </p>

          <div className="">
            <a
              href="https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-neutral-900 text-black h-14 hover:text-white  w-9/12 px-3 py-1 flex items-center border-2  border-neutral-900  cursor-pointer ">
                <span className="">Discover the formulation</span>
              </button>
            </a>
          </div>
        </div>
        <div className=" w-10/12 md:h-5/6 md:w-4/6 bg-gradient-to-bl to-cyan-700 via-gray-800 from-gray-900 "></div>
      </div>
    </div>
  );
};

export default Home;
