import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

const certifications = [
  {
    title: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    issued: "Issued 2024",
    skills: ["Python", "Generative Model"],
    credentialText: "Show credential",
    credentialUrl:
      "https://learn.deeplearning.ai/accomplishments/334ef5c3-f3d1-4579-9444-97b7257fd96c?usp=sharing",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    issued: "Issued 2024",
    skills: ["Artificial Intelligence (AI)", "Prompt Engineering", "GenAI"],
    credentialText: "Show credential",
    credentialUrl:
      "https://learn.deeplearning.ai/accomplishments/f202ddc7-15ef-4f40-9c38-414fac95aadf?usp=sharing",
  },
  {
    title: "Go: The Complete Developer's Guide (Golang)",
    issuer: "Udemy",
    issued: "Issued Oct 2024",
    skills: ["Go (Programming Language)"],
    credentialText: "Show credential",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-78632980-4cfd-4890-8a75-5b765793e7cd.jpg",
  },
  {
    title: "Amazon Web Services Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Jun 2024",
    expires: "Expires Jun 2027",
    skills: ["AWS Cloud", "Cloud Fundamentals"],
    credentialText: "Show credential",
    credentialUrl:
      "https://www.credly.com/badges/0ab88e08-29f6-42ab-aa9d-5cf0ee97e0df/public_url",
  },
  {
    title: "Amazon Web Services Cloud Practitioner",
    issuer: "Udemy",
    issued: "Issued 2024",
    skills: ["AWS Cloud", "Certification Preparation"],
    credentialText: "Show credential",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d792377e-d25e-4145-b74e-981c1019e259.pdf",
  },
];

const Certifications = () => {
  return (
    <section
      name="certifications"
      className="w-full bg-gradient-to-b from-primary-dark to-blue-900/10 text-gray-300 py-24"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <AcademicCapIcon className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional certifications focused on AI, cloud, and backend
            engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <article
              key={`${cert.title}-${cert.issuer}`}
              className="card-glass p-6 hover-lift"
            >
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-pink-300 font-semibold mt-1">{cert.issuer}</p>

              <p className="text-sm text-blue-300 mt-3">{cert.issued}</p>
              {cert.expires ? (
                <p className="text-sm text-text-muted mt-1">{cert.expires}</p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-pink-200 font-medium hover:text-white underline underline-offset-4"
              >
                {cert.credentialText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
