import React, { useState } from "react";
import Logo from "../assets/logo-color.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Certifications", to: "certifications" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-primary-dark/80 backdrop-blur-lg border-b border-white/10 text-gray-300 z-50 shadow-lg shadow-black/30">
      {/* Logo */}
      <div className="hover:scale-110 transition-transform duration-300">
        <img src={Logo} alt="Logo" className="w-16 ml-4" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.to} className="group cursor-pointer">
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              className="nav-link text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden pr-4 text-2xl z-50 cursor-pointer hover:text-pink-500 transition-colors"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav ? "hidden" : "flex"
        } absolute top-0 left-0 w-full h-screen bg-primary-dark/95 backdrop-blur-xl flex-col justify-start pt-20 items-center transition-all duration-300 z-40`}
      >
        {navLinks.map((link, idx) => (
          <li
            key={link.to}
            className="py-6 text-3xl font-semibold"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <Link
              onClick={handleClick}
              to={link.to}
              smooth={true}
              duration={500}
              className="hover:text-pink-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
