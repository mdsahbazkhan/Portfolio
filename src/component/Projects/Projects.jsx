import { useState } from "react";
import { motion } from "framer-motion";
import project_data from "../../assets/project_data";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 " id="Projects">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8  text-purple-800 dark:text-purple-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {project_data.map((project, index) => (
          <div
            key={project.p_no}
            className="border border-gray-300 rounded-xl  shadow-md"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span className=" dark:text-gray-300 ">{project.p_name}</span>
              <span className="text-gray-600">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {/* Accordion Body */}
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 space-y-3">
                <img
                  src={project.p_img}
                  alt={project.p_name}
                  className="w-full max-h-60 object-contain rounded-lg mx-auto"
                />

                <p className="text-gray-900 dark:text-gray-300 py-2">
                  {project.p_desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.p_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.p_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
