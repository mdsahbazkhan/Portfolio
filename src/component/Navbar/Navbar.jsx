
import React, { useState,useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/Logo.png"; // Adjust the path to your logo
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import "./Navbar.css"
function Navbar() {
  const menuRef =useRef();
  const openMenu = ()=>{
    // menuRef.current.style.right="0";
    menuRef.current.classList.add('open');
  }
  const closeMenu = ()=>{
    // menuRef.current.style.right="350px";
    menuRef.current.classList.remove('open');
  }
  const navItems = [
    { id: "home", label: "Home", href: "#Home" },
    { id: "about", label: "About", href: "#About" },
    { id: "projects", label: "Projects", href: "#Projects" },
    { id: "contact", label: "Contact", href: "#Contact" },
  ];
  return (
    <div className="navbar fixed top-5 left-8 right-8 flex items-center justify-between border border-white border-opacity-10 rounded-lg py-2 px-3 lg:max-w-screen-md mx-auto  bg-opacity-5 shadow-md backdrop-blur-lg text-white z-50 ">
      <img src={Logo} alt="Logo" style={{ width: "130px" }} />
      <img src={menu_open}onClick={openMenu} alt="" className="nav-mob-open "/>

      <ul ref={menuRef} className="nav-menu   items-center list-none gap-4  font-semibold flex ">
        <img src={menu_close} onClick={closeMenu}alt="" className="nav-mob-close  "/>
        {navItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className="anchor-link bg-transparent "
              href={item.href}
              offset={50}
            >
              {item.label}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect md:flex items-center gap-4  ">
        {" "}
        <AnchorLink
          className="anchor-link text-white cursor-pointer font-extrabold transition duration-300 ease-in-out hover:scale-105 backdrop-blur-md bg-transparent rounded-md border border-white border-opacity-10  shadow-md  py-2 px-4 hover:shadow-xl  "
          offset={50}
          href="#Contact"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )}

export default Navbar;
