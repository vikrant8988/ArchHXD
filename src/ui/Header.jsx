// React
import { useState } from "react";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SiVorondesign } from "react-icons/si";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const activeMenuLink = "text-red-800";
  const menuLiStyle = `w-full text-center rounded-md py-4 
                      flex justify-center gap-4 items-center
                      hover:bg-blue-100 hover:text-blue-600  hover:bg-opacity-5
                      hover:border hover:outline-none
                      hover:shadow-[0_0_10px_#60a5fa] hover:border-blue-400`;
  const navStyle = `bg-violet-700 text-white py-4 px-8 rounded-[2rem] 
                    inline-block border-2 transition-all duration-100`;

  return (
    <header
      className=" w-full flex items-center
         justify-between py-7 mx-auto px-10
        text-stone-600
        text-2xl
        h-24
        border-b
         font-semibold
         hover:shadow-hcbs
         transition-shadow
         duration-300
         z-10
         shadow-cbs
         "
    >
      <Link to="/" className="cursor-default">
        Vison Arch.
      </Link>

      <nav>
        <ul
          className="hidden sm:flex items-center
         gap-10 lg:gap-12 text-[1.4rem]
         "
        >
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? navStyle : "";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => {
              return isActive ? navStyle : "";
            }}
          >
            About
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) => {
              return isActive ? navStyle : "";
            }}
          >
            Services
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => {
              return isActive ? navStyle : "";
            }}
          >
            Contact
          </NavLink>
        </ul>
        <HiMenuAlt3
          size={30}
          className="block sm:hidden cursor-pointer text-stone-800"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block sm:hidden w-full fixed 
                    ${!showMobileMenu ? "-top-[410px]" : "top-0"} 
                    left-0 bg-[#dde0e5] h-[300px]
                    transition-all duration-[800ms] shadow-xl
                    z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul
            className="pt-8
           w-full items-center flex flex-col gap-8"
          >
            <NavLink to="/" className={menuLiStyle}>
              <AiOutlineHome />
              Home
            </NavLink>

            <NavLink to="/" className={menuLiStyle}>
              <SiVorondesign />
              Services
            </NavLink>

            <NavLink to="about" className={menuLiStyle}>
              <AiOutlineInfoCircle />
              About
            </NavLink>

            <NavLink to="contact" className={menuLiStyle}>
              <AiOutlineMail />
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
