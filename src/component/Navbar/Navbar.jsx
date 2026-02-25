import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import "./Navbar.css";

function Navbar() {
  const menuRef = useRef();
  const [activeSection, setActiveSection] = useState("Home");

  const openMenu = () => menuRef.current.classList.add("open");
  const closeMenu = () => menuRef.current.classList.remove("open");

  const navItems = [
    { id: "Home", label: "Home", href: "#Home" },
    { id: "About", label: "About", href: "#About" },
    // { id: "Services", label: "Services", href: "#Services" },
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
    <div className="navbar fixed left-0 right-0 flex items-center justify-between max-w-full md:max-w-5xl mx-auto py-2 px-4 md:px-6 rounded-2xl mt-2 bg-gray-900/80 backdrop-blur-xl border border-purple-500/20 shadow-lg z-50">
      <div className="flex items-center gap-14">
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          Sahbaz Alam
        </span>
      </div>

      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="nav-mob-open cursor-pointer hover:scale-110 transition-transform invert"
      />

      <ul
        ref={menuRef}
        className="nav-menu items-center list-none gap-2 md:gap-4 font-semibold flex flex-col md:flex-row bg-gray-900/95 backdrop-blur-xl p-6 md:p-0 rounded-2xl md:rounded-none"
      >
        <div className="flex w-full justify-between items-center md:hidden mb-4">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sahbaz Alam
          </span>
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close cursor-pointer hover:scale-110 transition-transform invert"
          />
        </div>

        {navItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className={`anchor-link bg-transparent relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                activeSection === item.id
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
              href={item.href}
              offset={50}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
