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
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-purple-400 text-center md:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 pl-16 md:pl-12 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Circle with glow */}
              <div className="absolute left-5 md:left-[-9px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 z-10" />

              {/* Content Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-400 mb-3">
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 underline transition-colors inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>{" "}
                  <span className="text-gray-500">•</span>{" "}
                  <span className="text-purple-400">{exp.duration}</span>
                </p>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-purple-300">
                    Tech Stack:
                  </span>{" "}
                  <span className="inline-flex flex-wrap gap-2 mt-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </p>
                <ul className="list-none space-y-2">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-purple-400 mt-1.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
