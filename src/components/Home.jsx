import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = ({ scrollCallback }) => {
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
        >
          Full-Stack Software Engineer
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
