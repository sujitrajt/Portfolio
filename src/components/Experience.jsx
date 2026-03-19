import React, { useState } from "react";
import { BriefcaseIcon, ChevronDownIcon } from "@heroicons/react/solid";

const experiences = [
  {
    role: "Software Developer",
    company: "FocusKPI, Inc",
    period: "Jun 2024 - Present",
    location: "United States",
    highlights: [
      "Delivered cross-layer features using React.js, Java Spring Boot, and MySQL for a Sports Management platform deployed on AWS, contributing to multiple core product modules.",
      "Engineered a template-driven Training Plan module with dynamic form logic, validation, and API mapping, enabling autopopulation of reusable plans and reducing manual setup time by 50% while improving data accuracy and workflow consistency.",
      "Optimized high-volume endpoints by implementing server-side pagination and database indexing, improving API response times by 35% and enhancing system throughput.",
      "Implemented a role-based Competition/Event approval workflow with lifecycle state controls, and admin notification triggers, reducing approval turnaround time by 30% and improving review visibility.",
      "Architected a reusable Media Management component to support multi-image operations, standardizing media handling patterns across modules and reducing code duplication.",
      "Revamped the Competition Results page layout and data presentation, significantly improving result visibility and user readability across competition records.",
    ],
  },
  {
    role: "Graduate Student Assistant",
    company: "The University of Texas at Arlington",
    period: "Oct 2021 - May 2023",
    location: "Arlington, TX",
    highlights: [
      "Maintained and updated the university parking services website, managing permit information, policy updates, and announcements to ensure accurate, timely user access and contributing to a 10% increase in organic site visits.",
      "Built small automation scripts to process and validate Excel inventory data, reducing manual reconciliation effort and improving record accuracy.",
    ],
  },
  {
    role: "Application Development Associate",
    company: "Accenture Solutions",
    period: "Aug 2018 - Aug 2019",
    location: "India",
    highlights: [
      "Developed distinct UI theme profiles for five Accenture operating groups based on client login credentials using React with TypeScript.",
      "Engineered and optimized a Visitor dashboard component, presenting meeting and logistics information for scheduled clients at Accenture locations, resulting in a 15% reduction in visitor-related inquiries and an enhanced experience.",
      "Built and deployed a real-time push notification system, delivering automated alerts to visiting clients about their scheduled meetings, resulting in a 40% reduction in missed appointments and improved client engagement.",
      "Revamped the application to ensure mobile compatibility, utilizing Bootstrap and CSS media queries and improved engagement by 10%.",
    ],
  },
];

const Experience = () => {
  // Only the first (most recent) role is expanded by default
  const [expandedIdx, setExpandedIdx] = useState(new Set([0]));

  const toggle = (idx) => {
    setExpandedIdx((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-primary-dark to-blue-900/10 text-gray-300 py-24"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <BriefcaseIcon className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-world delivery across product engineering, cloud-native
            systems, and cross-functional collaboration.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-pink-500/70 via-blue-500/70 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((item, idx) => {
              const isOpen = expandedIdx.has(idx);
              return (
                <article
                  key={`${item.company}-${item.role}`}
                  className={`relative card-glass md:w-[47%] ${
                    idx % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  }`}
                >
                  <span className="absolute -left-1 top-8 h-4 w-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 md:left-auto md:right-[-10px]" />

                  {/* Clickable header */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-start justify-between gap-3 group"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-sm text-blue-300 font-semibold">
                        {item.period}
                      </p>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {item.role}
                      </h3>
                      <p className="text-pink-300 font-semibold mt-1">
                        {item.company}
                      </p>
                      <p className="text-text-muted text-sm mt-1">
                        {item.location}
                      </p>
                    </div>

                    <ChevronDownIcon
                      className={`w-5 h-5 mt-2 flex-shrink-0 text-pink-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Collapsible highlights — grid-rows trick for smooth height animation */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="px-6 pb-6 space-y-2 text-text-secondary text-sm leading-relaxed">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-pink-400 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
