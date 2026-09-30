"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SkillIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 bg-gray-900/30"
      aria-labelledby="skills-heading"
    >
      <Container className="relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with across the full stack, from UI to AI.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-cyan-300 border border-gray-700"
              }}
            `}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {activeCategory?.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative bg-gray-800/30 rounded-xl p-4 flex flex-col items-center justify-center border border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                    <SkillIcon skill={skill} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-center text-gray-300 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}