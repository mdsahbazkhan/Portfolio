"use client";
import { FaReact, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { MdCode } from "react-icons/md";

// Skills in developer priority order
const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Material-UI", icon: <MdCode className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-20 
                 flex flex-col items-center  transition-colors duration-500"
    >
      <h2 className="text-6xl font-bold mb-10">Skills</h2>

      {/* Skills container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
