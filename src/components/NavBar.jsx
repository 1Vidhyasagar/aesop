import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links =[
        {
            id:1,
            link:'Skin Care'
        },
        {
            id:2,
            link:'Body & Hand'
        },
        {
            id:3,
            link:'Hair'
        },
        {
            id:4,
            link:'Fragrance'
        },
        {
            id:5,
            link:'Home'
        },
        {
            id:6,
            link:'Kits & Travel'
      },
       {
            id:7,
            link:'Gifts'
      },
    ]
    
     
  return (
    <div>
      <div className="w-full h-11 font-bold hover:underline  cursor-pointer bg-neutral-900 text-white flex items-center justify-center text-sm   ">
        Click and Collect is now available at select stores. Enjoy complimentary
        carbon neutral shipping on all orders. &nbsp; +
      </div>
      <div
        className=" flex justify-left items-center w-full h-14  text-sm bg-zinc-800
 "
      >
        <div></div>

        <ul className="invisible md:visible md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-5 cursor-pointer capitalize text-white hover:scale-125 duration-300"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

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