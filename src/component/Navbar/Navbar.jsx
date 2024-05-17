// import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [menu, setMenu] = useState("home");

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleMenuClick = (menuItem) => {
//     setMenu(menuItem);
//     setShowMenu(false); // Close the menu after clicking a menu item
//   };

//   return (
//     <div className="flex items-center justify-between shadow-md relative px-2 py-2 ">
//       <img className="mx-auto  my-2" src={Logo} alt="Logo" style={{ width: "115px" }} />
//       <div className="md:hidden " onClick={toggleMenu}>
//         {!showMenu && (
//           <svg
//             className="w-6 h-6 cursor-pointer bg-slate-800 border rounded-md mr-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         )}
//       </div>

//       {showMenu && (
//         <div className="absolute top-3 right-2 md:hidden bg-slate-800 border right-2 rounded-md" onClick={toggleMenu}>
//           <svg
//             className="w-6 h-6 cursor-pointer"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </div>
//       )}

//       <ul
//         className={`nav-menu md:flex ${
//           showMenu ? "block" : "hidden"
//         } items-center md:items-stretch md:flex-rows`}
//       >
//         <li
//           id="home"
//           className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
//             menu === "home" ? "text-orange-500 underline" : "text-white"
//           }`}
//           onClick={() => handleMenuClick("home")}
//         >
//           <AnchorLink className="anchor-link" href="#Home">
//             <p>Home</p>
//           </AnchorLink>
//         </li>
//         <li
//           id="about"
//           className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
//             menu === "about" ? "text-orange-500 underline" : "text-white"
//           }`}
//           onClick={() => handleMenuClick("about")}
//         >
//           <AnchorLink className="anchor-link" offset={50} href="#About">
//             <p>About Me</p>
//           </AnchorLink>
//         </li>
//         <li
//           id="projects"
//           className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
//             menu === "projects" ? "text-orange-500 underline" : "text-white"
//           }`}
//           onClick={() => handleMenuClick("projects")}
//         >
//           <AnchorLink className="anchor-link" offset={50} href="#Projects">
//             <p>Projects</p>
//           </AnchorLink>
//         </li>
//         <li
//           id="contact"
//           className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${
//             menu === "contact" ? "text-orange-500 underline" : "text-white"
//           }`}
//           onClick={() => handleMenuClick("contact")}
//         >
//           <AnchorLink className="anchor-link" offset={50} href="#Contact">
//             <p>Contact</p>
//           </AnchorLink>
//         </li>
//       </ul>

//       <div
//         className={`md:flex ${
//           showMenu ? "block" : "hidden"
//         } items-center md:items-stretch md:flex-rows mx-auto my-2 px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105`}
//       >
//         <AnchorLink className="anchor-link" offset={50} href="#Contact">
//           Connect With Me
//         </AnchorLink>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../assets/Logo.png'; // Adjust the path to your logo

const navItems = [
  { id: 'home', label: 'Home', href: '#Home' },
  { id: 'about', label: 'About', href: '#About' },
  { id: 'projects', label: 'Projects', href: '#Projects' },
  { id: 'contact', label: 'Contact', href: '#Contact' },
];

function DrawerAppBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    setCurrentSection(menuItem);
    setShowMenu(false);
  };

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <header className="fixed top-0 left-0 w-full z-10 bg-gray-950 shadow-md">
        <nav className=" p-1 flex items-center justify-between  relative mx-auto">
          <img className="mx-auto my-2" src={Logo} alt="Logo" style={{ width: '115px' }} />
          <div className="flex items-center md:hidden " onClick={toggleMenu}>
            {!showMenu ? (
              <svg
                className="w-6 h-6 cursor-pointer bg-slate-900 border right-2 rounded-md mr-1 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 cursor-pointer absolute top-2 right-2 bg-slate-900 border rounded-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleMenu}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </div>
          <ul className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              currentSection !== item.id && (
                <li
                  key={item.id}
                  className={`px-4 py-2 duration-200 font-extrabold cursor-pointer ${
                    currentSection === item.id ? 'text-orange-500 underline' : 'text-white'
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <AnchorLink className="anchor-link" href={item.href} offset={50}>
                    {item.label}
                  </AnchorLink>
                </li>
              )
            ))}
          </ul>
          <div
            className="hidden md:flex items-center md:items-stretch ml-auto my-2 px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105 mx-auto"
          >
            <AnchorLink className="anchor-link" offset={50} href="#Contact">
              Connect With Me
            </AnchorLink>
          </div>
        </nav>
      </header>
      {showMenu && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-50 z-20 md:hidden"
          onClick={toggleMenu}
        >
          <div className="fixed top-0 left-0 w-60 h-full  
           bg-gray-950 shadow-md z-30">
            <div className="text-center" onClick={toggleMenu}>
              <img className="mx-auto my-2 p-1" src={Logo} alt="Logo" style={{ width: '115px' }} />
              <hr className="border-gray-200" />
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={`px-4 py-2 duration-200 font-extrabold cursor-pointer ${
                      currentSection === item.id ? 'text-orange-500 underline' : 'text-white'
                    }`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <AnchorLink className="anchor-link" href={item.href} offset={50}>
                      {item.label}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
              <div
                className="flex items-center justify-center my-2 px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105"
              >
                <AnchorLink className="anchor-link" offset={50} href="#Contact">
                  Connect With Me
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default DrawerAppBar;




