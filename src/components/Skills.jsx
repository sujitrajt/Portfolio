import React, { useState } from "react";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillCategories = [
  {
    label: "Languages",
    tabActive: "bg-pink-500/10 text-pink-400 border border-pink-500/50",
    cardHover: "hover:border-pink-500/50",
    skills: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
      { name: "Go", icon: `${DEVICON}/go/go-original.svg` },
      {
        name: "JavaScript",
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
      {
        name: "TypeScript",
        icon: `${DEVICON}/typescript/typescript-original.svg`,
      },
    ],
  },
  {
    label: "Frontend",
    tabActive: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50",
    cardHover: "hover:border-cyan-500/50",
    skills: [
      { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "Redux Toolkit", icon: `${DEVICON}/redux/redux-original.svg` },
      {
        name: "Bootstrap",
        icon: `${DEVICON}/bootstrap/bootstrap-original.svg`,
      },
      {
        name: "Material UI",
        icon: `${DEVICON}/materialui/materialui-original.svg`,
      },
    ],
  },
  {
    label: "Backend",
    tabActive: "bg-green-500/10 text-green-400 border border-green-500/50",
    cardHover: "hover:border-green-500/50",
    skills: [
      { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg` },
      { name: "Flask", icon: `${DEVICON}/flask/flask-original.svg` },
      { name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
      { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    label: "Database",
    tabActive: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/50",
    cardHover: "hover:border-yellow-500/50",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      {
        name: "Amazon RDS",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
    ],
  },
  {
    label: "Cloud & DevOps",
    tabActive: "bg-orange-500/10 text-orange-400 border border-orange-500/50",
    cardHover: "hover:border-orange-500/50",
    skills: [
      {
        name: "AWS EC2",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      {
        name: "AWS S3",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      {
        name: "AWS Lambda",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      {
        name: "AWS ECS / ECR",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      {
        name: "CloudWatch",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      {
        name: "IAM",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
  {
    label: "Tools & Testing",
    tabActive: "bg-purple-500/10 text-purple-400 border border-purple-500/50",
    cardHover: "hover:border-purple-500/50",
    skills: [
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
      { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
      { name: "Jira", icon: `${DEVICON}/jira/jira-original.svg` },
      {
        name: "BitBucket",
        icon: `${DEVICON}/bitbucket/bitbucket-original.svg`,
      },
      { name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "PyTest", icon: `${DEVICON}/pytest/pytest-original.svg` },
      { name: "JUnit", icon: `${DEVICON}/java/java-original.svg` },
    ],
  },
];

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const category = skillCategories[activeIdx];

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-blue-900/10 to-primary-dark text-gray-300 relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col justify-center w-full relative z-10">
        {/* Heading */}
        <div className="animate-slideInLeft">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-600 to-blue-400 transition-all duration-300">
            Skills
          </p>
          <p className="py-4 text-text-secondary">
            Technologies & tools I work with
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveIdx(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeIdx === i
                  ? cat.tabActive
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards — key forces re-mount so CSS animation replays on tab switch */}
        <div
          key={activeIdx}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 skills-fade-in"
        >
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center p-5 rounded-xl bg-white/5 border border-white/10 ${category.cardHover} hover:bg-white/10 transition-all duration-300 group cursor-default`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-3 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <p className="text-sm font-semibold text-white text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Footer count */}
        <p className="mt-6 text-xs text-gray-500 text-right">
          {category.skills.length} {category.label} skills
        </p>
      </div>
    </div>
  );
};

export default Skills;
