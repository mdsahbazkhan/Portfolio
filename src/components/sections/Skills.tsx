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
      className="relative flex min-h-[72svh] items-center py-24 sm:py-32 bg-gray-900/30"
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
            className="text-4xl sm:text-5xl font-semibold tracking-[-.05em] text-white mb-4"
          >
            06 / Toolkit
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
              aria-pressed={activeTab === category.id}
              className={`px-4 py-2 text-sm transition-colors ${
                activeTab === category.id
                  ? "border-b border-teal-100 text-teal-100"
                  : "border-b border-transparent text-stone-400 hover:text-stone-100"
              }`}
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
            <div className="flex flex-wrap gap-x-7 gap-y-6 border-t editorial-rule pt-7">
              {activeCategory?.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group flex items-center gap-3 py-2"
                >
                  <div className="text-xl opacity-70 transition-opacity group-hover:opacity-100">
                    <SkillIcon skill={skill} />
                  </div>
                  <p className="text-sm font-medium text-stone-300 group-hover:text-teal-100 transition-colors">
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
