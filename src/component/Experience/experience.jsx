"use client";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Kognito Kube Private Limited",
      companyLink: "https://kognitokube.com/",
      duration: "April 2025 – May 2025",
      techStack: ["Next.js", "Redux", "Tailwind CSS", "Git", "GitHub"],
      description: [
        "Developed responsive web pages using React.js and Tailwind CSS.",
        "Integrated REST APIs and improved performance of existing features.",
        "Collaborated with team members using Git and Agile practices.",
      ],
    },
  ];

  return (
    <section
      id="Experiences"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12  text-purple-800 dark:text-purple-500 text-center md:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-900 dark:border-purple-500 ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 pl-8 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Circle */}
              <span className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gray-800 dark:bg-purple-500 border-2 border-white ml-6"></span>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-purple-300 mb-1">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 ">
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-gray-900 dark:hover:text-purple-400 underline"
                >
                  {exp.company}
                </a>{" "}
                • {exp.duration}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-gray-800 dark:text-purple-300">
                  Tech Stack:
                </span>{" "}
                {exp.techStack.join(", ")}
              </p>
              <ul className="list-disc list-inside text-gray-100 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
