
import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState("home");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setShowMenu(false); // Close the menu after clicking a menu item
  };

  return (
    <div className="flex items-center justify-between shadow-md relative px-2 py-2 ">
      <img className="mx-auto  my-2" src={Logo} alt="Logo" style={{ width: "115px" }} />
      <div className="md:hidden " onClick={toggleMenu}>
        {!showMenu && (
          <svg
            className="w-6 h-6 cursor-pointer bg-slate-800 border rounded-md mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </div>

      {showMenu && (
        <div className="absolute top-3 right-2 md:hidden bg-slate-800 border right-2 rounded-md" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      )}

      <ul
        className={`nav-menu md:flex ${
          showMenu ? "block" : "hidden"
        } items-center md:items-stretch md:flex-rows`}
      >
        <li
          id="home"
          className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
            menu === "home" ? "text-orange-500 underline" : "text-white"
          }`}
          onClick={() => handleMenuClick("home")}
        >
          <AnchorLink className="anchor-link" href="#Home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li
          id="about"
          className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
            menu === "about" ? "text-orange-500 underline" : "text-white"
          }`}
          onClick={() => handleMenuClick("about")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li
          id="projects"
          className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
            menu === "projects" ? "text-orange-500 underline" : "text-white"
          }`}
          onClick={() => handleMenuClick("projects")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#Projects">
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li
          id="contact"
          className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
            menu === "contact" ? "text-orange-500 underline" : "text-white"
          }`}
          onClick={() => handleMenuClick("contact")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
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
