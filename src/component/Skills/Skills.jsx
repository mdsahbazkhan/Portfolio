"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiRedux,
  SiVite,
  SiPostman,
  SiFramer,
  SiFastapi,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiNetlify,
  SiOpenai,
} from "react-icons/si";
import { MdCode } from "react-icons/md";
import { Bot, Layers } from "lucide-react";

// Skill categories
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Material UI", icon: <MdCode className="text-blue-500" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },

      { name: "shadcn/ui", icon: <Layers className="text-sky-400" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
      { name: "REST API", icon: <MdCode className="text-blue-400" /> },
      {
        name: "JWT Authentication",
        icon: <SiJsonwebtokens className="text-pink-400" />,
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <MdCode className="text-blue-500" /> },
      { name: "Cloudinary", icon: <MdCode className="text-blue-300" /> },
    ],
  },
  {
    id: "ai",
    title: "AI-Assisted Development",
    skills: [
      { name: "ChatGPT", icon: <SiOpenai className="text-green-400" /> },
      { name: "Claude", icon: <SiJsonwebtokens className="text-orange-400" /> },
      { name: "GitHub Copilot", icon: <FaGithub className="text-white" /> },
      { name: "Amazon Q", icon: <span className="text-orange-400">Q</span> },
      { name: "KILO", icon: <Bot className="text-purple-400" /> },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    skills: [
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Render", icon: <SiRender className="text-purple-400" /> },
    ],
  },
];

// Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="Skills"
      className="py-16 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === category.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-purple-300 border border-gray-700"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl"
      >
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {activeCategory?.skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-gray-800/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm
                         border border-purple-500/10 hover:border-purple-500/30
                         hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20
                         transition-all duration-300 hover:scale-105
                         shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 transform group-hover:scale-110 transition">
                  {skill.icon || <MdCode />}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-center group-hover:text-purple-300">
                  {skill.name}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
