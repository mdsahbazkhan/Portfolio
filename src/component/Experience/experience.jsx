"use client";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Kognito Kube Private Limited",
      companyLink: "https://kognitokube.com/",
      duration: "April 2025 – June 2025",
      techStack: [
        "React.js",
        "Next.js",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
      ],
      description: [
        "Worked as a Frontend Developer Intern, contributing to the development and enhancement of responsive web applications under the guidance of a senior developer with 12 years of industry experience.",
        "Developed and maintained dynamic user interfaces using React.js and Next.js, ensuring optimal performance and user experience.",
        "Collaborated closely with backend developers utilizing NestJS and Node.js to integrate APIs and improve frontend-backend communication.",
        "Worked with databases including PostgreSQL and MongoDB, gaining hands-on experience in data handling and API consumption.",
        "Assisted in debugging, testing, and optimizing application components while adhering to best coding practices and project standards.",
      ],
    },
  ];

  return (
    <section
      id="Experiences"
      className="py-16 px-4 sm:px-6 text-white transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-purple-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-1">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-400">
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 underline transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-gray-600">•</span>
                  <span className="text-purple-400">{exp.duration}</span>
                </div>
              </div>

              {/* Tech Stack - Compact */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-purple-900/30 text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description - Compact List */}
              <ul className="list-none space-y-1.5">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-purple-400 mt-0.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
