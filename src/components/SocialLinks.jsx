import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../images/sujitraj_Resume.pdf";

const SocialLinks = () => {
  const handleRes = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sujitraj-Thirumurthy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <ul className="flex flex-col gap-2 pr-3">
        <li>
          <a
            className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform duration-300"
            href="https://www.linkedin.com/in/sujitraj-thirumurthy-33811913a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </li>

        <li>
          <a
            className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-700 text-white shadow-lg shadow-gray-700/40 hover:scale-110 transition-transform duration-300"
            href="https://github.com/sujitrajt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </li>

        <li>
          <a
            className="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 hover:scale-110 transition-transform duration-300"
            href="mailto:sujitrajt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email"
          >
            <HiOutlineMail size={22} />
          </a>
        </li>

        <li>
          <button
            onClick={handleRes}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-pink-600 text-white shadow-lg shadow-pink-600/40 hover:scale-110 transition-transform duration-300"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <BsFillPersonLinesFill size={22} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
