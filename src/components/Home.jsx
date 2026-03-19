import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const roleHeadlines = [
  "Full-Stack Developer (React • Spring Boot • AWS)",
  "Backend Software Developer",
  "Building Scalable APIs & Systems",
  "Cloud-Native Application Developer",
  "Performance & Scalability Focused",
  "Turning Ideas into Production Systems",
];

const Home = ({ scrollCallback }) => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roleHeadlines[roleIndex];
    let timer;

    if (!isDeleting && typedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roleHeadlines.length);
    } else {
      const speed = isDeleting ? 45 : 95;
      timer = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, roleIndex, isDeleting]);

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-hero relative overflow-hidden hero-glow pt-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="text-pink-600 text-2xl font-semibold animate-slideInLeft">
          Hi, my name is
        </p>
        <h1
          className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mt-2 animate-slideInLeft"
          style={{ animationDelay: "0.1s" }}
        >
          Sujitraj Thirumurthy
        </h1>
        <h2
          className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent mt-4 animate-slideInLeft"
          style={{ animationDelay: "0.2s" }}
          aria-live="polite"
        >
          {typedText}
          <span className="inline-block ml-1 text-pink-500 animate-pulse">
            |
          </span>
        </h2>
        <p
          className="text-[#cbd5e1] py-6 max-w-[700px] text-lg leading-relaxed animate-slideInLeft"
          style={{ animationDelay: "0.3s" }}
        >
          Building scalable applications with React.js, Spring Boot, and Cloud
          Architecture. AWS Certified | 5+ years crafting innovative solutions |
          Passionate about performance & user experience.
        </p>
        <div className="animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => scrollCallback()}
            className="text-white group border-2 border-pink-600 px-8 py-4 my-2 flex items-center rounded-lg hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-600/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <span className="group-hover:translate-x-2 group-hover:rotate-0 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
