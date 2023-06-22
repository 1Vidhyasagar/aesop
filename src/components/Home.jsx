import React from "react";
import Logo from "../download/logo.png";
import Pic from "../download/pic.jpg";


const Home = () => {
  return (
    <div
      name="home"
      className="md:place-content-center md:h-screen  w-full  bg-white text-black text-left font-sans "
    >
      <div
        className="absolute pt-2 md:invisible  w-28   cursor-pointer md:mb-56 ml-6  md:w-64
        "
      >
        <img src={Logo} alt="" />
      </div>
      <div className="  flex flex-col-reverse items-center justify-center  md:flex-row overflow-hidden  pt-0.5">
        <div
          className="invisible md:visible  w-28   cursor-pointer md:mb-56 ml-6  md:w-64
        "
        >
          <img src={Logo} alt="" />
        </div>
        <div className="px-6 pt-6 md:pt-12  md:flex md:flex-col justify-center pr-16 ">
          <p className="  text-black md:py-4 max-w-md">Supporting city skin</p>
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
                <span className="text-sm">Discover the formulation </span>
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 30"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="  md:w-10/12 md:h-80 md:mb-32 ">
          <img src={Pic} class=" " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
