import { useState } from "react";
import MyImage from "../assets/Dhanush.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Link } from "react-scroll"

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="fixed max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md bg-sky-300 top-0 right-0 left-0 z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={MyImage}
              className="h-[64px] w-[64px] rounded-full"
              alt="Dhanush"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              <u>
                <span className="text-red-500 text-2xl">R</span>ANJA
                <span className="text-red-500 text-2xl">Y</span>
              </u>
              <p>Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-10">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to ={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">{text}</Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div >
            <ul className="md:hidden flex flex-col items-center justify-center space-y-3 text:xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                 <Link onClick={() => setMenu(!menu)}
                  to  ={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">{text}</Link>   
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
