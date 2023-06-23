import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "Classic Burgers",
      },
      {
        id: 2,
        link: "Gourmet Burgers",
      },
      {
        id: 3,
        link: "Vegetarian Burger",
      },
      {
        id: 4,
        link: "Specialty Burgers",
      },
      {
        id: 5,
        link: "Burger Combos",
      },
      {
        id: 6,
        link: "Sides & Extras",
      },
      {
        id: 7,
        link: "Signature Sauces",
      },
      {
        id: 8,
        link: "Refreshing Beverages",
      },
      {
        id: 9,
        link: "Desserts",
      },
      {
        id: 10,
        link: "Catering Services",
      },
    ];
    
     
  return (
    <div>
      <div className="w-full md:h-11 font-bold hover:underline  cursor-pointer bg-neutral-900 text-white flex items-center justify-center text-sm  p-4 ">
        Introducing Click and Collect! Explore our burger menu, order with ease,
        and enjoy complimentary carbon-neutral shipping. &nbsp; +
      </div>
      <div
        className="relative md:px- place-content-end font-bold flex justify-left items-center w-full shadow-lg shadow-yellow-700 md:h-20 h-0  text-xs md:bg-yellow-950

 
 "
      >
        <ul className="invisible  md:visible md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="pl-7 cursor-pointer capitalize text-white">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="invisible md:visible w-6  h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <div className=" cursor-pointer pt-24  md:pr-5   md:pt-12 flex  	  text-sm font-bold text-white md:text-xs ">
          <p>Login</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Cabinet</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Cart</p>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="pt-24 cursor-pointer   pr-4 z-10 text-gray-300 md:hidden"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center  items-center  absolute top-0 left-0 w-full pt-20 h-auto bg-yellow-200 text-stone-900">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;