"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import { MdCode } from "react-icons/md";

// Skills in developer priority order
const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Material-UI", icon: <MdCode className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white" />,
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section
      id="Skills"
      className="py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skills container */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="group relative bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                       hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20
                       border border-purple-500/10 hover:border-purple-500/30
                       transition-all duration-300 hover:scale-105 hover:-translate-y-2
                       shadow-lg hover:shadow-purple-500/20"
            variants={item}
          >
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center justify-center">
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-center group-hover:text-purple-300 transition-colors">
                {skill.name}
              </p>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
