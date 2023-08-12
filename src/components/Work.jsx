// import React from "react";
// import { data } from "../data/data.js";

// const Work = () => {
//   // projects file
//   const project = data;
//   //setProject(data);

//   return (
//     <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
//             Projects 
//           </p>
//           <p className="py-6">// Check out some of my project's</p>
//         </div>

//         {/* container for projects */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {/* Gird Item */}
//           {project.map((item, index) => (
//             <div
//               key={index}
//               style={{ backgroundImage: `url(${item.image})`}}
//               className="shadow-lg shadow-[#040c16] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//             >
//               {/* Hover effect for images */}
//               <div className="opacity-0 group-hover:opacity-100 ">
//                 <span className="text-2xl font bold text-white tracking-wider ">
//                   {item.name}
//                 </span>
//                 <div className="pt-8 text-center ">
//                   {/* eslint-disable-next-line */}
//                   <a href={item.github} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold "
//                     >
//                       Code
//                     </button>
//                   </a>
//                   {/* eslint-disable-next-line */}
//                   {/* <a href={item.live} target="_blank">
//                     <button
//                       className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//                     >
//                       Live
//                     </button>
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;


import React from "react";
import { projects } from "../data/data";
import { CodeIcon } from "@heroicons/react/solid";
export default function Work() {
  return (
    <section name ="work" id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 text-green-400 hover:opacity-100">
                  {/* <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2> */}
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}