import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "Skin Care",
      },
      {
        id: 2,
        link: "Body & Hand",
      },
      {
        id: 3,
        link: "Hair",
      },
      {
        id: 4,
        link: "Fragrance",
      },
      {
        id: 5,
        link: "Home",
      },
      {
        id: 6,
        link: "Kits & Travel",
      },
      {
        id: 7,
        link: "Gifts",
      },
      {
        id: 7,
        link: "Read",
      },
      {
        id: 7,
        link: "Stores",
      },
      {
        id: 7,
        link: "Facial Appointments",
      },
    ];
    
     
  return (
    <div>
      <div className="w-full md:h-11 font-bold hover:underline  cursor-pointer bg-neutral-900 text-white flex items-center justify-center text-sm  p-4 ">
        Click and Collect is now available at select stores. Enjoy complimentary
        carbon neutral shipping on all orders. &nbsp; +
      </div>
      <div
        className=" font-bold flex justify-left items-center w-full h-20  text-xs md:bg-zinc-800   pl-5
 "
      >
        <ul className="invisible md:visible md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="pl-6 cursor-pointer capitalize text-white">
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
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <div className="flex  font-bold text-white text-xs md:pl-56">
          <p>Log in</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Cabinet</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Cart</p>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
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