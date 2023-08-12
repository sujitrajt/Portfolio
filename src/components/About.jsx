import React from "react";
const About = () => {
  return (
    <div>
      <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Sujitraj Thirumurthy, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                Hello! I'm Sujitraj Thirumurthy, a tech enthusiast skilled in
                Java, Python, and web technologies like ReactJS and Flask. My
                experience spans projects like the Accenture Explorer
                Application and diving into sorting algorithm efficiencies. With
                a Master's in Computer Science from The University of Texas at
                Arlington and a Bachelor's from Anna University, I'm on a
                mission to fuse creativity with technology. Let's connect at
                sujitrajt@gmail.com or LinkedIn to collaborate and innovate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
