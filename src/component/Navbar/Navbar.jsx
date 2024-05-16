import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    setActiveItem(menuItem);
    setShowMenu(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between shadow-md bg-gray-800 px-4 py-2">
        <img className="w-28" src={Logo} alt="Logo" />
        <div className="md:hidden" onClick={toggleMenu}>
          {!showMenu ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </div>
        <ul className={`md:flex ${showMenu ? "block" : "hidden"} md:flex-row`}>
          <li
            className={`px-4 py-2 font-extrabold cursor-pointer ${
              activeItem === "home" ? "text-orange-500 underline" : "text-white"
            }`}
            onClick={() => handleMenuClick("home")}
          >
            <AnchorLink href="#Home" className="block">
              Home
            </AnchorLink>
          </li>
          <li
            className={`px-4 py-2 font-extrabold cursor-pointer ${
              activeItem === "about" ? "text-orange-500 underline" : "text-white"
            }`}
            onClick={() => handleMenuClick("about")}
          >
            <AnchorLink href="#About" className="block">
              About Me
            </AnchorLink>
          </li>
          <li
            className={`px-4 py-2 font-extrabold cursor-pointer ${
              activeItem === "projects" ? "text-orange-500 underline" : "text-white"
            }`}
            onClick={() => handleMenuClick("projects")}
          >
            <AnchorLink href="#Projects" className="block">
              Projects
            </AnchorLink>
          </li>
          <li
            className={`px-4 py-2 font-extrabold cursor-pointer ${
              activeItem === "contact" ? "text-orange-500 underline" : "text-white"
            }`}
            onClick={() => handleMenuClick("contact")}
          >
            <AnchorLink href="#Contact" className="block">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className={`md:flex ${showMenu ? "block" : "hidden"} items-center justify-center py-3 bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105`}>
        <AnchorLink href="#Contact" className="block px-5">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;


