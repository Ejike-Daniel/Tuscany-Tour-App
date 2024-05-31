import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

// import LanguageSelector from "./LanguageSelector";

// eslint-disable-next-line react/prop-types
const Navbar = ({ hideNav }) => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Tour Packages", path: "/tour" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className=" bg-white text-white font-roboto bg-opacity-20 lg:bg-transparent lg:backdrop-blur-0 backdrop-filter backdrop-blur-lg border border-lightGray border-opacity-30  py-4 lg:py-2 px-6 flex  items-center justify-between lg:flex-row">
      <div className=" w-12 md:w-16">
        <img src={logo} alt={logo} />
      </div>
      <nav
        className={`${
          hideNav ? "hidden" : " flex gap-5"
        } py-8 md:py-0  md:block  gap-12  fle  flex-col lg:flex-row justify-center items-center `}
      >
        <div>
          <ul className="flex flex-col lg:flex-row  justify-between items-center gap-4">
            {navlinks.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  // className={({ isActive }) =>
                  //   isActive
                  //     ? " md:bg-lightTan text-midnight px-6  md:py-[1.39rem] lg:py-[1.45rem] "
                  //     : " hover:text-midnight"
                  // }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex  flex-col lg:flex-row gap-4 items-center">
          <div className=" cursor-pointer flex items-center gap-1 text-lightGray text-opacity-60 ">
            <span>Eng</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548a1.11 1.11 0 011.536 0L10 10.495l2.948-2.947a1.11 1.11 0 111.536 1.536l-3.764 3.764a1.11 1.11 0 01-1.536 0L5.516 9.084a1.11 1.11 0 010-1.536z" />
            </svg>
          </div>
          <div className=" flex flex-col lg:flex-row  gap-4 items-center">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
      <button
        className=" cursor-pointer text-3xl text-white font-semibold "
        onClick={toggleMenu}
      >
        {isHidden ? <RiMenu2Line /> : <IoClose />}
      </button>
    </div>
  );
};

export default Navbar;
