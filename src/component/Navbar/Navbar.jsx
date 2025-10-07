import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import "./Navbar.css";
import ModeButton from "../modeButton";
import PropTypes from "prop-types";

function Navbar({ darkMode, toggleMode }) {
  const menuRef = useRef();
  const [activeSection, setActiveSection] = useState("Home");

  const openMenu = () => menuRef.current.classList.add("open");
  const closeMenu = () => menuRef.current.classList.remove("open");

  const navItems = [
    { id: "Home", label: "Home", href: "#Home" },
    { id: "About", label: "About", href: "#About" },
    { id: "Skills", label: "Skills", href: "#Skills" },
    { id: "Experiences", label: "Experiences", href: "#Experiences" },
    { id: "Projects", label: "Projects", href: "#Projects" },
    { id: "Contact", label: "Contact", href: "#Contact" },
  ];

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar fixed  left-0 right-0 flex items-center justify-between border border-white border-opacity-10 rounded-lg py-3 px-3 lg:max-w-screen-md mx-auto bg-opacity-5 shadow-md backdrop-blur-lg text-white z-50">
      <div className="flex items-center gap-14">
        <span className="text-2xl font-bold text-purple-800 dark:text-purple-500 hover:scale-105 transition">
          Sahbaz Alam
        </span>
      </div>

      {/* Desktop ModeButton */}

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul
        ref={menuRef}
        className="nav-menu items-center list-none gap-4 font-semibold flex flex-col md:flex-row"
      >
        <div className="flex w-full justify-between items-center md:hidden">
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close"
          />
          <ModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </div>

        {navItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className={`anchor-link bg-transparent relative transition duration-300 hover:scale-105 hover:text-purple-500 ${
                activeSection === item.id
                  ? "text-purple-400 scale-110"
                  : "text-white"
              }`}
              href={item.href}
              offset={50}
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-purple-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </AnchorLink>
          </li>
        ))}
        <div className="hidden md:block">
          <ModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </div>
      </ul>
    </div>
  );
}
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
