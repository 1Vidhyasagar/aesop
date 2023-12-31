import React from "react";
import Logo from "../download/logo.jpg";
import Pic from "../download/pic.jpg";


const Home = () => {
  return (
    <div
      name="home"
      className="md: md:place-content-center md:h-screen  w-full  bg-yellow-100 h-screen pt-5
 text-black text-left font-sans "
    >
      <div
        className="	 absolute  md:invisible  w-20   cursor-pointer md:mb-56 md:ml-6 
        "
      >
        <img src={Logo} alt="" />
      </div>
      <div className="  flex flex-col-reverse items-center justify-center  md:flex-row overflow-hidden">
        <div
          className="invisible md:visible  w-28   cursor-pointer md:mb-56 ml-6  md:w-64
        "
        >
          <img src={Logo} alt="" />
        </div>
        <div className="px-6 pt-6 md:pt-1  md:flex md:flex-col justify-center pr-16 ">
          <p className="  text-yellow-950 md:py-2 max-w-md">
            Welcome to Burger
          </p>
          <p className="text-2xl   text-yellow-600 ">
            Burger bonanza! Explore the endless varieties now.
          </p>
          <p className="  font-medium text-yellow-950  py-2 max-w-md ">
            Burger perfection awaits! Savor our gourmet patties with premium
            ingredients and tantalizing toppings. Experience the ultimate flavor
            adventure and satisfy your cravings today!
          </p>

          <div className="pt-10">
            <a
              href="https://dictionary.cambridge.org/dictionary/english/burger"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-neutral-900 text-black h-12 hover:text-white  w-11/12 px-3 flex items-center border-2  border-gray-300  cursor-pointer ">
                <span className="text-sm">Discover the Offer </span>
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 30"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-6 h-6"
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
        <div className="  	 md:w-10/12  md:h-80 ">
          <img
            src={Pic}
            class="rounded-tl-full  shadow-2xl shadow-yellow-900"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
