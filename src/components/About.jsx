import React from "react";
const About = () => {
  return (
    <div>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-primary-dark to-blue-900/20 text-gray-300 relative overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center w-full h-full relative z-10">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4 animate-slideInLeft">
              <p className="text-5xl font-bold inline border-b-4 border-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-600 to-blue-600 transition-all duration-300">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 stagger">
            <div className="sm:text-right text-3xl font-bold section-fade">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                Full-Stack Engineer | Cloud Architect | Problem Solver
              </p>
            </div>
            <div className="section-fade text-lg leading-relaxed">
              <p>
                I'm a Full-Stack Software Engineer with 5+ years building
                scalable web applications and cloud-native solutions. Currently
                at FocusKPI delivering enterprise features using React.js, Java
                Spring Boot, and AWS infrastructure.
              </p>
              <p className="mt-4">
                <strong>Specialties:</strong> React.js • Java Spring Boot • AWS
                Cloud • CI/CD • Performance Optimization • Machine Learning
                Integration
              </p>
              <p className="mt-4">
                <strong>Education:</strong> MS Computer Science (UT Arlington) •
                AWS Certified Cloud Practitioner
              </p>
              <p className="mt-4">
                When I'm not coding, I'm exploring new technologies,
                contributing to open source, or discussing the latest in cloud
                architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
