import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Python from "../assets/python.png";
import Java from "../assets/Java.png";
import MySql from "../assets/MySql.png";
const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-blue-900/10 to-primary-dark text-gray-300 relative overflow-hidden"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        <div className="animate-slideInLeft">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-600 to-blue-400 transition-all duration-300">
            Skills
          </p>
          <p className="py-4 text-text-secondary">
            {/* Technologies & Tools I've mastered */}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-12 stagger">
          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={Python}
              alt="Python"
            />
            <p className="font-semibold text-white">Python</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={Java}
              alt="Java"
            />
            <p className="font-semibold text-white">Java</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={JavaScript}
              alt="JavaScript"
            />
            <p className="font-semibold text-white">JavaScript</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={ReactImg}
              alt="React"
            />
            <p className="font-semibold text-white">React.js</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={HTML}
              alt="HTML"
            />
            <p className="font-semibold text-white">HTML5</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={CSS}
              alt="CSS"
            />
            <p className="font-semibold text-white">CSS3</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={MySql}
              alt="MySQL"
            />
            <p className="font-semibold text-white">MySQL</p>
          </div>

          <div className="skill-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gray-400/50 hover:bg-white/10 perspective">
            <img
              className="w-20 h-20 mx-auto mb-3 hover:scale-110 transition-transform"
              src={GitHub}
              alt="GitHub"
            />
            <p className="font-semibold text-white">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
