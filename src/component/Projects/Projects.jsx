import { useState } from "react";
import { motion } from "framer-motion";
import project_data from "../../assets/project_data";
import { FaGithub, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6" id="Projects">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <p className="text-gray-400">Click to explore my work</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {project_data.map((project, index) => (
          <motion.div
            key={project.p_no}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-200 group-hover:text-purple-400 transition-colors">
                  {project.p_name}
                </span>
              </div>
              <span
                className={`text-purple-400 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {/* Accordion Body */}
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 text-gray-300 space-y-4"
              >
                <p className="text-gray-300 py-2 leading-relaxed">
                  {project.p_desc}
                </p>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-purple-400 font-semibold mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4">
                  {project.p_href && project.p_href !== "#" && (
                    <a
                      href={project.p_href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {project.p_github && project.p_github !== "#" && (
                    <a
                      href={project.p_github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gray-700 text-white text-sm rounded-xl hover:bg-gray-600 transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
