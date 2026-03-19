import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ResumePDF from "../images/sujitraj_Resume.pdf";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-dark/95 border-t border-white/10 text-gray-300">
      <div className="max-w-[1000px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="text-sm text-text-secondary">
            © {year} Sujitraj Thirumurthy. All rights reserved.
          </p>
          <p className="text-xs text-text-muted mt-1">
            Built with React, Tailwind CSS, and a lot of coffee.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sujitraj-thirumurthy-33811913a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/sujitrajt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:sujitrajt@gmail.com"
            aria-label="Email"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-pink-400 hover:text-pink-300 transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-pink-500 text-pink-300 text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
