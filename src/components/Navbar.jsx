import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-color.png";
import ResumePDF from "../images/sujitraj_Resume.pdf";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    if (nav) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const stored = document.body.dataset.scrollY || "0";
      const scrollY = Number.parseInt(stored, 10) || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    }

    return () => {
      const stored = document.body.dataset.scrollY || "0";
      const scrollY = Number.parseInt(stored, 10) || 0;
      window.scrollTo(0, scrollY);
      delete document.body.dataset.scrollY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [nav]);

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
    <>
      <div className="fixed top-0 left-0 right-0 h-[80px] flex justify-between items-center bg-primary-dark/80 backdrop-blur-lg border-b border-white/10 text-gray-300 z-[200] shadow-lg shadow-black/30">
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
          <li>
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-pink-500 text-pink-400 text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={handleClick}
          className="md:hidden pr-4 text-2xl z-[220] cursor-pointer hover:text-pink-500 transition-colors"
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Mobile Backdrop + Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[205] transition-opacity duration-300 ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={handleClick}
          aria-label="Close menu backdrop"
          className="absolute inset-0 bg-black/70"
        />

        <aside className="absolute top-0 right-0 h-full w-[82%] max-w-[340px] bg-[#0a192f] border-l border-white/10 shadow-2xl overflow-y-auto">
          <button
            onClick={handleClick}
            aria-label="Close mobile menu"
            className="absolute top-5 right-5 text-2xl text-white hover:text-pink-500 transition-colors"
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col pt-24 items-start px-8">
            {navLinks.map((link, idx) => (
              <li
                key={link.to}
                className="py-5 text-2xl font-semibold w-full"
                style={{ animationDelay: `${idx * 0.08}s` }}
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
            <li className="py-6 w-full">
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="inline-block px-6 py-3 rounded-full border border-pink-500 text-pink-400 text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};
export default Navbar;
