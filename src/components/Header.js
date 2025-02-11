import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import innerLogo from '../assests/inner-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="fixed w-full bg-white drop-shadow-md text-blue-950 z-50">
      <div className="flex justify-between items-center p-4 lg:px-10 lg:flex-row flex-wrap">
        <Link to="/">
          <img
            className={`transition-all duration-300 ${isScrolled ? "w-32" : "w-40"}`}
            src={innerLogo}
            alt="Gyoverseaseducation"
          />
        </Link>
        <button
          className="lg:hidden text-blue-950"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className={`lg:flex justify-end items-center w-full lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="menu menu-horizontal px-4 text-lg lg:flex lg:space-x-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="relative" onMouseEnter={() => toggleDropdown("services")} onMouseLeave={closeDropdowns}>
              <button className="flex items-center">Services <span className="ml-1">▼</span></button>
              {activeDropdown === "services" && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg p-2 w-64 z-50">
                  <li><Link to="/services">Counseling</Link></li>
                  <li><Link to="/services">University Selection</Link></li>
                  <li><Link to="/services">SOP and Documentation</Link></li>
                  <li><Link to="/services">Visa Assistance</Link></li>
                  <li><Link to="/services">Scholarship Assistance</Link></li>
                  <li><Link to="/services">Forex</Link></li>
                  <li><Link to="/services">Other Services</Link></li>
                </ul>
              )}
            </li>
            <li className="relative" onMouseEnter={() => toggleDropdown("countries")} onMouseLeave={closeDropdowns}>
              <button className="flex items-center">Countries <span className="ml-1">▼</span></button>
              {activeDropdown === "countries" && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg p-2 w-48 z-50">
                  <li><Link to="/countries">UK</Link></li>
                  <li><Link to="/countries">Ireland</Link></li>
                  <li><Link to="/countries">USA</Link></li>
                  <li><Link to="/countries">Canada</Link></li>
                  <li><Link to="/countries">Australia</Link></li>
                  <li><Link to="/countries">New Zealand</Link></li>
                  <li><Link to="/countries">Asia</Link></li>
                  <li><Link to="/countries">Europe</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/russiambbs">Russia MBBS</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;