"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[88svh] items-center py-24 sm:py-32 bg-[#0d1011]/70"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="about-heading"
            className="eyebrow mb-10 text-center"
          >
            01 / The developer
          </h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="prose prose-lg prose-invert max-w-none text-[1.15rem] sm:text-[1.45rem]">
            <p className="text-stone-300/90 leading-[1.8] mb-7">
              A <span className="text-teal-200 font-semibold">B.Tech Computer Science graduate</span> who specializes in building
              full-stack web applications and Generative AI systems. My core stack spans{" "}
              <span className="text-teal-200 font-semibold">React.js, Next.js, Node.js, FastAPI, and TypeScript</span> on the web
              side, and <span className="text-teal-200 font-semibold">LangChain, RAG, ChromaDB, HuggingFace, and LLM APIs</span> on the
              AI side — I work across both.
            </p>

            <p className="text-stone-300/90 leading-[1.8] mb-7">
              I completed a <span className="text-teal-200 font-semibold">Frontend Developer Internship at Kognito Kube</span>,
              shipping 10+ production components and integrating 10+ REST APIs on a live LMS platform. Outside of work, I built{" "}
              <span className="text-teal-200 font-semibold">Velquix</span> — a full-stack GenAI PDF chatbot using RAG, real-time streaming,
              LangSmith observability, and semantic search — and{" "}
              <span className="text-teal-200 font-semibold">CollabTasky</span>, a real-time SaaS collaboration platform with an AI-powered
              task assistant.
            </p>

            <p className="text-stone-300/90 leading-[1.8]">
              <span className="text-teal-200 font-semibold">I&apos;m actively looking for</span> <span className="text-teal-200 font-semibold">Full Stack or AI Engineering roles</span> where I can ship
              real features, work with strong engineers, and keep building at the intersection of web and intelligent systems. I have 20+
              shipped projects, HackerRank certifications in React, JavaScript, SQL, and Problem Solving, and a strong bias toward writing
              clean, production-ready code.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="flex items-start gap-4 p-5 bg-gray-800/30 rounded-xl border border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <GraduationCap className="h-6 w-6 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Education</p>
                <p className="font-semibold text-white">B.Tech Computer Science</p>
                <p className="text-sm text-gray-400">Building scalable applications</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-5 bg-gray-800/30 rounded-xl border border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Briefcase className="h-6 w-6 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Focus</p>
                <p className="font-semibold text-white">Full Stack & GenAI</p>
                <p className="text-sm text-gray-400">Production-oriented development</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
