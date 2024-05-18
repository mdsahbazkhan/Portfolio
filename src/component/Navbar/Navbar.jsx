import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../assets/Logo.png'; // Adjust the path to your logo
import './navbar.css'; // Make sure to import the CSS file

const navItems = [
  { id: 'home', label: 'Home', href: '#Home' },
  { id: 'about', label: 'About', href: '#About' },
  { id: 'projects', label: 'Projects', href: '#Projects' },
  { id: 'contact', label: 'Contact', href: '#Contact' },
];

function DrawerAppBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const isClickingRef = useRef(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    isClickingRef.current = true;
    setCurrentSection(menuItem);
    setShowMenu(false);
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      if (isClickingRef.current) return;
      let debounceTimer;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            setCurrentSection(entry.target.id);
          }, 100);
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
    <div className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {showMenu && (
          <div className="offcanvas offcanvas-end show" tabindex="-1">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Offcanvas</h5>
              <button type="button" className="btn-close text-reset" onClick={toggleMenu} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a className={`nav-link ${currentSection === item.id ? 'active' : ''}`} onClick={() => handleMenuClick(item.id)}>
                      <AnchorLink href={item.href} offset={50}>{item.label}</AnchorLink>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DrawerAppBar;







