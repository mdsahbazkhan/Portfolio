import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto" src={Logo} alt="Logo" />
            <div className="hidden md:flex md:items-center md:space-x-8 ml-6">
              {navItems.map((item) => (
                <AnchorLink
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300"
                >
                  {item.name}
                </AnchorLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleDrawerToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 z-20">
          <div className="absolute top-16 right-0 w-full bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <AnchorLink
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                >
                  {item.name}
                </AnchorLink>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-gray-700">
              <AnchorLink
                href="#Contact"
                className="block w-full text-center px-5 py-3 rounded-md text-base font-medium bg-gradient-to-tr from-purple-600 to-orange-500 text-white hover:from-purple-700 hover:to-orange-600"
              >
                Connect With Me
              </AnchorLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;





