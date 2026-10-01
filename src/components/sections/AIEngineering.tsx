"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aiEngineeringAreas, engineeringCaseStudies } from "@/data/ai-engineering";
import { Container } from "@/components/ui/Container";
import { ArchitectureNetwork, RetrievalNetwork } from "@/components/sections/TechnicalNetworks";

function CaseStudyItem({
  item,
  index,
  defaultOpen = false,
}: {
  item: typeof engineeringCaseStudies[0];
  index: number;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="border-b border-gray-700/50 last:border-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-700/20 transition-colors"
      >
        <span>
          <span className="block text-base font-semibold text-white">
            {item.title}
          </span>
              <span className="mt-1 block font-mono text-xs text-gray-400">
                {item.category} · {item.tags.join(" · ")}
              </span>
        </span>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">
              {item.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function AIEngineering() {
  return (
    <section
      id="engineering"
      className="relative py-24 sm:py-32 bg-[#0d1011]/70"
      aria-labelledby="engineering-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-100/[.04] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-900/[.06] rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        {/* AI Engineering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-2xl mb-8">
            <p className="eyebrow">
              03 / Intelligent systems
            </p>
            <h2
              id="ai-engineering-heading"
              className="mt-3 text-4xl font-semibold tracking-[-.04em] text-white md:text-5xl"
            >
              AI Engineering
            </h2>
            <p className="mt-3 text-gray-400">
              The same product mindset as full-stack work, applied to retrieval,
              embeddings, and LLM-backed features — especially in Velquix.
            </p>
          </div>

          <RetrievalNetwork />

          <div className="grid gap-4 md:grid-cols-2">
            {aiEngineeringAreas.map((area, index) => (
              <motion.article
                key={area.title}
                className="border editorial-rule bg-white/[.018] p-6 transition-colors duration-300 hover:bg-white/[.035]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-1 font-mono text-xs text-teal-100">
                  {area.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {area.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Engineering & System Design Section */}
        <motion.div
          id="systems"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="scroll-mt-24"
        >
          <div className="max-w-3xl mb-8">
            <p className="eyebrow">
              04 / System design
            </p>
            <h2
              id="system-design-heading"
              className="mt-3 text-4xl font-semibold tracking-[-.04em] text-white md:text-5xl"
            >
              Engineering & System Design
            </h2>
            <p className="mt-3 text-gray-400">
              Design notes from my own projects — not professional system-design
              roles. Each one is a learning case study tied to shipped code.
            </p>
          </div>

          <ArchitectureNetwork />

          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden">
            {engineeringCaseStudies.map((item, index) => (
              <CaseStudyItem
                key={item.title}
                item={item}
                index={index}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
