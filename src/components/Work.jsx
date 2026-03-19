import React from "react";
import { projects } from "../data/data";
import { CodeIcon } from "@heroicons/react/solid";
export default function Work({ refProps }) {
  return (
    <section
      name="work"
      id="projects"
      className="text-gray-400 bg-gradient-to-b from-primary-dark to-blue-900/10 body-font relative py-20"
      ref={refProps}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 stagger">
          <CodeIcon className="mx-auto inline-block w-12 mb-4 text-pink-500 animate-bounce" />
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-text-secondary">
            Crafted with precision • Deployed at scale • Solving real-world
            problems
          </p>
        </div>
        <div className="flex flex-wrap m-4 justify-center stagger">
          {projects.map((project, idx) => (
            <div
              key={project.image}
              className="sm:w-1/2 w-full p-4 animation-stagger"
            >
              <div className="project-card overflow-hidden group">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="px-8 py-8 relative z-10 bg-gradient-to-b from-gray-900/50 to-gray-900 text-text-secondary group-hover:text-green-300 transition-colors duration-300">
                  <h1 className="title-font text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h1>
                  <p className="text-sm text-text-muted mb-3 font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>

                  {project.techStack?.length ? (
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-100 border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* CTA Buttons */}
                  {project.link && (
                    <div className="flex gap-3 justify-center mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-pink-600/80 hover:bg-pink-600 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
